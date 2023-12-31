/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SixtyThreeb104af49f941a112cbf8987ad15398351abae11639690db561784bb86bb07e } from "./sixtythreeb104af49f941a112cbf8987ad15398351abae11639690db561784bb86bb07e";
import { Thirteenf81ff99f0b27f3425dded9d307db61524bb8425c7a5c38c5dc6da2c8bb52a4 } from "./thirteenf81ff99f0b27f3425dded9d307db61524bb8425c7a5c38c5dc6da2c8bb52a4";
import { Expose, Type } from "class-transformer";

export enum IntegrationAccountResponseIntegrationPartner {
    Quickbooks = "Quickbooks",
}

export enum IntegrationAccountResponseStatus {
    Active = "Active",
    Inactive = "Inactive",
    Deleted = "Deleted",
}

export class IntegrationAccountResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "accountSubType" })
    accountSubType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currentBalance" })
    currentBalance: number;

    @SpeakeasyMetadata()
    @Expose({ name: "currentBalanceWithSubAccounts" })
    currentBalanceWithSubAccounts: number;

    @SpeakeasyMetadata()
    @Expose({ name: "fullyQualifiedName" })
    fullyQualifiedName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integrationEntityStatus" })
    @Type(() => SixtyThreeb104af49f941a112cbf8987ad15398351abae11639690db561784bb86bb07e)
    integrationEntityStatus?: SixtyThreeb104af49f941a112cbf8987ad15398351abae11639690db561784bb86bb07e;

    @SpeakeasyMetadata()
    @Expose({ name: "integrationPartner" })
    integrationPartner: IntegrationAccountResponseIntegrationPartner;

    @SpeakeasyMetadata()
    @Expose({ name: "internal" })
    @Type(() => Thirteenf81ff99f0b27f3425dded9d307db61524bb8425c7a5c38c5dc6da2c8bb52a4)
    internal: Thirteenf81ff99f0b27f3425dded9d307db61524bb8425c7a5c38c5dc6da2c8bb52a4;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: IntegrationAccountResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "subAccount" })
    subAccount: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}
