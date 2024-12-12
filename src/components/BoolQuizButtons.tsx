'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

const BoolQuizButtons = () => {
  const handleBack = () => {
    window.history.back();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="p-5">
        <div className="d-flex justify-content-between">
          <Button
            className="btn btn-primary"
            onClick={handleBack}
            style={{ position: 'absolute', left: '10px' }}
          >
            Back
          </Button>
          <Button className="btn btn-danger" style={{ position: 'absolute', right: '10px' }} onClick={handleShow}>
            Finish Lesson
          </Button>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Well Done!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations on completing the Introduction to Python lesson!
          <br />
          <br />
          <strong>Important Information (Please read carefully):</strong>
          <br />
          <br />
          You are about to take a quiz based on the material covered on this website. Before proceeding,
          please ensure you have thoroughly reviewed this content. Take as much time as you need to revisit
          this material.
          <br />
          <br />
          Once you click on &quot;Begin Quiz,&quot; you will
          {' '}
          <u>not</u>
          {' '}
          be able to return to this page.
          If you feel confident in your understanding, you may proceed to the quiz.
          <br />
          <br />
          Good luck ☺
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link href="/quiz">
            <Button variant="danger">
              Begin Quiz
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BoolQuizButtons;
