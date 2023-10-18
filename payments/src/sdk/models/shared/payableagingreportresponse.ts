/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RedactedMember } from "./redactedmember";
import { Expose, Type } from "class-transformer";

export class PayableAgingReportResponseLabels extends SpeakeasyBase {}

export enum PayableAgingReportResponseStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export class PayableAgingReportResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ageGroup" })
    ageGroup: string;

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "approverName" })
    approverName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;

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
    @Expose({ name: "invoicePdf" })
    invoicePdf: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    @Type(() => PayableAgingReportResponseLabels)
    labels?: PayableAgingReportResponseLabels;

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => RedactedMember)
    member: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberExternalId" })
    memberExternalId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payoutDestination" })
    payoutDestination?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "projectName" })
    projectName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "purchaseOrderNumber" })
    purchaseOrderNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "receiptPdf" })
    receiptPdf: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sentDate" })
    sentDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PayableAgingReportResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;
}