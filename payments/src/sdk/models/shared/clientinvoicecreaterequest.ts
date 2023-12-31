/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { InvoiceLineItemsCreateRequest } from "./invoicelineitemscreaterequest";
import { Expose, Type } from "class-transformer";

export enum ClientInvoiceCreateRequestCurrency {
    Usd = "USD",
    Cad = "CAD",
    LessThanNilGreaterThan = "<nil>",
}

export class ClientInvoiceCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientCompany" })
    clientCompany?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientEmail" })
    clientEmail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientEmailCC" })
    clientEmailCC?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "clientFirstName" })
    clientFirstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientLastName" })
    clientLastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: ClientInvoiceCreateRequestCurrency;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata({ elemType: InvoiceLineItemsCreateRequest })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItemsCreateRequest)
    lineItems: InvoiceLineItemsCreateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;
}
