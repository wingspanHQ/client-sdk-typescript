# TaxFormResponse

## Example Usage

```typescript
import { TaxFormResponse } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormResponse = {
  activeSubmissionId: "<value>",
  adjustments: 7936.98,
  clientId: "<value>",
  createdAt: "<value>",
  data: {},
  deliveryMethod: "Electronic",
  deprecatedTaxForm: {},
  eventActors: {
    "key": "<value>",
  },
  eventHistory: [
    {
      eventType: "InvitationOpened",
      timestamp: "<value>",
      triggeredBy: "System",
    },
  ],
  filingStateCode: "<value>",
  labels: {
    "key": "<value>",
  },
  memberId: "<value>",
  payerPayeeId: "<value>",
  paymentProcessingFees: 3453.52,
  platformIncome: 9441.2,
  recipientConfirmedW9Info: false,
  recipientReadyToSubmitW9: false,
  recipientSyncEnabled: false,
  status: "Ineligible",
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
  year: 318.38,
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

