/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193 = {
    payeeExternalId?: string | null | undefined;
};

/** @internal */
export namespace Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193$ {
    export type Inbound = {
        payeeExternalId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            payeeExternalId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.payeeExternalId === undefined
                    ? null
                    : { payeeExternalId: v.payeeExternalId }),
            };
        });

    export type Outbound = {
        payeeExternalId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Fourafb8b96a33dad0e93c635638ea44eb6117d8f72c867558efb847ad635a79193
    > = z
        .object({
            payeeExternalId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.payeeExternalId === undefined
                    ? null
                    : { payeeExternalId: v.payeeExternalId }),
            };
        });
}
