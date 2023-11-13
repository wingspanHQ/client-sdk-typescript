/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ChargeStatus {
    Zero = "0",
    One = "1",
    Two = "2",
}

export class Charge extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "cardLast4" })
    cardLast4: string;

    @SpeakeasyMetadata()
    @Expose({ name: "chargeId" })
    chargeId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "chargeStatus" })
    chargeStatus: ChargeStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: string;
}
