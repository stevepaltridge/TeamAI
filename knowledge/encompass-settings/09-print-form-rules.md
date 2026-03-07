# Print Form Rules (18)

> **Source**: Bayshore reference data (imported into BE11146040) — BRA extraction 2026-02-21

Print form rules control which document forms are used for printing.

### 1. Rule 1
- ruleID: 1
- ruleName: General Documents
- lastModTime: 2010-12-08T09:20:17
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 2. Rule 2
- ruleID: 2
- ruleName: Brokered and Banked - Wholesale Loans
- lastModTime: 2012-11-13T07:17:32
- advancedCode: [420] = "First Lien"
- status: 1
- Condition: 9
- ConditionState: [420] = "First Lien"
- Condition2: 2,3
- ConditionState2: 
- RoleID: -1

### 3. Rule 3
- ruleID: 3
- ruleName: TRID - Suppress LE after CD JR 20150903
- lastModTime: 2015-09-03T08:31:22
- advancedCode: [3969] = "RESPA-TILA 2015 LE and CD"
- status: 0
- Condition: 9
- ConditionState: [3969] = "RESPA-TILA 2015 LE and CD"
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 4. Rule 4
- ruleID: 4
- ruleName: Change of Circumstances COC Worksheet
- lastModTime: 2016-02-01T11:04:41
- advancedCode: 
- advancedCodeXml: 
- status: 1
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 5. Rule 5
- ruleID: 5
- ruleName: Closing Information Sheet
- lastModTime: 2016-03-14T14:11:59
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 1,2,3,4
- ConditionState2: 
- RoleID: -1

### 6. Rule 6
- ruleID: 6
- ruleName: ARM Index/Margin Print Stop
- lastModTime: 2010-01-22T15:27:57
- advancedCode: [608] = "AdjustableRate"
- advancedCodeXml: 
- status: 1
- Condition: 9
- ConditionState: [608] = "AdjustableRate"
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 7. Rule 7
- ruleID: 7
- ruleName: MIP amount missing on FHA Loans
- lastModTime: 2011-10-11T14:10:09
- advancedCode: 3
- advancedCodeXml: 
- status: 1
- Condition: 2
- ConditionState: 3
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 8. Rule 8
- ruleID: 8
- ruleName: Escrow >80%
- lastModTime: 2011-06-09T12:13:05
- advancedCode: [HUD23] = "" and [353] > 80%
- advancedCodeXml: 
- status: 0
- Condition: 9
- ConditionState: [HUD23] = "" and [353] > 80%
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 9. Rule 9
- ruleID: 9
- ruleName: Show Custom Payment History Letter
- lastModTime: 2012-06-26T12:21:32
- advancedCode: [SERVICE.X8] <> "Not Servicing"
- status: 0
- Condition: 9
- ConditionState: [SERVICE.X8] <> "Not Servicing"
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 10. Rule 10
- ruleID: 10
- ruleName: Restrict Printing REGZ when extra payments exist
- lastModTime: 2010-11-22T11:08:21
- advancedCode: [CX.REGZADDPAYMENTCALC] = "Y"
- status: 1
- Condition: 9
- ConditionState: [CX.REGZADDPAYMENTCALC] = "Y"
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 11. Rule 11
- ruleID: 11
- ruleName: Mandatory All forms All loans
- lastModTime: 2013-02-04T08:23:11
- advancedCode: 
- advancedCodeXml: 
- status: 1
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 12. Rule 12
- ruleID: 12
- ruleName: GFE Print Status
- lastModTime: 2013-02-13T05:39:53
- advancedCode: Not IsEmpty([3148])
- status: 1
- Condition: 9
- ConditionState: Not IsEmpty([3148])
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 13. Rule 13
- ruleID: 13
- ruleName: Title Print Form Rule
- lastModTime: 2012-01-22T12:58:08
- advancedCode: 
- advancedCodeXml: 
- status: 1
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 14. Rule 14
- ruleID: 14
- ruleName: Certificate of Initial Appraisal Delivery Doc
- lastModTime: 2016-03-14T15:12:48
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 15. Rule 15
- ruleID: 15
- ruleName: Certificate of Subsequent Appraisal Delivery Doc
- lastModTime: 2016-03-14T15:14:06
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 16. Rule 16
- ruleID: 16
- ruleName: Certificate of AVM Delivery Doc
- lastModTime: 2016-03-14T15:14:59
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 17. Rule 17
- ruleID: 17
- ruleName: Initial Verbal VOE Doc
- lastModTime: 2016-03-14T15:19:01
- advancedCode: 
- advancedCodeXml: 
- status: 0
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

### 18. Rule 18
- ruleID: 18
- ruleName: CD1 = 3152
- lastModTime: 2021-08-06T13:31:54.043
- advancedCode: 
- advancedCodeXml: 
- status: 1
- Condition: 0
- ConditionState: 
- Condition2: 0,1,2,3,4
- ConditionState2: 
- RoleID: -1

