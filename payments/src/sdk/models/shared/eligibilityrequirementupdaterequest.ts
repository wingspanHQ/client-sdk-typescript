/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EligibilityRequirementUpdateRequestRequirementType {
    Signature = "Signature",
}

export class EligibilityRequirementUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "requirementType" })
    requirementType: EligibilityRequirementUpdateRequestRequirementType;

    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "validFor" })
    validFor?: number;
}
