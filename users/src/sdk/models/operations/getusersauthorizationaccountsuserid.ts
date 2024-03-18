/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetUsersAuthorizationAccountsUserIdRequest = {
    /**
     * User Id
     */
    userId: string;
};

export type GetUsersAuthorizationAccountsUserIdResponse = {
    /**
     * List of users authorized on member
     */
    authorizedAccountsResponse?: Array<shared.AuthorizedAccount> | undefined;
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
export namespace GetUsersAuthorizationAccountsUserIdRequest$ {
    export type Inbound = {
        userId: string;
    };

    export const inboundSchema: z.ZodType<
        GetUsersAuthorizationAccountsUserIdRequest,
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
        GetUsersAuthorizationAccountsUserIdRequest
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
export namespace GetUsersAuthorizationAccountsUserIdResponse$ {
    export type Inbound = {
        AuthorizedAccountsResponse?: Array<shared.AuthorizedAccount$.Inbound> | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetUsersAuthorizationAccountsUserIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            AuthorizedAccountsResponse: z.array(shared.AuthorizedAccount$.inboundSchema).optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AuthorizedAccountsResponse === undefined
                    ? null
                    : { authorizedAccountsResponse: v.AuthorizedAccountsResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AuthorizedAccountsResponse?: Array<shared.AuthorizedAccount$.Outbound> | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersAuthorizationAccountsUserIdResponse
    > = z
        .object({
            authorizedAccountsResponse: z
                .array(shared.AuthorizedAccount$.outboundSchema)
                .optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.authorizedAccountsResponse === undefined
                    ? null
                    : { AuthorizedAccountsResponse: v.authorizedAccountsResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
