/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UserRoles, UserRoles$ } from "./userroles";
import * as z from "zod";

export enum FileAccessScope {
    Private = "Private",
    Public = "Public",
    Internal = "Internal",
}

export type FileResponse = {
    createdAt: string;
    encoding?: string | null | undefined;
    eventActors: Record<string, string>;
    fileAccessScope: FileAccessScope;
    fileId: string;
    filename: string;
    gcsBucketName: string;
    hidden: boolean;
    labels: Record<string, string>;
    mimetype?: string | null | undefined;
    tags?: any | null | undefined;
    updatedAt: string;
    userRoles: UserRoles;
};

/** @internal */
export const FileAccessScope$ = z.nativeEnum(FileAccessScope);

/** @internal */
export namespace FileResponse$ {
    export type Inbound = {
        createdAt: string;
        encoding?: string | null | undefined;
        eventActors: Record<string, string>;
        fileAccessScope: FileAccessScope;
        fileId: string;
        filename: string;
        gcsBucketName: string;
        hidden: boolean;
        labels: Record<string, string>;
        mimetype?: string | null | undefined;
        tags?: any | null | undefined;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<FileResponse, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z.string(),
            encoding: z.nullable(z.string()).optional(),
            eventActors: z.record(z.string()),
            fileAccessScope: FileAccessScope$,
            fileId: z.string(),
            filename: z.string(),
            gcsBucketName: z.string(),
            hidden: z.boolean(),
            labels: z.record(z.string()),
            mimetype: z.nullable(z.string()).optional(),
            tags: z.nullable(z.any()).optional(),
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                ...(v.encoding === undefined ? null : { encoding: v.encoding }),
                eventActors: v.eventActors,
                fileAccessScope: v.fileAccessScope,
                fileId: v.fileId,
                filename: v.filename,
                gcsBucketName: v.gcsBucketName,
                hidden: v.hidden,
                labels: v.labels,
                ...(v.mimetype === undefined ? null : { mimetype: v.mimetype }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        createdAt: string;
        encoding?: string | null | undefined;
        eventActors: Record<string, string>;
        fileAccessScope: FileAccessScope;
        fileId: string;
        filename: string;
        gcsBucketName: string;
        hidden: boolean;
        labels: Record<string, string>;
        mimetype?: string | null | undefined;
        tags?: any | null | undefined;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileResponse> = z
        .object({
            createdAt: z.string(),
            encoding: z.nullable(z.string()).optional(),
            eventActors: z.record(z.string()),
            fileAccessScope: FileAccessScope$,
            fileId: z.string(),
            filename: z.string(),
            gcsBucketName: z.string(),
            hidden: z.boolean(),
            labels: z.record(z.string()),
            mimetype: z.nullable(z.string()).optional(),
            tags: z.nullable(z.any()).optional(),
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                ...(v.encoding === undefined ? null : { encoding: v.encoding }),
                eventActors: v.eventActors,
                fileAccessScope: v.fileAccessScope,
                fileId: v.fileId,
                filename: v.filename,
                gcsBucketName: v.gcsBucketName,
                hidden: v.hidden,
                labels: v.labels,
                ...(v.mimetype === undefined ? null : { mimetype: v.mimetype }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
