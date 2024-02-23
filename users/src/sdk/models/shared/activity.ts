/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ActivityContext, ActivityContext$ } from "./activitycontext";
import { ActivityEvents, ActivityEvents$ } from "./activityevents";
import { Flows, Flows$ } from "./flows";
import { z } from "zod";

export type Activity = {
    context?: ActivityContext | null | undefined;
    events: ActivityEvents;
    flows: Flows;
    userId: string;
};

/** @internal */
export namespace Activity$ {
    export type Inbound = {
        context?: ActivityContext$.Inbound | null | undefined;
        events: ActivityEvents$.Inbound;
        flows: Flows$.Inbound;
        userId: string;
    };

    export const inboundSchema: z.ZodType<Activity, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.nullable(ActivityContext$.inboundSchema).optional(),
            events: ActivityEvents$.inboundSchema,
            flows: Flows$.inboundSchema,
            userId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                events: v.events,
                flows: v.flows,
                userId: v.userId,
            };
        });

    export type Outbound = {
        context?: ActivityContext$.Outbound | null | undefined;
        events: ActivityEvents$.Outbound;
        flows: Flows$.Outbound;
        userId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Activity> = z
        .object({
            context: z.nullable(ActivityContext$.outboundSchema).optional(),
            events: ActivityEvents$.outboundSchema,
            flows: Flows$.outboundSchema,
            userId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                events: v.events,
                flows: v.flows,
                userId: v.userId,
            };
        });
}
