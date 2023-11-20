# ServiceSettings
(*serviceSettings*)

## Overview

Covers endpoints that manage service statuses and related configurations.

### Available Operations

* [getPayments](#getpayments) - Check Service Status

## getPayments

Use this endpoint to determine the operational status of the payment service by obtaining the current timestamp and service name.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.serviceSettings.getPayments();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsResponse](../../sdk/models/operations/getpaymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
