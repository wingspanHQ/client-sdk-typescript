/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateSpecificInvoiceBatchRequest = {
  bulkInvoiceItemUpdate?: shared.BulkInvoiceItemUpdate | undefined;
  /**
   * Unique identifier for a batch
   */
  batchId: string;
  /**
   * Unique identifier for an item in a batch
   */
  batchItemId: string;
};

export type UpdateSpecificInvoiceBatchResponse = {
  /**
   * An item that will be converted into a invoice
   */
  bulkInvoiceItem?: shared.BulkInvoiceItem | undefined;
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
export const UpdateSpecificInvoiceBatchRequest$inboundSchema: z.ZodType<
  UpdateSpecificInvoiceBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkInvoiceItemUpdate: shared.BulkInvoiceItemUpdate$inboundSchema.optional(),
  batchId: z.string(),
  batchItemId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "BulkInvoiceItemUpdate": "bulkInvoiceItemUpdate",
  });
});

/** @internal */
export type UpdateSpecificInvoiceBatchRequest$Outbound = {
  BulkInvoiceItemUpdate?: shared.BulkInvoiceItemUpdate$Outbound | undefined;
  batchId: string;
  batchItemId: string;
};

/** @internal */
export const UpdateSpecificInvoiceBatchRequest$outboundSchema: z.ZodType<
  UpdateSpecificInvoiceBatchRequest$Outbound,
  z.ZodTypeDef,
  UpdateSpecificInvoiceBatchRequest
> = z.object({
  bulkInvoiceItemUpdate: shared.BulkInvoiceItemUpdate$outboundSchema.optional(),
  batchId: z.string(),
  batchItemId: z.string(),
}).transform((v) => {
  return remap$(v, {
    bulkInvoiceItemUpdate: "BulkInvoiceItemUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSpecificInvoiceBatchRequest$ {
  /** @deprecated use `UpdateSpecificInvoiceBatchRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateSpecificInvoiceBatchRequest$inboundSchema;
  /** @deprecated use `UpdateSpecificInvoiceBatchRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSpecificInvoiceBatchRequest$outboundSchema;
  /** @deprecated use `UpdateSpecificInvoiceBatchRequest$Outbound` instead. */
  export type Outbound = UpdateSpecificInvoiceBatchRequest$Outbound;
}

export function updateSpecificInvoiceBatchRequestToJSON(
  updateSpecificInvoiceBatchRequest: UpdateSpecificInvoiceBatchRequest,
): string {
  return JSON.stringify(
    UpdateSpecificInvoiceBatchRequest$outboundSchema.parse(
      updateSpecificInvoiceBatchRequest,
    ),
  );
}

export function updateSpecificInvoiceBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSpecificInvoiceBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSpecificInvoiceBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSpecificInvoiceBatchRequest' from JSON`,
  );
}

/** @internal */
export const UpdateSpecificInvoiceBatchResponse$inboundSchema: z.ZodType<
  UpdateSpecificInvoiceBatchResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkInvoiceItem: shared.BulkInvoiceItem$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BulkInvoiceItem": "bulkInvoiceItem",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateSpecificInvoiceBatchResponse$Outbound = {
  BulkInvoiceItem?: shared.BulkInvoiceItem$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateSpecificInvoiceBatchResponse$outboundSchema: z.ZodType<
  UpdateSpecificInvoiceBatchResponse$Outbound,
  z.ZodTypeDef,
  UpdateSpecificInvoiceBatchResponse
> = z.object({
  bulkInvoiceItem: shared.BulkInvoiceItem$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    bulkInvoiceItem: "BulkInvoiceItem",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSpecificInvoiceBatchResponse$ {
  /** @deprecated use `UpdateSpecificInvoiceBatchResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateSpecificInvoiceBatchResponse$inboundSchema;
  /** @deprecated use `UpdateSpecificInvoiceBatchResponse$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSpecificInvoiceBatchResponse$outboundSchema;
  /** @deprecated use `UpdateSpecificInvoiceBatchResponse$Outbound` instead. */
  export type Outbound = UpdateSpecificInvoiceBatchResponse$Outbound;
}

export function updateSpecificInvoiceBatchResponseToJSON(
  updateSpecificInvoiceBatchResponse: UpdateSpecificInvoiceBatchResponse,
): string {
  return JSON.stringify(
    UpdateSpecificInvoiceBatchResponse$outboundSchema.parse(
      updateSpecificInvoiceBatchResponse,
    ),
  );
}

export function updateSpecificInvoiceBatchResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSpecificInvoiceBatchResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateSpecificInvoiceBatchResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSpecificInvoiceBatchResponse' from JSON`,
  );
}
