# PayableSchema


## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedPaymentMethods`                                                                                                                                        | [PayableSchemaAcceptedPaymentMethods](../../models/shared/payableschemaacceptedpaymentmethods.md)[]                                                             | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `accountId`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `amount`                                                                                                                                                        | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `attachments`                                                                                                                                                   | [InvoiceAttachments](../../models/shared/invoiceattachments.md)                                                                                                 | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `bankTransferInfo`                                                                                                                                              | [BankAccount](../../models/shared/bankaccount.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `chargedFees`                                                                                                                                                   | [Fees](../../models/shared/fees.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `client`                                                                                                                                                        | [ClientOptions](../../models/shared/clientoptions.md)                                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `clientId`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `collaboratorId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `createdAt`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `creditFeeHandling`                                                                                                                                             | [FeeHandlingConfig](../../models/shared/feehandlingconfig.md)                                                                                                   | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `currency`                                                                                                                                                      | [PayableSchemaCurrency](../../models/shared/payableschemacurrency.md)                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `dueDate`                                                                                                                                                       | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `eventActors`                                                                                                                                                   | Record<string, *string*>                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `events`                                                                                                                                                        | [InvoiceEvents](../../models/shared/invoiceevents.md)                                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `integration`                                                                                                                                                   | [Sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e](../../models/shared/sixb94b58d661f3eabc1444a7a43ac4b99580f0d050123b7bf38184e2f0d7bd66e.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `internationalBankTransferInfo`                                                                                                                                 | [BankAccount](../../models/shared/bankaccount.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `invoiceNotes`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `invoiceNumber`                                                                                                                                                 | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `invoiceTemplateId`                                                                                                                                             | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `labels`                                                                                                                                                        | Record<string, *string*>                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `lateFeeHandling`                                                                                                                                               | [LateFeeConfig](../../models/shared/latefeeconfig.md)                                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `lineItems`                                                                                                                                                     | [InvoiceLineItem](../../models/shared/invoicelineitem.md)[]                                                                                                     | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `member`                                                                                                                                                        | [MemberOptions](../../models/shared/memberoptions.md)                                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `memberAddress`                                                                                                                                                 | [Address](../../models/shared/address.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `memberFormattedAddressLines`                                                                                                                                   | *string*[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `memberId`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `metadata`                                                                                                                                                      | [InvoiceMetadata](../../models/shared/invoicemetadata.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `nextPayrollExecutionDate`                                                                                                                                      | [ScheduleDate](../../models/shared/scheduledate.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `notificationPreferences`                                                                                                                                       | [InvoiceNotificationPreferences](../../models/shared/invoicenotificationpreferences.md)                                                                         | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `payableId`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `paymentMethodId`                                                                                                                                               | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `sourceId`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `status`                                                                                                                                                        | [PayableSchemaStatus](../../models/shared/payableschemastatus.md)                                                                                               | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `updatedAt`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `userRoles`                                                                                                                                                     | [UserRoles](../../models/shared/userroles.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |