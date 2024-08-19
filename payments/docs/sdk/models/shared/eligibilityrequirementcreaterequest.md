# EligibilityRequirementCreateRequest

## Example Usage

```typescript
import { EligibilityRequirementCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: EligibilityRequirementCreateRequest = {
    requirementType: "Signature",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `requirementType`                                                                                                                             | [shared.EligibilityRequirementCreateRequestRequirementType](../../../sdk/models/shared/eligibilityrequirementcreaterequestrequirementtype.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `templateId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `validFor`                                                                                                                                    | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |