# TaxFormResponse

## Example Usage

```typescript
import { TaxFormResponse } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormResponse = {
    activeSubmissionId: "<value>",
    adjustments: 117.14,
    clientId: "<value>",
    createdAt: "<value>",
    data: {},
    deliveryMethod: "Mail",
    deprecatedTaxForm: {},
    eventActors: {
        key: "<value>",
    },
    eventHistory: [
        {
            eventType: "TINVerificationRequested",
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
    paymentProcessingFees: 7299.91,
    platformIncome: 7499.99,
    recipientConfirmedW9Info: false,
    recipientReadyToSubmitW9: false,
    recipientSyncEnabled: false,
    status: "ReadyToSubmitToIrs",
    submissions: [
        {
            correctionType: "Type1",
            deliveryMethod: "Mail",
            externalDocumentId: "<value>",
            isCorrected: false,
            status: "AcceptedByIrs",
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
    year: 543.38,
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

