/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14,
    EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14$,
} from "./eighthundredandsixtyfivethousandninehundredandsixtyninebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14";
import { UserRoles, UserRoles$ } from "./userroles";
import { z } from "zod";

export enum CalculationType {
    Balances = "Balances",
    Submissions = "Submissions",
}

export enum BulkCalculation1099ItemStatus {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

export type BulkCalculation1099Item = {
    bulkCalculation1099BatchId: string;
    bulkCalculation1099ItemId: string;
    calculationType: CalculationType;
    clientId: string;
    createdAt: string;
    eventActors: Record<string, string>;
    labels: Record<string, string>;
    metadata?:
        | EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14
        | null
        | undefined;
    status: BulkCalculation1099ItemStatus;
    updatedAt: string;
    userRoles: UserRoles;
    year: number;
};

/** @internal */
export const CalculationType$ = z.nativeEnum(CalculationType);

/** @internal */
export const BulkCalculation1099ItemStatus$ = z.nativeEnum(BulkCalculation1099ItemStatus);

/** @internal */
export namespace BulkCalculation1099Item$ {
    export type Inbound = {
        bulkCalculation1099BatchId: string;
        bulkCalculation1099ItemId: string;
        calculationType: CalculationType;
        clientId: string;
        createdAt: string;
        eventActors: Record<string, string>;
        labels: Record<string, string>;
        metadata?:
            | EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14$.Inbound
            | null
            | undefined;
        status: BulkCalculation1099ItemStatus;
        updatedAt: string;
        userRoles: UserRoles$.Inbound;
        year: number;
    };

    export const inboundSchema: z.ZodType<BulkCalculation1099Item, z.ZodTypeDef, Inbound> = z
        .object({
            bulkCalculation1099BatchId: z.string(),
            bulkCalculation1099ItemId: z.string(),
            calculationType: CalculationType$,
            clientId: z.string(),
            createdAt: z.string(),
            eventActors: z.record(z.string()),
            labels: z.record(z.string()),
            metadata:
                EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14$.inboundSchema
                    .nullable()
                    .optional(),
            status: BulkCalculation1099ItemStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.inboundSchema,
            year: z.number(),
        })
        .transform((v) => {
            return {
                bulkCalculation1099BatchId: v.bulkCalculation1099BatchId,
                bulkCalculation1099ItemId: v.bulkCalculation1099ItemId,
                calculationType: v.calculationType,
                clientId: v.clientId,
                createdAt: v.createdAt,
                eventActors: v.eventActors,
                labels: v.labels,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                year: v.year,
            };
        });

    export type Outbound = {
        bulkCalculation1099BatchId: string;
        bulkCalculation1099ItemId: string;
        calculationType: CalculationType;
        clientId: string;
        createdAt: string;
        eventActors: Record<string, string>;
        labels: Record<string, string>;
        metadata?:
            | EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14$.Outbound
            | null
            | undefined;
        status: BulkCalculation1099ItemStatus;
        updatedAt: string;
        userRoles: UserRoles$.Outbound;
        year: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkCalculation1099Item> = z
        .object({
            bulkCalculation1099BatchId: z.string(),
            bulkCalculation1099ItemId: z.string(),
            calculationType: CalculationType$,
            clientId: z.string(),
            createdAt: z.string(),
            eventActors: z.record(z.string()),
            labels: z.record(z.string()),
            metadata:
                EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14$.outboundSchema
                    .nullable()
                    .optional(),
            status: BulkCalculation1099ItemStatus$,
            updatedAt: z.string(),
            userRoles: UserRoles$.outboundSchema,
            year: z.number(),
        })
        .transform((v) => {
            return {
                bulkCalculation1099BatchId: v.bulkCalculation1099BatchId,
                bulkCalculation1099ItemId: v.bulkCalculation1099ItemId,
                calculationType: v.calculationType,
                clientId: v.clientId,
                createdAt: v.createdAt,
                eventActors: v.eventActors,
                labels: v.labels,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                status: v.status,
                updatedAt: v.updatedAt,
                userRoles: v.userRoles,
                year: v.year,
            };
        });
}
