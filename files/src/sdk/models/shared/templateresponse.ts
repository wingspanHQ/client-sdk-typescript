/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum TemplateResponsePurpose {
    OnboardCollaborator = "OnboardCollaborator",
}

export enum TemplateResponseRoles {
    Member = "Member",
    Client = "Client",
    Collaborator = "Collaborator",
}

export type TemplateResponse = {
    clientId: string;
    editUrl: string;
    editUrlExpiresAt: string;
    fileId: string;
    purpose: TemplateResponsePurpose;
    roles?: Array<TemplateResponseRoles> | null | undefined;
    templateId: string;
    title: string;
    viewUrl?: string | null | undefined;
    viewUrlExpiresAt?: string | null | undefined;
};

/** @internal */
export const TemplateResponsePurpose$ = z.nativeEnum(TemplateResponsePurpose);

/** @internal */
export const TemplateResponseRoles$ = z.nativeEnum(TemplateResponseRoles);

/** @internal */
export namespace TemplateResponse$ {
    export type Inbound = {
        clientId: string;
        editUrl: string;
        editUrlExpiresAt: string;
        fileId: string;
        purpose: TemplateResponsePurpose;
        roles?: Array<TemplateResponseRoles> | null | undefined;
        templateId: string;
        title: string;
        viewUrl?: string | null | undefined;
        viewUrlExpiresAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<TemplateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            editUrl: z.string(),
            editUrlExpiresAt: z.string(),
            fileId: z.string(),
            purpose: TemplateResponsePurpose$,
            roles: z.nullable(z.array(TemplateResponseRoles$)).optional(),
            templateId: z.string(),
            title: z.string(),
            viewUrl: z.nullable(z.string()).optional(),
            viewUrlExpiresAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                editUrl: v.editUrl,
                editUrlExpiresAt: v.editUrlExpiresAt,
                fileId: v.fileId,
                purpose: v.purpose,
                ...(v.roles === undefined ? null : { roles: v.roles }),
                templateId: v.templateId,
                title: v.title,
                ...(v.viewUrl === undefined ? null : { viewUrl: v.viewUrl }),
                ...(v.viewUrlExpiresAt === undefined
                    ? null
                    : { viewUrlExpiresAt: v.viewUrlExpiresAt }),
            };
        });

    export type Outbound = {
        clientId: string;
        editUrl: string;
        editUrlExpiresAt: string;
        fileId: string;
        purpose: TemplateResponsePurpose;
        roles?: Array<TemplateResponseRoles> | null | undefined;
        templateId: string;
        title: string;
        viewUrl?: string | null | undefined;
        viewUrlExpiresAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TemplateResponse> = z
        .object({
            clientId: z.string(),
            editUrl: z.string(),
            editUrlExpiresAt: z.string(),
            fileId: z.string(),
            purpose: TemplateResponsePurpose$,
            roles: z.nullable(z.array(TemplateResponseRoles$)).optional(),
            templateId: z.string(),
            title: z.string(),
            viewUrl: z.nullable(z.string()).optional(),
            viewUrlExpiresAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                editUrl: v.editUrl,
                editUrlExpiresAt: v.editUrlExpiresAt,
                fileId: v.fileId,
                purpose: v.purpose,
                ...(v.roles === undefined ? null : { roles: v.roles }),
                templateId: v.templateId,
                title: v.title,
                ...(v.viewUrl === undefined ? null : { viewUrl: v.viewUrl }),
                ...(v.viewUrlExpiresAt === undefined
                    ? null
                    : { viewUrlExpiresAt: v.viewUrlExpiresAt }),
            };
        });
}
