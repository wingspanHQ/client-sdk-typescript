# UpdateEligibilityRequirementResponse

## Example Usage

```typescript
import { UpdateEligibilityRequirementResponse } from "@wingspan/payments/sdk/models/operations";

let value: UpdateEligibilityRequirementResponse = {
  contentType: "<value>",
  statusCode: 919483,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `classes`                                                                               | [shared.EligibilityRequirement](../../../sdk/models/shared/eligibilityrequirement.md)[] | :heavy_minus_sign:                                                                      | List of Eligibility Requirements                                                        |