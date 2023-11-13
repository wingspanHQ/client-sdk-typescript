<!-- Start SDK Example Usage -->
```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users();

    const res = await sdk.deleteUsersAccountId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->