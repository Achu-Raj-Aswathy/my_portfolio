import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Styles/style1.css';

function About() {
    return (
        <>
            <div id='about' className='p-5 d-flex flex-column text-align-center justify-content-center'>
                <div className='d-flex align-items-center justify-content-center flex-column mt-3 mb-3 text-justify'>
                    <h3><b className="heading" style={{ color: "#AB274F", fontSize: "65px" }}>About Me</b></h3>
                </div>
                <div className='container'>
                    <Row className='flex-md-row-reverse'>
                        <Col lg={6} xs={12} md={6} className='mt-2 pt-5 p-4'>
                            <p className='d-flex text-justify'>Hello! I'm Aswathy Raj, a passionate and driven Full Stack Developer with a keen interest in creating innovative solutions and enhancing user experiences.
                                I recently graduated with a degree in Computer Science and am eager to apply my skills and knowledge in a professional setting.
                                My journey into the world of programming began with a fascination for technology and a desire to solve real-world problems through code.
                                I thrive in dynamic environments where I can collaborate with others to tackle challenges and continuously learn and grow.</p>
                        </Col>
                        <Col lg={6} xs={12} md={6} className='pt-5 p-4'>
                            <h4 className='d-flex align-items-center justify-content-center mt-3'><b style={{ fontSize: "35px" }}>Personal Information</b></h4>
                            <br />
                            <p>
                                Name: Aswathy Raj
                                <br />
                                Date of Birth: 28/11/2001
                                <br />
                                Languages Known: English, Malayalam, Hindi
                                <br />
                                Location: Muvattupuzha, Ernakulam
                                <br />
                                Hobbies: Listening music, Cycling, Cricket Enthusiast, Watching dramas
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;
