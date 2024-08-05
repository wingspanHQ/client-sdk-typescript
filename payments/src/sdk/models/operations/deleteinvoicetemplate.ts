/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type DeleteInvoiceTemplateRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type DeleteInvoiceTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A recurring invoice
     */
    invoiceTemplate?: shared.InvoiceTemplate | undefined;
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
export const DeleteInvoiceTemplateRequest$inboundSchema: z.ZodType<
    DeleteInvoiceTemplateRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type DeleteInvoiceTemplateRequest$Outbound = {
    id: string;
};

/** @internal */
export const DeleteInvoiceTemplateRequest$outboundSchema: z.ZodType<
    DeleteInvoiceTemplateRequest$Outbound,
    z.ZodTypeDef,
    DeleteInvoiceTemplateRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteInvoiceTemplateRequest$ {
    /** @deprecated use `DeleteInvoiceTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteInvoiceTemplateRequest$inboundSchema;
    /** @deprecated use `DeleteInvoiceTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteInvoiceTemplateRequest$outboundSchema;
    /** @deprecated use `DeleteInvoiceTemplateRequest$Outbound` instead. */
    export type Outbound = DeleteInvoiceTemplateRequest$Outbound;
}

/** @internal */
export const DeleteInvoiceTemplateResponse$inboundSchema: z.ZodType<
    DeleteInvoiceTemplateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        InvoiceTemplate: shared.InvoiceTemplate$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            InvoiceTemplate: "invoiceTemplate",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type DeleteInvoiceTemplateResponse$Outbound = {
    ContentType: string;
    InvoiceTemplate?: shared.InvoiceTemplate$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const DeleteInvoiceTemplateResponse$outboundSchema: z.ZodType<
    DeleteInvoiceTemplateResponse$Outbound,
    z.ZodTypeDef,
    DeleteInvoiceTemplateResponse
> = z
    .object({
        contentType: z.string(),
        invoiceTemplate: shared.InvoiceTemplate$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            invoiceTemplate: "InvoiceTemplate",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteInvoiceTemplateResponse$ {
    /** @deprecated use `DeleteInvoiceTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteInvoiceTemplateResponse$inboundSchema;
    /** @deprecated use `DeleteInvoiceTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteInvoiceTemplateResponse$outboundSchema;
    /** @deprecated use `DeleteInvoiceTemplateResponse$Outbound` instead. */
    export type Outbound = DeleteInvoiceTemplateResponse$Outbound;
}
