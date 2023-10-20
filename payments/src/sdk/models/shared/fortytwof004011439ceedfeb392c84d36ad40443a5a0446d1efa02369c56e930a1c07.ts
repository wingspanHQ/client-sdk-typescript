/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07Status {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export class FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "depositedDate" })
    depositedDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceId" })
    invoiceId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNumber" })
    invoiceNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07Status;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;
}
