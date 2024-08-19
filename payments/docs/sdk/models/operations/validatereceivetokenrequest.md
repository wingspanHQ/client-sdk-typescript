# ValidateReceiveTokenRequest

## Example Usage

```typescript
import { ValidateReceiveTokenRequest } from "@wingspan/payments/sdk/models/operations";

let value: ValidateReceiveTokenRequest = {
    id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cardTokenRequest`                                                        | [shared.CardTokenRequest](../../../sdk/models/shared/cardtokenrequest.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier                                                         |