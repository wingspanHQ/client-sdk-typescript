/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetUsersOrganizationUserUserIdSessionRequest = {
    /**
     * User Id
     */
    userId: string;
};

export type GetUsersOrganizationUserUserIdSessionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * user's session details
     */
    sessionResponse?: shared.SessionResponse | undefined;
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
export namespace GetUsersOrganizationUserUserIdSessionRequest$ {
    export type Inbound = {
        userId: string;
    };

    export const inboundSchema: z.ZodType<
        GetUsersOrganizationUserUserIdSessionRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            userId: z.string(),
        })
        .transform((v) => {
            return {
                userId: v.userId,
            };
        });

    export type Outbound = {
        userId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersOrganizationUserUserIdSessionRequest
    > = z
        .object({
            userId: z.string(),
        })
        .transform((v) => {
            return {
                userId: v.userId,
            };
        });
}

/** @internal */
export namespace GetUsersOrganizationUserUserIdSessionResponse$ {
    export type Inbound = {
        ContentType: string;
        SessionResponse?: shared.SessionResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetUsersOrganizationUserUserIdSessionResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            SessionResponse: shared.SessionResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.SessionResponse === undefined
                    ? null
                    : { sessionResponse: v.SessionResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        SessionResponse?: shared.SessionResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersOrganizationUserUserIdSessionResponse
    > = z
        .object({
            contentType: z.string(),
            sessionResponse: shared.SessionResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.sessionResponse === undefined
                    ? null
                    : { SessionResponse: v.sessionResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
