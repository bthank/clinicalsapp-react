import React from 'react';
import axios from 'axios';

class AnalyzeData extends React.Component {

    state = {
        clinicalData: []
    }

    componentWillMount(){
        axios.get("/clinicalservices/api/patients/analyze/" + this.props.match.params.patientId)
            .then(response => {

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
                </div>);
    }

}

/* export out the component so that it can be used in other components */
export default AnalyzeData;