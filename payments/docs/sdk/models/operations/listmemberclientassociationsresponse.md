# ListMemberClientAssociationsResponse

## Example Usage

```typescript
import { ListMemberClientAssociationsResponse } from "@wingspan/payments/sdk/models/operations";

let value: ListMemberClientAssociationsResponse = {
    contentType: "<value>",
    statusCode: 170909,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `classes`                                                                       | [shared.MemberClientSchema](../../../sdk/models/shared/memberclientschema.md)[] | :heavy_minus_sign:                                                              | A list of memberClient objects                                                  |