/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GenerateTestInvoiceResponse = {
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
export const GenerateTestInvoiceResponse$inboundSchema: z.ZodType<
    GenerateTestInvoiceResponse,
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
export type GenerateTestInvoiceResponse$Outbound = {
    ClientInvoice?: shared.ClientInvoice$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GenerateTestInvoiceResponse$outboundSchema: z.ZodType<
    GenerateTestInvoiceResponse$Outbound,
    z.ZodTypeDef,
    GenerateTestInvoiceResponse
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
export namespace GenerateTestInvoiceResponse$ {
    /** @deprecated use `GenerateTestInvoiceResponse$inboundSchema` instead. */
    export const inboundSchema = GenerateTestInvoiceResponse$inboundSchema;
    /** @deprecated use `GenerateTestInvoiceResponse$outboundSchema` instead. */
    export const outboundSchema = GenerateTestInvoiceResponse$outboundSchema;
    /** @deprecated use `GenerateTestInvoiceResponse$Outbound` instead. */
    export type Outbound = GenerateTestInvoiceResponse$Outbound;
}
