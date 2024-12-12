'use client';

import { Row, Col, Container, Card, ProgressBar } from 'react-bootstrap';

const PythonComments = () => (
  <>
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 3 }}>
          <h2 className="padding"><strong><u>Python Comments</u></strong></h2>

          <h3 className="padding">Python Comments</h3>
          <p>Python has commenting capability for the purpose of in-code documentation.</p>
          <p>Comments start with a #, and Python will render the rest of the line as a comment:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <p>Comments in Python:</p>

            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="commentcolor" style={{ color: 'green' }}>
                  #This is a comment.
                  <br />
                </span>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>print</span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>&quot;Hello, World!&quot;</span>
                )
                <span className="pythonnumbercolor" style={{ color: 'red' }} />
              </span>
            </div>
          </Card>

          <p>Comments can be placed at the end of a line, and Python will ignore the rest of the line:</p>

          <Card className="example-card">
            <h3 className="padding-bottom">Example</h3>
            <div className="w3-code notranslate pythonHigh">
              <span className="pythoncolor" style={{ color: 'black' }}>
                <span className="pythonkeywordcolor" style={{ color: 'mediumblue' }}>
                  print
                </span>
                (
                <span className="pythonstringcolor" style={{ color: 'brown' }}>
                  &quot;Hello, World!&quot;
                </span>
                )
                <span className="commentcolor" style={{ color: 'green' }}>
                  #This is a comment
                </span>
              </span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <ProgressBar striped variant="success" now={48} />
    </Container>
  </>
);

export default PythonComments;
