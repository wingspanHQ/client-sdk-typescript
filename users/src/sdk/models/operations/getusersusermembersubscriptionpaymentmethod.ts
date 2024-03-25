/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetUsersUserMemberSubscriptionPaymentMethodResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * redacted credit card
     */
    creditCard?: shared.CreditCard | undefined;
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
export namespace GetUsersUserMemberSubscriptionPaymentMethodResponse$ {
    export type Inbound = {
        ContentType: string;
        CreditCard?: shared.CreditCard$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetUsersUserMemberSubscriptionPaymentMethodResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CreditCard: shared.CreditCard$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreditCard === undefined ? null : { creditCard: v.CreditCard }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreditCard?: shared.CreditCard$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersUserMemberSubscriptionPaymentMethodResponse
    > = z
        .object({
            contentType: z.string(),
            creditCard: shared.CreditCard$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.creditCard === undefined ? null : { CreditCard: v.creditCard }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
