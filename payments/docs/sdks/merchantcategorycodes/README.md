# MerchantCategoryCodes
(*merchantCategoryCodes*)

## Overview

Endpoint that provides a comprehensive list of available Merchant Category Codes.

### Available Operations

* [getPaymentsMcc](#getpaymentsmcc) - Retrieve Merchant Category Codes (MCC)

## getPaymentsMcc

This endpoint provides a comprehensive list of available Merchant Category Codes (MCC) which are used to classify businesses by the type of services or goods they provide.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.merchantCategoryCodes.getPaymentsMcc();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentsMccResponse](../../sdk/models/operations/getpaymentsmccresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
