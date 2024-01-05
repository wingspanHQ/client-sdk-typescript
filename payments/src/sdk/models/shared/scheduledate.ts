/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum ScheduleDateStatus {
    Pending = "Pending",
    Completed = "Completed",
    Skipped = "Skipped",
    Modified = "Modified",
}

export type ScheduleDate = {
    cutOffDate?: string | null | undefined;
    date: string;
    invoiceId?: string | null | undefined;
    invoiceTemplateId?: string | null | undefined;
    status: ScheduleDateStatus;
};

/** @internal */
export const ScheduleDateStatus$ = z.nativeEnum(ScheduleDateStatus);

/** @internal */
export namespace ScheduleDate$ {
    export type Inbound = {
        cutOffDate?: string | null | undefined;
        date: string;
        invoiceId?: string | null | undefined;
        invoiceTemplateId?: string | null | undefined;
        status: ScheduleDateStatus;
    };

    export const inboundSchema: z.ZodType<ScheduleDate, z.ZodTypeDef, Inbound> = z
        .object({
            cutOffDate: z.string().nullable().optional(),
            date: z.string(),
            invoiceId: z.string().nullable().optional(),
            invoiceTemplateId: z.string().nullable().optional(),
            status: ScheduleDateStatus$,
        })
        .transform((v) => {
            return {
                ...(v.cutOffDate === undefined ? null : { cutOffDate: v.cutOffDate }),
                date: v.date,
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                ...(v.invoiceTemplateId === undefined
                    ? null
                    : { invoiceTemplateId: v.invoiceTemplateId }),
                status: v.status,
            };
        });

    export type Outbound = {
        cutOffDate?: string | null | undefined;
        date: string;
        invoiceId?: string | null | undefined;
        invoiceTemplateId?: string | null | undefined;
        status: ScheduleDateStatus;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScheduleDate> = z
        .object({
            cutOffDate: z.string().nullable().optional(),
            date: z.string(),
            invoiceId: z.string().nullable().optional(),
            invoiceTemplateId: z.string().nullable().optional(),
            status: ScheduleDateStatus$,
        })
        .transform((v) => {
            return {
                ...(v.cutOffDate === undefined ? null : { cutOffDate: v.cutOffDate }),
                date: v.date,
                ...(v.invoiceId === undefined ? null : { invoiceId: v.invoiceId }),
                ...(v.invoiceTemplateId === undefined
                    ? null
                    : { invoiceTemplateId: v.invoiceTemplateId }),
                status: v.status,
            };
        });
}
