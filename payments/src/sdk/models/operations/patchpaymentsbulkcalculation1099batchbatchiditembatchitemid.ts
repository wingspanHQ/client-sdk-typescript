/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bulkCalculation1099ItemUpdate?: shared.BulkCalculation1099ItemUpdate;

    /**
     * Unique identifier for a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
    batchId: string;

    /**
     * Unique identifier for an item in a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchItemId" })
    batchItemId: string;
}

export class PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse extends SpeakeasyBase {
    /**
     * An item that will be converted into a payable
     */
    @SpeakeasyMetadata()
    bulkPayableItem?: shared.BulkPayableItem;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
