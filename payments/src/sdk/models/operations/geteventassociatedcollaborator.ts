/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetEventAssociatedCollaboratorRequest = {
  /**
   * Unique identifier
   */
  id: string;
};

export type GetEventAssociatedCollaboratorResponse = {
  /**
   * List of events on collaborator
   */
  collaboratorEvents?: shared.CollaboratorEvents | undefined;
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
export const GetEventAssociatedCollaboratorRequest$inboundSchema: z.ZodType<
  GetEventAssociatedCollaboratorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetEventAssociatedCollaboratorRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetEventAssociatedCollaboratorRequest$outboundSchema: z.ZodType<
  GetEventAssociatedCollaboratorRequest$Outbound,
  z.ZodTypeDef,
  GetEventAssociatedCollaboratorRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEventAssociatedCollaboratorRequest$ {
  /** @deprecated use `GetEventAssociatedCollaboratorRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetEventAssociatedCollaboratorRequest$inboundSchema;
  /** @deprecated use `GetEventAssociatedCollaboratorRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetEventAssociatedCollaboratorRequest$outboundSchema;
  /** @deprecated use `GetEventAssociatedCollaboratorRequest$Outbound` instead. */
  export type Outbound = GetEventAssociatedCollaboratorRequest$Outbound;
}

export function getEventAssociatedCollaboratorRequestToJSON(
  getEventAssociatedCollaboratorRequest: GetEventAssociatedCollaboratorRequest,
): string {
  return JSON.stringify(
    GetEventAssociatedCollaboratorRequest$outboundSchema.parse(
      getEventAssociatedCollaboratorRequest,
    ),
  );
}

export function getEventAssociatedCollaboratorRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEventAssociatedCollaboratorRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetEventAssociatedCollaboratorRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEventAssociatedCollaboratorRequest' from JSON`,
  );
}

/** @internal */
export const GetEventAssociatedCollaboratorResponse$inboundSchema: z.ZodType<
  GetEventAssociatedCollaboratorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CollaboratorEvents: shared.CollaboratorEvents$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CollaboratorEvents": "collaboratorEvents",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetEventAssociatedCollaboratorResponse$Outbound = {
  CollaboratorEvents?: shared.CollaboratorEvents$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetEventAssociatedCollaboratorResponse$outboundSchema: z.ZodType<
  GetEventAssociatedCollaboratorResponse$Outbound,
  z.ZodTypeDef,
  GetEventAssociatedCollaboratorResponse
> = z.object({
  collaboratorEvents: shared.CollaboratorEvents$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    collaboratorEvents: "CollaboratorEvents",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEventAssociatedCollaboratorResponse$ {
  /** @deprecated use `GetEventAssociatedCollaboratorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetEventAssociatedCollaboratorResponse$inboundSchema;
  /** @deprecated use `GetEventAssociatedCollaboratorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetEventAssociatedCollaboratorResponse$outboundSchema;
  /** @deprecated use `GetEventAssociatedCollaboratorResponse$Outbound` instead. */
  export type Outbound = GetEventAssociatedCollaboratorResponse$Outbound;
}

export function getEventAssociatedCollaboratorResponseToJSON(
  getEventAssociatedCollaboratorResponse:
    GetEventAssociatedCollaboratorResponse,
): string {
  return JSON.stringify(
    GetEventAssociatedCollaboratorResponse$outboundSchema.parse(
      getEventAssociatedCollaboratorResponse,
    ),
  );
}

export function getEventAssociatedCollaboratorResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEventAssociatedCollaboratorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetEventAssociatedCollaboratorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEventAssociatedCollaboratorResponse' from JSON`,
  );
}
