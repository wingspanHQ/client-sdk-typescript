/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CollaboratorGroupRequirement,
  CollaboratorGroupRequirement$inboundSchema,
  CollaboratorGroupRequirement$Outbound,
  CollaboratorGroupRequirement$outboundSchema,
} from "./collaboratorgrouprequirement.js";

export type CollaboratorGroupCreateRequest = {
  collaboratorSettings?: { [k: string]: string } | null | undefined;
  description: string;
  eligibilityRequirements?:
    | Array<CollaboratorGroupRequirement>
    | null
    | undefined;
  name: string;
};

/** @internal */
export const CollaboratorGroupCreateRequest$inboundSchema: z.ZodType<
  CollaboratorGroupCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  collaboratorSettings: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(CollaboratorGroupRequirement$inboundSchema),
  ).optional(),
  name: z.string(),
});

/** @internal */
export type CollaboratorGroupCreateRequest$Outbound = {
  collaboratorSettings?: { [k: string]: string } | null | undefined;
  description: string;
  eligibilityRequirements?:
    | Array<CollaboratorGroupRequirement$Outbound>
    | null
    | undefined;
  name: string;
};

/** @internal */
export const CollaboratorGroupCreateRequest$outboundSchema: z.ZodType<
  CollaboratorGroupCreateRequest$Outbound,
  z.ZodTypeDef,
  CollaboratorGroupCreateRequest
> = z.object({
  collaboratorSettings: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  eligibilityRequirements: z.nullable(
    z.array(CollaboratorGroupRequirement$outboundSchema),
  ).optional(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaboratorGroupCreateRequest$ {
  /** @deprecated use `CollaboratorGroupCreateRequest$inboundSchema` instead. */
  export const inboundSchema = CollaboratorGroupCreateRequest$inboundSchema;
  /** @deprecated use `CollaboratorGroupCreateRequest$outboundSchema` instead. */
  export const outboundSchema = CollaboratorGroupCreateRequest$outboundSchema;
  /** @deprecated use `CollaboratorGroupCreateRequest$Outbound` instead. */
  export type Outbound = CollaboratorGroupCreateRequest$Outbound;
}

export function collaboratorGroupCreateRequestToJSON(
  collaboratorGroupCreateRequest: CollaboratorGroupCreateRequest,
): string {
  return JSON.stringify(
    CollaboratorGroupCreateRequest$outboundSchema.parse(
      collaboratorGroupCreateRequest,
    ),
  );
}

export function collaboratorGroupCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CollaboratorGroupCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollaboratorGroupCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollaboratorGroupCreateRequest' from JSON`,
  );
}
