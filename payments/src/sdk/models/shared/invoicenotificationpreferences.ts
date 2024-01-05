/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type InvoiceNotificationPreferences = {
    sendInvoice?: boolean | null | undefined;
    sendReceipt?: boolean | null | undefined;
    sendReminders: boolean;
};

/** @internal */
export namespace InvoiceNotificationPreferences$ {
    export type Inbound = {
        sendInvoice?: boolean | null | undefined;
        sendReceipt?: boolean | null | undefined;
        sendReminders: boolean;
    };

    export const inboundSchema: z.ZodType<InvoiceNotificationPreferences, z.ZodTypeDef, Inbound> = z
        .object({
            sendInvoice: z.boolean().nullable().optional(),
            sendReceipt: z.boolean().nullable().optional(),
            sendReminders: z.boolean(),
        })
        .transform((v) => {
            return {
                ...(v.sendInvoice === undefined ? null : { sendInvoice: v.sendInvoice }),
                ...(v.sendReceipt === undefined ? null : { sendReceipt: v.sendReceipt }),
                sendReminders: v.sendReminders,
            };
        });

    export type Outbound = {
        sendInvoice?: boolean | null | undefined;
        sendReceipt?: boolean | null | undefined;
        sendReminders: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceNotificationPreferences> =
        z
            .object({
                sendInvoice: z.boolean().nullable().optional(),
                sendReceipt: z.boolean().nullable().optional(),
                sendReminders: z.boolean(),
            })
            .transform((v) => {
                return {
                    ...(v.sendInvoice === undefined ? null : { sendInvoice: v.sendInvoice }),
                    ...(v.sendReceipt === undefined ? null : { sendReceipt: v.sendReceipt }),
                    sendReminders: v.sendReminders,
                };
            });
}
