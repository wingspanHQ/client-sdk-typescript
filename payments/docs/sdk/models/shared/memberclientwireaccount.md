# MemberClientWireAccount

## Example Usage

```typescript
import { MemberClientWireAccount } from "@wingspan/payments/sdk/models/shared";

let value: MemberClientWireAccount = {
  accountNumber: "<value>",
  bankName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accountNumber`    | *string*           | :heavy_check_mark: | N/A                |
| `bankName`         | *string*           | :heavy_check_mark: | N/A                |
| `routingNumber`    | *string*           | :heavy_minus_sign: | N/A                |
| `swiftCode`        | *string*           | :heavy_minus_sign: | N/A                |