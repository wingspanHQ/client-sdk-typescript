# DeleteMemberClientAssociationResponse

## Example Usage

```typescript
import { DeleteMemberClientAssociationResponse } from "@wingspan/payments/sdk/models/operations";

let value: DeleteMemberClientAssociationResponse = {
  contentType: "<value>",
  statusCode: 265389,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `memberClientSchema`                                                          | [shared.MemberClientSchema](../../../sdk/models/shared/memberclientschema.md) | :heavy_minus_sign:                                                            | Describes details of member and client                                        |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |