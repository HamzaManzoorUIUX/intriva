import React from 'react';
function MyMap({ activeCard }) {
  const data = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.082562189015!2d-0.13870408422983624!3d51.51170127963586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3183f58929%3A0x15b84bdd4689b417!2sIntriva%20Capital%20Advisors%20LLP!5e0!3m2!1sen!2s!4v1616677159545!5m2!1sen!2s",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.518221944402!2d8.672662315719245!3d50.11402407943038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0fb2de386441%3A0x2aadac1a4cafe84d!2sIntriva%20Capital%20Advisors%20GmbH!5e0!3m2!1sen!2s!4v1616677438226!5m2!1sen!2s",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.070947427623!2d-3.686916684603684!3d40.429427879363644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422895ce372dcb%3A0xadd27d5648fe9c6e!2sCalle%20de%20Lagasca%2C%2084%2C%2028001%20Madrid%2C%20Spain!5e0!3m2!1sen!2s!4v1616677499626!5m2!1sen!2s"
  ]
console.log(activeCard);
  return (
    <div className='myMapMain'>
      <div className={activeCard===1?'d-block':'d-none'}>
        <iframe title="London" src={data[0]} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className={activeCard===2?'d-block':'d-none'}>
        <iframe title="Frankfurt" src={data[1]} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className={activeCard===3?'d-block':'d-none'}>
        <iframe title="Madrid" src={data[2]} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default MyMap;