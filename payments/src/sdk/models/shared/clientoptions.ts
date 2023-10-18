/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ClientOptionsWorkflowStatus {
    Pending = "Pending",
    PreApproved = "PreApproved",
    Approved = "Approved",
    PaymentInitiated = "PaymentInitiated",
    Funded = "Funded",
    Declined = "Declined",
}

export enum ClientOptionsWorkflowSubStatus {
    Submitted = "Submitted",
}

export class ClientOptions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payDate" })
    payDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "workflowStatus" })
    workflowStatus?: ClientOptionsWorkflowStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "workflowSubStatus" })
    workflowSubStatus?: ClientOptionsWorkflowSubStatus;
}