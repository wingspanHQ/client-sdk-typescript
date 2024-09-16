/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d =
  {
    expenseAccountId?: string | null | undefined;
    itemId?: string | null | undefined;
  };

/** @internal */
export const Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$inboundSchema:
  z.ZodType<
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
    z.ZodTypeDef,
    unknown
  > = z.object({
    expenseAccountId: z.nullable(z.string()).optional(),
    itemId: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$Outbound =
  {
    expenseAccountId?: string | null | undefined;
    itemId?: string | null | undefined;
  };

/** @internal */
export const Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$outboundSchema:
  z.ZodType<
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$Outbound,
    z.ZodTypeDef,
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d
  > = z.object({
    expenseAccountId: z.nullable(z.string()).optional(),
    itemId: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$ {
  /** @deprecated use `Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$inboundSchema` instead. */
  export const inboundSchema =
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$inboundSchema;
  /** @deprecated use `Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$outboundSchema` instead. */
  export const outboundSchema =
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$outboundSchema;
  /** @deprecated use `Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$Outbound` instead. */
  export type Outbound =
    Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d$Outbound;
}
