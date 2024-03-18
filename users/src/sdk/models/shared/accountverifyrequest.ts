/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4,
    Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4$,
} from "./sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4";
import * as z from "zod";

export enum AccountVerifyRequestType {
    MicroDeposit = "MicroDeposit",
}

export type AccountVerifyRequest = {
    type: AccountVerifyRequestType;
    verifications: Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4;
};

/** @internal */
export const AccountVerifyRequestType$ = z.nativeEnum(AccountVerifyRequestType);

/** @internal */
export namespace AccountVerifyRequest$ {
    export type Inbound = {
        type: AccountVerifyRequestType;
        verifications: Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4$.Inbound;
    };

    export const inboundSchema: z.ZodType<AccountVerifyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            type: AccountVerifyRequestType$,
            verifications:
                Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4$.inboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
                verifications: v.verifications,
            };
        });

    export type Outbound = {
        type: AccountVerifyRequestType;
        verifications: Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountVerifyRequest> = z
        .object({
            type: AccountVerifyRequestType$,
            verifications:
                Sevena01613108052d8f7b4782efc42c1c6198c318ddee48446943e5402df03118c4$.outboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
                verifications: v.verifications,
            };
        });
}
