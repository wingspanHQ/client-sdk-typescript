# Users SDK


## Overview

Wingspan Users API: Users

### Available Operations

* [deleteUsersAccountId](#deleteusersaccountid) - Unlink Bank Account
* [deleteUsersActivityId](#deleteusersactivityid) - Remove Specific Activity Record for a Member
* [deleteUsersAuthorizationAuthorizationId](#deleteusersauthorizationauthorizationid) - Revoke and Remove Authorization Record
* [deleteUsersSessionApiId](#deleteuserssessionapiid) - Terminate a Specific API Session
* [deleteUsersSessionTokenId](#deleteuserssessiontokenid) - Terminate a user session using token ID
* [deleteUsersSubscriptionGrantId](#deleteuserssubscriptiongrantid) - Terminate a specific subscription grant by ID
* [deleteUsersUserMemberSubscriptionId](#deleteusersusermembersubscriptionid) - DEPRECATEDdeleteSubscription
* [deleteUsersUserMemberIdSubscription](#deleteusersusermemberidsubscription) - Remove Subscription for Member
* [deleteUsersUserMemberMemberIdNextgenSubscriptionId](#deleteusersusermembermemberidnextgensubscriptionid) - Revoke a Nextgen Subscription for Member
* [getUsers](#getusers) - Health Check for User Service
* [getUsersAccount](#getusersaccount) - Retrieve All Linked Bank Accounts
* [getUsersAccountId](#getusersaccountid) - Fetch Specific Bank Account Details
* [getUsersActivity](#getusersactivity) - Retrieve All Activities of a Member
* [getUsersActivityId](#getusersactivityid) - Retrieve Specific Activity Details for a Member
* [getUsersAuthorization](#getusersauthorization) - Retrieve All User Authorizations
* [getUsersAuthorizationAccountsUserId](#getusersauthorizationaccountsuserid) - Retrieve Accounts Authorized by User
* [getUsersAuthorizationAuthorizationId](#getusersauthorizationauthorizationid) - Retrieve Authorization Details by ID
* [getUsersAuthorizedScopeGroups](#getusersauthorizedscopegroups) - Obtain all authorized scope-groups
* [getUsersAuthorizedScopeGroupsRequestingUserId](#getusersauthorizedscopegroupsrequestinguserid) - Retrieve authorized scope-groups specific to a user
* [getUsersAuthorizedScopes](#getusersauthorizedscopes) - Retrieve all authorized scopes
* [getUsersAuthorizedScopesRequestingUserId](#getusersauthorizedscopesrequestinguserid) - Obtain authorized scopes specific to a user
* [getUsersGrantedSubscriberSubscriptionGrant](#getusersgrantedsubscribersubscriptiongrant) - Retrieve Subscription Grants for a Granted Subscriber
* [getUsersOrganizationUser](#getusersorganizationuser) - Retrieve All Organization User Accounts
* [getUsersOrganizationUserUserId](#getusersorganizationuseruserid) - Retrieve Organization User Profile
* [getUsersOrganizationUserUserIdSession](#getusersorganizationuseruseridsession) - Initiate Session for Organization User
* [getUsersSessionApi](#getuserssessionapi) - Retrieve All API Sessions Created by the Current User
* [getUsersSessionApiId](#getuserssessionapiid) - Fetch Details of a Specific API Session
* [getUsersSessionTokenId](#getuserssessiontokenid) - Retrieve session details using token ID
* [getUsersSubscriptionGrant](#getuserssubscriptiongrant) - Fetch All Subscription Grants
* [getUsersSubscriptionGrantId](#getuserssubscriptiongrantid) - Retrieve subscription grant details by ID
* [getUsersUserClientId](#getusersuserclientid) - Retrieve Client Details by ID
* [getUsersUserEmailEmail](#getusersuseremailemail) - Retrieve User by Email Address
* [getUsersUserLocation](#getusersuserlocation) - Retrieve User's Location
* [getUsersUserMemberSubscriptionPaymentHistory](#getusersusermembersubscriptionpaymenthistory) - Retrieve payment history for membership
* [getUsersUserMemberSubscriptionPaymentMethod](#getusersusermembersubscriptionpaymentmethod) - DEPRECATED Get Payment Method
* [getUsersUserMemberSubscriptionPlan](#getusersusermembersubscriptionplan) - DEPRECATEDlist membership plans
* [getUsersUserMemberSubscriptionPlanId](#getusersusermembersubscriptionplanid) - DEPRECATEDget membership plan
* [getUsersUserMemberSubscriptionId](#getusersusermembersubscriptionid) - DEPRECATEDgetSubscription
* [getUsersUserMemberId](#getusersusermemberid) - Retrieve Subscription Details by ID
* [getUsersUserMemberIdAdvocate](#getusersusermemberidadvocate) - Retrieve Advocate Information for the Specified Member
* [getUsersUserMemberIdSubscription](#getusersusermemberidsubscription) - Retrieve Subscription Details by ID
* [getUsersUserMemberMemberIdNextgenSubscription](#getusersusermembermemberidnextgensubscription) - Fetch All Nextgen Subscriptions for Member
* [getUsersUserMemberMemberIdNextgenSubscriptionPlan](#getusersusermembermemberidnextgensubscriptionplan) - Browse Available Nextgen Subscription Plans
* [getUsersUserMemberMemberIdNextgenSubscriptionPlanId](#getusersusermembermemberidnextgensubscriptionplanid) - Retrieve Specific Nextgen Subscription Plan
* [getUsersUserMemberMemberIdNextgenSubscriptionId](#getusersusermembermemberidnextgensubscriptionid) - Retrieve Details of a Specific Nextgen Subscription
* [getUsersUserOccupation](#getusersuseroccupation) - Retrieve User's Occupation Details
* [getUsersUserPublicId](#getusersuserpublicid) - Retrieve Public User Profile by ID
* [getUsersUserTagId](#getusersusertagid) - Retrieve User by Tag ID
* [getUsersUserId](#getusersuserid) - Fetch user profile details using user ID
* [patchUsersAccountId](#patchusersaccountid) - Modify Bank Account Details
* [patchUsersActivityId](#patchusersactivityid) - Modify Specific Activity Details for a Member
* [patchUsersAuthorizationAuthorizationId](#patchusersauthorizationauthorizationid) - Modify Existing Authorization Details
* [patchUsersOrganizationUserUserId](#patchusersorganizationuseruserid) - Modify Organization User Profile
* [patchUsersOrganizationUserUserIdAssociate](#patchusersorganizationuseruseridassociate) - Modify the Association of Child User to Parent Organization
* [patchUsersSessionApiId](#patchuserssessionapiid) - Modify a Specific API Session
* [patchUsersSessionOtp](#patchuserssessionotp) - Confirm OTP/2FA Verification
* [patchUsersSubscriptionGrantId](#patchuserssubscriptiongrantid) - Modify subscription grant details
* [patchUsersUserClientId](#patchusersuserclientid) - Modify Existing Client Details by ID
* [patchUsersUserMemberSubscriptionPaymentMethod](#patchusersusermembersubscriptionpaymentmethod) - DEPRECATED Update Payment Method
* [patchUsersUserMemberSubscriptionId](#patchusersusermembersubscriptionid) - DEPRECATEDupdateSubscription
* [patchUsersUserMemberId](#patchusersusermemberid) - Modify Subscription Details for Member
* [patchUsersUserMemberIdSubscription](#patchusersusermemberidsubscription) - Modify Subscription Details for Member
* [patchUsersUserMemberMemberIdNextgenSubscriptionId](#patchusersusermembermemberidnextgensubscriptionid) - Modify an Existing Nextgen Subscription for Member
* [patchUsersUserId](#patchusersuserid) - Modify user account details using user ID
* [patchUsersUserIdVerificationEmail](#patchusersuseridverificationemail) - Confirm Email Verification Status
* [patchUsersUserIdVerificationPhone](#patchusersuseridverificationphone) - Validate Phone Verification Status
* [postUsersAccount](#postusersaccount) - Add New Bank Account
* [postUsersAccountLink](#postusersaccountlink) - Generate Plaid Link Token for Account Integration
* [postUsersAccountRequirements](#postusersaccountrequirements) - Fetch Necessary Account Details
* [postUsersActivity](#postusersactivity) - Log New Activity for Member
* [postUsersAuthentication](#postusersauthentication) - Authenticate User Request
* [postUsersAuthorization](#postusersauthorization) - Request User Authorization
* [postUsersFlatfileAuthToken](#postusersflatfileauthtoken) - Retrieve Authentication Token for Flatfile
* [postUsersGuestAccountNumbers](#postusersguestaccountnumbers) - Retrieve Account Numbers for Guests
* [postUsersOrganizationUser](#postusersorganizationuser) - Register New User within Organization
* [postUsersOrganizationUserUserIdAssociate](#postusersorganizationuseruseridassociate) - Link a Child User to a Parent Organization Account
* [postUsersPendingSession](#postuserspendingsession) - Initiate a new session with pending status
* [postUsersPendingUser](#postuserspendinguser) - Register a new user with pending status
* [postUsersSession](#postuserssession) - Initiate a New User Session
* [postUsersSessionApi](#postuserssessionapi) - Create a New API Session
* [postUsersSessionOtp](#postuserssessionotp) - Initiate OTP/2FA Verification Process
* [postUsersSessionRequestingUser](#postuserssessionrequestinguser) - Request to Sign-In on Behalf of Another User
* [postUsersSessionSingleSignOn](#postuserssessionsinglesignon) - Create a Single Sign-On (SSO) Session
* [postUsersSessionSocialAuthGoogle](#postuserssessionsocialauthgoogle) - Authenticate using Google
* [postUsersSubscriptionGrant](#postuserssubscriptiongrant) - New Subscription Grant
* [postUsersUser](#postusersuser) - Register a new user
* [postUsersUserClientId](#postusersuserclientid) - Register a New Client with Specific ID
* [postUsersUserMemberSubscriptionPaymentMethod](#postusersusermembersubscriptionpaymentmethod) - DEPRECATED create Payment Method
* [postUsersUserMemberId](#postusersusermemberid) - Register a New Subscription for Member
* [postUsersUserMemberIdSubscription](#postusersusermemberidsubscription) - Register a New Subscription for Member
* [postUsersUserMemberMemberIdNextgenSubscription](#postusersusermembermemberidnextgensubscription) - Initiate a New Nextgen Subscription for a Member
* [postUsersUserPasswordReset](#postusersuserpasswordreset) - Initiate User Password Reset Process
* [postUsersUserIdVerificationEmail](#postusersuseridverificationemail) - Initiate Email Verification Process for User
* [postUsersUserIdVerificationExistingEmail](#postusersuseridverificationexistingemail) - Initiate verification for an existing email address
* [postUsersUserIdVerificationPhone](#postusersuseridverificationphone) - Start Phone Verification Process for User

## deleteUsersAccountId

Allows members to securely remove a linked bank account from their profile.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersAccountId({
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

## deleteUsersActivityId

Deletes a specific activity record associated with a member, ensuring that its details are no longer retrievable.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersActivityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteUsersActivityIdRequest](../../sdk/models/operations/deleteusersactivityidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteUsersActivityIdResponse](../../sdk/models/operations/deleteusersactivityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteUsersAuthorizationAuthorizationId

Completely removes an authorization, effectively revoking all its associated permissions and scopes for the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersAuthorizationAuthorizationId({
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## deleteUsersSessionApiId

Deletes a specific API session, ending its validity and associated permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersSessionApiId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteUsersSessionApiIdRequest](../../sdk/models/operations/deleteuserssessionapiidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteUsersSessionApiIdResponse](../../sdk/models/operations/deleteuserssessionapiidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteUsersSessionTokenId

Safely terminates the active user session associated with the provided session token ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersSessionTokenId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteUsersSessionTokenIdRequest](../../sdk/models/operations/deleteuserssessiontokenidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteUsersSessionTokenIdResponse](../../sdk/models/operations/deleteuserssessiontokenidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteUsersSubscriptionGrantId

Safely deletes the subscription grant associated with the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersSubscriptionGrantId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## deleteUsersUserMemberSubscriptionId

DEPRECATEDdeleteSubscription

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersUserMemberSubscriptionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.DeleteUsersUserMemberSubscriptionIdRequest](../../sdk/models/operations/deleteusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.DeleteUsersUserMemberSubscriptionIdResponse](../../sdk/models/operations/deleteusersusermembersubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteUsersUserMemberIdSubscription

Deletes the specified subscription associated with the member, removing any related data and settings.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersUserMemberIdSubscription({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## deleteUsersUserMemberMemberIdNextgenSubscriptionId

Remove and terminate a specific Nextgen subscription associated with the member, revoking their access to Nextgen features.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.deleteUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getUsers

Verifies the connectivity and health status of the User Service by sending a ping request. Useful for monitoring and ensuring the service is up and running.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsers();

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

**Promise<[operations.GetUsersResponse](../../sdk/models/operations/getusersresponse.md)>**
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
  const sdk = new Users();

  const res = await sdk.getUsersAccount();

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
  const sdk = new Users();

  const res = await sdk.getUsersAccountId({
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

## getUsersActivity

Lists all activities associated with a member, providing a comprehensive view of their interactions and actions within the platform.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersActivity();

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

**Promise<[operations.GetUsersActivityResponse](../../sdk/models/operations/getusersactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersActivityId

Fetches detailed information about a specific activity associated with a member using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersActivityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUsersActivityIdRequest](../../sdk/models/operations/getusersactivityidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersActivityIdResponse](../../sdk/models/operations/getusersactivityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersAuthorization

Lists all the authorizations and permissions that have been granted to a user, providing an overview of their access levels across various platforms or applications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorization();

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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizationAccountsUserId({
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizationAuthorizationId({
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizedScopeGroups();

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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizedScopeGroupsRequestingUserId({
    requestingUserId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizedScopes();

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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersAuthorizedScopesRequestingUserId({
    requestingUserId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## getUsersGrantedSubscriberSubscriptionGrant

Fetches a list of subscription grants associated with a specific granted subscriber. Helps in understanding and managing subscriber benefits.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersGrantedSubscriberSubscriptionGrant();

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

**Promise<[operations.GetUsersGrantedSubscriberSubscriptionGrantResponse](../../sdk/models/operations/getusersgrantedsubscribersubscriptiongrantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersOrganizationUser

Provides a comprehensive list of all user accounts that are affiliated with or under the jurisdiction of the specified organization.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersOrganizationUser();

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

**Promise<[operations.GetUsersOrganizationUserResponse](../../sdk/models/operations/getusersorganizationuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersOrganizationUserUserId

Fetches detailed profile information of a specific user associated with an organization using their unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersOrganizationUserUserId({
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetUsersOrganizationUserUserIdRequest](../../sdk/models/operations/getusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdResponse](../../sdk/models/operations/getusersorganizationuseruseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersOrganizationUserUserIdSession

Initiates a session for an organization user, providing them access to authorized resources.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersOrganizationUserUserIdSession({
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetUsersOrganizationUserUserIdSessionRequest](../../sdk/models/operations/getusersorganizationuseruseridsessionrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdSessionResponse](../../sdk/models/operations/getusersorganizationuseruseridsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSessionApi

Lists all API sessions that were initiated by the authenticated user, aiding in management and tracking.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersSessionApi();

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

**Promise<[operations.GetUsersSessionApiResponse](../../sdk/models/operations/getuserssessionapiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSessionApiId

Retrieves the details of an API session using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersSessionApiId({
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
| `request`                                                                                            | [operations.GetUsersSessionApiIdRequest](../../sdk/models/operations/getuserssessionapiidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersSessionApiIdResponse](../../sdk/models/operations/getuserssessionapiidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSessionTokenId

Fetches details of an active user session using the provided unique session token ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersSessionTokenId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetUsersSessionTokenIdRequest](../../sdk/models/operations/getuserssessiontokenidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetUsersSessionTokenIdResponse](../../sdk/models/operations/getuserssessiontokenidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersSubscriptionGrant

Lists all the subscription grants in the system, helping administrators or managers overview and manage these grants.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersSubscriptionGrant();

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

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersSubscriptionGrantId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## getUsersUserClientId

Fetches the comprehensive details of a specific client using the given unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserClientId({
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
| `request`                                                                                            | [operations.GetUsersUserClientIdRequest](../../sdk/models/operations/getusersuserclientidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserClientIdResponse](../../sdk/models/operations/getusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserEmailEmail

Fetches user details based on the provided email address. Useful for situations where the email is known, and user specifics are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserEmailEmail({
    email: "Vincenzo19@gmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetUsersUserEmailEmailRequest](../../sdk/models/operations/getusersuseremailemailrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetUsersUserEmailEmailResponse](../../sdk/models/operations/getusersuseremailemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserLocation

Fetches the geographical location information associated with the user, such as city, state, and country details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserLocation();

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

**Promise<[operations.GetUsersUserLocationResponse](../../sdk/models/operations/getusersuserlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionPaymentHistory

Fetches a history of payments made for the user's membership subscription.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberSubscriptionPaymentHistory();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPaymentHistoryResponse](../../sdk/models/operations/getusersusermembersubscriptionpaymenthistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionPaymentMethod

DEPRECATED Get Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberSubscriptionPaymentMethod();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPaymentMethodResponse](../../sdk/models/operations/getusersusermembersubscriptionpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionPlan

DEPRECATEDlist membership plans

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberSubscriptionPlan();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPlanResponse](../../sdk/models/operations/getusersusermembersubscriptionplanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionPlanId

DEPRECATEDget membership plan

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberSubscriptionPlanId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetUsersUserMemberSubscriptionPlanIdRequest](../../sdk/models/operations/getusersusermembersubscriptionplanidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetUsersUserMemberSubscriptionPlanIdResponse](../../sdk/models/operations/getusersusermembersubscriptionplanidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberSubscriptionId

DEPRECATEDgetSubscription

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberSubscriptionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetUsersUserMemberSubscriptionIdRequest](../../sdk/models/operations/getusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetUsersUserMemberSubscriptionIdResponse](../../sdk/models/operations/getusersusermembersubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberId

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberId({
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
| `request`                                                                                            | [operations.GetUsersUserMemberIdRequest](../../sdk/models/operations/getusersusermemberidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserMemberIdResponse](../../sdk/models/operations/getusersusermemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberIdAdvocate

Fetches the advocate details associated with the specified member. An advocate often refers to a person who supports or recommends a particular cause or policy, in this context, related to the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberIdAdvocate({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetUsersUserMemberIdAdvocateRequest](../../sdk/models/operations/getusersusermemberidadvocaterequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetUsersUserMemberIdAdvocateResponse](../../sdk/models/operations/getusersusermemberidadvocateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberIdSubscription

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberIdSubscription({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## getUsersUserMemberMemberIdNextgenSubscription

Retrieve all the active and previous Nextgen subscriptions associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberMemberIdNextgenSubscription({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionPlan

Fetches an array of available Nextgen Subscription Plans, providing members with an overview of the different subscription options, features, and pricing details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberMemberIdNextgenSubscriptionPlan({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionPlanId

Fetches detailed information and pricing for a specific Nextgen Subscription Plan based on the provided plan ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberMemberIdNextgenSubscriptionPlanId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getUsersUserMemberMemberIdNextgenSubscriptionId

Fetch detailed information about a specific Nextgen subscription associated with the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getUsersUserOccupation

Fetches a comprehensive list of occupations that users can associate with their profiles. This provides insight into the user's profession or field of expertise.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserOccupation();

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

**Promise<[operations.GetUsersUserOccupationResponse](../../sdk/models/operations/getusersuseroccupationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserPublicId

Obtains the public profile details of a user using their unique identifier. This is useful when only non-sensitive, public-facing user details are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserPublicId({
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
| `request`                                                                                            | [operations.GetUsersUserPublicIdRequest](../../sdk/models/operations/getusersuserpublicidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserPublicIdResponse](../../sdk/models/operations/getusersuserpublicidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserTagId

Fetches the user details associated with a specific tag identifier. Useful for querying users based on custom tags or categories.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserTagId({
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
| `request`                                                                                      | [operations.GetUsersUserTagIdRequest](../../sdk/models/operations/getusersusertagidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUsersUserTagIdResponse](../../sdk/models/operations/getusersusertagidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsersUserId

Retrieves comprehensive details of a user account using the provided unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.getUsersUserId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetUsersUserIdRequest](../../sdk/models/operations/getusersuseridrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetUsersUserIdResponse](../../sdk/models/operations/getusersuseridresponse.md)>**
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
  const sdk = new Users();

  const res = await sdk.patchUsersAccountId({
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

## patchUsersActivityId

Updates the details of a specific activity record associated with a member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersActivityId({
    activityUpdateRequest: {
      context: {},
      events: {},
      flows: {},
    },
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
| `request`                                                                                            | [operations.PatchUsersActivityIdRequest](../../sdk/models/operations/patchusersactivityidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchUsersActivityIdResponse](../../sdk/models/operations/patchusersactivityidresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersAuthorizationAuthorizationId({
    authorizationUpdateRequest: {},
    authorizationId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## patchUsersOrganizationUserUserId

Updates profile details of a user associated with an organization. Only modified fields need to be included in the request.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersOrganizationUserUserId({
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PatchUsersOrganizationUserUserIdRequest](../../sdk/models/operations/patchusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdResponse](../../sdk/models/operations/patchusersorganizationuseruseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersOrganizationUserUserIdAssociate

Update the relationship details or permissions between a user and its parent organization account.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  ExternalFinancialAccounts,
  FundingSource,
  PayoutSettings,
  WingspanAccount,
  WingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersOrganizationUserUserIdAssociate({
    organizationUserAssociationUpdate: {
      inheritanceStrategy: {
        externalFinancialAccounts: ExternalFinancialAccounts.None,
        fundingSource: FundingSource.None,
        payoutSettings: PayoutSettings.None,
        wingspanAccount: WingspanAccount.Parent,
        wingspanFinancialSettings: WingspanFinancialSettings.Parent,
      },
    },
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchUsersOrganizationUserUserIdAssociateRequest](../../sdk/models/operations/patchusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdAssociateResponse](../../sdk/models/operations/patchusersorganizationuseruseridassociateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersSessionApiId

Updates the properties of an existing API session based on provided input.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersSessionApiId({
    apiSessionUpdateRequest: {
      labels: {
        "key": "string",
      },
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUsersSessionApiIdRequest](../../sdk/models/operations/patchuserssessionapiidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUsersSessionApiIdResponse](../../sdk/models/operations/patchuserssessionapiidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersSessionOtp

Validates and completes the OTP/2FA verification process by checking the provided OTP or verification code against the server's stored value.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersSessionOtp({
    code: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.CompletePhoneVerificationRequest](../../sdk/models/shared/completephoneverificationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PatchUsersSessionOtpResponse](../../sdk/models/operations/patchuserssessionotpresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersSubscriptionGrantId({
    subscriptionGrantUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## patchUsersUserClientId

Updates the details of an existing client using the given unique identifier based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Structure } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserClientId({
    clientUpdateRequest: {
      clientId: "string",
      profile: {
        address: {
          country: "Aruba",
        },
        company: {
          companyOwners: [
            {
              memberId: "string",
            },
          ],
          links: {},
        },
        defaultPaymentMethod: {},
        savedPaymentMethods: [
          {},
        ],
        subscriptionPaymentMethod: {},
      },
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUsersUserClientIdRequest](../../sdk/models/operations/patchusersuserclientidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUsersUserClientIdResponse](../../sdk/models/operations/patchusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserMemberSubscriptionPaymentMethod

DEPRECATED Update Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserMemberSubscriptionPaymentMethod({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.PaymentMethodWriteRequest](../../sdk/models/shared/paymentmethodwriterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchUsersUserMemberSubscriptionPaymentMethodResponse](../../sdk/models/operations/patchusersusermembersubscriptionpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserMemberSubscriptionId

DEPRECATEDupdateSubscription

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  SubscriptionUpdateRequestPackage,
  SubscriptionUpdateRequestPackageTier,
  SubscriptionUpdateRequestTerm,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserMemberSubscriptionId({
    subscriptionUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchUsersUserMemberSubscriptionIdRequest](../../sdk/models/operations/patchusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchUsersUserMemberSubscriptionIdResponse](../../sdk/models/operations/patchusersusermembersubscriptionidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserMemberId

Updates the details of an existing subscription for the specified member based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  FilingCode,
  FilingType,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  Status,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserMemberId({
    memberUpdateRequest: {
      memberId: "string",
      profile: {
        address: {
          country: "Guadeloupe",
        },
        bookkeepingProductsUsed: [
          MemberProfileWriteBookkeepingProductsUsed.AccountingSoftware,
        ],
        company: {
          companyOwners: [
            {
              email: "Jonas_Harber4@gmail.com",
              member: {},
              memberId: "string",
            },
          ],
          links: {},
        },
        homeAddress: {
          country: "Bosnia and Herzegovina",
        },
        interests: [
          MemberProfileWriteInterests.Invoicing,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.HealthInsurance,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.LessThanNilGreaterThan,
        ],
        taxInfo: {
          occupations: [
            {
              category: "string",
            },
          ],
        },
        visibilityMap: {},
        withholdings: {
          tax: {},
        },
      },
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUsersUserMemberIdRequest](../../sdk/models/operations/patchusersusermemberidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUsersUserMemberIdResponse](../../sdk/models/operations/patchusersusermemberidresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserMemberIdSubscription({
    subscriptionUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserMemberMemberIdNextgenSubscriptionId({
    subscriptionUpdateRequest: {},
    id: "<ID>",
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## patchUsersUserId

Enables modifications to the existing user account information using the specified user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserId({
    userUpdateRequest: {
      notificationSettings: {},
      profile: {},
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchUsersUserIdRequest](../../sdk/models/operations/patchusersuseridrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchUsersUserIdResponse](../../sdk/models/operations/patchusersuseridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserIdVerificationEmail

Validates the email verification for the specified user using the received verification code or token.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserIdVerificationEmail({
    completeEmailVerificationRequest: {
      emailVerificationId: "string",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PatchUsersUserIdVerificationEmailRequest](../../sdk/models/operations/patchusersuseridverificationemailrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchUsersUserIdVerificationEmailResponse](../../sdk/models/operations/patchusersuseridverificationemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUsersUserIdVerificationPhone

Confirms the phone verification for the specified user using the received OTP or verification code.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.patchUsersUserIdVerificationPhone({
    completePhoneVerificationRequest: {
      code: "string",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PatchUsersUserIdVerificationPhoneRequest](../../sdk/models/operations/patchusersuseridverificationphonerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchUsersUserIdVerificationPhoneResponse](../../sdk/models/operations/patchusersuseridverificationphoneresponse.md)>**
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
  const sdk = new Users();

  const res = await sdk.postUsersAccount({
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
  const sdk = new Users();

  const res = await sdk.postUsersAccountLink({});

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
  const sdk = new Users();

  const res = await sdk.postUsersAccountRequirements({
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

## postUsersActivity

Records a new activity for a member, detailing their recent actions or interactions on the platform.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersActivity({
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.ActivityCreateRequest](../../sdk/models/shared/activitycreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersActivityResponse](../../sdk/models/operations/postusersactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersAuthentication

Processes the user's credentials and generates a response indicating the authentication status and potentially returning a token or session ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersAuthentication({
    email: "Malvina_Christiansen@gmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.AuthenticationRequest](../../sdk/models/shared/authenticationrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersAuthenticationResponse](../../sdk/models/operations/postusersauthenticationresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersAuthorization({
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
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersFlatfileAuthToken({
    embedId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## postUsersGuestAccountNumbers

Allows guest users to fetch their associated bank account numbers based on the provided request details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersGuestAccountNumbers({
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

## postUsersOrganizationUser

Enables the creation of a new user account that will be linked to the organization the current user belongs to.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersOrganizationUser({
    email: "Finn_Kunze32@hotmail.com",
    notificationSettings: {},
    profile: {},
    settings: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.UserCreateRequest](../../sdk/models/shared/usercreaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostUsersOrganizationUserResponse](../../sdk/models/operations/postusersorganizationuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersOrganizationUserUserIdAssociate

Associates a user (child account) to a specific parent organization account, enabling shared resources and permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  ExternalFinancialAccounts,
  FundingSource,
  PayoutSettings,
  WingspanAccount,
  WingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersOrganizationUserUserIdAssociate({
    organizationUserAssociation: {
      inheritanceStrategy: {
        externalFinancialAccounts: ExternalFinancialAccounts.None,
        fundingSource: FundingSource.Parent,
        payoutSettings: PayoutSettings.None,
        wingspanAccount: WingspanAccount.Parent,
        wingspanFinancialSettings: WingspanFinancialSettings.None,
      },
    },
    userId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PostUsersOrganizationUserUserIdAssociateRequest](../../sdk/models/operations/postusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PostUsersOrganizationUserUserIdAssociateResponse](../../sdk/models/operations/postusersorganizationuseruseridassociateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersPendingSession

Creates a new user session that's initialized with a "pending" status. This can be used to temporarily hold a session spot before confirming.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersPendingSession({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.SessionCreateRequest](../../sdk/models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersPendingSessionResponse](../../sdk/models/operations/postuserspendingsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersPendingUser

Allows the creation of a new user with a "pending" status. This can be utilized when the user registration process requires a confirmation step before fully activating the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersPendingUser({
    email: "Vicente11@hotmail.com",
    notificationSettings: {},
    profile: {},
    settings: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.UserCreateRequest](../../sdk/models/shared/usercreaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostUsersPendingUserResponse](../../sdk/models/operations/postuserspendinguserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSession

Creates a new user session based on the provided credentials or token, allowing authenticated access to protected resources.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSession({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.SessionCreateRequest](../../sdk/models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersSessionResponse](../../sdk/models/operations/postuserssessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSessionApi

Initiates a session specifically for API interactions, providing the necessary credentials for automated tasks.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSessionApi({
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.ApiSessionCreateRequest](../../sdk/models/shared/apisessioncreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostUsersSessionApiResponse](../../sdk/models/operations/postuserssessionapiresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSessionOtp

Begins the One-Time Password (OTP) or Two-Factor Authentication (2FA) verification process for enhanced security during user login or critical operations.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { OtpSessionCreateRequestChannel } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSessionOtp({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.OtpSessionCreateRequest](../../sdk/models/shared/otpsessioncreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostUsersSessionOtpResponse](../../sdk/models/operations/postuserssessionotpresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSessionRequestingUser

Allows an authorized user (e.g., admin) to create a session by signing in as another user. Useful for support or administrative purposes.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSessionRequestingUser({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.SessionCreateRequest](../../sdk/models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersSessionRequestingUserResponse](../../sdk/models/operations/postuserssessionrequestinguserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSessionSingleSignOn

Initiates a Single Sign-On (SSO) session for a user, allowing seamless integration and login across multiple platforms or applications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSessionSingleSignOn({
    singleSignOnCode: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.SsoSessionCreateRequest](../../sdk/models/shared/ssosessioncreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostUsersSessionSingleSignOnResponse](../../sdk/models/operations/postuserssessionsinglesignonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersSessionSocialAuthGoogle

Allows users to sign in using their Google account. The client must provide a valid Google token in the request.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSessionSocialAuthGoogle({
    idToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.SignInWithGoogleRequest](../../sdk/models/shared/signinwithgooglerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostUsersSessionSocialAuthGoogleResponse](../../sdk/models/operations/postuserssessionsocialauthgoogleresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersSubscriptionGrant({
    granteeId: "string",
    package: SubscriptionGrantCreateRequestPackage.None,
    packageTier: SubscriptionGrantCreateRequestPackageTier.Premium,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

## postUsersUser

Allows the creation of a new user account by providing necessary details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Gender, UserAccountType, UserCreateRequestStatus } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUser({
    email: "Juana_Balistreri@gmail.com",
    notificationSettings: {},
    profile: {},
    settings: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.UserCreateRequest](../../sdk/models/shared/usercreaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostUsersUserResponse](../../sdk/models/operations/postusersuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserClientId

Creates a new client entry using the provided details and the specified identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Structure } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserClientId({
    clientCreateRequest: {
      profile: {
        address: {
          country: "Guam",
        },
        company: {
          companyOwners: [
            {
              memberId: "string",
            },
          ],
          links: {},
        },
        defaultPaymentMethod: {},
        savedPaymentMethods: [
          {},
        ],
        subscriptionPaymentMethod: {},
      },
      userId: "string",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostUsersUserClientIdRequest](../../sdk/models/operations/postusersuserclientidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostUsersUserClientIdResponse](../../sdk/models/operations/postusersuserclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserMemberSubscriptionPaymentMethod

DEPRECATED create Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserMemberSubscriptionPaymentMethod({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.PaymentMethodWriteRequest](../../sdk/models/shared/paymentmethodwriterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PostUsersUserMemberSubscriptionPaymentMethodResponse](../../sdk/models/operations/postusersusermembersubscriptionpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserMemberId

Creates a new subscription for the specified member based on the provided details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  FilingCode,
  FilingType,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  Status,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserMemberId({
    memberCreateRequest: {
      profile: {
        address: {
          country: "Saudi Arabia",
        },
        bookkeepingProductsUsed: [
          MemberProfileWriteBookkeepingProductsUsed.PenAndPaper,
        ],
        company: {
          companyOwners: [
            {
              email: "Roderick50@gmail.com",
              member: {},
              memberId: "string",
            },
          ],
          links: {},
        },
        homeAddress: {
          country: "Tanzania",
        },
        interests: [
          MemberProfileWriteInterests.Marketing,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.LessThanNilGreaterThan,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.Benefits,
        ],
        taxInfo: {
          occupations: [
            {
              category: "string",
            },
          ],
        },
        visibilityMap: {},
        withholdings: {
          tax: {},
        },
      },
      userId: "string",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostUsersUserMemberIdRequest](../../sdk/models/operations/postusersusermemberidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostUsersUserMemberIdResponse](../../sdk/models/operations/postusersusermemberidresponse.md)>**
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

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserMemberIdSubscription({
    subscriptionCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserMemberMemberIdNextgenSubscription({
    subscriptionCreateRequest: {},
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## postUsersUserPasswordReset

Request to start the password reset process for a user. Upon successful request, the user will receive instructions on how to reset their password.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { UserType } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserPasswordReset({
    email: "Corrine44@yahoo.com",
    userType: UserType.Member,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.PasswordResetRequest](../../sdk/models/shared/passwordresetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostUsersUserPasswordResetResponse](../../sdk/models/operations/postusersuserpasswordresetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserIdVerificationEmail

Starts the email verification procedure for the specified user by sending a verification email.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserIdVerificationEmail({
    beginEmailVerificationRequest: {
      email: "Grayce.Krajcik92@gmail.com",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostUsersUserIdVerificationEmailRequest](../../sdk/models/operations/postusersuseridverificationemailrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostUsersUserIdVerificationEmailResponse](../../sdk/models/operations/postusersuseridverificationemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserIdVerificationExistingEmail

Starts the process of verifying an existing email address associated with the user. This may trigger a verification email to be sent to the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserIdVerificationExistingEmail({
    beginExistingEmailVerificationRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PostUsersUserIdVerificationExistingEmailRequest](../../sdk/models/operations/postusersuseridverificationexistingemailrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PostUsersUserIdVerificationExistingEmailResponse](../../sdk/models/operations/postusersuseridverificationexistingemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postUsersUserIdVerificationPhone

Initiates the phone verification procedure by sending an OTP or verification code to the user's registered phone number.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { Channel } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.postUsersUserIdVerificationPhone({
    beginPhoneVerificationRequest: {
      phone: "(410) 435-0691 x609",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostUsersUserIdVerificationPhoneRequest](../../sdk/models/operations/postusersuseridverificationphonerequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostUsersUserIdVerificationPhoneResponse](../../sdk/models/operations/postusersuseridverificationphoneresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
