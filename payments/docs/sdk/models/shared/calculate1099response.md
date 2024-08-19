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
        clientId: "<value>",
        clientUserAccountType: "member",
        createdAt: "<value>",
        emailTo: "<value>",
        eventActors: {
            key: "<value>",
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
            key: "<value>",
        },
        member: {
            user: {},
        },
        memberClientId: "<value>",
        memberData: {},
        memberId: "<value>",
        parentMemberClientId: "<value>",
        payerPayeeId: "<value>",
        status: "Inactive",
        taxStatus: "Incomplete",
        updatedAt: "<value>",
        userRoles: {
            ownerIds: ["<value>"],
            viewerIds: ["<value>"],
        },
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `memberClient`                                                    | [shared.MemberClient](../../../sdk/models/shared/memberclient.md) | :heavy_check_mark:                                                | N/A                                                               |