/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type RefundDepositedInvoiceRequest = {
  invoiceRefundRequest?: shared.InvoiceRefundRequest | undefined;
  /**
   * Unique identifier of an invoice
   */
  invoiceId: string;
};

export type RefundDepositedInvoiceResponse = {
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
export const RefundDepositedInvoiceRequest$inboundSchema: z.ZodType<
  RefundDepositedInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  InvoiceRefundRequest: shared.InvoiceRefundRequest$inboundSchema.optional(),
  invoice_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "InvoiceRefundRequest": "invoiceRefundRequest",
    "invoice_id": "invoiceId",
  });
});

/** @internal */
export type RefundDepositedInvoiceRequest$Outbound = {
  InvoiceRefundRequest?: shared.InvoiceRefundRequest$Outbound | undefined;
  invoice_id: string;
};

/** @internal */
export const RefundDepositedInvoiceRequest$outboundSchema: z.ZodType<
  RefundDepositedInvoiceRequest$Outbound,
  z.ZodTypeDef,
  RefundDepositedInvoiceRequest
> = z.object({
  invoiceRefundRequest: shared.InvoiceRefundRequest$outboundSchema.optional(),
  invoiceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    invoiceRefundRequest: "InvoiceRefundRequest",
    invoiceId: "invoice_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefundDepositedInvoiceRequest$ {
  /** @deprecated use `RefundDepositedInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = RefundDepositedInvoiceRequest$inboundSchema;
  /** @deprecated use `RefundDepositedInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = RefundDepositedInvoiceRequest$outboundSchema;
  /** @deprecated use `RefundDepositedInvoiceRequest$Outbound` instead. */
  export type Outbound = RefundDepositedInvoiceRequest$Outbound;
}

export function refundDepositedInvoiceRequestToJSON(
  refundDepositedInvoiceRequest: RefundDepositedInvoiceRequest,
): string {
  return JSON.stringify(
    RefundDepositedInvoiceRequest$outboundSchema.parse(
      refundDepositedInvoiceRequest,
    ),
  );
}

export function refundDepositedInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<RefundDepositedInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefundDepositedInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefundDepositedInvoiceRequest' from JSON`,
  );
}

/** @internal */
export const RefundDepositedInvoiceResponse$inboundSchema: z.ZodType<
  RefundDepositedInvoiceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Invoice: shared.Invoice$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Invoice": "invoice",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type RefundDepositedInvoiceResponse$Outbound = {
  ContentType: string;
  Invoice?: shared.Invoice$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const RefundDepositedInvoiceResponse$outboundSchema: z.ZodType<
  RefundDepositedInvoiceResponse$Outbound,
  z.ZodTypeDef,
  RefundDepositedInvoiceResponse
> = z.object({
  contentType: z.string(),
  invoice: shared.Invoice$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
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
export namespace RefundDepositedInvoiceResponse$ {
  /** @deprecated use `RefundDepositedInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = RefundDepositedInvoiceResponse$inboundSchema;
  /** @deprecated use `RefundDepositedInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = RefundDepositedInvoiceResponse$outboundSchema;
  /** @deprecated use `RefundDepositedInvoiceResponse$Outbound` instead. */
  export type Outbound = RefundDepositedInvoiceResponse$Outbound;
}

export function refundDepositedInvoiceResponseToJSON(
  refundDepositedInvoiceResponse: RefundDepositedInvoiceResponse,
): string {
  return JSON.stringify(
    RefundDepositedInvoiceResponse$outboundSchema.parse(
      refundDepositedInvoiceResponse,
    ),
  );
}

export function refundDepositedInvoiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<RefundDepositedInvoiceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefundDepositedInvoiceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefundDepositedInvoiceResponse' from JSON`,
  );
}
