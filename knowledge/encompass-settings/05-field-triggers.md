# Field Triggers (396)

> **Source**: Bayshore reference data (imported into BE11146040) — BRA extraction 2026-02-21

Field triggers automate field value changes based on conditions.

- **Active**: 396
- **Inactive**: 0

### 1. Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode

### 2. UPDATE: Disbursement Date for Non Refis - PSO - 12/11/2013
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=748, action=Copy

### 3. UPDATE: Disbursement for O/O Refis - PSO - 12/11/2013
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.RESCISSION, action=AdvancedCode
  - Event: field=CX.DISBURSEMENT, action=AdvancedCode
- Advanced Code:
```
([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance") and ([1811] = "PrimaryResidence" or NOT ([1811] = "Investor" OR [1811] = "SecondHome"))
```

### 4. VA Residual Region - PSO - 12/11/2013
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.VA.FAMILY.SIZE, action=AdvancedCode
  - Event: field=14, action=AdvancedCode
  - Event: field=1172, action=AdvancedCode

### 5. UPDATE: Additional Disclosure Information - PSO - 12/11/2013
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=608, action=AdvancedCode
  - Event: field=1811, action=AdvancedCode
- Advanced Code:
```
[4002].Contains("Test")
```

### 6. Copy GFE Filing Fee to REGZ Filing Fee - PSO - 12/11/2013
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=390, action=AdvancedCode

### 7. Copy Current Data to UW Comparison - PSO - 12/11/2013
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=AdvancedCode

### 8. USDA FEE Lock - PSO - 12/11/2013
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1172, action=AdvancedCode

### 9. VA Maintenance Calculation - PSO - 12/11/2013
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=VASUMM.X7, action=AdvancedCode
  - Event: field=1172, action=AdvancedCode

### 10. ARCHIVE*: Intrm Serv First Pymnt Summary 1
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=CX.SERVICE.M230.1, action=AdvancedCode
  - Event: field=CX.SERVICE.M232.1, action=AdvancedCode
  - Event: field=CX.SERVICE.X33.1, action=AdvancedCode
  - Event: field=CX.SERVICE.X35.1, action=AdvancedCode
  - Event: field=CX.SERVICE.X34.1, action=AdvancedCode
- Advanced Code:
```
[#SERVICE.X30] = 1
```

### 11. ARCHIVE*: Intrm Serv First Pymnt Summary 2
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=CX.SERVICE.M232.2, action=AdvancedCode
  - Event: field=CX.SERVICE.X33.2, action=AdvancedCode
  - Event: field=CX.SERVICE.X35.2, action=AdvancedCode
  - Event: field=CX.SERVICE.X34.2, action=AdvancedCode
  - Event: field=CX.SERVICE.X32.2, action=AdvancedCode
- Advanced Code:
```
[#SERVICE.X30] = 2
```

### 12. ARCHIVE*: Intrm Serv First Pymnt Summary 3
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=CX.SERVICE.X33.3, action=AdvancedCode
  - Event: field=CX.SERVICE.X35.3, action=AdvancedCode
  - Event: field=CX.SERVICE.X32.3, action=AdvancedCode
  - Event: field=CX.SERVICE.M1405.3, action=AdvancedCode
  - Event: field=CX.SERVICE.X14.3, action=AdvancedCode
- Advanced Code:
```
[#SERVICE.X30] = 3
```

### 13. ARCHIVE*: Intrm Serv First Pymnt Summary 4
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=CX.SERVICE.X33.4, action=AdvancedCode
  - Event: field=CX.SERVICE.X35.4, action=AdvancedCode
  - Event: field=CX.SERVICE.X32.4, action=AdvancedCode
  - Event: field=CX.SERVICE.M1405.4, action=AdvancedCode
  - Event: field=CX.SERVICE.X14.4, action=AdvancedCode
- Advanced Code:
```
[#SERVICE.X30] = 4
```

### 14. ARCHIVE: 761 1st Lock Date (11/26/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=761, action=Assign
- Advanced Code:
```
IsEmpty([CX.761.ARCHIVE.01])
```

### 15. ARCHIVE: 761 2nd Lock Date (11/26/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=761, action=Assign
- Advanced Code:
```
Not IsEmpty([@761]) and Not IsEmpty([CX.761.ARCHIVE.01]) and [@761] > [@CX.761.ARCHIVE.01] and IsEmpty([CX.761.ARCHIVE.02])
```

### 16. ARCHIVE: 761 3rd Lock Date (11/26/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=761, action=Assign
- Advanced Code:
```
Not IsEmpty([@761]) and Not IsEmpty([CX.761.ARCHIVE.01]) and [@761] > [@CX.761.ARCHIVE.02] and Not IsEmpty([CX.761.ARCHIVE.02]) and IsEmpty([CX.761.ARCHIVE.03])
```

### 17. ARCHIVE: Channel choice to CX.2626 for Comparison (08/26/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2626, action=Assign

### 18. ARCHIVE: CoC date to GFE History (4/24/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3169, action=AdvancedCode

### 19. ARCHIVE: GFE COC Reason to CX.GFEHISTORY.COC.REASON.x (8/18/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3169, action=AdvancedCode
- Advanced Code:
```
IsEmpty ([3169])
```

### 20. ARCHIVE: GFE Initial 3148 to CX.GFEHISTORY.GFEDATE.01 (8/18/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3148, action=AdvancedCode

### 21. ARCHIVE: GFE Redisclosure 3150 to CX.GFEHISTORY.GFEDATE.02+
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3150, action=AdvancedCode

### 22. ARCHIVE: L770 date to CX.L770 (08/12/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=L770, action=Assign
- Advanced Code:
```
Not IsEmpty([L770])
```

### 23. ARCHIVE: MIP/PMI Funding Amount 1826 (8/28/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1826, action=AdvancedCode

### 24. ARCHIVE: TIL Initial 3152 to CX.GFEHISTORY.TILDATE.01 (8/18/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3152, action=AdvancedCode

### 25. ARCHIVE: TIL Redisclosure 3154 to CX.GFEHISTORY.TILDATE.02+
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3154, action=AdvancedCode

### 26. ARCHIVE: 1401 Most Recent
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1401, action=Copy

### 27. ARCHIVE: 432 1st Lock Date 012716
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=432, action=Assign
- Advanced Code:
```
IsEmpty([CX.432.ARCHIVE.01])
```

### 28. ARCHIVE: 762 1st Lock Date 012716
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=762, action=Assign
- Advanced Code:
```
IsEmpty([CX.762.ARCHIVE.01])
```

### 29. ARCHIVE: Lock Date (761)
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=761, action=AdvancedCode

### 30. ARCHIVE: Lock Fields 761,762,432,2 012816
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=762, action=AdvancedCode
  - Event: field=432, action=AdvancedCode
  - Event: field=761, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=2, action=AdvancedCode

### 31. COPY: 1003 Data to HMDA fields
- Status: Active
- Events: 13
- Role ID: -1
  - Event: field=1041, action=Assign
  - Event: field=1041, action=Assign
  - Event: field=1041, action=Assign
  - Event: field=1041, action=Assign
  - Event: field=1041, action=Assign

### 32. COPY: Appraised Value to Estimated Value (11/14/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=356, action=Copy

### 33. COPY: CO NLMS to CO NLMS (3237 to 3244) 1/2/13
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3237, action=Copy

### 34. COPY: Compl Cntr Denial Reasons to HMDA Form (8/29/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.HMDALOCKDENIALREASONS, action=Assign

### 35. COPY: CX1603 to 1603 Aggregate Subject Prop Addr (u7/3/14
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=11, action=Assign
  - Event: field=15, action=Assign
  - Event: field=14, action=Assign
  - Event: field=12, action=Assign
  - Event: field=CX.1603, action=Copy

### 36. COPY: ECOA AlertCount to CX.CCECOA.ALERT.COUNT (9/25/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.CCECOA.ALERT.COUNT, action=Assign

### 37. COPY: ECOA Sent [CUST12FV TO CX.CCECOA.SENT] (9/25/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CUST12FV, action=Assign
  - Event: field=CX.CCECOA.SENT, action=Copy

### 38. COPY: FHB from [403] ldecs to [934] FHLMC
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=403, action=Copy

### 39. COPY: GFE Application date to 1003 Sig Date (10/11/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3142, action=Assign
  - Event: field=3261, action=Assign

### 40. COPY: GFE Application Date to 745 and TIL App Date (8/1/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3142, action=Copy
  - Event: field=3142, action=Copy

### 41. COPY: GFE Disc Date to Case # Assigned Date (6/6/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=Copy
- Advanced Code:
```
IsEmpty([3042]) And [1172] = "FHA"
```

### 42. COPY: If Subject is CO copy lock dates to CO Lock Form (11/1/11
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=DISCLOSURE.X871, action=Assign
- Advanced Code:
```
[14] = "CO"
```

### 43. COPY: Info Obtained(Denial.x12)to Denial.x76)& Fact Act(11/29/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=DENIAL.X12, action=Assign
  - Event: field=DENIAL.X12, action=Assign

### 44. COPY: Investor Registration to Investor Loan Number (10/10/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2826, action=Assign

### 45. COPY: L770 to L76 & 748 (7/27/15
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=L770, action=Copy

### 46. COPY: LO Comp from 980 to LOANDOC.LOCOMP1 at LOAN.OPEN (8/12/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATETIME.FILE.OPENED, action=Assign
- Advanced Code:
```
IsEmpty([CX.LOANDOC.LOCOMP1])
```

