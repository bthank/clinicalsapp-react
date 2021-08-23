import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AnalyzeData extends React.Component {

    state = {
        clinicalData: []
    }

    componentWillMount(){
        axios.get("/clinicalservices/api/patients/analyze/" + this.props.match.params.patientId)
            .then(response => {
                this.setState(response.data);
            })
    }

    render(){
        /* the code within the render return is JSX code which gets converted to HTML
        JSX is a syntax extension to JavaScript
        */
        return (<div>
                    <h2>Patient Details:</h2>
                    First Name: {this.state.firstName}
                    Last Name: {this.state.lastName}
                    Age: {this.state.age}
                    <br/>
                    <h2>Clinical Report:</h2>
                    {this.state.clinicalData.map(eachEntry => <TableCreator item={eachEntry} patientId={this.state.id}/>)}
                </div>);
    }

}
/* For each component there will be a separate table that is created */
class TableCreator extends React.Component{
        /* Retrieve the clinical data that is passed into this component using
           this.props.item 
           
           All of these field names are from the backend in Spring Boot.
        */


    render(){
        var eachEntry = this.props.item;
        var patientId = this.props.patientId;

        return  <div>
                    <table>
                        <tr><td><b>{eachEntry.componentName}</b></td></tr>
                        <tr>
                            <td>{eachEntry.componentName}</td>
                            <td>{eachEntry.componentValue}</td>
                            <td>{eachEntry.measuredDateTime}</td>
                            <td><Link to={'/chart/' + eachEntry.componentName + '/' + patientId}><img src={require('../Logo.png')} height='20' width='20' /></Link></td>
                        </tr>
                        <tr></tr>
                    </table>
                </div>;
    }
}
/* export out the component so that it can be used in other components */
export default AnalyzeData;