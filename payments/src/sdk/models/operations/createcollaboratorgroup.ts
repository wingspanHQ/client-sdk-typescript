/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateCollaboratorGroupResponse = {
  /**
   * Collaborator Configuration Per Group
   */
  collaboratorGroupResponse?: shared.CollaboratorGroupResponse | undefined;
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
export const CreateCollaboratorGroupResponse$inboundSchema: z.ZodType<
  CreateCollaboratorGroupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CollaboratorGroupResponse: shared.CollaboratorGroupResponse$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CollaboratorGroupResponse": "collaboratorGroupResponse",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateCollaboratorGroupResponse$Outbound = {
  CollaboratorGroupResponse?:
    | shared.CollaboratorGroupResponse$Outbound
    | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreateCollaboratorGroupResponse$outboundSchema: z.ZodType<
  CreateCollaboratorGroupResponse$Outbound,
  z.ZodTypeDef,
  CreateCollaboratorGroupResponse
> = z.object({
  collaboratorGroupResponse: shared.CollaboratorGroupResponse$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    collaboratorGroupResponse: "CollaboratorGroupResponse",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCollaboratorGroupResponse$ {
  /** @deprecated use `CreateCollaboratorGroupResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCollaboratorGroupResponse$inboundSchema;
  /** @deprecated use `CreateCollaboratorGroupResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCollaboratorGroupResponse$outboundSchema;
  /** @deprecated use `CreateCollaboratorGroupResponse$Outbound` instead. */
  export type Outbound = CreateCollaboratorGroupResponse$Outbound;
}

export function createCollaboratorGroupResponseToJSON(
  createCollaboratorGroupResponse: CreateCollaboratorGroupResponse,
): string {
  return JSON.stringify(
    CreateCollaboratorGroupResponse$outboundSchema.parse(
      createCollaboratorGroupResponse,
    ),
  );
}

export function createCollaboratorGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCollaboratorGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCollaboratorGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCollaboratorGroupResponse' from JSON`,
  );
}
