/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type TaxFormSubmissionEvents = {
    acceptedByIrsAt?: string | null | undefined;
    deliveredByMailAt?: string | null | undefined;
    deliveredElectronicallyAt?: string | null | undefined;
    mailDeliveryFailedAt?: string | null | undefined;
    openedByCollaboratorAt?: string | null | undefined;
    redeliveredByMailAt?: string | null | undefined;
    rejectedByIrsAt?: string | null | undefined;
    remailingFailedAt?: string | null | undefined;
    resentByMailAt?: string | null | undefined;
    returnedToSenderAt?: string | null | undefined;
    sentByMailAt?: string | null | undefined;
    submittedAt?: string | null | undefined;
};

/** @internal */
export namespace TaxFormSubmissionEvents$ {
    export type Inbound = {
        acceptedByIrsAt?: string | null | undefined;
        deliveredByMailAt?: string | null | undefined;
        deliveredElectronicallyAt?: string | null | undefined;
        mailDeliveryFailedAt?: string | null | undefined;
        openedByCollaboratorAt?: string | null | undefined;
        redeliveredByMailAt?: string | null | undefined;
        rejectedByIrsAt?: string | null | undefined;
        remailingFailedAt?: string | null | undefined;
        resentByMailAt?: string | null | undefined;
        returnedToSenderAt?: string | null | undefined;
        sentByMailAt?: string | null | undefined;
        submittedAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<TaxFormSubmissionEvents, z.ZodTypeDef, Inbound> = z
        .object({
            acceptedByIrsAt: z.nullable(z.string()).optional(),
            deliveredByMailAt: z.nullable(z.string()).optional(),
            deliveredElectronicallyAt: z.nullable(z.string()).optional(),
            mailDeliveryFailedAt: z.nullable(z.string()).optional(),
            openedByCollaboratorAt: z.nullable(z.string()).optional(),
            redeliveredByMailAt: z.nullable(z.string()).optional(),
            rejectedByIrsAt: z.nullable(z.string()).optional(),
            remailingFailedAt: z.nullable(z.string()).optional(),
            resentByMailAt: z.nullable(z.string()).optional(),
            returnedToSenderAt: z.nullable(z.string()).optional(),
            sentByMailAt: z.nullable(z.string()).optional(),
            submittedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedByIrsAt === undefined
                    ? null
                    : { acceptedByIrsAt: v.acceptedByIrsAt }),
                ...(v.deliveredByMailAt === undefined
                    ? null
                    : { deliveredByMailAt: v.deliveredByMailAt }),
                ...(v.deliveredElectronicallyAt === undefined
                    ? null
                    : { deliveredElectronicallyAt: v.deliveredElectronicallyAt }),
                ...(v.mailDeliveryFailedAt === undefined
                    ? null
                    : { mailDeliveryFailedAt: v.mailDeliveryFailedAt }),
                ...(v.openedByCollaboratorAt === undefined
                    ? null
                    : { openedByCollaboratorAt: v.openedByCollaboratorAt }),
                ...(v.redeliveredByMailAt === undefined
                    ? null
                    : { redeliveredByMailAt: v.redeliveredByMailAt }),
                ...(v.rejectedByIrsAt === undefined
                    ? null
                    : { rejectedByIrsAt: v.rejectedByIrsAt }),
                ...(v.remailingFailedAt === undefined
                    ? null
                    : { remailingFailedAt: v.remailingFailedAt }),
                ...(v.resentByMailAt === undefined ? null : { resentByMailAt: v.resentByMailAt }),
                ...(v.returnedToSenderAt === undefined
                    ? null
                    : { returnedToSenderAt: v.returnedToSenderAt }),
                ...(v.sentByMailAt === undefined ? null : { sentByMailAt: v.sentByMailAt }),
                ...(v.submittedAt === undefined ? null : { submittedAt: v.submittedAt }),
            };
        });

    export type Outbound = {
        acceptedByIrsAt?: string | null | undefined;
        deliveredByMailAt?: string | null | undefined;
        deliveredElectronicallyAt?: string | null | undefined;
        mailDeliveryFailedAt?: string | null | undefined;
        openedByCollaboratorAt?: string | null | undefined;
        redeliveredByMailAt?: string | null | undefined;
        rejectedByIrsAt?: string | null | undefined;
        remailingFailedAt?: string | null | undefined;
        resentByMailAt?: string | null | undefined;
        returnedToSenderAt?: string | null | undefined;
        sentByMailAt?: string | null | undefined;
        submittedAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxFormSubmissionEvents> = z
        .object({
            acceptedByIrsAt: z.nullable(z.string()).optional(),
            deliveredByMailAt: z.nullable(z.string()).optional(),
            deliveredElectronicallyAt: z.nullable(z.string()).optional(),
            mailDeliveryFailedAt: z.nullable(z.string()).optional(),
            openedByCollaboratorAt: z.nullable(z.string()).optional(),
            redeliveredByMailAt: z.nullable(z.string()).optional(),
            rejectedByIrsAt: z.nullable(z.string()).optional(),
            remailingFailedAt: z.nullable(z.string()).optional(),
            resentByMailAt: z.nullable(z.string()).optional(),
            returnedToSenderAt: z.nullable(z.string()).optional(),
            sentByMailAt: z.nullable(z.string()).optional(),
            submittedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptedByIrsAt === undefined
                    ? null
                    : { acceptedByIrsAt: v.acceptedByIrsAt }),
                ...(v.deliveredByMailAt === undefined
                    ? null
                    : { deliveredByMailAt: v.deliveredByMailAt }),
                ...(v.deliveredElectronicallyAt === undefined
                    ? null
                    : { deliveredElectronicallyAt: v.deliveredElectronicallyAt }),
                ...(v.mailDeliveryFailedAt === undefined
                    ? null
                    : { mailDeliveryFailedAt: v.mailDeliveryFailedAt }),
                ...(v.openedByCollaboratorAt === undefined
                    ? null
                    : { openedByCollaboratorAt: v.openedByCollaboratorAt }),
                ...(v.redeliveredByMailAt === undefined
                    ? null
                    : { redeliveredByMailAt: v.redeliveredByMailAt }),
                ...(v.rejectedByIrsAt === undefined
                    ? null
                    : { rejectedByIrsAt: v.rejectedByIrsAt }),
                ...(v.remailingFailedAt === undefined
                    ? null
                    : { remailingFailedAt: v.remailingFailedAt }),
                ...(v.resentByMailAt === undefined ? null : { resentByMailAt: v.resentByMailAt }),
                ...(v.returnedToSenderAt === undefined
                    ? null
                    : { returnedToSenderAt: v.returnedToSenderAt }),
                ...(v.sentByMailAt === undefined ? null : { sentByMailAt: v.sentByMailAt }),
                ...(v.submittedAt === undefined ? null : { submittedAt: v.submittedAt }),
            };
        });
}