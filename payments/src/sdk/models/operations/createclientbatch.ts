/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateClientBatchResponse = {
    /**
     * A batch of items for importing as clients
     */
    bulkClientBatch?: shared.BulkClientBatch | undefined;
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
export namespace CreateClientBatchResponse$ {
    export type Inbound = {
        BulkClientBatch?: shared.BulkClientBatch$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateClientBatchResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BulkClientBatch: shared.BulkClientBatch$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BulkClientBatch === undefined
                    ? null
                    : { bulkClientBatch: v.BulkClientBatch }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BulkClientBatch?: shared.BulkClientBatch$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateClientBatchResponse> = z
        .object({
            bulkClientBatch: shared.BulkClientBatch$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkClientBatch === undefined
                    ? null
                    : { BulkClientBatch: v.bulkClientBatch }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
