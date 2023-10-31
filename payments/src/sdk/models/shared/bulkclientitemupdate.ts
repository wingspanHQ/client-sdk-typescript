/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0 } from "./d750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0";
import { MemberData } from "./memberdata";
import { Expose, Type } from "class-transformer";

export enum BulkClientItemUpdateClientStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
    LessThanNilGreaterThan = "<nil>",
}

export class BulkClientItemUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientStatus" })
    clientStatus?: BulkClientItemUpdateClientStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "externalId" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "firstLastName" })
    firstLastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0)
    integration?: D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberData" })
    @Type(() => MemberData)
    memberData?: MemberData;
}
