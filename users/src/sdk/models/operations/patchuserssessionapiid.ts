/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type PatchUsersSessionApiIdRequest = {
    apiSessionUpdateRequest?: shared.ApiSessionUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type PatchUsersSessionApiIdResponse = {
    /**
     * an api session object
     */
    apiSessionResponse?: shared.ApiSessionResponse | undefined;
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
export namespace PatchUsersSessionApiIdRequest$ {
    export type Inbound = {
        ApiSessionUpdateRequest?: shared.ApiSessionUpdateRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<PatchUsersSessionApiIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ApiSessionUpdateRequest: shared.ApiSessionUpdateRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.ApiSessionUpdateRequest === undefined
                    ? null
                    : { apiSessionUpdateRequest: v.ApiSessionUpdateRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        ApiSessionUpdateRequest?: shared.ApiSessionUpdateRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchUsersSessionApiIdRequest> =
        z
            .object({
                apiSessionUpdateRequest: shared.ApiSessionUpdateRequest$.outboundSchema.optional(),
                id: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.apiSessionUpdateRequest === undefined
                        ? null
                        : { ApiSessionUpdateRequest: v.apiSessionUpdateRequest }),
                    id: v.id,
                };
            });
}

/** @internal */
export namespace PatchUsersSessionApiIdResponse$ {
    export type Inbound = {
        ApiSessionResponse?: shared.ApiSessionResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PatchUsersSessionApiIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ApiSessionResponse: shared.ApiSessionResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ApiSessionResponse === undefined
                    ? null
                    : { apiSessionResponse: v.ApiSessionResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ApiSessionResponse?: shared.ApiSessionResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchUsersSessionApiIdResponse> =
        z
            .object({
                apiSessionResponse: shared.ApiSessionResponse$.outboundSchema.optional(),
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.apiSessionResponse === undefined
                        ? null
                        : { ApiSessionResponse: v.apiSessionResponse }),
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
