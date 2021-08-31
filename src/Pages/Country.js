import React from "react";

import { Button, Image } from "antd";

const Country = (props) => {
  if (props.location.state === undefined) {
    props.history.push("/");
  }

  return (
    <div>
      <p>Country : {props.match.params.country}</p>
      {console.log(props.location.state[0])}
      <Image width={100} src={props.location.state[0].flag} />
      <Button
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
