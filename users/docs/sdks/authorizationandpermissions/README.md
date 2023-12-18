# AuthorizationAndPermissions
(*authorizationAndPermissions*)

## Overview

Endpoints focused on managing user authorizations and permissions, including scopes and scope-groups.

### Available Operations

* [deleteUsersAuthorizationAuthorizationId](#deleteusersauthorizationauthorizationid) - Revoke and Remove Authorization Record
* [getUsersAuthorization](#getusersauthorization) - Retrieve All User Authorizations
* [getUsersAuthorizationAccountsUserId](#getusersauthorizationaccountsuserid) - Retrieve Accounts Authorized by User
* [getUsersAuthorizationAuthorizationId](#getusersauthorizationauthorizationid) - Retrieve Authorization Details by ID
* [getUsersAuthorizedScopeGroups](#getusersauthorizedscopegroups) - Obtain all authorized scope-groups
* [getUsersAuthorizedScopeGroupsRequestingUserId](#getusersauthorizedscopegroupsrequestinguserid) - Retrieve authorized scope-groups specific to a user
* [getUsersAuthorizedScopes](#getusersauthorizedscopes) - Retrieve all authorized scopes
* [getUsersAuthorizedScopesRequestingUserId](#getusersauthorizedscopesrequestinguserid) - Obtain authorized scopes specific to a user
* [patchUsersAuthorizationAuthorizationId](#patchusersauthorizationauthorizationid) - Modify Existing Authorization Details
* [postUsersAuthorization](#postusersauthorization) - Request User Authorization
* [postUsersFlatfileAuthToken](#postusersflatfileauthtoken) - Retrieve Authentication Token for Flatfile

## deleteUsersAuthorizationAuthorizationId

Completely removes an authorization, effectively revoking all its associated permissions and scopes for the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.deleteUsersAuthorizationAuthorizationId({
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteUsersAuthorizationAuthorizationIdRequest](../../sdk/models/operations/deleteusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteUsersAuthorizationAuthorizationIdResponse](../../sdk/models/operations/deleteusersauthorizationauthorizationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorization

Lists all the authorizations and permissions that have been granted to a user, providing an overview of their access levels across various platforms or applications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorization();

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

**Promise<[operations.GetUsersAuthorizationResponse](../../sdk/models/operations/getusersauthorizationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizationAccountsUserId

Fetches the list of accounts or services that the specified user has granted authorization to.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizationAccountsUserId({
    userId: "string",
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
| `request`                                                                                                                          | [operations.GetUsersAuthorizationAccountsUserIdRequest](../../sdk/models/operations/getusersauthorizationaccountsuseridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetUsersAuthorizationAccountsUserIdResponse](../../sdk/models/operations/getusersauthorizationaccountsuseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizationAuthorizationId

Fetch the detailed information and scope of a specific authorization using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizationAuthorizationId({
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetUsersAuthorizationAuthorizationIdRequest](../../sdk/models/operations/getusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetUsersAuthorizationAuthorizationIdResponse](../../sdk/models/operations/getusersauthorizationauthorizationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizedScopeGroups

Provides an overview of all scope-groups which define a set of permissions within the system.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizedScopeGroups();

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

**Promise<[operations.GetUsersAuthorizedScopeGroupsResponse](../../sdk/models/operations/getusersauthorizedscopegroupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizedScopeGroupsRequestingUserId

Fetches authorized scope-groups that are assigned or relevant to a particular user based on their user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizedScopeGroupsRequestingUserId({
    requestingUserId: "string",
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
| `request`                                                                                                                                              | [operations.GetUsersAuthorizedScopeGroupsRequestingUserIdRequest](../../sdk/models/operations/getusersauthorizedscopegroupsrequestinguseridrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUsersAuthorizedScopeGroupsRequestingUserIdResponse](../../sdk/models/operations/getusersauthorizedscopegroupsrequestinguseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizedScopes

Fetches a comprehensive list of all authorized scopes available in the system.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizedScopes();

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

**Promise<[operations.GetUsersAuthorizedScopesResponse](../../sdk/models/operations/getusersauthorizedscopesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorizedScopesRequestingUserId

Fetches the distinct authorized scopes assigned or relevant to a particular user based on their user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.getUsersAuthorizedScopesRequestingUserId({
    requestingUserId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetUsersAuthorizedScopesRequestingUserIdRequest](../../sdk/models/operations/getusersauthorizedscopesrequestinguseridrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetUsersAuthorizedScopesRequestingUserIdResponse](../../sdk/models/operations/getusersauthorizedscopesrequestinguseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersAuthorizationAuthorizationId

Update the details or scopes of a specific authorization using its unique identifier, allowing adjustment of the granted permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { AuthorizationUpdateRequestAllowedAction } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.patchUsersAuthorizationAuthorizationId({
    authorizationUpdateRequest: {},
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PatchUsersAuthorizationAuthorizationIdRequest](../../sdk/models/operations/patchusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PatchUsersAuthorizationAuthorizationIdResponse](../../sdk/models/operations/patchusersauthorizationauthorizationidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersAuthorization

Grants or verifies specific permissions (scopes) for a user based on the provided request. This is commonly used for third-party applications seeking access to certain user data or functionalities.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Action, AllowedAction, Comparator } from "@wingspan/users/dist/sdk/models/shared";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.postUsersAuthorization({
    requestingUserId: "string",
    scopeModifications: {
      payments: {
        memberClient: [
          {
            action: Action.Allow,
            attribute: "string",
            comparator: Comparator.Includes,
            value: "string",
          },
        ],
        payable: [
          {
            action: Action.Deny,
            attribute: "string",
            comparator: Comparator.Equals,
            value: "string",
          },
        ],
      },
      users: {
        organizationAccount: [
          {
            action: Action.Include,
            attribute: "string",
            comparator: Comparator.Includes,
            value: "string",
          },
        ],
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.AuthorizationCreateRequest](../../sdk/models/shared/authorizationcreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostUsersAuthorizationResponse](../../sdk/models/operations/postusersauthorizationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersFlatfileAuthToken

Request an authentication token required to access Flatfile services and features.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

async function run() {
  const sdk = new Users({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.authorizationAndPermissions.postUsersFlatfileAuthToken({
    embedId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.FlatfileAuthTokenRequest](../../sdk/models/shared/flatfileauthtokenrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostUsersFlatfileAuthTokenResponse](../../sdk/models/operations/postusersflatfileauthtokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