### 47. COPY: Loan Amt at GFE Disclosure Sent Date change (7/16/14
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3148, action=Assign
  - Event: field=3150, action=Assign

### 48. COPY: Loan Data to Secondary Comparison After Lock
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=AdvancedCode

### 49. COPY: Locked Investor [2278] to [CX.2278] 04/29/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=761, action=Assign
- Advanced Code:
```
IsEmpty([CX.2278])
```

### 50. COPY: Match Prepayment Penalty (GFE[675]) & (CADRE[RE88395.X322]
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=675, action=Copy
  - Event: field=RE88395.X322, action=Copy

### 51. COPY: MS.FUN to Disbursement Date [2553] (8/7/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=MS.FUN, action=Assign

### 52. COPY: ORGID to CX.ORGID if Empty (8/17/15
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=ORGID, action=Copy
- Advanced Code:
```
[CX.ORGID] = ""
```

### 53. COPY: Stated Rate to Qual Rate on Fixed (3  to 1014) (5/15/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3, action=Copy
- Advanced Code:
```
[608] = "Fixed"
```

### 54. COPY: Synch Loan Program Name 4/29/13
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2861, action=AdvancedCode

### 55. COPY: UW Credit Score from VASUMM.X23 to CX.VASUMM.X23 (3/13/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=VASUMM.X23, action=Assign

### 56. COPY: UW Denied Date [2987]  to Denial [DENIAL.X69] (10/27/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2987, action=Copy
  - Event: field=CX.UWDECISION, action=Assign

### 57. COPY:* Est Closing [763] to Disb Date [L244] for eDisc (9/28/11
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=763, action=Copy
- Advanced Code:
```
IsEmpty([L244]) and [@MS.START] >= #9/29/2011#
```

### 58. EMAIL: *LO Test of Encompass Email Settings
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.TEST.EMAIL, action=Email

### 59. EMAIL: ALERT Send initial disclosures
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3142, action=Email

### 60. EMAIL: Any change to MI Calc Fields [1199][1201][1205] (10/11/13
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=1201, action=Email
  - Event: field=1205, action=Email
  - Event: field=1199, action=Email

### 61. EMAIL: APPR DESK Initial/Review/Final Requests (11/16/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.APPR.IAC.FNL.ORDERED, action=Email
  - Event: field=CX.APPR.IAC.REV.ORDERED, action=Email
  - Event: field=CX.APPR.IAC.APP.ORDERED, action=Email

### 62. EMAIL: APPR DESK Initial/Review/Final Sent (4/10/12
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.APPR.IAC.FNL.SENT, action=Email
  - Event: field=CX.APPR.IAC.APP.SENT, action=Email
  - Event: field=CX.APPR.IAC.REV.SENT, action=Email

### 63. EMAIL: Appraised Value Change Trigger
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=356, action=AdvancedCode
  - Event: field=CUST40FV, action=Email

### 64. EMAIL: Appraised Value Changed While In Underwriting (11/07/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=356, action=Email
- Advanced Code:
```
[MS.STATUS] = "Submitted" or [MS.STATUS] = "Resubmittal"
```

### 65. EMAIL: Borrower Withdrew Application (8/18/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.CCWITHDRAWNON, action=Email

### 66. EMAIL: Closing - Docs Reasons or Approvals (6/1/1
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.LOANDOC.DOCREASON.X.NOW, action=Email
  - Event: field=CX.CDOF.CLOSEDOCAPR.NOW, action=Email
  - Event: field=CX.LOANDOC.DOCREASON.FLL.NOW, action=Email

### 67. EMAIL: Closing - DT&F Answers and Reasons (6/1/12
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=CX.CDOF.CLOSEDATEDENIED.NOW, action=Email
  - Event: field=CX.LOANDOC.FIGREASON.FLL.NOW, action=Email
  - Event: field=CX.LOANDOC.FIGREASON.X.NOW, action=Email
  - Event: field=CX.CDOF.CLOSEDATEAPR.NOW, action=Email

### 68. EMAIL: Closing - Figures Sent to Title
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.CDOF.FIGSENT.ON, action=Email

### 69. EMAIL: Closing - Initial Request for Closing Date/Time (5/4/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.CDOF.REQUESTED.ON, action=Email
- Advanced Code:
```
[CX.LOANDOC010] <> "Y" and ([CX.CDOF.DATETIME.LOCK] = "NA" OR [CX.CDOF.DATETIME.LOCK] = "YES")
```

### 70. EMAIL: Closing - Need Soft Credit Report on [31]
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 71. EMAIL: Closing - Notice that doc date [L770] was cleared 8/12/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=L770, action=Email
- Advanced Code:
```
[CX.CURRENTUSER.PERSONA].Contains("Setup") and IsEmpty([MS.FUN]) and Not IsEmpty([3142])
```

### 72. EMAIL: Closing - Notify docs have been sent by Comp MS Doc Prep
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 73. EMAIL: Closing - Request & Approval Early Closing Date (5/7/2012
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.CDOF.DATETIME.LOCK, action=Email
  - Event: field=CX.LOANDOC.EARLY.REQUESTED, action=Email

### 74. EMAIL: Closing - Request to Create Closing Docs
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=LoanTeamMember.Name.Closer:, action=Email

### 75. EMAIL: Compliance Review Notification to ME 11/14/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=COMPLIANCEREVIEW.ALERTS, action=Email

### 76. EMAIL: Compliance Review Violation (11/13/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=COMPLIANCEREVIEW.ALERTS, action=Email

### 77. EMAIL: Fields Change after sent to Closing - Loan Amount
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 4
- Role ID: 6
  - Event: field=1109, action=Email
- Advanced Code:
```
4
```

### 78. EMAIL: Fields Change after sent to Closing - Program
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 4
- Role ID: 6
  - Event: field=1401, action=Email
- Advanced Code:
```
4
```

### 79. EMAIL: Fields Change after sent to Closing - Rate
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 4
- Role ID: 6
  - Event: field=3, action=Email
- Advanced Code:
```
4
```

### 80. EMAIL: FUNDING Loan has been funded
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 81. EMAIL: FUNDING Notify LO that loan was purchased (8/11/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 82. EMAIL: FUNDING Request Trigger
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 83. EMAIL: HPML Alert - Further Action Necessary
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3135, action=Email

### 84. EMAIL: LOCKDESK Approval
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 85. EMAIL: LOCKDESK Denial
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 86. EMAIL: LOCKDESK Notify of Change to Specific Fields (10/23/2013
- Status: Active
- Events: 13
- Condition: `9`
- Role ID: -1
  - Event: field=353, action=Email
  - Event: field=11, action=Email
  - Event: field=2, action=Email
  - Event: field=3, action=Email
  - Event: field=1553, action=Email
- Advanced Code:
```
[2400] = "Y" and IsEmpty([MS.FUN]) and NOT ([1393] = "Loan Originated" OR [1393] = "Application approved but not accepted" OR [1393] = "Application denied" OR [1393] = "Application withdrawn" OR [1393] = "File Closed for incompleteness" OR [1393] = "Loan purchased by your institution" OR [1393] = "Preapproval request denied by financial institution" OR [1393] = "Preapproval request approved but not accepted")
```

### 87. EMAIL: LOCKDESK Notify when Locked and Adversed
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1393, action=Email
- Advanced Code:
```
[2400] = "Y" 
```

### 88. EMAIL: LOCKDESK Request
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 89. EMAIL: PR Conditions to LO 020916MT
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.PRWK.EMAILCONDS.TRIGGER, action=Email

### 90. EMAIL: PR Notice of Sent to Processing
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 91. EMAIL: PR Outstanding Required Items to LO (7/11/12
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.REQITEMS.ONHOLD, action=Email
  - Event: field=CX.REQITEMS.NOTONHOLD, action=Email
- Advanced Code:
```
[CX.REQITEMS.LIST] <> ""
```

### 92. EMAIL: PR Send to LO - Required prior to UW (5/3/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.REQITEMS.ON, action=Email
- Advanced Code:
```
NOT IsEmpty ([CX.REQITEMS.LIST]) AND NOT IsEmpty ([CX.REQITEMS.ONHOLD])
```

### 93. EMAIL: PR Send to LO - Returned to Sender 5/3/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.REQITEMS.ON, action=Email
- Advanced Code:
```
NOT IsEmpty ([CX.REQITEMS.LIST]) AND NOT IsEmpty ([CX.REQITEMS.OUTSTANDING])
```

### 94. EMAIL: SETUP ADVERSE Denial Requests and Approval (8/18/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.DENIALADDTLREQONNOW, action=Email
  - Event: field=CX.HMDAREQONNOW, action=Email
  - Event: field=CX.DENIALAPPRVDONNOW, action=Email

### 95. EMAIL: SETUP CoC Requests and Approval (8/18/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.CCCHGCIRCUMSTANCEONNOW, action=Email
  - Event: field=CX.CCCHGCIRCAPPRVDONNOW, action=Email
  - Event: field=CX.CCCHGCIRCREQONNOW, action=Email

### 96. EMAIL: SETUP eDISCL Request, Apprvl, Reasons  (8/15/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.DISCLREASONREQONNOW, action=Email
  - Event: field=CX.DISCLREQONNOW, action=Email
  - Event: field=CX.DISCLREQAPRVDONNOW, action=Email

### 97. EMAIL: SETUP LOCK Disclosure Request/Confirm (9/22/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.RATELOCKDISCREQONNOW, action=Email
  - Event: field=CX.RATELOCKDISCADDINFOREQNOW, action=Email
  - Event: field=CX.RATELOCKDISCAPPRVDONNOW, action=Email

### 98. EMAIL: SETUP NOI Requests and Approval Notifications (8/15/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.NOIADDTLREQON, action=Email
  - Event: field=CX.NOIAPPROVEDON, action=Email
  - Event: field=CX.NOIREQUESTEDON, action=Email

### 99. EMAIL: SETUP Program Change Trigger
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 3
- Role ID: 5
  - Event: field=1401, action=Email
- Advanced Code:
```
3
```

### 100. EMAIL: SETUP to Print Denial Letter (10/26/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.DENIAL2NDAPPRVD, action=Email
  - Event: field=CX.ECOA.REVD.ALERT, action=Email

### 101. EMAIL: UW 2nd Review on Adverse Required (11/1/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.DENIAL2NDREQ, action=Email

### 102. EMAIL: UW Notice of (RE) Submission to UW (4/12/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=?, action=Email
  - Event: field=?, action=Email

### 103. EMAIL: UW Notice of Approval, Fullfilled, Cleared (9/21/2011
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.UWC.DATE.UPDT, action=Email
  - Event: field=CX.UWC.DATE.APPR, action=Email

### 104. EMAIL: UW Notice of Cond, Final Appr & CTC Alerts (6/5/15
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=Log.MS.Status.Cond. Approval, action=Email
  - Event: field=2305, action=Email
  - Event: field=Log.MS.Status.Approval, action=Email

### 105. EMAIL: UW Notice of Susp, Denial, Countered (9/21/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2303, action=Email
  - Event: field=2987, action=Email

### 106. EMAIL: UW Notice to Set Underwriter (10/17/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=LoanTeamMember.Name.Underwriter, action=Email

### 107. EMAIL: UW Notifiy of UW Assignment
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=LoanTeamMember.Name.Underwriter, action=Email

### 108. EMAIL: UW Notify LO/LA/LP that Inc fields are locked (11/8/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.UWC.LOCK.INC, action=Email

### 109. EMAIL: UW Resubmitted after Final Approval
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.BKRSTATUS030CHECK, action=Email

### 110. EMAIL:*UW Notice of MS Rollbacks (6/23/15
- Status: Active
- Events: 8
- Role ID: -1
  - Event: field=CX.BKRSTATUS000.CHECK, action=Email
  - Event: field=CX.BKRSTATUS000DATE, action=Email
  - Event: field=CX.BKRSTATUS010.CHECK, action=Email
  - Event: field=CX.BKRSTATUS010DATE, action=Email
  - Event: field=CX.BKRSTATUS020.CHECK, action=Email

### 111. UPDATE*: Change of Circumstance History (1/17/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3168, action=AdvancedCode

### 112. UPDATE*: MIP Paid in Cash [1760] to HUD [337] 9/20/13
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1760, action=AdvancedCode

### 113. UPDATE*: Set FHA Branch ID by ORGID (8/8/11)
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1172, action=AdvancedCode

### 114. UPDATE*: Set MMI/PMI on RegZ based on Loan Type (9/30/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=232, action=AdvancedCode
  - Event: field=1172, action=AdvancedCode
  - Event: field=1760, action=AdvancedCode

### 115. UPDATE: APR settings on the 2010 Itemization (7/17/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=NEWHUD.X1299, action=Assign

### 116. UPDATE: Check the FACT Act boxes after Credit Pull (6/13/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=VASUMM.X23, action=Assign
  - Event: field=300, action=Assign

### 117. UPDATE: Check the FACT Act boxes at disclosure alert (6/13/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3142, action=AdvancedCode

### 118. UPDATE: Clear Est Closing [763] on TBD & blank [11 ](9/3/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=763, action=AdvancedCode

### 119. UPDATE: Clear MERS when Investor is ING Bank (12/29/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1881, action=Assign

### 120. UPDATE: Clear Midpoint Cancellation field (1753) on FHA loans
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1172, action=Assign
  - Event: field=1753, action=Assign

### 121. UPDATE: CO State Tax
- Status: Active
- Events: 1
- Condition: `1`
- Role ID: -1
  - Event: field=14, action=Assign
- Advanced Code:
```
2
```

### 122. UPDATE: Co-Borrower Fields when CB = True
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=68, action=Assign
- Advanced Code:
```
[69] <> ""
```

### 123. UPDATE: Date of Last Disclosure
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3154, action=Assign
  - Event: field=3154, action=Assign

### 124. UPDATE: Discount is APR when Manage Details is Unchecked 7/11/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=NEWHUD.X1139, action=Assign

### 125. UPDATE: HMDA-Set 1397 to Not Orig when 1393 is Blank or Not Orig
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1393, action=Assign

### 126. UPDATE: If type [1172] = FHA/VA set Fee % [1107] to worst case
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=1172, action=Assign
  - Event: field=1172, action=Assign
  - Event: field=1172, action=Assign

### 127. UPDATE: Loan Status [1393] to Originate when Funded (U-7/27/15
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=MS.FUN, action=Assign

### 128. UPDATE: Set MortgageTech on Correspondent Channels (8/3/11)
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2626, action=Assign
  - Event: field=2626, action=Assign

### 129. UPDATE: NEWHUD.X1305 to "Y" on VA and USDA (02/27/14
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=NEWHUD.X1305, action=Assign
  - Event: field=2860, action=Assign
  - Event: field=2861, action=Assign
  - Event: field=2862, action=Assign
  - Event: field=2865, action=Assign
- Advanced Code:
```
([1172] = "VA" OR [1172] = "FarmersHomeAdministration")
```

### 130. UPDATE: No lock exp date w/o lock date
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=762, action=AdvancedCode

### 131. UPDATE: Per Diem Days by Loan Type (7/8/11)
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1172, action=Assign
  - Event: field=1172, action=Assign

### 132. UPDATE: Reason for Current Disclosure
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3152, action=Assign
  - Event: field=3154, action=Assign

### 133. UPDATE: Recalculate Closing Costs when Payoff Changes (1/31/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1092, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode

### 134. UPDATE: Remove MI cutoff % on 2nd and inv homes (1/9/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1811, action=Assign

### 135. UPDATE: Remove Purchase Price on Refy (4/10/15
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=19, action=AdvancedCode

### 136. UPDATE: Reset APR on all USDA loans to on (2-6-14
- Status: Active
- Events: 2
- Condition: `2`
- Role ID: -1
  - Event: field=NEWHUD.X1305, action=Assign
  - Event: field=1172, action=Assign
- Advanced Code:
```
5
```

### 137. UPDATE: Set 664 (Required Deposit on Reg-Z) (6-30-14
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=664, action=Assign
  - Event: field=CX.CURRENTUSER.NAME, action=Assign

### 138. UPDATE: Set APR & Channel for Broker Fees (4/13/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=389, action=AdvancedCode
  - Event: field=1620, action=AdvancedCode

### 139. UPDATE: Set Assumption based on Loan Type (9/30/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1172, action=Assign
  - Event: field=1172, action=Assign

### 140. UPDATE: Set Corp Processor Fee $495 To Branch Loans (01/20/15
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=362, action=Assign
- Advanced Code:
```
[ORGID] <> "1001" and [1393] = "Active Loan" 
```

### 141. UPDATE: Set CX.REQITEMS.EVER
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.REQITEMS.LIST, action=Assign

### 142. UPDATE: Set Date and Time Available on GFE (11/22/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2865, action=Assign

### 143. UPDATE: Set Giving Interest In based on loan purpose (9/29/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=19, action=Assign
  - Event: field=19, action=Assign

### 144. UPDATE: Set loan as HMDA reportable [HMDA.X24] (1/26/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=Assign
- Advanced Code:
```
[2626] = "Correspondent"
```

### 145. UPDATE: Set Loan Number to Lender/Inv based on Channel (10/2/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2626, action=Assign

### 146. UPDATE: Set LS.COPY.# to blank on Loan Open
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.DATETIME.FILE.OPENED, action=Assign

### 147. UPDATE: Set NEWHUD.X3 To 15 When Unlocked (9/28/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2400, action=Assign
  - Event: field=2400, action=Assign

### 148. UPDATE: Set NEWHUD.X719 to NA When Unlocked (9/28/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2400, action=Assign
  - Event: field=2400, action=Assign

### 149. UPDATE: Set PropType(HMDA.X11) by Units(16) (10/26/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=16, action=Assign
  - Event: field=16, action=Assign

### 150. UPDATE: Set Transcript Years to 2014, 2013, 2012 (3-17-14
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=IR0202, action=Assign
  - Event: field=IR0302, action=Assign
  - Event: field=IR0102, action=Assign

### 151. UPDATE: Set txs & ins to be Escrowed to Y or N (9/28/11
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=1387, action=Assign
  - Event: field=1387, action=Assign
  - Event: field=1386, action=Assign
  - Event: field=1386, action=Assign

### 152. UPDATE: Set UFMIP Remittance Due Date 10 Days After 748 (2/9/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=748, action=Assign

### 153. UPDATE: Uncheck field 664 on all loans 1/14/13
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=664, action=Assign
  - Event: field=3142, action=Assign
  - Event: field=664, action=Assign

### 154. UPDATE: Underwriting CREDIT SCORE [VASUMM.X23] 1-6 MID FICO
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode

### 155. UPDATE: Change Name in 315 to MortgageTech
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.DATETIME.FILE.OPENED, action=Assign

### 156. +TRID: Copy 1003 fields info to LE (updated)
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=14, action=AdvancedCode
  - Event: field=2306, action=AdvancedCode
  - Event: field=3237, action=AdvancedCode
  - Event: field=317, action=AdvancedCode
  - Event: field=4002, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 157. +TRID: Copy File Contacts to CD5
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CD1.X1, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 158. +TRID: Copy Loan# (364) to Loan ID (4063) @Loan.Open (ex broker)
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 159. +TRID: Late Charge-remove the "0" from late fees
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=14, action=AdvancedCode
  - Event: field=674, action=AdvancedCode
  - Event: field=672, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 160. +TRID: LE and CD workarounds from WS
- Status: Active
- Events: 9
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=AdvancedCode
  - Event: field=NEWHUD2.X3356, action=AdvancedCode
  - Event: field=19, action=Assign
  - Event: field=19, action=Assign
  - Event: field=1172, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 161. +TRID: Set [1550] (escrow) by LTV [353] 80%+-
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=353, action=Assign
  - Event: field=353, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD" and [1172] = "Conventional" 
```

### 162. +TRID: Set CD5.X67 & X19 Sig Type to "By Name" at 3142
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=Assign
  - Event: field=3142, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 163. +TRID: Set CD5.X67 & X19 Sig Type to "By Name" at 3969
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3969, action=Assign

### 164. +TRID: Set Escrow Tables in CONV loans on [1550]
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=1550, action=Assign
  - Event: field=1550, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD" and [1172] = "Conventional" and [#353] < 80.000
```

### 165. +TRID: Set Intent to Proceed when LE or Intent Received 2192016
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=CX.TRID.LE.ALT.RECD, action=AdvancedCode
  - Event: field=CX.TRID.LE.RECD, action=AdvancedCode
  - Event: field=CX.TRID.INTENT.ACK.REC, action=AdvancedCode
  - Event: field=CX.TRID.INTENT.ACK.LE.REC, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 166. +TRID: Set LE expires date timezone (LE1.X9)  to MDT
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=LE1.X28, action=Assign
  - Event: field=CX.DATE.NOW, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 167. +TRID: Set LE/TIL Date & Addl Disc Date to CX.DATE.NOW
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD" 
```

### 168. +TRID: Set LE2.X28 Use Alt based on 19 Purpose
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=19, action=Assign
  - Event: field=19, action=Assign

### 169. +TRID: Set State Liability [CD5.X6] on State [14]
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=14, action=AdvancedCode

### 170. +TRID: Set Title Defaults for all loans to Y at 3142
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 171. +TRID: Updating 3969 when 3142 is empty and 1393 is Active
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
  - Event: field=CX.TEST.ENABLE.TRIGGERRULE, action=AdvancedCode
- Advanced Code:
```
[@MS.START] < #10/3/2015# and IsEmpty([3142]) and [1393] = "Active Loan"
```

### 172. COC: Archive COC Fields for Comparison and Trigger
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=3148, action=Assign
  - Event: field=3150, action=Assign
  - Event: field=3142, action=Assign
- Advanced Code:
```
Not IsEmpty([3148]) and Not IsEmpty([MS.FUN]) and [1393] = "Active Loan" and [ORGID] = "1001"
```

### 173. COC: Set Chkbox To Be Included In Comments
- Status: Active
- Events: 7
- Condition: `9`
- Role ID: -1
  - Event: field=CX.COC.TR.CHANGELIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHANGELIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHANGELIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHANGELIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHANGELIST, action=AdvancedCode
- Advanced Code:
```
Not IsEmpty([3148]) and Not IsEmpty([MS.FUN]) and [1393] = "Active Loan" and [ORGID] = "1001"
```

### 174. COC: Set COC Reason and Date
- Status: Active
- Events: 7
- Condition: `9`
- Role ID: -1
  - Event: field=CX.COC.TR.CHECKLIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHECKLIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHECKLIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHECKLIST, action=AdvancedCode
  - Event: field=CX.COC.TR.CHECKLIST, action=AdvancedCode
- Advanced Code:
```
Not IsEmpty([3148]) and Not IsEmpty([MS.FUN]) and [1393] = "Active Loan" and [CX.COC.TR.FIRSTTIME] = "Y" and [ORGID] = "1001"
```

### 175. DATE: Copy CX.DATE.NOW to ...ARCHIVE
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=Assign
- Advanced Code:
```
[MS.STATUS] = "Started"
```

### 176. ELLIEMAE: Sync Loan Program Name
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2861, action=AdvancedCode

### 177. MOVE*: From Adversed Loans to Reviewed-Not Originated (12/4/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.HMDA.REVD.ON, action=AdvancedCode
- Advanced Code:
```
([CX.MTECH.FOLDER.CURRENT] = "Adversed Loans")
```

### 178. MOVE*: From Leads to Prospects on UW Score & Msg (2/26/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=VASUMM.X23, action=AdvancedCode
- Advanced Code:
```
([CX.MTECH.FOLDER.CURRENT] = "Leads")
```

### 179. MOVE*: From Pipeline to Adversed Loans on Denial Apprval 12/4/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DENIALAPPRVDON, action=AdvancedCode
- Advanced Code:
```
([CX.MTECH.FOLDER.CURRENT] = "My Pipeline")
```

### 180. MOVE*: From Prospects to Pipeline on 3142 & Msg (11/4/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=AdvancedCode
- Advanced Code:
```
([CX.MTECH.FOLDER.CURRENT] = "Prospects") 
```

### 181. MSGBOX*: NA not allowed for Ethnicity & Sex on 1003 3/11/14
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=1523, action=AdvancedCode
  - Event: field=1531, action=AdvancedCode
  - Event: field=471, action=AdvancedCode
  - Event: field=478, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN])
```

### 182. MSGBOX: # of Yrs Pop-Up Reminder
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=FR0112, action=AdvancedCode

### 183. MSGBOX: Notify Est Closing Date Passed (3/20/15
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN]) and [MS.STATUS] = "Qualification"
```

### 184. MSGBOX: Notify if LTV > 80 and no MI percent in [1199] 10/7/13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1199, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN]) and [MS.STATUS] = "Qualification"
```

### 185. MSGBOX: Popup Warning if Loan Amount [1109] Changes
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1109, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN]) and [MS.STATUS] = "Qualification"
```

### 186. MSGBOX: This loan does not qualify for a Cutoff of MI
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1811, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN]) and [MS.STATUS] = "Qualification"
```

### 187. MSGBOX: WORST CASE % set in field1107 if 1172 = FHA or VA
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1172, action=AdvancedCode
- Advanced Code:
```
[1393] = "Active Loan" and IsEmpty([MS.FUN]) and [MS.STATUS] = "Qualification"
```

### 188. QC Random
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[CX.QCSELECT] <> "N" and [CX.QCSELECT] <> "Y"
```

### 189. QC Random - Banked Wholsale
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[CX.QCSELECT] <> "N" and [CX.QCSELECT] <> "Y"
```

### 190. QC Selected
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=CX.QCSELECTDATE, action=AdvancedCode
  - Event: field=CX.QCSELECTDATE, action=AdvancedCode
  - Event: field=CX.QCSELECTDATE, action=Email
  - Event: field=CX.QCSELECTDATE, action=Email
- Advanced Code:
```
[CX.QCSELECT] = "Y" and IsEmpty([CX.QCCLEAREDDATE])
```

### 191. RESET*: Escrow Months when Escrows Exist (5/16/14
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=1387, action=AdvancedCode
  - Event: field=1386, action=AdvancedCode
  - Event: field=1386, action=AdvancedCode
  - Event: field=1387, action=AdvancedCode

### 192. RESET: NEWHUD.X1305 (MI fee APR) always checked (05/15/14
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=NEWHUD.X1305, action=AdvancedCode
  - Event: field=NEWHUD.X1299, action=AdvancedCode
  - Event: field=NEWHUD.X1301, action=AdvancedCode
  - Event: field=NEWHUD.X1526, action=AdvancedCode
  - Event: field=NEWHUD.X1302, action=AdvancedCode

### 193. SET: Aggregate Form based on Loan Type [1172] (10/26/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1172, action=Assign
  - Event: field=1172, action=Assign

### 194. SET: Closing Costs by Branch (ORGID) 102915SP
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=ORGID, action=AdvancedCode
  - Event: field=MORNET.X40, action=AdvancedCode
- Advanced Code:
```
IsEmpty ([364])  or NOT IsEmpty ([MORNET.X40])
```

### 195. SET: ECOA Federal Agency to OCC
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
- Advanced Code:
```
NOT [NOTICES.X2].Contains("Office of the Comptroller")
```

### 196. SET: ECOA Region Settings
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=14, action=AdvancedCode

### 197. SET: Exclusive checkboxes in Itemization section 802 (12/8/11
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=NEWHUD.X713, action=Assign
  - Event: field=NEWHUD.X715, action=Assign

### 198. SET: Exclusive Checkboxes on Req Items
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.REQITEMS.ONHOLD, action=Assign
  - Event: field=CX.REQITEMS.OUTSTANDING, action=Assign

### 199. SET: MortgageTech on all 4506T (new form) Requests
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=IR0402, action=AdvancedCode
  - Event: field=IR0102, action=AdvancedCode
  - Event: field=IR0202, action=AdvancedCode
  - Event: field=IR0302, action=AdvancedCode

### 200. SETDATE: Counselor Discl Date on Disc Tracking(4/24/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3144, action=Copy

### 201. +TRID: Checking a box when 3142 is empty and loan is started
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
- Advanced Code:
```
[@MS.START] < #10/5/2015# and IsEmpty([3142]) and [1393] = "Active Loan"
```

