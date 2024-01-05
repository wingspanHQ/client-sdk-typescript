# InvoiceUpdateRequest


## Fields

| Field                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedPaymentMethods`                                                                                                                                                                                                                                                                                                                        | [shared.InvoiceUpdateRequestAcceptedPaymentMethods](../../../sdk/models/shared/invoiceupdaterequestacceptedpaymentmethods.md)[]                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `attachments`                                                                                                                                                                                                                                                                                                                                   | [shared.ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2](../../../sdk/models/shared/thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `chargedFees`                                                                                                                                                                                                                                                                                                                                   | [shared.Fees](../../../sdk/models/shared/fees.md)                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `client`                                                                                                                                                                                                                                                                                                                                        | [shared.InvoiceUpdateRequestClient](../../../sdk/models/shared/invoiceupdaterequestclient.md)                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `collaborators`                                                                                                                                                                                                                                                                                                                                 | [shared.InvoiceCollaboratorUpdateRequest](../../../sdk/models/shared/invoicecollaboratorupdaterequest.md)[]                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `creditFeeHandling`                                                                                                                                                                                                                                                                                                                             | [shared.FeeHandlingConfig](../../../sdk/models/shared/feehandlingconfig.md)                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `dueDate`                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `integration`                                                                                                                                                                                                                                                                                                                                   | [shared.ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461](../../../sdk/models/shared/threebilliononehundredandninetymillionsixhundredandeightyfivethousandeighthundredandthirtytwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `invoiceNotes`                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `labels`                                                                                                                                                                                                                                                                                                                                        | Record<string, *string*>                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `lateFeeHandling`                                                                                                                                                                                                                                                                                                                               | [shared.LateFeeConfigUpdate](../../../sdk/models/shared/latefeeconfigupdate.md)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `lineItems`                                                                                                                                                                                                                                                                                                                                     | [shared.InvoiceLineItemsCreateRequest](../../../sdk/models/shared/invoicelineitemscreaterequest.md)[]                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `member`                                                                                                                                                                                                                                                                                                                                        | [shared.InvoiceUpdateRequestMember](../../../sdk/models/shared/invoiceupdaterequestmember.md)                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `memberClientId`                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `metadata`                                                                                                                                                                                                                                                                                                                                      | [shared.InvoiceMetadata](../../../sdk/models/shared/invoicemetadata.md)                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `notificationPreferences`                                                                                                                                                                                                                                                                                                                       | [shared.InvoiceNotificationPreferences](../../../sdk/models/shared/invoicenotificationpreferences.md)                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |
| `status`                                                                                                                                                                                                                                                                                                                                        | [shared.InvoiceUpdateRequestStatus](../../../sdk/models/shared/invoiceupdaterequeststatus.md)                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                             |