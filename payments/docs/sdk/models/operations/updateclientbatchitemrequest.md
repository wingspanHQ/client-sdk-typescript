# UpdateClientBatchItemRequest

## Example Usage

```typescript
import { UpdateClientBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateClientBatchItemRequest = {
  batchId: "<id>",
  batchItemId: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `bulkClientItemUpdate`                                                            | [shared.BulkClientItemUpdate](../../../sdk/models/shared/bulkclientitemupdate.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `batchId`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a batch                                                     |
| `batchItemId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for an item in a batch                                          |