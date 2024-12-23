# RecipientVerification

## Example Usage

```typescript
import { RecipientVerification } from "@wingspan/payments/sdk/models/shared";

let value: RecipientVerification = {
  failureCount: 1602.30,
  tinType: "Business",
  verified: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `failureCount`                                          | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `tinType`                                               | [shared.TinType](../../../sdk/models/shared/tintype.md) | :heavy_check_mark:                                      | N/A                                                     |
| `verified`                                              | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     |