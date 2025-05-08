# CollaboratorV2

## Example Usage

```typescript
import { CollaboratorV2 } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorV2 = {
  achCreditAccount: {
    accountNumber: "<value>",
    bankName: "<value>",
  },
  clientId: "<id>",
  collaborations: [
    {
      collaboratorId: "<id>",
      status: "Inactive",
    },
  ],
  createdAt: "1720426048323",
  eventActors: {
    "key": "<value>",
  },
  firstCollaborationId: "<id>",
  form1099Balances: {},
  formW9Data: {
    addressLine1: "8993 The Causeway",
    city: "Framiberg",
    companyStructure: "SoleProprietorship",
    country: "Turks and Caicos Islands",
    postalCode: "44781",
    state: "Michigan",
  },
  internationalWireAccount: {
    accountNumber: "<value>",
    bankName: "<value>",
  },
  labels: {
    "key": "<value>",
  },
  member: {
    user: {},
  },
  memberId: "<id>",
  primaryCollaborationId: "<id>",
  status: "Pending",
  taxStatus: "Incomplete",
  updatedAt: "1737863992509",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `achCreditAccount`                                                                                                                                                        | [shared.MemberClientWireAccount](../../../sdk/models/shared/memberclientwireaccount.md)                                                                                   | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `clientData`                                                                                                                                                              | [shared.ClientData](../../../sdk/models/shared/clientdata.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `clientId`                                                                                                                                                                | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `collaborations`                                                                                                                                                          | [shared.Collaboration](../../../sdk/models/shared/collaboration.md)[]                                                                                                     | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `createdAt`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `eventActors`                                                                                                                                                             | Record<string, *string*>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `firstCollaborationId`                                                                                                                                                    | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `form1099Balances`                                                                                                                                                        | [shared.B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c](../../../sdk/models/shared/b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c.md) | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `formW9Data`                                                                                                                                                              | [shared.CollaboratorV2FormW9Info](../../../sdk/models/shared/collaboratorv2formw9info.md)                                                                                 | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `internationalWireAccount`                                                                                                                                                | [shared.MemberClientWireAccount](../../../sdk/models/shared/memberclientwireaccount.md)                                                                                   | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `labels`                                                                                                                                                                  | Record<string, *string*>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `member`                                                                                                                                                                  | [shared.RedactedMember](../../../sdk/models/shared/redactedmember.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `memberData`                                                                                                                                                              | [shared.MemberData](../../../sdk/models/shared/memberdata.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `memberEvents`                                                                                                                                                            | [shared.CollaboratorEvents](../../../sdk/models/shared/collaboratorevents.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `memberId`                                                                                                                                                                | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `primaryCollaborationId`                                                                                                                                                  | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `status`                                                                                                                                                                  | [shared.CollaboratorV2Status](../../../sdk/models/shared/collaboratorv2status.md)                                                                                         | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `taxStatus`                                                                                                                                                               | [shared.CollaboratorV2TaxStatus](../../../sdk/models/shared/collaboratorv2taxstatus.md)                                                                                   | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `updatedAt`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `userRoles`                                                                                                                                                               | [shared.UserRoles](../../../sdk/models/shared/userroles.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |