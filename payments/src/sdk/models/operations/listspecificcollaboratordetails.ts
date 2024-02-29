/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListSpecificCollaboratorDetailsRequest = {
    /**
     * Unique identifier of a member
     */
    memberId: string;
};

export type ListSpecificCollaboratorDetailsResponse = {
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
export namespace ListSpecificCollaboratorDetailsRequest$ {
    export type Inbound = {
        memberId: string;
    };

    export const inboundSchema: z.ZodType<
        ListSpecificCollaboratorDetailsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
            };
        });

    export type Outbound = {
        memberId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSpecificCollaboratorDetailsRequest
    > = z
        .object({
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
            };
        });
}

/** @internal */
export namespace ListSpecificCollaboratorDetailsResponse$ {
    export type Inbound = {
        CollaboratorV2?: shared.CollaboratorV2$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        ListSpecificCollaboratorDetailsResponse,
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
        ListSpecificCollaboratorDetailsResponse
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