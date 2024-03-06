import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import media from '../assets/mediaPlayer.jpeg'
import ekart from '../assets/eKart.jpeg'
import restaurant from '../assets/restaurant.jpeg'
import counter from '../assets/counter.jpeg'
import simpleInterest from '../assets/simpleInterest.png'
import netflix from '../assets/netflix.png'

function Projects() {
  const projects = [
    {
      title: 'Media Player',
      image: media,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/Media-player',
      websiteLink: 'https://media-player-pied.vercel.app/'
    },
    {
      title: 'E-Kart',
      image: ekart,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/ekart-redux',
      websiteLink: 'https://ekart-redux-roan.vercel.app/'
    },
    {
      title: 'Restaurant',
      image: restaurant,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/restaurant-redux',
      websiteLink: 'https://restaurant-redux-tawny.vercel.app/'
    },
    {
      title: 'Netflix Clone',
      image: netflix,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/netflix',
      websiteLink: 'https://netflix-delta-ashy.vercel.app/'
    },
    {
      title: 'Counter',
      image: counter,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/counter-redux',
      websiteLink: 'https://counter-redux-sandy.vercel.app/'
    },
    {
      title: 'Simple Interest',
      image: simpleInterest,
      githubLink: 'https://github.com/Achu-Raj-Aswathy/simpleInterest',
      websiteLink: 'https://simple-interest-amber.vercel.app/'
    }
  ];
  return (
    <>
      <div id='projects' className='d-flex flex-column text-align-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center mt-3 text-justify'>
          <h3><b className="heading p-5 " style={{ color: "#AB274F", fontSize: "65px" }}>Projects</b></h3>
        </div>
        <div className='d-flex align-items-center justify-content-center ms-5'>
          <Row className='container'>
          {projects.map((project, index) => (
              <Col key={index} lg={4} md={6} sm={12} className='mt-5'>
                <Card style={{ width: '13rem' }} id='card'>
                  <Card.Img height={'200px'} width={'100%'} variant='top' src={project.image} />
                  <Card.Body style={{ width: '100%' }} className='w-100'>
                    <Card.Title><b className='d-flex justify-content-center'>{project.title}</b></Card.Title>
                    <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                      <Col xs={12} className='mb-2'>
                        <a href={project.githubLink} style={{ textDecoration: "none" }} target="_blank">
                          <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                            <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                          </Button>
                        </a>
                      </Col>
                      <Col xs={12} className='mb-1'>
                        <a href={project.websiteLink} style={{ textDecoration: "none" }} target="_blank">
                          <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                            <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                          </Button>
                        </a>
                      </Col>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Projects