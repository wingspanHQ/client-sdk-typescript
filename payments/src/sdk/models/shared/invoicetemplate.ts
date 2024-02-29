/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Frequency, Frequency$ } from "./frequency";
import { Invoice, Invoice$ } from "./invoice";
import { ScheduleDate, ScheduleDate$ } from "./scheduledate";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum InvoiceTemplateStatus {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
}

export type InvoiceTemplate = {
    accountId?: string | null | undefined;
    autoPaymentRequired?: boolean | null | undefined;
    createdAt: string;
    createdInvoiceId?: string | null | undefined;
    dueInDays?: number | null | undefined;
    eventActors: Record<string, string>;
    frequency?: Frequency | null | undefined;
    invoiceData: Invoice;
    invoiceTemplateId: string;
    isSchedulingOnly?: boolean | null | undefined;
    labels: Record<string, string>;
    lastInvoiceDate?: string | null | undefined;
    memberId: string;
    nextInvoiceDate?: string | null | undefined;
    paymentMethodId?: string | null | undefined;
    scheduleDates?: Array<ScheduleDate> | null | undefined;
    status: InvoiceTemplateStatus;
    updatedAt: string;
    userRoles: UserRoles;
};

/** @internal */
export const InvoiceTemplateStatus$ = z.nativeEnum(InvoiceTemplateStatus);

/** @internal */
export namespace InvoiceTemplate$ {
    export type Inbound = {
        accountId?: string | null | undefined;
        autoPaymentRequired?: boolean | null | undefined;
        createdAt: string;
        createdInvoiceId?: string | null | undefined;
        dueInDays?: number | null | undefined;
        eventActors: Record<string, string>;
        frequency?: Frequency$.Inbound | null | undefined;
        invoiceData: Invoice$.Inbound;
        invoiceTemplateId: string;
        isSchedulingOnly?: boolean | null | undefined;
        labels: Record<string, string>;
        lastInvoiceDate?: string | null | undefined;
        memberId: string;
        nextInvoiceDate?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
        scheduleDates?: Array<ScheduleDate$.Inbound> | null | undefined;
        status: InvoiceTemplateStatus;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<InvoiceTemplate, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            autoPaymentRequired: z.nullable(z.boolean()).optional(),
            createdAt: z.string(),
            createdInvoiceId: z.nullable(z.string()).optional(),
            dueInDays: z.nullable(z.number()).optional(),
            eventActors: z.record(z.string()),
            frequency: z.nullable(Frequency$.inboundSchema).optional(),
            invoiceData: Invoice$.inboundSchema,
            invoiceTemplateId: z.string(),
            isSchedulingOnly: z.nullable(z.boolean()).optional(),
            labels: z.record(z.string()),
            lastInvoiceDate: z.nullable(z.string()).optional(),
            memberId: z.string(),
            nextInvoiceDate: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            scheduleDates: z.nullable(z.array(ScheduleDate$.inboundSchema)).optional(),
            status: InvoiceTemplateStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.autoPaymentRequired === undefined
                    ? null
                    : { autoPaymentRequired: v.autoPaymentRequired }),
                createdAt: v.createdAt,
                ...(v.createdInvoiceId === undefined
                    ? null
                    : { createdInvoiceId: v.createdInvoiceId }),
                ...(v.dueInDays === undefined ? null : { dueInDays: v.dueInDays }),
                eventActors: v.eventActors,
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                invoiceData: v.invoiceData,
                invoiceTemplateId: v.invoiceTemplateId,
                ...(v.isSchedulingOnly === undefined
                    ? null
                    : { isSchedulingOnly: v.isSchedulingOnly }),
                labels: v.labels,
                ...(v.lastInvoiceDate === undefined
                    ? null
                    : { lastInvoiceDate: v.lastInvoiceDate }),
                memberId: v.memberId,
                ...(v.nextInvoiceDate === undefined
                    ? null
                    : { nextInvoiceDate: v.nextInvoiceDate }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.scheduleDates === undefined ? null : { scheduleDates: v.scheduleDates }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        accountId?: string | null | undefined;
        autoPaymentRequired?: boolean | null | undefined;
        createdAt: string;
        createdInvoiceId?: string | null | undefined;
        dueInDays?: number | null | undefined;
        eventActors: Record<string, string>;
        frequency?: Frequency$.Outbound | null | undefined;
        invoiceData: Invoice$.Outbound;
        invoiceTemplateId: string;
        isSchedulingOnly?: boolean | null | undefined;
        labels: Record<string, string>;
        lastInvoiceDate?: string | null | undefined;
        memberId: string;
        nextInvoiceDate?: string | null | undefined;
        paymentMethodId?: string | null | undefined;
        scheduleDates?: Array<ScheduleDate$.Outbound> | null | undefined;
        status: InvoiceTemplateStatus;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceTemplate> = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            autoPaymentRequired: z.nullable(z.boolean()).optional(),
            createdAt: z.string(),
            createdInvoiceId: z.nullable(z.string()).optional(),
            dueInDays: z.nullable(z.number()).optional(),
            eventActors: z.record(z.string()),
            frequency: z.nullable(Frequency$.outboundSchema).optional(),
            invoiceData: Invoice$.outboundSchema,
            invoiceTemplateId: z.string(),
            isSchedulingOnly: z.nullable(z.boolean()).optional(),
            labels: z.record(z.string()),
            lastInvoiceDate: z.nullable(z.string()).optional(),
            memberId: z.string(),
            nextInvoiceDate: z.nullable(z.string()).optional(),
            paymentMethodId: z.nullable(z.string()).optional(),
            scheduleDates: z.nullable(z.array(ScheduleDate$.outboundSchema)).optional(),
            status: InvoiceTemplateStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.autoPaymentRequired === undefined
                    ? null
                    : { autoPaymentRequired: v.autoPaymentRequired }),
                createdAt: v.createdAt,
                ...(v.createdInvoiceId === undefined
                    ? null
                    : { createdInvoiceId: v.createdInvoiceId }),
                ...(v.dueInDays === undefined ? null : { dueInDays: v.dueInDays }),
                eventActors: v.eventActors,
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
                invoiceData: v.invoiceData,
                invoiceTemplateId: v.invoiceTemplateId,
                ...(v.isSchedulingOnly === undefined
                    ? null
                    : { isSchedulingOnly: v.isSchedulingOnly }),
                labels: v.labels,
                ...(v.lastInvoiceDate === undefined
                    ? null
                    : { lastInvoiceDate: v.lastInvoiceDate }),
                memberId: v.memberId,
                ...(v.nextInvoiceDate === undefined
                    ? null
                    : { nextInvoiceDate: v.nextInvoiceDate }),
                ...(v.paymentMethodId === undefined
                    ? null
                    : { paymentMethodId: v.paymentMethodId }),
                ...(v.scheduleDates === undefined ? null : { scheduleDates: v.scheduleDates }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
