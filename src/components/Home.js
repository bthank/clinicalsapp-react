import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    /* Home will retrieve patient details from the backend and and display it 
       in a tabular format.*/

    /* define state for this component so that it can be used later in the render().
       patientData will be an empty array to start with before the axios get call. */
    state = {
        patientData:[]
    }

    componentWillMount(){
        axios.get('/clinicalservices/api/patients/')
            .then(response => {
                /* response.data will give us the JSON data that comes back from
                   the axios REST call.  We will then set state to that data. */
                const patientData = response.data;
                this.setState({patientData} )
            })
    }

    render(){
        /* the code within the render return is JSX code which gets converted to HTML
        JSX is a syntax extension to JavaScript

        RowCreator is a component that is passed a patient and will create a table
        row from it.
        */
        return (<div>
            <h2>Patient:</h2>
            <table align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.patientData.map(patient => <RowCreator item={patient}/>)}
                </tbody>
            </table>
            <br/>
            <Link to={'/addPatient'}><font size="5">Register Patient</font></Link>
        </div>);
    }

}


class RowCreator extends React.Component {

    render(){
        /* Retrieve the patient that is passed into this component using
           this.props.item 
           
           All of these field names are from the backend in Spring Boot.
        */
        var patient = this.props.item;
        return  <tr>
                    <td>{patient.id}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.age}</td> 
                    <td><Link to={'/patientDetails/' + patient.id}>Add Patient Data</Link> </td>                    
                    <td><Link to={'/analyze/' + patient.id}>Analyze Patient Data</Link> </td>                    
                </tr>;
    }
}

/* export out the component so that it can be used in other components */
export default Home;