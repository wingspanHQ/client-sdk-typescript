/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateGeneratedInvoiceRequest = {
    clientInvoiceUpdateRequest?: shared.ClientInvoiceUpdateRequest | undefined;
    /**
     * Unique identifier
     */
    id: string;
};

export type UpdateGeneratedInvoiceResponse = {
    /**
     * A client created invoice
     */
    clientInvoice?: shared.ClientInvoice | undefined;
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
export const UpdateGeneratedInvoiceRequest$inboundSchema: z.ZodType<
    UpdateGeneratedInvoiceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ClientInvoiceUpdateRequest: shared.ClientInvoiceUpdateRequest$inboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ClientInvoiceUpdateRequest: "clientInvoiceUpdateRequest",
        });
    });

/** @internal */
export type UpdateGeneratedInvoiceRequest$Outbound = {
    ClientInvoiceUpdateRequest?: shared.ClientInvoiceUpdateRequest$Outbound | undefined;
    id: string;
};

/** @internal */
export const UpdateGeneratedInvoiceRequest$outboundSchema: z.ZodType<
    UpdateGeneratedInvoiceRequest$Outbound,
    z.ZodTypeDef,
    UpdateGeneratedInvoiceRequest
> = z
    .object({
        clientInvoiceUpdateRequest: shared.ClientInvoiceUpdateRequest$outboundSchema.optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            clientInvoiceUpdateRequest: "ClientInvoiceUpdateRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGeneratedInvoiceRequest$ {
    /** @deprecated use `UpdateGeneratedInvoiceRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateGeneratedInvoiceRequest$inboundSchema;
    /** @deprecated use `UpdateGeneratedInvoiceRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateGeneratedInvoiceRequest$outboundSchema;
    /** @deprecated use `UpdateGeneratedInvoiceRequest$Outbound` instead. */
    export type Outbound = UpdateGeneratedInvoiceRequest$Outbound;
}

/** @internal */
export const UpdateGeneratedInvoiceResponse$inboundSchema: z.ZodType<
    UpdateGeneratedInvoiceResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ClientInvoice: shared.ClientInvoice$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ClientInvoice: "clientInvoice",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type UpdateGeneratedInvoiceResponse$Outbound = {
    ClientInvoice?: shared.ClientInvoice$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdateGeneratedInvoiceResponse$outboundSchema: z.ZodType<
    UpdateGeneratedInvoiceResponse$Outbound,
    z.ZodTypeDef,
    UpdateGeneratedInvoiceResponse
> = z
    .object({
        clientInvoice: shared.ClientInvoice$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            clientInvoice: "ClientInvoice",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGeneratedInvoiceResponse$ {
    /** @deprecated use `UpdateGeneratedInvoiceResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateGeneratedInvoiceResponse$inboundSchema;
    /** @deprecated use `UpdateGeneratedInvoiceResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateGeneratedInvoiceResponse$outboundSchema;
    /** @deprecated use `UpdateGeneratedInvoiceResponse$Outbound` instead. */
    export type Outbound = UpdateGeneratedInvoiceResponse$Outbound;
}
