/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BankStatement = {
  accountId: string;
  date: string;
  id: string;
  name: string;
};

/** @internal */
export const BankStatement$inboundSchema: z.ZodType<
  BankStatement,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.string(),
  date: z.string(),
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type BankStatement$Outbound = {
  accountId: string;
  date: string;
  id: string;
  name: string;
};

/** @internal */
export const BankStatement$outboundSchema: z.ZodType<
  BankStatement$Outbound,
  z.ZodTypeDef,
  BankStatement
> = z.object({
  accountId: z.string(),
  date: z.string(),
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankStatement$ {
  /** @deprecated use `BankStatement$inboundSchema` instead. */
  export const inboundSchema = BankStatement$inboundSchema;
  /** @deprecated use `BankStatement$outboundSchema` instead. */
  export const outboundSchema = BankStatement$outboundSchema;
  /** @deprecated use `BankStatement$Outbound` instead. */
  export type Outbound = BankStatement$Outbound;
}
