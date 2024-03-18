/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c,
    Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c$,
} from "./dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c";
import * as z from "zod";

export type FileRequest = {
    encoding?: string | null | undefined;
    filename: string;
    hidden?: boolean | null | undefined;
    mimetype?: string | null | undefined;
    tags?: any | null | undefined;
    userRoles?: Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c | null | undefined;
};

/** @internal */
export namespace FileRequest$ {
    export type Inbound = {
        encoding?: string | null | undefined;
        filename: string;
        hidden?: boolean | null | undefined;
        mimetype?: string | null | undefined;
        tags?: any | null | undefined;
        userRoles?:
            | Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c$.Inbound
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<FileRequest, z.ZodTypeDef, Inbound> = z
        .object({
            encoding: z.nullable(z.string()).optional(),
            filename: z.string(),
            hidden: z.nullable(z.boolean()).optional(),
            mimetype: z.nullable(z.string()).optional(),
            tags: z.nullable(z.any()).optional(),
            userRoles: z
                .nullable(
                    Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c$.inboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.encoding === undefined ? null : { encoding: v.encoding }),
                filename: v.filename,
                ...(v.hidden === undefined ? null : { hidden: v.hidden }),
                ...(v.mimetype === undefined ? null : { mimetype: v.mimetype }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.userRoles === undefined ? null : { userRoles: v.userRoles }),
            };
        });

    export type Outbound = {
        encoding?: string | null | undefined;
        filename: string;
        hidden?: boolean | null | undefined;
        mimetype?: string | null | undefined;
        tags?: any | null | undefined;
        userRoles?:
            | Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileRequest> = z
        .object({
            encoding: z.nullable(z.string()).optional(),
            filename: z.string(),
            hidden: z.nullable(z.boolean()).optional(),
            mimetype: z.nullable(z.string()).optional(),
            tags: z.nullable(z.any()).optional(),
            userRoles: z
                .nullable(
                    Dfd8f315b764d3bf459f8459cd5f444c6ac6656c1b8ec561168ce998df37955c$.outboundSchema
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.encoding === undefined ? null : { encoding: v.encoding }),
                filename: v.filename,
                ...(v.hidden === undefined ? null : { hidden: v.hidden }),
                ...(v.mimetype === undefined ? null : { mimetype: v.mimetype }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.userRoles === undefined ? null : { userRoles: v.userRoles }),
            };
        });
}
