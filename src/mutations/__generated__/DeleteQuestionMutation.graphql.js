/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteQuestionMutationVariables = {|
  id: string
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +id: string
  |}
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $id: String!
) {
  deleteQuestion(id: $id) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "deleteQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f2df381c681e0348f189d8f3ea2a3e06",
    "id": null,
    "metadata": {},
    "name": "DeleteQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteQuestionMutation(\n  $id: String!\n) {\n  deleteQuestion(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae41b321fbd88f59579758b78deffb9b';

module.exports = node;
