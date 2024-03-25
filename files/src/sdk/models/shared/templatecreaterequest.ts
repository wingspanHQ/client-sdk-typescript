/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Purpose {
    OnboardCollaborator = "OnboardCollaborator",
}

export enum Roles {
    Member = "Member",
    Client = "Client",
    Collaborator = "Collaborator",
}

export type TemplateCreateRequest = {
    fileId: string;
    purpose: Purpose;
    roles?: Array<Roles> | null | undefined;
    title: string;
};

/** @internal */
export const Purpose$ = z.nativeEnum(Purpose);

/** @internal */
export const Roles$ = z.nativeEnum(Roles);

/** @internal */
export namespace TemplateCreateRequest$ {
    export type Inbound = {
        fileId: string;
        purpose: Purpose;
        roles?: Array<Roles> | null | undefined;
        title: string;
    };

    export const inboundSchema: z.ZodType<TemplateCreateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fileId: z.string(),
            purpose: Purpose$,
            roles: z.nullable(z.array(Roles$)).optional(),
            title: z.string(),
        })
        .transform((v) => {
            return {
                fileId: v.fileId,
                purpose: v.purpose,
                ...(v.roles === undefined ? null : { roles: v.roles }),
                title: v.title,
            };
        });

    export type Outbound = {
        fileId: string;
        purpose: Purpose;
        roles?: Array<Roles> | null | undefined;
        title: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TemplateCreateRequest> = z
        .object({
            fileId: z.string(),
            purpose: Purpose$,
            roles: z.nullable(z.array(Roles$)).optional(),
            title: z.string(),
        })
        .transform((v) => {
            return {
                fileId: v.fileId,
                purpose: v.purpose,
                ...(v.roles === undefined ? null : { roles: v.roles }),
                title: v.title,
            };
        });
}
