/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CompanyLinks = {
  instagramUrl?: string | null | undefined;
  linkedInUrl?: string | null | undefined;
  otherUrl?: string | null | undefined;
  twitterUrl?: string | null | undefined;
  websiteUrl?: string | null | undefined;
};

/** @internal */
export const CompanyLinks$inboundSchema: z.ZodType<
  CompanyLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  instagramUrl: z.nullable(z.string()).optional(),
  linkedInUrl: z.nullable(z.string()).optional(),
  otherUrl: z.nullable(z.string()).optional(),
  twitterUrl: z.nullable(z.string()).optional(),
  websiteUrl: z.nullable(z.string()).optional(),
});

/** @internal */
export type CompanyLinks$Outbound = {
  instagramUrl?: string | null | undefined;
  linkedInUrl?: string | null | undefined;
  otherUrl?: string | null | undefined;
  twitterUrl?: string | null | undefined;
  websiteUrl?: string | null | undefined;
};

/** @internal */
export const CompanyLinks$outboundSchema: z.ZodType<
  CompanyLinks$Outbound,
  z.ZodTypeDef,
  CompanyLinks
> = z.object({
  instagramUrl: z.nullable(z.string()).optional(),
  linkedInUrl: z.nullable(z.string()).optional(),
  otherUrl: z.nullable(z.string()).optional(),
  twitterUrl: z.nullable(z.string()).optional(),
  websiteUrl: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyLinks$ {
  /** @deprecated use `CompanyLinks$inboundSchema` instead. */
  export const inboundSchema = CompanyLinks$inboundSchema;
  /** @deprecated use `CompanyLinks$outboundSchema` instead. */
  export const outboundSchema = CompanyLinks$outboundSchema;
  /** @deprecated use `CompanyLinks$Outbound` instead. */
  export type Outbound = CompanyLinks$Outbound;
}
