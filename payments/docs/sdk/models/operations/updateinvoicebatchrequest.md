# UpdateInvoiceBatchRequest

## Example Usage

```typescript
import { UpdateInvoiceBatchRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateInvoiceBatchRequest = {
    batchId: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `bulkInvoiceBatchUpdate`                                                              | [shared.BulkInvoiceBatchUpdate](../../../sdk/models/shared/bulkinvoicebatchupdate.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `batchId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a batch                                                         |