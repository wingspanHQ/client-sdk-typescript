/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetSpecificCollaboratorBatchItemRequest = {
    /**
     * Unique identifier for a batch
     */
    batchId: string;
    /**
     * Unique identifier for an item in a batch
     */
    batchItemId: string;
};

export type GetSpecificCollaboratorBatchItemResponse = {
    /**
     * An item that will be converted into a collaborator
     */
    bulkCollaboratorItem?: shared.BulkCollaboratorItem | undefined;
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
export namespace GetSpecificCollaboratorBatchItemRequest$ {
    export type Inbound = {
        batchId: string;
        batchItemId: string;
    };

    export const inboundSchema: z.ZodType<
        GetSpecificCollaboratorBatchItemRequest,
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
        GetSpecificCollaboratorBatchItemRequest
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
export namespace GetSpecificCollaboratorBatchItemResponse$ {
    export type Inbound = {
        BulkCollaboratorItem?: shared.BulkCollaboratorItem$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetSpecificCollaboratorBatchItemResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BulkCollaboratorItem: shared.BulkCollaboratorItem$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BulkCollaboratorItem === undefined
                    ? null
                    : { bulkCollaboratorItem: v.BulkCollaboratorItem }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BulkCollaboratorItem?: shared.BulkCollaboratorItem$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSpecificCollaboratorBatchItemResponse
    > = z
        .object({
            bulkCollaboratorItem: shared.BulkCollaboratorItem$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkCollaboratorItem === undefined
                    ? null
                    : { BulkCollaboratorItem: v.bulkCollaboratorItem }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}