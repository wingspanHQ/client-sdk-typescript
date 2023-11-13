/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481 } from "./ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481";
import { Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5 } from "./eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5";
import { Expose, Type } from "class-transformer";

export enum DeliveryMethod {
    Electronic = "Electronic",
    Mail = "Mail",
    Both = "Both",
    LessThanNilGreaterThan = "<nil>",
}

export class Events extends SpeakeasyBase {}

export enum CollaboratorForm1099BalancesUpdateRequestStatus {
    Ready = "Ready",
    NeedsActionInfo = "NeedsActionInfo",
    NeedsActionDispute = "NeedsActionDispute",
    Submitted = "Submitted",
    Rejected = "Rejected",
    Accepted = "Accepted",
    Excluded = "Excluded",
    LessThanNilGreaterThan = "<nil>",
}

export class CollaboratorForm1099BalancesUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "adjustments" })
    adjustments?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "correction" })
    @Type(() => Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481)
    correction?: Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481;

    @SpeakeasyMetadata()
    @Expose({ name: "deliveryMethod" })
    deliveryMethod?: DeliveryMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "dispute" })
    @Type(() => Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5)
    dispute?: Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5;

    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    @Type(() => Events)
    events?: Events;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CollaboratorForm1099BalancesUpdateRequestStatus;
}
