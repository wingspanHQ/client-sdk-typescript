/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateCollaboratorRequest = {
  collaboratorUpdateRequest?: shared.CollaboratorUpdateRequest | undefined;
  /**
   * Unique identifier
   */
  id: string;
};

export type UpdateCollaboratorResponse = {
  /**
   * A collaborator is a contractor that can receive payments
   */
  collaboratorSchema?: shared.CollaboratorSchema | undefined;
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
export const UpdateCollaboratorRequest$inboundSchema: z.ZodType<
  UpdateCollaboratorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CollaboratorUpdateRequest: shared.CollaboratorUpdateRequest$inboundSchema
    .optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CollaboratorUpdateRequest": "collaboratorUpdateRequest",
  });
});

/** @internal */
export type UpdateCollaboratorRequest$Outbound = {
  CollaboratorUpdateRequest?:
    | shared.CollaboratorUpdateRequest$Outbound
    | undefined;
  id: string;
};

/** @internal */
export const UpdateCollaboratorRequest$outboundSchema: z.ZodType<
  UpdateCollaboratorRequest$Outbound,
  z.ZodTypeDef,
  UpdateCollaboratorRequest
> = z.object({
  collaboratorUpdateRequest: shared.CollaboratorUpdateRequest$outboundSchema
    .optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    collaboratorUpdateRequest: "CollaboratorUpdateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollaboratorRequest$ {
  /** @deprecated use `UpdateCollaboratorRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCollaboratorRequest$inboundSchema;
  /** @deprecated use `UpdateCollaboratorRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCollaboratorRequest$outboundSchema;
  /** @deprecated use `UpdateCollaboratorRequest$Outbound` instead. */
  export type Outbound = UpdateCollaboratorRequest$Outbound;
}

/** @internal */
export const UpdateCollaboratorResponse$inboundSchema: z.ZodType<
  UpdateCollaboratorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CollaboratorSchema: shared.CollaboratorSchema$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CollaboratorSchema": "collaboratorSchema",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateCollaboratorResponse$Outbound = {
  CollaboratorSchema?: shared.CollaboratorSchema$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateCollaboratorResponse$outboundSchema: z.ZodType<
  UpdateCollaboratorResponse$Outbound,
  z.ZodTypeDef,
  UpdateCollaboratorResponse
> = z.object({
  collaboratorSchema: shared.CollaboratorSchema$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    collaboratorSchema: "CollaboratorSchema",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollaboratorResponse$ {
  /** @deprecated use `UpdateCollaboratorResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateCollaboratorResponse$inboundSchema;
  /** @deprecated use `UpdateCollaboratorResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateCollaboratorResponse$outboundSchema;
  /** @deprecated use `UpdateCollaboratorResponse$Outbound` instead. */
  export type Outbound = UpdateCollaboratorResponse$Outbound;
}
