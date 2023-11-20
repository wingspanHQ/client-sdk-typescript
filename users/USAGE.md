<!-- Start SDK Example Usage -->
```typescript
import { Users } from "@wingspan/users";

(async () => {
    const sdk = new Users({
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->