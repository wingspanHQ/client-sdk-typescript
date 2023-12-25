# SubscriptionManagement
(*subscriptionManagement*)

## Overview

Endpoints related to managing user subscriptions and subscription grants.

### Available Operations

* [deleteUsersUserMemberMemberIdNextgenSubscriptionId](#deleteusersusermembermemberidnextgensubscriptionid) - Revoke a Nextgen Subscription for Member
* [getUsersUserMemberMemberIdNextgenSubscription](#getusersusermembermemberidnextgensubscription) - Fetch All Nextgen Subscriptions for Member
* [getUsersUserMemberMemberIdNextgenSubscriptionPlan](#getusersusermembermemberidnextgensubscriptionplan) - Browse Available Nextgen Subscription Plans
* [getUsersUserMemberMemberIdNextgenSubscriptionPlanId](#getusersusermembermemberidnextgensubscriptionplanid) - Retrieve Specific Nextgen Subscription Plan
* [getUsersUserMemberMemberIdNextgenSubscriptionId](#getusersusermembermemberidnextgensubscriptionid) - Retrieve Details of a Specific Nextgen Subscription
* [patchUsersUserMemberMemberIdNextgenSubscriptionId](#patchusersusermembermemberidnextgensubscriptionid) - Modify an Existing Nextgen Subscription for Member
* [postUsersUserMemberMemberIdNextgenSubscription](#postusersusermembermemberidnextgensubscription) - Initiate a New Nextgen Subscription for a Member

## deleteUsersUserMemberMemberIdNextgenSubscriptionId

Remove and terminate a specific Nextgen subscription associated with the member, revoking their access to Nextgen features.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.deleteUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.DeleteUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../sdk/models/operations/deleteusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.DeleteUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../sdk/models/operations/deleteusersusermembermemberidnextgensubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsersUserMemberMemberIdNextgenSubscription

Retrieve all the active and previous Nextgen subscriptions associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.getUsersUserMemberMemberIdNextgenSubscription({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionRequest](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionResponse](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionPlan

Fetches an array of available Nextgen Subscription Plans, providing members with an overview of the different subscription options, features, and pricing details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.getUsersUserMemberMemberIdNextgenSubscriptionPlan({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanRequest](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionplanrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanResponse](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionplanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionPlanId

Fetches detailed information and pricing for a specific Nextgen Subscription Plan based on the provided plan ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.getUsersUserMemberMemberIdNextgenSubscriptionPlanId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanIdRequest](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionplanidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanIdResponse](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionplanidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionId

Fetch detailed information about a specific Nextgen subscription associated with the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.getUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../sdk/models/operations/getusersusermembermemberidnextgensubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchUsersUserMemberMemberIdNextgenSubscriptionId

Update the details or terms of an existing Nextgen subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  SubscriptionUpdateRequestPackage,
  SubscriptionUpdateRequestPackageTier,
  SubscriptionUpdateRequestTerm,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.patchUsersUserMemberMemberIdNextgenSubscriptionId({
    subscriptionUpdateRequest: {},
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PatchUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../sdk/models/operations/patchusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PatchUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../sdk/models/operations/patchusersusermembermemberidnextgensubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postUsersUserMemberMemberIdNextgenSubscription

Create a Nextgen subscription for a specific member, granting them access to Nextgen features and services.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  SubscriptionCreateRequestPackage,
  SubscriptionCreateRequestPackageTier,
  SubscriptionCreateRequestTerm,
} from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.subscriptionManagement.postUsersUserMemberMemberIdNextgenSubscription({
    subscriptionCreateRequest: {},
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.PostUsersUserMemberMemberIdNextgenSubscriptionRequest](../../sdk/models/operations/postusersusermembermemberidnextgensubscriptionrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.PostUsersUserMemberMemberIdNextgenSubscriptionResponse](../../sdk/models/operations/postusersusermembermemberidnextgensubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
