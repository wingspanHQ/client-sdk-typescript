/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdatePayableBatchRequest = {
    bulkPayableBatchUpdate?: shared.BulkPayableBatchUpdate | undefined;
    /**
     * Unique identifier for a batch
     */
    batchId: string;
};

export type UpdatePayableBatchResponse = {
    /**
     * A batch of items for importing as payables
     */
    bulkPayableBatch?: shared.BulkPayableBatch | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export const UpdatePayableBatchRequest$inboundSchema: z.ZodType<
    UpdatePayableBatchRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        BulkPayableBatchUpdate: shared.BulkPayableBatchUpdate$inboundSchema.optional(),
        batchId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            BulkPayableBatchUpdate: "bulkPayableBatchUpdate",
        });
    });

/** @internal */
export type UpdatePayableBatchRequest$Outbound = {
    BulkPayableBatchUpdate?: shared.BulkPayableBatchUpdate$Outbound | undefined;
    batchId: string;
};

/** @internal */
export const UpdatePayableBatchRequest$outboundSchema: z.ZodType<
    UpdatePayableBatchRequest$Outbound,
    z.ZodTypeDef,
    UpdatePayableBatchRequest
> = z
    .object({
        bulkPayableBatchUpdate: shared.BulkPayableBatchUpdate$outboundSchema.optional(),
        batchId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            bulkPayableBatchUpdate: "BulkPayableBatchUpdate",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePayableBatchRequest$ {
    /** @deprecated use `UpdatePayableBatchRequest$inboundSchema` instead. */
    export const inboundSchema = UpdatePayableBatchRequest$inboundSchema;
    /** @deprecated use `UpdatePayableBatchRequest$outboundSchema` instead. */
    export const outboundSchema = UpdatePayableBatchRequest$outboundSchema;
    /** @deprecated use `UpdatePayableBatchRequest$Outbound` instead. */
    export type Outbound = UpdatePayableBatchRequest$Outbound;
}

/** @internal */
export const UpdatePayableBatchResponse$inboundSchema: z.ZodType<
    UpdatePayableBatchResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        BulkPayableBatch: shared.BulkPayableBatch$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            BulkPayableBatch: "bulkPayableBatch",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdatePayableBatchResponse$Outbound = {
    BulkPayableBatch?: shared.BulkPayableBatch$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdatePayableBatchResponse$outboundSchema: z.ZodType<
    UpdatePayableBatchResponse$Outbound,
    z.ZodTypeDef,
    UpdatePayableBatchResponse
> = z
    .object({
        bulkPayableBatch: shared.BulkPayableBatch$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            bulkPayableBatch: "BulkPayableBatch",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePayableBatchResponse$ {
    /** @deprecated use `UpdatePayableBatchResponse$inboundSchema` instead. */
    export const inboundSchema = UpdatePayableBatchResponse$inboundSchema;
    /** @deprecated use `UpdatePayableBatchResponse$outboundSchema` instead. */
    export const outboundSchema = UpdatePayableBatchResponse$outboundSchema;
    /** @deprecated use `UpdatePayableBatchResponse$Outbound` instead. */
    export type Outbound = UpdatePayableBatchResponse$Outbound;
}
