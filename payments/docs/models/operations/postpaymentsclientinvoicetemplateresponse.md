# PostPaymentsClientInvoiceTemplateResponse


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `clientInvoiceTemplate`                                                      | [shared.ClientInvoiceTemplate](../../models/shared/clientinvoicetemplate.md) | :heavy_minus_sign:                                                           | A client created invoiceTemplate (recurring Invoice)                         |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [AxiosResponse](https://axios-http.com/docs/res_schema)                      | :heavy_minus_sign:                                                           | Raw HTTP response; suitable for custom response parsing                      |