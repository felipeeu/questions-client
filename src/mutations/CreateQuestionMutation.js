import { commitMutation } from "react-relay";
import environment from "../relay/environment";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation CreateQuestionMutation(
    $topic: String!
    $body: String!
    $answer: String!
  ) {
    createQuestion(topic: $topic, body: $body, answer: $answer) {
      topic
      body
      answer
    }
  }
`;

export default (topic, body, answer, callback) => {
  const variables = {
    topic,
    body,
    answer
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
