import React,{Component} from 'react'

 

class Common extends Component {

  constructor(props) {

    super(props);

    this.state = {

      tEmails: "",
        cStudents : ""
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

    alert('Teacher emails submitted: ' + this.state.tEmails );
    const url = "http://localhost:4201/api/commonstudents";

    //fetch(proxyurl+url, {
        fetch(url+"?teacher="+this.state.tEmails, {

        method: 'GET',

        //headers: new Headers({
        //        "Accept": "application/json, text/plain, */*",
        //        "Content-Type": "application/json", // <-- Specifying the Content-Type

        //        "Access-Control-Allow-Origin" : "*"

            })

        //body: JSON.stringify(reqBody)}) // <-- Post parameters

        .then(res => res.json())
        .then((data) => {
          
        

          //alert(data);
          //const resp = responseText;
          const studentsArr = data.message.students;
          //alert(studentsArr + " ::" + studentsArr.length);
          const students = studentsArr.toString();
          this.setState({
              'cStudents' : students
          });

        })

    .catch(console.log)

 

    event.preventDefault();

    return false;

   

  }

 

  render() {

    return (

      <div >

        <h1>Common Students</h1>

     

      <form onSubmit={this.handleSubmit}>

      <label>

        Teacher Email:

        <input

          name="tEmails"

          type="text"

          value={this.state.tEmails}

          onChange={this.handleInputChange} />

      </label>

      <br />

      <input type="submit" value="Submit" />

    </form>
        <div>Common Students are: {this.state.cStudents}</div>
    </div>

    );

    }

}

export default Common
