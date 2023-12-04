# SubscriptionAndGrantsManagement
(*subscriptionAndGrantsManagement*)

### Available Operations

* [deleteUsersSubscriptionGrantId](#deleteuserssubscriptiongrantid) - Terminate a specific subscription grant by ID
* [deleteUsersUserMemberIdSubscription](#deleteusersusermemberidsubscription) - Remove Subscription for Member
* [getUsersSubscriptionGrant](#getuserssubscriptiongrant) - Fetch All Subscription Grants
* [getUsersSubscriptionGrantId](#getuserssubscriptiongrantid) - Retrieve subscription grant details by ID
* [getUsersUserMemberIdSubscription](#getusersusermemberidsubscription) - Retrieve Subscription Details by ID
* [patchUsersSubscriptionGrantId](#patchuserssubscriptiongrantid) - Modify subscription grant details
* [patchUsersUserMemberIdSubscription](#patchusersusermemberidsubscription) - Modify Subscription Details for Member
* [postUsersSubscriptionGrant](#postuserssubscriptiongrant) - New Subscription Grant
* [postUsersUserMemberIdSubscription](#postusersusermemberidsubscription) - Register a New Subscription for Member

## deleteUsersSubscriptionGrantId

Safely deletes the subscription grant associated with the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.deleteUsersSubscriptionGrantId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteUsersSubscriptionGrantIdRequest](../../sdk/models/operations/deleteuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteUsersSubscriptionGrantIdResponse](../../sdk/models/operations/deleteuserssubscriptiongrantidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteUsersUserMemberIdSubscription

Deletes the specified subscription associated with the member, removing any related data and settings.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.deleteUsersUserMemberIdSubscription({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteUsersUserMemberIdSubscriptionRequest](../../sdk/models/operations/deleteusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteUsersUserMemberIdSubscriptionResponse](../../sdk/models/operations/deleteusersusermemberidsubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSubscriptionGrant

Lists all the subscription grants in the system, helping administrators or managers overview and manage these grants.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.getUsersSubscriptionGrant();

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

**Promise<[operations.GetUsersSubscriptionGrantResponse](../../sdk/models/operations/getuserssubscriptiongrantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSubscriptionGrantId

Fetches the details of a specific subscription grant for a user using the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.getUsersSubscriptionGrantId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetUsersSubscriptionGrantIdRequest](../../sdk/models/operations/getuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetUsersSubscriptionGrantIdResponse](../../sdk/models/operations/getuserssubscriptiongrantidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberIdSubscription

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.getUsersUserMemberIdSubscription({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetUsersUserMemberIdSubscriptionRequest](../../sdk/models/operations/getusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetUsersUserMemberIdSubscriptionResponse](../../sdk/models/operations/getusersusermemberidsubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersSubscriptionGrantId

Updates specific details of a users subscription grant using the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { SubscriptionGrantUpdateRequestPackage, SubscriptionGrantUpdateRequestPackageTier } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.patchUsersSubscriptionGrantId({
    subscriptionGrantUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchUsersSubscriptionGrantIdRequest](../../sdk/models/operations/patchuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchUsersSubscriptionGrantIdResponse](../../sdk/models/operations/patchuserssubscriptiongrantidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserMemberIdSubscription

Updates the details of an existing subscription for the specified member based on the provided modifications.

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
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.patchUsersUserMemberIdSubscription({
    subscriptionUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchUsersUserMemberIdSubscriptionRequest](../../sdk/models/operations/patchusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchUsersUserMemberIdSubscriptionResponse](../../sdk/models/operations/patchusersusermemberidsubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSubscriptionGrant

Create a new subscription grant to a user. Useful for promoting and providing specific subscription benefits to users.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { SubscriptionGrantCreateRequestPackage, SubscriptionGrantCreateRequestPackageTier } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.postUsersSubscriptionGrant({
    granteeId: "string",
    package: SubscriptionGrantCreateRequestPackage.None,
    packageTier: SubscriptionGrantCreateRequestPackageTier.Premium,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.SubscriptionGrantCreateRequest](../../sdk/models/shared/subscriptiongrantcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostUsersSubscriptionGrantResponse](../../sdk/models/operations/postuserssubscriptiongrantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserMemberIdSubscription

Creates a new subscription for the specified member based on the provided details.

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
    bearerAuth: "",
  });

  const res = await sdk.subscriptionAndGrantsManagement.postUsersUserMemberIdSubscription({
    subscriptionCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostUsersUserMemberIdSubscriptionRequest](../../sdk/models/operations/postusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostUsersUserMemberIdSubscriptionResponse](../../sdk/models/operations/postusersusermemberidsubscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
