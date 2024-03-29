/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a,
    B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$,
} from "./b22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a";
import { CollaboratorEvents, CollaboratorEvents$ } from "./collaboratorevents";
import {
    CollaboratorPayoutsSummary,
    CollaboratorPayoutsSummary$,
} from "./collaboratorpayoutssummary";
import { RedactedMember, RedactedMember$ } from "./redactedmember";
import {
    SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d,
    SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$,
} from "./sixtysixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d";
import { z } from "zod";

export type Labels = {};

export enum CollaboratorsPayoutsSummaryReportResponseStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export enum CollaboratorsPayoutsSummaryReportResponseTaxStatus {
    Complete = "Complete",
    Failed = "Failed",
    Pending = "Pending",
    Incomplete = "Incomplete",
}

export type CollaboratorsPayoutsSummaryReportResponse = {
    clientId: string;
    collaboratorGroups: Array<SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d>;
    createdAt: string;
    externalId?: string | null | undefined;
    inviteEmail: string;
    labels?: Labels | null | undefined;
    member: RedactedMember;
    memberClientId: string;
    memberEvents?: CollaboratorEvents | null | undefined;
    memberId: string;
    payoutsSummary: CollaboratorPayoutsSummary;
    servicesStatus: B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a;
    status: CollaboratorsPayoutsSummaryReportResponseStatus;
    taxDocumentStared?: boolean | null | undefined;
    taxStatus: CollaboratorsPayoutsSummaryReportResponseTaxStatus;
    updatedAt: string;
};

/** @internal */
export namespace Labels$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Labels, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Labels> = z.object({});
}

/** @internal */
export const CollaboratorsPayoutsSummaryReportResponseStatus$ = z.nativeEnum(
    CollaboratorsPayoutsSummaryReportResponseStatus
);

/** @internal */
export const CollaboratorsPayoutsSummaryReportResponseTaxStatus$ = z.nativeEnum(
    CollaboratorsPayoutsSummaryReportResponseTaxStatus
);

/** @internal */
export namespace CollaboratorsPayoutsSummaryReportResponse$ {
    export type Inbound = {
        clientId: string;
        collaboratorGroups: Array<SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$.Inbound>;
        createdAt: string;
        externalId?: string | null | undefined;
        inviteEmail: string;
        labels?: Labels$.Inbound | null | undefined;
        member: RedactedMember$.Inbound;
        memberClientId: string;
        memberEvents?: CollaboratorEvents$.Inbound | null | undefined;
        memberId: string;
        payoutsSummary: CollaboratorPayoutsSummary$.Inbound;
        servicesStatus: B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$.Inbound;
        status: CollaboratorsPayoutsSummaryReportResponseStatus;
        taxDocumentStared?: boolean | null | undefined;
        taxStatus: CollaboratorsPayoutsSummaryReportResponseTaxStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<
        CollaboratorsPayoutsSummaryReportResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            clientId: z.string(),
            collaboratorGroups: z.array(
                SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$.inboundSchema
            ),
            createdAt: z.string(),
            externalId: z.nullable(z.string()).optional(),
            inviteEmail: z.string(),
            labels: z.nullable(z.lazy(() => Labels$.inboundSchema)).optional(),
            member: RedactedMember$.inboundSchema,
            memberClientId: z.string(),
            memberEvents: z.nullable(CollaboratorEvents$.inboundSchema).optional(),
            memberId: z.string(),
            payoutsSummary: CollaboratorPayoutsSummary$.inboundSchema,
            servicesStatus:
                B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$.inboundSchema,
            status: CollaboratorsPayoutsSummaryReportResponseStatus$,
            taxDocumentStared: z.nullable(z.boolean()).optional(),
            taxStatus: CollaboratorsPayoutsSummaryReportResponseTaxStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                collaboratorGroups: v.collaboratorGroups,
                createdAt: v.createdAt,
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                inviteEmail: v.inviteEmail,
                ...(v.labels === undefined ? null : { labels: v.labels }),
                member: v.member,
                memberClientId: v.memberClientId,
                ...(v.memberEvents === undefined ? null : { memberEvents: v.memberEvents }),
                memberId: v.memberId,
                payoutsSummary: v.payoutsSummary,
                servicesStatus: v.servicesStatus,
                status: v.status,
                ...(v.taxDocumentStared === undefined
                    ? null
                    : { taxDocumentStared: v.taxDocumentStared }),
                taxStatus: v.taxStatus,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        clientId: string;
        collaboratorGroups: Array<SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$.Outbound>;
        createdAt: string;
        externalId?: string | null | undefined;
        inviteEmail: string;
        labels?: Labels$.Outbound | null | undefined;
        member: RedactedMember$.Outbound;
        memberClientId: string;
        memberEvents?: CollaboratorEvents$.Outbound | null | undefined;
        memberId: string;
        payoutsSummary: CollaboratorPayoutsSummary$.Outbound;
        servicesStatus: B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$.Outbound;
        status: CollaboratorsPayoutsSummaryReportResponseStatus;
        taxDocumentStared?: boolean | null | undefined;
        taxStatus: CollaboratorsPayoutsSummaryReportResponseTaxStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CollaboratorsPayoutsSummaryReportResponse
    > = z
        .object({
            clientId: z.string(),
            collaboratorGroups: z.array(
                SixtySixad6f986038e3285c36e0faa5c61b52a02882d1460acb116b601a30abfb6c1d$.outboundSchema
            ),
            createdAt: z.string(),
            externalId: z.nullable(z.string()).optional(),
            inviteEmail: z.string(),
            labels: z.nullable(z.lazy(() => Labels$.outboundSchema)).optional(),
            member: RedactedMember$.outboundSchema,
            memberClientId: z.string(),
            memberEvents: z.nullable(CollaboratorEvents$.outboundSchema).optional(),
            memberId: z.string(),
            payoutsSummary: CollaboratorPayoutsSummary$.outboundSchema,
            servicesStatus:
                B22a2532acff782df851c03041e55a58727ff8e8805b1738c7dcb4dd1dd2505a$.outboundSchema,
            status: CollaboratorsPayoutsSummaryReportResponseStatus$,
            taxDocumentStared: z.nullable(z.boolean()).optional(),
            taxStatus: CollaboratorsPayoutsSummaryReportResponseTaxStatus$,
            updatedAt: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                collaboratorGroups: v.collaboratorGroups,
                createdAt: v.createdAt,
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                inviteEmail: v.inviteEmail,
                ...(v.labels === undefined ? null : { labels: v.labels }),
                member: v.member,
                memberClientId: v.memberClientId,
                ...(v.memberEvents === undefined ? null : { memberEvents: v.memberEvents }),
                memberId: v.memberId,
                payoutsSummary: v.payoutsSummary,
                servicesStatus: v.servicesStatus,
                status: v.status,
                ...(v.taxDocumentStared === undefined
                    ? null
                    : { taxDocumentStared: v.taxDocumentStared }),
                taxStatus: v.taxStatus,
                updatedAt: v.updatedAt,
            };
        });
}
