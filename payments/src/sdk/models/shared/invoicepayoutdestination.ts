/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InvoicePayoutDestinationDestinationType {
    Account = "Account",
    Card = "Card",
    InternalAccount = "InternalAccount",
    PaperCheck = "PaperCheck",
    WeGift = "WeGift",
}

export enum InvoicePayoutDestinationPayoutMethod {
    Standard = "Standard",
    Instant = "Instant",
    Expedited = "Expedited",
    Check = "Check",
    ECheck = "ECheck",
}

export class InvoicePayoutDestination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "brand" })
    brand?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationId" })
    destinationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationType" })
    destinationType: InvoicePayoutDestinationDestinationType;

    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payoutMethod" })
    payoutMethod: InvoicePayoutDestinationPayoutMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "percentage" })
    percentage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "transferId" })
    transferId: string;
}