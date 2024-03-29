/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersAccountResponse = {
    /**
     * A member's bank account
     */
    accountCreateResponse?: shared.AccountCreateResponse | undefined;
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
export namespace PostUsersAccountResponse$ {
    export type Inbound = {
        AccountCreateResponse?: shared.AccountCreateResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostUsersAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AccountCreateResponse: shared.AccountCreateResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AccountCreateResponse === undefined
                    ? null
                    : { accountCreateResponse: v.AccountCreateResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AccountCreateResponse?: shared.AccountCreateResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostUsersAccountResponse> = z
        .object({
            accountCreateResponse: shared.AccountCreateResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.accountCreateResponse === undefined
                    ? null
                    : { AccountCreateResponse: v.accountCreateResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
