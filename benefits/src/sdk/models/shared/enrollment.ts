/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329,
    E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$,
} from "./e974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329";
import { z } from "zod";

export type Enrollment = {
    memberId: string;
    wingspanBenefits: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329;
};

/** @internal */
export namespace Enrollment$ {
    export type Inbound = {
        memberId: string;
        wingspanBenefits: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$.Inbound;
    };

    export const inboundSchema: z.ZodType<Enrollment, z.ZodTypeDef, Inbound> = z
        .object({
            memberId: z.string(),
            wingspanBenefits:
                E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$.inboundSchema,
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
                wingspanBenefits: v.wingspanBenefits,
            };
        });

    export type Outbound = {
        memberId: string;
        wingspanBenefits: E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Enrollment> = z
        .object({
            memberId: z.string(),
            wingspanBenefits:
                E974d9e9e5676123cf56d2fd858ece1c24be8be15b96a100963b7cb1afada329$.outboundSchema,
        })
        .transform((v) => {
            return {
                memberId: v.memberId,
                wingspanBenefits: v.wingspanBenefits,
            };
        });
}
