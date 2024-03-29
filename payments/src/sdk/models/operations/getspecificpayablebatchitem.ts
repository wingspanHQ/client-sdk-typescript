/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetSpecificPayableBatchItemRequest = {
    /**
     * Unique identifier for a batch
     */
    batchId: string;
    /**
     * Unique identifier for an item in a batch
     */
    batchItemId: string;
};

export type GetSpecificPayableBatchItemResponse = {
    /**
     * An item that will be converted into a payable
     */
    bulkPayableItem?: shared.BulkPayableItem | undefined;
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
export namespace GetSpecificPayableBatchItemRequest$ {
    export type Inbound = {
        batchId: string;
        batchItemId: string;
    };

    export const inboundSchema: z.ZodType<
        GetSpecificPayableBatchItemRequest,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSpecificPayableBatchItemRequest
    > = z
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
export namespace GetSpecificPayableBatchItemResponse$ {
    export type Inbound = {
        BulkPayableItem?: shared.BulkPayableItem$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetSpecificPayableBatchItemResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BulkPayableItem: shared.BulkPayableItem$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BulkPayableItem === undefined
                    ? null
                    : { bulkPayableItem: v.BulkPayableItem }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BulkPayableItem?: shared.BulkPayableItem$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSpecificPayableBatchItemResponse
    > = z
        .object({
            bulkPayableItem: shared.BulkPayableItem$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkPayableItem === undefined
                    ? null
                    : { BulkPayableItem: v.bulkPayableItem }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
