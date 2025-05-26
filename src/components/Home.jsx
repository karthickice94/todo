import React from 'react'
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    const images = Array.from(
      { length: 9 },
      (_, i) => `/images/img${i + 1}.jpg`
    );

  return (
    <Container className="p-4 mx-auto d-flex flex-column text-center"  >
      <Row style={{ minHeight: "100%" }} className="align-items-center">
        {/* Left Side: Heading + Button */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-center h-100 mb-4"
         >
          <div>
            <h5>Explore Delicious Dishes</h5>
            <Button variant="primary">Order Now</Button>
          </div>
        </Col>

        {/* Right Side: 3x3 Image Grid */}
        <Col xs={12} md={8}>
        <div className='my-box'>

        
          <Row className="g-2">

            {images.map((src, idx) => (
              <Col xs={12}sm={6} md={4}  key={idx}>
                <img
                  src={src}
                  alt={`img-${idx}`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    margin: "5px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  />
              </Col>
            ))}
          </Row>
            </div>
        </Col>
      </Row>
    </Container>
  );

}

export default Home