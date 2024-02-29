/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersFlatfileAuthTokenResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Response for flatfile auth token request
     */
    flatfileAuthTokenResponse?: shared.FlatfileAuthTokenResponse | undefined;
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
export namespace PostUsersFlatfileAuthTokenResponse$ {
    export type Inbound = {
        ContentType: string;
        FlatfileAuthTokenResponse?: shared.FlatfileAuthTokenResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersFlatfileAuthTokenResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            FlatfileAuthTokenResponse: shared.FlatfileAuthTokenResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.FlatfileAuthTokenResponse === undefined
                    ? null
                    : { flatfileAuthTokenResponse: v.FlatfileAuthTokenResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        FlatfileAuthTokenResponse?: shared.FlatfileAuthTokenResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersFlatfileAuthTokenResponse
    > = z
        .object({
            contentType: z.string(),
            flatfileAuthTokenResponse: shared.FlatfileAuthTokenResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.flatfileAuthTokenResponse === undefined
                    ? null
                    : { FlatfileAuthTokenResponse: v.flatfileAuthTokenResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
