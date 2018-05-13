import React from 'react';
import TextField from 'material-ui/TextField';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <p>Goodol' ToDo App with completion and notification</p>
        <form style={{ display: "block", margin: "2em auto", width: "50%" }}>
          <TextField style={{display: 'inline-block'}} hintText="Buy milk"
            floatingLabelText="I need to"
            floatingLabelFixed={true} />
        </form>
      </div>
    )
  }
};

export default Greeting;
