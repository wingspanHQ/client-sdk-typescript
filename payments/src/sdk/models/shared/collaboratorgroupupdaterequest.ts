/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CollaboratorGroupRequirement,
    CollaboratorGroupRequirement$,
} from "./collaboratorgrouprequirement";
import { z } from "zod";

export type CollaboratorGroupUpdateRequest = {
    collaboratorSettings?: Record<string, string> | null | undefined;
    description?: string | null | undefined;
    eligibilityRequirements?: Array<CollaboratorGroupRequirement> | null | undefined;
    name?: string | null | undefined;
};

/** @internal */
export namespace CollaboratorGroupUpdateRequest$ {
    export type Inbound = {
        collaboratorSettings?: Record<string, string> | null | undefined;
        description?: string | null | undefined;
        eligibilityRequirements?: Array<CollaboratorGroupRequirement$.Inbound> | null | undefined;
        name?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<CollaboratorGroupUpdateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            collaboratorSettings: z.record(z.string()).nullable().optional(),
            description: z.string().nullable().optional(),
            eligibilityRequirements: z
                .array(CollaboratorGroupRequirement$.inboundSchema)
                .nullable()
                .optional(),
            name: z.string().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.collaboratorSettings === undefined
                    ? null
                    : { collaboratorSettings: v.collaboratorSettings }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.eligibilityRequirements === undefined
                    ? null
                    : { eligibilityRequirements: v.eligibilityRequirements }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        collaboratorSettings?: Record<string, string> | null | undefined;
        description?: string | null | undefined;
        eligibilityRequirements?: Array<CollaboratorGroupRequirement$.Outbound> | null | undefined;
        name?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CollaboratorGroupUpdateRequest> =
        z
            .object({
                collaboratorSettings: z.record(z.string()).nullable().optional(),
                description: z.string().nullable().optional(),
                eligibilityRequirements: z
                    .array(CollaboratorGroupRequirement$.outboundSchema)
                    .nullable()
                    .optional(),
                name: z.string().nullable().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.collaboratorSettings === undefined
                        ? null
                        : { collaboratorSettings: v.collaboratorSettings }),
                    ...(v.description === undefined ? null : { description: v.description }),
                    ...(v.eligibilityRequirements === undefined
                        ? null
                        : { eligibilityRequirements: v.eligibilityRequirements }),
                    ...(v.name === undefined ? null : { name: v.name }),
                };
            });
}
