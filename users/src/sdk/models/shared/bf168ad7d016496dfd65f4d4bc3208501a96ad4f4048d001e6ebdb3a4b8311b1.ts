/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ScopeModification } from "./scopemodification";
import { Expose, Type } from "class-transformer";

export class Bf168ad7d016496dfd65f4d4bc3208501a96ad4f4048d001e6ebdb3a4b8311b1 extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ScopeModification })
    @Expose({ name: "memberClient" })
    @Type(() => ScopeModification)
    memberClient?: ScopeModification[];

    @SpeakeasyMetadata({ elemType: ScopeModification })
    @Expose({ name: "payable" })
    @Type(() => ScopeModification)
    payable?: ScopeModification[];
}