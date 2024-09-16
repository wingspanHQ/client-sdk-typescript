/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  RedactedMember,
  RedactedMember$inboundSchema,
  RedactedMember$Outbound,
  RedactedMember$outboundSchema,
} from "./redactedmember.js";

export type Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c = {
  approvedBy?: RedactedMember | null | undefined;
  preApprovedBy?: RedactedMember | null | undefined;
};

/** @internal */
export const Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$inboundSchema:
  z.ZodType<
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c,
    z.ZodTypeDef,
    unknown
  > = z.object({
    approvedBy: z.nullable(RedactedMember$inboundSchema).optional(),
    preApprovedBy: z.nullable(RedactedMember$inboundSchema).optional(),
  });

/** @internal */
export type Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound =
  {
    approvedBy?: RedactedMember$Outbound | null | undefined;
    preApprovedBy?: RedactedMember$Outbound | null | undefined;
  };

/** @internal */
export const Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$outboundSchema:
  z.ZodType<
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound,
    z.ZodTypeDef,
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c
  > = z.object({
    approvedBy: z.nullable(RedactedMember$outboundSchema).optional(),
    preApprovedBy: z.nullable(RedactedMember$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$ {
  /** @deprecated use `Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$inboundSchema` instead. */
  export const inboundSchema =
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$inboundSchema;
  /** @deprecated use `Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$outboundSchema` instead. */
  export const outboundSchema =
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$outboundSchema;
  /** @deprecated use `Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound` instead. */
  export type Outbound =
    Fcbf27c731b13d8b05460d28c0f87d3355c006cefcc1528c739ebdcf7cb45c8c$Outbound;
}
