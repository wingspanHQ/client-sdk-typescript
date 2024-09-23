# CreatePaymentEligibilityRequirementResponse

## Example Usage

```typescript
import { CreatePaymentEligibilityRequirementResponse } from "@wingspan/payments/sdk/models/operations";

let value: CreatePaymentEligibilityRequirementResponse = {
  contentType: "<value>",
  statusCode: 653201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `paymentEligibility`                                                          | [shared.PaymentEligibility](../../../sdk/models/shared/paymenteligibility.md) | :heavy_minus_sign:                                                            | See payment eligibility requirements on member                                |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |