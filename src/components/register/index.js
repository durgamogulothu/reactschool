import React,{Component} from 'react';
import Select from 'react-select';
import AllTeachers from '../allteachers';
 

class Register extends Component {

  constructor(props) {

    super(props);

    this.state = {

      tEmail: "",

      sEmails: ""

    };

 

    this.handleInputChange = this.handleInputChange.bind(this);

    //this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

 

  handleInputChange(event) {

    const target = event.target;

    const value = event.target.value;

    const name = target.name;

 

    this.setState({

      [name]: value

    });

  }

 

  handleSubmit(event) {

    alert('Teacher and Students emails submitted: ' + this.state.tEmail + " :: "+this.state.sEmails);

    const stuEmails = (this.state.sEmails).split(",");

    const reqBody = {

      "teacher" : this.state.tEmail,

      "students" : stuEmails

    };

    //const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const url = "http://localhost:4201/api/register";

    //fetch(proxyurl+url, {
        fetch(url, {

        method: 'POST',

        headers: new Headers({
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json", // <-- Specifying the Content-Type

                "Access-Control-Allow-Origin" : "*"

            }),

        body: JSON.stringify(reqBody)}) // <-- Post parameters

        .then((response) => response.text())

        .then((responseText) => {

          alert(responseText);

        })

    .catch(console.log)

 

    event.preventDefault();

    return false;

   

  }

 

  render() {

    return (

      <div >

        <h1>Student registration form</h1>

     

      <form onSubmit={this.handleSubmit}>

      <label>

        Teacher Email:

        <input

          name="tEmail"

          type="text"

          value={this.state.tEmail}

          onChange={this.handleInputChange} />

      </label>

      <br />

      <label>

        Student Emails:

        <input

          name="sEmails"

          type="text"

          value={this.state.sEmails}

          onChange={this.handleInputChange} />

      </label>

      <br/>

      <input type="submit" value="Submit" />

    </form>

    </div>

    );

    }

}

export default Register
