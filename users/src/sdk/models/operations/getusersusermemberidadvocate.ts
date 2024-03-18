/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetUsersUserMemberIdAdvocateRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetUsersUserMemberIdAdvocateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * MemberAdvocate
     */
    memberAdvocate?: shared.MemberAdvocate | undefined;
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
export namespace GetUsersUserMemberIdAdvocateRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetUsersUserMemberIdAdvocateRequest,
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
        GetUsersUserMemberIdAdvocateRequest
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
export namespace GetUsersUserMemberIdAdvocateResponse$ {
    export type Inbound = {
        ContentType: string;
        MemberAdvocate?: shared.MemberAdvocate$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetUsersUserMemberIdAdvocateResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            MemberAdvocate: shared.MemberAdvocate$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.MemberAdvocate === undefined ? null : { memberAdvocate: v.MemberAdvocate }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        MemberAdvocate?: shared.MemberAdvocate$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersUserMemberIdAdvocateResponse
    > = z
        .object({
            contentType: z.string(),
            memberAdvocate: shared.MemberAdvocate$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.memberAdvocate === undefined ? null : { MemberAdvocate: v.memberAdvocate }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
