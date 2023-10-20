/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest extends SpeakeasyBase {
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

export class GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;
}
