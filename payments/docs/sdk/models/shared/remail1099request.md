# Remail1099Request

## Example Usage

```typescript
import { Remail1099Request } from "@wingspan/payments/sdk/models/shared";

let value: Remail1099Request = {
    address: {
        addressLine1: "44386 Hodkiewicz Pass",
        city: "New Albinhaven",
        postalCode: "76446",
        state: "Nebraska",
    },
    memberId: "<value>",
    year: 6070.45,
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                                                         | [shared.Sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56](../../../sdk/models/shared/sevenb49dbbd81f36ab6d7b4f07c5e2e53f40e36eb7b83d1488f379e993b830eec56.md) | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `documentIndex`                                                                                                                                                                   | *number*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `memberId`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `year`                                                                                                                                                                            | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |