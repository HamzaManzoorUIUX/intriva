import { useEffect } from "react";

function ScrollScreen(props) {
    useEffect(() => {
        window.scrollTo(0, window.innerHeight);
      }, []);
    console.log('bottom');
      return null;
}

export default ScrollScreen;