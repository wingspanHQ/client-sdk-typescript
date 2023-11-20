# AccountAndBankingOperations
(*accountAndBankingOperations*)

## Overview

Endpoints for handling account linkages, bank account information, and related financial operations.

### Available Operations

* [deleteUsersAccountId](#deleteusersaccountid) - Unlink Bank Account
* [getUsersAccount](#getusersaccount) - Retrieve All Linked Bank Accounts
* [getUsersAccountId](#getusersaccountid) - Fetch Specific Bank Account Details
* [patchUsersAccountId](#patchusersaccountid) - Modify Bank Account Details
* [postUsersAccount](#postusersaccount) - Add New Bank Account
* [postUsersAccountLink](#postusersaccountlink) - Generate Plaid Link Token for Account Integration
* [postUsersAccountRequirements](#postusersaccountrequirements) - Fetch Necessary Account Details
* [postUsersGuestAccountNumbers](#postusersguestaccountnumbers) - Retrieve Account Numbers for Guests

## deleteUsersAccountId

Allows members to securely remove a linked bank account from their profile.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.deleteUsersAccountId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteUsersAccountIdRequest](../../sdk/models/operations/deleteusersaccountidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteUsersAccountIdResponse](../../sdk/models/operations/deleteusersaccountidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAccount

Fetches a list of all bank accounts associated with the member, providing an overview of linked financial institutions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.getUsersAccount();

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

**Promise<[operations.GetUsersAccountResponse](../../sdk/models/operations/getusersaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAccountId

Retrieves comprehensive details for a specified bank account linked to the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.getUsersAccountId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetUsersAccountIdRequest](../../sdk/models/operations/getusersaccountidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUsersAccountIdResponse](../../sdk/models/operations/getusersaccountidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersAccountId

Enables members to make modifications to the details of their linked bank account.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { AccountUpdateRequestStatus, AccountUpdateRequestUsage } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.patchUsersAccountId({
    accountUpdateRequest: {
      integration: {
        quickbooks: {},
      },
      usedFor: {},
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PatchUsersAccountIdRequest](../../sdk/models/operations/patchusersaccountidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PatchUsersAccountIdResponse](../../sdk/models/operations/patchusersaccountidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersAccount

Link a new bank account either by synchronizing with Plaid or by manually providing necessary account details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  AccountCreateRequestStatus,
  AccountCreateRequestSubType,
  AccountCreateRequestType,
  AccountCreateRequestUsage,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.postUsersAccount({
    canBeUsedFor: {},
    numbers: {
      account: "31307069",
    },
    owners: [
      "string",
    ],
    usedFor: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.AccountCreateRequest](../../sdk/models/shared/accountcreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersAccountResponse](../../sdk/models/operations/postusersaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersAccountLink

Initiates the process to generate a token for integrating with Plaid Link or conducting OAuth authentication. Essential for securely linking user bank accounts.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.postUsersAccountLink({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.LinkTokenRequest](../../sdk/models/shared/linktokenrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PostUsersAccountLinkResponse](../../sdk/models/operations/postusersaccountlinkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersAccountRequirements

Obtains the specific details and information required for the user to set up or complete their account configuration.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.postUsersAccountRequirements({
    country: "Tokelau",
    currency: "Uganda Shilling",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.AccountRequirementsRequest](../../sdk/models/shared/accountrequirementsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostUsersAccountRequirementsResponse](../../sdk/models/operations/postusersaccountrequirementsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersGuestAccountNumbers

Allows guest users to fetch their associated bank account numbers based on the provided request details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.accountAndBankingOperations.postUsersGuestAccountNumbers({
    accountId: "string",
    publicToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.GuestAccountRequest](../../sdk/models/shared/guestaccountrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.PostUsersGuestAccountNumbersResponse](../../sdk/models/operations/postusersguestaccountnumbersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
