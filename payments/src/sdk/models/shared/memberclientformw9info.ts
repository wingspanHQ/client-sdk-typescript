/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum MemberClientFormW9InfoCompanyStructure {
    None = "None",
    SoleProprietorship = "SoleProprietorship",
    LlcSingleMember = "LlcSingleMember",
    LlcMultiMember = "LlcMultiMember",
    CorporationS = "CorporationS",
    LLCCorporationS = "LLCCorporationS",
    LLCCorporationC = "LLCCorporationC",
    LLCPartnership = "LLCPartnership",
    CorporationC = "CorporationC",
    Partnership = "Partnership",
}

export type MemberClientFormW9Info = {
    addressLine1?: string | null | undefined;
    addressLine2?: string | null | undefined;
    city?: string | null | undefined;
    companyStructure?: MemberClientFormW9InfoCompanyStructure | null | undefined;
    country?: string | null | undefined;
    dob?: string | null | undefined;
    ein?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    legalBusinessName?: string | null | undefined;
    postalCode?: string | null | undefined;
    ssn?: string | null | undefined;
    state?: string | null | undefined;
};

/** @internal */
export const MemberClientFormW9InfoCompanyStructure$ = z.nativeEnum(
    MemberClientFormW9InfoCompanyStructure
);

/** @internal */
export namespace MemberClientFormW9Info$ {
    export type Inbound = {
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        companyStructure?: MemberClientFormW9InfoCompanyStructure | null | undefined;
        country?: string | null | undefined;
        dob?: string | null | undefined;
        ein?: string | null | undefined;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        legalBusinessName?: string | null | undefined;
        postalCode?: string | null | undefined;
        ssn?: string | null | undefined;
        state?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<MemberClientFormW9Info, z.ZodTypeDef, Inbound> = z
        .object({
            addressLine1: z.nullable(z.string()).optional(),
            addressLine2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            companyStructure: z.nullable(MemberClientFormW9InfoCompanyStructure$).optional(),
            country: z.nullable(z.string()).optional(),
            dob: z.nullable(z.string()).optional(),
            ein: z.nullable(z.string()).optional(),
            firstName: z.nullable(z.string()).optional(),
            lastName: z.nullable(z.string()).optional(),
            legalBusinessName: z.nullable(z.string()).optional(),
            postalCode: z.nullable(z.string()).optional(),
            ssn: z.nullable(z.string()).optional(),
            state: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressLine1 === undefined ? null : { addressLine1: v.addressLine1 }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.companyStructure === undefined
                    ? null
                    : { companyStructure: v.companyStructure }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.dob === undefined ? null : { dob: v.dob }),
                ...(v.ein === undefined ? null : { ein: v.ein }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.legalBusinessName === undefined
                    ? null
                    : { legalBusinessName: v.legalBusinessName }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.ssn === undefined ? null : { ssn: v.ssn }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });

    export type Outbound = {
        addressLine1?: string | null | undefined;
        addressLine2?: string | null | undefined;
        city?: string | null | undefined;
        companyStructure?: MemberClientFormW9InfoCompanyStructure | null | undefined;
        country?: string | null | undefined;
        dob?: string | null | undefined;
        ein?: string | null | undefined;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        legalBusinessName?: string | null | undefined;
        postalCode?: string | null | undefined;
        ssn?: string | null | undefined;
        state?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberClientFormW9Info> = z
        .object({
            addressLine1: z.nullable(z.string()).optional(),
            addressLine2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            companyStructure: z.nullable(MemberClientFormW9InfoCompanyStructure$).optional(),
            country: z.nullable(z.string()).optional(),
            dob: z.nullable(z.string()).optional(),
            ein: z.nullable(z.string()).optional(),
            firstName: z.nullable(z.string()).optional(),
            lastName: z.nullable(z.string()).optional(),
            legalBusinessName: z.nullable(z.string()).optional(),
            postalCode: z.nullable(z.string()).optional(),
            ssn: z.nullable(z.string()).optional(),
            state: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addressLine1 === undefined ? null : { addressLine1: v.addressLine1 }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.companyStructure === undefined
                    ? null
                    : { companyStructure: v.companyStructure }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.dob === undefined ? null : { dob: v.dob }),
                ...(v.ein === undefined ? null : { ein: v.ein }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.legalBusinessName === undefined
                    ? null
                    : { legalBusinessName: v.legalBusinessName }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.ssn === undefined ? null : { ssn: v.ssn }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });
}
