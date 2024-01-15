/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum BulkPayableBatchCreateProcessingStrategy {
    Merge = "Merge",
    Single = "Single",
}

export type BulkPayableBatchCreate = {
    labels?: Record<string, string> | null | undefined;
    processingStrategy: BulkPayableBatchCreateProcessingStrategy;
};

/** @internal */
export const BulkPayableBatchCreateProcessingStrategy$ = z.nativeEnum(
    BulkPayableBatchCreateProcessingStrategy
);

/** @internal */
export namespace BulkPayableBatchCreate$ {
    export type Inbound = {
        labels?: Record<string, string> | null | undefined;
        processingStrategy: BulkPayableBatchCreateProcessingStrategy;
    };

    export const inboundSchema: z.ZodType<BulkPayableBatchCreate, z.ZodTypeDef, Inbound> = z
        .object({
            labels: z.nullable(z.record(z.string())).optional(),
            processingStrategy: BulkPayableBatchCreateProcessingStrategy$,
        })
        .transform((v) => {
            return {
                ...(v.labels === undefined ? null : { labels: v.labels }),
                processingStrategy: v.processingStrategy,
            };
        });

    export type Outbound = {
        labels?: Record<string, string> | null | undefined;
        processingStrategy: BulkPayableBatchCreateProcessingStrategy;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkPayableBatchCreate> = z
        .object({
            labels: z.nullable(z.record(z.string())).optional(),
            processingStrategy: BulkPayableBatchCreateProcessingStrategy$,
        })
        .transform((v) => {
            return {
                ...(v.labels === undefined ? null : { labels: v.labels }),
                processingStrategy: v.processingStrategy,
            };
        });
}
