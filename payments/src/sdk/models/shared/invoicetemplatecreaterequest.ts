/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Frequency } from "./frequency";
import { InvoiceDataCreateRequest } from "./invoicedatacreaterequest";
import { ScheduleDate } from "./scheduledate";
import { Expose, Type } from "class-transformer";

export enum InvoiceTemplateCreateRequestStatus {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
}

export class InvoiceTemplateCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dueInDays" })
    dueInDays?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    @Type(() => Frequency)
    frequency?: Frequency;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceData" })
    @Type(() => InvoiceDataCreateRequest)
    invoiceData: InvoiceDataCreateRequest;

    @SpeakeasyMetadata()
    @Expose({ name: "isSchedulingOnly" })
    isSchedulingOnly?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    @SpeakeasyMetadata({ elemType: ScheduleDate })
    @Expose({ name: "scheduleDates" })
    @Type(() => ScheduleDate)
    scheduleDates?: ScheduleDate[];

    @SpeakeasyMetadata()
    @Expose({ name: "sendEmails" })
    sendEmails?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: InvoiceTemplateCreateRequestStatus;
}
