/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
export namespace ValidateReceiveTokenRequest$ {
    export type Inbound = {
        CardTokenRequest?: shared.CardTokenRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<ValidateReceiveTokenRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CardTokenRequest: shared.CardTokenRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.CardTokenRequest === undefined
                    ? null
                    : { cardTokenRequest: v.CardTokenRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        CardTokenRequest?: shared.CardTokenRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidateReceiveTokenRequest> = z
        .object({
            cardTokenRequest: shared.CardTokenRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.cardTokenRequest === undefined
                    ? null
                    : { CardTokenRequest: v.cardTokenRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace ValidateReceiveTokenResponse$ {
    export type Inbound = {
        CardTokenResponse?: shared.CardTokenResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ValidateReceiveTokenResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CardTokenResponse: shared.CardTokenResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CardTokenResponse === undefined
                    ? null
                    : { cardTokenResponse: v.CardTokenResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CardTokenResponse?: shared.CardTokenResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidateReceiveTokenResponse> = z
        .object({
            cardTokenResponse: shared.CardTokenResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.cardTokenResponse === undefined
                    ? null
                    : { CardTokenResponse: v.cardTokenResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
