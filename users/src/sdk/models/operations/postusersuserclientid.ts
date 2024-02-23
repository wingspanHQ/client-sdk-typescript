/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type PostUsersUserClientIdRequest = {
    clientCreateRequest?: shared.ClientCreateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type PostUsersUserClientIdResponse = {
    /**
     * A client
     */
    clientResponse?: shared.ClientResponse | undefined;
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
export namespace PostUsersUserClientIdRequest$ {
    export type Inbound = {
        ClientCreateRequest?: shared.ClientCreateRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<PostUsersUserClientIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ClientCreateRequest: shared.ClientCreateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.ClientCreateRequest === undefined
                    ? null
                    : { clientCreateRequest: v.ClientCreateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        ClientCreateRequest?: shared.ClientCreateRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostUsersUserClientIdRequest> = z
        .object({
            clientCreateRequest: shared.ClientCreateRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.clientCreateRequest === undefined
                    ? null
                    : { ClientCreateRequest: v.clientCreateRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace PostUsersUserClientIdResponse$ {
    export type Inbound = {
        ClientResponse?: shared.ClientResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PostUsersUserClientIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ClientResponse: shared.ClientResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ClientResponse === undefined ? null : { clientResponse: v.ClientResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ClientResponse?: shared.ClientResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostUsersUserClientIdResponse> =
        z
            .object({
                clientResponse: shared.ClientResponse$.outboundSchema.optional(),
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.clientResponse === undefined
                        ? null
                        : { ClientResponse: v.clientResponse }),
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
