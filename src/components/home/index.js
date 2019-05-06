import React, { Component } from "react";
import Teachers from "../teachers";
class Home extends Component {
    state = {
        teachers : []
    }
    componentDidMount() {
        fetch('http://localhost:4201/api/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ teachers: data })
        })
        .catch(console.log)
      }
  render() {
    return (
      <Teachers teachers = {this.state.teachers} />
    );
  }
}

export default Home;