/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";

export class DocumentSigningAndEligibility extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Add a New Payment Eligibility Requirement
     *
     * @remarks
     * Define a new payment eligibility requirement for collaborators in the system.
     */
    async create(
        input: shared.PaymentEligibility | undefined,
        options?: RequestOptions
    ): Promise<operations.CreatePaymentEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.PaymentEligibility$.outboundSchema.optional().parse(input);
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/payment-eligibility"
        )();

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.CreatePaymentEligibilityRequirementResponse$.inboundSchema.parse({
                    ...responseFields$,
                    PaymentEligibility: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Remove a Specific Eligibility Requirement
     *
     * @remarks
     * Delete an eligibility requirement from the system based on its unique identifier.
     */
    async delete(
        input: operations.DeleteEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.DeleteEligibilityRequirementRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/eligibility-requirement/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteEligibilityRequirementResponse$.inboundSchema.parse({
                ...responseFields$,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Remove Eligibility Requirement from Collaborator Group
     *
     * @remarks
     * Delete a specific eligibility requirement from the designated collaborator group.
     */
    async deleteCollaboratorGroup(
        input: operations.DeleteEligibilityRequirementCollaboratorGroupRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteEligibilityRequirementCollaboratorGroupResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.DeleteEligibilityRequirementCollaboratorGroupRequest$.outboundSchema.parse(
                input
            );
        const body$ = null;

        const pathParams$ = {
            eligibilityRequirementId: enc$.encodeSimple(
                "eligibilityRequirementId",
                payload$.eligibilityRequirementId,
                { explode: false, charEncoding: "percent" }
            ),
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-group/{id}/eligibility-requirement/{eligibilityRequirementId}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.DeleteEligibilityRequirementCollaboratorGroupResponse$.inboundSchema.parse(
                    {
                        ...responseFields$,
                        CollaboratorGroupResponse: responseBody,
                    }
                );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Remove a specific Payment Eligibility Requirement
     *
     * @remarks
     * Delete an existing payment eligibility requirement based on its unique identifier, removing associated criteria for a member's payment eligibility.
     */
    async deletePayment(
        input: operations.DeletePaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.DeletePaymentEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.DeletePaymentEligibilityRequirementRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/payment-eligibility/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.DeletePaymentEligibilityRequirementResponse$.inboundSchema.parse({
                    ...responseFields$,
                    PaymentEligibility: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Establish a new Eligibility Requirement
     *
     * @remarks
     * Define and create a new eligibility requirement for collaborators.
     */
    async establish(
        input: shared.EligibilityRequirementCreateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.EstablishEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.EligibilityRequirementCreateRequest$.outboundSchema
            .optional()
            .parse(input);
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/eligibility-requirement"
        )();

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.EstablishEligibilityRequirementResponse$.inboundSchema.parse({
                ...responseFields$,
                EligibilityRequirement: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve a Specific Eligibility Requirement
     *
     * @remarks
     * Fetch details for a given eligibility requirement based on its unique identifier.
     */
    async get(
        input: operations.GetEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.GetEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetEligibilityRequirementRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/eligibility-requirement/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetEligibilityRequirementResponse$.inboundSchema.parse({
                ...responseFields$,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve Specific Collaborator Group Configuration
     *
     * @remarks
     * Fetch detailed configuration and attributes associated with a specific collaborator group.
     */
    async getGroupConfiguration(
        input: operations.GetCollaboratorGroupConfigurationRequest,
        options?: RequestOptions
    ): Promise<operations.GetCollaboratorGroupConfigurationResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetCollaboratorGroupConfigurationRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/payments/collaborator-group/{id}")(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.GetCollaboratorGroupConfigurationResponse$.inboundSchema.parse({
                    ...responseFields$,
                    CollaboratorGroupResponse: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve details of a specific Payment Eligibility Requirement
     *
     * @remarks
     * Fetch detailed information about a particular payment eligibility requirement using its unique identifier.
     */
    async getPayment(
        input: operations.GetPaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.GetPaymentEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetPaymentEligibilityRequirementRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/payment-eligibility/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetPaymentEligibilityRequirementResponse$.inboundSchema.parse(
                {
                    ...responseFields$,
                    PaymentEligibility: responseBody,
                }
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve all Eligibility Requirements
     *
     * @remarks
     * List and display all the set eligibility requirements for collaborators.
     */
    async list(options?: RequestOptions): Promise<operations.ListEligibilityRequirementsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/eligibility-requirement"
        )();

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListEligibilityRequirementsResponse$.inboundSchema.parse({
                ...responseFields$,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve All Payment Eligibility Requirements
     *
     * @remarks
     * Obtain a list of all payment eligibility requirements configured for collaborators.
     */
    async listPayment(
        options?: RequestOptions
    ): Promise<operations.ListPaymentEligibilityRequirementsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/payment-eligibility"
        )();

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.ListPaymentEligibilityRequirementsResponse$.inboundSchema.parse({
                    ...responseFields$,
                    classes: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Modify a Specific Eligibility Requirement
     *
     * @remarks
     * Update specific details or attributes of an existing eligibility requirement.
     */
    async update(
        input: operations.UpdateEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.UpdateEligibilityRequirementRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.EligibilityRequirementUpdateRequest, {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/eligibility-requirement/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateEligibilityRequirementResponse$.inboundSchema.parse({
                ...responseFields$,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Modify Eligibility Requirement for Collaborator Group
     *
     * @remarks
     * Update details or attributes of a specific eligibility requirement linked to a collaborator group.
     */
    async updateCollaboratorGroup(
        input: operations.UpdateEligibilityRequirementCollaboratorGroupRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateEligibilityRequirementCollaboratorGroupResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.UpdateEligibilityRequirementCollaboratorGroupRequest$.outboundSchema.parse(
                input
            );

        const body$ = enc$.encodeJSON("body", payload$.CollaboratorGroupRequirementUpdate, {
            explode: true,
        });

        const pathParams$ = {
            eligibilityRequirementId: enc$.encodeSimple(
                "eligibilityRequirementId",
                payload$.eligibilityRequirementId,
                { explode: false, charEncoding: "percent" }
            ),
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-group/{id}/eligibility-requirement/{eligibilityRequirementId}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.UpdateEligibilityRequirementCollaboratorGroupResponse$.inboundSchema.parse(
                    {
                        ...responseFields$,
                        CollaboratorGroupResponse: responseBody,
                    }
                );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Modify Collaborator Group Configuration
     *
     * @remarks
     * Update specific attributes or configuration details of an existing collaborator group.
     */
    async updateGroupConfiguration(
        input: operations.UpdateCollaboratorGroupConfigurationRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateCollaboratorGroupConfigurationResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.UpdateCollaboratorGroupConfigurationRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.CollaboratorGroupUpdateRequest, {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/payments/collaborator-group/{id}")(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.UpdateCollaboratorGroupConfigurationResponse$.inboundSchema.parse({
                    ...responseFields$,
                    CollaboratorGroupResponse: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Modify a specific Payment Eligibility Requirement
     *
     * @remarks
     * Update attributes or criteria of an existing payment eligibility requirement using its unique identifier.
     */
    async updatePayment(
        input: operations.UpdatePaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.UpdatePaymentEligibilityRequirementResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.UpdatePaymentEligibilityRequirementRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.PaymentEligibilityUpdateRequest, {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent(
            "/payments/collaborator-settings/payment-eligibility/{id}"
        )(pathParams$);

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result =
                operations.UpdatePaymentEligibilityRequirementResponse$.inboundSchema.parse({
                    ...responseFields$,
                    PaymentEligibility: responseBody,
                });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
