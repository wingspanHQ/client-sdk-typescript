# InstantPayoutResponse

## Example Usage

```typescript
import { InstantPayoutResponse } from "@wingspan/payments/sdk/models/shared";

let value: InstantPayoutResponse = {
  instantPayoutAccount: {
    country: "Holy See (Vatican City State)",
    currency: "CAD",
    holderName: "<value>",
    numbers: {},
    type: "Card",
  },
  instantPayoutAccountId: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `instantPayoutAccount`                                                            | [shared.FundsTransferAccount](../../../sdk/models/shared/fundstransferaccount.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `instantPayoutAccountId`                                                          | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |