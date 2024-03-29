/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Address = {
    addressLine1?: string | null | undefined;
    addressLine2?: string | null | undefined;
    city?: string | null | undefined;
    country: string;
    postalCode?: string | null | undefined;
    state?: string | null | undefined;
};

/** @internal */
export namespace Address$ {
    export type Inbound = {
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        country: string;
        postalCode?: string | null | undefined;
        state?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Address, z.ZodTypeDef, Inbound> = z
        .object({
            addressLine1: z.nullable(z.string()).optional(),
            addressLine2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            country: z.string(),
            postalCode: z.nullable(z.string()).optional(),
            state: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressLine1 === undefined ? null : { addressLine1: v.addressLine1 }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                country: v.country,
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });

    export type Outbound = {
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        country: string;
        postalCode?: string | null | undefined;
        state?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Address> = z
        .object({
            addressLine1: z.nullable(z.string()).optional(),
            addressLine2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            country: z.string(),
            postalCode: z.nullable(z.string()).optional(),
            state: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressLine1 === undefined ? null : { addressLine1: v.addressLine1 }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                country: v.country,
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });
}
