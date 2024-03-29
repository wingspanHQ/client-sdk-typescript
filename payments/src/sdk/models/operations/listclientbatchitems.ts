/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
export namespace ListClientBatchItemsRequest$ {
    export type Inbound = {
        batchId: string;
    };

    export const inboundSchema: z.ZodType<ListClientBatchItemsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            batchId: z.string(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
            };
        });

    export type Outbound = {
        batchId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListClientBatchItemsRequest> = z
        .object({
            batchId: z.string(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
            };
        });
}

/** @internal */
export namespace ListClientBatchItemsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.BulkClientItem$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<ListClientBatchItemsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.BulkClientItem$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<shared.BulkClientItem$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListClientBatchItemsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.BulkClientItem$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
