# TinVerification

## Example Usage

```typescript
import { TinVerification } from "@wingspan/payments/sdk/models/shared";

let value: TinVerification = {
  lastVerifiedTimestamp: 7301.22,
  message: "<value>",
  status: "verified",
  unlockTimestamp: 3119.45,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `lastVerifiedTimestamp`                                                             | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `status`                                                                            | [shared.TinVerificationStatus](../../../sdk/models/shared/tinverificationstatus.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `unlockTimestamp`                                                                   | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |