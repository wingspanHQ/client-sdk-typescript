/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CollaboratorEvents = {
  knowYourCustomerVerifiedAt: string;
  payoutMethodFirstAddedAt: string;
  signedUpAt?: string | null | undefined;
  taxDocumentationVerifiedAt: string;
};

/** @internal */
export const CollaboratorEvents$inboundSchema: z.ZodType<
  CollaboratorEvents,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowYourCustomerVerifiedAt: z.string(),
  payoutMethodFirstAddedAt: z.string(),
  signedUpAt: z.nullable(z.string()).optional(),
  taxDocumentationVerifiedAt: z.string(),
});

/** @internal */
export type CollaboratorEvents$Outbound = {
  knowYourCustomerVerifiedAt: string;
  payoutMethodFirstAddedAt: string;
  signedUpAt?: string | null | undefined;
  taxDocumentationVerifiedAt: string;
};

/** @internal */
export const CollaboratorEvents$outboundSchema: z.ZodType<
  CollaboratorEvents$Outbound,
  z.ZodTypeDef,
  CollaboratorEvents
> = z.object({
  knowYourCustomerVerifiedAt: z.string(),
  payoutMethodFirstAddedAt: z.string(),
  signedUpAt: z.nullable(z.string()).optional(),
  taxDocumentationVerifiedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollaboratorEvents$ {
  /** @deprecated use `CollaboratorEvents$inboundSchema` instead. */
  export const inboundSchema = CollaboratorEvents$inboundSchema;
  /** @deprecated use `CollaboratorEvents$outboundSchema` instead. */
  export const outboundSchema = CollaboratorEvents$outboundSchema;
  /** @deprecated use `CollaboratorEvents$Outbound` instead. */
  export type Outbound = CollaboratorEvents$Outbound;
}
