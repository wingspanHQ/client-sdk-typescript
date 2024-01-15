/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$,
} from "./d750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0";
import { MemberData, MemberData$ } from "./memberdata";
import { z } from "zod";

export enum BulkClientItemUpdateClientStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
    LessThanNilGreaterThan = "<nil>",
}

export type BulkClientItemUpdate = {
    clientStatus?: BulkClientItemUpdateClientStatus | null | undefined;
    company?: string | null | undefined;
    email?: string | null | undefined;
    externalId?: string | null | undefined;
    firstLastName?: string | null | undefined;
    integration?:
        | D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0
        | null
        | undefined;
    labels?: Record<string, string> | null | undefined;
    memberData?: MemberData | null | undefined;
};

/** @internal */
export const BulkClientItemUpdateClientStatus$ = z.nativeEnum(BulkClientItemUpdateClientStatus);

/** @internal */
export namespace BulkClientItemUpdate$ {
    export type Inbound = {
        clientStatus?: BulkClientItemUpdateClientStatus | null | undefined;
        company?: string | null | undefined;
        email?: string | null | undefined;
        externalId?: string | null | undefined;
        firstLastName?: string | null | undefined;
        integration?:
            | D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$.Inbound
            | null
            | undefined;
        labels?: Record<string, string> | null | undefined;
        memberData?: MemberData$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<BulkClientItemUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            clientStatus: z.nullable(BulkClientItemUpdateClientStatus$).optional(),
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            externalId: z.nullable(z.string()).optional(),
            firstLastName: z.nullable(z.string()).optional(),
            integration: z
                .nullable(
                    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$.inboundSchema
                )
                .optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            memberData: z.nullable(MemberData$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientStatus === undefined ? null : { clientStatus: v.clientStatus }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.firstLastName === undefined ? null : { firstLastName: v.firstLastName }),
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.memberData === undefined ? null : { memberData: v.memberData }),
            };
        });

    export type Outbound = {
        clientStatus?: BulkClientItemUpdateClientStatus | null | undefined;
        company?: string | null | undefined;
        email?: string | null | undefined;
        externalId?: string | null | undefined;
        firstLastName?: string | null | undefined;
        integration?:
            | D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$.Outbound
            | null
            | undefined;
        labels?: Record<string, string> | null | undefined;
        memberData?: MemberData$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkClientItemUpdate> = z
        .object({
            clientStatus: z.nullable(BulkClientItemUpdateClientStatus$).optional(),
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            externalId: z.nullable(z.string()).optional(),
            firstLastName: z.nullable(z.string()).optional(),
            integration: z
                .nullable(
                    D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0$.outboundSchema
                )
                .optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            memberData: z.nullable(MemberData$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientStatus === undefined ? null : { clientStatus: v.clientStatus }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.firstLastName === undefined ? null : { firstLastName: v.firstLastName }),
                ...(v.integration === undefined ? null : { integration: v.integration }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.memberData === undefined ? null : { memberData: v.memberData }),
            };
        });
}
