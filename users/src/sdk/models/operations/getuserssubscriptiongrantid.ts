/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetUsersSubscriptionGrantIdRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetUsersSubscriptionGrantIdResponse = {
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
export namespace GetUsersSubscriptionGrantIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetUsersSubscriptionGrantIdRequest,
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
        GetUsersSubscriptionGrantIdRequest
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
export namespace GetUsersSubscriptionGrantIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        SubscriptionGrantResponse?: shared.SubscriptionGrantResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetUsersSubscriptionGrantIdResponse,
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
        GetUsersSubscriptionGrantIdResponse
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
