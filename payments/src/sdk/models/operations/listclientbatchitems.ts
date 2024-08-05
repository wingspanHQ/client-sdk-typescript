/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListClientBatchItemsRequest = {
    /**
     * Unique identifier for a batch
     */
    batchId: string;
};

export type ListClientBatchItemsResponse = {
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
    /**
     * A list of bulk client items
     */
    classes?: Array<shared.BulkClientItem> | undefined;
};

/** @internal */
export const ListClientBatchItemsRequest$inboundSchema: z.ZodType<
    ListClientBatchItemsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    batchId: z.string(),
});

/** @internal */
export type ListClientBatchItemsRequest$Outbound = {
    batchId: string;
};

/** @internal */
export const ListClientBatchItemsRequest$outboundSchema: z.ZodType<
    ListClientBatchItemsRequest$Outbound,
    z.ZodTypeDef,
    ListClientBatchItemsRequest
> = z.object({
    batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListClientBatchItemsRequest$ {
    /** @deprecated use `ListClientBatchItemsRequest$inboundSchema` instead. */
    export const inboundSchema = ListClientBatchItemsRequest$inboundSchema;
    /** @deprecated use `ListClientBatchItemsRequest$outboundSchema` instead. */
    export const outboundSchema = ListClientBatchItemsRequest$outboundSchema;
    /** @deprecated use `ListClientBatchItemsRequest$Outbound` instead. */
    export type Outbound = ListClientBatchItemsRequest$Outbound;
}

/** @internal */
export const ListClientBatchItemsResponse$inboundSchema: z.ZodType<
    ListClientBatchItemsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.BulkClientItem$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListClientBatchItemsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.BulkClientItem$Outbound> | undefined;
};

/** @internal */
export const ListClientBatchItemsResponse$outboundSchema: z.ZodType<
    ListClientBatchItemsResponse$Outbound,
    z.ZodTypeDef,
    ListClientBatchItemsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.BulkClientItem$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListClientBatchItemsResponse$ {
    /** @deprecated use `ListClientBatchItemsResponse$inboundSchema` instead. */
    export const inboundSchema = ListClientBatchItemsResponse$inboundSchema;
    /** @deprecated use `ListClientBatchItemsResponse$outboundSchema` instead. */
    export const outboundSchema = ListClientBatchItemsResponse$outboundSchema;
    /** @deprecated use `ListClientBatchItemsResponse$Outbound` instead. */
    export type Outbound = ListClientBatchItemsResponse$Outbound;
}
