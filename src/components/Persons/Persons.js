import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.persons !== this.props.persons;
  // }
  render(){
    return this.props.persons.map((person, index) => {
      return <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />;
    });
  }
}
  

  export default Persons;