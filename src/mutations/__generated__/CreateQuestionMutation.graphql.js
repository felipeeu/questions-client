/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateQuestionMutationVariables = {|
  topic: string,
  body: string,
  answer: string,
|};
export type CreateQuestionMutationResponse = {|
  +createQuestion: ?{|
    +topic: string,
    +body: string,
    +answer: string,
  |}
|};
export type CreateQuestionMutation = {|
  variables: CreateQuestionMutationVariables,
  response: CreateQuestionMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "answer"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "body"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "topic"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "answer",
        "variableName": "answer"
      },
      {
        "kind": "Variable",
        "name": "body",
        "variableName": "body"
      },
      {
        "kind": "Variable",
        "name": "topic",
        "variableName": "topic"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "createQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "topic",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answer",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateQuestionMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateQuestionMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "6829404fbe973449ae7f2a51cf418442",
    "id": null,
    "metadata": {},
    "name": "CreateQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation CreateQuestionMutation(\n  $topic: String!\n  $body: String!\n  $answer: String!\n) {\n  createQuestion(topic: $topic, body: $body, answer: $answer) {\n    topic\n    body\n    answer\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd4fd465aba90c22686fb1c9bd090b5f';

module.exports = node;
