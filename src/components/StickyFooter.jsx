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
          <Modal.Title>Value Able Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <a href=" https://www.unpri.org" target='_blank' className='btn btn-dark'>
              PRI
          </a>
          <a href=" https://www.linkedin.com/company/intriva-capital/mycompany/" target='_blank' className='btn btn-primary'>
              LinkedIn
          </a>
        </Modal.Footer>
      </Modal>

</>
    );
}

export default StickyFooter;