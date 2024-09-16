# DisassociateCollaboratorWithGroupResponse

## Example Usage

```typescript
import { DisassociateCollaboratorWithGroupResponse } from "@wingspan/payments/sdk/models/operations";

let value: DisassociateCollaboratorWithGroupResponse = {
  contentType: "<value>",
  statusCode: 138183,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `collaboratorSchema`                                                          | [shared.CollaboratorSchema](../../../sdk/models/shared/collaboratorschema.md) | :heavy_minus_sign:                                                            | A collaborator is a contractor that can receive payments                      |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |