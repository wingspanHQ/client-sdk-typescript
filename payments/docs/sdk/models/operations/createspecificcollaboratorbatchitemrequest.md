# CreateSpecificCollaboratorBatchItemRequest

## Example Usage

```typescript
import { CreateSpecificCollaboratorBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreateSpecificCollaboratorBatchItemRequest = {
  batchId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bulkCollaboratorItemCreate`                                                                  | [shared.BulkCollaboratorItemCreate](../../../sdk/models/shared/bulkcollaboratoritemcreate.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `batchId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for a batch                                                                 |