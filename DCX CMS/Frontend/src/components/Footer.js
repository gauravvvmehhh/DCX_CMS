import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  CDBIcon } from 'cdbreact';


const Footer = () => {
  return (
    <footer style={{backgroundColor:'black', color:'whitesmoke'}}>
      <Container>
        <Row>
          <Col>
            <p>&copy;2023 DCX CMS</p>
            <p>All Rights Reserved  </p>
          </Col>
          <Col>
            <a href='#p'>Privacy Policy</a>
            <br/>
            <a href='#s'>Terms of Use</a>
          </Col>
          
          <Col>
            
            <CDBIcon fab icon="facebook-f" />
         
          
            <CDBIcon fab icon="twitter" />
          
            <CDBIcon fab icon="instagram" />
            </Col>
        
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
