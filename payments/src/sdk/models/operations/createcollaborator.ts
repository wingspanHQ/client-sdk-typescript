/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateCollaboratorResponse = {
    /**
     * A collaborator is a contractor that can receive payments
     */
    collaboratorSchema?: shared.CollaboratorSchema | undefined;
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
export namespace CreateCollaboratorResponse$ {
    export type Inbound = {
        CollaboratorSchema?: shared.CollaboratorSchema$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateCollaboratorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CollaboratorSchema: shared.CollaboratorSchema$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CollaboratorSchema === undefined
                    ? null
                    : { collaboratorSchema: v.CollaboratorSchema }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CollaboratorSchema?: shared.CollaboratorSchema$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCollaboratorResponse> = z
        .object({
            collaboratorSchema: shared.CollaboratorSchema$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorSchema === undefined
                    ? null
                    : { CollaboratorSchema: v.collaboratorSchema }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}