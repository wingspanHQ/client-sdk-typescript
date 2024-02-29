/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetFilesDocumentIdRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetFilesDocumentIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A Document
     */
    documentResponse?: shared.DocumentResponse | undefined;
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
export namespace GetFilesDocumentIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetFilesDocumentIdRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFilesDocumentIdRequest> = z
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
export namespace GetFilesDocumentIdResponse$ {
    export type Inbound = {
        ContentType: string;
        DocumentResponse?: shared.DocumentResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetFilesDocumentIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DocumentResponse: shared.DocumentResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DocumentResponse === undefined
                    ? null
                    : { documentResponse: v.DocumentResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DocumentResponse?: shared.DocumentResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFilesDocumentIdResponse> = z
        .object({
            contentType: z.string(),
            documentResponse: shared.DocumentResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.documentResponse === undefined
                    ? null
                    : { DocumentResponse: v.documentResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
