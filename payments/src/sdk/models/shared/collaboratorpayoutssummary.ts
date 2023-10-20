/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CollaboratorPayoutsSummary extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deductionsCount" })
    deductionsCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "firstPaidDate" })
    firstPaidDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lastPaidDate" })
    lastPaidDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "payablesCount" })
    payablesCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "totalDeducted" })
    totalDeducted: number;

    @SpeakeasyMetadata()
    @Expose({ name: "totalPaid" })
    totalPaid: number;
}