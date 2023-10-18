# @wingspan/payments

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add @wingspan/payments
```

## Yarn

```bash
yarn add @wingspan/payments
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments();

    const res = await sdk.payments.deletePaymentsBankingCardId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations

## [Payments SDK](docs/sdks/payments/README.md)

* [deletePaymentsBankingCardId](docs/sdks/payments/README.md#deletepaymentsbankingcardid) - Remove a card using its unique ID
* [deletePaymentsBankingInstantPayout](docs/sdks/payments/README.md#deletepaymentsbankinginstantpayout) - Deprecated Remove Instant Payout Configuration
* [deletePaymentsBulkCollaboratorBatchBatchId](docs/sdks/payments/README.md#deletepaymentsbulkcollaboratorbatchbatchid) - Remove a Specific Collaborator Batch
* [deletePaymentsBulkPayableBatchBatchId](docs/sdks/payments/README.md#deletepaymentsbulkpayablebatchbatchid) - Remove a Specific Bulk Payable Batch
* [deletePaymentsClientDeductionId](docs/sdks/payments/README.md#deletepaymentsclientdeductionid) - Remove a Client Deduction
* [deletePaymentsCollaboratorDeductionId](docs/sdks/payments/README.md#deletepaymentscollaboratordeductionid) - Erase a Specific Deduction Entry
* [deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](docs/sdks/payments/README.md#deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Remove Eligibility Requirement from Collaborator Group
* [~~deletePaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/payments/README.md#deletepaymentscollaboratorsettingsadditionaldataid) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [deletePaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/payments/README.md#deletepaymentscollaboratorsettingseligibilityrequirementid) - Remove a Specific Eligibility Requirement
* [deletePaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/payments/README.md#deletepaymentscollaboratorsettingspaymenteligibilityid) - Remove a specific Payment Eligibility Requirement
* [deletePaymentsCollaboratorId](docs/sdks/payments/README.md#deletepaymentscollaboratorid) - Remove a Specific Collaborator Record
* [deletePaymentsCustomFieldsId](docs/sdks/payments/README.md#deletepaymentscustomfieldsid) - Remove a Specific Custom Field
* [deletePaymentsInvoiceTemplateId](docs/sdks/payments/README.md#deletepaymentsinvoicetemplateid) - Remove a specific invoice template
* [deletePaymentsInvoiceId](docs/sdks/payments/README.md#deletepaymentsinvoiceid) - Remove Invoice Record by ID
* [deletePaymentsMemberClientId](docs/sdks/payments/README.md#deletepaymentsmemberclientid) - Remove a specific member-client relationship from the system
* [deletePaymentsPayableId](docs/sdks/payments/README.md#deletepaymentspayableid) - Delete Client Payable by Payable ID
* [deletePaymentsPayoutSettingsMemberIdDebitCardId](docs/sdks/payments/README.md#deletepaymentspayoutsettingsmemberiddebitcardid) - Unlink and delete a specific payout debit card from a member's profile
* [getPayments](docs/sdks/payments/README.md#getpayments) - Check Service Status
* [getPaymentsBankingCard](docs/sdks/payments/README.md#getpaymentsbankingcard) - List All Stored Wingspan Wallet Cards
* [getPaymentsBankingCardId](docs/sdks/payments/README.md#getpaymentsbankingcardid) - Retrieve card details by its unique ID
* [getPaymentsBankingInstantPayout](docs/sdks/payments/README.md#getpaymentsbankinginstantpayout) - Deprecated Retrieve Instant Payout Information
* [getPaymentsBankingInstitutionRoutingNumber](docs/sdks/payments/README.md#getpaymentsbankinginstitutionroutingnumber) - Retrieve banking institution details by its routing number
* [getPaymentsBankingStatement](docs/sdks/payments/README.md#getpaymentsbankingstatement) - Retrieve All Bank Statements
* [getPaymentsBankingStatementId](docs/sdks/payments/README.md#getpaymentsbankingstatementid) - Retrieve Specific Bank Statement
* [getPaymentsBankingStatementIdDownload](docs/sdks/payments/README.md#getpaymentsbankingstatementiddownload) - Download a specific bank statement as a PDF
* [getPaymentsBulkCalculation1099Batch](docs/sdks/payments/README.md#getpaymentsbulkcalculation1099batch) - Retrieve all bulk calculation 1099 batches
* [getPaymentsBulkCalculation1099BatchBatchId](docs/sdks/payments/README.md#getpaymentsbulkcalculation1099batchbatchid) - Retrieve specific details of a bulk calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItem](docs/sdks/payments/README.md#getpaymentsbulkcalculation1099batchbatchiditem) - Retrieve all items from a calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#getpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Fetch details of a specific item from a calculation 1099 batch
* [getPaymentsBulkClientBatch](docs/sdks/payments/README.md#getpaymentsbulkclientbatch) - Retrieve all bulk client batches
* [getPaymentsBulkClientBatchBatchId](docs/sdks/payments/README.md#getpaymentsbulkclientbatchbatchid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItem](docs/sdks/payments/README.md#getpaymentsbulkclientbatchbatchiditem) - Retrieve All Items from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#getpaymentsbulkclientbatchbatchiditembatchitemid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkCollaboratorBatch](docs/sdks/payments/README.md#getpaymentsbulkcollaboratorbatch) - Fetch all bulk collaborator batches
* [getPaymentsBulkCollaboratorBatchBatchId](docs/sdks/payments/README.md#getpaymentsbulkcollaboratorbatchbatchid) - Retrieve Details of a Specific Collaborator Batch
* [getPaymentsBulkCollaboratorBatchBatchIdItem](docs/sdks/payments/README.md#getpaymentsbulkcollaboratorbatchbatchiditem) - Retrieve all items from a specific collaborator batch
* [getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#getpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Retrieve details of a specific item from a collaborator batch
* [getPaymentsBulkInvoiceBatch](docs/sdks/payments/README.md#getpaymentsbulkinvoicebatch) - Retrieve All Bulk Invoice Batches
* [getPaymentsBulkInvoiceBatchBatchId](docs/sdks/payments/README.md#getpaymentsbulkinvoicebatchbatchid) - Retrieve details of a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItem](docs/sdks/payments/README.md#getpaymentsbulkinvoicebatchbatchiditem) - Fetch all items from a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#getpaymentsbulkinvoicebatchbatchiditembatchitemid) - Retrieve a specific item from a bulk invoice batch
* [getPaymentsBulkPayableBatch](docs/sdks/payments/README.md#getpaymentsbulkpayablebatch) - Retrieve All Bulk Payable Batches
* [getPaymentsBulkPayableBatchBatchId](docs/sdks/payments/README.md#getpaymentsbulkpayablebatchbatchid) - Retrieve Details of a Specific Bulk Payable Batch
* [getPaymentsBulkPayableBatchBatchIdImportSummary](docs/sdks/payments/README.md#getpaymentsbulkpayablebatchbatchidimportsummary) - Fetch the import summary for a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItem](docs/sdks/payments/README.md#getpaymentsbulkpayablebatchbatchiditem) - Retrieve all items from a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#getpaymentsbulkpayablebatchbatchiditembatchitemid) - Retrieve a Specific Item from a Bulk Payable Batch
* [getPaymentsClientDeduction](docs/sdks/payments/README.md#getpaymentsclientdeduction) - Retrieve All Client Deductions
* [getPaymentsClientDeductionId](docs/sdks/payments/README.md#getpaymentsclientdeductionid) - Fetch Specific Client Deduction Details
* [getPaymentsClientInvoice](docs/sdks/payments/README.md#getpaymentsclientinvoice) - Retrieve All Invoices Generated by a Client
* [getPaymentsClientInvoiceTemplate](docs/sdks/payments/README.md#getpaymentsclientinvoicetemplate) - Retrieve all client-generated invoice templates
* [getPaymentsClientInvoiceTemplateId](docs/sdks/payments/README.md#getpaymentsclientinvoicetemplateid) - Fetch a specific client-generated invoice template by ID
* [getPaymentsClientInvoiceId](docs/sdks/payments/README.md#getpaymentsclientinvoiceid) - Fetch Specific Client-Generated Invoice by ID
* [getPaymentsClientInvoiceInvoiceIdFees](docs/sdks/payments/README.md#getpaymentsclientinvoiceinvoiceidfees) - Retrieve Fees Associated with a Client's Invoice
* [getPaymentsCollaborator](docs/sdks/payments/README.md#getpaymentscollaborator) - Retrieve All Registered Collaborators
* [getPaymentsCollaboratorDeduction](docs/sdks/payments/README.md#getpaymentscollaboratordeduction) - Retrieve All Deductions for Collaborators
* [getPaymentsCollaboratorDeductionId](docs/sdks/payments/README.md#getpaymentscollaboratordeductionid) - Retrieve Specific Deduction Details
* [getPaymentsCollaboratorGroup](docs/sdks/payments/README.md#getpaymentscollaboratorgroup) - Retrieve All Collaborator Groups
* [getPaymentsCollaboratorGroupId](docs/sdks/payments/README.md#getpaymentscollaboratorgroupid) - Retrieve Specific Collaborator Group Configuration
* [~~getPaymentsCollaboratorSettingsAdditionalData~~](docs/sdks/payments/README.md#getpaymentscollaboratorsettingsadditionaldata) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/payments/README.md#getpaymentscollaboratorsettingsadditionaldataid) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [getPaymentsCollaboratorSettingsEligibilityRequirement](docs/sdks/payments/README.md#getpaymentscollaboratorsettingseligibilityrequirement) - Retrieve all Eligibility Requirements
* [getPaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/payments/README.md#getpaymentscollaboratorsettingseligibilityrequirementid) - Retrieve a Specific Eligibility Requirement
* [getPaymentsCollaboratorSettingsPaymentEligibility](docs/sdks/payments/README.md#getpaymentscollaboratorsettingspaymenteligibility) - Retrieve All Payment Eligibility Requirements
* [getPaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/payments/README.md#getpaymentscollaboratorsettingspaymenteligibilityid) - Retrieve details of a specific Payment Eligibility Requirement
* [getPaymentsCollaboratorId](docs/sdks/payments/README.md#getpaymentscollaboratorid) - Retrieve Details of a Specific Collaborator
* [getPaymentsCollaboratorIdDownload1099YearIndex](docs/sdks/payments/README.md#getpaymentscollaboratoriddownload1099yearindex) - Retrieve Form 1099 PDF for a Collaborator by Year and Index
* [getPaymentsCollaboratorIdDownloadW9](docs/sdks/payments/README.md#getpaymentscollaboratoriddownloadw9) - Retrieve Form W9 PDF for a Collaborator
* [getPaymentsCollaboratorIdEvents](docs/sdks/payments/README.md#getpaymentscollaboratoridevents) - Retrieve Events Associated with a Collaborator
* [getPaymentsCustomFields](docs/sdks/payments/README.md#getpaymentscustomfields) - Retrieve All Custom Fields
* [getPaymentsCustomFieldsId](docs/sdks/payments/README.md#getpaymentscustomfieldsid) - Fetch Details of a Specific Custom Field
* [getPaymentsInvoice](docs/sdks/payments/README.md#getpaymentsinvoice) - Retrieve All Member Invoices
* [getPaymentsInvoiceTemplate](docs/sdks/payments/README.md#getpaymentsinvoicetemplate) - Retrieve all available invoice templates
* [getPaymentsInvoiceTemplateId](docs/sdks/payments/README.md#getpaymentsinvoicetemplateid) - Retrieve a specific invoice template by ID
* [getPaymentsInvoiceId](docs/sdks/payments/README.md#getpaymentsinvoiceid) - Fetch Invoice by ID
* [getPaymentsMcc](docs/sdks/payments/README.md#getpaymentsmcc) - Retrieve Merchant Category Codes (MCC)
* [getPaymentsMemberClient](docs/sdks/payments/README.md#getpaymentsmemberclient) - Fetch a list of member and client associations
* [getPaymentsMemberClientId](docs/sdks/payments/README.md#getpaymentsmemberclientid) - Retrieve detailed information of a specific member-client relationship
* [getPaymentsPayable](docs/sdks/payments/README.md#getpaymentspayable) - List All Payables Associated with a Client
* [getPaymentsPayableId](docs/sdks/payments/README.md#getpaymentspayableid) - Retrieve Payable Details by Payable ID
* [getPaymentsPayoutSettingsId](docs/sdks/payments/README.md#getpaymentspayoutsettingsid) - Retrieve payout settings for a specific member
* [getPaymentsPayoutSettingsMemberIdDebitCard](docs/sdks/payments/README.md#getpaymentspayoutsettingsmemberiddebitcard) - Fetch all registered payout debit cards for a member
* [getPaymentsPayoutSettingsMemberIdDebitCardId](docs/sdks/payments/README.md#getpaymentspayoutsettingsmemberiddebitcardid) - Retrieve a specific payout debit card linked to a member
* [getPaymentsPayrollSettingsId](docs/sdks/payments/README.md#getpaymentspayrollsettingsid) - Retrieve Individual Payroll Settings
* [getPaymentsPayrollImmediatePayable](docs/sdks/payments/README.md#getpaymentspayrollimmediatepayable) - Retrieve Approved Payables Ready for Immediate Payroll
* [getPaymentsReportsAgingLineItems](docs/sdks/payments/README.md#getpaymentsreportsaginglineitems) - Obtain Aging Report for Line Items
* [getPaymentsReportsAgingPayables](docs/sdks/payments/README.md#getpaymentsreportsagingpayables) - Retrieve Aging Report for Payables
* [getPaymentsReportsCollaborators](docs/sdks/payments/README.md#getpaymentsreportscollaborators) - Retrieve detailed information on all collaborators
* [getPaymentsReportsCollaboratorsPayablesSummary](docs/sdks/payments/README.md#getpaymentsreportscollaboratorspayablessummary) - Obtain a summarized report of payable amounts for each collaborator
* [getPaymentsReportsPayrollPayrollId](docs/sdks/payments/README.md#getpaymentsreportspayrollpayrollid) - Extract detailed report of payables associated with a particular payroll run
* [getPaymentsServiceBankingMemberIdApplication](docs/sdks/payments/README.md#getpaymentsservicebankingmemberidapplication) - Fetch the application link for setting up a clearing bank account
* [getPaymentsSummaryPayables](docs/sdks/payments/README.md#getpaymentssummarypayables) - Retrieve Summary of All Payables
* [getPaymentsV2Client](docs/sdks/payments/README.md#getpaymentsv2client) - Retrieve All Clients (Version 2)
* [getPaymentsV2ClientClientId](docs/sdks/payments/README.md#getpaymentsv2clientclientid) - Retrieve Specific Client Details (Version 2)
* [getPaymentsV2Collaborator](docs/sdks/payments/README.md#getpaymentsv2collaborator) - Retrieve All Collaborators (Version 2)
* [getPaymentsV2CollaboratorMemberId](docs/sdks/payments/README.md#getpaymentsv2collaboratormemberid) - Retrieve Specific Collaborator Details (Version 2)
* [patchPaymentsBankingCardId](docs/sdks/payments/README.md#patchpaymentsbankingcardid) - Modify card details by its unique ID
* [patchPaymentsBankingCardIdToken](docs/sdks/payments/README.md#patchpaymentsbankingcardidtoken) - Validate verification code to receive a token
* [patchPaymentsBulkCalculation1099BatchBatchId](docs/sdks/payments/README.md#patchpaymentsbulkcalculation1099batchbatchid) - Modify the details of a specific bulk calculation 1099 batch
* [patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#patchpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Revise the attributes of an item in a calculation 1099 batch
* [patchPaymentsBulkClientBatchBatchId](docs/sdks/payments/README.md#patchpaymentsbulkclientbatchbatchid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkClientBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#patchpaymentsbulkclientbatchbatchiditembatchitemid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkCollaboratorBatchBatchId](docs/sdks/payments/README.md#patchpaymentsbulkcollaboratorbatchbatchid) - Modify Details of a Bulk Collaborator Batch
* [patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#patchpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Modify the details of a specific item within a collaborator batch
* [patchPaymentsBulkInvoiceBatchBatchId](docs/sdks/payments/README.md#patchpaymentsbulkinvoicebatchbatchid) - Modify the details of a specific bulk invoice batch
* [patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#patchpaymentsbulkinvoicebatchbatchiditembatchitemid) - Modify a specific item within a bulk invoice batch
* [patchPaymentsBulkPayableBatchBatchId](docs/sdks/payments/README.md#patchpaymentsbulkpayablebatchbatchid) - Modify a Specific Bulk Payable Batch
* [patchPaymentsBulkPayableBatchBatchIdItemBatchItemId](docs/sdks/payments/README.md#patchpaymentsbulkpayablebatchbatchiditembatchitemid) - Modify a Specific Item in a Bulk Payable Batch
* [patchPaymentsClientDeductionId](docs/sdks/payments/README.md#patchpaymentsclientdeductionid) - Modify a Client Deduction
* [patchPaymentsClientInvoiceTemplateId](docs/sdks/payments/README.md#patchpaymentsclientinvoicetemplateid) - Modify a client-generated invoice template
* [patchPaymentsClientInvoiceId](docs/sdks/payments/README.md#patchpaymentsclientinvoiceid) - Modify an Existing Client-Generated Invoice
* [patchPaymentsCollaboratorDeductionId](docs/sdks/payments/README.md#patchpaymentscollaboratordeductionid) - Modify Details of a Specific Deduction
* [patchPaymentsCollaboratorGroupId](docs/sdks/payments/README.md#patchpaymentscollaboratorgroupid) - Modify Collaborator Group Configuration
* [patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](docs/sdks/payments/README.md#patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Modify Eligibility Requirement for Collaborator Group
* [~~patchPaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/payments/README.md#patchpaymentscollaboratorsettingsadditionaldataid) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [patchPaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/payments/README.md#patchpaymentscollaboratorsettingseligibilityrequirementid) - Modify a Specific Eligibility Requirement
* [patchPaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/payments/README.md#patchpaymentscollaboratorsettingspaymenteligibilityid) - Modify a specific Payment Eligibility Requirement
* [patchPaymentsCollaboratorId](docs/sdks/payments/README.md#patchpaymentscollaboratorid) - Modify Collaborator Details
* [patchPaymentsCollaboratorIdAddGroupGroupId](docs/sdks/payments/README.md#patchpaymentscollaboratoridaddgroupgroupid) - Associate Collaborator with a Specific Group
* [patchPaymentsCollaboratorIdRemoveGroupGroupId](docs/sdks/payments/README.md#patchpaymentscollaboratoridremovegroupgroupid) - Disassociate Collaborator from a Specific Group
* [patchPaymentsCustomFieldsId](docs/sdks/payments/README.md#patchpaymentscustomfieldsid) - Modify Details of a Specific Custom Field
* [patchPaymentsInvoiceTemplateId](docs/sdks/payments/README.md#patchpaymentsinvoicetemplateid) - Modify details of an existing invoice template
* [patchPaymentsInvoiceId](docs/sdks/payments/README.md#patchpaymentsinvoiceid) - Modify Existing Invoice Details
* [patchPaymentsMemberClientId](docs/sdks/payments/README.md#patchpaymentsmemberclientid) - Update information of a specific member-client relationship
* [patchPaymentsPayableId](docs/sdks/payments/README.md#patchpaymentspayableid) - Update Client Payable Information by Payable ID
* [patchPaymentsPayoutSettingsId](docs/sdks/payments/README.md#patchpaymentspayoutsettingsid) - Modify and update payout settings for a specific member
* [patchPaymentsPayrollSettingsId](docs/sdks/payments/README.md#patchpaymentspayrollsettingsid) - Modify Existing Payroll Settings
* [postPaymentsBankingCard](docs/sdks/payments/README.md#postpaymentsbankingcard) - Register a New  Wingspan Wallet Card
* [postPaymentsBankingCardIdToken](docs/sdks/payments/README.md#postpaymentsbankingcardidtoken) - Request a verification code for card authentication
* [postPaymentsBankingInstantPayout](docs/sdks/payments/README.md#postpaymentsbankinginstantpayout) - Deprecated Set Up Instant Payout Configuration
* [postPaymentsBulkCalculation1099Batch](docs/sdks/payments/README.md#postpaymentsbulkcalculation1099batch) - Initialize a new batch for bulk calculation 1099
* [postPaymentsBulkCalculation1099BatchBatchIdItem](docs/sdks/payments/README.md#postpaymentsbulkcalculation1099batchbatchiditem) - Add a new item to a calculation 1099 batch
* [postPaymentsBulkClientBatch](docs/sdks/payments/README.md#postpaymentsbulkclientbatch) - Create a new bulk client batch
* [postPaymentsBulkClientBatchBatchIdItem](docs/sdks/payments/README.md#postpaymentsbulkclientbatchbatchiditem) - Add a New Item to a Client Batch
* [postPaymentsBulkCollaboratorBatch](docs/sdks/payments/README.md#postpaymentsbulkcollaboratorbatch) - Initiate a new bulk collaborator batch.
* [postPaymentsBulkCollaboratorBatchBatchIdItem](docs/sdks/payments/README.md#postpaymentsbulkcollaboratorbatchbatchiditem) - Append a new item to a specific collaborator batch
* [postPaymentsBulkInvoiceBatch](docs/sdks/payments/README.md#postpaymentsbulkinvoicebatch) - Initiate a New Bulk Invoice Batch
* [postPaymentsBulkInvoiceBatchBatchIdItem](docs/sdks/payments/README.md#postpaymentsbulkinvoicebatchbatchiditem) - Add a new item to a specific bulk invoice batch
* [postPaymentsBulkPayableBatch](docs/sdks/payments/README.md#postpaymentsbulkpayablebatch) - Initiate a New Bulk Payable Batch
* [postPaymentsBulkPayableBatchBatchIdItem](docs/sdks/payments/README.md#postpaymentsbulkpayablebatchbatchiditem) - Add a new item to a specific bulk payable batch
* [postPaymentsClientDeduction](docs/sdks/payments/README.md#postpaymentsclientdeduction) - Register a New Client Deduction
* [postPaymentsClientInvoice](docs/sdks/payments/README.md#postpaymentsclientinvoice) - Generate a New Invoice on Behalf of the Client
* [postPaymentsClientInvoiceTemplate](docs/sdks/payments/README.md#postpaymentsclientinvoicetemplate) - Create a new client-generated invoice template
* [postPaymentsClientInvoiceInvoiceIdPay](docs/sdks/payments/README.md#postpaymentsclientinvoiceinvoiceidpay) - Execute Payment for a Client-Generated Invoice
* [postPaymentsCollaborator](docs/sdks/payments/README.md#postpaymentscollaborator) - Register a New Collaborator
* [postPaymentsCollaboratorDeduction](docs/sdks/payments/README.md#postpaymentscollaboratordeduction) - Register a New Deduction for a Collaborator
* [postPaymentsCollaboratorGroup](docs/sdks/payments/README.md#postpaymentscollaboratorgroup) - Generate New Collaborator Group
* [~~postPaymentsCollaboratorSettingsAdditionalData~~](docs/sdks/payments/README.md#postpaymentscollaboratorsettingsadditionaldata) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**
* [postPaymentsCollaboratorSettingsEligibilityRequirement](docs/sdks/payments/README.md#postpaymentscollaboratorsettingseligibilityrequirement) - Establish a new Eligibility Requirement
* [postPaymentsCollaboratorSettingsPaymentEligibility](docs/sdks/payments/README.md#postpaymentscollaboratorsettingspaymenteligibility) - Add a New Payment Eligibility Requirement
* [postPaymentsCollaborator1099Calculate](docs/sdks/payments/README.md#postpaymentscollaborator1099calculate) - Determine 1099 Amounts for Collaborators
* [postPaymentsCollaborator1099MarkUndelivered](docs/sdks/payments/README.md#postpaymentscollaborator1099markundelivered) - Indicate a collaborator's 1099 form was returned undelivered
* [postPaymentsCollaborator1099Remail](docs/sdks/payments/README.md#postpaymentscollaborator1099remail) - Request a new mailing of the 1099 form for a collaborator
* [postPaymentsCustomFields](docs/sdks/payments/README.md#postpaymentscustomfields) - Add a New Custom Field
* [postPaymentsInvoice](docs/sdks/payments/README.md#postpaymentsinvoice) - Initiate New Invoice for a Member
* [postPaymentsInvoiceTemplate](docs/sdks/payments/README.md#postpaymentsinvoicetemplate) - Create a new invoice template
* [postPaymentsInvoiceTestCreate](docs/sdks/payments/README.md#postpaymentsinvoicetestcreate) - Generate Test Invoice for a Client
* [postPaymentsInvoiceInvoiceIdGenerate](docs/sdks/payments/README.md#postpaymentsinvoiceinvoiceidgenerate) - Generate a PDF for a specific invoice
* [postPaymentsInvoiceInvoiceIdSend](docs/sdks/payments/README.md#postpaymentsinvoiceinvoiceidsend) - Send an invoice by email
* [postPaymentsMemberClient](docs/sdks/payments/README.md#postpaymentsmemberclient) - Establish a new association between a member and client
* [postPaymentsPayApproved](docs/sdks/payments/README.md#postpaymentspayapproved) - Execute Approved Payroll Transactions
* [postPaymentsPayable](docs/sdks/payments/README.md#postpaymentspayable) - Create a New Payable for a Member on Behalf of a Client
* [postPaymentsPayoutSettingsMemberIdDebitCard](docs/sdks/payments/README.md#postpaymentspayoutsettingsmemberiddebitcard) - Register a new payout debit card for a member
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
