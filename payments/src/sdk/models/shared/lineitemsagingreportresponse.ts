/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    LineItemsAgingReportLineItem,
    LineItemsAgingReportLineItem$,
} from "./lineitemsagingreportlineitem";
import { RedactedMember, RedactedMember$ } from "./redactedmember";
import { z } from "zod";

export type LineItemsAgingReportResponseLabels = {};

export enum LineItemsAgingReportResponseStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type LineItemsAgingReportResponse = {
    ageGroup: string;
    amount: number;
    approverName?: string | null | undefined;
    createdAt: string;
    currency: string;
    dueDate: string;
    invoiceId: string;
    invoiceNumber: string;
    invoicePdf: string;
    labels?: LineItemsAgingReportResponseLabels | null | undefined;
    lineItems: Array<LineItemsAgingReportLineItem>;
    member: RedactedMember;
    memberClientId: string;
    memberExternalId?: number | null | undefined;
    memberId: string;
    notes?: string | null | undefined;
    paidDate?: string | null | undefined;
    payoutDestination?: string | null | undefined;
    projectName?: string | null | undefined;
    purchaseOrderNumber?: string | null | undefined;
    receiptPdf: string;
    sentDate?: string | null | undefined;
    status: LineItemsAgingReportResponseStatus;
    updatedAt: string;
};

/** @internal */
export namespace LineItemsAgingReportResponseLabels$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        LineItemsAgingReportResponseLabels,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LineItemsAgingReportResponseLabels
    > = z.object({});
}

/** @internal */
export const LineItemsAgingReportResponseStatus$ = z.nativeEnum(LineItemsAgingReportResponseStatus);

