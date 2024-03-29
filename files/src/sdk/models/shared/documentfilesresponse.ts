/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DocumentEvents, DocumentEvents$ } from "./documentevents";
import { DocumentFiles, DocumentFiles$ } from "./documentfiles";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum Status {
    New = "New",
    Sent = "Sent",
    Pending = "Pending",
    Complete = "Complete",
}

export type DocumentFilesResponse = {
    clientId: string;
    documentId: string;
    events?: DocumentEvents | null | undefined;
    files: DocumentFiles;
    memberId: string;
    status: Status;
    templateId: string;
    title: string;
    userRoles: UserRoles;
};

/** @internal */
export const Status$ = z.nativeEnum(Status);

/** @internal */
export namespace DocumentFilesResponse$ {
    export type Inbound = {
        clientId: string;
        documentId: string;
        events?: DocumentEvents$.Inbound | null | undefined;
        files: DocumentFiles$.Inbound;
        memberId: string;
        status: Status;
        templateId: string;
        title: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<DocumentFilesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            documentId: z.string(),
            events: z.nullable(DocumentEvents$.inboundSchema).optional(),
            files: DocumentFiles$.inboundSchema,
            memberId: z.string(),
            status: Status$,
            templateId: z.string(),
            title: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                documentId: v.documentId,
                ...(v.events === undefined ? null : { events: v.events }),
                files: v.files,
                memberId: v.memberId,
                status: v.status,
                templateId: v.templateId,
                title: v.title,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        clientId: string;
        documentId: string;
        events?: DocumentEvents$.Outbound | null | undefined;
        files: DocumentFiles$.Outbound;
        memberId: string;
        status: Status;
        templateId: string;
        title: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DocumentFilesResponse> = z
        .object({
            clientId: z.string(),
            documentId: z.string(),
            events: z.nullable(DocumentEvents$.outboundSchema).optional(),
            files: DocumentFiles$.outboundSchema,
            memberId: z.string(),
            status: Status$,
            templateId: z.string(),
            title: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                documentId: v.documentId,
                ...(v.events === undefined ? null : { events: v.events }),
                files: v.files,
                memberId: v.memberId,
                status: v.status,
                templateId: v.templateId,
                title: v.title,
                userRoles: v.userRoles,
            };
        });
}
