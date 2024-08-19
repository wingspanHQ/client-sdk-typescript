# CollaboratorV2FormW9Info

## Example Usage

```typescript
import { CollaboratorV2FormW9Info } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorV2FormW9Info = {
    addressLine1: "3294 Shana Villages",
    city: "Troycester",
    companyStructure: "LLCPartnership",
    country: "Latvia",
    postalCode: "78428-8167",
    state: "Alabama",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `addressLine1`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `addressLine2`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `city`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `companyStructure`                                                        | [shared.CompanyStructure](../../../sdk/models/shared/companystructure.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `country`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `dob`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `ein`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `firstName`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `lastName`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `legalBusinessName`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `postalCode`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `ssnLastFour`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `state`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |