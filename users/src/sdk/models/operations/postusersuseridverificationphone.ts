/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersUserIdVerificationPhoneRequest = {
    beginPhoneVerificationRequest?: shared.BeginPhoneVerificationRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type PostUsersUserIdVerificationPhoneResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Phone Verification
     */
    phoneVerificationResponse?: shared.PhoneVerificationResponse | undefined;
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
export namespace PostUsersUserIdVerificationPhoneRequest$ {
    export type Inbound = {
        BeginPhoneVerificationRequest?: shared.BeginPhoneVerificationRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserIdVerificationPhoneRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BeginPhoneVerificationRequest:
                shared.BeginPhoneVerificationRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.BeginPhoneVerificationRequest === undefined
                    ? null
                    : { beginPhoneVerificationRequest: v.BeginPhoneVerificationRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        BeginPhoneVerificationRequest?: shared.BeginPhoneVerificationRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserIdVerificationPhoneRequest
    > = z
        .object({
            beginPhoneVerificationRequest:
                shared.BeginPhoneVerificationRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.beginPhoneVerificationRequest === undefined
                    ? null
                    : { BeginPhoneVerificationRequest: v.beginPhoneVerificationRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostUsersUserIdVerificationPhoneResponse$ {
    export type Inbound = {
        ContentType: string;
        PhoneVerificationResponse?: shared.PhoneVerificationResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserIdVerificationPhoneResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            PhoneVerificationResponse: shared.PhoneVerificationResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PhoneVerificationResponse === undefined
                    ? null
                    : { phoneVerificationResponse: v.PhoneVerificationResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PhoneVerificationResponse?: shared.PhoneVerificationResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserIdVerificationPhoneResponse
    > = z
        .object({
            contentType: z.string(),
            phoneVerificationResponse: shared.PhoneVerificationResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.phoneVerificationResponse === undefined
                    ? null
                    : { PhoneVerificationResponse: v.phoneVerificationResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
