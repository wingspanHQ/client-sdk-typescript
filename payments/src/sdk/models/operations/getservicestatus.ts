/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetServiceStatusResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * timestamp and name of service being pinged
     */
    ping?: shared.Ping | undefined;
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
export namespace GetServiceStatusResponse$ {
    export type Inbound = {
        ContentType: string;
        Ping?: shared.Ping$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetServiceStatusResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Ping: shared.Ping$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Ping === undefined ? null : { ping: v.Ping }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Ping?: shared.Ping$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetServiceStatusResponse> = z
        .object({
            contentType: z.string(),
            ping: shared.Ping$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.ping === undefined ? null : { Ping: v.ping }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}