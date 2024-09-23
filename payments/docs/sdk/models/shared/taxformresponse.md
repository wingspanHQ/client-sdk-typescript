# TaxFormResponse

## Example Usage

```typescript
import { TaxFormResponse } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormResponse = [
  {
    activeSubmissionId: "<value>",
    adjustments: 769.56,
    clientId: "<value>",
    createdAt: "<value>",
    data: {},
    deliveryMethod: "Mail",
    deprecatedTaxForm: {},
    eventActors: {
      "key": "<value>",
    },
    eventHistory: [
      {
        eventType: "RecipientSharedW9Info",
        timestamp: "<value>",
        triggeredBy: "Payee",
      },
    ],
    filingStateCode: "<value>",
    labels: {
      "key": "<value>",
    },
    memberId: "<value>",
    payerPayeeId: "<value>",
    paymentProcessingFees: 9594.33,
    platformIncome: 6455.70,
    recipientConfirmedW9Info: false,
    recipientReadyToSubmitW9: false,
    recipientSyncEnabled: false,
    status: "Pending",
    submissions: [
      {
        correctionType: "Type1",
        deliveryMethod: "Mail",
        externalDocumentId: "<value>",
        isCorrected: false,
        status: "RejectedByIrs",
        submissionData: {},
        submissionId: "<value>",
      },
    ],
    taxFormId: "<value>",
    type: "Form1099Nec",
    updatedAt: "<value>",
    userRoles: {
      ownerIds: [
        "<value>",
      ],
      viewerIds: [
        "<value>",
      ],
    },
    year: 6813.93,
  },
];
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

