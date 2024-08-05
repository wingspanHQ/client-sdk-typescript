/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ScheduleDateUpdateStatus = {
    Pending: "Pending",
    Completed: "Completed",
    Skipped: "Skipped",
    Modified: "Modified",
} as const;
export type ScheduleDateUpdateStatus = ClosedEnum<typeof ScheduleDateUpdateStatus>;

export type ScheduleDateUpdate = {
    date?: string | null | undefined;
    invoiceTemplateId?: string | null | undefined;
    status?: ScheduleDateUpdateStatus | null | undefined;
};

/** @internal */
export const ScheduleDateUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ScheduleDateUpdateStatus
> = z.nativeEnum(ScheduleDateUpdateStatus);

/** @internal */
export const ScheduleDateUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ScheduleDateUpdateStatus
> = ScheduleDateUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduleDateUpdateStatus$ {
    /** @deprecated use `ScheduleDateUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ScheduleDateUpdateStatus$inboundSchema;
    /** @deprecated use `ScheduleDateUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ScheduleDateUpdateStatus$outboundSchema;
}

/** @internal */
export const ScheduleDateUpdate$inboundSchema: z.ZodType<
    ScheduleDateUpdate,
    z.ZodTypeDef,
    unknown
> = z.object({
    date: z.nullable(z.string()).optional(),
    invoiceTemplateId: z.nullable(z.string()).optional(),
    status: z.nullable(ScheduleDateUpdateStatus$inboundSchema).optional(),
});

/** @internal */
export type ScheduleDateUpdate$Outbound = {
    date?: string | null | undefined;
    invoiceTemplateId?: string | null | undefined;
    status?: string | null | undefined;
};

/** @internal */
export const ScheduleDateUpdate$outboundSchema: z.ZodType<
    ScheduleDateUpdate$Outbound,
    z.ZodTypeDef,
    ScheduleDateUpdate
> = z.object({
    date: z.nullable(z.string()).optional(),
    invoiceTemplateId: z.nullable(z.string()).optional(),
    status: z.nullable(ScheduleDateUpdateStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduleDateUpdate$ {
    /** @deprecated use `ScheduleDateUpdate$inboundSchema` instead. */
    export const inboundSchema = ScheduleDateUpdate$inboundSchema;
    /** @deprecated use `ScheduleDateUpdate$outboundSchema` instead. */
    export const outboundSchema = ScheduleDateUpdate$outboundSchema;
    /** @deprecated use `ScheduleDateUpdate$Outbound` instead. */
    export type Outbound = ScheduleDateUpdate$Outbound;
}
