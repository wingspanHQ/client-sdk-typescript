/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MemberClientFormW9Info, MemberClientFormW9Info$ } from "./memberclientformw9info";
import { z } from "zod";

export enum BulkCollaboratorItemUpdateCollaboratorStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export type BulkCollaboratorItemUpdate = {
    collaboratorGroupId?: string | null | undefined;
    collaboratorId?: string | null | undefined;
    collaboratorStatus?: BulkCollaboratorItemUpdateCollaboratorStatus | null | undefined;
    company?: string | null | undefined;
    email?: string | null | undefined;
    externalId?: string | null | undefined;
    firstLastName?: string | null | undefined;
    formW9Data?: MemberClientFormW9Info | null | undefined;
    labels?: Record<string, string> | null | undefined;
    orgSubAccountId?: string | null | undefined;
};

/** @internal */
export const BulkCollaboratorItemUpdateCollaboratorStatus$ = z.nativeEnum(
    BulkCollaboratorItemUpdateCollaboratorStatus
);

/** @internal */
export namespace BulkCollaboratorItemUpdate$ {
    export type Inbound = {
        collaboratorGroupId?: string | null | undefined;
        collaboratorId?: string | null | undefined;
        collaboratorStatus?: BulkCollaboratorItemUpdateCollaboratorStatus | null | undefined;
        company?: string | null | undefined;
        email?: string | null | undefined;
        externalId?: string | null | undefined;
        firstLastName?: string | null | undefined;
        formW9Data?: MemberClientFormW9Info$.Inbound | null | undefined;
        labels?: Record<string, string> | null | undefined;
        orgSubAccountId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<BulkCollaboratorItemUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            collaboratorGroupId: z.nullable(z.string()).optional(),
            collaboratorId: z.nullable(z.string()).optional(),
            collaboratorStatus: z
                .nullable(BulkCollaboratorItemUpdateCollaboratorStatus$)
                .optional(),
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            externalId: z.nullable(z.string()).optional(),
            firstLastName: z.nullable(z.string()).optional(),
            formW9Data: z.nullable(MemberClientFormW9Info$.inboundSchema).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            orgSubAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorGroupId === undefined
                    ? null
                    : { collaboratorGroupId: v.collaboratorGroupId }),
                ...(v.collaboratorId === undefined ? null : { collaboratorId: v.collaboratorId }),
                ...(v.collaboratorStatus === undefined
                    ? null
                    : { collaboratorStatus: v.collaboratorStatus }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.firstLastName === undefined ? null : { firstLastName: v.firstLastName }),
                ...(v.formW9Data === undefined ? null : { formW9Data: v.formW9Data }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.orgSubAccountId === undefined
                    ? null
                    : { orgSubAccountId: v.orgSubAccountId }),
            };
        });

    export type Outbound = {
        collaboratorGroupId?: string | null | undefined;
        collaboratorId?: string | null | undefined;
        collaboratorStatus?: BulkCollaboratorItemUpdateCollaboratorStatus | null | undefined;
        company?: string | null | undefined;
        email?: string | null | undefined;
        externalId?: string | null | undefined;
        firstLastName?: string | null | undefined;
        formW9Data?: MemberClientFormW9Info$.Outbound | null | undefined;
        labels?: Record<string, string> | null | undefined;
        orgSubAccountId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkCollaboratorItemUpdate> = z
        .object({
            collaboratorGroupId: z.nullable(z.string()).optional(),
            collaboratorId: z.nullable(z.string()).optional(),
            collaboratorStatus: z
                .nullable(BulkCollaboratorItemUpdateCollaboratorStatus$)
                .optional(),
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            externalId: z.nullable(z.string()).optional(),
            firstLastName: z.nullable(z.string()).optional(),
            formW9Data: z.nullable(MemberClientFormW9Info$.outboundSchema).optional(),
            labels: z.nullable(z.record(z.string())).optional(),
            orgSubAccountId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorGroupId === undefined
                    ? null
                    : { collaboratorGroupId: v.collaboratorGroupId }),
                ...(v.collaboratorId === undefined ? null : { collaboratorId: v.collaboratorId }),
                ...(v.collaboratorStatus === undefined
                    ? null
                    : { collaboratorStatus: v.collaboratorStatus }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.firstLastName === undefined ? null : { firstLastName: v.firstLastName }),
                ...(v.formW9Data === undefined ? null : { formW9Data: v.formW9Data }),
                ...(v.labels === undefined ? null : { labels: v.labels }),
                ...(v.orgSubAccountId === undefined
                    ? null
                    : { orgSubAccountId: v.orgSubAccountId }),
            };
        });
}
