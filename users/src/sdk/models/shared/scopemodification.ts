/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ScopeModificationAction {
    Include = "Include",
    Exclude = "Exclude",
    Allow = "Allow",
    Deny = "Deny",
}

export enum ScopeModificationComparator {
    Equals = "Equals",
    Includes = "Includes",
}

export class ScopeModification extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action: ScopeModificationAction;

    @SpeakeasyMetadata()
    @Expose({ name: "attribute" })
    attribute: string;

    @SpeakeasyMetadata()
    @Expose({ name: "comparator" })
    comparator: ScopeModificationComparator;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}