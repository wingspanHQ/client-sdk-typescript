# RequestCardAuthenticationRequest

## Example Usage

```typescript
import { RequestCardAuthenticationRequest } from "@wingspan/payments/sdk/models/operations";

let value: RequestCardAuthenticationRequest = {
    id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `cardCodeRequest`                                                       | [shared.CardCodeRequest](../../../sdk/models/shared/cardcoderequest.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier                                                       |