### 202. +TRID: Copy File Contacts to CD5 (10/2/15
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CD1.X1, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 203. +TRID: EMAIL: ALERT Send initial disclosures
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=Email
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 204. +TRID: Force form  version on undisclosed files started <10/3
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=AdvancedCode
- Advanced Code:
```
[@MS.START] < #10/3/2015#
```

### 205. +TRID: Set Intent to Proceed when LE Received
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.TRID.LE.RECD, action=AdvancedCode
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 206. +TRID: Set LE expires date timezone (LE1.X9)  to CDT
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=Assign
  - Event: field=LE1.X28, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 207. +TRID: SET Name and Address on LE to NL (10/2/15
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=MS.START, action=Assign

### 208. !EMAIL: Notification of Milestone Changes 92316FX
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=MS.STATUSDATE, action=Email
- Advanced Code:
```
[1393] = "Active Loan" and [MS.STATUS] <> "Started"
```

### 209. !MOVE: Brokered Pipeline Management 92316FX
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=2626, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
- Advanced Code:
```
[MS.START] > "01/01/2016"
```

### 210. !MOVE: Retail Pipeline Management 92316FX
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=3142, action=AdvancedCode
  - Event: field=MS.FUN, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=MS.STATUS, action=AdvancedCode
- Advanced Code:
```
[ORGID].Contains("GB") and [MS.START] > "01/01/2016"
```

### 211. !MOVE: TPO Pipeline Management 92316FX
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=MS.STATUS, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=MS.STATUS, action=AdvancedCode
  - Event: field=3567, action=AdvancedCode
- Advanced Code:
```
[2626] = "Correspondent" and [MS.START] > "01/01/2016"
```

### 212. !UPDATE: Check the FACT Act boxes after Credit Pull (6/13/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=VASUMM.X23, action=AdvancedCode
  - Event: field=300, action=AdvancedCode

### 213. !UPDATE: Check the FACT Act boxes at disclosure alert (6/13/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3142, action=AdvancedCode

### 214. XFX:email test for additional uw conds
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=UWC.AC, action=Email
  - Event: field=UWC.ADDEDCOUNT, action=Email
  - Event: field=UWC.ALLCOUNT, action=Email
  - Event: field=UWC.OPENCOUNT, action=Email
  - Event: field=UWC.OPENEXTERNALCOUNT, action=Email

### 215. MSGBOX: 2nd Liens
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=14, action=AdvancedCode
- Advanced Code:
```
[420] = "Second Lien"
```

### 216. MSGBOX: Add ADP Pop-Up Reminder
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1040, action=AdvancedCode

### 217. MSGBOX: Broker loans on or after 5/24/2016
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[@MS.START] >= #5/24/2016# and (IsEmpty([CUST02FV]) or [CUST05FV] <> "Y")
```

### 218. MSGBOX: Co-Borrower entered on loan
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=1268, action=AdvancedCode
  - Event: field=97, action=Assign
- Advanced Code:
```
[4004] <> "" or [4006] <> ""
```

### 219. MSGBOX: Conv Construction Cost Validation
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[1172] = "Conventional" and [19] = "ConstructionOnly" and [136] + [968] <> [CX.CIBI.CONST.FUNDS.CONV]
```

### 220. MSGBOX: CONV OTC Loans
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1041, action=AdvancedCode
- Advanced Code:
```
[1172] = "Conventional" and [1401].Contains("OTC")
```

### 221. MSGBOX: Conventional loans with MI - Popup reminders
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
([#1107] <> 0 or [232] <> "0" or [#337] <> 0 or [#1199] <> 0) and ([L248] = "" or [VEND.X167] = "")
```

### 222. MSGBOX: Date Validation Rules
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1999, action=AdvancedCode

### 223. MSGBOX: Denial Popup Reminder
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=DENIAL.X69, action=AdvancedCode
- Advanced Code:
```
Not IsEmpty([DENIAL.X69])
```

### 224. MSGBOX: FHA Retail MIP Check
- Status: Active
- Events: 5
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[1172] = "FHA" and (([#1107]<>[#CX.FHA.UFMIP.CHECK]) or ([#1199]<>[#CX.FHA.MIP.CHECK])) and [#CX.MIP.CHECK.OVERRIDE]=0
```

### 225. MSGBOX: Flip Transaction Triggers - Test
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
NOT ([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
```

### 226. MSGBOX: GNMA/FNMA Eligibility Only Pop-up
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
([1041] = "ManufacturedHousing" or [#VASUMM.X23] < 640) and ([CX.2ND.INV.INELIG.020] <> "X" or [CX.2ND.INV.INELIG.050] <> "X" or [CX.2ND.INV.INELIG.090] <> "X" or [CX.2ND.INV.INELIG.110] <> "X" or [CX.2ND.INV.INELIG.040] <> "X")
```

### 227. MSGBOX: Loan Type Restrictions for Michael Handler
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1172, action=AdvancedCode
- Advanced Code:
```
[3238] = "279087"
```

### 228. MSGBOX: Lock Type MIssing
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
Not IsEmpty([2151]) and [2287] = ""
```

### 229. MSGBOX: No Appraisal Doc ID
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[ULDD.X31] = "" and [1172] = "Conventional"
```

### 230. MSGBOX: No Borrower Email Pop-Up
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1240, action=AdvancedCode

### 231. MSGBOX: Property State is IN
- Status: Active
- Events: 1
- Condition: `6`
- Role ID: -1
  - Event: field=420, action=AdvancedCode
- Advanced Code:
```
18
```

### 232. MSGBOX: Refinance Loans
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1634, action=AdvancedCode
- Advanced Code:
```
([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
```

### 233. MSGBOX: Sell Side Lock Warning
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
(IsEmpty([2222]) or [@2222] < [@2151]) and [2287] = "Best Efforts"
```

### 234. MSGBOX: ULDD FNMA Appraisal ID remider
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[1172] = "Conventional" and IsEmpty([MS.APP]) and NOT ([ULDD.X29] = "AutomatedValuationModel" OR [ULDD.X29] = "DriveBy" OR [ULDD.X29] = "None") and [ULDD.X31] = ""
```

### 235. MSGBOX: VA IRRRL Streamline >36 Months Recoup
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[958] = "IRRRL" and [#VASUMM.X27] > 36
```

### 236. MSGBOX: 2nd Lien Milestone Pop-Up
- Status: Active
- Events: 13
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[1540]<>[976]
```

### 237. !!TEST: Email Formatting
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.TEST.FORMATTEDEMAIL.FX, action=AdvancedCode

### 238. Copy of !!TEST: Email Formatting
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.TEST.FORMATTEDEMAIL.FX, action=AdvancedCode

### 239. UPDATE: Itemization from Lock Confirmation
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2203, action=AdvancedCode

### 240. SET: Borrower Age from DOB
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1402, action=AdvancedCode

### 241. !!TEST: Dates Between Dates by Calender
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.DATES.DATE1, action=AdvancedCode
  - Event: field=CX.DATES.DATE2, action=AdvancedCode

### 242. !!!TEST: Days Between Dates short code
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.FX.DAYS.BETWEEN.DATES, action=AdvancedCode
  - Event: field=CX.FX.DAYS.BETWEEN.DATES, action=AdvancedCode
  - Event: field=CX.FX.DAYS.BETWEEN.DATES, action=AdvancedCode

### 243. !!!NICOLE: Business Days Between Dates
- Status: Active
- Events: 13
- Role ID: -1
  - Event: field=CX.DATES.DATE1, action=AdvancedCode
  - Event: field=CX.DATES.DATE2, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode

### 244. UPDATE: LE1 Lock Timezone to MST
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=2400, action=AdvancedCode
  - Event: field=LE1.X7, action=AdvancedCode

### 245. X-Set Closing Cost Instructions
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=MS.START, action=Assign

### 246. X-~UPDATE: Optimal Blue
- Status: Active
- Events: 10
- Condition: `5`
- Role ID: -1
  - Event: field=2100, action=Assign
  - Event: field=2866, action=Assign
  - Event: field=2950, action=Assign
  - Event: field=2951, action=Assign
  - Event: field=2952, action=Assign
- Advanced Code:
```
0
```

### 247. X-~UPDATE - OB: Apply Loan Product Changes by Investor
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=VEND.X263, action=AdvancedCode

### 248. X-~UPDATE - OB: Apply Loan Product from changes to 1401
- Status: Active
- Events: 30
- Role ID: -1
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode

### 249. X-~UPDATE - OB: Apply Loan Product from changes to 1401 Revised
- Status: Active
- Events: 43
- Role ID: -1
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode

### 250. X-~Update Closing Cost Instructions based on Purpose
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=19, action=Assign
  - Event: field=19, action=Assign

### 251. X-!!!Test New Dating Sequence for better sorting on Pipeline
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3168, action=Assign

### 252. X-!!!test popup confirm macro
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=4001, action=AdvancedCode

### 253. X-!!!Test Rounding Up Whole Numbers coding
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=136, action=AdvancedCode

### 254. X-~~TEST NEW DATE SEQUENCE FOR SORTING PIPELINE
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3168, action=Assign

### 255. X-~Archive and Restore Loan Program Name [1401]
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1401, action=AdvancedCode
  - Event: field=1401, action=AdvancedCode

### 256. X-~ASSIGN: Underwriter to Arizona2 loan files (12/8/14
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 3
- Role ID: 5
  - Event: field=ORGID, action=AdvancedCode
- Advanced Code:
```
3
```

### 257. X-~BACKUP: EMAIL*: UW Notice of Susp, Denial, Countered (9/21/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=2303, action=Email
  - Event: field=2989, action=Email
  - Event: field=2987, action=Email

### 258. X-~COPY*: If Est Value is Empty Copy from Pur Price (2/14/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=136, action=Copy
- Advanced Code:
```
NOT [2024].Contains("web") and IsEmpty([1821])
```

### 259. X-~COPY: 749 Adverse Action Date to Denial Letter (12/6/11
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.DENIALAPPRVDBY, action=Copy
  - Event: field=749, action=Copy
  - Event: field=749, action=Assign

### 260. X-~COPY: FHA and Conv MI Auto Box Check on TIL
- Status: Active
- Events: 1
- Condition: `2`
- Role ID: -1
  - Event: field=232, action=Assign
- Advanced Code:
```
2
```

### 261. X-~COPY: Locked (2400) to Intends to Continue (3164) (11/29/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2400, action=Copy

### 262. X-~EMAIL: ALERT Trust Account in the Red
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.TAACCTBAL, action=Email
- Advanced Code:
```
Not IsEmpty([3142])
```

### 263. X-~EMAIL: APR Change Trigger
- Status: Active
- Events: 1
- Condition: `4`
- Milestone ID: 3
- Role ID: 5
  - Event: field=799, action=Email
- Advanced Code:
```
3
```

### 264. X-~EMAIL: Borrower intends to continue with this loan (8/18/11
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3164, action=Email

### 265. X-~EMAIL: Closing - Ready for Docs
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 266. X-~QC Random
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[CX.QCSELECT] <> "N" and [CX.QCSELECT] <> "Y"
```

### 267. X-~QC Random - Banked Wholsale
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
[CX.QCSELECT] <> "N" and [CX.QCSELECT] <> "Y"
```

### 268. X-~QC Selected
- Status: Active
- Events: 4
- Condition: `9`
- Role ID: -1
  - Event: field=CX.QCSELECTDATE, action=AdvancedCode
  - Event: field=CX.QCSELECTDATE, action=AdvancedCode
  - Event: field=CX.QCSELECTDATE, action=Email
  - Event: field=CX.QCSELECTDATE, action=Email
- Advanced Code:
```
[CX.QCSELECT] = "Y" and IsEmpty([CX.QCCLEAREDDATE])
```

### 269. X-~SET: ECOA Region Settings
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=14, action=AdvancedCode

### 270. X-~TESTTHIS - Email Smart List
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.REQITEMS.ON, action=Email

### 271. X-~TRID: Set LE expires date timezone (LE1.X9)  to MDT
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=LE1.X28, action=Assign
  - Event: field=CX.DATE.NOW, action=Assign
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 272. X-~UPDATE*: 4506-T from Application based on DOBs (10/26/11
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=1402, action=Assign
  - Event: field=1403, action=Assign
  - Event: field=1403, action=AdvancedCode
- Advanced Code:
```
[@MS.START] >= #10/26/2011#
```

### 273. X-~UPDATE: *Exclusive use of Purpose of Loan or Refi (12/26/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=299, action=Assign

### 274. X-~UPDATE: Delete FHA MI Cutoff % on loans created after 6-3-13
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=1205, action=Assign
- Advanced Code:
```
[@MS.START] >= #6/3/2013# and [1172] = "FHA"
```

### 275. X-~UPDATE: Exclusive use of Purpose of Loan or Refi (12/26/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=19, action=Assign

### 276. X-~UPDATE: Set Doc Dates blank when CIC [3168]is checked 9/23/13
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3168, action=Assign

### 277. X-~UPDATE: Set GFE and TIL Sent Date to Blank (08/12/14
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=3170, action=Assign
  - Event: field=3122, action=Assign

### 278. X-~UPDATE: Set response date for AUS (8/30/12
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=1544, action=Assign
  - Event: field=DU.LP.ID, action=Assign

### 279. X-~UPDATE: Set UW Conditions Last Updated Date
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.UWC.PRINTED, action=AdvancedCode

### 280. X-~URGENT: Early Request to Schedule Closing for [364]
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.CDOF.REQUESTED.ON, action=Email
- Advanced Code:
```
[CX.CDOF.SHORTDATE] = "EARLY"
```

### 281. X-EMAIL: Closing - Request Coordinator to set Closer (4/18/12
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=Email

### 282. X-EMAIL: Closing - Update Request for Closing Date/Time (5/4/12
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.CDOF.REQUESTED.ON, action=Email
- Advanced Code:
```
[CX.LOANDOC010] = "Y" and ([CX.CDOF.DATETIME.LOCK] = "NA" OR [CX.CDOF.DATETIME.LOCK] = "YES")
```

### 283. X-EMAIL: UW Notification of Underwriter Assigned (04/15/13
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=984, action=Email

### 284. X-EXAMPLE: If instr ([field],"filter") = X then
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=19, action=AdvancedCode

### 285. X-MSGBOX: Confirm that MI matches Loan to Submit (7/17/14
- Status: Active
- Events: 1
- Condition: `3`
- Role ID: -1
  - Event: field=CX.LOG.MS.DATETIME.SUBMITTAL, action=AdvancedCode
- Advanced Code:
```
0
```

### 286. X-SETDATE: GFE&REGZ&DISCLS Date on Printed Forms (8/12/14
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.DATETIME.FILE.OPENED, action=Assign
- Advanced Code:
```
[CX.CURRENTUSER.PERSONA].Contains("Setup") OR [CX.CURRENTUSER.PERSONA].Contains("Super")
```

### 287. X-Test for disclosure field archiving
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=736, action=AdvancedCode

### 288. COUNT: Number of GFEs Provided to Borrower (8/26/14
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3150, action=AdvancedCode

### 289. WS:GNMA/FNMA Eligibility Only Pop-up
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
([1041] = "ManufacturedHousing" or [#VASUMM.X23] < 640) and ([CX.2ND.INV.INELIG.020] <> "X" or [CX.2ND.INV.INELIG.050] <> "X" or [CX.2ND.INV.INELIG.090] <> "X" or [CX.2ND.INV.INELIG.110] <> "X" or [CX.2ND.INV.INELIG.040] <> "X")
```

### 290. WS:Sell Side Lock Warning
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=?, action=AdvancedCode
- Advanced Code:
```
(IsEmpty([2222]) or [@2222] < [@2151]) and [2287] = "Best Efforts"
```

### 291. WS-No Borrower Email Pop-Up
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1240, action=AdvancedCode

### 292. ePrint Enabled for Administrators
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.NOW, action=AdvancedCode

### 293. COPY: Title To Be Held Names from Consumer Connect 070717
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2024, action=AdvancedCode

### 294. !!Field Lock Test
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CONST.X58, action=Assign

### 295. ANNE: UWDecisionNeeded Alert Count
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.COUNT.UWDECISION, action=Assign

### 296. FX.SET: Current User Personas to FX User Touches
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode

### 297. UPDATE: Tolerance Cure History
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=3172, action=AdvancedCode
  - Event: field=3173, action=AdvancedCode
  - Event: field=FV.X366, action=AdvancedCode
  - Event: field=FV.X348, action=AdvancedCode
  - Event: field=3171, action=AdvancedCode

### 298. TESTING EM EMAIL
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=4001, action=Email

### 299. *MSGBOX - 682
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=682, action=AdvancedCode

### 300. !AnneMoody - Fail when [682] in not "01"
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=682, action=AdvancedCode

### 301. !ContourMtg-MOVE: From "" to Inactive Leads based on [1393]
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1393, action=AdvancedCode

### 302. SET: File Started Date and Time
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=MS.START, action=Assign

### 303. zAnne _CA LO License Type
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=1612, action=Assign
  - Event: field=1612, action=Assign
  - Event: field=1612, action=Assign

### 304. FX.CF:Times and Days at Milestones-5/15/18
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=MS.STATUS, action=AdvancedCode
  - Event: field=MS.STATUS, action=AdvancedCode
  - Event: field=CX.FX.CALC.DAY.DIFF.DATE2, action=AdvancedCode
  - Event: field=CX.FX.DATE.TODAY, action=AdvancedCode

### 305. *KM_EMAIL: LOCKDESK - Rate is locked_Something has changed
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.LOCKSNAPCHECKALL, action=Email
- Advanced Code:
```
[CX.LOCKSNAPCHECKALL].Contains("Review") and [2400] = "Y" and NOT ([1393] = "Loan Originated" OR [1393] = "Application approved but not accepted" OR [1393] = "Application denied" OR [1393] = "Application withdrawn" OR [1393] = "File Closed for incompleteness" OR [1393] = "Loan purchased by your institution" OR [1393] = "Preapproval request denied by financial institution" OR [1393] = "Preapproval request approved but not accepted")
```

### 306. *KM_Check MI
- Status: Active
- Events: 10
- Condition: `9`
- Role ID: -1
  - Event: field=1401, action=Assign
  - Event: field=4, action=Assign
  - Event: field=325, action=Assign
  - Event: field=356, action=Assign
  - Event: field=VASUMM.X23, action=Assign
- Advanced Code:
```
[@MS.START] >= #5/22/2018# and NOT [MS.STATUS].Contains("Started")
```

### 307. *KM_Update Clear Check MI or Clear MI Checked
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.CHECK.MI, action=Assign
  - Event: field=CX.MI.CHECKED, action=Assign
- Advanced Code:
```
[@MS.START] >= #5/22/2018# and NOT [MS.STATUS].Contains("started")
```

### 308. *KM_MSGBOX: Check MI_V2
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.CHECK.MI, action=AdvancedCode
- Advanced Code:
```
[@MS.START] >= #5/22/2018# and NOT [MS.STATUS].Contains("started") and [#353] > 80
```

### 309. Mindy - HMDA - Conventional
- Status: Active
- Events: 22
- Condition: `9`
- Role ID: -1
  - Event: field=AUSF.X1, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
- Advanced Code:
```
NOT [1401].Contains("HELOC") and NOT [1401].Contains("Business Loan")
```

### 310. Mindy - HMDA - HELOC
- Status: Active
- Events: 20
- Condition: `9`
- Role ID: -1
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
- Advanced Code:
```
[1401].Contains("HELOC") and NOT [1401].Contains("Business Loan")
```

### 311. Mindy - FACT ACT Check Boxes
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=67, action=Assign
  - Event: field=60, action=Assign
  - Event: field=1450, action=Assign
  - Event: field=1452, action=Assign
  - Event: field=1414, action=Assign

### 312. Mindy - 4506T
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=IR0101, action=Assign
  - Event: field=IR0201, action=Assign
  - Event: field=IR0301, action=Assign
  - Event: field=IR0401, action=Assign

### 313. Mindy - Denial FACTA
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=HMDA.X21, action=AdvancedCode
  - Event: field=HMDA.X22, action=AdvancedCode
  - Event: field=HMDA.X23, action=AdvancedCode

### 314. Mindy - HMDA - Business
- Status: Active
- Events: 17
- Condition: `9`
- Role ID: -1
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=1393, action=Assign
  - Event: field=1393, action=Assign
  - Event: field=1393, action=Assign
- Advanced Code:
```
[1401].Contains("Business Loan")
```

### 315. !!UPDATE: CX.FX.KW.PN.TITLE.PA to Text + Triggered Date
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.PUR.TBDCUAFIRST, action=AdvancedCode

### 316. Seller Buydown Screen Rules
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.BD.TOTAL.DOLLAR, action=AdvancedCode
  - Event: field=CX.BD.TOTAL.SELLER.CC, action=Assign
  - Event: field=CX.BD.CONTRACT.PERCENT, action=Assign

### 317. *Year on Job - Borrower
- Status: Active
- Events: 7
- Role ID: -1
  - Event: field=BE0214, action=AdvancedCode
  - Event: field=BE0314, action=AdvancedCode
  - Event: field=BE0414, action=AdvancedCode
  - Event: field=BE0514, action=AdvancedCode
  - Event: field=BE0614, action=AdvancedCode

### 318. *Current Years on Job
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=BE0111, action=AdvancedCode

### 319. SET: Calculate Time in Job from Start Date to End Date
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.FX.EMPL.CURRENT, action=AdvancedCode
  - Event: field=CX.FX.EMPL.CURRENT, action=AdvancedCode

### 320. SET: Custom Field CX.FX.EMPL.CURRENT on Start/End/Current Status
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=BE0111, action=AdvancedCode
  - Event: field=BE0114, action=AdvancedCode
  - Event: field=BE0109, action=AdvancedCode
  - Event: field=BE0211, action=AdvancedCode
  - Event: field=BE0214, action=AdvancedCode

### 321. *Email_Request additional DMI Loan Numbers
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.CUL.REMAININGCOUNT, action=Email

### 322. *SET_CX.FX.ALN.TRIGGER to Y
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=300, action=Assign

### 323. SET: Calculate First Payment Date
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=763, action=AdvancedCode

### 324. *Set 1st Payment Date V2
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=748, action=AdvancedCode
  - Event: field=763, action=AdvancedCode

### 325. !ANNE-Recording Fees Calculator
- Status: Active
- Events: 8
- Role ID: -1
  - Event: field=1811, action=AdvancedCode
  - Event: field=1172, action=AdvancedCode
  - Event: field=1861, action=AdvancedCode
  - Event: field=CX.FX.POA, action=AdvancedCode
  - Event: field=CX.FX.QCD, action=AdvancedCode

### 326. !!!MTGTECH: Business Days Between Dates
- Status: Active
- Events: 18
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
  - Event: field=CX.DATES.DATE1, action=AdvancedCode
  - Event: field=CX.DATES.DATE2, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode

### 327. *PSR_Update Order Request on new request
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PS.OPEN.TITLE.ESCROW, action=Assign
  - Event: field=CX.PS.ORDER.CERT.ELIG, action=Assign
  - Event: field=CX.PS.ORDER.FHA.CASE.NMBR, action=Assign
  - Event: field=CX.PS.ORDER.VOE, action=Assign
  - Event: field=CX.PS.ORDER.VOD, action=Assign

### 328. *PSR_Update Presubmission Requests
- Status: Active
- Events: 20
- Role ID: -1
  - Event: field=CX.PS.CMPLT.VOE, action=Assign
  - Event: field=CX.PS.CMPLT.VOD, action=Assign
  - Event: field=CX.PS.CMPLT.HOA.CERT, action=Assign
  - Event: field=CX.PS.CMPLT.CERT.ELIG, action=Assign
  - Event: field=CX.PS.CMPLT.FHA.CASE.NMBR, action=Assign

### 329. *PSR_Update PSR Request Order Status
- Status: Active
- Events: 12
- Role ID: -1
  - Event: field=CX.PS.DATE.TITLE.ESCROW, action=Assign
  - Event: field=CX.PS.OPEN.TITLE.ESCROW.CLM, action=Assign
  - Event: field=CX.PS.DATE.VOE, action=Assign
  - Event: field=CX.PS.ORDER.VOE.CLAIM, action=Assign
  - Event: field=CX.PS.DATE.HOA.CERT, action=Assign

### 330. *PSR_Email for new Request
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PS.ORDER.VOE, action=Email
  - Event: field=CX.PS.ORDER.VOD, action=Email
  - Event: field=CX.PS.ORDER.HOA.CERT, action=Email
  - Event: field=CX.PS.ORDER.FHA.CASE.NMBR, action=Email
  - Event: field=CX.PS.ORDER.CERT.ELIG, action=Email

### 331. *PSR_Email for Completed Request
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PS.CMPLT.VOE, action=Email
  - Event: field=CX.PS.CMPLT.HOA.CERT, action=Email
  - Event: field=CX.PS.CMPLT.CERT.ELIG, action=Email
  - Event: field=CX.PS.CMPLT.FHA.CASE.NMBR, action=Email
  - Event: field=CX.PS.CMPLT.VOD, action=Email

### 332. *PSR_Email Order Status Updated
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=CX.PS.DATE.CERT.ELIG, action=Email
  - Event: field=CX.PS.DATE.FHA.CASE.NMBR, action=Email
  - Event: field=CX.PS.DATE.HOA.CERT, action=Email
  - Event: field=CX.PS.DATE.TITLE.ESCROW, action=Email
  - Event: field=CX.PS.DATE.VOD, action=Email

### 333. *PSR_Email Order Received for VOE VOD
- Status: Active
- Events: 12
- Role ID: -1
  - Event: field=CX.PSR.VOD.O1, action=Email
  - Event: field=CX.PSR.VOD.O2, action=Email
  - Event: field=CX.PSR.VOD.O3, action=Email
  - Event: field=CX.PSR.VOD.O4, action=Email
  - Event: field=CX.PSR.VOE.B.O1, action=Email

### 334. UPDATE: VA Funding Fee Determination
- Status: Active
- Events: 4
- Condition: `2`
- Role ID: -1
  - Event: field=990, action=AdvancedCode
  - Event: field=VAVOB.X72, action=AdvancedCode
  - Event: field=VASUMM.X49, action=AdvancedCode
  - Event: field=1771, action=AdvancedCode
- Advanced Code:
```
4
```

### 335. !TEST: MacroExecPlugin
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=672, action=AdvancedCode

### 336. DDM Va Funding Fee
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=VAVOB.X72, action=Copy
  - Event: field=VASUMM.X49, action=Copy
- Advanced Code:
```
[1172] = "VA" and [990] <> "Y"
```

### 337. UPDATE: VA Funding Fee Determination - Military Homespot 2019
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=1771, action=AdvancedCode
  - Event: field=VAVOB.X72, action=AdvancedCode
  - Event: field=VASUMM.X49, action=AdvancedCode
- Advanced Code:
```
[1172] = "VA" and [990] <> "Y"
```

### 338. UPDATE: Brings Origination or Discount over from Lock Request
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2143, action=AdvancedCode

### 339. UPDATE: VA Residual Region - Military Homespot
- Status: Active
- Events: 5
- Role ID: -1
  - Event: field=14, action=AdvancedCode
  - Event: field=CASASRN.X145, action=AdvancedCode
  - Event: field=742, action=AdvancedCode
  - Event: field=VASUMM.X95, action=AdvancedCode
  - Event: field=1172, action=AdvancedCode

### 340. UPDATE:  Units - Military Homespot
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1553, action=Assign

### 341. UPDATE: Taxable Income to VALA
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=910, action=AdvancedCode

### 342. *DV - Set LE Data
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3152, action=Assign

### 343. *DV - Set CD Data
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3977, action=Assign

### 344. *DV - Update LE Data
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=3154, action=Assign
- Advanced Code:
```
IsEmpty([3977])
```

### 345. *DV - Update CD Data
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3979, action=Assign

### 346. EMAIL: Notify Closers/Funders of new documents
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=Document.DateReceived.UW Conditions, action=Email
- Advanced Code:
```
[MS.STATUS] = "Processing" or [MS.STATUS] = "Submittal" or [MS.STATUS] = "Cond. Approval"
```

### 347. Title Policy Fees
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=2, action=AdvancedCode
  - Event: field=136, action=AdvancedCode
  - Event: field=2, action=AdvancedCode
  - Event: field=136, action=AdvancedCode

### 348. Title Policy Fees - Test Rounding
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=136, action=AdvancedCode
  - Event: field=2, action=AdvancedCode

### 349. UPDATE: VA Funding Fee Determination - 2020
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=1771, action=AdvancedCode
  - Event: field=VAVOB.X72, action=AdvancedCode
  - Event: field=VASUMM.X49, action=AdvancedCode
- Advanced Code:
```
[1172] = "VA" and [990] <> "Y"
```

### 350. SET: Completion Date = True
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CUST25FV, action=AdvancedCode

### 351. SET: Loan Locked Field to NO (CX.FX.UNLOCKED)
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.DATETIME.NOW, action=Assign

### 352. SFP-est orgid
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=ORGID, action=AdvancedCode

### 353. Popup Dialog Test
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=Assign

### 354. *Popup - Use this Plugin!
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=Assign
- Advanced Code:
```
Not([cx.currentuser.persona].Contains("Super"))
```

### 355. Copy of *Popup - Scheduled close date
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=Assign
- Advanced Code:
```
[CX.ALERT.SUMMARY].Contains("Send Initial Disclosures")
```

### 356. test-delete me
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1240, action=Email

### 357. EMail Send Test
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=1172, action=Email

### 358. !!! Milestone Metrics
- Status: Active
- Events: 36
- Role ID: -1
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode

### 359. *Set UW Signing Level Required
- Status: Active
- Events: 3
- Role ID: -1
  - Event: field=CX.CCR.AGGCTOODEBT, action=AdvancedCode
  - Event: field=1109, action=AdvancedCode
  - Event: field=CX.NC.POLICY.COUNT, action=AdvancedCode

### 360. *Set UW Lending Authority
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=984, action=AdvancedCode

### 361. *Set Exception Non Conformity Price exception
- Status: Active
- Events: 9
- Role ID: -1
  - Event: field=CX.POLICY.EXC.TYPE.1, action=AdvancedCode
  - Event: field=CX.POLICY.EXC.TYPE.3, action=AdvancedCode
  - Event: field=CX.POLICY.EXC.TYPE.2, action=AdvancedCode
  - Event: field=CX.NONCONF.4, action=AdvancedCode
  - Event: field=CX.NONCONF.3, action=AdvancedCode

### 362. UPDATE: 2020 URLA - [955]
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=URLA.X123, action=AdvancedCode
  - Event: field=URLA.X124, action=AdvancedCode

### 363. UPDATE: URLA 2020 Address Change
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=FR0116, action=Copy
  - Event: field=FR0112, action=AdvancedCode
  - Event: field=FR0212, action=AdvancedCode
- Advanced Code:
```
[1825] = "2020"
```

### 364. UPDATE: URLA 2020 - Construction Method
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=ULDD.X187, action=AdvancedCode
- Advanced Code:
```
[1825] = "2020"
```

### 365. UPDATE: URLA 2020 - URLA.X80
- Status: Active
- Events: 3
- Condition: `9`
- Role ID: -1
  - Event: field=1487, action=AdvancedCode
  - Event: field=1005, action=AdvancedCode
  - Event: field=URLA.X80, action=AdvancedCode
- Advanced Code:
```
[1825] = "2020"
```

### 366. UPDATE: URLA 2020 Compressed 1003 Format
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=181, action=Assign
- Advanced Code:
```
[1825] = "2020"
```

### 367. UPDATE: URLA 2020 CoBorr Checkboxes
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=3840, action=AdvancedCode
  - Event: field=3840, action=AdvancedCode
- Advanced Code:
```
[1825] = "2020"
```

### 368. UPDATE: URLA 2020 Lender Page
- Status: Active
- Events: 10
- Condition: `9`
- Role ID: -1
  - Event: field=1041, action=AdvancedCode
  - Event: field=1041, action=AdvancedCode
  - Event: field=1041, action=AdvancedCode
  - Event: field=1041, action=AdvancedCode
  - Event: field=299, action=AdvancedCode
- Advanced Code:
```
[1825] = "2020"
```

### 369. UNTRIGGER TRID
- Status: Active
- Events: 6
- Role ID: -1
  - Event: field=3142, action=Assign
  - Event: field=CX.RESPACHANGE, action=Email
  - Event: field=3142, action=AdvancedCode
  - Event: field=3142, action=Email
  - Event: field=3142, action=Assign

### 370. UPDATE: Role Assignment Plugin Test Rule
- Status: Active
- Events: 1
- Condition: `9`
- Role ID: -1
  - Event: field=ORGID, action=AdvancedCode
- Advanced Code:
```
[ORGID] <> ""
```

### 371. test case
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3331, action=AdvancedCode

### 372. test2
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2984, action=AdvancedCode

### 373. ~General Triggers
- Status: Active
- Events: 28
- Role ID: -1
  - Event: field=748, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode
  - Event: field=CX.PAIRS16, action=AdvancedCode

### 374. KD Test Mers
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.TEST.CASE, action=AdvancedCode

### 375. PW - Rate and Fee Adj Boxes
- Status: Active
- Events: 26
- Role ID: -1
  - Event: field=CX.FX.PW.ADJ10, action=Assign
  - Event: field=CX.FX.PW.ADJ11, action=Assign
  - Event: field=CX.FX.PW.ADJ12, action=Assign
  - Event: field=CX.FX.PW.ADJ13, action=Assign
  - Event: field=CX.FX.PW.ADJ14, action=Assign

### 376. PW - Split
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=CX.FX.PW.ADJSPLT13, action=Assign
  - Event: field=CX.FX.PW.ADJSPLT21, action=Assign
  - Event: field=CX.FX.PW.ADJSPLT10, action=Assign
  - Event: field=CX.FX.PW.ADJSPLT12, action=Assign

### 377. PW - Rate and Fee Adj Boxes - Uncheck
- Status: Active
- Events: 26
- Role ID: -1
  - Event: field=CX.FX.PW.ADJ10, action=Assign
  - Event: field=CX.FX.PW.ADJ11, action=Assign
  - Event: field=CX.FX.PW.ADJ12, action=Assign
  - Event: field=CX.FX.PW.ADJ13, action=Assign
  - Event: field=CX.FX.PW.ADJ14, action=Assign

### 378. *Milestone - Reset to Resubmit for CTC Review
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=763, action=AdvancedCode
  - Event: field=763, action=Email
- Advanced Code:
```
Not IsEmpty([763]) and Not IsEmpty([CX.LATEST.CLOSING.DATE])
```

### 379. *Mindy Test Popup
- Status: Active
- Events: 2
- Condition: `9`
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=Assign
  - Event: field=CX.FX.LOANEVENT, action=Assign
- Advanced Code:
```
[4002] = "Message"
```

### 380. KK - Test Move rule
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=?, action=AdvancedCode

### 381. Jesse Test
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=4000, action=Assign

### 382. FX.PrintToEFolder Example Business Rule
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=3142, action=Assign

### 383. Apply Doc Set to Duplicated Loan
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.DOCTRIGGER, action=ApplyLoanTemplate
  - Event: field=2024, action=AdvancedCode

### 384. UPDATE: Manufactured Home
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=ULDD.X187, action=AdvancedCode
  - Event: field=1041, action=AdvancedCode

### 385. KJD - 2987
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=2987, action=Assign

### 386. UPDATE: 4506C 2022
- Status: Active
- Events: 8
- Role ID: -1
  - Event: field=IR0101, action=AdvancedCode
  - Event: field=IR0201, action=AdvancedCode
  - Event: field=IR0301, action=AdvancedCode
  - Event: field=IR0401, action=AdvancedCode
  - Event: field=IR0501, action=AdvancedCode

### 387. MESSAGE - DTI Not > 50%
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=742, action=AdvancedCode
  - Event: field=CX.FX.LOANEVENT, action=AdvancedCode

### 388. MESSAGE - DTI Not > 60% test 2
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=742, action=AdvancedCode
  - Event: field=CX.FX.LOANEVENT, action=AdvancedCode

### 389. MESSAGE - LTV Above 95%
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=AdvancedCode
  - Event: field=353, action=AdvancedCode

### 390. Loan Archive
- Status: Active
- Events: 4
- Role ID: -1
  - Event: field=749, action=AdvancedCode
  - Event: field=2553, action=AdvancedCode
  - Event: field=1393, action=AdvancedCode
  - Event: field=2025, action=AdvancedCode

### 391. MESSAGE - LTV Above 65%
- Status: Active
- Events: 2
- Role ID: -1
  - Event: field=353, action=AdvancedCode
  - Event: field=CX.FX.LOANEVENT, action=AdvancedCode

### 392. MessageFX Testing
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.FX.LOANEVENT, action=AdvancedCode

### 393. AUTO COMPLETE MILESTONE
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=CX.WIRE.IMAD, action=AdvancedCode

### 394. *DocFX - Add SE Income
- Status: Active
- Events: 1
- Role ID: -1
  - Event: field=FE0115, action=AdvancedCode

### 395. UPDATE: Business Days Between Dates
- Status: Active
- Events: 11
- Role ID: -1
  - Event: field=CX.DATE.NOW, action=AdvancedCode
  - Event: field=CX.DATES.DATE1, action=AdvancedCode
  - Event: field=CX.DATES.DATE2, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode
  - Event: field=CX.FX.DAYS.AT.TRIGGER, action=AdvancedCode

### 396. UPDATE: Milestone Metrics
- Status: Active
- Events: 36
- Role ID: -1
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode
  - Event: field=CX.FX.DATETIME.NOW, action=AdvancedCode

