# Alerts (88)

> **Source**: Live from BE11146040 (REST API / SDK) — extracted 2026-03-02

Automated loan alerts that notify users of conditions.

### 1. Milestone Finished
- id: 0
- name: Milestone Finished
- displayOrder: 1
- standardAlertId: MilestoneFinished
- timing: Immediate
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Fixed
- allowUserDefinedTriggerFields: false
- triggerDescription: Finished Date
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false
- alertMilestoneMessages: {"1":"Loan has been started","2":"Loan has been sent to Processing","3":"Loan has been submitted to Underwriting","4":"Loan has been approved","5":"Lo

### 2. Conversation Follow Up
- id: 1
- name: Conversation Follow Up
- displayOrder: 5
- standardAlertId: ConversationFollowUp
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Follow Up Date
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 3. Document Expected
- id: 2
- name: Document Expected
- displayOrder: 2
- standardAlertId: DocumentExpected
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: false
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Receive
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 4. Escrow Disbursement Due
- id: 3
- name: Escrow Disbursement Due
- displayOrder: 21
- standardAlertId: EscrowDisbursementDue
- timing: DaysBefore
- daysBefore: 14
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Disbursement Due Date (SERVICE.X59-73)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 5. Task Follow Up
- id: 4
- name: Task Follow Up
- displayOrder: 7
- standardAlertId: TaskFollowUp
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Follow Up Date
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 6. Milestone Expected
- id: 5
- name: Milestone Expected
- displayOrder: 0
- standardAlertId: MilestoneExpected
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: false
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Finish
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 7. Borrower Payment Past Due
- id: 6
- name: Borrower Payment Past Due
- displayOrder: 19
- standardAlertId: PaymentPastDue
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Late Payment Date (SERVICE.X15)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 8. Statement Printing/Mailing Due
- id: 7
- name: Statement Printing/Mailing Due
- displayOrder: 20
- standardAlertId: PrintMailPaymentStatement
- timing: DaysBefore
- daysBefore: 7
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Statement Date (SERVICE.X10)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 9. Purchase Advice Form Does Not Balance
- id: 8
- name: Purchase Advice Form Does Not Balance
- displayOrder: 22
- standardAlertId: PurchaseAdviceForm
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Reconciled Difference (2629)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 10. Rate Lock Request Confirmed
- id: 9
- name: Rate Lock Request Confirmed
- displayOrder: 13
- standardAlertId: RateLockConfirm
- timing: Immediate
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Secondary Registration
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 11. Rate Lock Expired
- id: 10
- name: Rate Lock Expired
- displayOrder: 15
- standardAlertId: RateLockExpired
- timing: DaysBefore
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Lock Expiration Date (762)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 12. Shipping Due
- id: 12
- name: Shipping Due
- displayOrder: 23
- standardAlertId: ShippingExpected
- timing: DaysBefore
- daysBefore: 7
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Investor Delivery Date (2012)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 13. Registration Expiration
- id: 14
- name: Registration Expiration
- displayOrder: 11
- standardAlertId: RegistrationExpired
- timing: DaysBefore
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Registration
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 14. Post Closing Condition Expected
- id: 15
- name: Post Closing Condition Expected
- displayOrder: 10
- standardAlertId: PostClosingConditionExpected
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Receive
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 15. Document Expired
- id: 17
- name: Document Expired
- displayOrder: 3
- standardAlertId: DocumentExpired
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: false
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Expire
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 16. Rate Lock Requested
- id: 18
- name: Rate Lock Requested
- displayOrder: 12
- standardAlertId: RateLockRequested
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Lock Request Form
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 17. Rate Lock Request Denied
- id: 19
- name: Rate Lock Request Denied
- displayOrder: 14
- standardAlertId: RateLockDenied
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Secondary Denied
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 18. Task Expected
- id: 20
- name: Task Expected
- displayOrder: 6
- standardAlertId: TaskDue
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Complete
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 19. Redisclose REGZ - TIL (APR Change)
- id: 21
- name: Redisclose REGZ - TIL (APR Change)
- displayOrder: 24
- standardAlertId: RediscloseTILRateChange
- timing: Immediate
- message: REG-Z TIL must be re-disclosed when the Current APR differs from the Disclosed APR by more than 0.125%. (0.25% for ARM loans)
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 20. Send Initial Disclosures
- id: 22
- name: Send Initial Disclosures
- displayOrder: 26
- standardAlertId: InitialDisclosures
- timing: DaysBefore
- message: Initial disclosures must be sent no later than 3 days from the receipt of sufficient information to complete an application.
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: true
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 21. GFE Expires
- id: 23
- name: GFE Expires
- displayOrder: 27
- standardAlertId: GFEExpires
- timing: DaysBefore
- message: The GFE expired and the Interest Rate is not locked. Lock the rate or contact the borrower to discuss current rates and pricing.
- daysBefore: 3
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 22. Redisclose GFE (Rate Lock)
- id: 24
- name: Redisclose GFE (Rate Lock)
- displayOrder: 28
- standardAlertId: RediscloseGFERateLocked
- timing: Immediate
- message: The rate is now locked, and the GFE must be re-disclosed to the borrower. Change only the rate-related fields in the GFE.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 23. HUD-1 Tolerance Violated
- id: 25
- name: HUD-1 Tolerance Violated
- displayOrder: 30
- standardAlertId: HUD1ToleranceViolation
- timing: Immediate
- message: HUD tolerance limit is violated. Correct fees or address the tolerance violation at closing or within 30 calendar days after settlement.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 24. Closing Date Violation
- id: 26
- name: Closing Date Violation
- displayOrder: 25
- standardAlertId: ClosingDateViolation
- timing: Immediate
- message: The expected closing date for the loan is prior to the earliest closing date allowed by the regulations.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 25. Redisclose GFE (Changed Circumstance)
- id: 27
- name: Redisclose GFE (Changed Circumstance)
- displayOrder: 29
- standardAlertId: RediscloseGFEChangedCircumstances
- timing: DaysBefore
- message: A circumstance has changed, and you may need to re-disclose the GFE to the borrower. Change only the fields relevant to the changed circumstance.
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 26. Compliance Review
- id: 28
- name: Compliance Review
- displayOrder: 31
- standardAlertId: ComplianceReview
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Compliance Test Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 27. eFolder Update
- id: 30
- name: eFolder Update
- displayOrder: 4
- standardAlertId: eFolderUpdate
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Fixed
- allowUserDefinedTriggerFields: false
- triggerDescription: Send Update Alert check box
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 28. Preliminary Condition Expected
- id: 31
- name: Preliminary Condition Expected
- displayOrder: 8
- standardAlertId: PreliminaryConditionExpected
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Receive
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 29. Underwriting Condition Expected
- id: 32
- name: Underwriting Condition Expected
- displayOrder: 9
- standardAlertId: UnderwritingConditionExpected
- timing: DaysBefore
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Days to Receive
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 30. Rate Cancellation Requested
- id: 33
- name: Rate Cancellation Requested
- displayOrder: 16
- standardAlertId: RateLockCancellationRequested
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Lock Expiration Date (762)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 31. Rate Lock Cancelled
- id: 34
- name: Rate Lock Cancelled
- displayOrder: 17
- standardAlertId: RateLockCancelled
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Lock Expiration Date (762)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 32. Ability-To-Repay Loan Type Not Determined
- id: 35
- name: Ability-To-Repay Loan Type Not Determined
- displayOrder: 35
- standardAlertId: AbilityToRepayLoanTypeNotDetermined
- timing: Immediate
- message: Ability-to-Repay standards have not been documented. Verify that loan is exempt, a qualified mortgage or being made subject to general ability-to-repay standards.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 33. Qualified Mortgage Type Not Determined
- id: 36
- name: Qualified Mortgage Type Not Determined
- displayOrder: 36
- standardAlertId: QualifiedMortgageTypeNotDetermined
- timing: Immediate
- message: A Qualified Mortgage Type has not been determined. Review ATR/QM Eligibility.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 34. QM Safe Harbor Eligibility Not Determined
- id: 37
- name: QM Safe Harbor Eligibility Not Determined
- displayOrder: 37
- standardAlertId: QMSafeHarborEligibilityNotDetermined
- timing: Immediate
- message: Safe harbor for qualified mortgages has not been assessed. Review ATR/QM Eligibility.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 35. Residual Income Assessment Recommended
- id: 38
- name: Residual Income Assessment Recommended
- displayOrder: 38
- standardAlertId: ResidualIncomeAssessmentRecommended
- timing: Immediate
- message: An assessment for residual income is recommended.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 36. General QM DTI Exceeded
- id: 39
- name: General QM DTI Exceeded
- displayOrder: 39
- standardAlertId: GeneralQMDTIExceeded
- timing: Immediate
- message: The DTI Ratio exceeds the limit for General QM. Review the DTI ratio associated with the maximum payment in the first five years.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 37. General QM Loan Feature Violation
- id: 40
- name: General QM Loan Feature Violation
- displayOrder: 40
- standardAlertId: GeneralQMLoanFeatureViolation
- timing: Immediate
- message: Loan repayment features violate the requirements for General QM. Review the ATR/QM eligibility.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 38. Ability-to-Repay Exemption Reason Not Determined
- id: 41
- name: Ability-to-Repay Exemption Reason Not Determined
- displayOrder: 41
- standardAlertId: AbilitytoRepayExemptionReasonNotDetermined
- timing: Immediate
- message: An exemption reason for Ability-to-Repay has not been identified. Review ATR/QM Eligibility.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 39. AUS Data Discrepancy Alert
- id: 42
- name: AUS Data Discrepancy Alert
- displayOrder: 42
- standardAlertId: AUSDataDiscrepancyAlert
- timing: Immediate
- message: The information in the loan file does not match the last set of values used in making an Automated Underwriting Decision. Review values changes and re-run AUS if needed.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 40. Key Pricing Fields
- id: 43
- name: Key Pricing Fields
- displayOrder: 18
- standardAlertId: KeyPricingFieldAlert
- timing: Immediate
- message: The values in the highlighted field(s) below have changed, requiring pricing to be re-evaluated.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: true
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 41. Rate Lock Removed from Correspondent Trade
- id: 44
- name: Rate Lock Removed from Correspondent Trade
- displayOrder: 44
- standardAlertId: RateLockRemovedFromTrade
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Remove from Correspondent Trade
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 42. Loan Estimate Expires
- id: 45
- name: Loan Estimate Expires
- displayOrder: 27
- standardAlertId: LoanEstimatesExpires
- timing: DaysBefore
- message: The Loan Estimate has expired because the Intent to Proceed was not received within 10 business days from the LE Issued Date.
- daysBefore: 3
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 43. Redisclose Loan Estimate (Changed Circumstance)
- id: 46
- name: Redisclose Loan Estimate (Changed Circumstance)
- displayOrder: 29
- standardAlertId: RediscloseLEChangedCircumstances
- message: A circumstance has changed, and you may need to re-disclose the Loan Estimate to the borrower. Change only the fields relevant to the changed circumstance.
- daysBefore: 3
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 44. Redisclose Loan Estimate (Rate Lock)
- id: 47
- name: Redisclose Loan Estimate (Rate Lock)
- displayOrder: 47
- standardAlertId: RediscloseLERateLock
- message: The rate is now locked, and the Loan Estimate must be re-disclosed to the borrower. Change only the rate-related fields in the Loan Estimate for the required fields.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 45. Redisclose Closing Disclosure (Changed Circumstance)
- id: 48
- name: Redisclose Closing Disclosure (Changed Circumstance)
- displayOrder: 48
- standardAlertId: RediscloseCDChangedCircumstances
- timing: DaysBefore
- message: A circumstance has changed, and you may need to re-disclose the Closing Disclosure to the borrower. Change only the fields relevant to the changed circumstance.
- daysBefore: 3
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 46. Redisclose Closing Disclosure (APR, Product, Prepay)
- id: 49
- name: Redisclose Closing Disclosure (APR, Product, Prepay)
- displayOrder: 49
- standardAlertId: RediscloseCDAPR_Product_Prepay
- timing: Immediate
- message: Closing Disclosure must be re-disclosed when a prepayment penalty is added, loan product is changed, or the Current APR differs from the Disclosed APR by more than 0.125%. (0.25% for irregular loans).
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 47. Good Faith Fee Variance Violated
- id: 50
- name: Good Faith Fee Variance Violated
- displayOrder: 50
- standardAlertId: GoodFaithFeeVarianceViolation
- timing: Immediate
- message: Good Faith Fee Variance limit is violated. Correct fees or address the fee variance violation at closing or within 30 calendar days after settlement.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 48. eConsent Not Yet Received
- id: 51
- name: eConsent Not Yet Received
- displayOrder: 27
- standardAlertId: eSignconsentNotYetReceived
- timing: Immediate
- message: Borrowers must consent before disclosures can be sent electronically. Some or all borrowers have not provided consent.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: true
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 49. Fannie Service DU
- id: 52
- name: Fannie Service DU
- displayOrder: 51
- standardAlertId: FannieServiceDu
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Fannie Service DU Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 50. Fannie Service EC
- id: 53
- name: Fannie Service EC
- displayOrder: 52
- standardAlertId: FannieServiceEc
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Fannie Service EC Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 51. Redisclose Closing Disclosure (Rate Lock)
- id: 55
- name: Redisclose Closing Disclosure (Rate Lock)
- displayOrder: 55
- standardAlertId: RediscloseCDRateLock
- timing: Immediate
- message: The rate is now locked, and the Closing Disclosure must be re-disclosed to the borrower. Change only the rate-related fields in the Closing Disclosure.
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 52. Freddie Service LPA
- id: 56
- name: Freddie Service LPA
- displayOrder: 53
- standardAlertId: FreddieServiceLpa
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Freddie Service LPA Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 53. Freddie Service LQA
- id: 57
- name: Freddie Service LQA
- displayOrder: 54
- standardAlertId: FreddieServiceLqa
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Freddie Service LQA Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 54. Withdrawn Loan
- id: 58
- name: Withdrawn Loan
- displayOrder: 58
- standardAlertId: WithdrawnLoan
- timing: Immediate
- message: Loan has been Withdrawn. Existing Locks/Commitments may be cancelled.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 55. MI Service Arch
- id: 59
- name: MI Service Arch
- displayOrder: 59
- standardAlertId: MIServiceArch
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: MI Service Arch Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 56. MI Service Radian
- id: 60
- name: MI Service Radian
- displayOrder: 60
- standardAlertId: MIServiceRadian
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: MI Service Radian Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 57. MI Service MGIC
- id: 61
- name: MI Service MGIC
- displayOrder: 61
- standardAlertId: MIServiceMgic
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: MI Service MGIC Result
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 58. VA Discount Charge Violation
- id: 62
- name: VA Discount Charge Violation
- displayOrder: 62
- standardAlertId: VADiscountChargeViolation
- timing: Immediate
- message: %VARRRWS.X9% Exceeds 2% Max Allowed by VA. Please review VA Rate Reduction Worksheet and adjust origination points as appropriate.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 59. Positive Aggregate Escrow Adjustment
- id: 63
- name: Positive Aggregate Escrow Adjustment
- displayOrder: 63
- standardAlertId: PositiveAggregateEscrowAdjustment
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 60. Credit Limit Required
- id: 64
- name: Credit Limit Required
- displayOrder: 64
- standardAlertId: CreditLimitRequired
- timing: Immediate
- message: Credit Limit required if Account Type = HELOC and Will be Paid Off is false
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 61. Current and Proposed Lien position required if Resubordinated
- id: 65
- name: Current and Proposed Lien position required if Resubordinated
- displayOrder: 65
- standardAlertId: LienPositionRequiredIfResubordinated
- timing: Immediate
- message: Current and Proposed Lien position required if Resubordinated Indicator is True
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 62. Current and Proposed Lien position required if Subject Property
- id: 66
- name: Current and Proposed Lien position required if Subject Property
- displayOrder: 66
- standardAlertId: LienPositionRequiredIfSubjectProperty
- timing: Immediate
- message: Current and Proposed Lien position required if Subject Property is true and will be Paid off is False (regardless of resubordinated)
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 63. LIBOR Index
- id: 68
- name: LIBOR Index
- displayOrder: 68
- standardAlertId: LiborIndex
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- triggerDescription: Loan Index Type (1959) and either Origination Date (745) or Application Date (3142)
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 64. Lock Voided
- id: 69
- name: Lock Voided
- displayOrder: 69
- standardAlertId: LockVoided
- timing: Immediate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: true
- category: Workflow
- supportsCustomMessage: false
- allowToClear: false
- notificationType: Configurable
- allowUserDefinedTriggerFields: false
- triggerDescription: Lock Voided
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 65. General QM Price Limit Exceeded
- id: 70
- name: General QM Price Limit Exceeded
- displayOrder: 70
- standardAlertId: GeneralQMPriceExceeded
- timing: Immediate
- message: The terms of the loan do not meet General QM Standards for a Price-Based General QM loan.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 66. Redisclose Closing Disclosure (NBO Updated)
- id: 71
- name: Redisclose Closing Disclosure (NBO Updated)
- displayOrder: 49
- standardAlertId: RediscloseCdAfterVestingNboAdded
- timing: Immediate
- message: A non-borrowing owner has been added after the CD was issued. Please redisclose the CD, allowing at least 3 business days after presumed receipt for closing.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 67. Three-Day Disclosure Requirements
- id: 72
- name: Three-Day Disclosure Requirements
- displayOrder: 72
- standardAlertId: ThreeDayDisclosureRequirements
- message: The required fields needed before the three-day disclosure is confirmed as ready.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 68. At App Disclosure Requirements
- id: 73
- name: At App Disclosure Requirements
- displayOrder: 73
- standardAlertId: AtAppDisclosureRequirements
- message: The required fields needed before At App disclosure ready field is confirmed as ready.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Regulation
- supportsCustomMessage: true
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 69. Streamline Initial Disclosure Alert
- id: 1000
- name: Streamline Initial Disclosure Alert
- displayOrder: -1
- timing: DaysBefore
- message: Send Initial Disclosures - Streamline Loan
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 6f66efea-9642-4049-ac23-6b73362bdcfc
- dateAdjustment: 3
- adjustmentDayType: Business
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 70. ~TRID: Initial GFE/TIL Not Received
- id: 1001
- name: ~TRID: Initial GFE/TIL Not Received
- displayOrder: -1
- timing: Immediate
- message: Initial GFE/TIL Not Received
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 622d28c2-0ab8-4749-87a4-7cf914ece73c
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 71. ECOA Notification Required
- id: 1002
- name: ECOA Notification Required
- displayOrder: -1
- timing: DaysBefore
- message: ECOA Notification must be provided to Borrower.  If you are unsure how to complete this task, contact your Manager and/or Operations Immediately!
- daysBefore: 10
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: cdb49d38-cd2f-4662-bb41-2128ed13b441
- dateAdjustment: 30
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 72. Estimated Closing Date Has Passed!
- id: 1003
- name: Estimated Closing Date Has Passed!
- displayOrder: -1
- timing: DaysBefore
- message: Your estimated closing date (field 763) has passed. You must reset it before you can make any further changes to this file.
- daysBefore: 5
- alertEnabled: false
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 6a854df5-d466-49a1-8407-4c4c99ea49fb
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 73. Invoices exceed Amount Collected
- id: 1004
- name: Invoices exceed Amount Collected
- displayOrder: -1
- timing: Immediate
- message: Vendor Invoices Exceed the Amount Collected from the Borrower. Details are on the AFG Trust Account form.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 95c73e5d-56f5-474e-92d1-74546385b4ed
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 74. Key Pricing Fields Have Changed!
- id: 1005
- name: Key Pricing Fields Have Changed!
- displayOrder: -1
- timing: Immediate
- message: Certain Loan Values affecting Pricing have changed. The Lock Desk has been notified and will clear the alert.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 463a9538-8404-4fed-a0ee-5d5b2d5b4c9a
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 75. Lock Disclosures are Due Today
- id: 1006
- name: Lock Disclosures are Due Today
- displayOrder: -1
- timing: DaysBefore
- message: Lock Disclosures are due today. Has yours been sent yet?
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 418e4a38-5622-45f0-9546-67b711f03036
- dateAdjustment: 3
- adjustmentDayType: Business
- allowToClear: true
- conditionXml: 
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 76. Redisclose GFE (Rate Lock) with new Investor
- id: 1007
- name: Redisclose GFE (Rate Lock) with new Investor
- displayOrder: -1
- timing: DaysBefore
- message: The requested rate is now locked or moved to a new investor. The GFE must be re-disclosed to the borrower. Request Rate Lock Disclosures now on the AFG Compliance Screen
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 67d8f3d8-ed6d-43d7-8bfc-705a799a8187
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 77. Send Initial Disclosures2
- id: 1008
- name: Send Initial Disclosures2
- displayOrder: -1
- timing: DaysBefore
- message: Initial Disclosures have been Triggered. The Setup Department requires at least (1) business day to send disclosures. Use the AFG Compliance Center for and NOTIIFY THEM NOW!
- daysBefore: 5
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 97ee09e8-f2ea-48f2-9727-cdcf6d42d576
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- conditionXml: 
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 78. Sign off on builder contract
- id: 1009
- name: Sign off on builder contract
- displayOrder: -1
- timing: Immediate
- message: Sign off on builder contract
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 6da9dd29-d503-432b-9383-24406fa5495a
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 79. Sign Off on cost breakdown
- id: 1010
- name: Sign Off on cost breakdown
- displayOrder: -1
- timing: Immediate
- message: Sign Off on cost breakdown
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 4a398388-219f-4db5-9884-ff006f66c8a7
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 80. Sign off on itemization
- id: 1011
- name: Sign off on itemization
- displayOrder: -1
- timing: Immediate
- message: Sign off on itemization
- daysBefore: -1
- alertEnabled: false
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 311fdf25-5457-43a3-95b5-dbe22980ee60
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 81. UW Approval Expires
- id: 1012
- name: UW Approval Expires
- displayOrder: -1
- timing: DaysBefore
- message: The Underwriting Approval on this loan will expire shortly!
- daysBefore: 5
- alertEnabled: false
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 5a6ace5e-3a67-4835-adc7-efccdd657ada
- dateAdjustment: -10
- adjustmentDayType: Postal
- allowToClear: true
- conditionXml: 
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 82. 25 Days Since Credit Pull
- id: 1013
- name: 25 Days Since Credit Pull
- displayOrder: -1
- timing: DaysBefore
- message: Regulation B is fast approaching, 25 days have passed since credit pull and the loan has not had a credit decision made.  Request either cancellation and/or credit approval today!
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 192d699d-5498-4bef-b71e-454ddb3eba2a
- dateAdjustment: 25
- adjustmentDayType: Calendar
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 83. Complete Re-VVOE
- id: 1014
- name: Complete Re-VVOE
- displayOrder: -1
- timing: DaysBefore
- message: Complete a re-verification of employment within 10 days of closing.  Confirm that borrower is still employed, start date and position previously verified and upload the completed form into the efolder.
- daysBefore: 1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 4bb012aa-6be9-440c-8c0f-2a5c2cb26649
- dateAdjustment: -10
- adjustmentDayType: Business
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 84. Past Due Appraisal
- id: 1015
- name: Past Due Appraisal
- displayOrder: -1
- timing: DaysBefore
- message: Follow up on ordered items that have not been returned and/or imaged into the efolder.  If the item has been received, upload it into the efolder.
- daysBefore: 3
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 7f56067c-3f71-4c19-bae5-41a36af7f1ac
- dateAdjustment: 10
- adjustmentDayType: Calendar
- allowToClear: false
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 85. KM PA2 UW Decision Needed - UW
- id: 1016
- name: KM PA2 UW Decision Needed - UW
- displayOrder: -1
- timing: Immediate
- message: Loan Status is PRE APPROVAL 2.  PA2 UW Review has been completed.  Enter underwriting conditions on the eFolder tab, and enter either PA2 Suspended (CX.PUR.TBDSUSPEND) or PA2 Expires (CX.PUR.TBDEXPIRES) if approved.
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 02208b55-4379-4acf-9928-cb64c05458dd
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 86. Check MI
- id: 1017
- name: Check MI
- displayOrder: -1
- timing: Immediate
- message: A Key factor that may influence MI has been modified.  Please validate that the MI is accurate
- daysBefore: -1
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: daa10cab-265f-48d8-a52c-df1889355bcc
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 87. 10 Days CTC
- id: 1018
- name: 10 Days CTC
- displayOrder: -1
- timing: DaysBefore
- message: 10 Days CTC
- daysBefore: 10
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 5d95eae2-8bca-42fd-ad84-f72961f3da59
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- conditionXml: 
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

### 88. Test Alert
- id: 1019
- name: Test Alert
- displayOrder: -1
- timing: DaysBefore
- message: Test
- daysBefore: 0
- alertEnabled: true
- notificationEnabled: false
- category: Custom
- supportsCustomMessage: true
- guid: 8d537498-cb5c-4c4a-b365-59dc724cda90
- dateAdjustment: 0
- adjustmentDayType: Calendar
- allowToClear: true
- conditionXml: 
- notificationType: None
- allowUserDefinedTriggerFields: false
- useApplicationDate: false
- doNotShowDeclinedConsent: false
- applyFixedAprToleranceToArms: false
- suppressNegativeAprAlert: false

