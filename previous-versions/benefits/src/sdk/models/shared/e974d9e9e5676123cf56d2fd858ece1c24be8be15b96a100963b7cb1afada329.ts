/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status {
    Active = "Active",
    Paused = "Paused",
    Disabled = "Disabled",
}

export class E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "effectiveDate" })
    effectiveDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "groupNumber" })
    groupNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberNumber" })
    memberNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status;
}
