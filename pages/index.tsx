import React, { useEffect, FunctionComponent } from 'react';
import PageTemplate from 'components/pageTemplate';
import HttpRequest from 'utils/HttpRequest';
import Form from 'components/form';
import Input from 'components/input';
import Button from 'components/button';

const Home: FunctionComponent = () => {

  useEffect(() => {
    const request = new HttpRequest('GET', 'http://localhost:3000/api/verify');
    request.send();
  }, []);

  return (
    <PageTemplate
      pageTitle="Guess The Word"
      footerDescription="You Can only play this game 2 times per day"
    >
      <div
        className="d-flex w-100 h-100 justify-content-center align-items-center"
        style={{
          marginTop: 100,
        }}>
        <Form formTitle="Guess the word and submit">
          <Input
            inputID="wordInput"
            labelText="Word"
            placeholder="Enter Your Guess"
            type="text" />
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </PageTemplate>
  );
}

export default Home;
