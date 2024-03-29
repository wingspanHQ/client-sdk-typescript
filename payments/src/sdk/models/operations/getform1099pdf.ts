/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetForm1099PDFRequest = {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Index
     */
    index: string;
    /**
     * Year
     */
    year: string;
};

export type GetForm1099PDFResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Download1099Response
     */
    download1099Response?: shared.Download1099Response | undefined;
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
export namespace GetForm1099PDFRequest$ {
    export type Inbound = {
        id: string;
        index: string;
        year: string;
    };

    export const inboundSchema: z.ZodType<GetForm1099PDFRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            index: z.string(),
            year: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                index: v.index,
                year: v.year,
            };
        });

    export type Outbound = {
        id: string;
        index: string;
        year: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetForm1099PDFRequest> = z
        .object({
            id: z.string(),
            index: z.string(),
            year: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                index: v.index,
                year: v.year,
            };
        });
}

/** @internal */
export namespace GetForm1099PDFResponse$ {
    export type Inbound = {
        ContentType: string;
        Download1099Response?: shared.Download1099Response$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetForm1099PDFResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Download1099Response: shared.Download1099Response$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Download1099Response === undefined
                    ? null
                    : { download1099Response: v.Download1099Response }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Download1099Response?: shared.Download1099Response$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetForm1099PDFResponse> = z
        .object({
            contentType: z.string(),
            download1099Response: shared.Download1099Response$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.download1099Response === undefined
                    ? null
                    : { Download1099Response: v.download1099Response }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
