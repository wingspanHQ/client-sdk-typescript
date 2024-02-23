/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ScopeModification, ScopeModification$ } from "./scopemodification";
import { z } from "zod";

export type A24fdd81435ed05a57123a87880fde150a3466e9cd38875e4ecd540139f5e47d = {
    organizationAccount?: Array<ScopeModification> | null | undefined;
};

/** @internal */
export namespace A24fdd81435ed05a57123a87880fde150a3466e9cd38875e4ecd540139f5e47d$ {
    export type Inbound = {
        organizationAccount?: Array<ScopeModification$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        A24fdd81435ed05a57123a87880fde150a3466e9cd38875e4ecd540139f5e47d,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            organizationAccount: z.nullable(z.array(ScopeModification$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.organizationAccount === undefined
                    ? null
                    : { organizationAccount: v.organizationAccount }),
            };
        });

    export type Outbound = {
        organizationAccount?: Array<ScopeModification$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        A24fdd81435ed05a57123a87880fde150a3466e9cd38875e4ecd540139f5e47d
    > = z
        .object({
            organizationAccount: z.nullable(z.array(ScopeModification$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.organizationAccount === undefined
                    ? null
                    : { organizationAccount: v.organizationAccount }),
            };
        });
}
