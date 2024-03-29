/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
export namespace GetClientBatchItemRequest$ {
    export type Inbound = {
        batchId: string;
        batchItemId: string;
    };

    export const inboundSchema: z.ZodType<GetClientBatchItemRequest, z.ZodTypeDef, Inbound> = z
        .object({
            batchId: z.string(),
            batchItemId: z.string(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
                batchItemId: v.batchItemId,
            };
        });

    export type Outbound = {
        batchId: string;
        batchItemId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetClientBatchItemRequest> = z
        .object({
            batchId: z.string(),
            batchItemId: z.string(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
                batchItemId: v.batchItemId,
            };
        });
}

/** @internal */
export namespace GetClientBatchItemResponse$ {
    export type Inbound = {
        BulkClientItem?: shared.BulkClientItem$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetClientBatchItemResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BulkClientItem: shared.BulkClientItem$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BulkClientItem === undefined ? null : { bulkClientItem: v.BulkClientItem }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BulkClientItem?: shared.BulkClientItem$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetClientBatchItemResponse> = z
        .object({
            bulkClientItem: shared.BulkClientItem$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkClientItem === undefined ? null : { BulkClientItem: v.bulkClientItem }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
