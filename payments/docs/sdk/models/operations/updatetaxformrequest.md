# UpdateTaxFormRequest

## Example Usage

```typescript
import { UpdateTaxFormRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateTaxFormRequest = {
  taxFormId: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `taxFormUpdateRequest`                                                            | [shared.TaxFormUpdateRequest](../../../sdk/models/shared/taxformupdaterequest.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `taxFormId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique tax Form Id                                                                |