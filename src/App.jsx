import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import WhoWeAre from './Pages/WhoWeAre';
import WhatWeDo from './Pages/WhatWeDo';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/whoweare' component={WhoWeAre} />
     <Route exact path='/whatwedo' component={WhatWeDo} />
     <Route  path='*' component={ErrorPage} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
