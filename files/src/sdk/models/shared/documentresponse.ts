/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DocumentEvents, DocumentEvents$ } from "./documentevents";
import { DocumentFiles, DocumentFiles$ } from "./documentfiles";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum DocumentResponseStatus {
    New = "New",
    Sent = "Sent",
    Pending = "Pending",
    Complete = "Complete",
}

export type DocumentResponse = {
    clientId: string;
    documentId: string;
    events?: DocumentEvents | null | undefined;
    files?: DocumentFiles | null | undefined;
    memberId: string;
    status: DocumentResponseStatus;
    templateId: string;
    title: string;
    userRoles: UserRoles;
};

/** @internal */
export const DocumentResponseStatus$ = z.nativeEnum(DocumentResponseStatus);

/** @internal */
export namespace DocumentResponse$ {
    export type Inbound = {
        clientId: string;
        documentId: string;
        events?: DocumentEvents$.Inbound | null | undefined;
        files?: DocumentFiles$.Inbound | null | undefined;
        memberId: string;
        status: DocumentResponseStatus;
        templateId: string;
        title: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<DocumentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            documentId: z.string(),
            events: z.nullable(DocumentEvents$.inboundSchema).optional(),
            files: z.nullable(DocumentFiles$.inboundSchema).optional(),
            memberId: z.string(),
            status: DocumentResponseStatus$,
            templateId: z.string(),
            title: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                documentId: v.documentId,
                ...(v.events === undefined ? null : { events: v.events }),
                ...(v.files === undefined ? null : { files: v.files }),
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
        files?: DocumentFiles$.Outbound | null | undefined;
        memberId: string;
        status: DocumentResponseStatus;
        templateId: string;
        title: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DocumentResponse> = z
        .object({
            clientId: z.string(),
            documentId: z.string(),
            events: z.nullable(DocumentEvents$.outboundSchema).optional(),
            files: z.nullable(DocumentFiles$.outboundSchema).optional(),
            memberId: z.string(),
            status: DocumentResponseStatus$,
            templateId: z.string(),
            title: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                documentId: v.documentId,
                ...(v.events === undefined ? null : { events: v.events }),
                ...(v.files === undefined ? null : { files: v.files }),
                memberId: v.memberId,
                status: v.status,
                templateId: v.templateId,
                title: v.title,
                userRoles: v.userRoles,
            };
        });
}
