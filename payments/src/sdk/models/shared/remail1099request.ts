/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56,
  Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$inboundSchema,
  Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$Outbound,
  Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$outboundSchema,
} from "./sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56.js";

export type Remail1099Request = {
  address: Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56;
  documentIndex?: number | null | undefined;
  memberId: string;
  year: number;
};

/** @internal */
export const Remail1099Request$inboundSchema: z.ZodType<
  Remail1099Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  address:
    Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$inboundSchema,
  documentIndex: z.nullable(z.number()).optional(),
  memberId: z.string(),
  year: z.number(),
});

/** @internal */
export type Remail1099Request$Outbound = {
  address:
    Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$Outbound;
  documentIndex?: number | null | undefined;
  memberId: string;
  year: number;
};

/** @internal */
export const Remail1099Request$outboundSchema: z.ZodType<
  Remail1099Request$Outbound,
  z.ZodTypeDef,
  Remail1099Request
> = z.object({
  address:
    Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56$outboundSchema,
  documentIndex: z.nullable(z.number()).optional(),
  memberId: z.string(),
  year: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Remail1099Request$ {
  /** @deprecated use `Remail1099Request$inboundSchema` instead. */
  export const inboundSchema = Remail1099Request$inboundSchema;
  /** @deprecated use `Remail1099Request$outboundSchema` instead. */
  export const outboundSchema = Remail1099Request$outboundSchema;
  /** @deprecated use `Remail1099Request$Outbound` instead. */
  export type Outbound = Remail1099Request$Outbound;
}
