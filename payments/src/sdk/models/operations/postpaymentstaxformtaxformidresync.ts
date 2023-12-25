/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class PostPaymentsTaxFormTaxFormIdResyncRequest extends SpeakeasyBase {
    /**
     * Unique tax Form Id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxFormId" })
    taxFormId: string;
}

export class PostPaymentsTaxFormTaxFormIdResyncResponse extends SpeakeasyBase {
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

    /**
     * 1099 Tax form object
     */
    @SpeakeasyMetadata()
    taxFormResponse?: any;
}
