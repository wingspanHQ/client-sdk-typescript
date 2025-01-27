/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac =
  {
    errorMessage?: string | null | undefined;
    resolvedMemberClientId?: string | null | undefined;
  };

/** @internal */
export const FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$inboundSchema:
  z.ZodType<
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac,
    z.ZodTypeDef,
    unknown
  > = z.object({
    errorMessage: z.nullable(z.string()).optional(),
    resolvedMemberClientId: z.nullable(z.string()).optional(),
  });

/** @internal */
export type FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$Outbound =
  {
    errorMessage?: string | null | undefined;
    resolvedMemberClientId?: string | null | undefined;
  };

/** @internal */
export const FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$outboundSchema:
  z.ZodType<
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$Outbound,
    z.ZodTypeDef,
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac
  > = z.object({
    errorMessage: z.nullable(z.string()).optional(),
    resolvedMemberClientId: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$ {
  /** @deprecated use `FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$inboundSchema` instead. */
  export const inboundSchema =
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$inboundSchema;
  /** @deprecated use `FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$outboundSchema` instead. */
  export const outboundSchema =
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$outboundSchema;
  /** @deprecated use `FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$Outbound` instead. */
  export type Outbound =
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$Outbound;
}

export function fourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cacToJSON(
  fourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac:
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac,
): string {
  return JSON.stringify(
    FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$outboundSchema
      .parse(
        fourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac,
      ),
  );
}

export function fourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cacFromJSON(
  jsonString: string,
): SafeParseResult<
  FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'FourThousandAndNinetyOnec2911630f24a45153ca60a204edf3efba15902cef686d412c191e0c18cac' from JSON`,
  );
}
