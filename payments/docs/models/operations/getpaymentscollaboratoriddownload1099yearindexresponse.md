# GetPaymentsCollaboratorIdDownload1099YearIndexResponse


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `download1099Response`                                                     | [shared.Download1099Response](../../models/shared/download1099response.md) | :heavy_minus_sign:                                                         | Download1099Response                                                       |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)                    | :heavy_minus_sign:                                                         | Raw HTTP response; suitable for custom response parsing                    |