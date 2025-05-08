# GetForm1099PDFRequest

## Example Usage

```typescript
import { GetForm1099PDFRequest } from "@wingspan/payments/sdk/models/operations";

let value: GetForm1099PDFRequest = {
  id: "<id>",
  index: "<value>",
  year: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Unique identifier  |
| `index`            | *string*           | :heavy_check_mark: | Index              |
| `year`             | *string*           | :heavy_check_mark: | Year               |