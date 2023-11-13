# PostPaymentsCollaborator1099RemailResponse


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `remail1099Response`                                                          | [shared.Remail1099Response](../../../sdk/models/shared/remail1099response.md) | :heavy_minus_sign:                                                            | Remail 1099 response                                                          |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                       | :heavy_minus_sign:                                                            | Raw HTTP response; suitable for custom response parsing                       |