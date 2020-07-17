/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionsQueryVariables = {||};
export type QuestionsQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +body: string,
    +answer: string,
    +id: string,
  |}>
|};
export type QuestionsQuery = {|
  variables: QuestionsQueryVariables,
  response: QuestionsQueryResponse,
|};
*/


/*
query QuestionsQuery {
  questions {
    body
    answer
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "questions",
    "plural": true,
    "selections": [
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
      },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QuestionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5d13c476e239e1eb90353e7a382d27ae",
    "id": null,
    "metadata": {},
    "name": "QuestionsQuery",
    "operationKind": "query",
    "text": "query QuestionsQuery {\n  questions {\n    body\n    answer\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '214c603da599b3e52d06a3cd0f9b09a1';

module.exports = node;
