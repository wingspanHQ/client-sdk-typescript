/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address";
import { Company, Company$ } from "./company";
import { z } from "zod";

export type TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb = {
    address?: Address | null | undefined;
    company?: Company | null | undefined;
    logoUrl?: string | null | undefined;
    ssnLastFour?: string | null | undefined;
};

/** @internal */
export namespace TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb$ {
    export type Inbound = {
        address?: Address$.Inbound | null | undefined;
        company?: Company$.Inbound | null | undefined;
        logoUrl?: string | null | undefined;
        ssnLastFour?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            address: z.nullable(Address$.inboundSchema).optional(),
            company: z.nullable(Company$.inboundSchema).optional(),
            logoUrl: z.nullable(z.string()).optional(),
            ssnLastFour: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.logoUrl === undefined ? null : { logoUrl: v.logoUrl }),
                ...(v.ssnLastFour === undefined ? null : { ssnLastFour: v.ssnLastFour }),
            };
        });

    export type Outbound = {
        address?: Address$.Outbound | null | undefined;
        company?: Company$.Outbound | null | undefined;
        logoUrl?: string | null | undefined;
        ssnLastFour?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TwentyThreed776fc12e56286a20f36065e4f942c43a28218a62eb2f211116c130deb74eb
    > = z
        .object({
            address: z.nullable(Address$.outboundSchema).optional(),
            company: z.nullable(Company$.outboundSchema).optional(),
            logoUrl: z.nullable(z.string()).optional(),
            ssnLastFour: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.logoUrl === undefined ? null : { logoUrl: v.logoUrl }),
                ...(v.ssnLastFour === undefined ? null : { ssnLastFour: v.ssnLastFour }),
            };
        });
}
