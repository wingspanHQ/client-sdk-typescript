# CustomField

## Example Usage

```typescript
import { CustomField } from "@wingspan/payments/sdk/models/shared";

let value: CustomField = {
    id: "<id>",
    key: "<key>",
    name: "<value>",
    required: false,
    resourceType: "LineItem",
    type: "Boolean",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `key`                                                                                   | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `required`                                                                              | *boolean*                                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `resourceType`                                                                          | [shared.CustomFieldResourceType](../../../sdk/models/shared/customfieldresourcetype.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `type`                                                                                  | [shared.CustomFieldType](../../../sdk/models/shared/customfieldtype.md)                 | :heavy_check_mark:                                                                      | N/A                                                                                     |