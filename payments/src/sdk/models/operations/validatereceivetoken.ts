/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ValidateReceiveTokenRequest = {
    cardTokenRequest?: shared.CardTokenRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type ValidateReceiveTokenResponse = {
    /**
     * A card token response
     */
    cardTokenResponse?: shared.CardTokenResponse | undefined;
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
export const ValidateReceiveTokenRequest$inboundSchema: z.ZodType<
    ValidateReceiveTokenRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CardTokenRequest: shared.CardTokenRequest$inboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CardTokenRequest: "cardTokenRequest",
        });
    });

/** @internal */
export type ValidateReceiveTokenRequest$Outbound = {
    CardTokenRequest?: shared.CardTokenRequest$Outbound | undefined;
    id: string;
};

/** @internal */
export const ValidateReceiveTokenRequest$outboundSchema: z.ZodType<
    ValidateReceiveTokenRequest$Outbound,
    z.ZodTypeDef,
    ValidateReceiveTokenRequest
> = z
    .object({
        cardTokenRequest: shared.CardTokenRequest$outboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            cardTokenRequest: "CardTokenRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidateReceiveTokenRequest$ {
    /** @deprecated use `ValidateReceiveTokenRequest$inboundSchema` instead. */
    export const inboundSchema = ValidateReceiveTokenRequest$inboundSchema;
    /** @deprecated use `ValidateReceiveTokenRequest$outboundSchema` instead. */
    export const outboundSchema = ValidateReceiveTokenRequest$outboundSchema;
    /** @deprecated use `ValidateReceiveTokenRequest$Outbound` instead. */
    export type Outbound = ValidateReceiveTokenRequest$Outbound;
}

/** @internal */
export const ValidateReceiveTokenResponse$inboundSchema: z.ZodType<
    ValidateReceiveTokenResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CardTokenResponse: shared.CardTokenResponse$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            CardTokenResponse: "cardTokenResponse",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ValidateReceiveTokenResponse$Outbound = {
    CardTokenResponse?: shared.CardTokenResponse$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const ValidateReceiveTokenResponse$outboundSchema: z.ZodType<
    ValidateReceiveTokenResponse$Outbound,
    z.ZodTypeDef,
    ValidateReceiveTokenResponse
> = z
    .object({
        cardTokenResponse: shared.CardTokenResponse$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            cardTokenResponse: "CardTokenResponse",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidateReceiveTokenResponse$ {
    /** @deprecated use `ValidateReceiveTokenResponse$inboundSchema` instead. */
    export const inboundSchema = ValidateReceiveTokenResponse$inboundSchema;
    /** @deprecated use `ValidateReceiveTokenResponse$outboundSchema` instead. */
    export const outboundSchema = ValidateReceiveTokenResponse$outboundSchema;
    /** @deprecated use `ValidateReceiveTokenResponse$Outbound` instead. */
    export type Outbound = ValidateReceiveTokenResponse$Outbound;
}
