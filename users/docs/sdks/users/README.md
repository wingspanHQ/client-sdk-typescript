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

  const res = await sdk.users.deleteUsersAccountId({
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
| `request`                                                                                        | [operations.DeleteUsersAccountIdRequest](../../models/operations/deleteusersaccountidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteUsersAccountIdResponse](../../models/operations/deleteusersaccountidresponse.md)>**


## deleteUsersActivityId

Deletes a specific activity record associated with a member, ensuring that its details are no longer retrievable.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersActivityId({
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
| `request`                                                                                          | [operations.DeleteUsersActivityIdRequest](../../models/operations/deleteusersactivityidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteUsersActivityIdResponse](../../models/operations/deleteusersactivityidresponse.md)>**


## deleteUsersAuthorizationAuthorizationId

Completely removes an authorization, effectively revoking all its associated permissions and scopes for the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersAuthorizationAuthorizationId({
    authorizationId: "West",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteUsersAuthorizationAuthorizationIdRequest](../../models/operations/deleteusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteUsersAuthorizationAuthorizationIdResponse](../../models/operations/deleteusersauthorizationauthorizationidresponse.md)>**


## deleteUsersSessionApiId

Deletes a specific API session, ending its validity and associated permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersSessionApiId({
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
| `request`                                                                                              | [operations.DeleteUsersSessionApiIdRequest](../../models/operations/deleteuserssessionapiidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteUsersSessionApiIdResponse](../../models/operations/deleteuserssessionapiidresponse.md)>**


## deleteUsersSessionTokenId

Safely terminates the active user session associated with the provided session token ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersSessionTokenId({
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
| `request`                                                                                                  | [operations.DeleteUsersSessionTokenIdRequest](../../models/operations/deleteuserssessiontokenidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteUsersSessionTokenIdResponse](../../models/operations/deleteuserssessiontokenidresponse.md)>**


## deleteUsersSubscriptionGrantId

Safely deletes the subscription grant associated with the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersSubscriptionGrantId({
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
| `request`                                                                                                            | [operations.DeleteUsersSubscriptionGrantIdRequest](../../models/operations/deleteuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteUsersSubscriptionGrantIdResponse](../../models/operations/deleteuserssubscriptiongrantidresponse.md)>**


## deleteUsersUserMemberSubscriptionId

DEPRECATEDdeleteSubscription

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersUserMemberSubscriptionId({
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
| `request`                                                                                                                      | [operations.DeleteUsersUserMemberSubscriptionIdRequest](../../models/operations/deleteusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteUsersUserMemberSubscriptionIdResponse](../../models/operations/deleteusersusermembersubscriptionidresponse.md)>**


## deleteUsersUserMemberIdSubscription

Deletes the specified subscription associated with the member, removing any related data and settings.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersUserMemberIdSubscription({
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
| `request`                                                                                                                      | [operations.DeleteUsersUserMemberIdSubscriptionRequest](../../models/operations/deleteusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteUsersUserMemberIdSubscriptionResponse](../../models/operations/deleteusersusermemberidsubscriptionresponse.md)>**


## deleteUsersUserMemberMemberIdNextgenSubscriptionId

Remove and terminate a specific Nextgen subscription associated with the member, revoking their access to Nextgen features.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.deleteUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "Austria",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.DeleteUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../models/operations/deleteusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.DeleteUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../models/operations/deleteusersusermembermemberidnextgensubscriptionidresponse.md)>**


## getUsers

Verifies the connectivity and health status of the User Service by sending a ping request. Useful for monitoring and ensuring the service is up and running.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsers();

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

**Promise<[operations.GetUsersResponse](../../models/operations/getusersresponse.md)>**


## getUsersAccount

Fetches a list of all bank accounts associated with the member, providing an overview of linked financial institutions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAccount();

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

**Promise<[operations.GetUsersAccountResponse](../../models/operations/getusersaccountresponse.md)>**


## getUsersAccountId

Retrieves comprehensive details for a specified bank account linked to the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAccountId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUsersAccountIdRequest](../../models/operations/getusersaccountidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUsersAccountIdResponse](../../models/operations/getusersaccountidresponse.md)>**


## getUsersActivity

Lists all activities associated with a member, providing a comprehensive view of their interactions and actions within the platform.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersActivity();

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

**Promise<[operations.GetUsersActivityResponse](../../models/operations/getusersactivityresponse.md)>**


## getUsersActivityId

Fetches detailed information about a specific activity associated with a member using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersActivityId({
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
| `request`                                                                                    | [operations.GetUsersActivityIdRequest](../../models/operations/getusersactivityidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetUsersActivityIdResponse](../../models/operations/getusersactivityidresponse.md)>**


## getUsersAuthorization

Lists all the authorizations and permissions that have been granted to a user, providing an overview of their access levels across various platforms or applications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorization();

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

**Promise<[operations.GetUsersAuthorizationResponse](../../models/operations/getusersauthorizationresponse.md)>**


## getUsersAuthorizationAccountsUserId

Fetches the list of accounts or services that the specified user has granted authorization to.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizationAccountsUserId({
    userId: "Functionality",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetUsersAuthorizationAccountsUserIdRequest](../../models/operations/getusersauthorizationaccountsuseridrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetUsersAuthorizationAccountsUserIdResponse](../../models/operations/getusersauthorizationaccountsuseridresponse.md)>**


## getUsersAuthorizationAuthorizationId

Fetch the detailed information and scope of a specific authorization using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizationAuthorizationId({
    authorizationId: "redefine",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetUsersAuthorizationAuthorizationIdRequest](../../models/operations/getusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetUsersAuthorizationAuthorizationIdResponse](../../models/operations/getusersauthorizationauthorizationidresponse.md)>**


## getUsersAuthorizedScopeGroups

Provides an overview of all scope-groups which define a set of permissions within the system.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizedScopeGroups();

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

**Promise<[operations.GetUsersAuthorizedScopeGroupsResponse](../../models/operations/getusersauthorizedscopegroupsresponse.md)>**


## getUsersAuthorizedScopeGroupsRequestingUserId

Fetches authorized scope-groups that are assigned or relevant to a particular user based on their user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizedScopeGroupsRequestingUserId({
    requestingUserId: "neck",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetUsersAuthorizedScopeGroupsRequestingUserIdRequest](../../models/operations/getusersauthorizedscopegroupsrequestinguseridrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetUsersAuthorizedScopeGroupsRequestingUserIdResponse](../../models/operations/getusersauthorizedscopegroupsrequestinguseridresponse.md)>**


## getUsersAuthorizedScopes

Fetches a comprehensive list of all authorized scopes available in the system.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizedScopes();

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

**Promise<[operations.GetUsersAuthorizedScopesResponse](../../models/operations/getusersauthorizedscopesresponse.md)>**


## getUsersAuthorizedScopesRequestingUserId

Fetches the distinct authorized scopes assigned or relevant to a particular user based on their user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersAuthorizedScopesRequestingUserId({
    requestingUserId: "efficient",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetUsersAuthorizedScopesRequestingUserIdRequest](../../models/operations/getusersauthorizedscopesrequestinguseridrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetUsersAuthorizedScopesRequestingUserIdResponse](../../models/operations/getusersauthorizedscopesrequestinguseridresponse.md)>**


## getUsersGrantedSubscriberSubscriptionGrant

Fetches a list of subscription grants associated with a specific granted subscriber. Helps in understanding and managing subscriber benefits.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersGrantedSubscriberSubscriptionGrant();

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

**Promise<[operations.GetUsersGrantedSubscriberSubscriptionGrantResponse](../../models/operations/getusersgrantedsubscribersubscriptiongrantresponse.md)>**


## getUsersOrganizationUser

Provides a comprehensive list of all user accounts that are affiliated with or under the jurisdiction of the specified organization.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersOrganizationUser();

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

**Promise<[operations.GetUsersOrganizationUserResponse](../../models/operations/getusersorganizationuserresponse.md)>**


## getUsersOrganizationUserUserId

Fetches detailed profile information of a specific user associated with an organization using their unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersOrganizationUserUserId({
    userId: "Manager",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetUsersOrganizationUserUserIdRequest](../../models/operations/getusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdResponse](../../models/operations/getusersorganizationuseruseridresponse.md)>**


## getUsersOrganizationUserUserIdSession

Initiates a session for an organization user, providing them access to authorized resources.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersOrganizationUserUserIdSession({
    userId: "salmon",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetUsersOrganizationUserUserIdSessionRequest](../../models/operations/getusersorganizationuseruseridsessionrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetUsersOrganizationUserUserIdSessionResponse](../../models/operations/getusersorganizationuseruseridsessionresponse.md)>**


## getUsersSessionApi

Lists all API sessions that were initiated by the authenticated user, aiding in management and tracking.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersSessionApi();

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

**Promise<[operations.GetUsersSessionApiResponse](../../models/operations/getuserssessionapiresponse.md)>**


## getUsersSessionApiId

Retrieves the details of an API session using its unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersSessionApiId({
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
| `request`                                                                                        | [operations.GetUsersSessionApiIdRequest](../../models/operations/getuserssessionapiidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersSessionApiIdResponse](../../models/operations/getuserssessionapiidresponse.md)>**


## getUsersSessionTokenId

Fetches details of an active user session using the provided unique session token ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersSessionTokenId({
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
| `request`                                                                                            | [operations.GetUsersSessionTokenIdRequest](../../models/operations/getuserssessiontokenidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersSessionTokenIdResponse](../../models/operations/getuserssessiontokenidresponse.md)>**


## getUsersSubscriptionGrant

Lists all the subscription grants in the system, helping administrators or managers overview and manage these grants.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersSubscriptionGrant();

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

**Promise<[operations.GetUsersSubscriptionGrantResponse](../../models/operations/getuserssubscriptiongrantresponse.md)>**


## getUsersSubscriptionGrantId

Fetches the details of a specific subscription grant for a user using the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersSubscriptionGrantId({
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
| `request`                                                                                                      | [operations.GetUsersSubscriptionGrantIdRequest](../../models/operations/getuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetUsersSubscriptionGrantIdResponse](../../models/operations/getuserssubscriptiongrantidresponse.md)>**


## getUsersUserClientId

Fetches the comprehensive details of a specific client using the given unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserClientId({
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
| `request`                                                                                        | [operations.GetUsersUserClientIdRequest](../../models/operations/getusersuserclientidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersUserClientIdResponse](../../models/operations/getusersuserclientidresponse.md)>**


## getUsersUserEmailEmail

Fetches user details based on the provided email address. Useful for situations where the email is known, and user specifics are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserEmailEmail({
    email: "Vincenzo19@gmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUsersUserEmailEmailRequest](../../models/operations/getusersuseremailemailrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUsersUserEmailEmailResponse](../../models/operations/getusersuseremailemailresponse.md)>**


## getUsersUserLocation

Fetches the geographical location information associated with the user, such as city, state, and country details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserLocation();

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

**Promise<[operations.GetUsersUserLocationResponse](../../models/operations/getusersuserlocationresponse.md)>**


## getUsersUserMemberSubscriptionPaymentHistory

Fetches a history of payments made for the user's membership subscription.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberSubscriptionPaymentHistory();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPaymentHistoryResponse](../../models/operations/getusersusermembersubscriptionpaymenthistoryresponse.md)>**


## getUsersUserMemberSubscriptionPaymentMethod

DEPRECATED Get Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberSubscriptionPaymentMethod();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPaymentMethodResponse](../../models/operations/getusersusermembersubscriptionpaymentmethodresponse.md)>**


## getUsersUserMemberSubscriptionPlan

DEPRECATEDlist membership plans

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberSubscriptionPlan();

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

**Promise<[operations.GetUsersUserMemberSubscriptionPlanResponse](../../models/operations/getusersusermembersubscriptionplanresponse.md)>**


## getUsersUserMemberSubscriptionPlanId

DEPRECATEDget membership plan

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberSubscriptionPlanId({
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
| `request`                                                                                                                        | [operations.GetUsersUserMemberSubscriptionPlanIdRequest](../../models/operations/getusersusermembersubscriptionplanidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetUsersUserMemberSubscriptionPlanIdResponse](../../models/operations/getusersusermembersubscriptionplanidresponse.md)>**


## getUsersUserMemberSubscriptionId

DEPRECATEDgetSubscription

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberSubscriptionId({
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
| `request`                                                                                                                | [operations.GetUsersUserMemberSubscriptionIdRequest](../../models/operations/getusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetUsersUserMemberSubscriptionIdResponse](../../models/operations/getusersusermembersubscriptionidresponse.md)>**


## getUsersUserMemberId

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberId({
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
| `request`                                                                                        | [operations.GetUsersUserMemberIdRequest](../../models/operations/getusersusermemberidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersUserMemberIdResponse](../../models/operations/getusersusermemberidresponse.md)>**


## getUsersUserMemberIdAdvocate

Fetches the advocate details associated with the specified member. An advocate often refers to a person who supports or recommends a particular cause or policy, in this context, related to the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberIdAdvocate({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetUsersUserMemberIdAdvocateRequest](../../models/operations/getusersusermemberidadvocaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetUsersUserMemberIdAdvocateResponse](../../models/operations/getusersusermemberidadvocateresponse.md)>**


## getUsersUserMemberIdSubscription

Fetches the details of the subscription associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberIdSubscription({
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
| `request`                                                                                                                | [operations.GetUsersUserMemberIdSubscriptionRequest](../../models/operations/getusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetUsersUserMemberIdSubscriptionResponse](../../models/operations/getusersusermemberidsubscriptionresponse.md)>**


## getUsersUserMemberMemberIdNextgenSubscription

Retrieve all the active and previous Nextgen subscriptions associated with the specified member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberMemberIdNextgenSubscription({
    memberId: "microchip",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionRequest](../../models/operations/getusersusermembermemberidnextgensubscriptionrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionResponse](../../models/operations/getusersusermembermemberidnextgensubscriptionresponse.md)>**


## getUsersUserMemberMemberIdNextgenSubscriptionPlan

Fetches an array of available Nextgen Subscription Plans, providing members with an overview of the different subscription options, features, and pricing details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberMemberIdNextgenSubscriptionPlan({
    memberId: "withdrawal",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanRequest](../../models/operations/getusersusermembermemberidnextgensubscriptionplanrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanResponse](../../models/operations/getusersusermembermemberidnextgensubscriptionplanresponse.md)>**


## getUsersUserMemberMemberIdNextgenSubscriptionPlanId

Fetches detailed information and pricing for a specific Nextgen Subscription Plan based on the provided plan ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberMemberIdNextgenSubscriptionPlanId({
    id: "<ID>",
    memberId: "Hartford",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanIdRequest](../../models/operations/getusersusermembermemberidnextgensubscriptionplanidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionPlanIdResponse](../../models/operations/getusersusermembermemberidnextgensubscriptionplanidresponse.md)>**


## getUsersUserMemberMemberIdNextgenSubscriptionId

Fetch detailed information about a specific Nextgen subscription associated with the member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserMemberMemberIdNextgenSubscriptionId({
    id: "<ID>",
    memberId: "parsing",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../models/operations/getusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../models/operations/getusersusermembermemberidnextgensubscriptionidresponse.md)>**


## getUsersUserOccupation

Fetches a comprehensive list of occupations that users can associate with their profiles. This provides insight into the user's profession or field of expertise.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserOccupation();

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

**Promise<[operations.GetUsersUserOccupationResponse](../../models/operations/getusersuseroccupationresponse.md)>**


## getUsersUserPublicId

Obtains the public profile details of a user using their unique identifier. This is useful when only non-sensitive, public-facing user details are required.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserPublicId({
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
| `request`                                                                                        | [operations.GetUsersUserPublicIdRequest](../../models/operations/getusersuserpublicidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersUserPublicIdResponse](../../models/operations/getusersuserpublicidresponse.md)>**


## getUsersUserTagId

Fetches the user details associated with a specific tag identifier. Useful for querying users based on custom tags or categories.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserTagId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUsersUserTagIdRequest](../../models/operations/getusersusertagidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUsersUserTagIdResponse](../../models/operations/getusersusertagidresponse.md)>**


## getUsersUserId

Retrieves comprehensive details of a user account using the provided unique user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.getUsersUserId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetUsersUserIdRequest](../../models/operations/getusersuseridrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetUsersUserIdResponse](../../models/operations/getusersuseridresponse.md)>**


## patchUsersAccountId

Enables members to make modifications to the details of their linked bank account.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { AccountUpdateRequestStatus, AccountUpdateRequestUsage } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersAccountId({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchUsersAccountIdRequest](../../models/operations/patchusersaccountidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchUsersAccountIdResponse](../../models/operations/patchusersaccountidresponse.md)>**


## patchUsersActivityId

Updates the details of a specific activity record associated with a member.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersActivityId({
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchUsersActivityIdRequest](../../models/operations/patchusersactivityidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchUsersActivityIdResponse](../../models/operations/patchusersactivityidresponse.md)>**


## patchUsersAuthorizationAuthorizationId

Update the details or scopes of a specific authorization using its unique identifier, allowing adjustment of the granted permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { AuthorizationUpdateRequestAllowedAction } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersAuthorizationAuthorizationId({
    authorizationUpdateRequest: {},
    authorizationId: "SUV",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchUsersAuthorizationAuthorizationIdRequest](../../models/operations/patchusersauthorizationauthorizationidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchUsersAuthorizationAuthorizationIdResponse](../../models/operations/patchusersauthorizationauthorizationidresponse.md)>**


## patchUsersOrganizationUserUserId

Updates profile details of a user associated with an organization. Only modified fields need to be included in the request.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersOrganizationUserUserId({
    userId: "Bronze",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchUsersOrganizationUserUserIdRequest](../../models/operations/patchusersorganizationuseruseridrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdResponse](../../models/operations/patchusersorganizationuseruseridresponse.md)>**


## patchUsersOrganizationUserUserIdAssociate

Update the relationship details or permissions between a user and its parent organization account.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  OrganizationInheritanceStrategyExternalFinancialAccounts,
  OrganizationInheritanceStrategyFundingSource,
  OrganizationInheritanceStrategyPayoutSettings,
  OrganizationInheritanceStrategyWingspanAccount,
  OrganizationInheritanceStrategyWingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersOrganizationUserUserIdAssociate({
    organizationUserAssociationUpdate: {
      inheritanceStrategy: {
        externalFinancialAccounts: OrganizationInheritanceStrategyExternalFinancialAccounts.None,
        fundingSource: OrganizationInheritanceStrategyFundingSource.None,
        payoutSettings: OrganizationInheritanceStrategyPayoutSettings.None,
        wingspanAccount: OrganizationInheritanceStrategyWingspanAccount.Parent,
        wingspanFinancialSettings: OrganizationInheritanceStrategyWingspanFinancialSettings.Parent,
      },
    },
    userId: "Computers",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PatchUsersOrganizationUserUserIdAssociateRequest](../../models/operations/patchusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PatchUsersOrganizationUserUserIdAssociateResponse](../../models/operations/patchusersorganizationuseruseridassociateresponse.md)>**


## patchUsersSessionApiId

Updates the properties of an existing API session based on provided input.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersSessionApiId({
    apiSessionUpdateRequest: {
      labels: {
        "developing": "Nissan",
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchUsersSessionApiIdRequest](../../models/operations/patchuserssessionapiidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchUsersSessionApiIdResponse](../../models/operations/patchuserssessionapiidresponse.md)>**


## patchUsersSessionOtp

Validates and completes the OTP/2FA verification process by checking the provided OTP or verification code against the server's stored value.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersSessionOtp({
    code: "Granite",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.CompletePhoneVerificationRequest](../../models/shared/completephoneverificationrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PatchUsersSessionOtpResponse](../../models/operations/patchuserssessionotpresponse.md)>**


## patchUsersSubscriptionGrantId

Updates specific details of a users subscription grant using the provided unique identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { SubscriptionGrantUpdateRequestPackage, SubscriptionGrantUpdateRequestPackageTier } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersSubscriptionGrantId({
    subscriptionGrantUpdateRequest: {},
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
| `request`                                                                                                          | [operations.PatchUsersSubscriptionGrantIdRequest](../../models/operations/patchuserssubscriptiongrantidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchUsersSubscriptionGrantIdResponse](../../models/operations/patchuserssubscriptiongrantidresponse.md)>**


## patchUsersUserClientId

Updates the details of an existing client using the given unique identifier based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { CompanyStructure } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserClientId({
    clientUpdateRequest: {
      clientId: "Swaziland",
      profile: {
        address: {
          country: "Algeria",
        },
        company: {
          companyOwners: [
            {
              memberId: "logistical",
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchUsersUserClientIdRequest](../../models/operations/patchusersuserclientidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchUsersUserClientIdResponse](../../models/operations/patchusersuserclientidresponse.md)>**


## patchUsersUserMemberSubscriptionPaymentMethod

DEPRECATED Update Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserMemberSubscriptionPaymentMethod({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.PaymentMethodWriteRequest](../../models/shared/paymentmethodwriterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PatchUsersUserMemberSubscriptionPaymentMethodResponse](../../models/operations/patchusersusermembersubscriptionpaymentmethodresponse.md)>**


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

  const res = await sdk.users.patchUsersUserMemberSubscriptionId({
    subscriptionUpdateRequest: {},
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
| `request`                                                                                                                    | [operations.PatchUsersUserMemberSubscriptionIdRequest](../../models/operations/patchusersusermembersubscriptionidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchUsersUserMemberSubscriptionIdResponse](../../models/operations/patchusersusermembersubscriptionidresponse.md)>**


## patchUsersUserMemberId

Updates the details of an existing subscription for the specified member based on the provided modifications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  MemberTaxInfoFilingCode,
  MemberTaxInfoFilingType,
  SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5fStatus,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserMemberId({
    memberUpdateRequest: {
      memberId: "Decentralized",
      profile: {
        address: {
          country: "Christmas Island",
        },
        bookkeepingProductsUsed: [
          MemberProfileWriteBookkeepingProductsUsed.Spreadsheet,
        ],
        company: {
          companyOwners: [
            {
              email: "Rodrick10@gmail.com",
              member: {},
              memberId: "Account",
            },
          ],
          links: {},
        },
        homeAddress: {
          country: "Philippines",
        },
        interests: [
          MemberProfileWriteInterests.TaxSaving,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.MindAndBodySupport,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.Payments,
        ],
        taxInfo: {
          occupations: [
            {
              category: "input",
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchUsersUserMemberIdRequest](../../models/operations/patchusersusermemberidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchUsersUserMemberIdResponse](../../models/operations/patchusersusermemberidresponse.md)>**


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

  const res = await sdk.users.patchUsersUserMemberIdSubscription({
    subscriptionUpdateRequest: {},
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
| `request`                                                                                                                    | [operations.PatchUsersUserMemberIdSubscriptionRequest](../../models/operations/patchusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchUsersUserMemberIdSubscriptionResponse](../../models/operations/patchusersusermemberidsubscriptionresponse.md)>**


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

  const res = await sdk.users.patchUsersUserMemberMemberIdNextgenSubscriptionId({
    subscriptionUpdateRequest: {},
    id: "<ID>",
    memberId: "Polonium",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PatchUsersUserMemberMemberIdNextgenSubscriptionIdRequest](../../models/operations/patchusersusermembermemberidnextgensubscriptionidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PatchUsersUserMemberMemberIdNextgenSubscriptionIdResponse](../../models/operations/patchusersusermembermemberidnextgensubscriptionidresponse.md)>**


## patchUsersUserId

Enables modifications to the existing user account information using the specified user ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { UserProfileGender } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserId({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchUsersUserIdRequest](../../models/operations/patchusersuseridrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchUsersUserIdResponse](../../models/operations/patchusersuseridresponse.md)>**


## patchUsersUserIdVerificationEmail

Validates the email verification for the specified user using the received verification code or token.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserIdVerificationEmail({
    completeEmailVerificationRequest: {
      emailVerificationId: "aggregate",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PatchUsersUserIdVerificationEmailRequest](../../models/operations/patchusersuseridverificationemailrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchUsersUserIdVerificationEmailResponse](../../models/operations/patchusersuseridverificationemailresponse.md)>**


## patchUsersUserIdVerificationPhone

Confirms the phone verification for the specified user using the received OTP or verification code.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.patchUsersUserIdVerificationPhone({
    completePhoneVerificationRequest: {
      code: "World",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PatchUsersUserIdVerificationPhoneRequest](../../models/operations/patchusersuseridverificationphonerequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchUsersUserIdVerificationPhoneResponse](../../models/operations/patchusersuseridverificationphoneresponse.md)>**


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

  const res = await sdk.users.postUsersAccount({
    canBeUsedFor: {},
    numbers: {
      account: "31307069",
    },
    owners: [
      "Account",
    ],
    usedFor: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.AccountCreateRequest](../../models/shared/accountcreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostUsersAccountResponse](../../models/operations/postusersaccountresponse.md)>**


## postUsersAccountLink

Initiates the process to generate a token for integrating with Plaid Link or conducting OAuth authentication. Essential for securely linking user bank accounts.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersAccountLink({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.LinkTokenRequest](../../models/shared/linktokenrequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostUsersAccountLinkResponse](../../models/operations/postusersaccountlinkresponse.md)>**


## postUsersAccountRequirements

Obtains the specific details and information required for the user to set up or complete their account configuration.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersAccountRequirements({
    country: "Tokelau",
    currency: "Uganda Shilling",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.AccountRequirementsRequest](../../models/shared/accountrequirementsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostUsersAccountRequirementsResponse](../../models/operations/postusersaccountrequirementsresponse.md)>**


## postUsersActivity

Records a new activity for a member, detailing their recent actions or interactions on the platform.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersActivity({
    userId: "Card",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.ActivityCreateRequest](../../models/shared/activitycreaterequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.PostUsersActivityResponse](../../models/operations/postusersactivityresponse.md)>**


## postUsersAuthentication

Processes the user's credentials and generates a response indicating the authentication status and potentially returning a token or session ID.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersAuthentication({
    email: "Malvina_Christiansen@gmail.com",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.AuthenticationRequest](../../models/shared/authenticationrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.PostUsersAuthenticationResponse](../../models/operations/postusersauthenticationresponse.md)>**


## postUsersAuthorization

Grants or verifies specific permissions (scopes) for a user based on the provided request. This is commonly used for third-party applications seeking access to certain user data or functionalities.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  AuthorizationCreateRequestAllowedAction,
  ScopeModificationAction,
  ScopeModificationComparator,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersAuthorization({
    requestingUserId: "quantify",
    scopeModifications: {
      payments: {
        memberClient: [
          {
            action: ScopeModificationAction.Deny,
            attribute: "deposit",
            comparator: ScopeModificationComparator.Includes,
            value: "magenta",
          },
        ],
        payable: [
          {
            action: ScopeModificationAction.Allow,
            attribute: "Chief",
            comparator: ScopeModificationComparator.Includes,
            value: "Dirham",
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.AuthorizationCreateRequest](../../models/shared/authorizationcreaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostUsersAuthorizationResponse](../../models/operations/postusersauthorizationresponse.md)>**


## postUsersFlatfileAuthToken

Request an authentication token required to access Flatfile services and features.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersFlatfileAuthToken({
    embedId: "smell",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.FlatfileAuthTokenRequest](../../models/shared/flatfileauthtokenrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostUsersFlatfileAuthTokenResponse](../../models/operations/postusersflatfileauthtokenresponse.md)>**


## postUsersGuestAccountNumbers

Allows guest users to fetch their associated bank account numbers based on the provided request details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersGuestAccountNumbers({
    accountId: "Southwest",
    publicToken: "reintermediate",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.GuestAccountRequest](../../models/shared/guestaccountrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostUsersGuestAccountNumbersResponse](../../models/operations/postusersguestaccountnumbersresponse.md)>**


## postUsersOrganizationUser

Enables the creation of a new user account that will be linked to the organization the current user belongs to.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { NewUserSettingsUserAccountType, UserCreateRequestStatus, UserProfileGender } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersOrganizationUser({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.UserCreateRequest](../../models/shared/usercreaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostUsersOrganizationUserResponse](../../models/operations/postusersorganizationuserresponse.md)>**


## postUsersOrganizationUserUserIdAssociate

Associates a user (child account) to a specific parent organization account, enabling shared resources and permissions.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  OrganizationInheritanceStrategyExternalFinancialAccounts,
  OrganizationInheritanceStrategyFundingSource,
  OrganizationInheritanceStrategyPayoutSettings,
  OrganizationInheritanceStrategyWingspanAccount,
  OrganizationInheritanceStrategyWingspanFinancialSettings,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersOrganizationUserUserIdAssociate({
    organizationUserAssociation: {
      inheritanceStrategy: {
        externalFinancialAccounts: OrganizationInheritanceStrategyExternalFinancialAccounts.None,
        fundingSource: OrganizationInheritanceStrategyFundingSource.Parent,
        payoutSettings: OrganizationInheritanceStrategyPayoutSettings.None,
        wingspanAccount: OrganizationInheritanceStrategyWingspanAccount.Parent,
        wingspanFinancialSettings: OrganizationInheritanceStrategyWingspanFinancialSettings.None,
      },
    },
    userId: "matrices",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PostUsersOrganizationUserUserIdAssociateRequest](../../models/operations/postusersorganizationuseruseridassociaterequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostUsersOrganizationUserUserIdAssociateResponse](../../models/operations/postusersorganizationuseruseridassociateresponse.md)>**


## postUsersPendingSession

Creates a new user session that's initialized with a "pending" status. This can be used to temporarily hold a session spot before confirming.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersPendingSession({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.SessionCreateRequest](../../models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostUsersPendingSessionResponse](../../models/operations/postuserspendingsessionresponse.md)>**


## postUsersPendingUser

Allows the creation of a new user with a "pending" status. This can be utilized when the user registration process requires a confirmation step before fully activating the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { NewUserSettingsUserAccountType, UserCreateRequestStatus, UserProfileGender } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersPendingUser({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.UserCreateRequest](../../models/shared/usercreaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostUsersPendingUserResponse](../../models/operations/postuserspendinguserresponse.md)>**


## postUsersSession

Creates a new user session based on the provided credentials or token, allowing authenticated access to protected resources.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSession({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.SessionCreateRequest](../../models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostUsersSessionResponse](../../models/operations/postuserssessionresponse.md)>**


## postUsersSessionApi

Initiates a session specifically for API interactions, providing the necessary credentials for automated tasks.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSessionApi({
    labels: {
      "Cotton": "navigate",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.ApiSessionCreateRequest](../../models/shared/apisessioncreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersSessionApiResponse](../../models/operations/postuserssessionapiresponse.md)>**


## postUsersSessionOtp

Begins the One-Time Password (OTP) or Two-Factor Authentication (2FA) verification process for enhanced security during user login or critical operations.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { OtpSessionCreateRequestChannel } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSessionOtp({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.OtpSessionCreateRequest](../../models/shared/otpsessioncreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersSessionOtpResponse](../../models/operations/postuserssessionotpresponse.md)>**


## postUsersSessionRequestingUser

Allows an authorized user (e.g., admin) to create a session by signing in as another user. Useful for support or administrative purposes.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSessionRequestingUser({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.SessionCreateRequest](../../models/shared/sessioncreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostUsersSessionRequestingUserResponse](../../models/operations/postuserssessionrequestinguserresponse.md)>**


## postUsersSessionSingleSignOn

Initiates a Single Sign-On (SSO) session for a user, allowing seamless integration and login across multiple platforms or applications.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSessionSingleSignOn({
    singleSignOnCode: "Pataca",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.SsoSessionCreateRequest](../../models/shared/ssosessioncreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersSessionSingleSignOnResponse](../../models/operations/postuserssessionsinglesignonresponse.md)>**


## postUsersSessionSocialAuthGoogle

Allows users to sign in using their Google account. The client must provide a valid Google token in the request.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSessionSocialAuthGoogle({
    idToken: "Oganesson",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.SignInWithGoogleRequest](../../models/shared/signinwithgooglerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostUsersSessionSocialAuthGoogleResponse](../../models/operations/postuserssessionsocialauthgoogleresponse.md)>**


## postUsersSubscriptionGrant

Create a new subscription grant to a user. Useful for promoting and providing specific subscription benefits to users.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { SubscriptionGrantCreateRequestPackage, SubscriptionGrantCreateRequestPackageTier } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersSubscriptionGrant({
    granteeId: "Vermont",
    package: SubscriptionGrantCreateRequestPackage.Professional,
    packageTier: SubscriptionGrantCreateRequestPackageTier.Basic,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.SubscriptionGrantCreateRequest](../../models/shared/subscriptiongrantcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostUsersSubscriptionGrantResponse](../../models/operations/postuserssubscriptiongrantresponse.md)>**


## postUsersUser

Allows the creation of a new user account by providing necessary details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { NewUserSettingsUserAccountType, UserCreateRequestStatus, UserProfileGender } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUser({
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.UserCreateRequest](../../models/shared/usercreaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostUsersUserResponse](../../models/operations/postusersuserresponse.md)>**


## postUsersUserClientId

Creates a new client entry using the provided details and the specified identifier.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { CompanyStructure } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserClientId({
    clientCreateRequest: {
      profile: {
        address: {
          country: "Guam",
        },
        company: {
          companyOwners: [
            {
              memberId: "slim",
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
      userId: "Jewelery",
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
| `request`                                                                                          | [operations.PostUsersUserClientIdRequest](../../models/operations/postusersuserclientidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostUsersUserClientIdResponse](../../models/operations/postusersuserclientidresponse.md)>**


## postUsersUserMemberSubscriptionPaymentMethod

DEPRECATED create Payment Method

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserMemberSubscriptionPaymentMethod({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.PaymentMethodWriteRequest](../../models/shared/paymentmethodwriterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostUsersUserMemberSubscriptionPaymentMethodResponse](../../models/operations/postusersusermembersubscriptionpaymentmethodresponse.md)>**


## postUsersUserMemberId

Creates a new subscription for the specified member based on the provided details.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import {
  CompanyWriteStructure,
  MemberProfileVisibilityMapAddress,
  MemberProfileVisibilityMapPhone,
  MemberProfileWriteBookkeepingProductsUsed,
  MemberProfileWriteFreelanceDuration,
  MemberProfileWriteFreelanceType,
  MemberProfileWriteIndustry,
  MemberProfileWriteInterests,
  MemberProfileWriteProductAspectImportance,
  MemberProfileWriteProductImportance,
  MemberTaxInfoFilingCode,
  MemberTaxInfoFilingType,
  SixHundredAndSeventeenceb0bc24fcf187ab7e6b13633442b8671de98ff04917ce2c41034e5482b5fStatus,
} from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserMemberId({
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
              memberId: "curly",
            },
          ],
          links: {},
        },
        homeAddress: {
          country: "Uruguay",
        },
        interests: [
          MemberProfileWriteInterests.Benefits,
        ],
        productAspectImportance: [
          MemberProfileWriteProductAspectImportance.MindAndBodySupport,
        ],
        productImportance: [
          MemberProfileWriteProductImportance.Benefits,
        ],
        taxInfo: {
          occupations: [
            {
              category: "North",
            },
          ],
        },
        visibilityMap: {},
        withholdings: {
          tax: {},
        },
      },
      userId: "Orchestrator",
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
| `request`                                                                                          | [operations.PostUsersUserMemberIdRequest](../../models/operations/postusersusermemberidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostUsersUserMemberIdResponse](../../models/operations/postusersusermemberidresponse.md)>**


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

  const res = await sdk.users.postUsersUserMemberIdSubscription({
    subscriptionCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostUsersUserMemberIdSubscriptionRequest](../../models/operations/postusersusermemberidsubscriptionrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostUsersUserMemberIdSubscriptionResponse](../../models/operations/postusersusermemberidsubscriptionresponse.md)>**


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

  const res = await sdk.users.postUsersUserMemberMemberIdNextgenSubscription({
    subscriptionCreateRequest: {},
    memberId: "Security",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PostUsersUserMemberMemberIdNextgenSubscriptionRequest](../../models/operations/postusersusermembermemberidnextgensubscriptionrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostUsersUserMemberMemberIdNextgenSubscriptionResponse](../../models/operations/postusersusermembermemberidnextgensubscriptionresponse.md)>**


## postUsersUserPasswordReset

Request to start the password reset process for a user. Upon successful request, the user will receive instructions on how to reset their password.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { PasswordResetRequestUserType } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserPasswordReset({
    email: "Corrine44@yahoo.com",
    userType: PasswordResetRequestUserType.Member,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PasswordResetRequest](../../models/shared/passwordresetrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostUsersUserPasswordResetResponse](../../models/operations/postusersuserpasswordresetresponse.md)>**


## postUsersUserIdVerificationEmail

Starts the email verification procedure for the specified user by sending a verification email.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserIdVerificationEmail({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostUsersUserIdVerificationEmailRequest](../../models/operations/postusersuseridverificationemailrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostUsersUserIdVerificationEmailResponse](../../models/operations/postusersuseridverificationemailresponse.md)>**


## postUsersUserIdVerificationExistingEmail

Starts the process of verifying an existing email address associated with the user. This may trigger a verification email to be sent to the user.

### Example Usage

```typescript
import { Users } from "@wingspan/users";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserIdVerificationExistingEmail({
    beginExistingEmailVerificationRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PostUsersUserIdVerificationExistingEmailRequest](../../models/operations/postusersuseridverificationexistingemailrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostUsersUserIdVerificationExistingEmailResponse](../../models/operations/postusersuseridverificationexistingemailresponse.md)>**


## postUsersUserIdVerificationPhone

Initiates the phone verification procedure by sending an OTP or verification code to the user's registered phone number.

### Example Usage

```typescript
import { Users } from "@wingspan/users";
import { BeginPhoneVerificationRequestChannel } from "@wingspan/users/dist/sdk/models/shared";

(async() => {
  const sdk = new Users();

  const res = await sdk.users.postUsersUserIdVerificationPhone({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PostUsersUserIdVerificationPhoneRequest](../../models/operations/postusersuseridverificationphonerequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PostUsersUserIdVerificationPhoneResponse](../../models/operations/postusersuseridverificationphoneresponse.md)>**

