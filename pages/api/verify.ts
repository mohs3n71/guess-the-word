import { NextApiRequest, NextApiResponse } from "next"
import fs from 'fs';

const answer: string = 'timcheh';

const writeFile = (fileDB): void => {
  fs.writeFile('fileDB.json', JSON.stringify(fileDB), (error) => {
    console.log(error);
  });
}

const verifyWord = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const date = new Date();
    const today: string = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;

    const saveAndSendResult = (): void => {
      writeFile(fileDB);
      if (word === answer) {
        res.status(200).send({ message: 'congratulation you won!' });
      } else {
        res.status(400).send({ message: 'incorrect answer' })
      }
    }

    const word = req.body.word;
    if (!word) {
      res.status(400).send({
        message: 'bad request, you must send a word',
      });
      return;
    }

    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress

    let fileDB = [];
    try {
      fileDB = JSON.parse(fs.readFileSync('fileDB.json').toString());
    } catch (error) {
      console.log("no db file");
    }

    const index = fileDB.findIndex((item) => item.ip === ip);

    if (index !== -1) {
      if (fileDB[index].lastTry === today) {
        if (fileDB[index].remainingChances === 0) {
          res.status(400).send({
            message: 'You have used your 2 chances for today, please try again tomorrow',
          });
          return;
        } else {
          fileDB[index].remainingChances -= 1;
          saveAndSendResult();
        }
      } else {
        fileDB[index].lastTry = today;
        fileDB[index].remainingChances = 1;
        saveAndSendResult();
      }
    }
    else {
      fileDB.push({
        remainingChances: 1,
        ip,
        lastTry: today,
      });
      saveAndSendResult();
    }
  } else {
    res.status(400).send({
      message: `${req.method} method is not supported in this route`,
    });
  }

}

export default verifyWord;
