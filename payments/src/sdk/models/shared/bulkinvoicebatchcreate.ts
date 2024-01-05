/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum BulkInvoiceBatchCreateProcessingStrategy {
    Merge = "Merge",
    Single = "Single",
}

export type BulkInvoiceBatchCreate = {
    labels?: Record<string, string> | null | undefined;
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy;
};

/** @internal */
export const BulkInvoiceBatchCreateProcessingStrategy$ = z.nativeEnum(
    BulkInvoiceBatchCreateProcessingStrategy
);

/** @internal */
export namespace BulkInvoiceBatchCreate$ {
    export type Inbound = {
        labels?: Record<string, string> | null | undefined;
        processingStrategy: BulkInvoiceBatchCreateProcessingStrategy;
    };

    export const inboundSchema: z.ZodType<BulkInvoiceBatchCreate, z.ZodTypeDef, Inbound> = z
        .object({
            labels: z.record(z.string()).nullable().optional(),
            processingStrategy: BulkInvoiceBatchCreateProcessingStrategy$,
        })
        .transform((v) => {
            return {
                ...(v.labels === undefined ? null : { labels: v.labels }),
                processingStrategy: v.processingStrategy,
            };
        });

    export type Outbound = {
        labels?: Record<string, string> | null | undefined;
        processingStrategy: BulkInvoiceBatchCreateProcessingStrategy;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkInvoiceBatchCreate> = z
        .object({
            labels: z.record(z.string()).nullable().optional(),
            processingStrategy: BulkInvoiceBatchCreateProcessingStrategy$,
        })
        .transform((v) => {
            return {
                ...(v.labels === undefined ? null : { labels: v.labels }),
                processingStrategy: v.processingStrategy,
            };
        });
}
