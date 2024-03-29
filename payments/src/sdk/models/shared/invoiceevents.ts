/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type InvoiceEvents = {
    approvedAt?: string | null | undefined;
    cancelledAt?: string | null | undefined;
    clientDeclinedAt?: string | null | undefined;
    clientResolvedDisputeAt?: string | null | undefined;
    depositedAt?: string | null | undefined;
    depositedToPayoutPlatformAt?: string | null | undefined;
    disputedAt?: string | null | undefined;
    emailMarkedAsSpamAt?: string | null | undefined;
    emailReceivedAt?: Array<string> | null | undefined;
    emailUndeliverableAt?: string | null | undefined;
    emailViewedAt?: Array<string> | null | undefined;
    estimatedDepositAt?: string | null | undefined;
    instantPayoutAt?: string | null | undefined;
    instantPayoutEligibleAt?: string | null | undefined;
    instantPayoutFailedAt?: string | null | undefined;
    markedPaidAt?: string | null | undefined;
    memberAcceptedAt?: string | null | undefined;
    memberDisputedAt?: string | null | undefined;
    memberResubmittedAt?: string | null | undefined;
    openedAt?: string | null | undefined;
    paidAt?: string | null | undefined;
    payAfterAccountVerified?: string | null | undefined;
    paymentFailedAt?: Array<string> | null | undefined;
    paymentInTransitAt?: string | null | undefined;
    paymentRetriedAt?: Array<string> | null | undefined;
    payoutFailedAt?: string | null | undefined;
    preApprovedAt?: string | null | undefined;
    refundedAt?: string | null | undefined;
    sentAt?: string | null | undefined;
    sentDue3DaysAgoAt?: string | null | undefined;
    sentDue7DaysAgoAt?: string | null | undefined;
    sentDueIn3DaysAt?: string | null | undefined;
    sentDueTodayAt?: string | null | undefined;
    sentInstantPayoutFailedToMember?: string | null | undefined;
    sentManuallyAt?: Array<string> | null | undefined;
    sentPaymentConfirmationToClient?: string | null | undefined;
    sentPaymentConfirmationToMember?: string | null | undefined;
    sentPaymentInTransitReminderAt?: string | null | undefined;
    sentPayoutMightBeDelayedToClient?: string | null | undefined;
    sentRecurringPaymentFailedAt?: string | null | undefined;
};

/** @internal */
export namespace InvoiceEvents$ {
    export type Inbound = {
        approvedAt?: string | null | undefined;
        cancelledAt?: string | null | undefined;
        clientDeclinedAt?: string | null | undefined;
        clientResolvedDisputeAt?: string | null | undefined;
        depositedAt?: string | null | undefined;
        depositedToPayoutPlatformAt?: string | null | undefined;
        disputedAt?: string | null | undefined;
        emailMarkedAsSpamAt?: string | null | undefined;
        emailReceivedAt?: Array<string> | null | undefined;
        emailUndeliverableAt?: string | null | undefined;
        emailViewedAt?: Array<string> | null | undefined;
        estimatedDepositAt?: string | null | undefined;
        instantPayoutAt?: string | null | undefined;
        instantPayoutEligibleAt?: string | null | undefined;
        instantPayoutFailedAt?: string | null | undefined;
        markedPaidAt?: string | null | undefined;
        memberAcceptedAt?: string | null | undefined;
        memberDisputedAt?: string | null | undefined;
        memberResubmittedAt?: string | null | undefined;
        openedAt?: string | null | undefined;
        paidAt?: string | null | undefined;
        payAfterAccountVerified?: string | null | undefined;
        paymentFailedAt?: Array<string> | null | undefined;
        paymentInTransitAt?: string | null | undefined;
        paymentRetriedAt?: Array<string> | null | undefined;
        payoutFailedAt?: string | null | undefined;
        preApprovedAt?: string | null | undefined;
        refundedAt?: string | null | undefined;
        sentAt?: string | null | undefined;
        sentDue3DaysAgoAt?: string | null | undefined;
        sentDue7DaysAgoAt?: string | null | undefined;
        sentDueIn3DaysAt?: string | null | undefined;
        sentDueTodayAt?: string | null | undefined;
        sentInstantPayoutFailedToMember?: string | null | undefined;
        sentManuallyAt?: Array<string> | null | undefined;
        sentPaymentConfirmationToClient?: string | null | undefined;
        sentPaymentConfirmationToMember?: string | null | undefined;
        sentPaymentInTransitReminderAt?: string | null | undefined;
        sentPayoutMightBeDelayedToClient?: string | null | undefined;
        sentRecurringPaymentFailedAt?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceEvents, z.ZodTypeDef, Inbound> = z
        .object({
            approvedAt: z.nullable(z.string()).optional(),
            cancelledAt: z.nullable(z.string()).optional(),
            clientDeclinedAt: z.nullable(z.string()).optional(),
            clientResolvedDisputeAt: z.nullable(z.string()).optional(),
            depositedAt: z.nullable(z.string()).optional(),
            depositedToPayoutPlatformAt: z.nullable(z.string()).optional(),
            disputedAt: z.nullable(z.string()).optional(),
            emailMarkedAsSpamAt: z.nullable(z.string()).optional(),
            emailReceivedAt: z.nullable(z.array(z.string())).optional(),
            emailUndeliverableAt: z.nullable(z.string()).optional(),
            emailViewedAt: z.nullable(z.array(z.string())).optional(),
            estimatedDepositAt: z.nullable(z.string()).optional(),
            instantPayoutAt: z.nullable(z.string()).optional(),
            instantPayoutEligibleAt: z.nullable(z.string()).optional(),
            instantPayoutFailedAt: z.nullable(z.string()).optional(),
            markedPaidAt: z.nullable(z.string()).optional(),
            memberAcceptedAt: z.nullable(z.string()).optional(),
            memberDisputedAt: z.nullable(z.string()).optional(),
            memberResubmittedAt: z.nullable(z.string()).optional(),
            openedAt: z.nullable(z.string()).optional(),
            paidAt: z.nullable(z.string()).optional(),
            payAfterAccountVerified: z.nullable(z.string()).optional(),
            paymentFailedAt: z.nullable(z.array(z.string())).optional(),
            paymentInTransitAt: z.nullable(z.string()).optional(),
            paymentRetriedAt: z.nullable(z.array(z.string())).optional(),
            payoutFailedAt: z.nullable(z.string()).optional(),
            preApprovedAt: z.nullable(z.string()).optional(),
            refundedAt: z.nullable(z.string()).optional(),
            sentAt: z.nullable(z.string()).optional(),
            sentDue3DaysAgoAt: z.nullable(z.string()).optional(),
            sentDue7DaysAgoAt: z.nullable(z.string()).optional(),
            sentDueIn3DaysAt: z.nullable(z.string()).optional(),
            sentDueTodayAt: z.nullable(z.string()).optional(),
            sentInstantPayoutFailedToMember: z.nullable(z.string()).optional(),
            sentManuallyAt: z.nullable(z.array(z.string())).optional(),
            sentPaymentConfirmationToClient: z.nullable(z.string()).optional(),
            sentPaymentConfirmationToMember: z.nullable(z.string()).optional(),
            sentPaymentInTransitReminderAt: z.nullable(z.string()).optional(),
            sentPayoutMightBeDelayedToClient: z.nullable(z.string()).optional(),
            sentRecurringPaymentFailedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.approvedAt === undefined ? null : { approvedAt: v.approvedAt }),
                ...(v.cancelledAt === undefined ? null : { cancelledAt: v.cancelledAt }),
                ...(v.clientDeclinedAt === undefined
                    ? null
                    : { clientDeclinedAt: v.clientDeclinedAt }),
                ...(v.clientResolvedDisputeAt === undefined
                    ? null
                    : { clientResolvedDisputeAt: v.clientResolvedDisputeAt }),
                ...(v.depositedAt === undefined ? null : { depositedAt: v.depositedAt }),
                ...(v.depositedToPayoutPlatformAt === undefined
                    ? null
                    : { depositedToPayoutPlatformAt: v.depositedToPayoutPlatformAt }),
                ...(v.disputedAt === undefined ? null : { disputedAt: v.disputedAt }),
                ...(v.emailMarkedAsSpamAt === undefined
                    ? null
                    : { emailMarkedAsSpamAt: v.emailMarkedAsSpamAt }),
                ...(v.emailReceivedAt === undefined
                    ? null
                    : { emailReceivedAt: v.emailReceivedAt }),
                ...(v.emailUndeliverableAt === undefined
                    ? null
                    : { emailUndeliverableAt: v.emailUndeliverableAt }),
                ...(v.emailViewedAt === undefined ? null : { emailViewedAt: v.emailViewedAt }),
                ...(v.estimatedDepositAt === undefined
                    ? null
                    : { estimatedDepositAt: v.estimatedDepositAt }),
                ...(v.instantPayoutAt === undefined
                    ? null
                    : { instantPayoutAt: v.instantPayoutAt }),
                ...(v.instantPayoutEligibleAt === undefined
                    ? null
                    : { instantPayoutEligibleAt: v.instantPayoutEligibleAt }),
                ...(v.instantPayoutFailedAt === undefined
                    ? null
                    : { instantPayoutFailedAt: v.instantPayoutFailedAt }),
                ...(v.markedPaidAt === undefined ? null : { markedPaidAt: v.markedPaidAt }),
                ...(v.memberAcceptedAt === undefined
                    ? null
                    : { memberAcceptedAt: v.memberAcceptedAt }),
                ...(v.memberDisputedAt === undefined
                    ? null
                    : { memberDisputedAt: v.memberDisputedAt }),
                ...(v.memberResubmittedAt === undefined
                    ? null
                    : { memberResubmittedAt: v.memberResubmittedAt }),
                ...(v.openedAt === undefined ? null : { openedAt: v.openedAt }),
                ...(v.paidAt === undefined ? null : { paidAt: v.paidAt }),
                ...(v.payAfterAccountVerified === undefined
                    ? null
                    : { payAfterAccountVerified: v.payAfterAccountVerified }),
                ...(v.paymentFailedAt === undefined
                    ? null
                    : { paymentFailedAt: v.paymentFailedAt }),
                ...(v.paymentInTransitAt === undefined
                    ? null
                    : { paymentInTransitAt: v.paymentInTransitAt }),
                ...(v.paymentRetriedAt === undefined
                    ? null
                    : { paymentRetriedAt: v.paymentRetriedAt }),
                ...(v.payoutFailedAt === undefined ? null : { payoutFailedAt: v.payoutFailedAt }),
                ...(v.preApprovedAt === undefined ? null : { preApprovedAt: v.preApprovedAt }),
                ...(v.refundedAt === undefined ? null : { refundedAt: v.refundedAt }),
                ...(v.sentAt === undefined ? null : { sentAt: v.sentAt }),
                ...(v.sentDue3DaysAgoAt === undefined
                    ? null
                    : { sentDue3DaysAgoAt: v.sentDue3DaysAgoAt }),
                ...(v.sentDue7DaysAgoAt === undefined
                    ? null
                    : { sentDue7DaysAgoAt: v.sentDue7DaysAgoAt }),
                ...(v.sentDueIn3DaysAt === undefined
                    ? null
                    : { sentDueIn3DaysAt: v.sentDueIn3DaysAt }),
                ...(v.sentDueTodayAt === undefined ? null : { sentDueTodayAt: v.sentDueTodayAt }),
                ...(v.sentInstantPayoutFailedToMember === undefined
                    ? null
                    : { sentInstantPayoutFailedToMember: v.sentInstantPayoutFailedToMember }),
                ...(v.sentManuallyAt === undefined ? null : { sentManuallyAt: v.sentManuallyAt }),
                ...(v.sentPaymentConfirmationToClient === undefined
                    ? null
                    : { sentPaymentConfirmationToClient: v.sentPaymentConfirmationToClient }),
                ...(v.sentPaymentConfirmationToMember === undefined
                    ? null
                    : { sentPaymentConfirmationToMember: v.sentPaymentConfirmationToMember }),
                ...(v.sentPaymentInTransitReminderAt === undefined
                    ? null
                    : { sentPaymentInTransitReminderAt: v.sentPaymentInTransitReminderAt }),
                ...(v.sentPayoutMightBeDelayedToClient === undefined
                    ? null
                    : { sentPayoutMightBeDelayedToClient: v.sentPayoutMightBeDelayedToClient }),
                ...(v.sentRecurringPaymentFailedAt === undefined
                    ? null
                    : { sentRecurringPaymentFailedAt: v.sentRecurringPaymentFailedAt }),
            };
        });

    export type Outbound = {
        approvedAt?: string | null | undefined;
        cancelledAt?: string | null | undefined;
        clientDeclinedAt?: string | null | undefined;
        clientResolvedDisputeAt?: string | null | undefined;
        depositedAt?: string | null | undefined;
        depositedToPayoutPlatformAt?: string | null | undefined;
        disputedAt?: string | null | undefined;
        emailMarkedAsSpamAt?: string | null | undefined;
        emailReceivedAt?: Array<string> | null | undefined;
        emailUndeliverableAt?: string | null | undefined;
        emailViewedAt?: Array<string> | null | undefined;
        estimatedDepositAt?: string | null | undefined;
        instantPayoutAt?: string | null | undefined;
        instantPayoutEligibleAt?: string | null | undefined;
        instantPayoutFailedAt?: string | null | undefined;
        markedPaidAt?: string | null | undefined;
        memberAcceptedAt?: string | null | undefined;
        memberDisputedAt?: string | null | undefined;
        memberResubmittedAt?: string | null | undefined;
        openedAt?: string | null | undefined;
        paidAt?: string | null | undefined;
        payAfterAccountVerified?: string | null | undefined;
        paymentFailedAt?: Array<string> | null | undefined;
        paymentInTransitAt?: string | null | undefined;
        paymentRetriedAt?: Array<string> | null | undefined;
        payoutFailedAt?: string | null | undefined;
        preApprovedAt?: string | null | undefined;
        refundedAt?: string | null | undefined;
        sentAt?: string | null | undefined;
        sentDue3DaysAgoAt?: string | null | undefined;
        sentDue7DaysAgoAt?: string | null | undefined;
        sentDueIn3DaysAt?: string | null | undefined;
        sentDueTodayAt?: string | null | undefined;
        sentInstantPayoutFailedToMember?: string | null | undefined;
        sentManuallyAt?: Array<string> | null | undefined;
        sentPaymentConfirmationToClient?: string | null | undefined;
        sentPaymentConfirmationToMember?: string | null | undefined;
        sentPaymentInTransitReminderAt?: string | null | undefined;
        sentPayoutMightBeDelayedToClient?: string | null | undefined;
        sentRecurringPaymentFailedAt?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceEvents> = z
        .object({
            approvedAt: z.nullable(z.string()).optional(),
            cancelledAt: z.nullable(z.string()).optional(),
            clientDeclinedAt: z.nullable(z.string()).optional(),
            clientResolvedDisputeAt: z.nullable(z.string()).optional(),
            depositedAt: z.nullable(z.string()).optional(),
            depositedToPayoutPlatformAt: z.nullable(z.string()).optional(),
            disputedAt: z.nullable(z.string()).optional(),
            emailMarkedAsSpamAt: z.nullable(z.string()).optional(),
            emailReceivedAt: z.nullable(z.array(z.string())).optional(),
            emailUndeliverableAt: z.nullable(z.string()).optional(),
            emailViewedAt: z.nullable(z.array(z.string())).optional(),
            estimatedDepositAt: z.nullable(z.string()).optional(),
            instantPayoutAt: z.nullable(z.string()).optional(),
            instantPayoutEligibleAt: z.nullable(z.string()).optional(),
            instantPayoutFailedAt: z.nullable(z.string()).optional(),
            markedPaidAt: z.nullable(z.string()).optional(),
            memberAcceptedAt: z.nullable(z.string()).optional(),
            memberDisputedAt: z.nullable(z.string()).optional(),
            memberResubmittedAt: z.nullable(z.string()).optional(),
            openedAt: z.nullable(z.string()).optional(),
            paidAt: z.nullable(z.string()).optional(),
            payAfterAccountVerified: z.nullable(z.string()).optional(),
            paymentFailedAt: z.nullable(z.array(z.string())).optional(),
            paymentInTransitAt: z.nullable(z.string()).optional(),
            paymentRetriedAt: z.nullable(z.array(z.string())).optional(),
            payoutFailedAt: z.nullable(z.string()).optional(),
            preApprovedAt: z.nullable(z.string()).optional(),
            refundedAt: z.nullable(z.string()).optional(),
            sentAt: z.nullable(z.string()).optional(),
            sentDue3DaysAgoAt: z.nullable(z.string()).optional(),
            sentDue7DaysAgoAt: z.nullable(z.string()).optional(),
            sentDueIn3DaysAt: z.nullable(z.string()).optional(),
            sentDueTodayAt: z.nullable(z.string()).optional(),
            sentInstantPayoutFailedToMember: z.nullable(z.string()).optional(),
            sentManuallyAt: z.nullable(z.array(z.string())).optional(),
            sentPaymentConfirmationToClient: z.nullable(z.string()).optional(),
            sentPaymentConfirmationToMember: z.nullable(z.string()).optional(),
            sentPaymentInTransitReminderAt: z.nullable(z.string()).optional(),
            sentPayoutMightBeDelayedToClient: z.nullable(z.string()).optional(),
            sentRecurringPaymentFailedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.approvedAt === undefined ? null : { approvedAt: v.approvedAt }),
                ...(v.cancelledAt === undefined ? null : { cancelledAt: v.cancelledAt }),
                ...(v.clientDeclinedAt === undefined
                    ? null
                    : { clientDeclinedAt: v.clientDeclinedAt }),
                ...(v.clientResolvedDisputeAt === undefined
                    ? null
                    : { clientResolvedDisputeAt: v.clientResolvedDisputeAt }),
                ...(v.depositedAt === undefined ? null : { depositedAt: v.depositedAt }),
                ...(v.depositedToPayoutPlatformAt === undefined
                    ? null
                    : { depositedToPayoutPlatformAt: v.depositedToPayoutPlatformAt }),
                ...(v.disputedAt === undefined ? null : { disputedAt: v.disputedAt }),
                ...(v.emailMarkedAsSpamAt === undefined
                    ? null
                    : { emailMarkedAsSpamAt: v.emailMarkedAsSpamAt }),
                ...(v.emailReceivedAt === undefined
                    ? null
                    : { emailReceivedAt: v.emailReceivedAt }),
                ...(v.emailUndeliverableAt === undefined
                    ? null
                    : { emailUndeliverableAt: v.emailUndeliverableAt }),
                ...(v.emailViewedAt === undefined ? null : { emailViewedAt: v.emailViewedAt }),
                ...(v.estimatedDepositAt === undefined
                    ? null
                    : { estimatedDepositAt: v.estimatedDepositAt }),
                ...(v.instantPayoutAt === undefined
                    ? null
                    : { instantPayoutAt: v.instantPayoutAt }),
                ...(v.instantPayoutEligibleAt === undefined
                    ? null
                    : { instantPayoutEligibleAt: v.instantPayoutEligibleAt }),
                ...(v.instantPayoutFailedAt === undefined
                    ? null
                    : { instantPayoutFailedAt: v.instantPayoutFailedAt }),
                ...(v.markedPaidAt === undefined ? null : { markedPaidAt: v.markedPaidAt }),
                ...(v.memberAcceptedAt === undefined
                    ? null
                    : { memberAcceptedAt: v.memberAcceptedAt }),
                ...(v.memberDisputedAt === undefined
                    ? null
                    : { memberDisputedAt: v.memberDisputedAt }),
                ...(v.memberResubmittedAt === undefined
                    ? null
                    : { memberResubmittedAt: v.memberResubmittedAt }),
                ...(v.openedAt === undefined ? null : { openedAt: v.openedAt }),
                ...(v.paidAt === undefined ? null : { paidAt: v.paidAt }),
                ...(v.payAfterAccountVerified === undefined
                    ? null
                    : { payAfterAccountVerified: v.payAfterAccountVerified }),
                ...(v.paymentFailedAt === undefined
                    ? null
                    : { paymentFailedAt: v.paymentFailedAt }),
                ...(v.paymentInTransitAt === undefined
                    ? null
                    : { paymentInTransitAt: v.paymentInTransitAt }),
                ...(v.paymentRetriedAt === undefined
                    ? null
                    : { paymentRetriedAt: v.paymentRetriedAt }),
                ...(v.payoutFailedAt === undefined ? null : { payoutFailedAt: v.payoutFailedAt }),
                ...(v.preApprovedAt === undefined ? null : { preApprovedAt: v.preApprovedAt }),
                ...(v.refundedAt === undefined ? null : { refundedAt: v.refundedAt }),
                ...(v.sentAt === undefined ? null : { sentAt: v.sentAt }),
                ...(v.sentDue3DaysAgoAt === undefined
                    ? null
                    : { sentDue3DaysAgoAt: v.sentDue3DaysAgoAt }),
                ...(v.sentDue7DaysAgoAt === undefined
                    ? null
                    : { sentDue7DaysAgoAt: v.sentDue7DaysAgoAt }),
                ...(v.sentDueIn3DaysAt === undefined
                    ? null
                    : { sentDueIn3DaysAt: v.sentDueIn3DaysAt }),
                ...(v.sentDueTodayAt === undefined ? null : { sentDueTodayAt: v.sentDueTodayAt }),
                ...(v.sentInstantPayoutFailedToMember === undefined
                    ? null
                    : { sentInstantPayoutFailedToMember: v.sentInstantPayoutFailedToMember }),
                ...(v.sentManuallyAt === undefined ? null : { sentManuallyAt: v.sentManuallyAt }),
                ...(v.sentPaymentConfirmationToClient === undefined
                    ? null
                    : { sentPaymentConfirmationToClient: v.sentPaymentConfirmationToClient }),
                ...(v.sentPaymentConfirmationToMember === undefined
                    ? null
                    : { sentPaymentConfirmationToMember: v.sentPaymentConfirmationToMember }),
                ...(v.sentPaymentInTransitReminderAt === undefined
                    ? null
                    : { sentPaymentInTransitReminderAt: v.sentPaymentInTransitReminderAt }),
                ...(v.sentPayoutMightBeDelayedToClient === undefined
                    ? null
                    : { sentPayoutMightBeDelayedToClient: v.sentPayoutMightBeDelayedToClient }),
                ...(v.sentRecurringPaymentFailedAt === undefined
                    ? null
                    : { sentRecurringPaymentFailedAt: v.sentRecurringPaymentFailedAt }),
            };
        });
}
