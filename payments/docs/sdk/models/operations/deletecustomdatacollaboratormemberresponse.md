# DeleteCustomDataCollaboratorMemberResponse

## Example Usage

```typescript
import { DeleteCustomDataCollaboratorMemberResponse } from "@wingspan/payments/sdk/models/operations";

let value: DeleteCustomDataCollaboratorMemberResponse = {
  contentType: "<value>",
  statusCode: 623564,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `additionalData`                                                                  | [shared.AdditionalData](../../../sdk/models/shared/additionaldata.md)             | :heavy_minus_sign:                                                                | Custom fields that are set on memberClient object to describe collaborator-member |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |