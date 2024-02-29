/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateCollaboratorBatchResponse = {
    /**
     * A batch of items for importing as collaborators
     */
    bulkCollaboratorBatch?: shared.BulkCollaboratorBatch | undefined;
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
export namespace CreateCollaboratorBatchResponse$ {
    export type Inbound = {
        BulkCollaboratorBatch?: shared.BulkCollaboratorBatch$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateCollaboratorBatchResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                BulkCollaboratorBatch: shared.BulkCollaboratorBatch$.inboundSchema.optional(),
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    ...(v.BulkCollaboratorBatch === undefined
                        ? null
                        : { bulkCollaboratorBatch: v.BulkCollaboratorBatch }),
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        BulkCollaboratorBatch?: shared.BulkCollaboratorBatch$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateCollaboratorBatchResponse
    > = z
        .object({
            bulkCollaboratorBatch: shared.BulkCollaboratorBatch$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bulkCollaboratorBatch === undefined
                    ? null
                    : { BulkCollaboratorBatch: v.bulkCollaboratorBatch }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
