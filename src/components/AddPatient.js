import axios from 'axios';
import React from 'react';

class AddPatient extends React.Component {

    handleSubmit(event){
        constant data = {
            firstName: this.firstName,
            lastName:  this.lastName,
            age:       this.age
        }
        axios.post("/clinicalservices/api/patients/",data)
            .then(response => {
                /* event.preventDefault will not allow form to be submitted */
                event.preventDefault();
            })
    }

    render(){
        /* the code within the render return is JSX code which gets converted to HTML
        JSX is a syntax extension to JavaScript
        */
        return (<div>
                    <h2>Create Patient:</h2>
                    <form>
                        First Name: <input type="text" name="firstName" onChange={(event => this.firstName = event.target.value)}/>
                        Last Name: <input type="text" name="lastName" onChange={(event => this.lastName = event.target.value)}/>
                        Age: <input type="text" name="age" onChange={(event => this.age = event.target.value)}/>
                        <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
                       
                    </form>
                </div>);
    }

}

/* export out the component so that it can be used in other components */
export default AddPatient;