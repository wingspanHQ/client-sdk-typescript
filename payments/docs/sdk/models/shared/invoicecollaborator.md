# InvoiceCollaborator

## Example Usage

```typescript
import { InvoiceCollaborator } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceCollaborator = {
  amount: 1478.01,
  currency: "USD",
  description:
    "lively perfectly starch state belabor zowie incidentally nifty and",
  memberClientId: "<id>",
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