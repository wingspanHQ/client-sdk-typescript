/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetUsersUserMemberSubscriptionPlanIdRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetUsersUserMemberSubscriptionPlanIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Membership/subscription plan
     */
    plan?: shared.Plan | undefined;
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
export namespace GetUsersUserMemberSubscriptionPlanIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetUsersUserMemberSubscriptionPlanIdRequest,
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
        GetUsersUserMemberSubscriptionPlanIdRequest
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
export namespace GetUsersUserMemberSubscriptionPlanIdResponse$ {
    export type Inbound = {
        ContentType: string;
        Plan?: shared.Plan$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetUsersUserMemberSubscriptionPlanIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            Plan: shared.Plan$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Plan === undefined ? null : { plan: v.Plan }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Plan?: shared.Plan$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetUsersUserMemberSubscriptionPlanIdResponse
    > = z
        .object({
            contentType: z.string(),
            plan: shared.Plan$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.plan === undefined ? null : { Plan: v.plan }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
