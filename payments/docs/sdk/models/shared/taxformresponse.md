# TaxFormResponse


## Supported Types

### `shared.PayerTaxFormResponse`

```typescript
const value: shared.PayerTaxFormResponse = {
  activeSubmissionId: "<id>",
  adjustments: 1046.28,
  clientId: "<id>",
  createdAt: "<value>",
  data: {},
  deliveryMethod: "Electronic",
  deprecatedTaxForm: {},
  eventActors: {
    "key": "<value>",
  },
  eventHistory: [
    {
      eventType: "Emailed1099CopyDelivered",
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
  paymentProcessingFees: 6223.84,
  platformIncome: 7105.28,
  recipientConfirmedW9Info: false,
  recipientReadyToSubmitW9: false,
  recipientSyncEnabled: false,
  status: "ReadyToSubmitToIrs",
  submissions: [
    {
      correctionType: "Type1",
      deliveryMethod: "Mail",
      externalDocumentId: "<id>",
      isCorrected: false,
      status: "Ineligible",
      submissionData: {},
      submissionId: "<id>",
    },
  ],
  taxFormId: "<id>",
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
  year: 5436.78,
};
```

### `shared.PayerTaxFormResponse[]`

```typescript
const value: shared.PayerTaxFormResponse[] = [
  {
    activeSubmissionId: "<id>",
    adjustments: 2827.00,
    clientId: "<id>",
    createdAt: "<value>",
    data: {},
    deliveryMethod: "Electronic",
    deprecatedTaxForm: {},
    eventActors: {
      "key": "<value>",
    },
    eventHistory: [
      {
        eventType: "CorrectionRejected",
        timestamp: "<value>",
        triggeredBy: "Payer",
      },
    ],
    filingStateCode: "<value>",
    labels: {
      "key": "<value>",
    },
    memberId: "<id>",
    payerPayeeId: "<id>",
    paymentProcessingFees: 3726.79,
    platformIncome: 5305.37,
    recipientConfirmedW9Info: false,
    recipientReadyToSubmitW9: false,
    recipientSyncEnabled: false,
    status: "Ineligible",
    submissions: [
      {
        correctionType: "None",
        deliveryMethod: "Electronic",
        externalDocumentId: "<id>",
        isCorrected: false,
        status: "Pending",
        submissionData: {},
        submissionId: "<id>",
      },
    ],
    taxFormId: "<id>",
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
    year: 3426.11,
  },
];
```

