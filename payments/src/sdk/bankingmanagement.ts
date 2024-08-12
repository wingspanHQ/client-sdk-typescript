/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankingManagementCreate } from "../funcs/bankingManagementCreate.js";
import { bankingManagementDelete } from "../funcs/bankingManagementDelete.js";
import { bankingManagementDownload } from "../funcs/bankingManagementDownload.js";
import { bankingManagementGet } from "../funcs/bankingManagementGet.js";
import { bankingManagementGetApplicationLink } from "../funcs/bankingManagementGetApplicationLink.js";
import { bankingManagementGetDebitCard } from "../funcs/bankingManagementGetDebitCard.js";
import { bankingManagementGetInstitution } from "../funcs/bankingManagementGetInstitution.js";
import { bankingManagementGetPayoutSetting } from "../funcs/bankingManagementGetPayoutSetting.js";
import { bankingManagementList } from "../funcs/bankingManagementList.js";
import { bankingManagementListStatements } from "../funcs/bankingManagementListStatements.js";
import { bankingManagementUpdate } from "../funcs/bankingManagementUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class BankingManagement extends ClientSDK {
    /**
     * Register a new payout debit card for a member
     *
     * @remarks
     * Allows the addition of a new debit card to a member's profile for payout transactions.
     */
    async create(
        request: operations.CreateDebitCardRequest,
        options?: RequestOptions
    ): Promise<operations.CreateDebitCardResponse> {
        return unwrapAsync(bankingManagementCreate(this, request, options));
    }

    /**
     * Unlink and delete a specific payout debit card from a member's profile
     *
     * @remarks
     * Initiates a process to remove and permanently delete a specific debit card from a member's payout settings.
     */
    async delete(
        request: operations.DeleteDebitCardRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteDebitCardResponse> {
        return unwrapAsync(bankingManagementDelete(this, request, options));
    }

    /**
     * Download a specific bank statement as a PDF
     *
     * @remarks
     * Retrieve and download the specified bank statement in PDF format using the provided unique identifier.
     */
    async download(
        request: operations.DownloadBankStatementAsPDFRequest,
        options?: RequestOptions
    ): Promise<operations.DownloadBankStatementAsPDFResponse> {
        return unwrapAsync(bankingManagementDownload(this, request, options));
    }

    /**
     * Retrieve Specific Bank Statement
     *
     * @remarks
     * Fetch details of a specific bank statement using its unique identifier, providing a detailed view of its transactions.
     */
    async get(
        request: operations.GetBankStatementRequest,
        options?: RequestOptions
    ): Promise<operations.GetBankStatementResponse> {
        return unwrapAsync(bankingManagementGet(this, request, options));
    }

    /**
     * Fetch the application link for setting up a clearing bank account
     *
     * @remarks
     * Get the application link required for a member to initiate the creation of a clearing bank account.
     */
    async getApplicationLink(
        request: operations.GetApplicationLinkRequest,
        options?: RequestOptions
    ): Promise<operations.GetApplicationLinkResponse> {
        return unwrapAsync(bankingManagementGetApplicationLink(this, request, options));
    }

    /**
     * Retrieve a specific payout debit card linked to a member
     *
     * @remarks
     * Fetches detailed information of a specific debit card linked to a member's profile for payout purposes.
     */
    async getDebitCard(
        request: operations.GetDebitCardRequest,
        options?: RequestOptions
    ): Promise<operations.GetDebitCardResponse> {
        return unwrapAsync(bankingManagementGetDebitCard(this, request, options));
    }

    /**
     * Retrieve banking institution details by its routing number
     *
     * @remarks
     * Fetches comprehensive information about a banking institution based on the provided routing number.
     */
    async getInstitution(
        request: operations.GetBankingInstitutionRequest,
        options?: RequestOptions
    ): Promise<operations.GetBankingInstitutionResponse> {
        return unwrapAsync(bankingManagementGetInstitution(this, request, options));
    }

    /**
     * Retrieve payout settings for a specific member
     *
     * @remarks
     * Fetches the payout configuration, including linked debit cards and payout preferences, for a specific member.
     */
    async getPayoutSetting(
        request: operations.GetPayoutSettingRequest,
        options?: RequestOptions
    ): Promise<operations.GetPayoutSettingResponse> {
        return unwrapAsync(bankingManagementGetPayoutSetting(this, request, options));
    }

    /**
     * Fetch all registered payout debit cards for a member
     *
     * @remarks
     * Retrieves a list of all debit cards linked to a member's profile for payout purposes.
     */
    async list(
        request: operations.ListDebitCardsRequest,
        options?: RequestOptions
    ): Promise<operations.ListDebitCardsResponse> {
        return unwrapAsync(bankingManagementList(this, request, options));
    }

    /**
     * Retrieve All Bank Statements
     *
     * @remarks
     * Fetch a comprehensive list of all bank statements available in the system, providing an overview of financial transactions.
     */
    async listStatements(options?: RequestOptions): Promise<operations.ListBankStatementsResponse> {
        return unwrapAsync(bankingManagementListStatements(this, options));
    }

    /**
     * Modify and update payout settings for a specific member
     *
     * @remarks
     * Allows adjustments and updates to a member's payout configuration, including changing linked debit cards and adjusting payout preferences.
     */
    async update(
        request: operations.UpdatePayoutSettingRequest,
        options?: RequestOptions
    ): Promise<operations.UpdatePayoutSettingResponse> {
        return unwrapAsync(bankingManagementUpdate(this, request, options));
    }
}
