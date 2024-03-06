import React from 'react';
import '../Styles/style1.css';

function Contact() {
  return (
    <>
      <div id='contact' className='d-flex flex-column text-align-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center flex-column mt-3 mb-3 text-justify'>
          <h3><b className='heading' style={{ color:"#AB274F", fontSize:"65px" }}>Contact</b></h3>
        </div>

        <div className='d-flex align-items-center justify-content-center mt-5 flex-wrap'>
          <a href="https://wa.me/919895547621" target='_blank'>
            <div id='contactwhat' className='icon-container text-success me-4 mb-4'>
              <i id='contactIcon1' className="fab fa-whatsapp fa-2x"></i>
            </div>
          </a>
          <a href="mailto:achurajaswathy@gmail.com">
            <div id='contactmail' className='icon-container text-danger me-4 mb-4'>
              <i id='contactIcon2' className="fas fa-envelope fa-2x"></i>
            </div>
          </a>
          <a href="https://github.com/Achu-Raj-Aswathy" target='_blank'>
            <div id='contactgit' className='icon-container text-dark me-4 mb-4'>
              <i id='contactIcon3' className="fab fa-github fa-2x"></i>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aswathy-raj/" target='_blank'>
            <div id='contactlink' className='icon-container text-primary me-4 mb-4'>
              <i id='contactIcon4' className="fab fa-linkedin fa-2x"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/_aswathy___raj_/" target='_blank'>
            <div id='contactinsta' className='icon-container text-dark me-4 mb-4'>
              <i id='contactIcon5' className="fab fa-instagram fa-2x"></i>
            </div>
          </a>
        </div>
      </div>

      <hr className='divider' />
    </>
  );
}

export default Contact;
