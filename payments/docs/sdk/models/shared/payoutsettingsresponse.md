# PayoutSettingsResponse

## Example Usage

```typescript
import { PayoutSettingsResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayoutSettingsResponse = {
    payoutDestinations: [
        {
            destinationId: "<value>",
            destinationType: "Account",
            name: "<value>",
            payoutMethod: "ECheck",
            percentage: 5370.23,
        },
    ],
    payoutPreferences: "Check",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `payoutDestinations`                                                                                                    | [shared.PayoutDestinationResponse](../../../sdk/models/shared/payoutdestinationresponse.md)[]                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `payoutPreferences`                                                                                                     | [shared.PayoutSettingsResponsePayoutPreferences](../../../sdk/models/shared/payoutsettingsresponsepayoutpreferences.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |