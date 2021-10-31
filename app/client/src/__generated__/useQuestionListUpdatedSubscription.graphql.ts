/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useQuestionListUpdatedSubscriptionVariables = {
    eventId: string;
};
export type useQuestionListUpdatedSubscriptionResponse = {
    readonly questionCreated: {
        readonly cursor: string;
        readonly node: {
            readonly id: string;
            readonly position: number | null;
            readonly " $fragmentRefs": FragmentRefs<"QuestionAuthorFragment" | "QuestionContentFragment" | "QuestionStatsFragment">;
        };
    };
};
export type useQuestionListUpdatedSubscription = {
    readonly response: useQuestionListUpdatedSubscriptionResponse;
    readonly variables: useQuestionListUpdatedSubscriptionVariables;
};



/*
subscription useQuestionListUpdatedSubscription(
  $eventId: ID!
) {
  questionCreated(eventId: $eventId) {
    cursor
    node {
      id
      position
      ...QuestionAuthorFragment
      ...QuestionContentFragment
      ...QuestionStatsFragment
    }
  }
}

fragment QuestionAuthorFragment on EventQuestion {
  createdBy {
    id
    firstName
    avatar
  }
  createdAt
}

fragment QuestionContentFragment on EventQuestion {
  question
}

fragment QuestionStatsFragment on EventQuestion {
  id
  likedByCount
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "eventId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "eventId",
    "variableName": "eventId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useQuestionListUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EventQuestionEdge",
        "kind": "LinkedField",
        "name": "questionCreated",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestion",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuestionAuthorFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuestionContentFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuestionStatsFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useQuestionListUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EventQuestionEdge",
        "kind": "LinkedField",
        "name": "questionCreated",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestion",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "createdBy",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "avatar",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "question",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likedByCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "93d1431877e65d830f5abbd5b3abe775",
    "id": null,
    "metadata": {},
    "name": "useQuestionListUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription useQuestionListUpdatedSubscription(\n  $eventId: ID!\n) {\n  questionCreated(eventId: $eventId) {\n    cursor\n    node {\n      id\n      position\n      ...QuestionAuthorFragment\n      ...QuestionContentFragment\n      ...QuestionStatsFragment\n    }\n  }\n}\n\nfragment QuestionAuthorFragment on EventQuestion {\n  createdBy {\n    id\n    firstName\n    avatar\n  }\n  createdAt\n}\n\nfragment QuestionContentFragment on EventQuestion {\n  question\n}\n\nfragment QuestionStatsFragment on EventQuestion {\n  id\n  likedByCount\n}\n"
  }
};
})();
(node as any).hash = '208441aee2b44a1ad9d67d485a70d32b';
export default node;
