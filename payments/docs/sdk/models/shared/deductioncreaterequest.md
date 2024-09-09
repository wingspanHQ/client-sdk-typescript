# DeductionCreateRequest

## Example Usage

```typescript
import { DeductionCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: DeductionCreateRequest = {
    amount: 5521.93,
    clientId: "<value>",
    currency: "CAD",
    memberId: "<value>",
    name: "<value>",
    type: "PostPayment",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `amount`                                                                                              | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `clientId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `currency`                                                                                            | [shared.DeductionCreateRequestCurrency](../../../sdk/models/shared/deductioncreaterequestcurrency.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `memberId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `priority`                                                                                            | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `sourceInvoiceId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `startDate`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `type`                                                                                                | [shared.DeductionCreateRequestType](../../../sdk/models/shared/deductioncreaterequesttype.md)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |