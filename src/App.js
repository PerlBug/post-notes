import React, {Component} from 'react';
import Note from './Note';
import AddNote from './AddNote';


class App extends Component{
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    return(
      <div> <Note /><Note /><Note />
      <AddNote />
    </div>
    )
  }
}

export default App;
