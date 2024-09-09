# TinVerification

## Example Usage

```typescript
import { TinVerification } from "@wingspan/payments/sdk/models/shared";

let value: TinVerification = {
    lastVerifiedTimestamp: 1646.94,
    message: "<value>",
    status: "pending",
    unlockTimestamp: 6214.79,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `lastVerifiedTimestamp`                                                             | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `status`                                                                            | [shared.TinVerificationStatus](../../../sdk/models/shared/tinverificationstatus.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `unlockTimestamp`                                                                   | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |