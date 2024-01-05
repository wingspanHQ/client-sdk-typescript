/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreatePayableBatchItemRequest = {
    bulkPayableItemCreate?: shared.BulkPayableItemCreate | undefined;
    /**
     * Unique identifier for a batch
     */
    batchId: string;
};

export type CreatePayableBatchItemResponse = {
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
export namespace CreatePayableBatchItemRequest$ {
    export type Inbound = {
        BulkPayableItemCreate?: shared.BulkPayableItemCreate$.Inbound | undefined;
        batchId: string;
    };

    export const inboundSchema: z.ZodType<CreatePayableBatchItemRequest, z.ZodTypeDef, Inbound> = z
        .object({
            BulkPayableItemCreate: shared.BulkPayableItemCreate$.inboundSchema.optional(),
            batchId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.BulkPayableItemCreate === undefined
                    ? null
                    : { bulkPayableItemCreate: v.BulkPayableItemCreate }),
                batchId: v.batchId,
            };
        });

    export type Outbound = {
        BulkPayableItemCreate?: shared.BulkPayableItemCreate$.Outbound | undefined;
        batchId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePayableBatchItemRequest> =
        z
            .object({
                bulkPayableItemCreate: shared.BulkPayableItemCreate$.outboundSchema.optional(),
                batchId: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.bulkPayableItemCreate === undefined
                        ? null
                        : { BulkPayableItemCreate: v.bulkPayableItemCreate }),
                    batchId: v.batchId,
                };
            });
}

/** @internal */
export namespace CreatePayableBatchItemResponse$ {
    export type Inbound = {
        BulkPayableItem?: shared.BulkPayableItem$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreatePayableBatchItemResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePayableBatchItemResponse> =
        z
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