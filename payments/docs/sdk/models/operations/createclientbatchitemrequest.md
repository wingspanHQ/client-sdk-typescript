# CreateClientBatchItemRequest

## Example Usage

```typescript
import { CreateClientBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreateClientBatchItemRequest = {
  batchId: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `bulkClientItemCreate`                                                            | [shared.BulkClientItemCreate](../../../sdk/models/shared/bulkclientitemcreate.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `batchId`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a batch                                                     |