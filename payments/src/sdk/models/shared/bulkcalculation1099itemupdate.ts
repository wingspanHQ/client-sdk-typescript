/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BulkCalculation1099ItemUpdateCalculationType = {
  Balances: "Balances",
  Submissions: "Submissions",
} as const;
export type BulkCalculation1099ItemUpdateCalculationType = ClosedEnum<
  typeof BulkCalculation1099ItemUpdateCalculationType
>;

export type BulkCalculation1099ItemUpdate = {
  calculationType?:
    | BulkCalculation1099ItemUpdateCalculationType
    | null
    | undefined;
  clientId?: string | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  year?: number | null | undefined;
};

/** @internal */
export const BulkCalculation1099ItemUpdateCalculationType$inboundSchema:
  z.ZodNativeEnum<typeof BulkCalculation1099ItemUpdateCalculationType> = z
    .nativeEnum(BulkCalculation1099ItemUpdateCalculationType);

/** @internal */
export const BulkCalculation1099ItemUpdateCalculationType$outboundSchema:
  z.ZodNativeEnum<typeof BulkCalculation1099ItemUpdateCalculationType> =
    BulkCalculation1099ItemUpdateCalculationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCalculation1099ItemUpdateCalculationType$ {
  /** @deprecated use `BulkCalculation1099ItemUpdateCalculationType$inboundSchema` instead. */
  export const inboundSchema =
    BulkCalculation1099ItemUpdateCalculationType$inboundSchema;
  /** @deprecated use `BulkCalculation1099ItemUpdateCalculationType$outboundSchema` instead. */
  export const outboundSchema =
    BulkCalculation1099ItemUpdateCalculationType$outboundSchema;
}

/** @internal */
export const BulkCalculation1099ItemUpdate$inboundSchema: z.ZodType<
  BulkCalculation1099ItemUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  calculationType: z.nullable(
    BulkCalculation1099ItemUpdateCalculationType$inboundSchema,
  ).optional(),
  clientId: z.nullable(z.string()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  year: z.nullable(z.number()).optional(),
});

/** @internal */
export type BulkCalculation1099ItemUpdate$Outbound = {
  calculationType?: string | null | undefined;
  clientId?: string | null | undefined;
  labels?: { [k: string]: string } | null | undefined;
  year?: number | null | undefined;
};

/** @internal */
export const BulkCalculation1099ItemUpdate$outboundSchema: z.ZodType<
  BulkCalculation1099ItemUpdate$Outbound,
  z.ZodTypeDef,
  BulkCalculation1099ItemUpdate
> = z.object({
  calculationType: z.nullable(
    BulkCalculation1099ItemUpdateCalculationType$outboundSchema,
  ).optional(),
  clientId: z.nullable(z.string()).optional(),
  labels: z.nullable(z.record(z.string())).optional(),
  year: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCalculation1099ItemUpdate$ {
  /** @deprecated use `BulkCalculation1099ItemUpdate$inboundSchema` instead. */
  export const inboundSchema = BulkCalculation1099ItemUpdate$inboundSchema;
  /** @deprecated use `BulkCalculation1099ItemUpdate$outboundSchema` instead. */
  export const outboundSchema = BulkCalculation1099ItemUpdate$outboundSchema;
  /** @deprecated use `BulkCalculation1099ItemUpdate$Outbound` instead. */
  export type Outbound = BulkCalculation1099ItemUpdate$Outbound;
}
