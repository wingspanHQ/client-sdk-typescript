/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetStoredWingspanWalletCardRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetStoredWingspanWalletCardResponse = {
    /**
     * A card summary with additional details
     */
    cardDetails?: shared.CardDetails | undefined;
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
export const GetStoredWingspanWalletCardRequest$inboundSchema: z.ZodType<
    GetStoredWingspanWalletCardRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type GetStoredWingspanWalletCardRequest$Outbound = {
    id: string;
};

/** @internal */
export const GetStoredWingspanWalletCardRequest$outboundSchema: z.ZodType<
    GetStoredWingspanWalletCardRequest$Outbound,
    z.ZodTypeDef,
    GetStoredWingspanWalletCardRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStoredWingspanWalletCardRequest$ {
    /** @deprecated use `GetStoredWingspanWalletCardRequest$inboundSchema` instead. */
    export const inboundSchema = GetStoredWingspanWalletCardRequest$inboundSchema;
    /** @deprecated use `GetStoredWingspanWalletCardRequest$outboundSchema` instead. */
    export const outboundSchema = GetStoredWingspanWalletCardRequest$outboundSchema;
    /** @deprecated use `GetStoredWingspanWalletCardRequest$Outbound` instead. */
    export type Outbound = GetStoredWingspanWalletCardRequest$Outbound;
}

/** @internal */
export const GetStoredWingspanWalletCardResponse$inboundSchema: z.ZodType<
    GetStoredWingspanWalletCardResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CardDetails: shared.CardDetails$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            CardDetails: "cardDetails",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetStoredWingspanWalletCardResponse$Outbound = {
    CardDetails?: shared.CardDetails$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetStoredWingspanWalletCardResponse$outboundSchema: z.ZodType<
    GetStoredWingspanWalletCardResponse$Outbound,
    z.ZodTypeDef,
    GetStoredWingspanWalletCardResponse
> = z
    .object({
        cardDetails: shared.CardDetails$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            cardDetails: "CardDetails",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStoredWingspanWalletCardResponse$ {
    /** @deprecated use `GetStoredWingspanWalletCardResponse$inboundSchema` instead. */
    export const inboundSchema = GetStoredWingspanWalletCardResponse$inboundSchema;
    /** @deprecated use `GetStoredWingspanWalletCardResponse$outboundSchema` instead. */
    export const outboundSchema = GetStoredWingspanWalletCardResponse$outboundSchema;
    /** @deprecated use `GetStoredWingspanWalletCardResponse$Outbound` instead. */
    export type Outbound = GetStoredWingspanWalletCardResponse$Outbound;
}
