/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CompanyLinks = {
    instagramUrl?: string | null | undefined;
    linkedInUrl?: string | null | undefined;
    otherUrl?: string | null | undefined;
    twitterUrl?: string | null | undefined;
    websiteUrl?: string | null | undefined;
};

/** @internal */
export namespace CompanyLinks$ {
    export type Inbound = {
        instagramUrl?: string | null | undefined;
        linkedInUrl?: string | null | undefined;
        otherUrl?: string | null | undefined;
        twitterUrl?: string | null | undefined;
        websiteUrl?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<CompanyLinks, z.ZodTypeDef, Inbound> = z
        .object({
            instagramUrl: z.nullable(z.string()).optional(),
            linkedInUrl: z.nullable(z.string()).optional(),
            otherUrl: z.nullable(z.string()).optional(),
            twitterUrl: z.nullable(z.string()).optional(),
            websiteUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.instagramUrl === undefined ? null : { instagramUrl: v.instagramUrl }),
                ...(v.linkedInUrl === undefined ? null : { linkedInUrl: v.linkedInUrl }),
                ...(v.otherUrl === undefined ? null : { otherUrl: v.otherUrl }),
                ...(v.twitterUrl === undefined ? null : { twitterUrl: v.twitterUrl }),
                ...(v.websiteUrl === undefined ? null : { websiteUrl: v.websiteUrl }),
            };
        });

    export type Outbound = {
        instagramUrl?: string | null | undefined;
        linkedInUrl?: string | null | undefined;
        otherUrl?: string | null | undefined;
        twitterUrl?: string | null | undefined;
        websiteUrl?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompanyLinks> = z
        .object({
            instagramUrl: z.nullable(z.string()).optional(),
            linkedInUrl: z.nullable(z.string()).optional(),
            otherUrl: z.nullable(z.string()).optional(),
            twitterUrl: z.nullable(z.string()).optional(),
            websiteUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.instagramUrl === undefined ? null : { instagramUrl: v.instagramUrl }),
                ...(v.linkedInUrl === undefined ? null : { linkedInUrl: v.linkedInUrl }),
                ...(v.otherUrl === undefined ? null : { otherUrl: v.otherUrl }),
                ...(v.twitterUrl === undefined ? null : { twitterUrl: v.twitterUrl }),
                ...(v.websiteUrl === undefined ? null : { websiteUrl: v.websiteUrl }),
            };
        });
}
