/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetGeneratedInvoiceRequest = {
  /**
   * Unique identifier
   */
  id: string;
};

export type GetGeneratedInvoiceResponse = {
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
export const GetGeneratedInvoiceRequest$inboundSchema: z.ZodType<
  GetGeneratedInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetGeneratedInvoiceRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetGeneratedInvoiceRequest$outboundSchema: z.ZodType<
  GetGeneratedInvoiceRequest$Outbound,
  z.ZodTypeDef,
  GetGeneratedInvoiceRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGeneratedInvoiceRequest$ {
  /** @deprecated use `GetGeneratedInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = GetGeneratedInvoiceRequest$inboundSchema;
  /** @deprecated use `GetGeneratedInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = GetGeneratedInvoiceRequest$outboundSchema;
  /** @deprecated use `GetGeneratedInvoiceRequest$Outbound` instead. */
  export type Outbound = GetGeneratedInvoiceRequest$Outbound;
}

export function getGeneratedInvoiceRequestToJSON(
  getGeneratedInvoiceRequest: GetGeneratedInvoiceRequest,
): string {
  return JSON.stringify(
    GetGeneratedInvoiceRequest$outboundSchema.parse(getGeneratedInvoiceRequest),
  );
}

export function getGeneratedInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGeneratedInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGeneratedInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGeneratedInvoiceRequest' from JSON`,
  );
}

/** @internal */
export const GetGeneratedInvoiceResponse$inboundSchema: z.ZodType<
  GetGeneratedInvoiceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ClientInvoice: shared.ClientInvoice$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ClientInvoice": "clientInvoice",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetGeneratedInvoiceResponse$Outbound = {
  ClientInvoice?: shared.ClientInvoice$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetGeneratedInvoiceResponse$outboundSchema: z.ZodType<
  GetGeneratedInvoiceResponse$Outbound,
  z.ZodTypeDef,
  GetGeneratedInvoiceResponse
> = z.object({
  clientInvoice: shared.ClientInvoice$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
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
export namespace GetGeneratedInvoiceResponse$ {
  /** @deprecated use `GetGeneratedInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = GetGeneratedInvoiceResponse$inboundSchema;
  /** @deprecated use `GetGeneratedInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = GetGeneratedInvoiceResponse$outboundSchema;
  /** @deprecated use `GetGeneratedInvoiceResponse$Outbound` instead. */
  export type Outbound = GetGeneratedInvoiceResponse$Outbound;
}

export function getGeneratedInvoiceResponseToJSON(
  getGeneratedInvoiceResponse: GetGeneratedInvoiceResponse,
): string {
  return JSON.stringify(
    GetGeneratedInvoiceResponse$outboundSchema.parse(
      getGeneratedInvoiceResponse,
    ),
  );
}

export function getGeneratedInvoiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetGeneratedInvoiceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGeneratedInvoiceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGeneratedInvoiceResponse' from JSON`,
  );
}
