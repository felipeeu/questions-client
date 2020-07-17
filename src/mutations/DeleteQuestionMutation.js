import { commitMutation } from "react-relay";
import environment from "../relay/environment";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`

mutation DeleteQuestionMutation($id: String!) {
  deleteQuestion(id: $id) {
    id
  }
}`;

export default (id, callback) => {
  const variables = {
    id
  };

  commitMutation(environment, {
    mutation,
    variables,

    onCompleted: () => {
      callback();
    },
    onError: err => console.error(err)
  });
};
