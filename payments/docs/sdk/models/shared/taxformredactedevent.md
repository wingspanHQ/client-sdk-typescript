# TaxFormRedactedEvent

## Example Usage

```typescript
import { TaxFormRedactedEvent } from "@wingspan/payments/sdk/models/shared";

let value: TaxFormRedactedEvent = {
  eventType: "PayerManuallyUpdatedStatus",
  timestamp: "<value>",
  triggeredBy: "Payee",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [shared.TaxFormRedactedEventData](../../../sdk/models/shared/taxformredactedeventdata.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `eventActor`                                                                              | [shared.RedactedMember](../../../sdk/models/shared/redactedmember.md)                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `eventActorId`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `eventType`                                                                               | [shared.EventType](../../../sdk/models/shared/eventtype.md)                               | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `previousData`                                                                            | [shared.PreviousData](../../../sdk/models/shared/previousdata.md)                         | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `recipientSyncToggled`                                                                    | [shared.RecipientSyncToggled](../../../sdk/models/shared/recipientsynctoggled.md)         | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `timestamp`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `triggeredBy`                                                                             | [shared.TriggeredBy](../../../sdk/models/shared/triggeredby.md)                           | :heavy_check_mark:                                                                        | N/A                                                                                       |