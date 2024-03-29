/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d = {
    collaboratorGroupId: string;
    description: string;
    name: string;
};

/** @internal */
export namespace SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$ {
    export type Inbound = {
        collaboratorGroupId: string;
        description: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<
        SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            collaboratorGroupId: z.string(),
            description: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                collaboratorGroupId: v.collaboratorGroupId,
                description: v.description,
                name: v.name,
            };
        });

    export type Outbound = {
        collaboratorGroupId: string;
        description: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d
    > = z
        .object({
            collaboratorGroupId: z.string(),
            description: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                collaboratorGroupId: v.collaboratorGroupId,
                description: v.description,
                name: v.name,
            };
        });
}
