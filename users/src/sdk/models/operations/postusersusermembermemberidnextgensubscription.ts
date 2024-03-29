/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersUserMemberMemberIdNextgenSubscriptionRequest = {
    subscriptionCreateRequest?: shared.SubscriptionCreateRequest | undefined;
    /**
     * member ident
     */
    memberId: string;
};

export type PostUsersUserMemberMemberIdNextgenSubscriptionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A nextgen subscription object
     */
    nextgenSubscriptionResponse?: shared.NextgenSubscriptionResponse | undefined;
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
export namespace PostUsersUserMemberMemberIdNextgenSubscriptionRequest$ {
    export type Inbound = {
        SubscriptionCreateRequest?: shared.SubscriptionCreateRequest$.Inbound | undefined;
        memberId: string;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserMemberMemberIdNextgenSubscriptionRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            SubscriptionCreateRequest: shared.SubscriptionCreateRequest$.inboundSchema.optional(),
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.SubscriptionCreateRequest === undefined
                    ? null
                    : { subscriptionCreateRequest: v.SubscriptionCreateRequest }),
                memberId: v.memberId,
            };
        });

    export type Outbound = {
        SubscriptionCreateRequest?: shared.SubscriptionCreateRequest$.Outbound | undefined;
        memberId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserMemberMemberIdNextgenSubscriptionRequest
    > = z
        .object({
            subscriptionCreateRequest: shared.SubscriptionCreateRequest$.outboundSchema.optional(),
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.subscriptionCreateRequest === undefined
                    ? null
                    : { SubscriptionCreateRequest: v.subscriptionCreateRequest }),
                memberId: v.memberId,
            };
        });
}

/** @internal */
export namespace PostUsersUserMemberMemberIdNextgenSubscriptionResponse$ {
    export type Inbound = {
        ContentType: string;
        NextgenSubscriptionResponse?: shared.NextgenSubscriptionResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserMemberMemberIdNextgenSubscriptionResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            NextgenSubscriptionResponse:
                shared.NextgenSubscriptionResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.NextgenSubscriptionResponse === undefined
                    ? null
                    : { nextgenSubscriptionResponse: v.NextgenSubscriptionResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        NextgenSubscriptionResponse?: shared.NextgenSubscriptionResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserMemberMemberIdNextgenSubscriptionResponse
    > = z
        .object({
            contentType: z.string(),
            nextgenSubscriptionResponse:
                shared.NextgenSubscriptionResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.nextgenSubscriptionResponse === undefined
                    ? null
                    : { NextgenSubscriptionResponse: v.nextgenSubscriptionResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
