# CreateDebitCardRequest

## Example Usage

```typescript
import { CreateDebitCardRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreateDebitCardRequest = {
  memberId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `checkbookCardCreate`                                                           | [shared.CheckbookCardCreate](../../../sdk/models/shared/checkbookcardcreate.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `memberId`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier of a member                                                   |