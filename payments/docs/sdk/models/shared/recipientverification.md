# RecipientVerification

## Example Usage

```typescript
import { RecipientVerification } from "@wingspan/payments/sdk/models/shared";

let value: RecipientVerification = {
  failureCount: 4521.09,
  tinType: "Individual",
  verified: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `failureCount`                                          | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `tinType`                                               | [shared.TinType](../../../sdk/models/shared/tintype.md) | :heavy_check_mark:                                      | N/A                                                     |
| `verified`                                              | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     |