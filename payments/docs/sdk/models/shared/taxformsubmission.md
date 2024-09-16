# TaxFormSubmission

## Example Usage

```typescript
import { TaxFormSubmission } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormSubmission = {
  correctionType: "None",
  deliveryMethod: "Electronic",
  externalDocumentId: "<value>",
  isCorrected: false,
  status: "ReadyToSubmitToIrs",
  submissionData: {},
  submissionId: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `correctionType`                                                                                        | [shared.CorrectionType](../../../sdk/models/shared/correctiontype.md)                                   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `deliveryMethod`                                                                                        | [shared.TaxFormSubmissionDeliveryMethod](../../../sdk/models/shared/taxformsubmissiondeliverymethod.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `events`                                                                                                | [shared.TaxFormSubmissionEvents](../../../sdk/models/shared/taxformsubmissionevents.md)                 | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `externalDocumentId`                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `externalMailingId`                                                                                     | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `isCorrected`                                                                                           | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `previousExternalMailingIds`                                                                            | *any*                                                                                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `status`                                                                                                | [shared.TaxFormSubmissionStatus](../../../sdk/models/shared/taxformsubmissionstatus.md)                 | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `submissionData`                                                                                        | [shared.TaxFormSubmissionData](../../../sdk/models/shared/taxformsubmissiondata.md)                     | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `submissionId`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |