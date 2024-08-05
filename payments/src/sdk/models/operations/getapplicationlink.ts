/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetApplicationLinkRequest = {
    /**
     * Unique identifier of a member
     */
    memberId: string;
};

export type GetApplicationLinkResponse = {
    /**
     * A Bank Application form
     */
    bankingApplicationForm?: shared.BankingApplicationForm | undefined;
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
export const GetApplicationLinkRequest$inboundSchema: z.ZodType<
    GetApplicationLinkRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    memberId: z.string(),
});

/** @internal */
export type GetApplicationLinkRequest$Outbound = {
    memberId: string;
};

/** @internal */
export const GetApplicationLinkRequest$outboundSchema: z.ZodType<
    GetApplicationLinkRequest$Outbound,
    z.ZodTypeDef,
    GetApplicationLinkRequest
> = z.object({
    memberId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicationLinkRequest$ {
    /** @deprecated use `GetApplicationLinkRequest$inboundSchema` instead. */
    export const inboundSchema = GetApplicationLinkRequest$inboundSchema;
    /** @deprecated use `GetApplicationLinkRequest$outboundSchema` instead. */
    export const outboundSchema = GetApplicationLinkRequest$outboundSchema;
    /** @deprecated use `GetApplicationLinkRequest$Outbound` instead. */
    export type Outbound = GetApplicationLinkRequest$Outbound;
}

/** @internal */
export const GetApplicationLinkResponse$inboundSchema: z.ZodType<
    GetApplicationLinkResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        BankingApplicationForm: shared.BankingApplicationForm$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            BankingApplicationForm: "bankingApplicationForm",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetApplicationLinkResponse$Outbound = {
    BankingApplicationForm?: shared.BankingApplicationForm$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetApplicationLinkResponse$outboundSchema: z.ZodType<
    GetApplicationLinkResponse$Outbound,
    z.ZodTypeDef,
    GetApplicationLinkResponse
> = z
    .object({
        bankingApplicationForm: shared.BankingApplicationForm$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            bankingApplicationForm: "BankingApplicationForm",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicationLinkResponse$ {
    /** @deprecated use `GetApplicationLinkResponse$inboundSchema` instead. */
    export const inboundSchema = GetApplicationLinkResponse$inboundSchema;
    /** @deprecated use `GetApplicationLinkResponse$outboundSchema` instead. */
    export const outboundSchema = GetApplicationLinkResponse$outboundSchema;
    /** @deprecated use `GetApplicationLinkResponse$Outbound` instead. */
    export type Outbound = GetApplicationLinkResponse$Outbound;
}
