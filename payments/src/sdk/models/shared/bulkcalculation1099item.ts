/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14 } from "./eighthundredandsixtyfivethousandninehundredandsixtyninebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum BulkCalculation1099ItemCalculationType {
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

export class BulkCalculation1099Item extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkCalculation1099BatchId" })
    bulkCalculation1099BatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkCalculation1099ItemId" })
    bulkCalculation1099ItemId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "calculationType" })
    calculationType: BulkCalculation1099ItemCalculationType;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eventActors" })
    eventActors: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(
        () =>
            EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14
    )
    metadata?: EightHundredAndSixtyFiveThousandNineHundredAndSixtyNinebc2d9a3cb12c3263d4f941da6e1c7783024804b469db4a6eab9bc12f14;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: BulkCalculation1099ItemStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;

    @SpeakeasyMetadata()
    @Expose({ name: "year" })
    year: number;
}
