# EligibilityRequirement

## Example Usage

```typescript
import { EligibilityRequirement } from "@wingspan/payments/sdk/models/shared";

let value: EligibilityRequirement = {
  clientId: "<value>",
  eligibilityRequirementId: "<value>",
  requirementType: "Signature",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientId`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `eligibilityRequirementId`                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `requirementType`                                                       | [shared.RequirementType](../../../sdk/models/shared/requirementtype.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `templateId`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `validFor`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |