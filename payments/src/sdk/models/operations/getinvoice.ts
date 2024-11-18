/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetInvoiceRequest = {
  /**
   * Unique identifier
   */
  id: string;
};

export type GetInvoiceResponse = {
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
export const GetInvoiceRequest$inboundSchema: z.ZodType<
  GetInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetInvoiceRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetInvoiceRequest$outboundSchema: z.ZodType<
  GetInvoiceRequest$Outbound,
  z.ZodTypeDef,
  GetInvoiceRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInvoiceRequest$ {
  /** @deprecated use `GetInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = GetInvoiceRequest$inboundSchema;
  /** @deprecated use `GetInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = GetInvoiceRequest$outboundSchema;
  /** @deprecated use `GetInvoiceRequest$Outbound` instead. */
  export type Outbound = GetInvoiceRequest$Outbound;
}

export function getInvoiceRequestToJSON(
  getInvoiceRequest: GetInvoiceRequest,
): string {
  return JSON.stringify(
    GetInvoiceRequest$outboundSchema.parse(getInvoiceRequest),
  );
}

export function getInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInvoiceRequest' from JSON`,
  );
}

/** @internal */
export const GetInvoiceResponse$inboundSchema: z.ZodType<
  GetInvoiceResponse,
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
export type GetInvoiceResponse$Outbound = {
  ContentType: string;
  Invoice?: shared.Invoice$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetInvoiceResponse$outboundSchema: z.ZodType<
  GetInvoiceResponse$Outbound,
  z.ZodTypeDef,
  GetInvoiceResponse
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
export namespace GetInvoiceResponse$ {
  /** @deprecated use `GetInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = GetInvoiceResponse$inboundSchema;
  /** @deprecated use `GetInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = GetInvoiceResponse$outboundSchema;
  /** @deprecated use `GetInvoiceResponse$Outbound` instead. */
  export type Outbound = GetInvoiceResponse$Outbound;
}

export function getInvoiceResponseToJSON(
  getInvoiceResponse: GetInvoiceResponse,
): string {
  return JSON.stringify(
    GetInvoiceResponse$outboundSchema.parse(getInvoiceResponse),
  );
}

export function getInvoiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetInvoiceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInvoiceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInvoiceResponse' from JSON`,
  );
}
