/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum Interval {
    Week = "Week",
    Month = "Month",
}

export type Frequency = {
    daily?: boolean | null | undefined;
    dayInInterval?: number | null | undefined;
    endDate?: string | null | undefined;
    every?: number | null | undefined;
    interval?: Interval | null | undefined;
    startDate: string;
    twicePerMonth?: boolean | null | undefined;
};

/** @internal */
export const Interval$ = z.nativeEnum(Interval);

/** @internal */
export namespace Frequency$ {
    export type Inbound = {
        daily?: boolean | null | undefined;
        dayInInterval?: number | null | undefined;
        endDate?: string | null | undefined;
        every?: number | null | undefined;
        interval?: Interval | null | undefined;
        startDate: string;
        twicePerMonth?: boolean | null | undefined;
    };

    export const inboundSchema: z.ZodType<Frequency, z.ZodTypeDef, Inbound> = z
        .object({
            daily: z.nullable(z.boolean()).optional(),
            dayInInterval: z.nullable(z.number()).optional(),
            endDate: z.nullable(z.string()).optional(),
            every: z.nullable(z.number()).optional(),
            interval: z.nullable(Interval$).optional(),
            startDate: z.string(),
            twicePerMonth: z.nullable(z.boolean()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.daily === undefined ? null : { daily: v.daily }),
                ...(v.dayInInterval === undefined ? null : { dayInInterval: v.dayInInterval }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.every === undefined ? null : { every: v.every }),
                ...(v.interval === undefined ? null : { interval: v.interval }),
                startDate: v.startDate,
                ...(v.twicePerMonth === undefined ? null : { twicePerMonth: v.twicePerMonth }),
            };
        });

    export type Outbound = {
        daily?: boolean | null | undefined;
        dayInInterval?: number | null | undefined;
        endDate?: string | null | undefined;
        every?: number | null | undefined;
        interval?: Interval | null | undefined;
        startDate: string;
        twicePerMonth?: boolean | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Frequency> = z
        .object({
            daily: z.nullable(z.boolean()).optional(),
            dayInInterval: z.nullable(z.number()).optional(),
            endDate: z.nullable(z.string()).optional(),
            every: z.nullable(z.number()).optional(),
            interval: z.nullable(Interval$).optional(),
            startDate: z.string(),
            twicePerMonth: z.nullable(z.boolean()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.daily === undefined ? null : { daily: v.daily }),
                ...(v.dayInInterval === undefined ? null : { dayInInterval: v.dayInInterval }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.every === undefined ? null : { every: v.every }),
                ...(v.interval === undefined ? null : { interval: v.interval }),
                startDate: v.startDate,
                ...(v.twicePerMonth === undefined ? null : { twicePerMonth: v.twicePerMonth }),
            };
        });
}
