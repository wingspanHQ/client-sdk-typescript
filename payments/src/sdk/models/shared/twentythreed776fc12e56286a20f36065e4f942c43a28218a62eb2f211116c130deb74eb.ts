/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  Company,
  Company$inboundSchema,
  Company$Outbound,
  Company$outboundSchema,
} from "./company.js";

export type TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb =
  {
    address?: Address | null | undefined;
    company?: Company | null | undefined;
    logoUrl?: string | null | undefined;
    ssnLastFour?: string | null | undefined;
  };

/** @internal */
export const TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$inboundSchema:
  z.ZodType<
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
    z.ZodTypeDef,
    unknown
  > = z.object({
    address: z.nullable(Address$inboundSchema).optional(),
    company: z.nullable(Company$inboundSchema).optional(),
    logoUrl: z.nullable(z.string()).optional(),
    ssnLastFour: z.nullable(z.string()).optional(),
  });

/** @internal */
export type TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$Outbound =
  {
    address?: Address$Outbound | null | undefined;
    company?: Company$Outbound | null | undefined;
    logoUrl?: string | null | undefined;
    ssnLastFour?: string | null | undefined;
  };

/** @internal */
export const TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$outboundSchema:
  z.ZodType<
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$Outbound,
    z.ZodTypeDef,
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb
  > = z.object({
    address: z.nullable(Address$outboundSchema).optional(),
    company: z.nullable(Company$outboundSchema).optional(),
    logoUrl: z.nullable(z.string()).optional(),
    ssnLastFour: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$ {
  /** @deprecated use `TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$inboundSchema` instead. */
  export const inboundSchema =
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$inboundSchema;
  /** @deprecated use `TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$outboundSchema` instead. */
  export const outboundSchema =
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$outboundSchema;
  /** @deprecated use `TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$Outbound` instead. */
  export type Outbound =
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$Outbound;
}

export function twentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74ebToJSON(
  twentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb:
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
): string {
  return JSON.stringify(
    TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$outboundSchema
      .parse(
        twentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
      ),
  );
}

export function twentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74ebFromJSON(
  jsonString: string,
): SafeParseResult<
  TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb' from JSON`,
  );
}
