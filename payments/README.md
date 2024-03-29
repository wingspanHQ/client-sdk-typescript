# @wingspan/payments

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @wingspan/payments
```

### Yarn

```bash
yarn add @wingspan/payments
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [serviceSettings](docs/sdks/servicesettings/README.md)

* [get](docs/sdks/servicesettings/README.md#get) - Check Service Status

### [wingspanWallet](docs/sdks/wingspanwallet/README.md)

* [create](docs/sdks/wingspanwallet/README.md#create) - Register a New  Wingspan Wallet Card
* [delete](docs/sdks/wingspanwallet/README.md#delete) - Remove a card using its unique ID
* [get](docs/sdks/wingspanwallet/README.md#get) - Retrieve card details by its unique ID
* [list](docs/sdks/wingspanwallet/README.md#list) - List All Stored Wingspan Wallet Cards
* [request](docs/sdks/wingspanwallet/README.md#request) - Request a verification code for card authentication
* [update](docs/sdks/wingspanwallet/README.md#update) - Modify card details by its unique ID
* [validate](docs/sdks/wingspanwallet/README.md#validate) - Validate verification code to receive a token

### [deprecated](docs/sdks/deprecated/README.md)

* [~~create~~](docs/sdks/deprecated/README.md#create) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**
* [~~delete~~](docs/sdks/deprecated/README.md#delete) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [deleteInstantPayout](docs/sdks/deprecated/README.md#deleteinstantpayout) - Deprecated Remove Instant Payout Configuration
* [~~get~~](docs/sdks/deprecated/README.md#get) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [getInstantPayout](docs/sdks/deprecated/README.md#getinstantpayout) - Deprecated Retrieve Instant Payout Information
* [~~list~~](docs/sdks/deprecated/README.md#list) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~update~~](docs/sdks/deprecated/README.md#update) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [updateInstantPayout](docs/sdks/deprecated/README.md#updateinstantpayout) - Deprecated Set Up Instant Payout Configuration

### [bankingManagement](docs/sdks/bankingmanagement/README.md)

* [create](docs/sdks/bankingmanagement/README.md#create) - Register a new payout debit card for a member
* [delete](docs/sdks/bankingmanagement/README.md#delete) - Unlink and delete a specific payout debit card from a member's profile
* [download](docs/sdks/bankingmanagement/README.md#download) - Download a specific bank statement as a PDF
* [get](docs/sdks/bankingmanagement/README.md#get) - Retrieve Specific Bank Statement
* [getApplicationLink](docs/sdks/bankingmanagement/README.md#getapplicationlink) - Fetch the application link for setting up a clearing bank account
* [getDebitCard](docs/sdks/bankingmanagement/README.md#getdebitcard) - Retrieve a specific payout debit card linked to a member
* [getInstitution](docs/sdks/bankingmanagement/README.md#getinstitution) - Retrieve banking institution details by its routing number
* [getPayoutSetting](docs/sdks/bankingmanagement/README.md#getpayoutsetting) - Retrieve payout settings for a specific member
* [list](docs/sdks/bankingmanagement/README.md#list) - Fetch all registered payout debit cards for a member
* [listStatements](docs/sdks/bankingmanagement/README.md#liststatements) - Retrieve All Bank Statements
* [update](docs/sdks/bankingmanagement/README.md#update) - Modify and update payout settings for a specific member

### [oneThousandAndNinetyNineOperations](docs/sdks/onethousandandninetynineoperations/README.md)

* [calculate](docs/sdks/onethousandandninetynineoperations/README.md#calculate) - Determine 1099 Amounts for Collaborators
* [create](docs/sdks/onethousandandninetynineoperations/README.md#create) - Re-enable recipient sync on a tax form.
* [createBatchCalculation](docs/sdks/onethousandandninetynineoperations/README.md#createbatchcalculation) - Initialize a new batch for bulk calculation 1099
* [createItem](docs/sdks/onethousandandninetynineoperations/README.md#createitem) - Add a new item to a calculation 1099 batch
* [createProof](docs/sdks/onethousandandninetynineoperations/README.md#createproof) - Provide Recipient Proof of Identity
* [createTaxForm](docs/sdks/onethousandandninetynineoperations/README.md#createtaxform) - Create a new tax form.
* [get](docs/sdks/onethousandandninetynineoperations/README.md#get) - Fetch tax form.
* [getBatchCalculation](docs/sdks/onethousandandninetynineoperations/README.md#getbatchcalculation) - Retrieve specific details of a bulk calculation 1099 batch
* [getForm1099](docs/sdks/onethousandandninetynineoperations/README.md#getform1099) - Retrieve Form 1099 PDF for a Collaborator by Year and Index
* [getFormW9](docs/sdks/onethousandandninetynineoperations/README.md#getformw9) - Retrieve Form W9 PDF for a Collaborator
* [getItem](docs/sdks/onethousandandninetynineoperations/README.md#getitem) - Fetch details of a specific item from a calculation 1099 batch
* [listBatchCalculation](docs/sdks/onethousandandninetynineoperations/README.md#listbatchcalculation) - Retrieve all bulk calculation 1099 batches
* [listItem](docs/sdks/onethousandandninetynineoperations/README.md#listitem) - Retrieve all items from a calculation 1099 batch
* [listTaxForm](docs/sdks/onethousandandninetynineoperations/README.md#listtaxform) - Fetch 1099 tax forms.
* [mark](docs/sdks/onethousandandninetynineoperations/README.md#mark) - Indicate a collaborator's 1099 form was returned undelivered
* [remail](docs/sdks/onethousandandninetynineoperations/README.md#remail) - Request a new mailing of the 1099 form for a collaborator
* [request](docs/sdks/onethousandandninetynineoperations/README.md#request) - Request a new 1099 invite email.
* [submit](docs/sdks/onethousandandninetynineoperations/README.md#submit) - Submit Payee TIN for verification
* [update](docs/sdks/onethousandandninetynineoperations/README.md#update) - Update a tax form.
* [updateBatchCalculation](docs/sdks/onethousandandninetynineoperations/README.md#updatebatchcalculation) - Modify the details of a specific bulk calculation 1099 batch
* [updateItem](docs/sdks/onethousandandninetynineoperations/README.md#updateitem) - Revise the attributes of an item in a calculation 1099 batch
* [updateW9](docs/sdks/onethousandandninetynineoperations/README.md#updatew9) - Submit Payee W9 Information.

### [bulkOperations](docs/sdks/bulkoperations/README.md)

* [create](docs/sdks/bulkoperations/README.md#create) - Initiate a New Bulk Invoice Batch
* [createBatchItem](docs/sdks/bulkoperations/README.md#createbatchitem) - Add a new item to a specific bulk payable batch
* [createClient](docs/sdks/bulkoperations/README.md#createclient) - Create a new bulk client batch
* [createClientItem](docs/sdks/bulkoperations/README.md#createclientitem) - Add a New Item to a Client Batch
* [createCollaborator](docs/sdks/bulkoperations/README.md#createcollaborator) - Initiate a new bulk collaborator batch.
* [createPayable](docs/sdks/bulkoperations/README.md#createpayable) - Initiate a New Bulk Payable Batch
* [createSpecificCollaboratorItem](docs/sdks/bulkoperations/README.md#createspecificcollaboratoritem) - Append a new item to a specific collaborator batch
* [createSpecificInvoice](docs/sdks/bulkoperations/README.md#createspecificinvoice) - Add a new item to a specific bulk invoice batch
* [deleteCollaborator](docs/sdks/bulkoperations/README.md#deletecollaborator) - Remove a Specific Collaborator Batch
* [deletePayable](docs/sdks/bulkoperations/README.md#deletepayable) - Remove a Specific Bulk Payable Batch
* [get](docs/sdks/bulkoperations/README.md#get) - Retrieve details of a specific bulk invoice batch
* [getBatchItem](docs/sdks/bulkoperations/README.md#getbatchitem) - Fetch the import summary for a specific bulk payable batch
* [getClient](docs/sdks/bulkoperations/README.md#getclient) - Fetch Details of a Specific Item from a Client Batch
* [getClientItem](docs/sdks/bulkoperations/README.md#getclientitem) - Fetch Details of a Specific Item from a Client Batch
* [getCollaborator](docs/sdks/bulkoperations/README.md#getcollaborator) - Retrieve Details of a Specific Collaborator Batch
* [getPayable](docs/sdks/bulkoperations/README.md#getpayable) - Retrieve Details of a Specific Bulk Payable Batch
* [getSpecific](docs/sdks/bulkoperations/README.md#getspecific) - Retrieve a Specific Item from a Bulk Payable Batch
* [getSpecificCollaboratorItem](docs/sdks/bulkoperations/README.md#getspecificcollaboratoritem) - Retrieve details of a specific item from a collaborator batch
* [getSpecificInvoice](docs/sdks/bulkoperations/README.md#getspecificinvoice) - Retrieve a specific item from a bulk invoice batch
* [list](docs/sdks/bulkoperations/README.md#list) - Retrieve All Bulk Invoice Batches
* [listBatchItem](docs/sdks/bulkoperations/README.md#listbatchitem) - Retrieve all items from a specific bulk payable batch
* [listClient](docs/sdks/bulkoperations/README.md#listclient) - Retrieve all bulk client batches
* [listClientItem](docs/sdks/bulkoperations/README.md#listclientitem) - Retrieve All Items from a Client Batch
* [listCollaborator](docs/sdks/bulkoperations/README.md#listcollaborator) - Fetch all bulk collaborator batches
* [listPayable](docs/sdks/bulkoperations/README.md#listpayable) - Retrieve All Bulk Payable Batches
* [listSpecificCollaboratorItem](docs/sdks/bulkoperations/README.md#listspecificcollaboratoritem) - Retrieve all items from a specific collaborator batch
* [listSpecificInvoice](docs/sdks/bulkoperations/README.md#listspecificinvoice) - Fetch all items from a specific bulk invoice batch
* [update](docs/sdks/bulkoperations/README.md#update) - Modify the details of a specific bulk invoice batch
* [updateClient](docs/sdks/bulkoperations/README.md#updateclient) - Modify Details of a Specific Item in a Client Batch
* [updateClientItem](docs/sdks/bulkoperations/README.md#updateclientitem) - Modify Details of a Specific Item in a Client Batch
* [updateCollaborator](docs/sdks/bulkoperations/README.md#updatecollaborator) - Modify Details of a Bulk Collaborator Batch
* [updatePayable](docs/sdks/bulkoperations/README.md#updatepayable) - Modify a Specific Bulk Payable Batch
* [updateSpecific](docs/sdks/bulkoperations/README.md#updatespecific) - Modify a Specific Item in a Bulk Payable Batch
* [updateSpecificCollaboratorItem](docs/sdks/bulkoperations/README.md#updatespecificcollaboratoritem) - Modify the details of a specific item within a collaborator batch
* [updateSpecificInvoice](docs/sdks/bulkoperations/README.md#updatespecificinvoice) - Modify a specific item within a bulk invoice batch

### [clientManagement](docs/sdks/clientmanagement/README.md)

* [create](docs/sdks/clientmanagement/README.md#create) - Register a New Client Deduction
* [deleteAssociation](docs/sdks/clientmanagement/README.md#deleteassociation) - Remove a specific member-client relationship from the system
* [deleteClientDeduction](docs/sdks/clientmanagement/README.md#deleteclientdeduction) - Remove a Client Deduction
* [establish](docs/sdks/clientmanagement/README.md#establish) - Establish a new association between a member and client
* [getAssociation](docs/sdks/clientmanagement/README.md#getassociation) - Retrieve detailed information of a specific member-client relationship
* [getClientDeduction](docs/sdks/clientmanagement/README.md#getclientdeduction) - Fetch Specific Client Deduction Details
* [list](docs/sdks/clientmanagement/README.md#list) - Retrieve All Clients (Version 2)
* [listAssociations](docs/sdks/clientmanagement/README.md#listassociations) - Fetch a list of member and client associations
* [listClientDeduction](docs/sdks/clientmanagement/README.md#listclientdeduction) - Retrieve All Client Deductions
* [listSpecificClientDetail](docs/sdks/clientmanagement/README.md#listspecificclientdetail) - Retrieve Specific Client Details (Version 2)
* [updateAssociation](docs/sdks/clientmanagement/README.md#updateassociation) - Update information of a specific member-client relationship
* [updateClientDeduction](docs/sdks/clientmanagement/README.md#updateclientdeduction) - Modify a Client Deduction

### [invoiceManagement](docs/sdks/invoicemanagement/README.md)

* [create](docs/sdks/invoicemanagement/README.md#create) - Initiate New Invoice for a Member
* [createClient](docs/sdks/invoicemanagement/README.md#createclient) - Create a new client-generated invoice template
* [createGenerated](docs/sdks/invoicemanagement/README.md#creategenerated) - Generate a New Invoice on Behalf of the Client
* [createTemplate](docs/sdks/invoicemanagement/README.md#createtemplate) - Create a new invoice template
* [delete](docs/sdks/invoicemanagement/README.md#delete) - Remove Invoice Record by ID
* [deleteTemplate](docs/sdks/invoicemanagement/README.md#deletetemplate) - Remove a specific invoice template
* [execute](docs/sdks/invoicemanagement/README.md#execute) - Execute Payment for a Client-Generated Invoice
* [generate](docs/sdks/invoicemanagement/README.md#generate) - Generate a PDF for a specific invoice
* [generateTest](docs/sdks/invoicemanagement/README.md#generatetest) - Generate Test Invoice for a Client
* [get](docs/sdks/invoicemanagement/README.md#get) - Fetch Invoice by ID
* [getClient](docs/sdks/invoicemanagement/README.md#getclient) - Fetch a specific client-generated invoice template by ID
* [getFees](docs/sdks/invoicemanagement/README.md#getfees) - Retrieve Fees Associated with a Client's Invoice
* [getGenerated](docs/sdks/invoicemanagement/README.md#getgenerated) - Fetch Specific Client-Generated Invoice by ID
* [getMember](docs/sdks/invoicemanagement/README.md#getmember) - Retrieve All Member Invoices
* [getTemplate](docs/sdks/invoicemanagement/README.md#gettemplate) - Retrieve a specific invoice template by ID
* [list](docs/sdks/invoicemanagement/README.md#list) - Retrieve All Invoices Generated by a Client
* [listClient](docs/sdks/invoicemanagement/README.md#listclient) - Retrieve all client-generated invoice templates
* [listTemplates](docs/sdks/invoicemanagement/README.md#listtemplates) - Retrieve all available invoice templates
* [refund](docs/sdks/invoicemanagement/README.md#refund) - Refund a deposited invoice
* [send](docs/sdks/invoicemanagement/README.md#send) - Send an invoice by email
* [update](docs/sdks/invoicemanagement/README.md#update) - Modify Existing Invoice Details
* [updateClient](docs/sdks/invoicemanagement/README.md#updateclient) - Modify a client-generated invoice template
* [updateGenerated](docs/sdks/invoicemanagement/README.md#updategenerated) - Modify an Existing Client-Generated Invoice
* [updateTemplate](docs/sdks/invoicemanagement/README.md#updatetemplate) - Modify details of an existing invoice template

### [collaboratorManagement](docs/sdks/collaboratormanagement/README.md)

* [associate](docs/sdks/collaboratormanagement/README.md#associate) - Associate Collaborator with a Specific Group
* [create](docs/sdks/collaboratormanagement/README.md#create) - Register a New Collaborator
* [createCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#createcollaboratordeduction) - Register a New Deduction for a Collaborator
* [createCollaboratorGroup](docs/sdks/collaboratormanagement/README.md#createcollaboratorgroup) - Generate New Collaborator Group
* [delete](docs/sdks/collaboratormanagement/README.md#delete) - Remove a Specific Collaborator Record
* [deleteCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#deletecollaboratordeduction) - Erase a Specific Deduction Entry
* [disassociate](docs/sdks/collaboratormanagement/README.md#disassociate) - Disassociate Collaborator from a Specific Group
* [get](docs/sdks/collaboratormanagement/README.md#get) - Retrieve Details of a Specific Collaborator
* [getCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#getcollaboratordeduction) - Retrieve Specific Deduction Details
* [getEventAssociated](docs/sdks/collaboratormanagement/README.md#geteventassociated) - Retrieve Events Associated with a Collaborator
* [list](docs/sdks/collaboratormanagement/README.md#list) - Retrieve All Collaborators (Version 2)
* [listCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#listcollaboratordeduction) - Retrieve All Deductions for Collaborators
* [listCollaboratorGroups](docs/sdks/collaboratormanagement/README.md#listcollaboratorgroups) - Retrieve All Collaborator Groups
* [listRegistered](docs/sdks/collaboratormanagement/README.md#listregistered) - Retrieve All Registered Collaborators
* [listSpecificCollaboratorDetail](docs/sdks/collaboratormanagement/README.md#listspecificcollaboratordetail) - Retrieve Specific Collaborator Details (Version 2)
* [update](docs/sdks/collaboratormanagement/README.md#update) - Modify Collaborator Details
* [updateCollaboratorDeduction](docs/sdks/collaboratormanagement/README.md#updatecollaboratordeduction) - Modify Details of a Specific Deduction

### [documentSigningAndEligibility](docs/sdks/documentsigningandeligibility/README.md)

* [create](docs/sdks/documentsigningandeligibility/README.md#create) - Add a New Payment Eligibility Requirement
* [delete](docs/sdks/documentsigningandeligibility/README.md#delete) - Remove a Specific Eligibility Requirement
* [deleteCollaboratorGroup](docs/sdks/documentsigningandeligibility/README.md#deletecollaboratorgroup) - Remove Eligibility Requirement from Collaborator Group
* [deletePayment](docs/sdks/documentsigningandeligibility/README.md#deletepayment) - Remove a specific Payment Eligibility Requirement
* [establish](docs/sdks/documentsigningandeligibility/README.md#establish) - Establish a new Eligibility Requirement
* [get](docs/sdks/documentsigningandeligibility/README.md#get) - Retrieve a Specific Eligibility Requirement
* [getGroupConfiguration](docs/sdks/documentsigningandeligibility/README.md#getgroupconfiguration) - Retrieve Specific Collaborator Group Configuration
* [getPayment](docs/sdks/documentsigningandeligibility/README.md#getpayment) - Retrieve details of a specific Payment Eligibility Requirement
* [list](docs/sdks/documentsigningandeligibility/README.md#list) - Retrieve all Eligibility Requirements
* [listPayment](docs/sdks/documentsigningandeligibility/README.md#listpayment) - Retrieve All Payment Eligibility Requirements
* [update](docs/sdks/documentsigningandeligibility/README.md#update) - Modify a Specific Eligibility Requirement
* [updateCollaboratorGroup](docs/sdks/documentsigningandeligibility/README.md#updatecollaboratorgroup) - Modify Eligibility Requirement for Collaborator Group
* [updateGroupConfiguration](docs/sdks/documentsigningandeligibility/README.md#updategroupconfiguration) - Modify Collaborator Group Configuration
* [updatePayment](docs/sdks/documentsigningandeligibility/README.md#updatepayment) - Modify a specific Payment Eligibility Requirement

### [customFieldManagement](docs/sdks/customfieldmanagement/README.md)

* [create](docs/sdks/customfieldmanagement/README.md#create) - Add a New Custom Field
* [delete](docs/sdks/customfieldmanagement/README.md#delete) - Remove a Specific Custom Field
* [get](docs/sdks/customfieldmanagement/README.md#get) - Fetch Details of a Specific Custom Field
* [list](docs/sdks/customfieldmanagement/README.md#list) - Retrieve All Custom Fields
* [update](docs/sdks/customfieldmanagement/README.md#update) - Modify Details of a Specific Custom Field

### [merchantCategoryCodes](docs/sdks/merchantcategorycodes/README.md)

* [get](docs/sdks/merchantcategorycodes/README.md#get) - Retrieve Merchant Category Codes (MCC)

### [payablesManagement](docs/sdks/payablesmanagement/README.md)

* [create](docs/sdks/payablesmanagement/README.md#create) - Create a New Payable for a Member on Behalf of a Client
* [delete](docs/sdks/payablesmanagement/README.md#delete) - Delete Client Payable by Payable ID
* [execute](docs/sdks/payablesmanagement/README.md#execute) - Execute Approved Payroll Transactions
* [get](docs/sdks/payablesmanagement/README.md#get) - Retrieve Payable Details by Payable ID
* [getApproved](docs/sdks/payablesmanagement/README.md#getapproved) - Retrieve Approved Payables Ready for Immediate Payroll
* [list](docs/sdks/payablesmanagement/README.md#list) - List All Payables Associated with a Client
* [listSummary](docs/sdks/payablesmanagement/README.md#listsummary) - Retrieve Summary of All Payables
* [update](docs/sdks/payablesmanagement/README.md#update) - Update Client Payable Information by Payable ID

### [payrollSettings](docs/sdks/payrollsettings/README.md)

* [get](docs/sdks/payrollsettings/README.md#get) - Retrieve Individual Payroll Settings
* [update](docs/sdks/payrollsettings/README.md#update) - Modify Existing Payroll Settings

### [reportingAndAnalytics](docs/sdks/reportingandanalytics/README.md)

* [get](docs/sdks/reportingandanalytics/README.md#get) - Obtain a summarized report of payable amounts for each collaborator
* [getPayrollReport](docs/sdks/reportingandanalytics/README.md#getpayrollreport) - Extract detailed report of payables associated with a particular payroll run
* [listDetailedCollaborator](docs/sdks/reportingandanalytics/README.md#listdetailedcollaborator) - Retrieve detailed information on all collaborators
* [listLineItem](docs/sdks/reportingandanalytics/README.md#listlineitem) - Obtain Aging Report for Line Items
* [listPayable](docs/sdks/reportingandanalytics/README.md#listpayable) - Retrieve Aging Report for Payables
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Payments } from "@wingspan/payments";
import * as errors from "@wingspan/payments/sdk/models/errors";

async function run() {
    const sdk = new Payments({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.serviceSettings.get();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.wingspan.app` | None |
| `staging` | `https://stagingapi.wingspan.app` | None |

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        server: "staging",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        serverURL: "https://api.wingspan.app",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Payments } from "@wingspan/payments";
import { HTTPClient } from "@wingspan/payments/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Payments({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Payments } from "@wingspan/payments";

async function run() {
    const sdk = new Payments({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.serviceSettings.get();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

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
