/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventSidebarRefetchableVariables = {
    id: string;
};
export type EventSidebarRefetchableResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"EventSidebarFragment">;
    } | null;
};
export type EventSidebarRefetchable = {
    readonly response: EventSidebarRefetchableResponse;
    readonly variables: EventSidebarRefetchableVariables;
};



/*
query EventSidebarRefetchable(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...EventSidebarFragment
    id
  }
}

fragment EventDetailsCardFragment on Event {
  id
  title
  topic
  description
}

fragment EventSidebarFragment on Event {
  id
  isQuestionFeedVisible
  isViewerModerator
  ...EventDetailsCardFragment
  ...SpeakerListFragment
  ...useQuestionListFragment
  ...useQuestionQueueFragment
  ...QuestionCarouselFragment
}

fragment LikeFragment on EventQuestion {
  id
  isLikedByViewer
}

fragment LiveFeedbackAuthorFragment on EventLiveFeedback {
  createdBy {
    id
    firstName
    avatar
  }
  createdAt
}

fragment QuestionActionsFragment on EventQuestion {
  id
  ...QuoteFragment
  ...LikeFragment
  ...QueueButtonFragment
}

fragment QuestionAuthorFragment on EventQuestion {
  createdBy {
    id
    firstName
    avatar
  }
  createdAt
}

fragment QuestionCarouselFragment on Event {
  id
  currentQuestion
  questionQueue {
    questionRecord(first: 100, after: "") {
      edges {
        cursor
        node {
          position
          ...QuestionAuthorFragment
          ...QuestionContentFragment
          id
          __typename
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

fragment QuestionContentFragment on EventQuestion {
  question
}

fragment QuestionQuoteFragment on EventQuestion {
  id
  ...QuestionAuthorFragment
  ...QuestionContentFragment
}

fragment QuestionStatsFragment on EventQuestion {
  id
  likedByCount
}

fragment QueueButtonFragment on EventQuestion {
  id
  position
}

fragment QuoteFragment on EventQuestion {
  id
  ...QuestionAuthorFragment
  ...QuestionContentFragment
}

fragment SpeakerListFragment on Event {
  speakers {
    edges {
      node {
        id
        pictureUrl
        name
        description
        title
      }
      cursor
    }
  }
}

fragment useLiveFeedbackListFragment on Event {
  id
  liveFeedback(first: 100, after: "") {
    edges {
      cursor
      node {
        id
        message
        createdBy {
          id
        }
        ...LiveFeedbackAuthorFragment
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment useQuestionListFragment_1EWyOX on Event {
  id
  currentQuestion
  questions(first: 1000, after: "") {
    edges {
      cursor
      node {
        id
        question
        createdBy {
          firstName
          id
        }
        refQuestion {
          ...QuestionQuoteFragment
          id
        }
        ...QuestionActionsFragment
        ...QuestionAuthorFragment
        ...QuestionContentFragment
        ...QuestionStatsFragment
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment useQuestionQueueFragment on Event {
  id
  currentQuestion
  questionQueue {
    questionRecord(first: 100, after: "") {
      edges {
        cursor
        node {
          id
          ...QuestionAuthorFragment
          ...QuestionStatsFragment
          ...QuestionContentFragment
          position
          __typename
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    enqueuedQuestions(first: 100, after: "") {
      edges {
        cursor
        node {
          id
          ...QuestionAuthorFragment
          ...QuestionStatsFragment
          ...QuestionContentFragment
          position
          __typename
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "after",
  "value": ""
},
v8 = [
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "question",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatar",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "createdBy",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "likedByCount",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v17 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EventQuestionEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "EventQuestion",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v14/*: any*/),
          (v8/*: any*/),
          (v13/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v15/*: any*/),
  (v16/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EventSidebarRefetchable",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EventSidebarFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EventSidebarRefetchable",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isQuestionFeedVisible",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isViewerModerator",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "topic",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventSpeakerConnection",
                "kind": "LinkedField",
                "name": "speakers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventSpeakerEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EventSpeaker",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "pictureUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "currentQuestion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "EventQuestionConnection",
                "kind": "LinkedField",
                "name": "questions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventQuestionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EventQuestion",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "createdBy",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              (v3/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EventQuestion",
                            "kind": "LinkedField",
                            "name": "refQuestion",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isLikedByViewer",
                            "storageKey": null
                          },
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": "questions(after:\"\",first:1000)"
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "useQuestionListFragment_questions",
                "kind": "LinkedHandle",
                "name": "questions"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EventQuestionQueue",
                "kind": "LinkedField",
                "name": "questionQueue",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "EventQuestionConnection",
                    "kind": "LinkedField",
                    "name": "questionRecord",
                    "plural": false,
                    "selections": (v17/*: any*/),
                    "storageKey": "questionRecord(after:\"\",first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "QuestionQueueFragment_questionRecord",
                    "kind": "LinkedHandle",
                    "name": "questionRecord"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "QuestionCarousel_questionRecord",
                    "kind": "LinkedHandle",
                    "name": "questionRecord"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "EventQuestionConnection",
                    "kind": "LinkedField",
                    "name": "enqueuedQuestions",
                    "plural": false,
                    "selections": (v17/*: any*/),
                    "storageKey": "enqueuedQuestions(after:\"\",first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "QuestionQueueFragment_enqueuedQuestions",
                    "kind": "LinkedHandle",
                    "name": "enqueuedQuestions"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Event",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9599f5a375301052cf4b5c0971cae024",
    "id": null,
    "metadata": {},
    "name": "EventSidebarRefetchable",
    "operationKind": "query",
    "text": "query EventSidebarRefetchable(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...EventSidebarFragment\n    id\n  }\n}\n\nfragment EventDetailsCardFragment on Event {\n  id\n  title\n  topic\n  description\n}\n\nfragment EventSidebarFragment on Event {\n  id\n  isQuestionFeedVisible\n  isViewerModerator\n  ...EventDetailsCardFragment\n  ...SpeakerListFragment\n  ...useQuestionListFragment\n  ...useQuestionQueueFragment\n  ...QuestionCarouselFragment\n}\n\nfragment LikeFragment on EventQuestion {\n  id\n  isLikedByViewer\n}\n\nfragment QuestionActionsFragment on EventQuestion {\n  id\n  ...QuoteFragment\n  ...LikeFragment\n  ...QueueButtonFragment\n}\n\nfragment QuestionAuthorFragment on EventQuestion {\n  createdBy {\n    id\n    firstName\n    avatar\n  }\n  createdAt\n}\n\nfragment QuestionCarouselFragment on Event {\n  id\n  currentQuestion\n  questionQueue {\n    questionRecord(first: 100, after: \"\") {\n      edges {\n        cursor\n        node {\n          position\n          ...QuestionAuthorFragment\n          ...QuestionContentFragment\n          id\n          __typename\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment QuestionContentFragment on EventQuestion {\n  question\n}\n\nfragment QuestionQuoteFragment on EventQuestion {\n  id\n  ...QuestionAuthorFragment\n  ...QuestionContentFragment\n}\n\nfragment QuestionStatsFragment on EventQuestion {\n  id\n  likedByCount\n}\n\nfragment QueueButtonFragment on EventQuestion {\n  id\n  position\n}\n\nfragment QuoteFragment on EventQuestion {\n  id\n  ...QuestionAuthorFragment\n  ...QuestionContentFragment\n}\n\nfragment SpeakerListFragment on Event {\n  speakers {\n    edges {\n      node {\n        id\n        pictureUrl\n        name\n        description\n        title\n      }\n      cursor\n    }\n  }\n}\n\nfragment useQuestionListFragment on Event {\n  id\n  currentQuestion\n  questions(first: 100, after: \"\") {\n    edges {\n      cursor\n      node {\n        id\n        question\n        createdBy {\n          firstName\n          id\n        }\n        refQuestion {\n          ...QuestionQuoteFragment\n          id\n        }\n        ...QuestionActionsFragment\n        ...QuestionAuthorFragment\n        ...QuestionContentFragment\n        ...QuestionStatsFragment\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useQuestionQueueFragment on Event {\n  id\n  currentQuestion\n  questionQueue {\n    questionRecord(first: 100, after: \"\") {\n      edges {\n        cursor\n        node {\n          id\n          ...QuestionAuthorFragment\n          ...QuestionStatsFragment\n          ...QuestionContentFragment\n          position\n          __typename\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    enqueuedQuestions(first: 100, after: \"\") {\n      edges {\n        cursor\n        node {\n          id\n          ...QuestionAuthorFragment\n          ...QuestionStatsFragment\n          ...QuestionContentFragment\n          position\n          __typename\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3f1494839093724b91df79c86fd6506a';
export default node;
