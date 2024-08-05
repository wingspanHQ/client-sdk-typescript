/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateStoredWingspanWalletCardRequest = {
    cardUpdateRequest?: shared.CardUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type UpdateStoredWingspanWalletCardResponse = {
    /**
     * A card summary
     */
    card?: shared.Card | undefined;
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
export const UpdateStoredWingspanWalletCardRequest$inboundSchema: z.ZodType<
    UpdateStoredWingspanWalletCardRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CardUpdateRequest: shared.CardUpdateRequest$inboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CardUpdateRequest: "cardUpdateRequest",
        });
    });

/** @internal */
export type UpdateStoredWingspanWalletCardRequest$Outbound = {
    CardUpdateRequest?: shared.CardUpdateRequest$Outbound | undefined;
    id: string;
};

/** @internal */
export const UpdateStoredWingspanWalletCardRequest$outboundSchema: z.ZodType<
    UpdateStoredWingspanWalletCardRequest$Outbound,
    z.ZodTypeDef,
    UpdateStoredWingspanWalletCardRequest
> = z
    .object({
        cardUpdateRequest: shared.CardUpdateRequest$outboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            cardUpdateRequest: "CardUpdateRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStoredWingspanWalletCardRequest$ {
    /** @deprecated use `UpdateStoredWingspanWalletCardRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateStoredWingspanWalletCardRequest$inboundSchema;
    /** @deprecated use `UpdateStoredWingspanWalletCardRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateStoredWingspanWalletCardRequest$outboundSchema;
    /** @deprecated use `UpdateStoredWingspanWalletCardRequest$Outbound` instead. */
    export type Outbound = UpdateStoredWingspanWalletCardRequest$Outbound;
}

/** @internal */
export const UpdateStoredWingspanWalletCardResponse$inboundSchema: z.ZodType<
    UpdateStoredWingspanWalletCardResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Card: shared.Card$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            Card: "card",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdateStoredWingspanWalletCardResponse$Outbound = {
    Card?: shared.Card$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdateStoredWingspanWalletCardResponse$outboundSchema: z.ZodType<
    UpdateStoredWingspanWalletCardResponse$Outbound,
    z.ZodTypeDef,
    UpdateStoredWingspanWalletCardResponse
> = z
    .object({
        card: shared.Card$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            card: "Card",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStoredWingspanWalletCardResponse$ {
    /** @deprecated use `UpdateStoredWingspanWalletCardResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateStoredWingspanWalletCardResponse$inboundSchema;
    /** @deprecated use `UpdateStoredWingspanWalletCardResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateStoredWingspanWalletCardResponse$outboundSchema;
    /** @deprecated use `UpdateStoredWingspanWalletCardResponse$Outbound` instead. */
    export type Outbound = UpdateStoredWingspanWalletCardResponse$Outbound;
}
