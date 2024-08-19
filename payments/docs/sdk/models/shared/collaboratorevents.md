# CollaboratorEvents

## Example Usage

```typescript
import { CollaboratorEvents } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorEvents = {
    knowYourCustomerVerifiedAt: "<value>",
    payoutMethodFirstAddedAt: "<value>",
    taxDocumentationVerifiedAt: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `knowYourCustomerVerifiedAt` | *string*                     | :heavy_check_mark:           | N/A                          |
| `payoutMethodFirstAddedAt`   | *string*                     | :heavy_check_mark:           | N/A                          |
| `signedUpAt`                 | *string*                     | :heavy_minus_sign:           | N/A                          |
| `taxDocumentationVerifiedAt` | *string*                     | :heavy_check_mark:           | N/A                          |