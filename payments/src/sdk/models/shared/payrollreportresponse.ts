/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07,
    FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$inboundSchema,
    FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$Outbound,
    FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$outboundSchema,
} from "./fortytwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07.js";
import {
    PayrollReportInvoice,
    PayrollReportInvoice$inboundSchema,
    PayrollReportInvoice$Outbound,
    PayrollReportInvoice$outboundSchema,
} from "./payrollreportinvoice.js";
import * as z from "zod";

export type PayrollReportResponse = {
    invoices: Array<PayrollReportInvoice>;
    parentInvoice: FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07;
};

/** @internal */
export const PayrollReportResponse$inboundSchema: z.ZodType<
    PayrollReportResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    invoices: z.array(PayrollReportInvoice$inboundSchema),
    parentInvoice:
        FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$inboundSchema,
});

/** @internal */
export type PayrollReportResponse$Outbound = {
    invoices: Array<PayrollReportInvoice$Outbound>;
    parentInvoice: FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$Outbound;
};

/** @internal */
export const PayrollReportResponse$outboundSchema: z.ZodType<
    PayrollReportResponse$Outbound,
    z.ZodTypeDef,
    PayrollReportResponse
> = z.object({
    invoices: z.array(PayrollReportInvoice$outboundSchema),
    parentInvoice:
        FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayrollReportResponse$ {
    /** @deprecated use `PayrollReportResponse$inboundSchema` instead. */
    export const inboundSchema = PayrollReportResponse$inboundSchema;
    /** @deprecated use `PayrollReportResponse$outboundSchema` instead. */
    export const outboundSchema = PayrollReportResponse$outboundSchema;
    /** @deprecated use `PayrollReportResponse$Outbound` instead. */
    export type Outbound = PayrollReportResponse$Outbound;
}
