# CollaboratorGroupCreateRequest

## Example Usage

```typescript
import { CollaboratorGroupCreateRequest } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorGroupCreateRequest = {
    description: "Monitored executive functionalities",
    name: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `collaboratorSettings`                                                                              | Record<string, *string*>                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `eligibilityRequirements`                                                                           | [shared.CollaboratorGroupRequirement](../../../sdk/models/shared/collaboratorgrouprequirement.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |