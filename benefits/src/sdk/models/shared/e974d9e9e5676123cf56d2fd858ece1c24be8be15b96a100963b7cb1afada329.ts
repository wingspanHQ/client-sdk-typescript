/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status {
    Active = "Active",
    Paused = "Paused",
    Disabled = "Disabled",
}

export type E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329 = {
    effectiveDate: string;
    groupNumber: string;
    memberNumber: string;
    status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status;
};

/** @internal */
export const E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status$ = z.nativeEnum(
    E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status
);

/** @internal */
export namespace E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$ {
    export type Inbound = {
        effectiveDate: string;
        groupNumber: string;
        memberNumber: string;
        status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status;
    };

    export const inboundSchema: z.ZodType<
        E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            effectiveDate: z.string(),
            groupNumber: z.string(),
            memberNumber: z.string(),
            status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status$,
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                groupNumber: v.groupNumber,
                memberNumber: v.memberNumber,
                status: v.status,
            };
        });

    export type Outbound = {
        effectiveDate: string;
        groupNumber: string;
        memberNumber: string;
        status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329
    > = z
        .object({
            effectiveDate: z.string(),
            groupNumber: z.string(),
            memberNumber: z.string(),
            status: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329Status$,
        })
        .transform((v) => {
            return {
                effectiveDate: v.effectiveDate,
                groupNumber: v.groupNumber,
                memberNumber: v.memberNumber,
                status: v.status,
            };
        });
}
