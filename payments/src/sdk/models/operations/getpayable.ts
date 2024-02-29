/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetPayableRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetPayableResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A payable
     */
    payableSchema?: shared.PayableSchema | undefined;
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
export namespace GetPayableRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetPayableRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayableRequest> = z
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
export namespace GetPayableResponse$ {
    export type Inbound = {
        ContentType: string;
        PayableSchema?: shared.PayableSchema$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetPayableResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            PayableSchema: shared.PayableSchema$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PayableSchema === undefined ? null : { payableSchema: v.PayableSchema }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PayableSchema?: shared.PayableSchema$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayableResponse> = z
        .object({
            contentType: z.string(),
            payableSchema: shared.PayableSchema$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.payableSchema === undefined ? null : { PayableSchema: v.payableSchema }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
