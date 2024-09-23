# EstablishEligibilityRequirementResponse

## Example Usage

```typescript
import { EstablishEligibilityRequirementResponse } from "@wingspan/payments/sdk/models/operations";

let value: EstablishEligibilityRequirementResponse = {
  contentType: "<value>",
  statusCode: 367562,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `eligibilityRequirement`                                                              | [shared.EligibilityRequirement](../../../sdk/models/shared/eligibilityrequirement.md) | :heavy_minus_sign:                                                                    | Eligibility Requirement                                                               |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |