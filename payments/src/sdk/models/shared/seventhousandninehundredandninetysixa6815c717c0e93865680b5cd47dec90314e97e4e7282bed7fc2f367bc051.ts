/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051 =
  {
    number?: string | null | undefined;
  };

/** @internal */
export const SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema:
  z.ZodType<
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
    z.ZodTypeDef,
    unknown
  > = z.object({
    number: z.nullable(z.string()).optional(),
  });

/** @internal */
export type SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound =
  {
    number?: string | null | undefined;
  };

/** @internal */
export const SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema:
  z.ZodType<
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound,
    z.ZodTypeDef,
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051
  > = z.object({
    number: z.nullable(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$ {
  /** @deprecated use `SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema` instead. */
  export const inboundSchema =
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema;
  /** @deprecated use `SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema` instead. */
  export const outboundSchema =
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema;
  /** @deprecated use `SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound` instead. */
  export type Outbound =
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$Outbound;
}

export function sevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051ToJSON(
  sevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051:
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
): string {
  return JSON.stringify(
    SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$outboundSchema
      .parse(
        sevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
      ),
  );
}

export function sevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051FromJSON(
  jsonString: string,
): SafeParseResult<
  SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'SevenThousandNineHundredAndNinetySixa6815c717c0e93865680b5cd47dec90314e97e4e7282bed7fc2f367bc051' from JSON`,
  );
}
