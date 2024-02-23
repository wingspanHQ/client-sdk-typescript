/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersAuthenticationResponse = {
    /**
     * Response for an authentication request
     */
    authenticationRequestResponse?: shared.AuthenticationRequestResponse | undefined;
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
export namespace PostUsersAuthenticationResponse$ {
    export type Inbound = {
        AuthenticationRequestResponse?: shared.AuthenticationRequestResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostUsersAuthenticationResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                AuthenticationRequestResponse:
                    shared.AuthenticationRequestResponse$.inboundSchema.optional(),
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    ...(v.AuthenticationRequestResponse === undefined
                        ? null
                        : { authenticationRequestResponse: v.AuthenticationRequestResponse }),
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        AuthenticationRequestResponse?: shared.AuthenticationRequestResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersAuthenticationResponse
    > = z
        .object({
            authenticationRequestResponse:
                shared.AuthenticationRequestResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.authenticationRequestResponse === undefined
                    ? null
                    : { AuthenticationRequestResponse: v.authenticationRequestResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
