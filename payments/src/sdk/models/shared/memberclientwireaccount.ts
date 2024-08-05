/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MemberClientWireAccount = {
    accountNumber: string;
    bankName: string;
    routingNumber?: string | null | undefined;
    swiftCode?: string | null | undefined;
};

/** @internal */
export const MemberClientWireAccount$inboundSchema: z.ZodType<
    MemberClientWireAccount,
    z.ZodTypeDef,
    unknown
> = z.object({
    accountNumber: z.string(),
    bankName: z.string(),
    routingNumber: z.nullable(z.string()).optional(),
    swiftCode: z.nullable(z.string()).optional(),
});

/** @internal */
export type MemberClientWireAccount$Outbound = {
    accountNumber: string;
    bankName: string;
    routingNumber?: string | null | undefined;
    swiftCode?: string | null | undefined;
};

/** @internal */
export const MemberClientWireAccount$outboundSchema: z.ZodType<
    MemberClientWireAccount$Outbound,
    z.ZodTypeDef,
    MemberClientWireAccount
> = z.object({
    accountNumber: z.string(),
    bankName: z.string(),
    routingNumber: z.nullable(z.string()).optional(),
    swiftCode: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MemberClientWireAccount$ {
    /** @deprecated use `MemberClientWireAccount$inboundSchema` instead. */
    export const inboundSchema = MemberClientWireAccount$inboundSchema;
    /** @deprecated use `MemberClientWireAccount$outboundSchema` instead. */
    export const outboundSchema = MemberClientWireAccount$outboundSchema;
    /** @deprecated use `MemberClientWireAccount$Outbound` instead. */
    export type Outbound = MemberClientWireAccount$Outbound;
}
