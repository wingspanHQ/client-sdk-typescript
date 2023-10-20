/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PayoutDestinationUpdateDestinationType {
    Account = "Account",
    Card = "Card",
    WeGift = "WeGift",
}

export enum PayoutDestinationUpdatePayoutMethod {
    Standard = "Standard",
    Instant = "Instant",
    Expedited = "Expedited",
    Check = "Check",
    ECheck = "ECheck",
}

export class PayoutDestinationUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "destinationId" })
    destinationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationType" })
    destinationType?: PayoutDestinationUpdateDestinationType;

    @SpeakeasyMetadata()
    @Expose({ name: "payoutMethod" })
    payoutMethod?: PayoutDestinationUpdatePayoutMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "percentage" })
    percentage?: number;
}