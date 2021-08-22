import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    /* Home will retrieve patient details from the backend and and display it 
       in a tabular format.*/

    /* define state for this component so that it can be used later in the render().
       patientData will be an empty array to start with before the axios get call. */
    state = {
        patientData:[]
    }

    componentWillMount(){
        axios.get('localhost:8080/clinicalservices/api/patients/')
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
        </div>);
    }

}

/* export out the component so that it can be used in other components */
export default Home;