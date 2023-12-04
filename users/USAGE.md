<!-- Start SDK Example Usage [usage] -->
```typescript
import { Users } from "@wingspan/users";

async function run() {
    const sdk = new Users({
        bearerAuth: "",
    });

    const res = await sdk.userAndMemberManagement.getUsers();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->