/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DeductionCreateRequestCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type DeductionCreateRequestCurrency = ClosedEnum<
  typeof DeductionCreateRequestCurrency
>;

export const DeductionCreateRequestType = {
  PrePayment: "PrePayment",
  PostPayment: "PostPayment",
} as const;
export type DeductionCreateRequestType = ClosedEnum<
  typeof DeductionCreateRequestType
>;

export type DeductionCreateRequest = {
  amount: number;
  clientId: string;
  currency: DeductionCreateRequestCurrency;
  memberId: string;
  name: string;
  priority?: number | null | undefined;
  sourceInvoiceId?: string | null | undefined;
  startDate?: string | null | undefined;
  type: DeductionCreateRequestType;
};

/** @internal */
export const DeductionCreateRequestCurrency$inboundSchema: z.ZodNativeEnum<
  typeof DeductionCreateRequestCurrency
> = z.nativeEnum(DeductionCreateRequestCurrency);

/** @internal */
export const DeductionCreateRequestCurrency$outboundSchema: z.ZodNativeEnum<
  typeof DeductionCreateRequestCurrency
> = DeductionCreateRequestCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeductionCreateRequestCurrency$ {
  /** @deprecated use `DeductionCreateRequestCurrency$inboundSchema` instead. */
  export const inboundSchema = DeductionCreateRequestCurrency$inboundSchema;
  /** @deprecated use `DeductionCreateRequestCurrency$outboundSchema` instead. */
  export const outboundSchema = DeductionCreateRequestCurrency$outboundSchema;
}

/** @internal */
export const DeductionCreateRequestType$inboundSchema: z.ZodNativeEnum<
  typeof DeductionCreateRequestType
> = z.nativeEnum(DeductionCreateRequestType);

/** @internal */
export const DeductionCreateRequestType$outboundSchema: z.ZodNativeEnum<
  typeof DeductionCreateRequestType
> = DeductionCreateRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeductionCreateRequestType$ {
  /** @deprecated use `DeductionCreateRequestType$inboundSchema` instead. */
  export const inboundSchema = DeductionCreateRequestType$inboundSchema;
  /** @deprecated use `DeductionCreateRequestType$outboundSchema` instead. */
  export const outboundSchema = DeductionCreateRequestType$outboundSchema;
}

/** @internal */
export const DeductionCreateRequest$inboundSchema: z.ZodType<
  DeductionCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  clientId: z.string(),
  currency: DeductionCreateRequestCurrency$inboundSchema,
  memberId: z.string(),
  name: z.string(),
  priority: z.nullable(z.number()).optional(),
  sourceInvoiceId: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.string()).optional(),
  type: DeductionCreateRequestType$inboundSchema,
});

/** @internal */
export type DeductionCreateRequest$Outbound = {
  amount: number;
  clientId: string;
  currency: string;
  memberId: string;
  name: string;
  priority?: number | null | undefined;
  sourceInvoiceId?: string | null | undefined;
  startDate?: string | null | undefined;
  type: string;
};

/** @internal */
export const DeductionCreateRequest$outboundSchema: z.ZodType<
  DeductionCreateRequest$Outbound,
  z.ZodTypeDef,
  DeductionCreateRequest
> = z.object({
  amount: z.number(),
  clientId: z.string(),
  currency: DeductionCreateRequestCurrency$outboundSchema,
  memberId: z.string(),
  name: z.string(),
  priority: z.nullable(z.number()).optional(),
  sourceInvoiceId: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.string()).optional(),
  type: DeductionCreateRequestType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeductionCreateRequest$ {
  /** @deprecated use `DeductionCreateRequest$inboundSchema` instead. */
  export const inboundSchema = DeductionCreateRequest$inboundSchema;
  /** @deprecated use `DeductionCreateRequest$outboundSchema` instead. */
  export const outboundSchema = DeductionCreateRequest$outboundSchema;
  /** @deprecated use `DeductionCreateRequest$Outbound` instead. */
  export type Outbound = DeductionCreateRequest$Outbound;
}
