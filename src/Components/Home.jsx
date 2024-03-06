import React from 'react'
import { Row, Col } from 'react-bootstrap'
import img from '../assets/1.png'
import resume from '../assets/Aswathy-Resume.pdf'

function Home() {
  return (
    <>
      <div id='home' className='mb-5 d-flex text-align-center justify-content-center'>
        <div className='mt-1 p-5'>
          <Row className='ms-5'>
            <Col className='mt-5 pt-5' lg={6} xs={12} md={6}>
              <h2 style={{ color: "black" }}>I'm <span><b style={{ color: "#AB274F", fontSize:"55px" }}>Aswathy Raj</b></span></h2>
              
              <h4>Full Stack Developer</h4>


              <br />
              <p className='justify-content'>As a Full Stack Developer, I am passionate about crafting robust and user-centric web applications. 
              With a blend of frontend finesse and backend prowess, I strive to create seamless digital experiences that leave a lasting impression.</p>
              <br />
              <div className="cv-btn" data-aos='fade-right' data-aos-duration="1600">
                <a href={resume} download='resume'>
                  <button style={{ backgroundColor: '#AB274F', color:"white"}} className='dnld p-2 rounded'>Download Resume</button>
                </a>
              </div>

            </Col>
            <Col lg={6} className='d-flex align-items-center justify-content-center' xs={12} md={6}>
              <div className='img-cls'>
              <img className='cls-img' src={img} alt="" height={'500px'} />
              </div>
              
            </Col>
          </Row>
        </div>
      </div>

    </>
  )
}

export default Home