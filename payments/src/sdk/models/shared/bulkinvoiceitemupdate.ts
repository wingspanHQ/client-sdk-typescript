/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FeeHandlingConfig, FeeHandlingConfig$ } from "./feehandlingconfig";
import { z } from "zod";

export enum BulkInvoiceItemUpdateAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
}

export enum BulkInvoiceItemUpdateInvoiceStatus {
    Draft = "Draft",
    Open = "Open",
    Approved = "Approved",
    Paid = "Paid",
    Cancelled = "Cancelled",
    LessThanNilGreaterThan = "<nil>",
}

export type BulkInvoiceItemUpdate = {
    acceptedPaymentMethods?: Array<BulkInvoiceItemUpdateAcceptedPaymentMethods> | null | undefined;
    amount?: number | null | undefined;
    bulkInvoiceBatchId?: string | null | undefined;
    bulkInvoiceItemMergeKey?: string | null | undefined;
    bulkInvoiceItemReference?: string | null | undefined;
    clientEmail?: string | null | undefined;
    clientExternalId?: string | null | undefined;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    dueDate?: string | null | undefined;
    invoiceNotes?: string | null | undefined;
    invoiceStatus?: BulkInvoiceItemUpdateInvoiceStatus | null | undefined;
    labels?: Record<string, string> | null | undefined;
    lineItemDescription?: string | null | undefined;
    lineItemDetail?: string | null | undefined;
    memberClientId?: string | null | undefined;
    paidDate?: string | null | undefined;
    projectName?: string | null | undefined;
    reimbursableExpense?: boolean | null | undefined;
    sendDate?: string | null | undefined;
};

/** @internal */
export const BulkInvoiceItemUpdateAcceptedPaymentMethods$ = z.nativeEnum(
    BulkInvoiceItemUpdateAcceptedPaymentMethods
);

/** @internal */
export const BulkInvoiceItemUpdateInvoiceStatus$ = z.nativeEnum(BulkInvoiceItemUpdateInvoiceStatus);

