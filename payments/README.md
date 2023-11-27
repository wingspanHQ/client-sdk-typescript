# @wingspan/payments

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/payments
```

### Yarn

```bash
yarn add @wingspan/payments
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [serviceSettings](docs/sdks/servicesettings/README.md)

* [getPayments](docs/sdks/servicesettings/README.md#getpayments) - Check Service Status

### [wingspanWallet](docs/sdks/wingspanwallet/README.md)

* [deletePaymentsBankingCardId](docs/sdks/wingspanwallet/README.md#deletepaymentsbankingcardid) - Remove a card using its unique ID
* [getPaymentsBankingCard](docs/sdks/wingspanwallet/README.md#getpaymentsbankingcard) - List All Stored Wingspan Wallet Cards
* [getPaymentsBankingCardId](docs/sdks/wingspanwallet/README.md#getpaymentsbankingcardid) - Retrieve card details by its unique ID
* [patchPaymentsBankingCardId](docs/sdks/wingspanwallet/README.md#patchpaymentsbankingcardid) - Modify card details by its unique ID
* [patchPaymentsBankingCardIdToken](docs/sdks/wingspanwallet/README.md#patchpaymentsbankingcardidtoken) - Validate verification code to receive a token
* [postPaymentsBankingCard](docs/sdks/wingspanwallet/README.md#postpaymentsbankingcard) - Register a New  Wingspan Wallet Card
* [postPaymentsBankingCardIdToken](docs/sdks/wingspanwallet/README.md#postpaymentsbankingcardidtoken) - Request a verification code for card authentication

### [deprecated](docs/sdks/deprecated/README.md)

* [deletePaymentsBankingInstantPayout](docs/sdks/deprecated/README.md#deletepaymentsbankinginstantpayout) - Deprecated Remove Instant Payout Configuration
* [~~deletePaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/deprecated/README.md#deletepaymentscollaboratorsettingsadditionaldataid) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [getPaymentsBankingInstantPayout](docs/sdks/deprecated/README.md#getpaymentsbankinginstantpayout) - Deprecated Retrieve Instant Payout Information
* [~~getPaymentsCollaboratorSettingsAdditionalData~~](docs/sdks/deprecated/README.md#getpaymentscollaboratorsettingsadditionaldata) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/deprecated/README.md#getpaymentscollaboratorsettingsadditionaldataid) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [~~patchPaymentsCollaboratorSettingsAdditionalDataId~~](docs/sdks/deprecated/README.md#patchpaymentscollaboratorsettingsadditionaldataid) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [postPaymentsBankingInstantPayout](docs/sdks/deprecated/README.md#postpaymentsbankinginstantpayout) - Deprecated Set Up Instant Payout Configuration
* [~~postPaymentsCollaboratorSettingsAdditionalData~~](docs/sdks/deprecated/README.md#postpaymentscollaboratorsettingsadditionaldata) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**

### [bankingManagement](docs/sdks/bankingmanagement/README.md)

* [deletePaymentsPayoutSettingsMemberIdDebitCardId](docs/sdks/bankingmanagement/README.md#deletepaymentspayoutsettingsmemberiddebitcardid) - Unlink and delete a specific payout debit card from a member's profile
* [getPaymentsBankingInstitutionRoutingNumber](docs/sdks/bankingmanagement/README.md#getpaymentsbankinginstitutionroutingnumber) - Retrieve banking institution details by its routing number
* [getPaymentsBankingStatement](docs/sdks/bankingmanagement/README.md#getpaymentsbankingstatement) - Retrieve All Bank Statements
* [getPaymentsBankingStatementId](docs/sdks/bankingmanagement/README.md#getpaymentsbankingstatementid) - Retrieve Specific Bank Statement
* [getPaymentsBankingStatementIdDownload](docs/sdks/bankingmanagement/README.md#getpaymentsbankingstatementiddownload) - Download a specific bank statement as a PDF
* [getPaymentsPayoutSettingsId](docs/sdks/bankingmanagement/README.md#getpaymentspayoutsettingsid) - Retrieve payout settings for a specific member
* [getPaymentsPayoutSettingsMemberIdDebitCard](docs/sdks/bankingmanagement/README.md#getpaymentspayoutsettingsmemberiddebitcard) - Fetch all registered payout debit cards for a member
* [getPaymentsPayoutSettingsMemberIdDebitCardId](docs/sdks/bankingmanagement/README.md#getpaymentspayoutsettingsmemberiddebitcardid) - Retrieve a specific payout debit card linked to a member
* [getPaymentsServiceBankingMemberIdApplication](docs/sdks/bankingmanagement/README.md#getpaymentsservicebankingmemberidapplication) - Fetch the application link for setting up a clearing bank account
* [patchPaymentsPayoutSettingsId](docs/sdks/bankingmanagement/README.md#patchpaymentspayoutsettingsid) - Modify and update payout settings for a specific member
* [postPaymentsPayoutSettingsMemberIdDebitCard](docs/sdks/bankingmanagement/README.md#postpaymentspayoutsettingsmemberiddebitcard) - Register a new payout debit card for a member

### [oneThousandAndNinetyNineOperations](docs/sdks/onethousandandninetynineoperations/README.md)

* [getPaymentsBulkCalculation1099Batch](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentsbulkcalculation1099batch) - Retrieve all bulk calculation 1099 batches
* [getPaymentsBulkCalculation1099BatchBatchId](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentsbulkcalculation1099batchbatchid) - Retrieve specific details of a bulk calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItem](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentsbulkcalculation1099batchbatchiditem) - Retrieve all items from a calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Fetch details of a specific item from a calculation 1099 batch
* [getPaymentsCollaboratorIdDownload1099YearIndex](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentscollaboratoriddownload1099yearindex) - Retrieve Form 1099 PDF for a Collaborator by Year and Index
* [getPaymentsCollaboratorIdDownloadW9](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentscollaboratoriddownloadw9) - Retrieve Form W9 PDF for a Collaborator
* [getPaymentsTaxForm](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentstaxform) - Fetch 1099 tax forms.
* [getPaymentsTaxFormTaxFormId](docs/sdks/onethousandandninetynineoperations/README.md#getpaymentstaxformtaxformid) - Fetch tax form.
* [patchPaymentsBulkCalculation1099BatchBatchId](docs/sdks/onethousandandninetynineoperations/README.md#patchpaymentsbulkcalculation1099batchbatchid) - Modify the details of a specific bulk calculation 1099 batch
* [patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](docs/sdks/onethousandandninetynineoperations/README.md#patchpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Revise the attributes of an item in a calculation 1099 batch
* [postPaymentsBulkCalculation1099Batch](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentsbulkcalculation1099batch) - Initialize a new batch for bulk calculation 1099
* [postPaymentsBulkCalculation1099BatchBatchIdItem](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentsbulkcalculation1099batchbatchiditem) - Add a new item to a calculation 1099 batch
* [postPaymentsCollaborator1099Calculate](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentscollaborator1099calculate) - Determine 1099 Amounts for Collaborators
* [postPaymentsCollaborator1099MarkUndelivered](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentscollaborator1099markundelivered) - Indicate a collaborator's 1099 form was returned undelivered
* [postPaymentsCollaborator1099Remail](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentscollaborator1099remail) - Request a new mailing of the 1099 form for a collaborator
* [postPaymentsTaxFormSubmitW9](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentstaxformsubmitw9) - Submit Payee W9 Information.
* [postPaymentsTaxFormVerifyTin](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentstaxformverifytin) - Submit Payee TIN for verification
* [postPaymentsTaxFormTaxFormIdVerifyIdentity](docs/sdks/onethousandandninetynineoperations/README.md#postpaymentstaxformtaxformidverifyidentity) - Provide Recipient Proof of Identity

### [bulkOperations](docs/sdks/bulkoperations/README.md)

* [deletePaymentsBulkCollaboratorBatchBatchId](docs/sdks/bulkoperations/README.md#deletepaymentsbulkcollaboratorbatchbatchid) - Remove a Specific Collaborator Batch
* [deletePaymentsBulkPayableBatchBatchId](docs/sdks/bulkoperations/README.md#deletepaymentsbulkpayablebatchbatchid) - Remove a Specific Bulk Payable Batch
* [getPaymentsBulkClientBatch](docs/sdks/bulkoperations/README.md#getpaymentsbulkclientbatch) - Retrieve all bulk client batches
* [getPaymentsBulkClientBatchBatchId](docs/sdks/bulkoperations/README.md#getpaymentsbulkclientbatchbatchid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItem](docs/sdks/bulkoperations/README.md#getpaymentsbulkclientbatchbatchiditem) - Retrieve All Items from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#getpaymentsbulkclientbatchbatchiditembatchitemid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkCollaboratorBatch](docs/sdks/bulkoperations/README.md#getpaymentsbulkcollaboratorbatch) - Fetch all bulk collaborator batches
* [getPaymentsBulkCollaboratorBatchBatchId](docs/sdks/bulkoperations/README.md#getpaymentsbulkcollaboratorbatchbatchid) - Retrieve Details of a Specific Collaborator Batch
* [getPaymentsBulkCollaboratorBatchBatchIdItem](docs/sdks/bulkoperations/README.md#getpaymentsbulkcollaboratorbatchbatchiditem) - Retrieve all items from a specific collaborator batch
* [getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#getpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Retrieve details of a specific item from a collaborator batch
* [getPaymentsBulkInvoiceBatch](docs/sdks/bulkoperations/README.md#getpaymentsbulkinvoicebatch) - Retrieve All Bulk Invoice Batches
* [getPaymentsBulkInvoiceBatchBatchId](docs/sdks/bulkoperations/README.md#getpaymentsbulkinvoicebatchbatchid) - Retrieve details of a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItem](docs/sdks/bulkoperations/README.md#getpaymentsbulkinvoicebatchbatchiditem) - Fetch all items from a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#getpaymentsbulkinvoicebatchbatchiditembatchitemid) - Retrieve a specific item from a bulk invoice batch
* [getPaymentsBulkPayableBatch](docs/sdks/bulkoperations/README.md#getpaymentsbulkpayablebatch) - Retrieve All Bulk Payable Batches
* [getPaymentsBulkPayableBatchBatchId](docs/sdks/bulkoperations/README.md#getpaymentsbulkpayablebatchbatchid) - Retrieve Details of a Specific Bulk Payable Batch
* [getPaymentsBulkPayableBatchBatchIdImportSummary](docs/sdks/bulkoperations/README.md#getpaymentsbulkpayablebatchbatchidimportsummary) - Fetch the import summary for a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItem](docs/sdks/bulkoperations/README.md#getpaymentsbulkpayablebatchbatchiditem) - Retrieve all items from a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#getpaymentsbulkpayablebatchbatchiditembatchitemid) - Retrieve a Specific Item from a Bulk Payable Batch
* [patchPaymentsBulkClientBatchBatchId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkclientbatchbatchid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkClientBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkclientbatchbatchiditembatchitemid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkCollaboratorBatchBatchId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkcollaboratorbatchbatchid) - Modify Details of a Bulk Collaborator Batch
* [patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Modify the details of a specific item within a collaborator batch
* [patchPaymentsBulkInvoiceBatchBatchId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkinvoicebatchbatchid) - Modify the details of a specific bulk invoice batch
* [patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkinvoicebatchbatchiditembatchitemid) - Modify a specific item within a bulk invoice batch
* [patchPaymentsBulkPayableBatchBatchId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkpayablebatchbatchid) - Modify a Specific Bulk Payable Batch
* [patchPaymentsBulkPayableBatchBatchIdItemBatchItemId](docs/sdks/bulkoperations/README.md#patchpaymentsbulkpayablebatchbatchiditembatchitemid) - Modify a Specific Item in a Bulk Payable Batch
* [postPaymentsBulkClientBatch](docs/sdks/bulkoperations/README.md#postpaymentsbulkclientbatch) - Create a new bulk client batch
* [postPaymentsBulkClientBatchBatchIdItem](docs/sdks/bulkoperations/README.md#postpaymentsbulkclientbatchbatchiditem) - Add a New Item to a Client Batch
* [postPaymentsBulkCollaboratorBatch](docs/sdks/bulkoperations/README.md#postpaymentsbulkcollaboratorbatch) - Initiate a new bulk collaborator batch.
* [postPaymentsBulkCollaboratorBatchBatchIdItem](docs/sdks/bulkoperations/README.md#postpaymentsbulkcollaboratorbatchbatchiditem) - Append a new item to a specific collaborator batch
* [postPaymentsBulkInvoiceBatch](docs/sdks/bulkoperations/README.md#postpaymentsbulkinvoicebatch) - Initiate a New Bulk Invoice Batch
* [postPaymentsBulkInvoiceBatchBatchIdItem](docs/sdks/bulkoperations/README.md#postpaymentsbulkinvoicebatchbatchiditem) - Add a new item to a specific bulk invoice batch
* [postPaymentsBulkPayableBatch](docs/sdks/bulkoperations/README.md#postpaymentsbulkpayablebatch) - Initiate a New Bulk Payable Batch
* [postPaymentsBulkPayableBatchBatchIdItem](docs/sdks/bulkoperations/README.md#postpaymentsbulkpayablebatchbatchiditem) - Add a new item to a specific bulk payable batch

### [clientManagement](docs/sdks/clientmanagement/README.md)

* [deletePaymentsClientDeductionId](docs/sdks/clientmanagement/README.md#deletepaymentsclientdeductionid) - Remove a Client Deduction
* [deletePaymentsMemberClientId](docs/sdks/clientmanagement/README.md#deletepaymentsmemberclientid) - Remove a specific member-client relationship from the system
* [getPaymentsClientDeduction](docs/sdks/clientmanagement/README.md#getpaymentsclientdeduction) - Retrieve All Client Deductions
* [getPaymentsClientDeductionId](docs/sdks/clientmanagement/README.md#getpaymentsclientdeductionid) - Fetch Specific Client Deduction Details
* [getPaymentsMemberClient](docs/sdks/clientmanagement/README.md#getpaymentsmemberclient) - Fetch a list of member and client associations
* [getPaymentsMemberClientId](docs/sdks/clientmanagement/README.md#getpaymentsmemberclientid) - Retrieve detailed information of a specific member-client relationship
* [getPaymentsV2Client](docs/sdks/clientmanagement/README.md#getpaymentsv2client) - Retrieve All Clients (Version 2)
* [getPaymentsV2ClientClientId](docs/sdks/clientmanagement/README.md#getpaymentsv2clientclientid) - Retrieve Specific Client Details (Version 2)
* [patchPaymentsClientDeductionId](docs/sdks/clientmanagement/README.md#patchpaymentsclientdeductionid) - Modify a Client Deduction
* [patchPaymentsMemberClientId](docs/sdks/clientmanagement/README.md#patchpaymentsmemberclientid) - Update information of a specific member-client relationship
* [postPaymentsClientDeduction](docs/sdks/clientmanagement/README.md#postpaymentsclientdeduction) - Register a New Client Deduction
* [postPaymentsMemberClient](docs/sdks/clientmanagement/README.md#postpaymentsmemberclient) - Establish a new association between a member and client

### [invoiceManagement](docs/sdks/invoicemanagement/README.md)

* [deletePaymentsInvoiceTemplateId](docs/sdks/invoicemanagement/README.md#deletepaymentsinvoicetemplateid) - Remove a specific invoice template
* [deletePaymentsInvoiceId](docs/sdks/invoicemanagement/README.md#deletepaymentsinvoiceid) - Remove Invoice Record by ID
* [getPaymentsClientInvoice](docs/sdks/invoicemanagement/README.md#getpaymentsclientinvoice) - Retrieve All Invoices Generated by a Client
* [getPaymentsClientInvoiceTemplate](docs/sdks/invoicemanagement/README.md#getpaymentsclientinvoicetemplate) - Retrieve all client-generated invoice templates
* [getPaymentsClientInvoiceTemplateId](docs/sdks/invoicemanagement/README.md#getpaymentsclientinvoicetemplateid) - Fetch a specific client-generated invoice template by ID
* [getPaymentsClientInvoiceId](docs/sdks/invoicemanagement/README.md#getpaymentsclientinvoiceid) - Fetch Specific Client-Generated Invoice by ID
* [getPaymentsClientInvoiceInvoiceIdFees](docs/sdks/invoicemanagement/README.md#getpaymentsclientinvoiceinvoiceidfees) - Retrieve Fees Associated with a Client's Invoice
* [getPaymentsInvoice](docs/sdks/invoicemanagement/README.md#getpaymentsinvoice) - Retrieve All Member Invoices
* [getPaymentsInvoiceTemplate](docs/sdks/invoicemanagement/README.md#getpaymentsinvoicetemplate) - Retrieve all available invoice templates
* [getPaymentsInvoiceTemplateId](docs/sdks/invoicemanagement/README.md#getpaymentsinvoicetemplateid) - Retrieve a specific invoice template by ID
* [getPaymentsInvoiceId](docs/sdks/invoicemanagement/README.md#getpaymentsinvoiceid) - Fetch Invoice by ID
* [patchPaymentsClientInvoiceTemplateId](docs/sdks/invoicemanagement/README.md#patchpaymentsclientinvoicetemplateid) - Modify a client-generated invoice template
* [patchPaymentsClientInvoiceId](docs/sdks/invoicemanagement/README.md#patchpaymentsclientinvoiceid) - Modify an Existing Client-Generated Invoice
* [patchPaymentsInvoiceTemplateId](docs/sdks/invoicemanagement/README.md#patchpaymentsinvoicetemplateid) - Modify details of an existing invoice template
* [patchPaymentsInvoiceId](docs/sdks/invoicemanagement/README.md#patchpaymentsinvoiceid) - Modify Existing Invoice Details
* [postPaymentsClientInvoice](docs/sdks/invoicemanagement/README.md#postpaymentsclientinvoice) - Generate a New Invoice on Behalf of the Client
* [postPaymentsClientInvoiceTemplate](docs/sdks/invoicemanagement/README.md#postpaymentsclientinvoicetemplate) - Create a new client-generated invoice template
* [postPaymentsClientInvoiceInvoiceIdPay](docs/sdks/invoicemanagement/README.md#postpaymentsclientinvoiceinvoiceidpay) - Execute Payment for a Client-Generated Invoice
* [postPaymentsInvoice](docs/sdks/invoicemanagement/README.md#postpaymentsinvoice) - Initiate New Invoice for a Member
* [postPaymentsInvoiceTemplate](docs/sdks/invoicemanagement/README.md#postpaymentsinvoicetemplate) - Create a new invoice template
* [postPaymentsInvoiceTestCreate](docs/sdks/invoicemanagement/README.md#postpaymentsinvoicetestcreate) - Generate Test Invoice for a Client
* [postPaymentsInvoiceInvoiceIdGenerate](docs/sdks/invoicemanagement/README.md#postpaymentsinvoiceinvoiceidgenerate) - Generate a PDF for a specific invoice
* [postPaymentsInvoiceInvoiceIdSend](docs/sdks/invoicemanagement/README.md#postpaymentsinvoiceinvoiceidsend) - Send an invoice by email

### [collaboratorManagement](docs/sdks/collaboratormanagement/README.md)

* [deletePaymentsCollaboratorDeductionId](docs/sdks/collaboratormanagement/README.md#deletepaymentscollaboratordeductionid) - Erase a Specific Deduction Entry
* [deletePaymentsCollaboratorId](docs/sdks/collaboratormanagement/README.md#deletepaymentscollaboratorid) - Remove a Specific Collaborator Record
* [getPaymentsCollaborator](docs/sdks/collaboratormanagement/README.md#getpaymentscollaborator) - Retrieve All Registered Collaborators
* [getPaymentsCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#getpaymentscollaboratordeduction) - Retrieve All Deductions for Collaborators
* [getPaymentsCollaboratorDeductionId](docs/sdks/collaboratormanagement/README.md#getpaymentscollaboratordeductionid) - Retrieve Specific Deduction Details
* [getPaymentsCollaboratorGroup](docs/sdks/collaboratormanagement/README.md#getpaymentscollaboratorgroup) - Retrieve All Collaborator Groups
* [getPaymentsCollaboratorId](docs/sdks/collaboratormanagement/README.md#getpaymentscollaboratorid) - Retrieve Details of a Specific Collaborator
* [getPaymentsCollaboratorIdEvents](docs/sdks/collaboratormanagement/README.md#getpaymentscollaboratoridevents) - Retrieve Events Associated with a Collaborator
* [getPaymentsV2Collaborator](docs/sdks/collaboratormanagement/README.md#getpaymentsv2collaborator) - Retrieve All Collaborators (Version 2)
* [getPaymentsV2CollaboratorMemberId](docs/sdks/collaboratormanagement/README.md#getpaymentsv2collaboratormemberid) - Retrieve Specific Collaborator Details (Version 2)
* [patchPaymentsCollaboratorDeductionId](docs/sdks/collaboratormanagement/README.md#patchpaymentscollaboratordeductionid) - Modify Details of a Specific Deduction
* [patchPaymentsCollaboratorId](docs/sdks/collaboratormanagement/README.md#patchpaymentscollaboratorid) - Modify Collaborator Details
* [patchPaymentsCollaboratorIdAddGroupGroupId](docs/sdks/collaboratormanagement/README.md#patchpaymentscollaboratoridaddgroupgroupid) - Associate Collaborator with a Specific Group
* [patchPaymentsCollaboratorIdRemoveGroupGroupId](docs/sdks/collaboratormanagement/README.md#patchpaymentscollaboratoridremovegroupgroupid) - Disassociate Collaborator from a Specific Group
* [postPaymentsCollaborator](docs/sdks/collaboratormanagement/README.md#postpaymentscollaborator) - Register a New Collaborator
* [postPaymentsCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#postpaymentscollaboratordeduction) - Register a New Deduction for a Collaborator
* [postPaymentsCollaboratorGroup](docs/sdks/collaboratormanagement/README.md#postpaymentscollaboratorgroup) - Generate New Collaborator Group

### [documentSigningAndEligibility](docs/sdks/documentsigningandeligibility/README.md)

* [deletePaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](docs/sdks/documentsigningandeligibility/README.md#deletepaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Remove Eligibility Requirement from Collaborator Group
* [deletePaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/documentsigningandeligibility/README.md#deletepaymentscollaboratorsettingseligibilityrequirementid) - Remove a Specific Eligibility Requirement
* [deletePaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/documentsigningandeligibility/README.md#deletepaymentscollaboratorsettingspaymenteligibilityid) - Remove a specific Payment Eligibility Requirement
* [getPaymentsCollaboratorGroupId](docs/sdks/documentsigningandeligibility/README.md#getpaymentscollaboratorgroupid) - Retrieve Specific Collaborator Group Configuration
* [getPaymentsCollaboratorSettingsEligibilityRequirement](docs/sdks/documentsigningandeligibility/README.md#getpaymentscollaboratorsettingseligibilityrequirement) - Retrieve all Eligibility Requirements
* [getPaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/documentsigningandeligibility/README.md#getpaymentscollaboratorsettingseligibilityrequirementid) - Retrieve a Specific Eligibility Requirement
* [getPaymentsCollaboratorSettingsPaymentEligibility](docs/sdks/documentsigningandeligibility/README.md#getpaymentscollaboratorsettingspaymenteligibility) - Retrieve All Payment Eligibility Requirements
* [getPaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/documentsigningandeligibility/README.md#getpaymentscollaboratorsettingspaymenteligibilityid) - Retrieve details of a specific Payment Eligibility Requirement
* [patchPaymentsCollaboratorGroupId](docs/sdks/documentsigningandeligibility/README.md#patchpaymentscollaboratorgroupid) - Modify Collaborator Group Configuration
* [patchPaymentsCollaboratorGroupIdEligibilityRequirementEligibilityRequirementId](docs/sdks/documentsigningandeligibility/README.md#patchpaymentscollaboratorgroupideligibilityrequirementeligibilityrequirementid) - Modify Eligibility Requirement for Collaborator Group
* [patchPaymentsCollaboratorSettingsEligibilityRequirementId](docs/sdks/documentsigningandeligibility/README.md#patchpaymentscollaboratorsettingseligibilityrequirementid) - Modify a Specific Eligibility Requirement
* [patchPaymentsCollaboratorSettingsPaymentEligibilityId](docs/sdks/documentsigningandeligibility/README.md#patchpaymentscollaboratorsettingspaymenteligibilityid) - Modify a specific Payment Eligibility Requirement
* [postPaymentsCollaboratorSettingsEligibilityRequirement](docs/sdks/documentsigningandeligibility/README.md#postpaymentscollaboratorsettingseligibilityrequirement) - Establish a new Eligibility Requirement
* [postPaymentsCollaboratorSettingsPaymentEligibility](docs/sdks/documentsigningandeligibility/README.md#postpaymentscollaboratorsettingspaymenteligibility) - Add a New Payment Eligibility Requirement

### [customFieldManagement](docs/sdks/customfieldmanagement/README.md)

* [deletePaymentsCustomFieldsId](docs/sdks/customfieldmanagement/README.md#deletepaymentscustomfieldsid) - Remove a Specific Custom Field
* [getPaymentsCustomFields](docs/sdks/customfieldmanagement/README.md#getpaymentscustomfields) - Retrieve All Custom Fields
* [getPaymentsCustomFieldsId](docs/sdks/customfieldmanagement/README.md#getpaymentscustomfieldsid) - Fetch Details of a Specific Custom Field
* [patchPaymentsCustomFieldsId](docs/sdks/customfieldmanagement/README.md#patchpaymentscustomfieldsid) - Modify Details of a Specific Custom Field
* [postPaymentsCustomFields](docs/sdks/customfieldmanagement/README.md#postpaymentscustomfields) - Add a New Custom Field

### [merchantCategoryCodes](docs/sdks/merchantcategorycodes/README.md)

* [getPaymentsMcc](docs/sdks/merchantcategorycodes/README.md#getpaymentsmcc) - Retrieve Merchant Category Codes (MCC)

### [payablesManagement](docs/sdks/payablesmanagement/README.md)

* [deletePaymentsPayableId](docs/sdks/payablesmanagement/README.md#deletepaymentspayableid) - Delete Client Payable by Payable ID
* [getPaymentsPayable](docs/sdks/payablesmanagement/README.md#getpaymentspayable) - List All Payables Associated with a Client
* [getPaymentsPayableId](docs/sdks/payablesmanagement/README.md#getpaymentspayableid) - Retrieve Payable Details by Payable ID
* [getPaymentsPayrollImmediatePayable](docs/sdks/payablesmanagement/README.md#getpaymentspayrollimmediatepayable) - Retrieve Approved Payables Ready for Immediate Payroll
* [getPaymentsSummaryPayables](docs/sdks/payablesmanagement/README.md#getpaymentssummarypayables) - Retrieve Summary of All Payables
* [patchPaymentsPayableId](docs/sdks/payablesmanagement/README.md#patchpaymentspayableid) - Update Client Payable Information by Payable ID
* [postPaymentsPayApproved](docs/sdks/payablesmanagement/README.md#postpaymentspayapproved) - Execute Approved Payroll Transactions
* [postPaymentsPayable](docs/sdks/payablesmanagement/README.md#postpaymentspayable) - Create a New Payable for a Member on Behalf of a Client

### [payrollSettings](docs/sdks/payrollsettings/README.md)

* [getPaymentsPayrollSettingsId](docs/sdks/payrollsettings/README.md#getpaymentspayrollsettingsid) - Retrieve Individual Payroll Settings
* [patchPaymentsPayrollSettingsId](docs/sdks/payrollsettings/README.md#patchpaymentspayrollsettingsid) - Modify Existing Payroll Settings

### [reportingAndAnalytics](docs/sdks/reportingandanalytics/README.md)

* [getPaymentsReportsAgingLineItems](docs/sdks/reportingandanalytics/README.md#getpaymentsreportsaginglineitems) - Obtain Aging Report for Line Items
* [getPaymentsReportsAgingPayables](docs/sdks/reportingandanalytics/README.md#getpaymentsreportsagingpayables) - Retrieve Aging Report for Payables
* [getPaymentsReportsCollaborators](docs/sdks/reportingandanalytics/README.md#getpaymentsreportscollaborators) - Retrieve detailed information on all collaborators
* [getPaymentsReportsCollaboratorsPayablesSummary](docs/sdks/reportingandanalytics/README.md#getpaymentsreportscollaboratorspayablessummary) - Obtain a summarized report of payable amounts for each collaborator
* [getPaymentsReportsPayrollPayrollId](docs/sdks/reportingandanalytics/README.md#getpaymentsreportspayrollpayrollid) - Extract detailed report of payables associated with a particular payroll run
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        bearerAuth: "",
    });

    let res;
    try {
        res = await sdk.serviceSettings.getPayments();
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app` | None |
| 1 | `https://stagingapi.wingspan.app` | None |

#### Example

```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        serverIdx: 1,
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        serverURL: "https://api.wingspan.app",
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @wingspan/payments import Payments;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Payments({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Payments } from "@wingspan/payments";

(async () => {
    const sdk = new Payments({
        bearerAuth: "",
    });

    const res = await sdk.serviceSettings.getPayments();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

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
