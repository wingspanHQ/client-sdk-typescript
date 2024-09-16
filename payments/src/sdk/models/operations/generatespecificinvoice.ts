/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GenerateSpecificInvoiceRequest = {
  /**
   * Unique identifier of an invoice
   */
  invoiceId: string;
};

export type GenerateSpecificInvoiceResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Response from generation of invoice pdf
   */
  invoicePdfGenerationResponse?:
    | shared.InvoicePdfGenerationResponse
    | undefined;
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
export const GenerateSpecificInvoiceRequest$inboundSchema: z.ZodType<
  GenerateSpecificInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  invoice_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "invoice_id": "invoiceId",
  });
});

/** @internal */
export type GenerateSpecificInvoiceRequest$Outbound = {
  invoice_id: string;
};

/** @internal */
export const GenerateSpecificInvoiceRequest$outboundSchema: z.ZodType<
  GenerateSpecificInvoiceRequest$Outbound,
  z.ZodTypeDef,
  GenerateSpecificInvoiceRequest
> = z.object({
  invoiceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    invoiceId: "invoice_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateSpecificInvoiceRequest$ {
  /** @deprecated use `GenerateSpecificInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = GenerateSpecificInvoiceRequest$inboundSchema;
  /** @deprecated use `GenerateSpecificInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = GenerateSpecificInvoiceRequest$outboundSchema;
  /** @deprecated use `GenerateSpecificInvoiceRequest$Outbound` instead. */
  export type Outbound = GenerateSpecificInvoiceRequest$Outbound;
}

/** @internal */
export const GenerateSpecificInvoiceResponse$inboundSchema: z.ZodType<
  GenerateSpecificInvoiceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  InvoicePdfGenerationResponse: shared
    .InvoicePdfGenerationResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "InvoicePdfGenerationResponse": "invoicePdfGenerationResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GenerateSpecificInvoiceResponse$Outbound = {
  ContentType: string;
  InvoicePdfGenerationResponse?:
    | shared.InvoicePdfGenerationResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GenerateSpecificInvoiceResponse$outboundSchema: z.ZodType<
  GenerateSpecificInvoiceResponse$Outbound,
  z.ZodTypeDef,
  GenerateSpecificInvoiceResponse
> = z.object({
  contentType: z.string(),
  invoicePdfGenerationResponse: shared
    .InvoicePdfGenerationResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    invoicePdfGenerationResponse: "InvoicePdfGenerationResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateSpecificInvoiceResponse$ {
  /** @deprecated use `GenerateSpecificInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = GenerateSpecificInvoiceResponse$inboundSchema;
  /** @deprecated use `GenerateSpecificInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = GenerateSpecificInvoiceResponse$outboundSchema;
  /** @deprecated use `GenerateSpecificInvoiceResponse$Outbound` instead. */
  export type Outbound = GenerateSpecificInvoiceResponse$Outbound;
}
