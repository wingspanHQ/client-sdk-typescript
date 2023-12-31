/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2 } from "./sevenhundredandfiftysevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum BulkInvoiceBatchProcessingStrategy {
    Merge = "Merge",
    Single = "Single",
}

export enum BulkInvoiceBatchStatus {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

export class BulkInvoiceBatch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceBatchId" })
    bulkInvoiceBatchId: string;

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
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "processingStrategy" })
    processingStrategy: BulkInvoiceBatchProcessingStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(
        () => SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2
    )
    statistics?: SevenHundredAndFiftySevenf4961b94334fd41cedc27262be7b14583377703cda6490b996969bd4e66c2;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: BulkInvoiceBatchStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
