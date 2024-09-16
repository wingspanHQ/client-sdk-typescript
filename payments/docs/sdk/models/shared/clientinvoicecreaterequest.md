# ClientInvoiceCreateRequest

## Example Usage

```typescript
import { ClientInvoiceCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoiceCreateRequest = {
  clientEmail: "<value>",
  dueDate: "<value>",
  lineItems: [
    {},
  ],
  memberId: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `clientCompany`                                                                                               | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `clientEmail`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `clientEmailCC`                                                                                               | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `clientFirstName`                                                                                             | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `clientLastName`                                                                                              | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `creditFeeHandling`                                                                                           | [shared.FeeHandlingConfig](../../../sdk/models/shared/feehandlingconfig.md)                                   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `currency`                                                                                                    | [shared.ClientInvoiceCreateRequestCurrency](../../../sdk/models/shared/clientinvoicecreaterequestcurrency.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `dueDate`                                                                                                     | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `lineItems`                                                                                                   | [shared.InvoiceLineItemsCreateRequest](../../../sdk/models/shared/invoicelineitemscreaterequest.md)[]         | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `memberId`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |