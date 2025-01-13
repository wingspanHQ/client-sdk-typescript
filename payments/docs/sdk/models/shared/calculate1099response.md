# Calculate1099Response

## Example Usage

```typescript
import { Calculate1099Response } from "@wingspan/payments/sdk/models/shared";

let value: Calculate1099Response = {
  memberClient: {
    achCreditAccount: {
      accountNumber: "<value>",
      bankName: "<value>",
    },
    client: {
      user: {},
    },
    clientData: {},
    clientId: "<id>",
    clientUserAccountType: "member",
    createdAt: "1733432852574",
    emailTo: "<value>",
    eventActors: {
      "key": "<value>",
    },
    events: {},
    externalIds: {},
    form1099Balances: {},
    formW9Data: {},
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
    memberClientId: "<id>",
    memberData: {},
    memberId: "<id>",
    parentMemberClientId: "<id>",
    payerPayeeId: "<id>",
    status: "Pending",
    taxStatus: "Pending",
    updatedAt: "1736669308706",
    userRoles: {
      ownerIds: [
        "<value>",
      ],
      viewerIds: [
        "<value>",
      ],
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `memberClient`                                                    | [shared.MemberClient](../../../sdk/models/shared/memberclient.md) | :heavy_check_mark:                                                | N/A                                                               |