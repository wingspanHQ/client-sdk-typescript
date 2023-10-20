# BulkInvoiceItem


## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedPaymentMethods`                                                                                                                                    | [BulkInvoiceItemAcceptedPaymentMethods](../../models/shared/bulkinvoiceitemacceptedpaymentmethods.md)[]                                                     | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `amount`                                                                                                                                                    | *number*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `bulkInvoiceBatchId`                                                                                                                                        | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `bulkInvoiceItemId`                                                                                                                                         | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `bulkInvoiceItemMergeKey`                                                                                                                                   | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `bulkInvoiceItemReference`                                                                                                                                  | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `clientEmail`                                                                                                                                               | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `clientExternalId`                                                                                                                                          | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `createdAt`                                                                                                                                                 | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `creditFeeHandling`                                                                                                                                         | [FeeHandlingConfig](../../models/shared/feehandlingconfig.md)                                                                                               | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `dueDate`                                                                                                                                                   | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `eventActors`                                                                                                                                               | Record<string, *string*>                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `integration`                                                                                                                                               | [InvoiceIntegrations](../../models/shared/invoiceintegrations.md)                                                                                           | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `invoiceDate`                                                                                                                                               | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `invoiceNotes`                                                                                                                                              | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `invoiceStatus`                                                                                                                                             | [BulkInvoiceItemInvoiceStatus](../../models/shared/bulkinvoiceiteminvoicestatus.md)                                                                         | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `labels`                                                                                                                                                    | Record<string, *string*>                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `lineItemDescription`                                                                                                                                       | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `lineItemDetail`                                                                                                                                            | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `memberClientId`                                                                                                                                            | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `memberId`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `metadata`                                                                                                                                                  | [C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a](../../models/shared/c1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a.md) | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `paidDate`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `projectName`                                                                                                                                               | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `reimbursableExpense`                                                                                                                                       | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `sendDate`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `status`                                                                                                                                                    | [BulkInvoiceItemStatus](../../models/shared/bulkinvoiceitemstatus.md)                                                                                       | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `updatedAt`                                                                                                                                                 | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `userRoles`                                                                                                                                                 | [UserRoles](../../models/shared/userroles.md)                                                                                                               | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |