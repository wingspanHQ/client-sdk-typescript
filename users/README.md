# @wingspan/users

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/users
```

### Yarn

```bash
yarn add @wingspan/users
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users();

    const res = await sdk.users.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Users SDK](docs/sdks/users/README.md)

* [deleteUsersAccountId](docs/sdks/users/README.md#deleteusersaccountid) - Unlink Bank Account
* [deleteUsersActivityId](docs/sdks/users/README.md#deleteusersactivityid) - Remove Specific Activity Record for a Member
* [deleteUsersAuthorizationAuthorizationId](docs/sdks/users/README.md#deleteusersauthorizationauthorizationid) - Revoke and Remove Authorization Record
* [deleteUsersSessionApiId](docs/sdks/users/README.md#deleteuserssessionapiid) - Terminate a Specific API Session
* [deleteUsersSessionTokenId](docs/sdks/users/README.md#deleteuserssessiontokenid) - Terminate a user session using token ID
* [deleteUsersSubscriptionGrantId](docs/sdks/users/README.md#deleteuserssubscriptiongrantid) - Terminate a specific subscription grant by ID
* [deleteUsersUserMemberSubscriptionId](docs/sdks/users/README.md#deleteusersusermembersubscriptionid) - DEPRECATEDdeleteSubscription
* [deleteUsersUserMemberIdSubscription](docs/sdks/users/README.md#deleteusersusermemberidsubscription) - Remove Subscription for Member
* [deleteUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/users/README.md#deleteusersusermembermemberidnextgensubscriptionid) - Revoke a Nextgen Subscription for Member
* [getUsers](docs/sdks/users/README.md#getusers) - Health Check for User Service
* [getUsersAccount](docs/sdks/users/README.md#getusersaccount) - Retrieve All Linked Bank Accounts
* [getUsersAccountId](docs/sdks/users/README.md#getusersaccountid) - Fetch Specific Bank Account Details
* [getUsersActivity](docs/sdks/users/README.md#getusersactivity) - Retrieve All Activities of a Member
* [getUsersActivityId](docs/sdks/users/README.md#getusersactivityid) - Retrieve Specific Activity Details for a Member
* [getUsersAuthorization](docs/sdks/users/README.md#getusersauthorization) - Retrieve All User Authorizations
* [getUsersAuthorizationAccountsUserId](docs/sdks/users/README.md#getusersauthorizationaccountsuserid) - Retrieve Accounts Authorized by User
* [getUsersAuthorizationAuthorizationId](docs/sdks/users/README.md#getusersauthorizationauthorizationid) - Retrieve Authorization Details by ID
* [getUsersAuthorizedScopeGroups](docs/sdks/users/README.md#getusersauthorizedscopegroups) - Obtain all authorized scope-groups
* [getUsersAuthorizedScopeGroupsRequestingUserId](docs/sdks/users/README.md#getusersauthorizedscopegroupsrequestinguserid) - Retrieve authorized scope-groups specific to a user
* [getUsersAuthorizedScopes](docs/sdks/users/README.md#getusersauthorizedscopes) - Retrieve all authorized scopes
* [getUsersAuthorizedScopesRequestingUserId](docs/sdks/users/README.md#getusersauthorizedscopesrequestinguserid) - Obtain authorized scopes specific to a user
* [getUsersGrantedSubscriberSubscriptionGrant](docs/sdks/users/README.md#getusersgrantedsubscribersubscriptiongrant) - Retrieve Subscription Grants for a Granted Subscriber
* [getUsersOrganizationUser](docs/sdks/users/README.md#getusersorganizationuser) - Retrieve All Organization User Accounts
* [getUsersOrganizationUserUserId](docs/sdks/users/README.md#getusersorganizationuseruserid) - Retrieve Organization User Profile
* [getUsersOrganizationUserUserIdSession](docs/sdks/users/README.md#getusersorganizationuseruseridsession) - Initiate Session for Organization User
* [getUsersSessionApi](docs/sdks/users/README.md#getuserssessionapi) - Retrieve All API Sessions Created by the Current User
* [getUsersSessionApiId](docs/sdks/users/README.md#getuserssessionapiid) - Fetch Details of a Specific API Session
* [getUsersSessionTokenId](docs/sdks/users/README.md#getuserssessiontokenid) - Retrieve session details using token ID
* [getUsersSubscriptionGrant](docs/sdks/users/README.md#getuserssubscriptiongrant) - Fetch All Subscription Grants
* [getUsersSubscriptionGrantId](docs/sdks/users/README.md#getuserssubscriptiongrantid) - Retrieve subscription grant details by ID
* [getUsersUserClientId](docs/sdks/users/README.md#getusersuserclientid) - Retrieve Client Details by ID
* [getUsersUserEmailEmail](docs/sdks/users/README.md#getusersuseremailemail) - Retrieve User by Email Address
* [getUsersUserLocation](docs/sdks/users/README.md#getusersuserlocation) - Retrieve User's Location
* [getUsersUserMemberSubscriptionPaymentHistory](docs/sdks/users/README.md#getusersusermembersubscriptionpaymenthistory) - Retrieve payment history for membership
* [getUsersUserMemberSubscriptionPaymentMethod](docs/sdks/users/README.md#getusersusermembersubscriptionpaymentmethod) - DEPRECATED Get Payment Method
* [getUsersUserMemberSubscriptionPlan](docs/sdks/users/README.md#getusersusermembersubscriptionplan) - DEPRECATEDlist membership plans
* [getUsersUserMemberSubscriptionPlanId](docs/sdks/users/README.md#getusersusermembersubscriptionplanid) - DEPRECATEDget membership plan
* [getUsersUserMemberSubscriptionId](docs/sdks/users/README.md#getusersusermembersubscriptionid) - DEPRECATEDgetSubscription
* [getUsersUserMemberId](docs/sdks/users/README.md#getusersusermemberid) - Retrieve Subscription Details by ID
* [getUsersUserMemberIdAdvocate](docs/sdks/users/README.md#getusersusermemberidadvocate) - Retrieve Advocate Information for the Specified Member
* [getUsersUserMemberIdSubscription](docs/sdks/users/README.md#getusersusermemberidsubscription) - Retrieve Subscription Details by ID
* [getUsersUserMemberMemberIdNextgenSubscription](docs/sdks/users/README.md#getusersusermembermemberidnextgensubscription) - Fetch All Nextgen Subscriptions for Member
* [getUsersUserMemberMemberIdNextgenSubscriptionPlan](docs/sdks/users/README.md#getusersusermembermemberidnextgensubscriptionplan) - Browse Available Nextgen Subscription Plans
* [getUsersUserMemberMemberIdNextgenSubscriptionPlanId](docs/sdks/users/README.md#getusersusermembermemberidnextgensubscriptionplanid) - Retrieve Specific Nextgen Subscription Plan
* [getUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/users/README.md#getusersusermembermemberidnextgensubscriptionid) - Retrieve Details of a Specific Nextgen Subscription
* [getUsersUserOccupation](docs/sdks/users/README.md#getusersuseroccupation) - Retrieve User's Occupation Details
* [getUsersUserPublicId](docs/sdks/users/README.md#getusersuserpublicid) - Retrieve Public User Profile by ID
* [getUsersUserTagId](docs/sdks/users/README.md#getusersusertagid) - Retrieve User by Tag ID
* [getUsersUserId](docs/sdks/users/README.md#getusersuserid) - Fetch user profile details using user ID
* [patchUsersAccountId](docs/sdks/users/README.md#patchusersaccountid) - Modify Bank Account Details
* [patchUsersActivityId](docs/sdks/users/README.md#patchusersactivityid) - Modify Specific Activity Details for a Member
* [patchUsersAuthorizationAuthorizationId](docs/sdks/users/README.md#patchusersauthorizationauthorizationid) - Modify Existing Authorization Details
* [patchUsersOrganizationUserUserId](docs/sdks/users/README.md#patchusersorganizationuseruserid) - Modify Organization User Profile
* [patchUsersOrganizationUserUserIdAssociate](docs/sdks/users/README.md#patchusersorganizationuseruseridassociate) - Modify the Association of Child User to Parent Organization
* [patchUsersSessionApiId](docs/sdks/users/README.md#patchuserssessionapiid) - Modify a Specific API Session
* [patchUsersSessionOtp](docs/sdks/users/README.md#patchuserssessionotp) - Confirm OTP/2FA Verification
* [patchUsersSubscriptionGrantId](docs/sdks/users/README.md#patchuserssubscriptiongrantid) - Modify subscription grant details
* [patchUsersUserClientId](docs/sdks/users/README.md#patchusersuserclientid) - Modify Existing Client Details by ID
* [patchUsersUserMemberSubscriptionPaymentMethod](docs/sdks/users/README.md#patchusersusermembersubscriptionpaymentmethod) - DEPRECATED Update Payment Method
* [patchUsersUserMemberSubscriptionId](docs/sdks/users/README.md#patchusersusermembersubscriptionid) - DEPRECATEDupdateSubscription
* [patchUsersUserMemberId](docs/sdks/users/README.md#patchusersusermemberid) - Modify Subscription Details for Member
* [patchUsersUserMemberIdSubscription](docs/sdks/users/README.md#patchusersusermemberidsubscription) - Modify Subscription Details for Member
* [patchUsersUserMemberMemberIdNextgenSubscriptionId](docs/sdks/users/README.md#patchusersusermembermemberidnextgensubscriptionid) - Modify an Existing Nextgen Subscription for Member
* [patchUsersUserId](docs/sdks/users/README.md#patchusersuserid) - Modify user account details using user ID
* [patchUsersUserIdVerificationEmail](docs/sdks/users/README.md#patchusersuseridverificationemail) - Confirm Email Verification Status
* [patchUsersUserIdVerificationPhone](docs/sdks/users/README.md#patchusersuseridverificationphone) - Validate Phone Verification Status
* [postUsersAccount](docs/sdks/users/README.md#postusersaccount) - Add New Bank Account
* [postUsersAccountLink](docs/sdks/users/README.md#postusersaccountlink) - Generate Plaid Link Token for Account Integration
* [postUsersAccountRequirements](docs/sdks/users/README.md#postusersaccountrequirements) - Fetch Necessary Account Details
* [postUsersActivity](docs/sdks/users/README.md#postusersactivity) - Log New Activity for Member
* [postUsersAuthentication](docs/sdks/users/README.md#postusersauthentication) - Authenticate User Request
* [postUsersAuthorization](docs/sdks/users/README.md#postusersauthorization) - Request User Authorization
* [postUsersFlatfileAuthToken](docs/sdks/users/README.md#postusersflatfileauthtoken) - Retrieve Authentication Token for Flatfile
* [postUsersGuestAccountNumbers](docs/sdks/users/README.md#postusersguestaccountnumbers) - Retrieve Account Numbers for Guests
* [postUsersOrganizationUser](docs/sdks/users/README.md#postusersorganizationuser) - Register New User within Organization
* [postUsersOrganizationUserUserIdAssociate](docs/sdks/users/README.md#postusersorganizationuseruseridassociate) - Link a Child User to a Parent Organization Account
* [postUsersPendingSession](docs/sdks/users/README.md#postuserspendingsession) - Initiate a new session with pending status
* [postUsersPendingUser](docs/sdks/users/README.md#postuserspendinguser) - Register a new user with pending status
* [postUsersSession](docs/sdks/users/README.md#postuserssession) - Initiate a New User Session
* [postUsersSessionApi](docs/sdks/users/README.md#postuserssessionapi) - Create a New API Session
* [postUsersSessionOtp](docs/sdks/users/README.md#postuserssessionotp) - Initiate OTP/2FA Verification Process
* [postUsersSessionRequestingUser](docs/sdks/users/README.md#postuserssessionrequestinguser) - Request to Sign-In on Behalf of Another User
* [postUsersSessionSingleSignOn](docs/sdks/users/README.md#postuserssessionsinglesignon) - Create a Single Sign-On (SSO) Session
* [postUsersSessionSocialAuthGoogle](docs/sdks/users/README.md#postuserssessionsocialauthgoogle) - Authenticate using Google
* [postUsersSubscriptionGrant](docs/sdks/users/README.md#postuserssubscriptiongrant) - New Subscription Grant
* [postUsersUser](docs/sdks/users/README.md#postusersuser) - Register a new user
* [postUsersUserClientId](docs/sdks/users/README.md#postusersuserclientid) - Register a New Client with Specific ID
* [postUsersUserMemberSubscriptionPaymentMethod](docs/sdks/users/README.md#postusersusermembersubscriptionpaymentmethod) - DEPRECATED create Payment Method
* [postUsersUserMemberId](docs/sdks/users/README.md#postusersusermemberid) - Register a New Subscription for Member
* [postUsersUserMemberIdSubscription](docs/sdks/users/README.md#postusersusermemberidsubscription) - Register a New Subscription for Member
* [postUsersUserMemberMemberIdNextgenSubscription](docs/sdks/users/README.md#postusersusermembermemberidnextgensubscription) - Initiate a New Nextgen Subscription for a Member
* [postUsersUserPasswordReset](docs/sdks/users/README.md#postusersuserpasswordreset) - Initiate User Password Reset Process
* [postUsersUserIdVerificationEmail](docs/sdks/users/README.md#postusersuseridverificationemail) - Initiate Email Verification Process for User
* [postUsersUserIdVerificationExistingEmail](docs/sdks/users/README.md#postusersuseridverificationexistingemail) - Initiate verification for an existing email address
* [postUsersUserIdVerificationPhone](docs/sdks/users/README.md#postusersuseridverificationphone) - Start Phone Verification Process for User
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app/users` | None |
| 1 | `https://stagingapi.wingspan.app/payments` | None |

For example:


```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        serverIdx: 1,
    });

    const res = await sdk.users.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        serverURL: "https://api.wingspan.app/users",
    });

    const res = await sdk.users.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @wingspan/users import Users;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Users({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
