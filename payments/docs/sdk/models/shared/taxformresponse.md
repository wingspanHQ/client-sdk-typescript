# TaxFormResponse


## Supported Types

### `shared.PayerTaxFormResponse`

```typescript
const value: shared.PayerTaxFormResponse = {
  activeSubmissionId: "<id>",
  adjustments: 302.35,
  clientId: "<id>",
  createdAt: "1728201937947",
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
  paymentProcessingFees: 9221.12,
  platformIncome: 894.94,
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
  updatedAt: "1737274467616",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
  year: 2097.5,
};
```

### `shared.PayerTaxFormResponse[]`

```typescript
const value: shared.PayerTaxFormResponse[] = [
  {
    activeSubmissionId: "<id>",
    adjustments: 1157.03,
    clientId: "<id>",
    createdAt: "1724001450588",
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
    updatedAt: "1737310531822",
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

