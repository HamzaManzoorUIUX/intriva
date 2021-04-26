import { Modal } from 'react-bootstrap';
import React,{useState} from 'react';
import ScreenSide from "../assets/img/Screen Shot 2021-03-10 at 02.34.28.png";

function StickyFooter(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
<>
        <img src={ScreenSide} onClick={handleShow} className={`ScreenSide ${props.home!==undefined?'active':''} ${props.currentPage===2?'mt-fotPic':''}`} alt='img' />
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>PRI and LinkedIn Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='card p-2 mb-3'>
         <h3>
          Environmental, Social and Corporate Governance
          </h3>
          <p>
          We are committed to driving sustainable value and have integrated Environmental, Social and Corporate Governance into our approach, with an in-depth ESG policy. We are signatories of Principals for Responsible Investment (PRI).
          </p>
          <a href=" https://www.unpri.org" target='_blank' className='btn btn-dark'>
          Click here to visit the PRI Website
          </a>
         </div>
         <div className='card p-2 my-3'>
           <h3>
           LinkedIn
           </h3>
           <p>
           Please visit us and follow us on social media.
           </p>
          <a href=" https://www.linkedin.com/company/intriva-capital/mycompany/" target='_blank' className='btn btn-primary'>
           Click here to visit our LinkedIn page
          </a>
         </div>
        </Modal.Body>
      </Modal>

</>
    );
}

export default StickyFooter;