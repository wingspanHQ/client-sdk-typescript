/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type EstablishMemberClientAssociationResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Describes details of member and client
     */
    memberClientSchema?: shared.MemberClientSchema | undefined;
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
export const EstablishMemberClientAssociationResponse$inboundSchema: z.ZodType<
    EstablishMemberClientAssociationResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        MemberClientSchema: shared.MemberClientSchema$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            MemberClientSchema: "memberClientSchema",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type EstablishMemberClientAssociationResponse$Outbound = {
    ContentType: string;
    MemberClientSchema?: shared.MemberClientSchema$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const EstablishMemberClientAssociationResponse$outboundSchema: z.ZodType<
    EstablishMemberClientAssociationResponse$Outbound,
    z.ZodTypeDef,
    EstablishMemberClientAssociationResponse
> = z
    .object({
        contentType: z.string(),
        memberClientSchema: shared.MemberClientSchema$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            memberClientSchema: "MemberClientSchema",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EstablishMemberClientAssociationResponse$ {
    /** @deprecated use `EstablishMemberClientAssociationResponse$inboundSchema` instead. */
    export const inboundSchema = EstablishMemberClientAssociationResponse$inboundSchema;
    /** @deprecated use `EstablishMemberClientAssociationResponse$outboundSchema` instead. */
    export const outboundSchema = EstablishMemberClientAssociationResponse$outboundSchema;
    /** @deprecated use `EstablishMemberClientAssociationResponse$Outbound` instead. */
    export type Outbound = EstablishMemberClientAssociationResponse$Outbound;
}
