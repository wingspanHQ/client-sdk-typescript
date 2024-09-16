# UpdateSpecificCollaboratorBatchItemRequest

## Example Usage

```typescript
import { UpdateSpecificCollaboratorBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateSpecificCollaboratorBatchItemRequest = {
  batchId: "<value>",
  batchItemId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bulkCollaboratorItemUpdate`                                                                  | [shared.BulkCollaboratorItemUpdate](../../../sdk/models/shared/bulkcollaboratoritemupdate.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `batchId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for a batch                                                                 |
| `batchItemId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for an item in a batch                                                      |