/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f,
    SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f$,
} from "./sixhundredandseventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f";
import { z } from "zod";

export type MemberWithholdings = {
    tax?:
        | SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f
        | null
        | undefined;
};

/** @internal */
export namespace MemberWithholdings$ {
    export type Inbound = {
        tax?:
            | SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f$.Inbound
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<MemberWithholdings, z.ZodTypeDef, Inbound> = z
        .object({
            tax: z
                .nullable(
                    SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f$.inboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.tax === undefined ? null : { tax: v.tax }),
            };
        });

    export type Outbound = {
        tax?:
            | SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberWithholdings> = z
        .object({
            tax: z
                .nullable(
                    SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5f$.outboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.tax === undefined ? null : { tax: v.tax }),
            };
        });
}
