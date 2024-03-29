/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c,
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$,
} from "./fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c";
import { PayrollReportLineItem, PayrollReportLineItem$ } from "./payrollreportlineitem";
import { RedactedMember, RedactedMember$ } from "./redactedmember";
import { z } from "zod";

export type PayrollReportInvoiceLabels = {};

export enum PayrollReportInvoiceStatus {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export type PayrollReportInvoice = {
    amount: number;
    approverName?: string | null | undefined;
    createdAt: string;
    currency: string;
    dueDate: string;
    eventActors?:
        | Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c
        | null
        | undefined;
    invoiceId: string;
    invoiceNumber: string;
    invoicePdf: string;
    labels?: PayrollReportInvoiceLabels | null | undefined;
    lineItems: Array<PayrollReportLineItem>;
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
    status: PayrollReportInvoiceStatus;
    updatedAt: string;
};

/** @internal */
export namespace PayrollReportInvoiceLabels$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PayrollReportInvoiceLabels, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayrollReportInvoiceLabels> =
        z.object({});
}

/** @internal */
export const PayrollReportInvoiceStatus$ = z.nativeEnum(PayrollReportInvoiceStatus);

/** @internal */
export namespace PayrollReportInvoice$ {
    export type Inbound = {
        amount: number;
        approverName?: string | null | undefined;
        createdAt: string;
        currency: string;
        dueDate: string;
        eventActors?:
            | Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$.Inbound
            | null
            | undefined;
        invoiceId: string;
        invoiceNumber: string;
        invoicePdf: string;
        labels?: PayrollReportInvoiceLabels$.Inbound | null | undefined;
        lineItems: Array<PayrollReportLineItem$.Inbound>;
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
        status: PayrollReportInvoiceStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<PayrollReportInvoice, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.number(),
            approverName: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            currency: z.string(),
            dueDate: z.string(),
            eventActors: z
                .nullable(
                    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$.inboundSchema
                )
                .optional(),
            invoiceId: z.string(),
            invoiceNumber: z.string(),
            invoicePdf: z.string(),
            labels: z.nullable(z.lazy(() => PayrollReportInvoiceLabels$.inboundSchema)).optional(),
            lineItems: z.array(PayrollReportLineItem$.inboundSchema),
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
            status: PayrollReportInvoiceStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.approverName === undefined ? null : { approverName: v.approverName }),
                createdAt: v.createdAt,
                currency: v.currency,
                dueDate: v.dueDate,
                ...(v.eventActors === undefined ? null : { eventActors: v.eventActors }),
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
        amount: number;
        approverName?: string | null | undefined;
        createdAt: string;
        currency: string;
        dueDate: string;
        eventActors?:
            | Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$.Outbound
            | null
            | undefined;
        invoiceId: string;
        invoiceNumber: string;
        invoicePdf: string;
        labels?: PayrollReportInvoiceLabels$.Outbound | null | undefined;
        lineItems: Array<PayrollReportLineItem$.Outbound>;
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
        status: PayrollReportInvoiceStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayrollReportInvoice> = z
        .object({
            amount: z.number(),
            approverName: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            currency: z.string(),
            dueDate: z.string(),
            eventActors: z
                .nullable(
                    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$.outboundSchema
                )
                .optional(),
            invoiceId: z.string(),
            invoiceNumber: z.string(),
            invoicePdf: z.string(),
            labels: z.nullable(z.lazy(() => PayrollReportInvoiceLabels$.outboundSchema)).optional(),
            lineItems: z.array(PayrollReportLineItem$.outboundSchema),
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
            status: PayrollReportInvoiceStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.approverName === undefined ? null : { approverName: v.approverName }),
                createdAt: v.createdAt,
                currency: v.currency,
                dueDate: v.dueDate,
                ...(v.eventActors === undefined ? null : { eventActors: v.eventActors }),
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
