/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PostUsersSubscriptionGrantResponse = {
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
    /**
     * A subscription grant
     */
    subscriptionGrantResponse?: shared.SubscriptionGrantResponse | undefined;
};

/** @internal */
export namespace PostUsersSubscriptionGrantResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        SubscriptionGrantResponse?: shared.SubscriptionGrantResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        PostUsersSubscriptionGrantResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            SubscriptionGrantResponse: shared.SubscriptionGrantResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.SubscriptionGrantResponse === undefined
                    ? null
                    : { subscriptionGrantResponse: v.SubscriptionGrantResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        SubscriptionGrantResponse?: shared.SubscriptionGrantResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersSubscriptionGrantResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            subscriptionGrantResponse: shared.SubscriptionGrantResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.subscriptionGrantResponse === undefined
                    ? null
                    : { SubscriptionGrantResponse: v.subscriptionGrantResponse }),
            };
        });
}