/** @internal */
export namespace LineItemsAgingReportResponse$ {
    export type Inbound = {
        ageGroup: string;
        amount: number;
        approverName?: string | null | undefined;
        createdAt: string;
        currency: string;
        dueDate: string;
        invoiceId: string;
        invoiceNumber: string;
        invoicePdf: string;
        labels?: LineItemsAgingReportResponseLabels$.Inbound | null | undefined;
        lineItems: Array<LineItemsAgingReportLineItem$.Inbound>;
        member: RedactedMember$.Inbound;
        memberClientId: string;
        memberExternalId?: number | null | undefined;
        memberId: string;
        notes?: string | null | undefined;
        paidDate?: string | null | undefined;
        payoutDestination?: string | null | undefined;
        projectName?: string | null | undefined;
        purchaseOrderNumber?: string | null | undefined;
        receiptPdf: string;
        sentDate?: string | null | undefined;
        status: LineItemsAgingReportResponseStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<LineItemsAgingReportResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ageGroup: z.string(),
            amount: z.number(),
            approverName: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            currency: z.string(),
            dueDate: z.string(),
            invoiceId: z.string(),
            invoiceNumber: z.string(),
            invoicePdf: z.string(),
            labels: z
                .nullable(z.lazy(() => LineItemsAgingReportResponseLabels$.inboundSchema))
                .optional(),
            lineItems: z.array(LineItemsAgingReportLineItem$.inboundSchema),
            member: RedactedMember$.inboundSchema,
            memberClientId: z.string(),
            memberExternalId: z.nullable(z.number()).optional(),
            memberId: z.string(),
            notes: z.nullable(z.string()).optional(),
            paidDate: z.nullable(z.string()).optional(),
            payoutDestination: z.nullable(z.string()).optional(),
            projectName: z.nullable(z.string()).optional(),
            purchaseOrderNumber: z.nullable(z.string()).optional(),
            receiptPdf: z.string(),
            sentDate: z.nullable(z.string()).optional(),
            status: LineItemsAgingReportResponseStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                ageGroup: v.ageGroup,
                amount: v.amount,
                ...(v.approverName === undefined ? null : { approverName: v.approverName }),
                createdAt: v.createdAt,
                currency: v.currency,
                dueDate: v.dueDate,
                invoiceId: v.invoiceId,
                invoiceNumber: v.invoiceNumber,
                invoicePdf: v.invoicePdf,
                ...(v.labels === undefined ? null : { labels: v.labels }),
                lineItems: v.lineItems,
                member: v.member,
                memberClientId: v.memberClientId,
                ...(v.memberExternalId === undefined
                    ? null
                    : { memberExternalId: v.memberExternalId }),
                memberId: v.memberId,
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.paidDate === undefined ? null : { paidDate: v.paidDate }),
                ...(v.payoutDestination === undefined
                    ? null
                    : { payoutDestination: v.payoutDestination }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.purchaseOrderNumber === undefined
                    ? null
                    : { purchaseOrderNumber: v.purchaseOrderNumber }),
                receiptPdf: v.receiptPdf,
                ...(v.sentDate === undefined ? null : { sentDate: v.sentDate }),
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        ageGroup: string;
        amount: number;
        approverName?: string | null | undefined;
        createdAt: string;
        currency: string;
        dueDate: string;
        invoiceId: string;
        invoiceNumber: string;
        invoicePdf: string;
        labels?: LineItemsAgingReportResponseLabels$.Outbound | null | undefined;
        lineItems: Array<LineItemsAgingReportLineItem$.Outbound>;
        member: RedactedMember$.Outbound;
        memberClientId: string;
        memberExternalId?: number | null | undefined;
        memberId: string;
        notes?: string | null | undefined;
        paidDate?: string | null | undefined;
        payoutDestination?: string | null | undefined;
        projectName?: string | null | undefined;
        purchaseOrderNumber?: string | null | undefined;
        receiptPdf: string;
        sentDate?: string | null | undefined;
        status: LineItemsAgingReportResponseStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LineItemsAgingReportResponse> = z
        .object({
            ageGroup: z.string(),
            amount: z.number(),
            approverName: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            currency: z.string(),
            dueDate: z.string(),
            invoiceId: z.string(),
            invoiceNumber: z.string(),
            invoicePdf: z.string(),
            labels: z
                .nullable(z.lazy(() => LineItemsAgingReportResponseLabels$.outboundSchema))
                .optional(),
            lineItems: z.array(LineItemsAgingReportLineItem$.outboundSchema),
            member: RedactedMember$.outboundSchema,
            memberClientId: z.string(),
            memberExternalId: z.nullable(z.number()).optional(),
            memberId: z.string(),
            notes: z.nullable(z.string()).optional(),
            paidDate: z.nullable(z.string()).optional(),
            payoutDestination: z.nullable(z.string()).optional(),
            projectName: z.nullable(z.string()).optional(),
            purchaseOrderNumber: z.nullable(z.string()).optional(),
            receiptPdf: z.string(),
            sentDate: z.nullable(z.string()).optional(),
            status: LineItemsAgingReportResponseStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                ageGroup: v.ageGroup,
                amount: v.amount,
                ...(v.approverName === undefined ? null : { approverName: v.approverName }),
                createdAt: v.createdAt,
                currency: v.currency,
                dueDate: v.dueDate,
                invoiceId: v.invoiceId,
                invoiceNumber: v.invoiceNumber,
                invoicePdf: v.invoicePdf,
                ...(v.labels === undefined ? null : { labels: v.labels }),
                lineItems: v.lineItems,
                member: v.member,
                memberClientId: v.memberClientId,
                ...(v.memberExternalId === undefined
                    ? null
                    : { memberExternalId: v.memberExternalId }),
                memberId: v.memberId,
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.paidDate === undefined ? null : { paidDate: v.paidDate }),
                ...(v.payoutDestination === undefined
                    ? null
                    : { payoutDestination: v.payoutDestination }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.purchaseOrderNumber === undefined
                    ? null
                    : { purchaseOrderNumber: v.purchaseOrderNumber }),
                receiptPdf: v.receiptPdf,
                ...(v.sentDate === undefined ? null : { sentDate: v.sentDate }),
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });
}
