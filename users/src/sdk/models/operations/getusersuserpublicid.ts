/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetUsersUserPublicIdRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetUsersUserPublicIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A newuser object
     */
    publicUserResponse?: shared.PublicUserResponse | undefined;
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
export namespace GetUsersUserPublicIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetUsersUserPublicIdRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUsersUserPublicIdRequest> = z
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
export namespace GetUsersUserPublicIdResponse$ {
    export type Inbound = {
        ContentType: string;
        PublicUserResponse?: shared.PublicUserResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetUsersUserPublicIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            PublicUserResponse: shared.PublicUserResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PublicUserResponse === undefined
                    ? null
                    : { publicUserResponse: v.PublicUserResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PublicUserResponse?: shared.PublicUserResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUsersUserPublicIdResponse> = z
        .object({
            contentType: z.string(),
            publicUserResponse: shared.PublicUserResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.publicUserResponse === undefined
                    ? null
                    : { PublicUserResponse: v.publicUserResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
