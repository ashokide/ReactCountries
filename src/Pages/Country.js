import React from 'react';

import Button from '@material-ui/core/Button';

const Country = props => {
  if (props.location.state != 0 || props.location.state == undefined) {
    props.history.push('/');
  }

  return (
    <div>
      <p>Country : {props.match.params.country}</p>
      {console.log(props.location.state[0])}

      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go Back
      </button>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default Country;
