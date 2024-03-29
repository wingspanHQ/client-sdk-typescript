/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListSpecificClientDetailsRequest = {
    /**
     * Unique identifier of a client
     */
    clientId: string;
};

export type ListSpecificClientDetailsResponse = {
    /**
     * A single V2 Collaborator
     */
    collaboratorV2?: shared.CollaboratorV2 | undefined;
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
export namespace ListSpecificClientDetailsRequest$ {
    export type Inbound = {
        clientId: string;
    };

    export const inboundSchema: z.ZodType<ListSpecificClientDetailsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                clientId: z.string(),
            })
            .transform((v) => {
                return {
                    clientId: v.clientId,
                };
            });

    export type Outbound = {
        clientId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSpecificClientDetailsRequest
    > = z
        .object({
            clientId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
            };
        });
}

/** @internal */
export namespace ListSpecificClientDetailsResponse$ {
    export type Inbound = {
        CollaboratorV2?: shared.CollaboratorV2$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        ListSpecificClientDetailsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            CollaboratorV2: shared.CollaboratorV2$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CollaboratorV2 === undefined ? null : { collaboratorV2: v.CollaboratorV2 }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CollaboratorV2?: shared.CollaboratorV2$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSpecificClientDetailsResponse
    > = z
        .object({
            collaboratorV2: shared.CollaboratorV2$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorV2 === undefined ? null : { CollaboratorV2: v.collaboratorV2 }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
