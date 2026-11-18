/**
 * Open Thrift Cloud Functions.
 *
 * Nothing is deployed yet. These arrive in later phases:
 * - Phase 3: onProductWrite  - set tokenCost from config/tokenPricing, email admin on new upload
 * - Phase 5: initPayment      - create a pending transaction + Paystack reference
 *            paystackWebhook  - verify HMAC + amount, credit tokens once per reference
 *            unlockContact    - check balance/expiry, debit tokens, return seller contact
 * - Phase 6: notifications fan-out (FCM), admin + receipt emails, expiry reminders
 */
export {};
