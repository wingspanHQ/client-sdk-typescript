/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetPaymentsCollaboratorIdDownload1099YearIndexRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Index
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
    index: string;

    /**
     * Year
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
    year: string;
}

export class GetPaymentsCollaboratorIdDownload1099YearIndexResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Download1099Response
     */
    @SpeakeasyMetadata()
    download1099Response?: shared.Download1099Response;

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