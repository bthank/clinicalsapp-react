import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import ChartGenerator from './components/ChartGenerator';

function App() {
   /* Switch says that based on the input url it should switch to a 
      particular component. 
      
      Here different routes are being configured using Route and Switch.*/
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/patientDetails/:patientId" component={CollectClinicals} />
        <Route exact path="/addPatient" component={AddPatient} />
        <Route exact path="/analyze/:patientId" component={AnalyzeData} />
        <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator} />
      </Switch>
    </div>
  );
}

export default App;
