/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2 = {
    customAttachmentIds?: Array<string> | null | undefined;
};

/** @internal */
export namespace ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2$ {
    export type Inbound = {
        customAttachmentIds?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            customAttachmentIds: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customAttachmentIds === undefined
                    ? null
                    : { customAttachmentIds: v.customAttachmentIds }),
            };
        });

    export type Outbound = {
        customAttachmentIds?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2
    > = z
        .object({
            customAttachmentIds: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customAttachmentIds === undefined
                    ? null
                    : { customAttachmentIds: v.customAttachmentIds }),
            };
        });
}
