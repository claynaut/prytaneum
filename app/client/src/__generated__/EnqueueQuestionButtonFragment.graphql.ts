/**
 * @generated SignedSource<<0de205342178d4b64b13ab2f60075f27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EnqueueQuestionButtonFragment$data = {
  readonly id: string;
  readonly position: number | null;
  readonly " $fragmentType": "EnqueueQuestionButtonFragment";
};
export type EnqueueQuestionButtonFragment = EnqueueQuestionButtonFragment$data;
export type EnqueueQuestionButtonFragment$key = {
  readonly " $data"?: EnqueueQuestionButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EnqueueQuestionButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EnqueueQuestionButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "position",
      "storageKey": null
    }
  ],
  "type": "EventQuestion",
  "abstractKey": null
};

(node as any).hash = "1b73974f75052b2103089ca59c56c8d5";

export default node;
