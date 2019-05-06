import React,{Component} from 'react'
//import Select from 'react-select'

const TeachersContext = React.createContext()
class Allteachers extends Component {
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
        <TeachersContext.Provider value={this.state.teachers}>
          {this.props.children}
        </TeachersContext.Provider>
        )
    }
}

export default Allteachers
