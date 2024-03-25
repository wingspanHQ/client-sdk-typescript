/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PostUsersOrganizationUserUserIdAssociateRequest = {
    organizationUserAssociation?: shared.OrganizationUserAssociation | undefined;
    /**
     * User Id
     */
    userId: string;
};

export type PostUsersOrganizationUserUserIdAssociateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Association between a child user account and its parent
     */
    organizationAccount?: shared.OrganizationAccount | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace PostUsersOrganizationUserUserIdAssociateRequest$ {
    export type Inbound = {
        OrganizationUserAssociation?: shared.OrganizationUserAssociation$.Inbound | undefined;
        userId: string;
    };

    export const inboundSchema: z.ZodType<
        PostUsersOrganizationUserUserIdAssociateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            OrganizationUserAssociation:
                shared.OrganizationUserAssociation$.inboundSchema.optional(),
            userId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.OrganizationUserAssociation === undefined
                    ? null
                    : { organizationUserAssociation: v.OrganizationUserAssociation }),
                userId: v.userId,
            };
        });

    export type Outbound = {
        OrganizationUserAssociation?: shared.OrganizationUserAssociation$.Outbound | undefined;
        userId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersOrganizationUserUserIdAssociateRequest
    > = z
        .object({
            organizationUserAssociation:
                shared.OrganizationUserAssociation$.outboundSchema.optional(),
            userId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.organizationUserAssociation === undefined
                    ? null
                    : { OrganizationUserAssociation: v.organizationUserAssociation }),
                userId: v.userId,
            };
        });
}

/** @internal */
export namespace PostUsersOrganizationUserUserIdAssociateResponse$ {
    export type Inbound = {
        ContentType: string;
        OrganizationAccount?: shared.OrganizationAccount$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        PostUsersOrganizationUserUserIdAssociateResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            OrganizationAccount: shared.OrganizationAccount$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.OrganizationAccount === undefined
                    ? null
                    : { organizationAccount: v.OrganizationAccount }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        OrganizationAccount?: shared.OrganizationAccount$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostUsersOrganizationUserUserIdAssociateResponse
    > = z
        .object({
            contentType: z.string(),
            organizationAccount: shared.OrganizationAccount$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.organizationAccount === undefined
                    ? null
                    : { OrganizationAccount: v.organizationAccount }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
