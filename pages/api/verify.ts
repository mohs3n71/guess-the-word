import { NextApiRequest, NextApiResponse } from "next"
import fs from 'fs';

const verifyWord = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers);
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress
  console.log(ip);

  fs.readFile('fileDb.json', (error, buffer) => {
    if (error) {
      // console.log(error);
    }
    console.log(buffer?.toString());
  })
  res.send("ok");
}

export default verifyWord;
