import { Alert,Button } from 'react-bootstrap';
import React,{useState} from 'react';

function CookiesAlert(props) {
    const [show, setShow] = useState(localStorage.getItem('cookies')?false:true);

    if (show) {
      return (
        <Alert variant="light" className="cookiesAlert" onClose={() => {setShow(false);localStorage.setItem('cookies',true)}} dismissible>
          <p>
          By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively
          </p>
        </Alert>
      );
    }
    return <></>
}

export default CookiesAlert;