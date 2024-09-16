/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a = {
  deductionId?: string | null | undefined;
  errorMessage?: string | null | undefined;
  invoiceId?: string | null | undefined;
  invoiceTemplateId?: string | null | undefined;
  resolvedMemberClientId?: string | null | undefined;
};

/** @internal */
export const C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$inboundSchema:
  z.ZodType<
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a,
    z.ZodTypeDef,
    unknown
  > = z.object({
    deductionId: z.nullable(z.string()).optional(),
    errorMessage: z.nullable(z.string()).optional(),
    invoiceId: z.nullable(z.string()).optional(),
    invoiceTemplateId: z.nullable(z.string()).optional(),
    resolvedMemberClientId: z.nullable(z.string()).optional(),
  });

/** @internal */
export type C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$Outbound =
  {
    deductionId?: string | null | undefined;
    errorMessage?: string | null | undefined;
    invoiceId?: string | null | undefined;
    invoiceTemplateId?: string | null | undefined;
    resolvedMemberClientId?: string | null | undefined;
  };

/** @internal */
export const C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$outboundSchema:
  z.ZodType<
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$Outbound,
    z.ZodTypeDef,
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a
  > = z.object({
    deductionId: z.nullable(z.string()).optional(),
    errorMessage: z.nullable(z.string()).optional(),
    invoiceId: z.nullable(z.string()).optional(),
    invoiceTemplateId: z.nullable(z.string()).optional(),
    resolvedMemberClientId: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$ {
  /** @deprecated use `C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$inboundSchema` instead. */
  export const inboundSchema =
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$inboundSchema;
  /** @deprecated use `C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$outboundSchema` instead. */
  export const outboundSchema =
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$outboundSchema;
  /** @deprecated use `C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$Outbound` instead. */
  export type Outbound =
    C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a$Outbound;
}
