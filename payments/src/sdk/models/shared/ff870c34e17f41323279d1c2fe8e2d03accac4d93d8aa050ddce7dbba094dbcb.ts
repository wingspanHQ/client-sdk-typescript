/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Ff870c34e17f41323279d1c2fe8e2d03accac4d93d8aa050ddce7dbba094dbcb = {
    deductionId?: string | null | undefined;
    errorMessage?: string | null | undefined;
    payableId?: string | null | undefined;
    resolvedClientId?: string | null | undefined;
    resolvedCollaboratorId?: string | null | undefined;
};

/** @internal */
export namespace Ff870c34e17f41323279d1c2fe8e2d03accac4d93d8aa050ddce7dbba094dbcb$ {
    export type Inbound = {
        deductionId?: string | null | undefined;
        errorMessage?: string | null | undefined;
        payableId?: string | null | undefined;
        resolvedClientId?: string | null | undefined;
        resolvedCollaboratorId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        Ff870c34e17f41323279d1c2fe8e2d03accac4d93d8aa050ddce7dbba094dbcb,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            deductionId: z.nullable(z.string()).optional(),
            errorMessage: z.nullable(z.string()).optional(),
            payableId: z.nullable(z.string()).optional(),
            resolvedClientId: z.nullable(z.string()).optional(),
            resolvedCollaboratorId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.deductionId === undefined ? null : { deductionId: v.deductionId }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.payableId === undefined ? null : { payableId: v.payableId }),
                ...(v.resolvedClientId === undefined
                    ? null
                    : { resolvedClientId: v.resolvedClientId }),
                ...(v.resolvedCollaboratorId === undefined
                    ? null
                    : { resolvedCollaboratorId: v.resolvedCollaboratorId }),
            };
        });

    export type Outbound = {
        deductionId?: string | null | undefined;
        errorMessage?: string | null | undefined;
        payableId?: string | null | undefined;
        resolvedClientId?: string | null | undefined;
        resolvedCollaboratorId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        Ff870c34e17f41323279d1c2fe8e2d03accac4d93d8aa050ddce7dbba094dbcb
    > = z
        .object({
            deductionId: z.nullable(z.string()).optional(),
            errorMessage: z.nullable(z.string()).optional(),
            payableId: z.nullable(z.string()).optional(),
            resolvedClientId: z.nullable(z.string()).optional(),
            resolvedCollaboratorId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.deductionId === undefined ? null : { deductionId: v.deductionId }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.payableId === undefined ? null : { payableId: v.payableId }),
                ...(v.resolvedClientId === undefined
                    ? null
                    : { resolvedClientId: v.resolvedClientId }),
                ...(v.resolvedCollaboratorId === undefined
                    ? null
                    : { resolvedCollaboratorId: v.resolvedCollaboratorId }),
            };
        });
}