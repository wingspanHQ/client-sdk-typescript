/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListSpecificCollaboratorBatchItemsRequest = {
    /**
     * Unique identifier for a batch
     */
    batchId: string;
};

export type ListSpecificCollaboratorBatchItemsResponse = {
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
     * A list of bulk collaborator items
     */
    classes?: Array<shared.BulkCollaboratorItem> | undefined;
};

/** @internal */
export namespace ListSpecificCollaboratorBatchItemsRequest$ {
    export type Inbound = {
        batchId: string;
    };

    export const inboundSchema: z.ZodType<
        ListSpecificCollaboratorBatchItemsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSpecificCollaboratorBatchItemsRequest
    > = z
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
export namespace ListSpecificCollaboratorBatchItemsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.BulkCollaboratorItem$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListSpecificCollaboratorBatchItemsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.BulkCollaboratorItem$.inboundSchema).optional(),
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
        classes?: Array<shared.BulkCollaboratorItem$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSpecificCollaboratorBatchItemsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.BulkCollaboratorItem$.outboundSchema).optional(),
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
