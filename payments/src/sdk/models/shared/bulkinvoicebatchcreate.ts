/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const BulkInvoiceBatchCreateProcessingStrategy = {
    Merge: "Merge",
    Single: "Single",
} as const;
export type BulkInvoiceBatchCreateProcessingStrategy = ClosedEnum<
    typeof BulkInvoiceBatchCreateProcessingStrategy
>;

export type BulkInvoiceBatchCreate = {
    labels?: { [k: string]: string } | null | undefined;
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy;
};

/** @internal */
export const BulkInvoiceBatchCreateProcessingStrategy$inboundSchema: z.ZodNativeEnum<
    typeof BulkInvoiceBatchCreateProcessingStrategy
> = z.nativeEnum(BulkInvoiceBatchCreateProcessingStrategy);

/** @internal */
export const BulkInvoiceBatchCreateProcessingStrategy$outboundSchema: z.ZodNativeEnum<
    typeof BulkInvoiceBatchCreateProcessingStrategy
> = BulkInvoiceBatchCreateProcessingStrategy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceBatchCreateProcessingStrategy$ {
    /** @deprecated use `BulkInvoiceBatchCreateProcessingStrategy$inboundSchema` instead. */
    export const inboundSchema = BulkInvoiceBatchCreateProcessingStrategy$inboundSchema;
    /** @deprecated use `BulkInvoiceBatchCreateProcessingStrategy$outboundSchema` instead. */
    export const outboundSchema = BulkInvoiceBatchCreateProcessingStrategy$outboundSchema;
}

/** @internal */
export const BulkInvoiceBatchCreate$inboundSchema: z.ZodType<
    BulkInvoiceBatchCreate,
    z.ZodTypeDef,
    unknown
> = z.object({
    labels: z.nullable(z.record(z.string())).optional(),
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy$inboundSchema,
});

/** @internal */
export type BulkInvoiceBatchCreate$Outbound = {
    labels?: { [k: string]: string } | null | undefined;
    processingStrategy: string;
};

/** @internal */
export const BulkInvoiceBatchCreate$outboundSchema: z.ZodType<
    BulkInvoiceBatchCreate$Outbound,
    z.ZodTypeDef,
    BulkInvoiceBatchCreate
> = z.object({
    labels: z.nullable(z.record(z.string())).optional(),
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkInvoiceBatchCreate$ {
    /** @deprecated use `BulkInvoiceBatchCreate$inboundSchema` instead. */
    export const inboundSchema = BulkInvoiceBatchCreate$inboundSchema;
    /** @deprecated use `BulkInvoiceBatchCreate$outboundSchema` instead. */
    export const outboundSchema = BulkInvoiceBatchCreate$outboundSchema;
    /** @deprecated use `BulkInvoiceBatchCreate$Outbound` instead. */
    export type Outbound = BulkInvoiceBatchCreate$Outbound;
}
