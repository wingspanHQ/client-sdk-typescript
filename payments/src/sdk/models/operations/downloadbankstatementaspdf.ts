/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type DownloadBankStatementAsPDFRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type DownloadBankStatementAsPDFResponse = {
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
export const DownloadBankStatementAsPDFRequest$inboundSchema: z.ZodType<
    DownloadBankStatementAsPDFRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type DownloadBankStatementAsPDFRequest$Outbound = {
    id: string;
};

/** @internal */
export const DownloadBankStatementAsPDFRequest$outboundSchema: z.ZodType<
    DownloadBankStatementAsPDFRequest$Outbound,
    z.ZodTypeDef,
    DownloadBankStatementAsPDFRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadBankStatementAsPDFRequest$ {
    /** @deprecated use `DownloadBankStatementAsPDFRequest$inboundSchema` instead. */
    export const inboundSchema = DownloadBankStatementAsPDFRequest$inboundSchema;
    /** @deprecated use `DownloadBankStatementAsPDFRequest$outboundSchema` instead. */
    export const outboundSchema = DownloadBankStatementAsPDFRequest$outboundSchema;
    /** @deprecated use `DownloadBankStatementAsPDFRequest$Outbound` instead. */
    export type Outbound = DownloadBankStatementAsPDFRequest$Outbound;
}

/** @internal */
export const DownloadBankStatementAsPDFResponse$inboundSchema: z.ZodType<
    DownloadBankStatementAsPDFResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type DownloadBankStatementAsPDFResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const DownloadBankStatementAsPDFResponse$outboundSchema: z.ZodType<
    DownloadBankStatementAsPDFResponse$Outbound,
    z.ZodTypeDef,
    DownloadBankStatementAsPDFResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadBankStatementAsPDFResponse$ {
    /** @deprecated use `DownloadBankStatementAsPDFResponse$inboundSchema` instead. */
    export const inboundSchema = DownloadBankStatementAsPDFResponse$inboundSchema;
    /** @deprecated use `DownloadBankStatementAsPDFResponse$outboundSchema` instead. */
    export const outboundSchema = DownloadBankStatementAsPDFResponse$outboundSchema;
    /** @deprecated use `DownloadBankStatementAsPDFResponse$Outbound` instead. */
    export type Outbound = DownloadBankStatementAsPDFResponse$Outbound;
}
