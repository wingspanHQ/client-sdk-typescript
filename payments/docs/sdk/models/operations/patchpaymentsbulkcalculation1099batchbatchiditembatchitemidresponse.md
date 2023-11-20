# PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `bulkPayableItem`                                                       | [shared.BulkPayableItem](../../../sdk/models/shared/bulkpayableitem.md) | :heavy_minus_sign:                                                      | An item that will be converted into a payable                           |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [AxiosResponse](https://axios-http.com/docs/res_schema)                 | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |