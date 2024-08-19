# UpdateEligibilityRequirementCollaboratorGroupRequest

## Example Usage

```typescript
import { UpdateEligibilityRequirementCollaboratorGroupRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateEligibilityRequirementCollaboratorGroupRequest = {
    eligibilityRequirementId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `collaboratorGroupRequirementUpdate`                                                                          | [shared.CollaboratorGroupRequirementUpdate](../../../sdk/models/shared/collaboratorgrouprequirementupdate.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `eligibilityRequirementId`                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Unique eligibility Requirement Id                                                                             |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Unique identifier                                                                                             |