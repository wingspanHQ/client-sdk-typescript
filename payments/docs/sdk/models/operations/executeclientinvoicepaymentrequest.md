# ExecuteClientInvoicePaymentRequest

## Example Usage

```typescript
import { ExecuteClientInvoicePaymentRequest } from "@wingspan/payments/sdk/models/operations";

let value: ExecuteClientInvoicePaymentRequest = {
  invoiceId: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `payRequest`                                                  | [shared.PayRequest](../../../sdk/models/shared/payrequest.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `invoiceId`                                                   | *string*                                                      | :heavy_check_mark:                                            | Unique identifier of an invoice                               |