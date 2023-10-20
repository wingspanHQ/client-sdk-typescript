/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EightThousandTwoHundredAndTwelveee55b9e13fc32935c9417826f64b3550a203b665a04aacb02c4cac363c1f } from "./eightthousandtwohundredandtwelveee55b9e13fc32935c9417826f64b3550a203b665a04aacb02c4cac363c1f";
import { Expose, Type } from "class-transformer";

export enum FundsTransferAccountCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export enum FundsTransferAccountType {
    Card = "Card",
    BankAccount = "BankAccount",
    InternalAccount = "InternalAccount",
    StripeAccount = "StripeAccount",
}

export class FundsTransferAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: FundsTransferAccountCurrency;

    @SpeakeasyMetadata()
    @Expose({ name: "holderName" })
    holderName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "numbers" })
    @Type(
        () =>
            EightThousandTwoHundredAndTwelveee55b9e13fc32935c9417826f64b3550a203b665a04aacb02c4cac363c1f
    )
    numbers: EightThousandTwoHundredAndTwelveee55b9e13fc32935c9417826f64b3550a203b665a04aacb02c4cac363c1f;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: FundsTransferAccountType;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
