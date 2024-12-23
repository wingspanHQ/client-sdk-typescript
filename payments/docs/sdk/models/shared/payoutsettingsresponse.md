# PayoutSettingsResponse

## Example Usage

```typescript
import { PayoutSettingsResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayoutSettingsResponse = {
  payoutDestinations: [
    {
      destinationId: "<id>",
      destinationType: "WeGift",
      name: "<value>",
      payoutMethod: "Check",
      percentage: 6995.75,
    },
  ],
  payoutPreferences: "ECheck",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `payoutDestinations`                                                                                                    | [shared.PayoutDestinationResponse](../../../sdk/models/shared/payoutdestinationresponse.md)[]                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `payoutPreferences`                                                                                                     | [shared.PayoutSettingsResponsePayoutPreferences](../../../sdk/models/shared/payoutsettingsresponsepayoutpreferences.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |