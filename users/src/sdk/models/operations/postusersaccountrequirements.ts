/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PostUsersAccountRequirementsResponse = {
    /**
     * Response for an account requirements request
     */
    accountRequirementsResponse?: shared.AccountRequirementsResponse | undefined;
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
export namespace PostUsersAccountRequirementsResponse$ {
    export type Inbound = {
        AccountRequirementsResponse?: shared.AccountRequirementsResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersAccountRequirementsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            AccountRequirementsResponse:
                shared.AccountRequirementsResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AccountRequirementsResponse === undefined
                    ? null
                    : { accountRequirementsResponse: v.AccountRequirementsResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AccountRequirementsResponse?: shared.AccountRequirementsResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersAccountRequirementsResponse
    > = z
        .object({
            accountRequirementsResponse:
                shared.AccountRequirementsResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.accountRequirementsResponse === undefined
                    ? null
                    : { AccountRequirementsResponse: v.accountRequirementsResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
