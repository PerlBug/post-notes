import React, {Component} from 'react'
import Draggable from 'react-draggable';
import FaMinus from 'react-icons/lib/fa/minus'



class Note extends Component{

  render(){
    return(
      <Draggable>
        <div className='bg-light-green pa3 ma2 bw2 shadow-5 note'>
          <div>
            <p>drag me</p>

          </div>
          <FaMinus className='minus-button bg-light-blue br2 grow-large'/>

        </div>
    </Draggable>
    )
  }

};

export default Note
