import React,{Component} from 'react'

 

class Suspend extends Component {

  constructor(props) {

    super(props);

    this.state = {

      sEmail: "",
      suspendStatus : ""  
    };

 

    this.handleInputChange = this.handleInputChange.bind(this);

    //this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

 

  handleInputChange(event) {

    const target = event.target;

    const value = target.value;

    const name = target.name;

 

    this.setState({

      [name]: value

    });

  }

 

  handleSubmit(event) {

    alert('Student email submitted: ' + this.state.sEmail );
    const url = "http://localhost:4201/api/suspend";
    const reqBody = {
        "student" : this.state.sEmail
    }
    
    fetch(url, {

        method: 'POST',

        headers: new Headers({
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json", // <-- Specifying the Content-Type

                "Access-Control-Allow-Origin" : "*"

            }),

        body: JSON.stringify(reqBody)}) // <-- Post parameters

        .then(res => res.json())
        .then((data) => {
          
        

          alert(JSON.stringify(data));
          
          this.setState({
              'suspendStatus' : data.message
          });

       

    })

    .catch(console.log)

 

    event.preventDefault();

    return false;

   

  }

 

  render() {

    return (

      <div >

        <h1>Suspend a Student</h1>

     

      <form onSubmit={this.handleSubmit}>

      <label>

        Student Email:

        <input

          name="sEmail"

          type="text"

          value={this.state.sEmail}

          onChange={this.handleInputChange} />

      </label>

      <br />

      <input type="submit" value="Submit" />

    </form>
        <div>Suspend Student response message: {this.state.suspendStatus}</div>
    </div>

    );

    }

}

export default Suspend
