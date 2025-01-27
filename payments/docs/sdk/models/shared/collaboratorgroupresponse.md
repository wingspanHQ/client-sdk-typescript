# CollaboratorGroupResponse

## Example Usage

```typescript
import { CollaboratorGroupResponse } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorGroupResponse = {
  clientId: "<id>",
  collaboratorGroupId: "<id>",
  defaultGroup: false,
  description: "unwelcome aftermath grown whereas",
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