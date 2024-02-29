/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UserNotificationSettings = {
    newsletters?: boolean | null | undefined;
    reviewNotifications?: boolean | null | undefined;
};

/** @internal */
export namespace UserNotificationSettings$ {
    export type Inbound = {
        newsletters?: boolean | null | undefined;
        reviewNotifications?: boolean | null | undefined;
    };

    export const inboundSchema: z.ZodType<UserNotificationSettings, z.ZodTypeDef, Inbound> = z
        .object({
            newsletters: z.nullable(z.boolean()).optional(),
            reviewNotifications: z.nullable(z.boolean()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.newsletters === undefined ? null : { newsletters: v.newsletters }),
                ...(v.reviewNotifications === undefined
                    ? null
                    : { reviewNotifications: v.reviewNotifications }),
            };
        });

    export type Outbound = {
        newsletters?: boolean | null | undefined;
        reviewNotifications?: boolean | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserNotificationSettings> = z
        .object({
            newsletters: z.nullable(z.boolean()).optional(),
            reviewNotifications: z.nullable(z.boolean()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.newsletters === undefined ? null : { newsletters: v.newsletters }),
                ...(v.reviewNotifications === undefined
                    ? null
                    : { reviewNotifications: v.reviewNotifications }),
            };
        });
}
