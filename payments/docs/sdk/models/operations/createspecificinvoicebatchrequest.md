# CreateSpecificInvoiceBatchRequest

## Example Usage

```typescript
import { CreateSpecificInvoiceBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreateSpecificInvoiceBatchRequest = {
    batchId: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkInvoiceItemCreate`                                                             | [shared.BulkInvoiceItemCreate](../../../sdk/models/shared/bulkinvoiceitemcreate.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `batchId`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a batch                                                       |