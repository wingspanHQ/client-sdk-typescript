# TaxFormResponse


## Supported Types

### `shared.PayerTaxFormResponse`

```typescript
const value: shared.PayerTaxFormResponse = {
  activeSubmissionId: "<id>",
  adjustments: 302.35,
  clientId: "<id>",
  createdAt: "1727597145989",
  data: {},
  deliveryMethod: "Electronic",
  deprecatedTaxForm: {},
  eventActors: {
    "key": "<value>",
  },
  eventHistory: [
    {
      eventType: "TINVerificationRequested",
      timestamp: "<value>",
      triggeredBy: "Payee",
    },
  ],
  filingStateCode: "<value>",
  labels: {
    "key": "<value>",
  },
  memberId: "<id>",
  payerPayeeId: "<id>",
  paymentProcessingFees: 9221.11,
  platformIncome: 894.95,
  recipientConfirmedW9Info: false,
  recipientReadyToSubmitW9: false,
  recipientSyncEnabled: false,
  status: "AcceptedByIrs",
  submissions: [
    {
      correctionType: "None",
      deliveryMethod: "Electronic",
      externalDocumentId: "<id>",
      isCorrected: false,
      status: "RejectedByIrs",
      submissionData: {},
      submissionId: "<id>",
    },
  ],
  taxFormId: "<id>",
  type: "Form1099Nec",
  updatedAt: "1736669675658",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
  year: 2097.50,
};
```

### `shared.PayerTaxFormResponse[]`

```typescript
const value: shared.PayerTaxFormResponse[] = [
  {
    activeSubmissionId: "<id>",
    adjustments: 1157.03,
    clientId: "<id>",
    createdAt: "1723396658630",
    data: {},
    deliveryMethod: "Mail",
    deprecatedTaxForm: {},
    eventActors: {
      "key": "<value>",
    },
    eventHistory: [
      {
        eventType: "CorrectionAccepted",
        timestamp: "<value>",
        triggeredBy: "System",
      },
    ],
    filingStateCode: "<value>",
    labels: {
      "key": "<value>",
    },
    memberId: "<id>",
    payerPayeeId: "<id>",
    paymentProcessingFees: 27.03,
    platformIncome: 6471.97,
    recipientConfirmedW9Info: false,
    recipientReadyToSubmitW9: false,
    recipientSyncEnabled: false,
    status: "RejectedByIrs",
    submissions: [
      {
        correctionType: "Type1",
        deliveryMethod: "Mail",
        externalDocumentId: "<id>",
        isCorrected: false,
        status: "Pending",
        submissionData: {},
        submissionId: "<id>",
      },
    ],
    taxFormId: "<id>",
    type: "Form1099Nec",
    updatedAt: "1736705739864",
    userRoles: {
      ownerIds: [
        "<value>",
      ],
      viewerIds: [
        "<value>",
      ],
    },
    year: 8136.79,
  },
];
```