/** @internal */
export namespace BulkInvoiceItemUpdate$ {
    export type Inbound = {
        acceptedPaymentMethods?:
            | Array<BulkInvoiceItemUpdateAcceptedPaymentMethods>
            | null
            | undefined;
        amount?: number | null | undefined;
        bulkInvoiceBatchId?: string | null | undefined;
        bulkInvoiceItemMergeKey?: string | null | undefined;
        bulkInvoiceItemReference?: string | null | undefined;
        clientEmail?: string | null | undefined;
        clientExternalId?: string | null | undefined;
        creditFeeHandling?: FeeHandlingConfig$.Inbound | null | undefined;
        dueDate?: string | null | undefined;
        invoiceNotes?: string | null | undefined;
        invoiceStatus?: BulkInvoiceItemUpdateInvoiceStatus | null | undefined;
        labels?: Record<string, string> | null | undefined;
        lineItemDescription?: string | null | undefined;
        lineItemDetail?: string | null | undefined;
        memberClientId?: string | null | undefined;
        paidDate?: string | null | undefined;
        projectName?: string | null | undefined;
        reimbursableExpense?: boolean | null | undefined;
        sendDate?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<BulkInvoiceItemUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z
                .array(BulkInvoiceItemUpdateAcceptedPaymentMethods$)
                .nullable()
                .optional(),
            amount: z.number().nullable().optional(),
            bulkInvoiceBatchId: z.string().nullable().optional(),
            bulkInvoiceItemMergeKey: z.string().nullable().optional(),
            bulkInvoiceItemReference: z.string().nullable().optional(),
            clientEmail: z.string().nullable().optional(),
            clientExternalId: z.string().nullable().optional(),
            creditFeeHandling: FeeHandlingConfig$.inboundSchema.nullable().optional(),
            dueDate: z.string().nullable().optional(),
            invoiceNotes: z.string().nullable().optional(),
            invoiceStatus: BulkInvoiceItemUpdateInvoiceStatus$.nullable().optional(),
            labels: z.record(z.string()).nullable().optional(),
            lineItemDescription: z.string().nullable().optional(),
            lineItemDetail: z.string().nullable().optional(),
            memberClientId: z.string().nullable().optional(),
            paidDate: z.string().nullable().optional(),
            projectName: z.string().nullable().optional(),
            reimbursableExpense: z.boolean().nullable().optional(),
            sendDate: z.string().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.bulkInvoiceBatchId === undefined
                    ? null
                    : { bulkInvoiceBatchId: v.bulkInvoiceBatchId }),
                ...(v.bulkInvoiceItemMergeKey === undefined
                    ? null
                    : { bulkInvoiceItemMergeKey: v.bulkInvoiceItemMergeKey }),
                ...(v.bulkInvoiceItemReference === undefined
                    ? null
                    : { bulkInvoiceItemReference: v.bulkInvoiceItemReference }),
                ...(v.clientEmail === undefined ? null : { clientEmail: v.clientEmail }),
                ...(v.clientExternalId === undefined
                    ? null
                    : { clientExternalId: v.clientExternalId }),
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                ...(v.invoiceStatus === undefined ? null : { invoiceStatus: v.invoiceStatus }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.lineItemDescription === undefined
                    ? null
                    : { lineItemDescription: v.lineItemDescription }),
                ...(v.lineItemDetail === undefined ? null : { lineItemDetail: v.lineItemDetail }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                ...(v.paidDate === undefined ? null : { paidDate: v.paidDate }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.reimbursableExpense === undefined
                    ? null
                    : { reimbursableExpense: v.reimbursableExpense }),
                ...(v.sendDate === undefined ? null : { sendDate: v.sendDate }),
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?:
            | Array<BulkInvoiceItemUpdateAcceptedPaymentMethods>
            | null
            | undefined;
        amount?: number | null | undefined;
        bulkInvoiceBatchId?: string | null | undefined;
        bulkInvoiceItemMergeKey?: string | null | undefined;
        bulkInvoiceItemReference?: string | null | undefined;
        clientEmail?: string | null | undefined;
        clientExternalId?: string | null | undefined;
        creditFeeHandling?: FeeHandlingConfig$.Outbound | null | undefined;
        dueDate?: string | null | undefined;
        invoiceNotes?: string | null | undefined;
        invoiceStatus?: BulkInvoiceItemUpdateInvoiceStatus | null | undefined;
        labels?: Record<string, string> | null | undefined;
        lineItemDescription?: string | null | undefined;
        lineItemDetail?: string | null | undefined;
        memberClientId?: string | null | undefined;
        paidDate?: string | null | undefined;
        projectName?: string | null | undefined;
        reimbursableExpense?: boolean | null | undefined;
        sendDate?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkInvoiceItemUpdate> = z
        .object({
            acceptedPaymentMethods: z
                .array(BulkInvoiceItemUpdateAcceptedPaymentMethods$)
                .nullable()
                .optional(),
            amount: z.number().nullable().optional(),
            bulkInvoiceBatchId: z.string().nullable().optional(),
            bulkInvoiceItemMergeKey: z.string().nullable().optional(),
            bulkInvoiceItemReference: z.string().nullable().optional(),
            clientEmail: z.string().nullable().optional(),
            clientExternalId: z.string().nullable().optional(),
            creditFeeHandling: FeeHandlingConfig$.outboundSchema.nullable().optional(),
            dueDate: z.string().nullable().optional(),
            invoiceNotes: z.string().nullable().optional(),
            invoiceStatus: BulkInvoiceItemUpdateInvoiceStatus$.nullable().optional(),
            labels: z.record(z.string()).nullable().optional(),
            lineItemDescription: z.string().nullable().optional(),
            lineItemDetail: z.string().nullable().optional(),
            memberClientId: z.string().nullable().optional(),
            paidDate: z.string().nullable().optional(),
            projectName: z.string().nullable().optional(),
            reimbursableExpense: z.boolean().nullable().optional(),
            sendDate: z.string().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.bulkInvoiceBatchId === undefined
                    ? null
                    : { bulkInvoiceBatchId: v.bulkInvoiceBatchId }),
                ...(v.bulkInvoiceItemMergeKey === undefined
                    ? null
                    : { bulkInvoiceItemMergeKey: v.bulkInvoiceItemMergeKey }),
                ...(v.bulkInvoiceItemReference === undefined
                    ? null
                    : { bulkInvoiceItemReference: v.bulkInvoiceItemReference }),
                ...(v.clientEmail === undefined ? null : { clientEmail: v.clientEmail }),
                ...(v.clientExternalId === undefined
                    ? null
                    : { clientExternalId: v.clientExternalId }),
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                ...(v.invoiceStatus === undefined ? null : { invoiceStatus: v.invoiceStatus }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.lineItemDescription === undefined
                    ? null
                    : { lineItemDescription: v.lineItemDescription }),
                ...(v.lineItemDetail === undefined ? null : { lineItemDetail: v.lineItemDetail }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                ...(v.paidDate === undefined ? null : { paidDate: v.paidDate }),
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.reimbursableExpense === undefined
                    ? null
                    : { reimbursableExpense: v.reimbursableExpense }),
                ...(v.sendDate === undefined ? null : { sendDate: v.sendDate }),
            };
        });
}
