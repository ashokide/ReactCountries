import React from 'react';

import { Button } from 'antd';

const Country = props => {
  // if (props.location.state != 0 || props.location.state == undefined) {
  //   props.history.push('/');
  // }

  return (
    <div>
      <p>Country : {props.match.params.country}</p>
      {console.log(props.location.state[0])}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default Country;
