# RefundDepositedInvoiceRequest

## Example Usage

```typescript
import { RefundDepositedInvoiceRequest } from "@wingspan/payments/sdk/models/operations";

let value: RefundDepositedInvoiceRequest = {
    invoiceId: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `invoiceRefundRequest`                                                            | [shared.InvoiceRefundRequest](../../../sdk/models/shared/invoicerefundrequest.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `invoiceId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier of an invoice                                                   |