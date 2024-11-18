/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type DeleteCollaboratorBatchRequest = {
  /**
   * Unique identifier for a batch
   */
  batchId: string;
};

export type DeleteCollaboratorBatchResponse = {
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
export const DeleteCollaboratorBatchRequest$inboundSchema: z.ZodType<
  DeleteCollaboratorBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  batchId: z.string(),
});

/** @internal */
export type DeleteCollaboratorBatchRequest$Outbound = {
  batchId: string;
};

/** @internal */
export const DeleteCollaboratorBatchRequest$outboundSchema: z.ZodType<
  DeleteCollaboratorBatchRequest$Outbound,
  z.ZodTypeDef,
  DeleteCollaboratorBatchRequest
> = z.object({
  batchId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCollaboratorBatchRequest$ {
  /** @deprecated use `DeleteCollaboratorBatchRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteCollaboratorBatchRequest$inboundSchema;
  /** @deprecated use `DeleteCollaboratorBatchRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteCollaboratorBatchRequest$outboundSchema;
  /** @deprecated use `DeleteCollaboratorBatchRequest$Outbound` instead. */
  export type Outbound = DeleteCollaboratorBatchRequest$Outbound;
}

export function deleteCollaboratorBatchRequestToJSON(
  deleteCollaboratorBatchRequest: DeleteCollaboratorBatchRequest,
): string {
  return JSON.stringify(
    DeleteCollaboratorBatchRequest$outboundSchema.parse(
      deleteCollaboratorBatchRequest,
    ),
  );
}

export function deleteCollaboratorBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCollaboratorBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCollaboratorBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCollaboratorBatchRequest' from JSON`,
  );
}

/** @internal */
export const DeleteCollaboratorBatchResponse$inboundSchema: z.ZodType<
  DeleteCollaboratorBatchResponse,
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
export type DeleteCollaboratorBatchResponse$Outbound = {
  BulkCollaboratorBatch?: shared.BulkCollaboratorBatch$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeleteCollaboratorBatchResponse$outboundSchema: z.ZodType<
  DeleteCollaboratorBatchResponse$Outbound,
  z.ZodTypeDef,
  DeleteCollaboratorBatchResponse
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
export namespace DeleteCollaboratorBatchResponse$ {
  /** @deprecated use `DeleteCollaboratorBatchResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteCollaboratorBatchResponse$inboundSchema;
  /** @deprecated use `DeleteCollaboratorBatchResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteCollaboratorBatchResponse$outboundSchema;
  /** @deprecated use `DeleteCollaboratorBatchResponse$Outbound` instead. */
  export type Outbound = DeleteCollaboratorBatchResponse$Outbound;
}

export function deleteCollaboratorBatchResponseToJSON(
  deleteCollaboratorBatchResponse: DeleteCollaboratorBatchResponse,
): string {
  return JSON.stringify(
    DeleteCollaboratorBatchResponse$outboundSchema.parse(
      deleteCollaboratorBatchResponse,
    ),
  );
}

export function deleteCollaboratorBatchResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCollaboratorBatchResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCollaboratorBatchResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCollaboratorBatchResponse' from JSON`,
  );
}
