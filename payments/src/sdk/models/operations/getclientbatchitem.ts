/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetClientBatchItemRequest = {
    /**
     * Unique identifier for a batch
     */
    batchId: string;
    /**
     * Unique identifier for an item in a batch
     */
    batchItemId: string;
};

export type GetClientBatchItemResponse = {
    /**
     * An item that will be converted into a client
     */
    bulkClientItem?: shared.BulkClientItem | undefined;
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
export const GetClientBatchItemRequest$inboundSchema: z.ZodType<
    GetClientBatchItemRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    batchId: z.string(),
    batchItemId: z.string(),
});

/** @internal */
export type GetClientBatchItemRequest$Outbound = {
    batchId: string;
    batchItemId: string;
};

/** @internal */
export const GetClientBatchItemRequest$outboundSchema: z.ZodType<
    GetClientBatchItemRequest$Outbound,
    z.ZodTypeDef,
    GetClientBatchItemRequest
> = z.object({
    batchId: z.string(),
    batchItemId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClientBatchItemRequest$ {
    /** @deprecated use `GetClientBatchItemRequest$inboundSchema` instead. */
    export const inboundSchema = GetClientBatchItemRequest$inboundSchema;
    /** @deprecated use `GetClientBatchItemRequest$outboundSchema` instead. */
    export const outboundSchema = GetClientBatchItemRequest$outboundSchema;
    /** @deprecated use `GetClientBatchItemRequest$Outbound` instead. */
    export type Outbound = GetClientBatchItemRequest$Outbound;
}

/** @internal */
export const GetClientBatchItemResponse$inboundSchema: z.ZodType<
    GetClientBatchItemResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        BulkClientItem: shared.BulkClientItem$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            BulkClientItem: "bulkClientItem",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetClientBatchItemResponse$Outbound = {
    BulkClientItem?: shared.BulkClientItem$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetClientBatchItemResponse$outboundSchema: z.ZodType<
    GetClientBatchItemResponse$Outbound,
    z.ZodTypeDef,
    GetClientBatchItemResponse
> = z
    .object({
        bulkClientItem: shared.BulkClientItem$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            bulkClientItem: "BulkClientItem",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClientBatchItemResponse$ {
    /** @deprecated use `GetClientBatchItemResponse$inboundSchema` instead. */
    export const inboundSchema = GetClientBatchItemResponse$inboundSchema;
    /** @deprecated use `GetClientBatchItemResponse$outboundSchema` instead. */
    export const outboundSchema = GetClientBatchItemResponse$outboundSchema;
    /** @deprecated use `GetClientBatchItemResponse$Outbound` instead. */
    export type Outbound = GetClientBatchItemResponse$Outbound;
}
