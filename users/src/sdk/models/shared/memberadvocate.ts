/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type MemberAdvocate = {
    description: string;
    firstName: string;
    lastName: string;
    memberAdvocateId: string;
    photoUrl?: string | null | undefined;
    schedulingUrl?: string | null | undefined;
};

/** @internal */
export namespace MemberAdvocate$ {
    export type Inbound = {
        description: string;
        firstName: string;
        lastName: string;
        memberAdvocateId: string;
        photoUrl?: string | null | undefined;
        schedulingUrl?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<MemberAdvocate, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            memberAdvocateId: z.string(),
            photoUrl: z.nullable(z.string()).optional(),
            schedulingUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                description: v.description,
                firstName: v.firstName,
                lastName: v.lastName,
                memberAdvocateId: v.memberAdvocateId,
                ...(v.photoUrl === undefined ? null : { photoUrl: v.photoUrl }),
                ...(v.schedulingUrl === undefined ? null : { schedulingUrl: v.schedulingUrl }),
            };
        });

    export type Outbound = {
        description: string;
        firstName: string;
        lastName: string;
        memberAdvocateId: string;
        photoUrl?: string | null | undefined;
        schedulingUrl?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberAdvocate> = z
        .object({
            description: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            memberAdvocateId: z.string(),
            photoUrl: z.nullable(z.string()).optional(),
            schedulingUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                description: v.description,
                firstName: v.firstName,
                lastName: v.lastName,
                memberAdvocateId: v.memberAdvocateId,
                ...(v.photoUrl === undefined ? null : { photoUrl: v.photoUrl }),
                ...(v.schedulingUrl === undefined ? null : { schedulingUrl: v.schedulingUrl }),
            };
        });
}
