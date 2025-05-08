# ExternalIds

## Example Usage

```typescript
import { ExternalIds } from "@wingspan/payments/sdk/models/shared";

let value: ExternalIds = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `bulk`                                                                                                      | [shared.ExternalIdsBulkImport](../../../sdk/models/shared/externalidsbulkimport.md)                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `quickbooks`                                                                                                | Record<string, [shared.ExternalIdsQuickbooksData](../../../sdk/models/shared/externalidsquickbooksdata.md)> | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `stripe`                                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |