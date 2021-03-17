import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import WhoWeAre from './Pages/WhoWeAre';
import WhatWeDo from './Pages/WhatWeDo';
import Media from './Pages/Media';
import Artical from './Pages/Media/Artical';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/whoweare' component={WhoWeAre} />
     <Route exact path='/whatwedo' component={WhatWeDo} />
     <Route exact path='/media' component={Media} />
     <Route exact path='/artical/:id' component={Artical} />
     <Route exact path='/contact-us' component={ContactUs} />
     <Route  path='*' component={ErrorPage} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
