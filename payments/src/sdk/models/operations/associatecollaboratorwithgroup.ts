/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AssociateCollaboratorWithGroupRequest = {
    /**
     * Unique group Id
     */
    groupId: string;
    /**
     * Unique identifier
     */
    id: string;
};

export type AssociateCollaboratorWithGroupResponse = {
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
export const AssociateCollaboratorWithGroupRequest$inboundSchema: z.ZodType<
    AssociateCollaboratorWithGroupRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    groupId: z.string(),
    id: z.string(),
});

/** @internal */
export type AssociateCollaboratorWithGroupRequest$Outbound = {
    groupId: string;
    id: string;
};

/** @internal */
export const AssociateCollaboratorWithGroupRequest$outboundSchema: z.ZodType<
    AssociateCollaboratorWithGroupRequest$Outbound,
    z.ZodTypeDef,
    AssociateCollaboratorWithGroupRequest
> = z.object({
    groupId: z.string(),
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssociateCollaboratorWithGroupRequest$ {
    /** @deprecated use `AssociateCollaboratorWithGroupRequest$inboundSchema` instead. */
    export const inboundSchema = AssociateCollaboratorWithGroupRequest$inboundSchema;
    /** @deprecated use `AssociateCollaboratorWithGroupRequest$outboundSchema` instead. */
    export const outboundSchema = AssociateCollaboratorWithGroupRequest$outboundSchema;
    /** @deprecated use `AssociateCollaboratorWithGroupRequest$Outbound` instead. */
    export type Outbound = AssociateCollaboratorWithGroupRequest$Outbound;
}

/** @internal */
export const AssociateCollaboratorWithGroupResponse$inboundSchema: z.ZodType<
    AssociateCollaboratorWithGroupResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CollaboratorSchema: shared.CollaboratorSchema$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            CollaboratorSchema: "collaboratorSchema",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AssociateCollaboratorWithGroupResponse$Outbound = {
    CollaboratorSchema?: shared.CollaboratorSchema$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AssociateCollaboratorWithGroupResponse$outboundSchema: z.ZodType<
    AssociateCollaboratorWithGroupResponse$Outbound,
    z.ZodTypeDef,
    AssociateCollaboratorWithGroupResponse
> = z
    .object({
        collaboratorSchema: shared.CollaboratorSchema$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            collaboratorSchema: "CollaboratorSchema",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssociateCollaboratorWithGroupResponse$ {
    /** @deprecated use `AssociateCollaboratorWithGroupResponse$inboundSchema` instead. */
    export const inboundSchema = AssociateCollaboratorWithGroupResponse$inboundSchema;
    /** @deprecated use `AssociateCollaboratorWithGroupResponse$outboundSchema` instead. */
    export const outboundSchema = AssociateCollaboratorWithGroupResponse$outboundSchema;
    /** @deprecated use `AssociateCollaboratorWithGroupResponse$Outbound` instead. */
    export type Outbound = AssociateCollaboratorWithGroupResponse$Outbound;
}
