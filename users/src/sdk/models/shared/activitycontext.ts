/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ActivityContextGrowthSource {
    Partner = "Partner",
    Referral = "Referral",
    Collaborator = "Collaborator",
    Team = "Team",
    Invoice = "Invoice",
    Content = "Content",
    Enterprise = "Enterprise",
    EnterpriseClient = "EnterpriseClient",
    LessThanNilGreaterThan = "<nil>",
}

export class ActivityContext extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "growthSource" })
    growthSource?: ActivityContextGrowthSource;

    @SpeakeasyMetadata()
    @Expose({ name: "growthSourceName" })
    growthSourceName?: string;
}
