/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateCollaboratorGroupConfigurationRequest = {
    collaboratorGroupUpdateRequest?: shared.CollaboratorGroupUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type UpdateCollaboratorGroupConfigurationResponse = {
    /**
     * Collaborator Configuration Per Group
     */
    collaboratorGroupResponse?: shared.CollaboratorGroupResponse | undefined;
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
export namespace UpdateCollaboratorGroupConfigurationRequest$ {
    export type Inbound = {
        CollaboratorGroupUpdateRequest?: shared.CollaboratorGroupUpdateRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        UpdateCollaboratorGroupConfigurationRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            CollaboratorGroupUpdateRequest:
                shared.CollaboratorGroupUpdateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.CollaboratorGroupUpdateRequest === undefined
                    ? null
                    : { collaboratorGroupUpdateRequest: v.CollaboratorGroupUpdateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        CollaboratorGroupUpdateRequest?:
            | shared.CollaboratorGroupUpdateRequest$.Outbound
            | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCollaboratorGroupConfigurationRequest
    > = z
        .object({
            collaboratorGroupUpdateRequest:
                shared.CollaboratorGroupUpdateRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorGroupUpdateRequest === undefined
                    ? null
                    : { CollaboratorGroupUpdateRequest: v.collaboratorGroupUpdateRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace UpdateCollaboratorGroupConfigurationResponse$ {
    export type Inbound = {
        CollaboratorGroupResponse?: shared.CollaboratorGroupResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UpdateCollaboratorGroupConfigurationResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            CollaboratorGroupResponse: shared.CollaboratorGroupResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CollaboratorGroupResponse === undefined
                    ? null
                    : { collaboratorGroupResponse: v.CollaboratorGroupResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CollaboratorGroupResponse?: shared.CollaboratorGroupResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCollaboratorGroupConfigurationResponse
    > = z
        .object({
            collaboratorGroupResponse: shared.CollaboratorGroupResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorGroupResponse === undefined
                    ? null
                    : { CollaboratorGroupResponse: v.collaboratorGroupResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}