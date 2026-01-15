# InvoiceCollaboratorCreateRequest

## Example Usage

```typescript
import { InvoiceCollaboratorCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceCollaboratorCreateRequest = {
  amount: 1764.99,
  currency: "CAD",
  description: "toothpick tall what abaft furthermore lest paintwork",
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