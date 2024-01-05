/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateCalculation1099BatchRequest = {
    bulkBatchUpdate?: shared.BulkBatchUpdate | undefined;
    /**
     * Unique identifier for a batch
     */
    batchId: string;
};

export type UpdateCalculation1099BatchResponse = {
    /**
     * A batch of items for importing as calculation 1099s
     */
    bulkCalculation1099Batch?: shared.BulkCalculation1099Batch | undefined;
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
export namespace UpdateCalculation1099BatchRequest$ {
    export type Inbound = {
        BulkBatchUpdate?: shared.BulkBatchUpdate$.Inbound | undefined;
        batchId: string;
    };

    export const inboundSchema: z.ZodType<
        UpdateCalculation1099BatchRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BulkBatchUpdate: shared.BulkBatchUpdate$.inboundSchema.optional(),
            batchId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.BulkBatchUpdate === undefined
                    ? null
                    : { bulkBatchUpdate: v.BulkBatchUpdate }),
                batchId: v.batchId,
            };
        });

    export type Outbound = {
        BulkBatchUpdate?: shared.BulkBatchUpdate$.Outbound | undefined;
        batchId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCalculation1099BatchRequest
    > = z
        .object({
            bulkBatchUpdate: shared.BulkBatchUpdate$.outboundSchema.optional(),
            batchId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.bulkBatchUpdate === undefined
                    ? null
                    : { BulkBatchUpdate: v.bulkBatchUpdate }),
                batchId: v.batchId,
            };
        });
}

/** @internal */
export namespace UpdateCalculation1099BatchResponse$ {
    export type Inbound = {
        BulkCalculation1099Batch?: shared.BulkCalculation1099Batch$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UpdateCalculation1099BatchResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BulkCalculation1099Batch: shared.BulkCalculation1099Batch$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BulkCalculation1099Batch === undefined
                    ? null
                    : { bulkCalculation1099Batch: v.BulkCalculation1099Batch }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BulkCalculation1099Batch?: shared.BulkCalculation1099Batch$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCalculation1099BatchResponse
    > = z
        .object({
            bulkCalculation1099Batch: shared.BulkCalculation1099Batch$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkCalculation1099Batch === undefined
                    ? null
                    : { BulkCalculation1099Batch: v.bulkCalculation1099Batch }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}