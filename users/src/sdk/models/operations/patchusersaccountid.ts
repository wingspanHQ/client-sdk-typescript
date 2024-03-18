/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PatchUsersAccountIdRequest = {
    accountUpdateRequest?: shared.AccountUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type PatchUsersAccountIdResponse = {
    /**
     * A member's bank account
     */
    account?: shared.Account | undefined;
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
export namespace PatchUsersAccountIdRequest$ {
    export type Inbound = {
        AccountUpdateRequest?: shared.AccountUpdateRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<PatchUsersAccountIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            AccountUpdateRequest: shared.AccountUpdateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.AccountUpdateRequest === undefined
                    ? null
                    : { accountUpdateRequest: v.AccountUpdateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        AccountUpdateRequest?: shared.AccountUpdateRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchUsersAccountIdRequest> = z
        .object({
            accountUpdateRequest: shared.AccountUpdateRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.accountUpdateRequest === undefined
                    ? null
                    : { AccountUpdateRequest: v.accountUpdateRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace PatchUsersAccountIdResponse$ {
    export type Inbound = {
        Account?: shared.Account$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PatchUsersAccountIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            Account: shared.Account$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Account === undefined ? null : { account: v.Account }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Account?: shared.Account$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchUsersAccountIdResponse> = z
        .object({
            account: shared.Account$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { Account: v.account }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
