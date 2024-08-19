# UpdateSpecificInvoiceBatchRequest

## Example Usage

```typescript
import { UpdateSpecificInvoiceBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateSpecificInvoiceBatchRequest = {
    batchId: "<value>",
    batchItemId: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkInvoiceItemUpdate`                                                             | [shared.BulkInvoiceItemUpdate](../../../sdk/models/shared/bulkinvoiceitemupdate.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `batchId`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a batch                                                       |
| `batchItemId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for an item in a batch                                            |