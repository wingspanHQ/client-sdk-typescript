# InvoiceRefundDestination


## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `destinationId`                                                                                                         | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `destinationType`                                                                                                       | [shared.InvoiceRefundDestinationDestinationType](../../../sdk/models/shared/invoicerefunddestinationdestinationtype.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `events`                                                                                                                | [shared.InvoiceRefundEvents](../../../sdk/models/shared/invoicerefundevents.md)                                         | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `labels`                                                                                                                | Record<string, *string*>                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `refundType`                                                                                                            | [shared.RefundType](../../../sdk/models/shared/refundtype.md)                                                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `stripeTransferId`                                                                                                      | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `transactionId`                                                                                                         | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `transferId`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `updatedAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |