/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentSigningAndEligibilityCreate } from "../funcs/documentSigningAndEligibilityCreate.js";
import { documentSigningAndEligibilityDelete } from "../funcs/documentSigningAndEligibilityDelete.js";
import { documentSigningAndEligibilityDeleteCollaboratorGroup } from "../funcs/documentSigningAndEligibilityDeleteCollaboratorGroup.js";
import { documentSigningAndEligibilityDeletePayment } from "../funcs/documentSigningAndEligibilityDeletePayment.js";
import { documentSigningAndEligibilityEstablish } from "../funcs/documentSigningAndEligibilityEstablish.js";
import { documentSigningAndEligibilityGet } from "../funcs/documentSigningAndEligibilityGet.js";
import { documentSigningAndEligibilityGetGroupConfiguration } from "../funcs/documentSigningAndEligibilityGetGroupConfiguration.js";
import { documentSigningAndEligibilityGetPayment } from "../funcs/documentSigningAndEligibilityGetPayment.js";
import { documentSigningAndEligibilityList } from "../funcs/documentSigningAndEligibilityList.js";
import { documentSigningAndEligibilityListPayment } from "../funcs/documentSigningAndEligibilityListPayment.js";
import { documentSigningAndEligibilityUpdate } from "../funcs/documentSigningAndEligibilityUpdate.js";
import { documentSigningAndEligibilityUpdateCollaboratorGroup } from "../funcs/documentSigningAndEligibilityUpdateCollaboratorGroup.js";
import { documentSigningAndEligibilityUpdateGroupConfiguration } from "../funcs/documentSigningAndEligibilityUpdateGroupConfiguration.js";
import { documentSigningAndEligibilityUpdatePayment } from "../funcs/documentSigningAndEligibilityUpdatePayment.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class DocumentSigningAndEligibility extends ClientSDK {
    /**
     * Add a New Payment Eligibility Requirement
     *
     * @remarks
     * Define a new payment eligibility requirement for collaborators in the system.
     */
    async create(
        request?: shared.PaymentEligibility | undefined,
        options?: RequestOptions
    ): Promise<operations.CreatePaymentEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityCreate(this, request, options));
    }

    /**
     * Remove a Specific Eligibility Requirement
     *
     * @remarks
     * Delete an eligibility requirement from the system based on its unique identifier.
     */
    async delete(
        request: operations.DeleteEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityDelete(this, request, options));
    }

    /**
     * Remove Eligibility Requirement from Collaborator Group
     *
     * @remarks
     * Delete a specific eligibility requirement from the designated collaborator group.
     */
    async deleteCollaboratorGroup(
        request: operations.DeleteEligibilityRequirementCollaboratorGroupRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteEligibilityRequirementCollaboratorGroupResponse> {
        return unwrapAsync(
            documentSigningAndEligibilityDeleteCollaboratorGroup(this, request, options)
        );
    }

    /**
     * Remove a specific Payment Eligibility Requirement
     *
     * @remarks
     * Delete an existing payment eligibility requirement based on its unique identifier, removing associated criteria for a member's payment eligibility.
     */
    async deletePayment(
        request: operations.DeletePaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.DeletePaymentEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityDeletePayment(this, request, options));
    }

    /**
     * Establish a new Eligibility Requirement
     *
     * @remarks
     * Define and create a new eligibility requirement for collaborators.
     */
    async establish(
        request?: shared.EligibilityRequirementCreateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.EstablishEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityEstablish(this, request, options));
    }

    /**
     * Retrieve a Specific Eligibility Requirement
     *
     * @remarks
     * Fetch details for a given eligibility requirement based on its unique identifier.
     */
    async get(
        request: operations.GetEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.GetEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityGet(this, request, options));
    }

    /**
     * Retrieve Specific Collaborator Group Configuration
     *
     * @remarks
     * Fetch detailed configuration and attributes associated with a specific collaborator group.
     */
    async getGroupConfiguration(
        request: operations.GetCollaboratorGroupConfigurationRequest,
        options?: RequestOptions
    ): Promise<operations.GetCollaboratorGroupConfigurationResponse> {
        return unwrapAsync(
            documentSigningAndEligibilityGetGroupConfiguration(this, request, options)
        );
    }

    /**
     * Retrieve details of a specific Payment Eligibility Requirement
     *
     * @remarks
     * Fetch detailed information about a particular payment eligibility requirement using its unique identifier.
     */
    async getPayment(
        request: operations.GetPaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.GetPaymentEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityGetPayment(this, request, options));
    }

    /**
     * Retrieve all Eligibility Requirements
     *
     * @remarks
     * List and display all the set eligibility requirements for collaborators.
     */
    async list(options?: RequestOptions): Promise<operations.ListEligibilityRequirementsResponse> {
        return unwrapAsync(documentSigningAndEligibilityList(this, options));
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
        return unwrapAsync(documentSigningAndEligibilityListPayment(this, options));
    }

    /**
     * Modify a Specific Eligibility Requirement
     *
     * @remarks
     * Update specific details or attributes of an existing eligibility requirement.
     */
    async update(
        request: operations.UpdateEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityUpdate(this, request, options));
    }

    /**
     * Modify Eligibility Requirement for Collaborator Group
     *
     * @remarks
     * Update details or attributes of a specific eligibility requirement linked to a collaborator group.
     */
    async updateCollaboratorGroup(
        request: operations.UpdateEligibilityRequirementCollaboratorGroupRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateEligibilityRequirementCollaboratorGroupResponse> {
        return unwrapAsync(
            documentSigningAndEligibilityUpdateCollaboratorGroup(this, request, options)
        );
    }

    /**
     * Modify Collaborator Group Configuration
     *
     * @remarks
     * Update specific attributes or configuration details of an existing collaborator group.
     */
    async updateGroupConfiguration(
        request: operations.UpdateCollaboratorGroupConfigurationRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateCollaboratorGroupConfigurationResponse> {
        return unwrapAsync(
            documentSigningAndEligibilityUpdateGroupConfiguration(this, request, options)
        );
    }

    /**
     * Modify a specific Payment Eligibility Requirement
     *
     * @remarks
     * Update attributes or criteria of an existing payment eligibility requirement using its unique identifier.
     */
    async updatePayment(
        request: operations.UpdatePaymentEligibilityRequirementRequest,
        options?: RequestOptions
    ): Promise<operations.UpdatePaymentEligibilityRequirementResponse> {
        return unwrapAsync(documentSigningAndEligibilityUpdatePayment(this, request, options));
    }
}
