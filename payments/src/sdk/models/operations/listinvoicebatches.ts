/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListInvoiceBatchesResponse = {
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
     * A list of bulk invoice batches
     */
    classes?: Array<shared.BulkInvoiceBatch> | undefined;
};

/** @internal */
export const ListInvoiceBatchesResponse$inboundSchema: z.ZodType<
    ListInvoiceBatchesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        classes: z.array(shared.BulkInvoiceBatch$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListInvoiceBatchesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    classes?: Array<shared.BulkInvoiceBatch$Outbound> | undefined;
};

/** @internal */
export const ListInvoiceBatchesResponse$outboundSchema: z.ZodType<
    ListInvoiceBatchesResponse$Outbound,
    z.ZodTypeDef,
    ListInvoiceBatchesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: z.array(shared.BulkInvoiceBatch$outboundSchema).optional(),
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
export namespace ListInvoiceBatchesResponse$ {
    /** @deprecated use `ListInvoiceBatchesResponse$inboundSchema` instead. */
    export const inboundSchema = ListInvoiceBatchesResponse$inboundSchema;
    /** @deprecated use `ListInvoiceBatchesResponse$outboundSchema` instead. */
    export const outboundSchema = ListInvoiceBatchesResponse$outboundSchema;
    /** @deprecated use `ListInvoiceBatchesResponse$Outbound` instead. */
    export type Outbound = ListInvoiceBatchesResponse$Outbound;
}
