/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$inboundSchema,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$Outbound,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$outboundSchema,
} from "./sixtyfourmillioneighthundredandfortysixthousandonehundredandthirtysixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc.js";

export type D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0 = {
  quickbooks?:
    | SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc
    | null
    | undefined;
};

/** @internal */
export const D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$inboundSchema:
  z.ZodType<
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
    z.ZodTypeDef,
    unknown
  > = z.object({
    quickbooks: z.nullable(
      SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$inboundSchema,
    ).optional(),
  });

/** @internal */
export type D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$Outbound =
  {
    quickbooks?:
      | SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$Outbound
      | null
      | undefined;
  };

/** @internal */
export const D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$outboundSchema:
  z.ZodType<
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$Outbound,
    z.ZodTypeDef,
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0
  > = z.object({
    quickbooks: z.nullable(
      SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc$outboundSchema,
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$ {
  /** @deprecated use `D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$inboundSchema` instead. */
  export const inboundSchema =
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$inboundSchema;
  /** @deprecated use `D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$outboundSchema` instead. */
  export const outboundSchema =
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$outboundSchema;
  /** @deprecated use `D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$Outbound` instead. */
  export type Outbound =
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$Outbound;
}
