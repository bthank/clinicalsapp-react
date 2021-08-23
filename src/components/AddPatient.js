import axios from 'axios';
import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

toast.configure();

class AddPatient extends React.Component {

    handleSubmit(event){
        /* event.preventDefault will not allow form to be submitted */
        event.preventDefault();

        const data = {
            firstName: this.firstName,
            lastName:  this.lastName,
            age:       this.age
        }
        axios.post("/clinicalservices/api/patients/",data)
            .then(response => {
                toast("Patient added successfully!", {autoClose:2000,position:toast.POSITION.BOTTOM_CENTER});
                
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
                    <br/>
                    <Link to={'/'}>Go Back</Link>
                </div>);
    }

}

/* export out the component so that it can be used in other components */
export default AddPatient;