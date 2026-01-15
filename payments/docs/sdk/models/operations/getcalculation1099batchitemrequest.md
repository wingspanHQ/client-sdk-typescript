# GetCalculation1099BatchItemRequest

## Example Usage

```typescript
import { GetCalculation1099BatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetCalculation1099BatchItemRequest = {
  batchId: "<id>",
  batchItemId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `batchId`                                | *string*                                 | :heavy_check_mark:                       | Unique identifier for a batch            |
| `batchItemId`                            | *string*                                 | :heavy_check_mark:                       | Unique identifier for an item in a batch |