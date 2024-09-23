# CollaboratorGroupResponse

## Example Usage

```typescript
import { CollaboratorGroupResponse } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorGroupResponse = {
  clientId: "<value>",
  collaboratorGroupId: "<value>",
  defaultGroup: false,
  description: "Grass-roots mobile definition",
  name: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `clientId`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `collaboratorGroupId`                                                                   | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `collaboratorSettings`                                                                  | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `defaultGroup`                                                                          | *boolean*                                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `description`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `eligibilityRequirements`                                                               | [shared.EligibilityRequirement](../../../sdk/models/shared/eligibilityrequirement.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |