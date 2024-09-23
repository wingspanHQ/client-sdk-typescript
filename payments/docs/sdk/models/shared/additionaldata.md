# AdditionalData

## Example Usage

```typescript
import { AdditionalData } from "@wingspan/payments/sdk/models/shared";

let value: AdditionalData = {
  key: "<key>",
  name: "<value>",
  required: false,
  resourceType: "Collaborator",
  type: "String",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `key`                                                             | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `required`                                                        | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               |
| `resourceType`                                                    | [shared.ResourceType](../../../sdk/models/shared/resourcetype.md) | :heavy_check_mark:                                                | N/A                                                               |
| `type`                                                            | [shared.Type](../../../sdk/models/shared/type.md)                 | :heavy_check_mark:                                                | N/A                                                               |