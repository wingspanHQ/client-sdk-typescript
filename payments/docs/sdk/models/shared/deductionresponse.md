# DeductionResponse

## Example Usage

```typescript
import { DeductionResponse } from "@wingspan/payments/sdk/models/shared";

let value: DeductionResponse = {
  amount: 1173.8,
  application: [
    {
      amountDeducted: 1598.45,
      payableId: "<id>",
    },
  ],
  clientId: "<id>",
  createdAt: "1707881629151",
  currency: "CAD",
  deductionId: "<id>",
  eventActors: {
    "key": "<value>",
  },
  labels: {
    "key": "<value>",
  },
  memberId: "<id>",
  name: "<value>",
  priority: 38.6,
  startDate: "<value>",
  status: "Pending",
  type: "PostPayment",
  updatedAt: "1737862174249",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `application`                                                                                             | [shared.DeductionApplication](../../../sdk/models/shared/deductionapplication.md)[]                       | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `clientId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `currency`                                                                                                | [shared.DeductionResponseCurrency](../../../sdk/models/shared/deductionresponsecurrency.md)               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `deductionId`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `deductionTemplateId`                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `disbursement`                                                                                            | [shared.PostPaymentDeductionDisbursement](../../../sdk/models/shared/postpaymentdeductiondisbursement.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `eventActors`                                                                                             | Record<string, *string*>                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `labels`                                                                                                  | Record<string, *string*>                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `memberId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `priority`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `sourceInvoiceId`                                                                                         | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `startDate`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `status`                                                                                                  | [shared.DeductionResponseStatus](../../../sdk/models/shared/deductionresponsestatus.md)                   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `type`                                                                                                    | [shared.DeductionResponseType](../../../sdk/models/shared/deductionresponsetype.md)                       | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `updatedAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `userRoles`                                                                                               | [shared.UserRoles](../../../sdk/models/shared/userroles.md)                                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |