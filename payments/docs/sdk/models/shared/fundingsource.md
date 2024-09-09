# FundingSource

## Example Usage

```typescript
import { FundingSource } from "@wingspan/payments/sdk/models/shared";

let value: FundingSource = {
    fundingSourceCurrency: "USD",
    fundingSourceId: "<value>",
    fundingSourceType: "Account",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `fundingSourceCurrency`                                                             | [shared.FundingSourceCurrency](../../../sdk/models/shared/fundingsourcecurrency.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `fundingSourceId`                                                                   | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `fundingSourceType`                                                                 | [shared.FundingSourceType](../../../sdk/models/shared/fundingsourcetype.md)         | :heavy_check_mark:                                                                  | N/A                                                                                 |