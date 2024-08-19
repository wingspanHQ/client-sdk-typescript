# PaymentInfo

## Example Usage

```typescript
import { PaymentInfo } from "@wingspan/payments/sdk/models/shared";

let value: PaymentInfo = {
    meansType: "InternalAccount",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `brandImageUrl`                                             | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `cardBrand`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `meansDescription`                                          | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `meansLast4`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `meansType`                                                 | [shared.MeansType](../../../sdk/models/shared/meanstype.md) | :heavy_check_mark:                                          | N/A                                                         |