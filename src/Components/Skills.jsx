import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Styles/style1.css'

function Skills() {
  return (
    <>
      <div id='skills' className='p-5 d-flex flex-column text-align-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center flex-column mt-3 mb-3 text-justify'>
          <h3><b className="heading" style={{color:"#AB274F", fontSize:"65px"}}>Skills</b></h3>
        </div>
        <div>
          <Row className='mt-5'>
            <Col lg={6} xs={12} md={6} className='mt-2'>
              <div class="skill-container">
                <div class="progress-bar">
                  <div class="bar-container">
                    <h6>HTML</h6>
                    <span>95%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar html-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>CSS</h6>
                    <span>95%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar css-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>JAVASCRIPT</h6>
                    <span>80%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar js-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>PYTHON</h6>
                    <span>90%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar py-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>PHP</h6>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar php-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>REACT</h6>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar react-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>REDUX</h6>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar redux-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>NODE JS</h6>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar node-bar"></div>
                  </div>
                  <br />
                </div>
              </div>
            </Col>

            <Col lg={6} xs={12} md={6} className='mt-2'>
              <div class="skill-container">
                <div class="progress-bar">
                  <div class="bar-container">
                    <h6>MONGO DB</h6>
                    <span>85%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar mongo-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>MYSQL</h6>
                    <span>85%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar sql-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>DATA SCIENCE</h6>
                    <span>75%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar data-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>MACHINE LEARNING</h6>
                    <span>75%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar ml-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>JAVA</h6>
                    <span>70%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar java-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>BOOTSTRAP</h6>
                    <span>80%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar boot-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>C</h6>
                    <span>85%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar c-bar"></div>
                  </div>
                  <br />
                  <div class="bar-container">
                    <h6>C++</h6>
                    <span>85%</span>
                    <div class="base-bar"></div>
                    <div class="base-bar c-bar"></div>
                  </div>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </div>


      </div>

    </>
  )
}

export default Skills