/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeleteDebitCardRequest = {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Unique identifier of a member
     */
    memberId: string;
};

export type DeleteDebitCardResponse = {
    /**
     * A payout debit card
     */
    checkbookCard?: shared.CheckbookCard | undefined;
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
export namespace DeleteDebitCardRequest$ {
    export type Inbound = {
        id: string;
        memberId: string;
    };

    export const inboundSchema: z.ZodType<DeleteDebitCardRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                memberId: v.memberId,
            };
        });

    export type Outbound = {
        id: string;
        memberId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDebitCardRequest> = z
        .object({
            id: z.string(),
            memberId: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                memberId: v.memberId,
            };
        });
}

/** @internal */
export namespace DeleteDebitCardResponse$ {
    export type Inbound = {
        CheckbookCard?: shared.CheckbookCard$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteDebitCardResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CheckbookCard: shared.CheckbookCard$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CheckbookCard === undefined ? null : { checkbookCard: v.CheckbookCard }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CheckbookCard?: shared.CheckbookCard$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDebitCardResponse> = z
        .object({
            checkbookCard: shared.CheckbookCard$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.checkbookCard === undefined ? null : { CheckbookCard: v.checkbookCard }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
