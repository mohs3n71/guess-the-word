import React, { FormEventHandler, FunctionComponent, useState } from 'react';
import PageTemplate from 'components/pageTemplate';
import HttpRequest from 'utils/HttpRequest';
import Form from 'components/form';
import Input from 'components/input';
import Button from 'components/button';
import Modal from 'components/modal';
import Loading from 'components/loading';

const Home: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setOpen(false);
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
      </Modal>
      <PageTemplate
        pageTitle="Guess The Word"
        footerDescription="You Can only play this game 2 times per day"
      >
        <div
          className="d-flex w-100 h-100 justify-content-center align-items-center mt-5">
          <Form
            formTitle="Guess the word and submit"
            onSubmit={submitHandler}
          >
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
        {loading && <Loading />}
      </PageTemplate>
    </>
  );
}

export default Home;
