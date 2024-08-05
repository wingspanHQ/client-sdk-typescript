/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateInvoiceRequest = {
    invoiceUpdateRequest?: shared.InvoiceUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type UpdateInvoiceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * An invoice
     */
    invoice?: shared.Invoice | undefined;
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
export const UpdateInvoiceRequest$inboundSchema: z.ZodType<
    UpdateInvoiceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        InvoiceUpdateRequest: shared.InvoiceUpdateRequest$inboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            InvoiceUpdateRequest: "invoiceUpdateRequest",
        });
    });

/** @internal */
export type UpdateInvoiceRequest$Outbound = {
    InvoiceUpdateRequest?: shared.InvoiceUpdateRequest$Outbound | undefined;
    id: string;
};

/** @internal */
export const UpdateInvoiceRequest$outboundSchema: z.ZodType<
    UpdateInvoiceRequest$Outbound,
    z.ZodTypeDef,
    UpdateInvoiceRequest
> = z
    .object({
        invoiceUpdateRequest: shared.InvoiceUpdateRequest$outboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            invoiceUpdateRequest: "InvoiceUpdateRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateInvoiceRequest$ {
    /** @deprecated use `UpdateInvoiceRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateInvoiceRequest$inboundSchema;
    /** @deprecated use `UpdateInvoiceRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateInvoiceRequest$outboundSchema;
    /** @deprecated use `UpdateInvoiceRequest$Outbound` instead. */
    export type Outbound = UpdateInvoiceRequest$Outbound;
}

/** @internal */
export const UpdateInvoiceResponse$inboundSchema: z.ZodType<
    UpdateInvoiceResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        Invoice: shared.Invoice$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            Invoice: "invoice",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdateInvoiceResponse$Outbound = {
    ContentType: string;
    Invoice?: shared.Invoice$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdateInvoiceResponse$outboundSchema: z.ZodType<
    UpdateInvoiceResponse$Outbound,
    z.ZodTypeDef,
    UpdateInvoiceResponse
> = z
    .object({
        contentType: z.string(),
        invoice: shared.Invoice$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            invoice: "Invoice",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateInvoiceResponse$ {
    /** @deprecated use `UpdateInvoiceResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateInvoiceResponse$inboundSchema;
    /** @deprecated use `UpdateInvoiceResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateInvoiceResponse$outboundSchema;
    /** @deprecated use `UpdateInvoiceResponse$Outbound` instead. */
    export type Outbound = UpdateInvoiceResponse$Outbound;
}
