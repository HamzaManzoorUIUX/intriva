import { Modal } from 'react-bootstrap';
import React,{useState} from 'react';
import LinkedIn from "../assets/img/LinkedIn.png";
import PRI from "../assets/img/UN+PRI+logo+copy.png";

function StickyFooter(props) {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
<>
<div className={`ScreenSide ${props.home!==undefined?'active':''} ${props.currentPage===2?'mt-fotPic':''}`}>
        <div className="d-flex px-2 h-100 align-items-center " style={{backgroundColor:"#161E26",borderTopRightRadius:'20px'}}>
        <img src={PRI} onClick={()=>setShow(true)} className="curser mr-2" height="30px" alt='img' />
        <img src={LinkedIn} onClick={()=>setShow2(true)} className="curser"  height="30px" alt='img' />
        </div>
</div>
        <Modal show={show} onHide={()=>setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
          Environmental, Social and Corporate Governance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='card p-2 mb-3'>
          <p>
          We are committed to driving sustainable value and have integrated Environmental, Social and Corporate Governance into our approach, with an in-depth ESG policy. We are signatories of Principals for Responsible Investment (PRI).
          </p>
          <a href=" https://www.unpri.org" target='_blank' className='btn btn-dark'>
          Click here to visit the PRI Website
          </a>
         </div>
       </Modal.Body>
      </Modal>
        <Modal show={show2} onHide={()=>setShow2(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>LinkedIn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='card p-2 my-3'>
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