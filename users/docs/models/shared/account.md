# Account


## Fields

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                     | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `canBeUsedFor`                                                                                                                                                                                  | [AccountPurpose](../../models/shared/accountpurpose.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `country`                                                                                                                                                                                       | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `createdAt`                                                                                                                                                                                     | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `currency`                                                                                                                                                                                      | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `eventActors`                                                                                                                                                                                   | Record<string, *string*>                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `events`                                                                                                                                                                                        | [AccountEvents](../../models/shared/accountevents.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `externalIds`                                                                                                                                                                                   | [PlaidExternalIds](../../models/shared/plaidexternalids.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `institution`                                                                                                                                                                                   | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `institutionId`                                                                                                                                                                                 | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `integration`                                                                                                                                                                                   | [SixHundredAndSixtyTwob4b108cbbf88d6c8da2cc52e8dc2fcc4e24449d66b34b20beeb55bad5790d](../../models/shared/sixhundredandsixtytwob4b108cbbf88d6c8da2cc52e8dc2fcc4e24449d66b34b20beeb55bad5790d.md) | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `labels`                                                                                                                                                                                        | Record<string, *string*>                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `mask`                                                                                                                                                                                          | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `name`                                                                                                                                                                                          | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `numbers`                                                                                                                                                                                       | [AccountNumbers](../../models/shared/accountnumbers.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `owners`                                                                                                                                                                                        | *string*[]                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `publicToken`                                                                                                                                                                                   | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `status`                                                                                                                                                                                        | [AccountStatus](../../models/shared/accountstatus.md)                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `subType`                                                                                                                                                                                       | [AccountSubType](../../models/shared/accountsubtype.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `type`                                                                                                                                                                                          | [AccountType](../../models/shared/accounttype.md)                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `updatedAt`                                                                                                                                                                                     | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `usage`                                                                                                                                                                                         | [AccountUsage](../../models/shared/accountusage.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `usedFor`                                                                                                                                                                                       | [AccountPurpose](../../models/shared/accountpurpose.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `userId`                                                                                                                                                                                        | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `userRoles`                                                                                                                                                                                     | [UserRoles](../../models/shared/userroles.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |