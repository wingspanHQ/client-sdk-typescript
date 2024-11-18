/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const InvoiceCollaboratorCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type InvoiceCollaboratorCurrency = ClosedEnum<
  typeof InvoiceCollaboratorCurrency
>;

export type InvoiceCollaborator = {
  amount: number;
  currency: InvoiceCollaboratorCurrency;
  description: string;
  invoiceId?: string | null | undefined;
  memberClientId: string;
};

/** @internal */
export const InvoiceCollaboratorCurrency$inboundSchema: z.ZodNativeEnum<
  typeof InvoiceCollaboratorCurrency
> = z.nativeEnum(InvoiceCollaboratorCurrency);

/** @internal */
export const InvoiceCollaboratorCurrency$outboundSchema: z.ZodNativeEnum<
  typeof InvoiceCollaboratorCurrency
> = InvoiceCollaboratorCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceCollaboratorCurrency$ {
  /** @deprecated use `InvoiceCollaboratorCurrency$inboundSchema` instead. */
  export const inboundSchema = InvoiceCollaboratorCurrency$inboundSchema;
  /** @deprecated use `InvoiceCollaboratorCurrency$outboundSchema` instead. */
  export const outboundSchema = InvoiceCollaboratorCurrency$outboundSchema;
}

/** @internal */
export const InvoiceCollaborator$inboundSchema: z.ZodType<
  InvoiceCollaborator,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  currency: InvoiceCollaboratorCurrency$inboundSchema,
  description: z.string(),
  invoiceId: z.nullable(z.string()).optional(),
  memberClientId: z.string(),
});

/** @internal */
export type InvoiceCollaborator$Outbound = {
  amount: number;
  currency: string;
  description: string;
  invoiceId?: string | null | undefined;
  memberClientId: string;
};

/** @internal */
export const InvoiceCollaborator$outboundSchema: z.ZodType<
  InvoiceCollaborator$Outbound,
  z.ZodTypeDef,
  InvoiceCollaborator
> = z.object({
  amount: z.number(),
  currency: InvoiceCollaboratorCurrency$outboundSchema,
  description: z.string(),
  invoiceId: z.nullable(z.string()).optional(),
  memberClientId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceCollaborator$ {
  /** @deprecated use `InvoiceCollaborator$inboundSchema` instead. */
  export const inboundSchema = InvoiceCollaborator$inboundSchema;
  /** @deprecated use `InvoiceCollaborator$outboundSchema` instead. */
  export const outboundSchema = InvoiceCollaborator$outboundSchema;
  /** @deprecated use `InvoiceCollaborator$Outbound` instead. */
  export type Outbound = InvoiceCollaborator$Outbound;
}

export function invoiceCollaboratorToJSON(
  invoiceCollaborator: InvoiceCollaborator,
): string {
  return JSON.stringify(
    InvoiceCollaborator$outboundSchema.parse(invoiceCollaborator),
  );
}

export function invoiceCollaboratorFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceCollaborator, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceCollaborator$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceCollaborator' from JSON`,
  );
}
