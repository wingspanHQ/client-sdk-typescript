/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCollaboratorBatchRequest = {
  bulkBatchUpdate?: shared.BulkBatchUpdate | undefined;
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type UpdateCollaboratorBatchResponse = {
  /**
   * A batch of items for importing as collaborators
   */
  bulkCollaboratorBatch?: shared.BulkCollaboratorBatch | undefined;
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
export const UpdateCollaboratorBatchRequest$inboundSchema: z.ZodType<
  UpdateCollaboratorBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkBatchUpdate: shared.BulkBatchUpdate$inboundSchema.optional(),
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "BulkBatchUpdate": "bulkBatchUpdate",
  });
});

/** @internal */
export type UpdateCollaboratorBatchRequest$Outbound = {
  BulkBatchUpdate?: shared.BulkBatchUpdate$Outbound | undefined;
  batchId: string;
};

/** @internal */
export const UpdateCollaboratorBatchRequest$outboundSchema: z.ZodType<
  UpdateCollaboratorBatchRequest$Outbound,
  z.ZodTypeDef,
  UpdateCollaboratorBatchRequest
> = z.object({
  bulkBatchUpdate: shared.BulkBatchUpdate$outboundSchema.optional(),
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    bulkBatchUpdate: "BulkBatchUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollaboratorBatchRequest$ {
  /** @deprecated use `UpdateCollaboratorBatchRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCollaboratorBatchRequest$inboundSchema;
  /** @deprecated use `UpdateCollaboratorBatchRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCollaboratorBatchRequest$outboundSchema;
  /** @deprecated use `UpdateCollaboratorBatchRequest$Outbound` instead. */
  export type Outbound = UpdateCollaboratorBatchRequest$Outbound;
}

export function updateCollaboratorBatchRequestToJSON(
  updateCollaboratorBatchRequest: UpdateCollaboratorBatchRequest,
): string {
  return JSON.stringify(
    UpdateCollaboratorBatchRequest$outboundSchema.parse(
      updateCollaboratorBatchRequest,
    ),
  );
}

export function updateCollaboratorBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCollaboratorBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCollaboratorBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCollaboratorBatchRequest' from JSON`,
  );
}

/** @internal */
export const UpdateCollaboratorBatchResponse$inboundSchema: z.ZodType<
  UpdateCollaboratorBatchResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BulkCollaboratorBatch: shared.BulkCollaboratorBatch$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BulkCollaboratorBatch": "bulkCollaboratorBatch",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateCollaboratorBatchResponse$Outbound = {
  BulkCollaboratorBatch?: shared.BulkCollaboratorBatch$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateCollaboratorBatchResponse$outboundSchema: z.ZodType<
  UpdateCollaboratorBatchResponse$Outbound,
  z.ZodTypeDef,
  UpdateCollaboratorBatchResponse
> = z.object({
  bulkCollaboratorBatch: shared.BulkCollaboratorBatch$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    bulkCollaboratorBatch: "BulkCollaboratorBatch",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollaboratorBatchResponse$ {
  /** @deprecated use `UpdateCollaboratorBatchResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateCollaboratorBatchResponse$inboundSchema;
  /** @deprecated use `UpdateCollaboratorBatchResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateCollaboratorBatchResponse$outboundSchema;
  /** @deprecated use `UpdateCollaboratorBatchResponse$Outbound` instead. */
  export type Outbound = UpdateCollaboratorBatchResponse$Outbound;
}

export function updateCollaboratorBatchResponseToJSON(
  updateCollaboratorBatchResponse: UpdateCollaboratorBatchResponse,
): string {
  return JSON.stringify(
    UpdateCollaboratorBatchResponse$outboundSchema.parse(
      updateCollaboratorBatchResponse,
    ),
  );
}

export function updateCollaboratorBatchResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCollaboratorBatchResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCollaboratorBatchResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCollaboratorBatchResponse' from JSON`,
  );
}
