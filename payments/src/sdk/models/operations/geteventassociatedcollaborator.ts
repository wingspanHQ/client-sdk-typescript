/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetEventAssociatedCollaboratorRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetEventAssociatedCollaboratorResponse = {
    /**
     * List of events on collaborator
     */
    collaboratorEvents?: shared.CollaboratorEvents | undefined;
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
export namespace GetEventAssociatedCollaboratorRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetEventAssociatedCollaboratorRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEventAssociatedCollaboratorRequest
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetEventAssociatedCollaboratorResponse$ {
    export type Inbound = {
        CollaboratorEvents?: shared.CollaboratorEvents$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetEventAssociatedCollaboratorResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            CollaboratorEvents: shared.CollaboratorEvents$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CollaboratorEvents === undefined
                    ? null
                    : { collaboratorEvents: v.CollaboratorEvents }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CollaboratorEvents?: shared.CollaboratorEvents$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEventAssociatedCollaboratorResponse
    > = z
        .object({
            collaboratorEvents: shared.CollaboratorEvents$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorEvents === undefined
                    ? null
                    : { CollaboratorEvents: v.collaboratorEvents }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
