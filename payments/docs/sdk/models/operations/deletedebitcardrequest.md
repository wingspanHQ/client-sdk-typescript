# DeleteDebitCardRequest

## Example Usage

```typescript
import { DeleteDebitCardRequest } from "@wingspan/payments/sdk/models/operations";

let value: DeleteDebitCardRequest = {
  id: "<id>",
  memberId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_check_mark:            | Unique identifier             |
| `memberId`                    | *string*                      | :heavy_check_mark:            | Unique identifier of a member |