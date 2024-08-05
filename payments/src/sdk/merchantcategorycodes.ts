/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as m$ from "../lib/matchers.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { SDKError } from "./models/errors/sdkerror.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";
import * as operations from "./models/operations/index.js";
import { unwrap as unwrap$ } from "./types/fp.js";

export class MerchantCategoryCodes extends ClientSDK {
    /**
     * Retrieve Merchant Category Codes (MCC)
     *
     * @remarks
     * This endpoint provides a comprehensive list of available Merchant Category Codes (MCC) which are used to classify businesses by the type of services or goods they provide.
     */
    async get(options?: RequestOptions): Promise<operations.GetMerchantCategoryCodesResponse> {
        const path$ = pathToFunc("/payments/mcc")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getMerchantCategoryCodes",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.GetMerchantCategoryCodesResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetMerchantCategoryCodesResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
