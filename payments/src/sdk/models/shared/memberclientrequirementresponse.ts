/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DocumentResponse, DocumentResponse$ } from "./documentresponse";
import { z } from "zod";

export enum MemberClientRequirementResponseRequirementType {
    Signature = "Signature",
}

export enum MemberClientRequirementResponseStatus {
    New = "New",
    Sent = "Sent",
    Pending = "Pending",
    Complete = "Complete",
}

export type MemberClientRequirementResponse = {
    clientId: string;
    collaboratorGroupId: string;
    document?: DocumentResponse | null | undefined;
    documentId?: string | null | undefined;
    eligibilityRequirementId: string;
    requirementType: MemberClientRequirementResponseRequirementType;
    status?: MemberClientRequirementResponseStatus | null | undefined;
    templateId?: string | null | undefined;
    validFor?: number | null | undefined;
};

/** @internal */
export const MemberClientRequirementResponseRequirementType$ = z.nativeEnum(
    MemberClientRequirementResponseRequirementType
);

/** @internal */
export const MemberClientRequirementResponseStatus$ = z.nativeEnum(
    MemberClientRequirementResponseStatus
);

/** @internal */
export namespace MemberClientRequirementResponse$ {
    export type Inbound = {
        clientId: string;
        collaboratorGroupId: string;
        document?: DocumentResponse$.Inbound | null | undefined;
        documentId?: string | null | undefined;
        eligibilityRequirementId: string;
        requirementType: MemberClientRequirementResponseRequirementType;
        status?: MemberClientRequirementResponseStatus | null | undefined;
        templateId?: string | null | undefined;
        validFor?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<MemberClientRequirementResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                clientId: z.string(),
                collaboratorGroupId: z.string(),
                document: z.nullable(DocumentResponse$.inboundSchema).optional(),
                documentId: z.nullable(z.string()).optional(),
                eligibilityRequirementId: z.string(),
                requirementType: MemberClientRequirementResponseRequirementType$,
                status: z.nullable(MemberClientRequirementResponseStatus$).optional(),
                templateId: z.nullable(z.string()).optional(),
                validFor: z.nullable(z.number()).optional(),
            })
            .transform((v) => {
                return {
                    clientId: v.clientId,
                    collaboratorGroupId: v.collaboratorGroupId,
                    ...(v.document === undefined ? null : { document: v.document }),
                    ...(v.documentId === undefined ? null : { documentId: v.documentId }),
                    eligibilityRequirementId: v.eligibilityRequirementId,
                    requirementType: v.requirementType,
                    ...(v.status === undefined ? null : { status: v.status }),
                    ...(v.templateId === undefined ? null : { templateId: v.templateId }),
                    ...(v.validFor === undefined ? null : { validFor: v.validFor }),
                };
            });

    export type Outbound = {
        clientId: string;
        collaboratorGroupId: string;
        document?: DocumentResponse$.Outbound | null | undefined;
        documentId?: string | null | undefined;
        eligibilityRequirementId: string;
        requirementType: MemberClientRequirementResponseRequirementType;
        status?: MemberClientRequirementResponseStatus | null | undefined;
        templateId?: string | null | undefined;
        validFor?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MemberClientRequirementResponse
    > = z
        .object({
            clientId: z.string(),
            collaboratorGroupId: z.string(),
            document: z.nullable(DocumentResponse$.outboundSchema).optional(),
            documentId: z.nullable(z.string()).optional(),
            eligibilityRequirementId: z.string(),
            requirementType: MemberClientRequirementResponseRequirementType$,
            status: z.nullable(MemberClientRequirementResponseStatus$).optional(),
            templateId: z.nullable(z.string()).optional(),
            validFor: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                collaboratorGroupId: v.collaboratorGroupId,
                ...(v.document === undefined ? null : { document: v.document }),
                ...(v.documentId === undefined ? null : { documentId: v.documentId }),
                eligibilityRequirementId: v.eligibilityRequirementId,
                requirementType: v.requirementType,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.templateId === undefined ? null : { templateId: v.templateId }),
                ...(v.validFor === undefined ? null : { validFor: v.validFor }),
            };
        });
}
