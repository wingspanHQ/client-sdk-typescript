# @wingspan/integrations

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/integrations
```

### Yarn

```bash
yarn add @wingspan/integrations
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Integrations } from "@wingspan/integrations";

(async () => {
    const sdk = new Integrations();

    const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountAssetId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Integrations SDK](docs/sdks/integrations/README.md)

* [deleteIntegrationsQuickbooksAccountAssetId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksaccountassetid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountEquityId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksaccountequityid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountExpenseId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksaccountexpenseid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountLiabilityId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksaccountliabilityid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountRevenueId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksaccountrevenueid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksCustomerId](docs/sdks/integrations/README.md#deleteintegrationsquickbookscustomerid) - Delete Quickbooks Customer details
* [deleteIntegrationsQuickbooksItemId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksitemid) - Delete Quickbooks Item details
* [deleteIntegrationsQuickbooksService](docs/sdks/integrations/README.md#deleteintegrationsquickbooksservice) - Delete Quickbooks Integration
* [deleteIntegrationsQuickbooksVendorId](docs/sdks/integrations/README.md#deleteintegrationsquickbooksvendorid) - Delete Quickbooks Vendor details
* [deleteIntegrationsWebhooksPreferenceId](docs/sdks/integrations/README.md#deleteintegrationswebhookspreferenceid) - Delete Webhooks Preference
* [getIntegrationsQuickbooksAccountAsset](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountasset) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountAssetId](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountassetid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountEquity](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountequity) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountEquityId](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountequityid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountExpense](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountexpense) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountExpenseId](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountexpenseid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountLiability](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountliability) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountLiabilityId](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountliabilityid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountRevenue](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountrevenue) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountRevenueId](docs/sdks/integrations/README.md#getintegrationsquickbooksaccountrevenueid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksCustomer](docs/sdks/integrations/README.md#getintegrationsquickbookscustomer) - List Quickbooks Customer details
* [getIntegrationsQuickbooksCustomerId](docs/sdks/integrations/README.md#getintegrationsquickbookscustomerid) - Get Quickbooks Customer details
* [getIntegrationsQuickbooksItem](docs/sdks/integrations/README.md#getintegrationsquickbooksitem) - List Quickbooks Item details
* [getIntegrationsQuickbooksItemId](docs/sdks/integrations/README.md#getintegrationsquickbooksitemid) - Get Quickbooks Item details
* [getIntegrationsQuickbooksService](docs/sdks/integrations/README.md#getintegrationsquickbooksservice) - Get Quickbooks Integration
* [getIntegrationsQuickbooksServiceSyncActivity](docs/sdks/integrations/README.md#getintegrationsquickbooksservicesyncactivity) - Get Quickbooks Integration Sync Activities
* [getIntegrationsQuickbooksServiceSyncActivityId](docs/sdks/integrations/README.md#getintegrationsquickbooksservicesyncactivityid) - Get Quickbooks Integration Sync Activity
* [getIntegrationsQuickbooksVendor](docs/sdks/integrations/README.md#getintegrationsquickbooksvendor) - List Quickbooks Vendor details
* [getIntegrationsQuickbooksVendorId](docs/sdks/integrations/README.md#getintegrationsquickbooksvendorid) - Get Quickbooks Vendor details
* [getIntegrationsWebhooksEventnames](docs/sdks/integrations/README.md#getintegrationswebhookseventnames) - List Webhooks Event Names
* [getIntegrationsWebhooksPreference](docs/sdks/integrations/README.md#getintegrationswebhookspreference) - List Webhooks Preferences
* [getIntegrationsWebhooksPreferenceId](docs/sdks/integrations/README.md#getintegrationswebhookspreferenceid) - Get Webhooks Preference
* [patchIntegrationsQuickbooksAccountAssetId](docs/sdks/integrations/README.md#patchintegrationsquickbooksaccountassetid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountEquityId](docs/sdks/integrations/README.md#patchintegrationsquickbooksaccountequityid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountExpenseId](docs/sdks/integrations/README.md#patchintegrationsquickbooksaccountexpenseid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountLiabilityId](docs/sdks/integrations/README.md#patchintegrationsquickbooksaccountliabilityid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountRevenueId](docs/sdks/integrations/README.md#patchintegrationsquickbooksaccountrevenueid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksCustomerId](docs/sdks/integrations/README.md#patchintegrationsquickbookscustomerid) - Updaet Quickbooks Customer details
* [patchIntegrationsQuickbooksItemId](docs/sdks/integrations/README.md#patchintegrationsquickbooksitemid) - Updaet Quickbooks Item details
* [patchIntegrationsQuickbooksService](docs/sdks/integrations/README.md#patchintegrationsquickbooksservice) - Update Quickbooks Integration Status
* [patchIntegrationsQuickbooksServiceSyncActivityId](docs/sdks/integrations/README.md#patchintegrationsquickbooksservicesyncactivityid) - Update Quickbooks Integration Sync Activity
* [patchIntegrationsQuickbooksVendorId](docs/sdks/integrations/README.md#patchintegrationsquickbooksvendorid) - Updaet Quickbooks Vendor details
* [patchIntegrationsWebhooksPreferenceId](docs/sdks/integrations/README.md#patchintegrationswebhookspreferenceid) - Update Webhooks Preference
* [postIntegrationsQuickbooksAccountAsset](docs/sdks/integrations/README.md#postintegrationsquickbooksaccountasset) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountEquity](docs/sdks/integrations/README.md#postintegrationsquickbooksaccountequity) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountExpense](docs/sdks/integrations/README.md#postintegrationsquickbooksaccountexpense) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountLiability](docs/sdks/integrations/README.md#postintegrationsquickbooksaccountliability) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountRevenue](docs/sdks/integrations/README.md#postintegrationsquickbooksaccountrevenue) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksCustomer](docs/sdks/integrations/README.md#postintegrationsquickbookscustomer) - Retrieve Customer from Quickbooks
* [postIntegrationsQuickbooksItem](docs/sdks/integrations/README.md#postintegrationsquickbooksitem) - Retrieve Item from Quickbooks
* [postIntegrationsQuickbooksService](docs/sdks/integrations/README.md#postintegrationsquickbooksservice) - Create Quickbooks Integration
* [postIntegrationsQuickbooksServiceSyncActivityIdForceSync](docs/sdks/integrations/README.md#postintegrationsquickbooksservicesyncactivityidforcesync) - Forces a Sync of Object Represented by Quickbooks Integration Sync Activity
* [postIntegrationsQuickbooksVendor](docs/sdks/integrations/README.md#postintegrationsquickbooksvendor) - Retrieve Vendor from Quickbooks
* [postIntegrationsWebhooksPreference](docs/sdks/integrations/README.md#postintegrationswebhookspreference) - Create Webhooks Preference
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
