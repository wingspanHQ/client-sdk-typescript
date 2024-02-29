/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetPayoutSettingRequest = {
    /**
     * Unique identifier
     */
    id: string;
};

export type GetPayoutSettingResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The payout settings for a member
     */
    payoutSettingsResponse?: shared.PayoutSettingsResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetPayoutSettingRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetPayoutSettingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayoutSettingRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetPayoutSettingResponse$ {
    export type Inbound = {
        ContentType: string;
        PayoutSettingsResponse?: shared.PayoutSettingsResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetPayoutSettingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            PayoutSettingsResponse: shared.PayoutSettingsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PayoutSettingsResponse === undefined
                    ? null
                    : { payoutSettingsResponse: v.PayoutSettingsResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PayoutSettingsResponse?: shared.PayoutSettingsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPayoutSettingResponse> = z
        .object({
            contentType: z.string(),
            payoutSettingsResponse: shared.PayoutSettingsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.payoutSettingsResponse === undefined
                    ? null
                    : { PayoutSettingsResponse: v.payoutSettingsResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
