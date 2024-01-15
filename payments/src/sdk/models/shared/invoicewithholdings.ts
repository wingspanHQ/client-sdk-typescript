/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01,
    Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01$,
} from "./fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01";
import { z } from "zod";

export type InvoiceWithholdings = {
    tax?: Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01 | null | undefined;
};

/** @internal */
export namespace InvoiceWithholdings$ {
    export type Inbound = {
        tax?:
            | Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01$.Inbound
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceWithholdings, z.ZodTypeDef, Inbound> = z
        .object({
            tax: z
                .nullable(
                    Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01$.inboundSchema
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
            | Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceWithholdings> = z
        .object({
            tax: z
                .nullable(
                    Fourteenabbd45a54a2847207e8ddfaeb5d4bc82ffb855d63772d79e0c5fe04e9b9b01$.outboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.tax === undefined ? null : { tax: v.tax }),
            };
        });
}
