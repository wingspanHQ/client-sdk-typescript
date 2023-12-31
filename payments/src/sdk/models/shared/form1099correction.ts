/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Form1099CorrectionAddress extends SpeakeasyBase {}

export enum Form1099CorrectionCompanyStructure {
    None = "None",
    SoleProprietorship = "SoleProprietorship",
    LlcSingleMember = "LlcSingleMember",
    LlcMultiMember = "LlcMultiMember",
    CorporationS = "CorporationS",
    LLCCorporationS = "LLCCorporationS",
    LLCCorporationC = "LLCCorporationC",
    LLCPartnership = "LLCPartnership",
    CorporationC = "CorporationC",
    Partnership = "Partnership",
    LessThanNilGreaterThan = "<nil>",
}

export class Form1099Correction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Form1099CorrectionAddress)
    address?: Form1099CorrectionAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "companyStructure" })
    companyStructure?: Form1099CorrectionCompanyStructure;

    @SpeakeasyMetadata()
    @Expose({ name: "ein" })
    ein?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "legalBusinessName" })
    legalBusinessName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssn" })
    ssn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;
}
