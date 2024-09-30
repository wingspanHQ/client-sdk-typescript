# InvoiceCollaboratorCreateRequest

## Example Usage

```typescript
import { InvoiceCollaboratorCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceCollaboratorCreateRequest = {
  amount: 2176.63,
  currency: "CAD",
  description: "uniform from psst toothpick",
  memberClientId: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                  | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `currency`                                                                                                                | [shared.InvoiceCollaboratorCreateRequestCurrency](../../../sdk/models/shared/invoicecollaboratorcreaterequestcurrency.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `description`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `memberClientId`                                                                                                          | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |