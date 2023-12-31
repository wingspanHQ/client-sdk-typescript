/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvoiceRefundEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "refundFailedAt" })
    refundFailedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refundStartedAt" })
    refundStartedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refundSuccessfulAt" })
    refundSuccessfulAt?: string;
}
