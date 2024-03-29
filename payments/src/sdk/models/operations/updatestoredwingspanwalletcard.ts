/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
export namespace UpdateStoredWingspanWalletCardRequest$ {
    export type Inbound = {
        CardUpdateRequest?: shared.CardUpdateRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        UpdateStoredWingspanWalletCardRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            CardUpdateRequest: shared.CardUpdateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.CardUpdateRequest === undefined
                    ? null
                    : { cardUpdateRequest: v.CardUpdateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        CardUpdateRequest?: shared.CardUpdateRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateStoredWingspanWalletCardRequest
    > = z
        .object({
            cardUpdateRequest: shared.CardUpdateRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.cardUpdateRequest === undefined
                    ? null
                    : { CardUpdateRequest: v.cardUpdateRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace UpdateStoredWingspanWalletCardResponse$ {
    export type Inbound = {
        Card?: shared.Card$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UpdateStoredWingspanWalletCardResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            Card: shared.Card$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Card === undefined ? null : { card: v.Card }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Card?: shared.Card$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateStoredWingspanWalletCardResponse
    > = z
        .object({
            card: shared.Card$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.card === undefined ? null : { Card: v.card }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
