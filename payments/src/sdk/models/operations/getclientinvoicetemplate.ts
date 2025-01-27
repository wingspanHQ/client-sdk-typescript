/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetClientInvoiceTemplateRequest = {
  /**
   * Unique identifier
   */
  id: string;
};

export type GetClientInvoiceTemplateResponse = {
  /**
   * A client created invoiceTemplate (recurring Invoice)
   */
  clientInvoiceTemplate?: shared.ClientInvoiceTemplate | undefined;
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
export const GetClientInvoiceTemplateRequest$inboundSchema: z.ZodType<
  GetClientInvoiceTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetClientInvoiceTemplateRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetClientInvoiceTemplateRequest$outboundSchema: z.ZodType<
  GetClientInvoiceTemplateRequest$Outbound,
  z.ZodTypeDef,
  GetClientInvoiceTemplateRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClientInvoiceTemplateRequest$ {
  /** @deprecated use `GetClientInvoiceTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = GetClientInvoiceTemplateRequest$inboundSchema;
  /** @deprecated use `GetClientInvoiceTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = GetClientInvoiceTemplateRequest$outboundSchema;
  /** @deprecated use `GetClientInvoiceTemplateRequest$Outbound` instead. */
  export type Outbound = GetClientInvoiceTemplateRequest$Outbound;
}

export function getClientInvoiceTemplateRequestToJSON(
  getClientInvoiceTemplateRequest: GetClientInvoiceTemplateRequest,
): string {
  return JSON.stringify(
    GetClientInvoiceTemplateRequest$outboundSchema.parse(
      getClientInvoiceTemplateRequest,
    ),
  );
}

export function getClientInvoiceTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetClientInvoiceTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClientInvoiceTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClientInvoiceTemplateRequest' from JSON`,
  );
}

/** @internal */
export const GetClientInvoiceTemplateResponse$inboundSchema: z.ZodType<
  GetClientInvoiceTemplateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ClientInvoiceTemplate: shared.ClientInvoiceTemplate$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ClientInvoiceTemplate": "clientInvoiceTemplate",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetClientInvoiceTemplateResponse$Outbound = {
  ClientInvoiceTemplate?: shared.ClientInvoiceTemplate$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetClientInvoiceTemplateResponse$outboundSchema: z.ZodType<
  GetClientInvoiceTemplateResponse$Outbound,
  z.ZodTypeDef,
  GetClientInvoiceTemplateResponse
> = z.object({
  clientInvoiceTemplate: shared.ClientInvoiceTemplate$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    clientInvoiceTemplate: "ClientInvoiceTemplate",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClientInvoiceTemplateResponse$ {
  /** @deprecated use `GetClientInvoiceTemplateResponse$inboundSchema` instead. */
  export const inboundSchema = GetClientInvoiceTemplateResponse$inboundSchema;
  /** @deprecated use `GetClientInvoiceTemplateResponse$outboundSchema` instead. */
  export const outboundSchema = GetClientInvoiceTemplateResponse$outboundSchema;
  /** @deprecated use `GetClientInvoiceTemplateResponse$Outbound` instead. */
  export type Outbound = GetClientInvoiceTemplateResponse$Outbound;
}

export function getClientInvoiceTemplateResponseToJSON(
  getClientInvoiceTemplateResponse: GetClientInvoiceTemplateResponse,
): string {
  return JSON.stringify(
    GetClientInvoiceTemplateResponse$outboundSchema.parse(
      getClientInvoiceTemplateResponse,
    ),
  );
}

export function getClientInvoiceTemplateResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetClientInvoiceTemplateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetClientInvoiceTemplateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetClientInvoiceTemplateResponse' from JSON`,
  );
}
