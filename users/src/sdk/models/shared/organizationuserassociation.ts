/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    OrganizationInheritanceStrategy,
    OrganizationInheritanceStrategy$,
} from "./organizationinheritancestrategy";
import { z } from "zod";

export type OrganizationUserAssociation = {
    inheritanceStrategy?: OrganizationInheritanceStrategy | null | undefined;
    parentUserId?: string | null | undefined;
};

/** @internal */
export namespace OrganizationUserAssociation$ {
    export type Inbound = {
        inheritanceStrategy?: OrganizationInheritanceStrategy$.Inbound | null | undefined;
        parentUserId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<OrganizationUserAssociation, z.ZodTypeDef, Inbound> = z
        .object({
            inheritanceStrategy: z
                .nullable(OrganizationInheritanceStrategy$.inboundSchema)
                .optional(),
            parentUserId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.inheritanceStrategy === undefined
                    ? null
                    : { inheritanceStrategy: v.inheritanceStrategy }),
                ...(v.parentUserId === undefined ? null : { parentUserId: v.parentUserId }),
            };
        });

    export type Outbound = {
        inheritanceStrategy?: OrganizationInheritanceStrategy$.Outbound | null | undefined;
        parentUserId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrganizationUserAssociation> = z
        .object({
            inheritanceStrategy: z
                .nullable(OrganizationInheritanceStrategy$.outboundSchema)
                .optional(),
            parentUserId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.inheritanceStrategy === undefined
                    ? null
                    : { inheritanceStrategy: v.inheritanceStrategy }),
                ...(v.parentUserId === undefined ? null : { parentUserId: v.parentUserId }),
            };
        });
}
