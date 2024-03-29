/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ScopeModification, ScopeModification$ } from "./scopemodification";
import { z } from "zod";

export type Bf168ad7d016496dfd65f4d4bc3208501a96ad4f4048d001e6ebdb3a4b8311b1 = {
    memberClient?: Array<ScopeModification> | null | undefined;
    payable?: Array<ScopeModification> | null | undefined;
};

/** @internal */
export namespace Bf168ad7d016496dfd65f4d4bc3208501a96ad4f4048d001e6ebdb3a4b8311b1$ {
    export type Inbound = {
        memberClient?: Array<ScopeModification$.Inbound> | null | undefined;
        payable?: Array<ScopeModification$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Bf168ad7d016496dfd65f4d4bc3208501a96ad4f4048d001e6ebdb3a4b8311b1,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            memberClient: z.nullable(z.array(ScopeModification$.inboundSchema)).optional(),
            payable: z.nullable(z.array(ScopeModification$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.memberClient === undefined ? null : { memberClient: v.memberClient }),
                ...(v.payable === undefined ? null : { payable: v.payable }),
            };
        });

    export type Outbound = {
        memberClient?: Array<ScopeModification$.Outbound> | null | undefined;
        payable?: Array<ScopeModification$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Bf168ad7d016496dfd65f4d4bc3208501a96ad4f4048d001e6ebdb3a4b8311b1
    > = z
        .object({
            memberClient: z.nullable(z.array(ScopeModification$.outboundSchema)).optional(),
            payable: z.nullable(z.array(ScopeModification$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.memberClient === undefined ? null : { memberClient: v.memberClient }),
                ...(v.payable === undefined ? null : { payable: v.payable }),
            };
        });
}
