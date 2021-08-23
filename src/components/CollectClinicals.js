import React from 'react';
import axios from 'axios';

class CollectClinicals extends React.Component {

    /* set state initially to a blank object since we will only get a single
       patient object back */
    state = {};

    componentWillMount(){
        axios.get("/clinicalservices/api/patients/" + this.props.match.params.patientId)
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
                    <form>
                        
                    </form>
                 </div>);
    }

}

/* export out the component so that it can be used in other components */
export default CollectClinicals;