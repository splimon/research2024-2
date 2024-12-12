'use client';

import Link from 'next/link';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const FooterButtons = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container className="p-5">
      <div className="d-flex justify-content-between">
        <Button
          className="btn btn-primary"
          onClick={handleBack}
          style={{ position: 'absolute', left: '10px' }}
        >
          Back
        </Button>
        <Link href="/add">
          <Button className="btn btn-primary" style={{ position: 'absolute', right: '10px' }}>
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default FooterButtons;
