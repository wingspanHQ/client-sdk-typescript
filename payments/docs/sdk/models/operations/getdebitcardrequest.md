# GetDebitCardRequest

## Example Usage

```typescript
import { GetDebitCardRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetDebitCardRequest = {
  id: "<id>",
  memberId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_check_mark:            | Unique identifier             |
| `memberId`                    | *string*                      | :heavy_check_mark:            | Unique identifier of a member |