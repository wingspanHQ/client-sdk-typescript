/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { SDKError } from "./models/errors/sdkerror.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";
import * as operations from "./models/operations/index.js";
import { unwrap as unwrap$ } from "./types/fp.js";

export class ReportingAndAnalytics extends ClientSDK {
    /**
     * Obtain a summarized report of payable amounts for each collaborator
     *
     * @remarks
     * Gathers and presents a concise summary showcasing the payable amounts due to each collaborator, helping in financial planning and payout strategies.
     */
    async get(options?: RequestOptions): Promise<operations.GetSummarizedReportResponse> {
        const path$ = pathToFunc("/payments/reports/collaborators/payables-summary")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getSummarizedReport",
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
            operations.GetSummarizedReportResponse,
            SDKError | SDKValidationError
        >(m$.json(200, operations.GetSummarizedReportResponse$inboundSchema, { key: "classes" }))(
            response,
            { extraFields: responseFields$ }
        );

        return unwrap$(result$);
    }

    /**
     * Extract detailed report of payables associated with a particular payroll run
     *
     * @remarks
     * Offers a deep dive into the payables connected to a specific payroll run, facilitating better management and reconciliation of payroll-related finances.
     */
    async getPayrollReport(
        request: operations.GetPayrollDetailedReportRequest,
        options?: RequestOptions
    ): Promise<operations.GetPayrollDetailedReportResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetPayrollDetailedReportRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            payrollId: encodeSimple$("payrollId", payload$.payrollId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/payments/reports/payroll/{payrollId}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "getPayrollDetailedReport",
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
                body: body$,
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
            operations.GetPayrollDetailedReportResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetPayrollDetailedReportResponse$inboundSchema, {
                key: "PayrollReportResponse",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve detailed information on all collaborators
     *
     * @remarks
     * Fetches comprehensive data on all collaborators, including their activities and current status, as listed in the reports.
     */
    async listDetailedCollaborator(
        options?: RequestOptions
    ): Promise<operations.ListDetailedInformationCollaboratorsResponse> {
        const path$ = pathToFunc("/payments/reports/collaborators")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listDetailedInformationCollaborators",
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
            operations.ListDetailedInformationCollaboratorsResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListDetailedInformationCollaboratorsResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Obtain Aging Report for Line Items
     *
     * @remarks
     * Retrieve a comprehensive report detailing line items that have been open for a set number of days.
     */
    async listLineItem(
        options?: RequestOptions
    ): Promise<operations.ListAgingReportLineItemsResponse> {
        const path$ = pathToFunc("/payments/reports/aging/line-items")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listAgingReportLineItems",
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
            operations.ListAgingReportLineItemsResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListAgingReportLineItemsResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve Aging Report for Payables
     *
     * @remarks
     * Access a detailed report that showcases the list of payables categorized by age.
     */
    async listPayable(
        options?: RequestOptions
    ): Promise<operations.ListAgingReportPayablesResponse> {
        const path$ = pathToFunc("/payments/reports/aging/payables")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "listAgingReportPayables",
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
            operations.ListAgingReportPayablesResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListAgingReportPayablesResponse$inboundSchema, {
                key: "classes",
            })
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
