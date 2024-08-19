# TaxFormResponse

## Example Usage

```typescript
import { TaxFormResponse } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormResponse = {
    activeSubmissionId: "<value>",
    adjustments: 4071.83,
    clientId: "<value>",
    createdAt: "<value>",
    data: {},
    deliveryMethod: "Electronic",
    deprecatedTaxForm: {},
    eventActors: {
        key: "<value>",
    },
    eventHistory: [
        {
            eventType: "PayerManuallyUpdatedStatus",
            timestamp: "<value>",
            triggeredBy: "System",
        },
    ],
    filingStateCode: "<value>",
    labels: {
        key: "<value>",
    },
    memberId: "<value>",
    payerPayeeId: "<value>",
    paymentProcessingFees: 6974.29,
    platformIncome: 3732.91,
    recipientConfirmedW9Info: false,
    recipientReadyToSubmitW9: false,
    recipientSyncEnabled: false,
    status: "AcceptedByIrs",
    submissions: [
        {
            correctionType: "Type1",
            deliveryMethod: "Mail",
            externalDocumentId: "<value>",
            isCorrected: false,
            status: "Pending",
            submissionData: {},
            submissionId: "<value>",
        },
    ],
    taxFormId: "<value>",
    type: "Form1099Nec",
    updatedAt: "<value>",
    userRoles: {
        ownerIds: ["<value>"],
        viewerIds: ["<value>"],
    },
    year: 8663.83,
};
```

## Supported Types

### `shared.PayerTaxFormResponse`

```typescript
const value: shared.PayerTaxFormResponse = /* values here */
```

### `shared.PayerTaxFormResponse[]`

```typescript
const value: shared.PayerTaxFormResponse[] = /* values here */
```

