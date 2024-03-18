/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PostUsersUserIdVerificationEmailRequest = {
    beginEmailVerificationRequest?: shared.BeginEmailVerificationRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type PostUsersUserIdVerificationEmailResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Email Verification Status
     */
    emailVerificationResponse?: shared.EmailVerificationResponse | undefined;
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
export namespace PostUsersUserIdVerificationEmailRequest$ {
    export type Inbound = {
        BeginEmailVerificationRequest?: shared.BeginEmailVerificationRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserIdVerificationEmailRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            BeginEmailVerificationRequest:
                shared.BeginEmailVerificationRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.BeginEmailVerificationRequest === undefined
                    ? null
                    : { beginEmailVerificationRequest: v.BeginEmailVerificationRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        BeginEmailVerificationRequest?: shared.BeginEmailVerificationRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserIdVerificationEmailRequest
    > = z
        .object({
            beginEmailVerificationRequest:
                shared.BeginEmailVerificationRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.beginEmailVerificationRequest === undefined
                    ? null
                    : { BeginEmailVerificationRequest: v.beginEmailVerificationRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostUsersUserIdVerificationEmailResponse$ {
    export type Inbound = {
        ContentType: string;
        EmailVerificationResponse?: shared.EmailVerificationResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersUserIdVerificationEmailResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            EmailVerificationResponse: shared.EmailVerificationResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.EmailVerificationResponse === undefined
                    ? null
                    : { emailVerificationResponse: v.EmailVerificationResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        EmailVerificationResponse?: shared.EmailVerificationResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersUserIdVerificationEmailResponse
    > = z
        .object({
            contentType: z.string(),
            emailVerificationResponse: shared.EmailVerificationResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.emailVerificationResponse === undefined
                    ? null
                    : { EmailVerificationResponse: v.emailVerificationResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
