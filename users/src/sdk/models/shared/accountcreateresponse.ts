/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Account, Account$ } from "./account";
import * as z from "zod";

export type AccountCreateResponse = Account | Array<Account>;

/** @internal */
export namespace AccountCreateResponse$ {
    export type Inbound = Account$.Inbound | Array<Account$.Inbound>;

    export type Outbound = Account$.Outbound | Array<Account$.Outbound>;
    export const inboundSchema: z.ZodType<AccountCreateResponse, z.ZodTypeDef, Inbound> = z.union([
        Account$.inboundSchema,
        z.array(Account$.inboundSchema),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountCreateResponse> = z.union(
        [Account$.outboundSchema, z.array(Account$.outboundSchema)]
    );
}
