/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    NextgenSubscriptionDiscount,
    NextgenSubscriptionDiscount$,
} from "./nextgensubscriptiondiscount";
import { NextgenSubscriptionPlan, NextgenSubscriptionPlan$ } from "./nextgensubscriptionplan";
import { NextgenSubscriptionPrice, NextgenSubscriptionPrice$ } from "./nextgensubscriptionprice";
import { UserRoles, UserRoles$ } from "./userroles";
import * as z from "zod";

export enum NextgenSubscriptionResponseStatus {
    Active = "Active",
    Canceled = "Canceled",
}

export enum Term {
    Yearly = "Yearly",
    Monthly = "Monthly",
}

export enum Units {
    Month = "Month",
}

export type NextgenSubscriptionResponse = {
    cancelAtPeriodEnd?: boolean | null | undefined;
    createdAt: string;
    currentPeriodEnd: string;
    currentPeriodStart: string;
    discounts: Array<NextgenSubscriptionDiscount>;
    eventActors: Record<string, string>;
    gracePeriodEnd: string;
    labels: Record<string, string>;
    memberId: string;
    plan: NextgenSubscriptionPlan;
    planId: string;
    price: NextgenSubscriptionPrice;
    quantity: number;
    status: NextgenSubscriptionResponseStatus;
    subscriptionEndDate: string;
    subscriptionId: string;
    subscriptionStart: string;
    term: Term;
    units: Units;
    updatedAt: string;
    userRoles: UserRoles;
};

/** @internal */
export const NextgenSubscriptionResponseStatus$ = z.nativeEnum(NextgenSubscriptionResponseStatus);

/** @internal */
export const Term$ = z.nativeEnum(Term);

/** @internal */
export const Units$ = z.nativeEnum(Units);

/** @internal */
export namespace NextgenSubscriptionResponse$ {
    export type Inbound = {
        cancelAtPeriodEnd?: boolean | null | undefined;
        createdAt: string;
        currentPeriodEnd: string;
        currentPeriodStart: string;
        discounts: Array<NextgenSubscriptionDiscount$.Inbound>;
        eventActors: Record<string, string>;
        gracePeriodEnd: string;
        labels: Record<string, string>;
        memberId: string;
        plan: NextgenSubscriptionPlan$.Inbound;
        planId: string;
        price: NextgenSubscriptionPrice$.Inbound;
        quantity: number;
        status: NextgenSubscriptionResponseStatus;
        subscriptionEndDate: string;
        subscriptionId: string;
        subscriptionStart: string;
        term: Term;
        units: Units;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
    };

    export const inboundSchema: z.ZodType<NextgenSubscriptionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cancelAtPeriodEnd: z.nullable(z.boolean()).optional(),
            createdAt: z.string(),
            currentPeriodEnd: z.string(),
            currentPeriodStart: z.string(),
            discounts: z.array(NextgenSubscriptionDiscount$.inboundSchema),
            eventActors: z.record(z.string()),
            gracePeriodEnd: z.string(),
            labels: z.record(z.string()),
            memberId: z.string(),
            plan: NextgenSubscriptionPlan$.inboundSchema,
            planId: z.string(),
            price: NextgenSubscriptionPrice$.inboundSchema,
            quantity: z.number(),
            status: NextgenSubscriptionResponseStatus$,
            subscriptionEndDate: z.string(),
            subscriptionId: z.string(),
            subscriptionStart: z.string(),
            term: Term$,
            units: Units$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.cancelAtPeriodEnd === undefined
                    ? null
                    : { cancelAtPeriodEnd: v.cancelAtPeriodEnd }),
                createdAt: v.createdAt,
                currentPeriodEnd: v.currentPeriodEnd,
                currentPeriodStart: v.currentPeriodStart,
                discounts: v.discounts,
                eventActors: v.eventActors,
                gracePeriodEnd: v.gracePeriodEnd,
                labels: v.labels,
                memberId: v.memberId,
                plan: v.plan,
                planId: v.planId,
                price: v.price,
                quantity: v.quantity,
                status: v.status,
                subscriptionEndDate: v.subscriptionEndDate,
                subscriptionId: v.subscriptionId,
                subscriptionStart: v.subscriptionStart,
                term: v.term,
                units: v.units,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });

    export type Outbound = {
        cancelAtPeriodEnd?: boolean | null | undefined;
        createdAt: string;
        currentPeriodEnd: string;
        currentPeriodStart: string;
        discounts: Array<NextgenSubscriptionDiscount$.Outbound>;
        eventActors: Record<string, string>;
        gracePeriodEnd: string;
        labels: Record<string, string>;
        memberId: string;
        plan: NextgenSubscriptionPlan$.Outbound;
        planId: string;
        price: NextgenSubscriptionPrice$.Outbound;
        quantity: number;
        status: NextgenSubscriptionResponseStatus;
        subscriptionEndDate: string;
        subscriptionId: string;
        subscriptionStart: string;
        term: Term;
        units: Units;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NextgenSubscriptionResponse> = z
        .object({
            cancelAtPeriodEnd: z.nullable(z.boolean()).optional(),
            createdAt: z.string(),
            currentPeriodEnd: z.string(),
            currentPeriodStart: z.string(),
            discounts: z.array(NextgenSubscriptionDiscount$.outboundSchema),
            eventActors: z.record(z.string()),
            gracePeriodEnd: z.string(),
            labels: z.record(z.string()),
            memberId: z.string(),
            plan: NextgenSubscriptionPlan$.outboundSchema,
            planId: z.string(),
            price: NextgenSubscriptionPrice$.outboundSchema,
            quantity: z.number(),
            status: NextgenSubscriptionResponseStatus$,
            subscriptionEndDate: z.string(),
            subscriptionId: z.string(),
            subscriptionStart: z.string(),
            term: Term$,
            units: Units$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.cancelAtPeriodEnd === undefined
                    ? null
                    : { cancelAtPeriodEnd: v.cancelAtPeriodEnd }),
                createdAt: v.createdAt,
                currentPeriodEnd: v.currentPeriodEnd,
                currentPeriodStart: v.currentPeriodStart,
                discounts: v.discounts,
                eventActors: v.eventActors,
                gracePeriodEnd: v.gracePeriodEnd,
                labels: v.labels,
                memberId: v.memberId,
                plan: v.plan,
                planId: v.planId,
                price: v.price,
                quantity: v.quantity,
                status: v.status,
                subscriptionEndDate: v.subscriptionEndDate,
                subscriptionId: v.subscriptionId,
                subscriptionStart: v.subscriptionStart,
                term: v.term,
                units: v.units,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
            };
        });
}
