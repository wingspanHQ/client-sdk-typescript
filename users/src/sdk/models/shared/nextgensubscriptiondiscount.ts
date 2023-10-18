/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NextgenSubscriptionDiscount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "discountEndDate" })
    discountEndDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "percent" })
    percent?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason: string;
}
