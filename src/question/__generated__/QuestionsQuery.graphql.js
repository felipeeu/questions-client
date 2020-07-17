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
    "cacheID": "0176f6336bc3e11c2f0d3a37e3469410",
    "id": null,
    "metadata": {},
    "name": "QuestionsQuery",
    "operationKind": "query",
    "text": "query QuestionsQuery {\n  questions {\n    body\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e9038efd06e9b3f57981e88994d1b17d';

module.exports = node;
