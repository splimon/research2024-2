import Link from 'next/link';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" className="vh-100 d-flex align-items-center">
      <Row className="align-middle">
        <Col className="col-sm-8 d-flex flex-column justify-content-center align-content-center">
          <h1>Introduction to Python Programming</h1>
          <br />
          <h3>Ready to Learn?</h3>
          <br />
          <Link href="/python-introduction">
            <Button type="button" className="btn btn-primary">Let&apos;s Begin!</Button>
          </Link>
        </Col>
      </Row>
      <Col>
        <Image
          src="pythongif.gif"
          alt="Python Logo Gif"
          height={500}
        />
      </Col>
    </Container>
  </main>
);

export default Home;
