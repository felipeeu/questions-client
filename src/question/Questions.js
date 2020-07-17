import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import environment from "../relay/environment";
import Home from "../Home"

export const Questions = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query QuestionsQuery {
          questions {
            body
            answer
            id
          }
        }
      `}
      // variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <Home questions= {props.questions}/> 
        );
      }}
    />
  );
};

