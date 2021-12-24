import React from "react";
import * as Axios from 'axios';

export default function UsersTry() {
  Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return <div className="usersTry">lol</div>;
}
