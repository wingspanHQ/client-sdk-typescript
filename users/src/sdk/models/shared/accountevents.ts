/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "failedVerifyMicroDepositAt" })
    failedVerifyMicroDepositAt?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "initialSetupAt" })
    initialSetupAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isInitialSetupStarted" })
    isInitialSetupStarted?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "requestedMicroDepositAt" })
    requestedMicroDepositAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sentMicroDepositEmailAt" })
    sentMicroDepositEmailAt?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "transactionsSyncedAt" })
    transactionsSyncedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verifiedMicroDepositAt" })
    verifiedMicroDepositAt?: string;
}
