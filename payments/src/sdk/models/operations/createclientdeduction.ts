/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateClientDeductionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A deduction
     */
    deductionResponse?: shared.DeductionResponse | undefined;
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
export namespace CreateClientDeductionResponse$ {
    export type Inbound = {
        ContentType: string;
        DeductionResponse?: shared.DeductionResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateClientDeductionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DeductionResponse: shared.DeductionResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DeductionResponse === undefined
                    ? null
                    : { deductionResponse: v.DeductionResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DeductionResponse?: shared.DeductionResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateClientDeductionResponse> =
        z
            .object({
                contentType: z.string(),
                deductionResponse: shared.DeductionResponse$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.deductionResponse === undefined
                        ? null
                        : { DeductionResponse: v.deductionResponse }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
