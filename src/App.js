import  React, {useEffect} from 'react';
import './App.css';

//redux store settup
import {Provider} from 'react-redux'
import store from './store'

//react router dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Layout
import Sidebar from "./component/Layout/Sidebar";
import { AboutUs, OurAim, OurVision } from "./component/Trails/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./component/Trails/Services";
import { Events, EventsOne, EventsTwo } from "./component/Trails/Events";
import Contact from "./component/Trails/ContactUs";
import Table from "./component/Table/Table";
import Support from "./component/Trails/Support";
//  import test from '';

const App =()=>{
  
  return (
    <Provider store ={store}>
      <Router>
        <Sidebar />  
          <switch>
            <Route Exact path="/ictgcw" component={Contact}/>
            <Route Exact path="/GlobalM" component={Support}/>
          </switch>  
      </Router>
    </Provider>
  );
}
export default App;























































/*
import { useFlip, FlipProvider} from 'react-easy-flip'
import { easeInOutQuint } from 'react-easy-flip';
<div data-flip-root-id="root">
          <div data-flip-id="flipped" />
        </div>
const animationOptions = {
    duration: 2000,
    easing: easeInOutQuint,
  }
  useFlip(rootId, animationOptions) */

  /*
  import {TextAnimation, Random } from 'react-animated-text';
  <Random 
          text="I C T G C W PHASE 2"
          effectChange={3.0}
        />
   */