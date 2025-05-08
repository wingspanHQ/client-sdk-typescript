# PayrollSettings

## Example Usage

```typescript
import { PayrollSettings } from "@wingspan/payments/sdk/models/shared";

let value: PayrollSettings = {
  status: "Draft",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `calculationSettings1099`                                                               | [shared.CalculationSettings1099](../../../sdk/models/shared/calculationsettings1099.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `enablePlannedPayroll`                                                                  | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `enableProcessDaysBeforeDue`                                                            | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `frequency`                                                                             | [shared.Frequency](../../../sdk/models/shared/frequency.md)                             | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `fundingSource`                                                                         | [shared.FundingSource](../../../sdk/models/shared/fundingsource.md)                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `internationalPayroll`                                                                  | [shared.InternationalPayroll](../../../sdk/models/shared/internationalpayroll.md)       | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `issue1099s`                                                                            | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `processDaysBeforeDue`                                                                  | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `runsPayroll`                                                                           | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `scheduleDates`                                                                         | [shared.ScheduleDate](../../../sdk/models/shared/scheduledate.md)[]                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `status`                                                                                | [shared.PayrollSettingsStatus](../../../sdk/models/shared/payrollsettingsstatus.md)     | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `workflow`                                                                              | [shared.Workflow](../../../sdk/models/shared/workflow.md)                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |