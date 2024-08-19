# InvoiceCollaborator

## Example Usage

```typescript
import { InvoiceCollaborator } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceCollaborator = {
    amount: 2703.28,
    currency: "USD",
    description: "Customer-focused maximized analyzer",
    memberClientId: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `amount`                                                                                        | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `currency`                                                                                      | [shared.InvoiceCollaboratorCurrency](../../../sdk/models/shared/invoicecollaboratorcurrency.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `invoiceId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `memberClientId`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |