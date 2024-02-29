/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a,
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$,
} from "./c1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a";
import { FeeHandlingConfig, FeeHandlingConfig$ } from "./feehandlingconfig";
import { InvoiceIntegrations, InvoiceIntegrations$ } from "./invoiceintegrations";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum AcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export enum InvoiceStatus {
    Draft = "Draft",
    Open = "Open",
    Approved = "Approved",
    Paid = "Paid",
    Cancelled = "Cancelled",
}

export enum BulkInvoiceItemStatus {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

export type BulkInvoiceItem = {
    acceptedPaymentMethods?: Array<AcceptedPaymentMethods> | null | undefined;
    amount: number;
    bulkInvoiceBatchId: string;
    bulkInvoiceItemId: string;
    bulkInvoiceItemMergeKey?: string | null | undefined;
    bulkInvoiceItemReference?: string | null | undefined;
    clientEmail?: string | null | undefined;
    clientExternalId?: string | null | undefined;
    createdAt: string;
    creditFeeHandling?: FeeHandlingConfig | null | undefined;
    dueDate: string;
    eventActors: Record<string, string>;
    integration?: InvoiceIntegrations | null | undefined;
    invoiceDate?: string | null | undefined;
    invoiceNotes?: string | null | undefined;
    invoiceStatus: InvoiceStatus;
    labels: Record<string, string>;
    lineItemDescription: string;
    lineItemDetail?: string | null | undefined;
    memberClientId?: string | null | undefined;
    memberId: string;
    metadata?: C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a | null | undefined;
    paidDate: string;
    projectName?: string | null | undefined;
    reimbursableExpense?: boolean | null | undefined;
    sendDate?: string | null | undefined;
    status: BulkInvoiceItemStatus;
    updatedAt: string;
    userRoles: UserRoles;
};

/** @internal */
export const AcceptedPaymentMethods$ = z.nativeEnum(AcceptedPaymentMethods);

/** @internal */
export const InvoiceStatus$ = z.nativeEnum(InvoiceStatus);

/** @internal */
export const BulkInvoiceItemStatus$ = z.nativeEnum(BulkInvoiceItemStatus);

/** @internal */
export namespace BulkInvoiceItem$ {
    export type Inbound = {
        acceptedPaymentMethods?: Array<AcceptedPaymentMethods> | null | undefined;
        amount: number;
        bulkInvoiceBatchId: string;
        bulkInvoiceItemId: string;
        bulkInvoiceItemMergeKey?: string | null | undefined;
        bulkInvoiceItemReference?: string | null | undefined;
        clientEmail?: string | null | undefined;
        clientExternalId?: string | null | undefined;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Inbound | null | undefined;
        dueDate: string;
        eventActors: Record<string, string>;
        integration?: InvoiceIntegrations$.Inbound | null | undefined;
        invoiceDate?: string | null | undefined;
        invoiceNotes?: string | null | undefined;
        invoiceStatus: InvoiceStatus;
        labels: Record<string, string>;
        lineItemDescription: string;
        lineItemDetail?: string | null | undefined;
        memberClientId?: string | null | undefined;
        memberId: string;
        metadata?:
            | C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$.Inbound
            | null
            | undefined;
        paidDate: string;
        projectName?: string | null | undefined;
        reimbursableExpense?: boolean | null | undefined;
        sendDate?: string | null | undefined;
        status: BulkInvoiceItemStatus;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<BulkInvoiceItem, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedPaymentMethods: z.nullable(z.array(AcceptedPaymentMethods$)).optional(),
            amount: z.number(),
            bulkInvoiceBatchId: z.string(),
            bulkInvoiceItemId: z.string(),
            bulkInvoiceItemMergeKey: z.nullable(z.string()).optional(),
            bulkInvoiceItemReference: z.nullable(z.string()).optional(),
            clientEmail: z.nullable(z.string()).optional(),
            clientExternalId: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.inboundSchema).optional(),
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            integration: z.nullable(InvoiceIntegrations$.inboundSchema).optional(),
            invoiceDate: z.nullable(z.string()).optional(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceStatus: InvoiceStatus$,
            labels: z.record(z.string()),
            lineItemDescription: z.string(),
            lineItemDetail: z.nullable(z.string()).optional(),
            memberClientId: z.nullable(z.string()).optional(),
            memberId: z.string(),
            metadata: z
                .nullable(
                    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$.inboundSchema
                )
                .optional(),
            paidDate: z.string(),
            projectName: z.nullable(z.string()).optional(),
            reimbursableExpense: z.nullable(z.boolean()).optional(),
            sendDate: z.nullable(z.string()).optional(),
            status: BulkInvoiceItemStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                amount: v.amount,
                bulkInvoiceBatchId: v.bulkInvoiceBatchId,
                bulkInvoiceItemId: v.bulkInvoiceItemId,
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
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.invoiceDate === undefined ? null : { invoiceDate: v.invoiceDate }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                invoiceStatus: v.invoiceStatus,
                labels: v.labels,
                lineItemDescription: v.lineItemDescription,
                ...(v.lineItemDetail === undefined ? null : { lineItemDetail: v.lineItemDetail }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                paidDate: v.paidDate,
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.reimbursableExpense === undefined
                    ? null
                    : { reimbursableExpense: v.reimbursableExpense }),
                ...(v.sendDate === undefined ? null : { sendDate: v.sendDate }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        acceptedPaymentMethods?: Array<AcceptedPaymentMethods> | null | undefined;
        amount: number;
        bulkInvoiceBatchId: string;
        bulkInvoiceItemId: string;
        bulkInvoiceItemMergeKey?: string | null | undefined;
        bulkInvoiceItemReference?: string | null | undefined;
        clientEmail?: string | null | undefined;
        clientExternalId?: string | null | undefined;
        createdAt: string;
        creditFeeHandling?: FeeHandlingConfig$.Outbound | null | undefined;
        dueDate: string;
        eventActors: Record<string, string>;
        integration?: InvoiceIntegrations$.Outbound | null | undefined;
        invoiceDate?: string | null | undefined;
        invoiceNotes?: string | null | undefined;
        invoiceStatus: InvoiceStatus;
        labels: Record<string, string>;
        lineItemDescription: string;
        lineItemDetail?: string | null | undefined;
        memberClientId?: string | null | undefined;
        memberId: string;
        metadata?:
            | C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$.Outbound
            | null
            | undefined;
        paidDate: string;
        projectName?: string | null | undefined;
        reimbursableExpense?: boolean | null | undefined;
        sendDate?: string | null | undefined;
        status: BulkInvoiceItemStatus;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkInvoiceItem> = z
        .object({
            acceptedPaymentMethods: z.nullable(z.array(AcceptedPaymentMethods$)).optional(),
            amount: z.number(),
            bulkInvoiceBatchId: z.string(),
            bulkInvoiceItemId: z.string(),
            bulkInvoiceItemMergeKey: z.nullable(z.string()).optional(),
            bulkInvoiceItemReference: z.nullable(z.string()).optional(),
            clientEmail: z.nullable(z.string()).optional(),
            clientExternalId: z.nullable(z.string()).optional(),
            createdAt: z.string(),
            creditFeeHandling: z.nullable(FeeHandlingConfig$.outboundSchema).optional(),
            dueDate: z.string(),
            eventActors: z.record(z.string()),
            integration: z.nullable(InvoiceIntegrations$.outboundSchema).optional(),
            invoiceDate: z.nullable(z.string()).optional(),
            invoiceNotes: z.nullable(z.string()).optional(),
            invoiceStatus: InvoiceStatus$,
            labels: z.record(z.string()),
            lineItemDescription: z.string(),
            lineItemDetail: z.nullable(z.string()).optional(),
            memberClientId: z.nullable(z.string()).optional(),
            memberId: z.string(),
            metadata: z
                .nullable(
                    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$.outboundSchema
                )
                .optional(),
            paidDate: z.string(),
            projectName: z.nullable(z.string()).optional(),
            reimbursableExpense: z.nullable(z.boolean()).optional(),
            sendDate: z.nullable(z.string()).optional(),
            status: BulkInvoiceItemStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.acceptedPaymentMethods === undefined
                    ? null
                    : { acceptedPaymentMethods: v.acceptedPaymentMethods }),
                amount: v.amount,
                bulkInvoiceBatchId: v.bulkInvoiceBatchId,
                bulkInvoiceItemId: v.bulkInvoiceItemId,
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
                createdAt: v.createdAt,
                ...(v.creditFeeHandling === undefined
                    ? null
                    : { creditFeeHandling: v.creditFeeHandling }),
                dueDate: v.dueDate,
                eventActors: v.eventActors,
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.invoiceDate === undefined ? null : { invoiceDate: v.invoiceDate }),
                ...(v.invoiceNotes === undefined ? null : { invoiceNotes: v.invoiceNotes }),
                invoiceStatus: v.invoiceStatus,
                labels: v.labels,
                lineItemDescription: v.lineItemDescription,
                ...(v.lineItemDetail === undefined ? null : { lineItemDetail: v.lineItemDetail }),
                ...(v.memberClientId === undefined ? null : { memberClientId: v.memberClientId }),
                memberId: v.memberId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                paidDate: v.paidDate,
                ...(v.projectName === undefined ? null : { projectName: v.projectName }),
                ...(v.reimbursableExpense === undefined
                    ? null
                    : { reimbursableExpense: v.reimbursableExpense }),
                ...(v.sendDate === undefined ? null : { sendDate: v.sendDate }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
