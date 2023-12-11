# MemberClient


## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `achCreditAccount`                                                                                                                                                                | [shared.MemberClientWireAccount](../../../sdk/models/shared/memberclientwireaccount.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `client`                                                                                                                                                                          | [shared.RedactedMember](../../../sdk/models/shared/redactedmember.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `clientData`                                                                                                                                                                      | [shared.ClientData](../../../sdk/models/shared/clientdata.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `clientId`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `clientUserAccountType`                                                                                                                                                           | [shared.ClientUserAccountType](../../../sdk/models/shared/clientuseraccounttype.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `collaboratorGroupId`                                                                                                                                                             | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `collaboratorGroupIds`                                                                                                                                                            | *string*[]                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `company`                                                                                                                                                                         | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `createdAt`                                                                                                                                                                       | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `eligibilityRequirements`                                                                                                                                                         | [shared.MemberClientRequirementResponse](../../../sdk/models/shared/memberclientrequirementresponse.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `emailCC`                                                                                                                                                                         | *string*[]                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `emailTo`                                                                                                                                                                         | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `eventActors`                                                                                                                                                                     | Record<string, *string*>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `events`                                                                                                                                                                          | [shared.MemberClientEvents](../../../sdk/models/shared/memberclientevents.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `externalIds`                                                                                                                                                                     | [shared.ExternalIds](../../../sdk/models/shared/externalids.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `form1099Balances`                                                                                                                                                                | [shared.B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c](../../../sdk/models/shared/b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c.md)         | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `formW9Data`                                                                                                                                                                      | [shared.MemberClientFormW9Info](../../../sdk/models/shared/memberclientformw9info.md)                                                                                             | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `integration`                                                                                                                                                                     | [shared.Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f](../../../sdk/models/shared/threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f.md) | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `internationalWireAccount`                                                                                                                                                        | [shared.MemberClientWireAccount](../../../sdk/models/shared/memberclientwireaccount.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `labels`                                                                                                                                                                          | Record<string, *string*>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `member`                                                                                                                                                                          | [shared.RedactedMember](../../../sdk/models/shared/redactedmember.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `memberClientId`                                                                                                                                                                  | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `memberData`                                                                                                                                                                      | [shared.MemberData](../../../sdk/models/shared/memberdata.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `memberId`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `name`                                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `parentMemberClientId`                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `payerPayeeId`                                                                                                                                                                    | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `status`                                                                                                                                                                          | [shared.MemberClientStatus](../../../sdk/models/shared/memberclientstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `taxStatus`                                                                                                                                                                       | [shared.MemberClientTaxStatus](../../../sdk/models/shared/memberclienttaxstatus.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `updatedAt`                                                                                                                                                                       | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `userRoles`                                                                                                                                                                       | [shared.UserRoles](../../../sdk/models/shared/userroles.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |