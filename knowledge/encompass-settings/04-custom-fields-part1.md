# Custom Fields (17357)

This is the complete list of all custom fields in the Encompass instance.

## Summary by Prefix

| Prefix | Count |
|--------|-------|
| Other | 17357 |

## All Custom Fields

| fieldID | description | format | maxLength | calculation |
| --- | --- | --- | --- | --- |
| fieldID | description | format | maxLength | calculation |
| --- | --- | --- | --- | --- |
| CUST01FV | Prequalification | X | 0 |  |
| CUST02FV | Divisional Completion Date | DATE | 0 |  |
| CUST03FV | Divisional Name | AUDIT | 0 | Audit([CUST02FV], 1) |
| CUST04FV | LO Broker Exception Request | DATE | 0 |  |
| CUST05FV | Divisional Exception Decision | YN | 0 |  |
| CUST06FV | Referral Source Detail | DROPDOWNLIST | 0 |  |
| CUST07FV | Low to Moderate Income | X | 0 |  |
| CUST08FV | Secondary Market Y/N | YN | 0 |  |
| CUST09FV | Locked | X | 0 |  |
| CUST100FV | Modification Y/N | YN | 0 |  |
| CUST10FV | New Money Amount | DECIMAL_2 | 0 |  |
| CUST11FV | Original Loan # | STRING | 20 |  |
| CUST12FV | NOIA Option #2 | STRING | 100 |  |
| CUST13FV | Borr ID Number | STRING | 15 |  |
| CUST14FV | NOIA Option #4 | STRING | 100 |  |
| CUST15FV | NOIA Option #5 | STRING | 100 |  |
| CUST16FV | NOIA Option #6 | STRING | 100 |  |
| CUST17FV | MVET | DROPDOWNLIST | 0 |  |
| CUST18FV | Non-Traditional Credit? | YN | 0 |  |
| CUST19FV | Lock Status | STRING | 50 |  |
| CUST20FV | Sent to UW | DROPDOWNLIST | 0 |  |
| CUST21FV | Test Calc | STRING | 30 | Fields(("Log.MS.Date.") & [CX.FX.MSNAME.00]) |
| CUST22FV |  | NONE | 0 | [2] |
| CUST23FV | Borr Primary ID | DROPDOWNLIST | 0 |  |
| CUST24FV | CoBorr Primary ID | DROPDOWNLIST | 0 |  |
| CUST25FV | Adverse Reason 1 | DROPDOWN | 256 |  |
| CUST26FV | Adverse Reason 2 | DROPDOWN | 256 |  |
| CUST27FV | CoBorr ID Number | STRING | 15 |  |
| CUST28FV |  | NONE | 0 |  |
| CUST29FV |  | NONE | 0 |  |
| CUST30FV |  | NONE | 0 |  |
| CUST31FV | Borr Date of Issue ID | STRING | 10 |  |
| CUST32FV | CoBorr Date of Issue ID | STRING | 10 |  |
| CUST33FV | Borr Exp Date of ID | STRING | 10 |  |
| CUST34FV | CoBorr Exp Date of ID | STRING | 10 |  |
| CUST35FV |  | NONE | 0 |  |
| CUST36FV |  | NONE | 0 |  |
| CUST37FV |  | NONE | 0 |  |
| CUST38FV |  | NONE | 0 |  |
| CUST39FV |  | NONE | 0 |  |
| CUST40FV | Borr Country of Employment (Risk) | STRING | 20 | [CX.BORRCOURISK] |
| CUST41FV |  | NONE | 0 |  |
| CUST42FV |  | NONE | 0 |  |
| CUST43FV |  | NONE | 0 |  |
| CUST44FV |  | NONE | 0 |  |
| CUST45FV |  | NONE | 0 |  |
| CUST46FV |  | NONE | 0 |  |
| CUST47FV |  | NONE | 0 |  |
| CUST48FV |  | NONE | 0 |  |
| CUST49FV |  | NONE | 0 |  |
| CUST50FV |  | NONE | 0 |  |
| CUST51FV | Originator Page Message Log | STRING | 2000 |  |
| CUST52FV | Human Readable Date/Time MS.STATUSDATE | STRING | 100 | [MS.STATUSDATE].ToString("dddd, hh:mm tt, MMMM dd, yyyy") |
| CUST53FV | Additional Loan 1 Borrower Name | STRING | 100 |  |
| CUST54FV | Additional loan 2 Borrower Name | STRING | 100 |  |
| CUST55FV | Additional Loan 1 No | STRING | 15 |  |
| CUST56FV | Add Loan 1 Secured By | STRING | 30 |  |
| CUST57FV | Additional Loan 1 Original Balance | DECIMAL_2 | 0 |  |
| CUST58FV | Additional Loan Date 1 | STRING | 10 |  |
| CUST59FV | Assitional Loan 1 Present Balance | DECIMAL_2 | 0 |  |
| CUST60FV | Additional Loan 2 Number | STRING | 15 |  |
| CUST61FV | Additional Loan 2 Secured By | STRING | 30 |  |
| CUST62FV | Additional Loan 2 Original Balance | DECIMAL_2 | 0 |  |
| CUST63FV | Sum([101], [102], [103]) | STRING | 10 | Sum([101], [102], [103]) |
| CUST64FV | Assitional Loan 2 Present Balance | DECIMAL_2 | 0 |  |
| CUST65FV |  | NONE | 0 |  |
| CUST66FV | Allonge Tracking # | STRING | 25 |  |
| CUST67FV | Allonge Sent | DATE | 0 |  |
| CUST68FV | closing package received | DATE | 0 |  |
| CUST69FV | Mers Transfer Date | DATE | 0 |  |
| CUST70FV | FedEx Tracking Number | STRING | 25 |  |
| CUST71FV | Type Name | STRING | 30 |  |
| CUST72FV | CNB Loan Nbr | STRING | 11 | format("###########",[CUST10FV]&[CUST71FV]&[364]) |
| CUST73FV | Phone Application | X | 0 |  |
| CUST74FV | Nor Notes | STRING | 1000 |  |
| CUST75FV |  | NONE | 0 |  |
| CUST76FV | Title Policy received | DATE | 0 |  |
| CUST77FV | Title Policy sent to investor | DATE | 0 |  |
| CUST78FV | Condition 14 Required | STRING | 4 |  |
| CUST79FV | Est Closing time | DROPDOWNLIST | 0 |  |
| CUST80FV | Security Instrument received | DATE | 0 |  |
| CUST81FV | Security Instrument sent to investor | DATE | 0 |  |
| CUST82FV | Origination Construction? | DROPDOWNLIST | 0 |  |
| CUST83FV |  | NONE | 0 |  |
| CUST84FV | TCB Warehouse Bank Used? | DROPDOWNLIST | 0 |  |
| CUST85FV |  | NONE | 0 |  |
| CUST86FV | closing package received | DATE | 0 |  |
| CUST87FV |  | NONE | 0 |  |
| CUST88FV | FTC/RDTC | DATE | 0 |  |
| CUST89FV |  | NONE | 0 |  |
| CUST90FV | LoanLimitCat | DROPDOWNLIST | 0 |  |
| CUST91FV | Condition 3 Received Date | DATE | 0 |  |
| CUST92FV |  | NONE | 0 |  |
| CUST93FV | Condition 5 Received Date | DATE | 0 |  |
| CUST94FV | Is 2nd Subordinated | X | 0 |  |
| CUST95FV | Underwriting | STRING | 40 | [LoanTeamMember.Name.Underwriter] |
| CUST96FV | Time of Closing | STRING | 20 |  |
| CUST97FV | Person Referring | STRING | 50 |  |
| CUST98FV | Copy of CUST02FV | STRING | 50 |  |
| CUST99FV |  | NONE | 0 |  |
| CX.1 | One Test | X | 0 |  |
| CX.1003.DECLARATIONLBOR | 1003 Addendum - Declaration L Borrower Checkbox | STRING | 1 |  |
| CX.1003.DECLARATIONLCOB | 1003 Addendum - Declaration L Co-Borrower Checkbox | STRING | 1 |  |
| CX.1003.DECLARATIONM1BOR | 1003 Addendum - Declaration M1 Borrower Checkbox | STRING | 2 |  |
| CX.1003.DECLARATIONM1COB | 1003 Addendum - Declaration M1 Co-Borrower Checkbox | STRING | 2 |  |
| CX.1003.DECLARATIONM2BOR | 1003 Addendum - Declaration M2 Borrower Checkbox | STRING | 2 |  |
| CX.1003.DECLARATIONM2COB | 1003 Addendum - Declaration M2 Co-Borrower Checkbox | STRING | 2 |  |
| CX.1003.DECLARATIONMBOR | 1003 Addendum - Declaration M Borrower Checkbox | STRING | 1 |  |
| CX.1003.DECLARATIONMCOB | 1003 Addendum - Declaration M Co-Borrower Checkbox | STRING | 1 |  |
| CX.1004D | 1004D - BS pg2 | X | 0 |  |
| CX.10DAYCTCDUE | 10 Day CTC Due Date | DATE | 0 | xDateAdd("d", -10, [763]) |
| CX.1401 | Copy of Loan Program | STRING | 30 |  |
| CX.1401.01 | 1401.01 | STRING | 50 |  |
| CX.1401.02 | 1401.02 | STRING | 50 |  |
| CX.1401.03 | 1401.03 | STRING | 50 |  |
| CX.1401.04 | 1401.04 | STRING | 50 |  |
| CX.14DAYCTCDUE | 14 Day CTC Due Date | DATE | 0 | DateAdd(“D”, +14, [@cx.pur.incontract]) |
| CX.14RIDER | 1-4 Family Rider Trigger | YN | 0 | IIF([1811]="Investor", "Y", IIF([1811]="PrimaryResidence" and [16] > "1", "Y", "N")) |
| CX.1603 | Aggregated Subject Property Address | STRING | 200 | [11]+""+ ", " +""+[12]+""+", " +[14]+""+ " "+[15] |
| CX.1ST.BORBIZNAME | Business name of First Borrower Pair Borrower | STRING | 99 | [FE0102#1] |
| CX.1ST.BORBIZSTATE | Business State of First Borrower Pair Borrower | STRING | 99 | [FE0106#1] |
| CX.1ST.BORFULLNAME | 1st Borrower's Full Name | STRING | 99 | [4000#1] + " " + [4002#1] |
| CX.1ST.BORPREVEMP1 | Previous Employer name of First Borrower Pair Borrower | STRING | 99 | iif([BE0109#1] = "N", [BE0102#1], iif([BE0209#1] = "N", [BE0202#1], iif([BE0309#1] = "N", [BE0302#1] |
| CX.1ST.BORPREVEMP2 | Previous Employer name of First Borrower Pair Borrower | STRING | 99 | iif(instr([BE0109#1] & [BE0209#1] & [BE0309#1] & [BE0409#1] & [BE0509#1] & [BE0609#1] & [BE0709#1] & |
| CX.1ST.BORSELFEMP | 1st Borrower Self Employed | STRING | 99 | [BE0115#1] |
| CX.1ST.COBORBIZNAME | Business Name of First Borrower Pair CoBorrower | STRING | 99 | [FE0202#1] |
| CX.1ST.COBORBIZSTATE | Business State of First Borrower Pair CoBorrower | STRING | 99 | [FE0206#1] |
| CX.1ST.COBORFULLNAME | 1st CoBorrower's Full Name | STRING | 99 | [4004#1] + " " + [4006#1] |
| CX.1ST.COBORPREVEMP1 | Previous Employer of First Borrower Pair CoBorrower | STRING | 99 | iif([CE0109#1] = "N", [CE0102#1], iif([CE0209#1] = "N", [CE0202#1], iif([CE0309#1] = "N", [CE0302#1] |
| CX.1ST.COBORPREVEMP2 | Previous Employer of First Borrower Pair CoBorrower | STRING | 99 | iif(instr([CE0109#1] & [CE0209#1] & [CE0309#1] & [CE0409#1] & [CE0509#1] & [CE0609#1] & [CE0709#1] & |
| CX.1ST.COBORSELFEMP | 1st CoBorrower Self Employed | STRING | 99 | [CE0215#1] |
| CX.1STBORROWER | 1st Borrower | STRING | 100 | [1868#1] |
| CX.1STCOBORROWER | 1st Co-Borrower | STRING | 100 | [1873#1] |
| CX.1STPAY.HOA.ACTUAL | HOA payment on first payment letter | DECIMAL_2 | 0 | 0 |
| CX.1STPAY.HOI.ACTUAL | HOI payment on first payment letter | DECIMAL_2 | 0 | [230] |
| CX.1STPAY.MERS.TRANS.DATE | MERS # Tarsnfer Date | DATE | 0 |  |
| CX.1STPAY.MI.ACTUAL | MI payment on first payment letter | DECIMAL_2 | 0 | [232] |
| CX.1STPAY.OTHER.ACTUAL | Other amounts on first payment letter | DECIMAL_2 | 0 | 0 |
| CX.1STPAY.PI.ACTUAL | First Pay Letter P&I | DECIMAL_2 | 0 | [228] |
| CX.1STPAY.TAXES.ACTUAL | Taxes payment on first payment letter | DECIMAL_2 | 0 | [1405] |
| CX.1STPAY.TOTAL.ACTUAL | Total payment on first payment letter | DECIMAL_2 | 0 | [CX.1STPAY.PI.ACTUAL]+[CX.1STPAY.HOI.ACTUAL]+[CX.1STPAY.TAXES.ACTUAL]+[CX.1STPAY.MI.ACTUAL]+[CX.1STP |
| CX.1STPAYDT.2DIGITDAYPATTERN | dd | STRING | 2 |  |
| CX.1STPAYDT.2DIGITYEARPATTERN | yy | STRING | 2 |  |
| CX.1STPAYDT.DAYALPHAPATTERN | dddd | STRING | 10 |  |
| CX.1STPAYDT.DAYPATTERN | st, nd, rd, th | STRING | 4 |  |
| CX.1STPAYDT.DAYSPELLEDPATTERN | alpha day | STRING | 20 |  |
| CX.1STPAYDT.LONGDATEPATTERN | Day, month year | STRING | 150 |  |
| CX.1STPAYDT.MONTHDAYYEARPATTERN | MMMM, dd yyyy | STRING | 30 |  |
| CX.1STPAYDT.MONTHPATTERN | MMMM | STRING | 20 |  |
| CX.1STPAYDT.MONTHYEARPATTERN | MMMM, yyyy | STRING | 30 |  |
| CX.1STPAYDT.SHORTDATEPATTERN | M/d/yyyy | STRING | 10 |  |
| CX.1STPAYDT.YEARFORMAT | YYYY | STRING | 4 |  |
| CX.1STPAYDT.YEARTEXT | Year in Text Format | STRING | 50 |  |
| CX.2 | Two Test | X | 0 |  |
| CX.2.01 | 2.01 | DECIMAL_2 | 0 |  |
| CX.2.02 | 2.02 | DECIMAL_2 | 0 |  |
| CX.2.03 | 2.03 | DECIMAL_2 | 0 |  |
| CX.2.04 | 2.04 | DECIMAL_2 | 0 |  |
| CX.200 | Adj Orig % | DECIMAL_4 | 0 | mult([cx.212],100) |
| CX.201 | Lender Paid-Fee % | DECIMAL_4 | 0 | mult([cx.150],100) |
| CX.202 | Loan Officer Concession % | DECIMAL_4 | 0 |  |
| CX.203 | Lock Desk Subsidy % | DECIMAL_4 | 0 |  |
| CX.204 | Total 2ndary Adjust % | DECIMAL_4 | 0 | sumany([cx.202],[cx.203]) |
| CX.205 | 2ndary Adjust $ | DECIMAL_2 | 0 | DIV([cx.214],100) |
| CX.206 | Lender Credit % (1647) | DECIMAL_4 | 0 | div([1647],[2]) |
| CX.208 | Net Orig $ | DECIMAL_2 | 0 | Diff([cx.215],[cx.216]) |
| CX.209 | Off Par Price % | DECIMAL_3 | 0 | abs(sumany([2218]-100)) |
| CX.210 | Off Par Lock $ | DECIMAL_2 | 0 | mult([cx.211],[2]) |
| CX.213 | Net Orig Charge % | DECIMAL_4 | 0 | mult([cx.207],100) |
| CX.217 | Lock Desk Subsiy $ | DECIMAL_2 | 0 | mult([cx.218],[2]) |
| CX.219 | LO Cure Bank Adj $ | DECIMAL_2 | 0 | mult([cx.220],[2]) |
| CX.221 | Required Price % | DECIMAL_4 | 0 | sumany([cx.230],100) |
| CX.224 | Final Price % | DECIMAL_4 | 0 | sum([cx.213],[2218]) |
| CX.225 | Net Price/Fee Variance $ | DECIMAL_2 | 0 | mult([cx.243],[2]) |
| CX.230 | Origination Charge % | DECIMAL_4 | 0 | mult([cx.229],100) |
| CX.231 | Lock Validation DRPDN | DROPDOWNLIST | 0 |  |
| CX.2316.OLD | OLD AUS # | STRING | 25 |  |
| CX.232 | Loan Officer Revenue Conf | DROPDOWNLIST | 0 |  |
| CX.233 | LO Comp Reduction | DECIMAL_2 | 0 | IIF([cx.225]>1,DIFF([cx.225],[#cx.219]),0) |
| CX.234 | LO Cure Bank Withdraw | DECIMAL_2 | 0 | iif([cx.219]>0,[cx.219],0) |
| CX.235 | LO Cure Bank Deposit | DECIMAL_2 | 0 | iif([cx.219]<0,abs([cx.219]),0) |
| CX.237 | Hud 1 pg 1 Lender Credit Total | DECIMAL_2 | 0 | sumany([l145],[l149],[l153]) |
| CX.239 | Hud 1 Pg 1 Lend Credit % | DECIMAL_4 | 0 | mult([cx.238],100) |
| CX.246 | Orig Disc Charge % | DECIMAL_4 | 0 | mult([cx.244],100) |
| CX.247 | Orig Credit % | DECIMAL_4 | 0 | mult([cx.245],100) |
| CX.2DIGITDAYPATTERN | dd | STRING | 2 |  |
| CX.2DIGITYEARPATTERN | yy | STRING | 2 |  |
| CX.2ND.APPRSL.FNDG | 2nd Review Appraisal Finding | STRING | 5000 |  |
| CX.2ND.APPRSL.REV.BY.INI | 2nd Review Appraisal Initial Review By | STRING | 100 |  |
| CX.2ND.APPRSL.REVIEWED.BY | 2nd Review Appraisal Reviewed By | AUDIT | 0 | Audit([CX.2ND.APPRSL.SEVERITY], 1) |
| CX.2ND.APPRSL.REVIEWED.BY.2 | 2nd Review Appraisal Reviewed By V2 | AUDIT | 0 | Audit([CX.2ND.APPRSL.SEVERITY.2], 1) |
| CX.2ND.APPRSL.REVIEWED.DT | 2nd Review Appraisal Reviewed Date | DATE | 0 |  |
| CX.2ND.APPRSL.SEVERITY | 2nd Review Appraisal Severity | DROPDOWNLIST | 0 |  |
| CX.2ND.APPRSL.SEVERITY.2 | 2nd Review Appraisal Severity v2 | DROPDOWNLIST | 0 |  |
| CX.2ND.BORBIZNAME | Business name of Second Borrower Pair Borrower | STRING | 99 | [FE0102#2] |
| CX.2ND.BORBIZSTATE | Business State of Second Borrower Pair Borrower | STRING | 99 | [FE0106#2] |
| CX.2ND.BORFULLNAME | 2nd Borrower's Full Name | STRING | 99 | [4000#2] + " " + [4002#2] |
| CX.2ND.BORPREVEMP1 | Previous Employer name of Second Borrower Pair Borrower | STRING | 99 | iif([BE0109#2] = "N", [BE0102#2], iif([BE0209#2] = "N", [BE0202#2], iif([BE0309#2] = "N", [BE0302#2] |
| CX.2ND.BORPREVEMP2 | Previous Employer name of First Borrower Pair Borrower | STRING | 99 | iif(instr([BE0109#2] & [BE0209#2] & [BE0309#2] & [BE0409#2] & [BE0509#2] & [BE0609#2] & [BE0709#2] & |
| CX.2ND.BORSELFEMP | 2nd Borrower Self Employed | STRING | 99 | [BE0115#2] |
| CX.2ND.COBORBIZNAME | Business Name of Second Borrower Pair CoBorrower | STRING | 99 | [FE0202#2] |
| CX.2ND.COBORBIZSTATE | Business State of Second Borrower Pair CoBorrower | STRING | 99 | [FE0206#2] |
| CX.2ND.COBORFULLNAME | 2nd CoBorrower's Full Name | STRING | 99 | [4004#2] + " " + [4006#2] |
| CX.2ND.COBORPREVEMP1 | Previous Employer of Second Borrower Pair CoBorrower | STRING | 99 | iif([CE0109#2] = "N", [CE0102#2], iif([CE0209#2] = "N", [CE0202#2], iif([CE0309#2] = "N", [CE0302#2] |
| CX.2ND.COBORPREVEMP2 | Previous Employer of Second Borrower Pair CoBorrower | STRING | 99 | iif(instr([CE0109#2] & [CE0209#2] & [CE0309#2] & [CE0409#2] & [CE0509#2] & [CE0609#2] & [CE0709#2] & |
| CX.2ND.COBORSELFEMP | 2nd CoBorrower Self Employed | STRING | 99 | [CE0215#2] |
| CX.2ND.CONTRACT.FNDG | 2nd Review Contract Finding | STRING | 5000 |  |
| CX.2ND.CONTRACT.REV.BY.INI | 2nd Review In Contract Initial Review By | STRING | 100 |  |
| CX.2ND.CONTRACT.REVIEWED.BY | 2nd Review Contract Reviewed By | AUDIT | 0 | Audit([CX.2ND.CONTRACT.SEVERITY], 1) |
| CX.2ND.CONTRACT.REVIEWED.DT | 2nd Review Contract Reviewed Date | DATE | 0 |  |
| CX.2ND.CONTRACT.RVWD.BY.2 | 2nd Review Contract Reviewed By v2 | AUDIT | 0 | Audit([CX.2ND.CONTRACT.SEVERITY.2], 1) |
| CX.2ND.CONTRACT.SEVERITY | 2nd Review Contract Severity | DROPDOWNLIST | 0 |  |
| CX.2ND.CONTRACT.SEVERITY.2 | 2nd Review Contract Severity v2 | DROPDOWNLIST | 0 |  |
| CX.2ND.DENIAL.BY | 2nd Level Denial By | STRING | 256 |  |
| CX.2ND.DENIAL.DATE | 2nd Level Denial Date | DATE | 0 |  |
| CX.2ND.DENIAL.FNDG | 2nd Review Denial Finding | STRING | 5000 |  |
| CX.2ND.DENIAL.REVIEWED.BY | 2nd Review Denial Reviewed By | AUDIT | 0 | Audit([CX.2ND.DENIAL.REVIEWED.DT], 1) |
| CX.2ND.DENIAL.REVIEWED.DT | 2nd Review Denial Reviewed Date | DATE | 0 |  |
| CX.2ND.FNLAPPRVL.FNDG | 2nd Review Final Approval Finding | STRING | 5000 |  |
| CX.2ND.FNLAPPRVL.REV.BY.INI | 2nd Review Final Approval Initial Review By | STRING | 100 |  |
| CX.2ND.FNLAPPRVL.REVIEWED.BY | 2nd Review Final Approval Reviewed By | AUDIT | 0 | Audit([CX.2ND.FNLAPPRVL.SEVERITY], 1) |
| CX.2ND.FNLAPPRVL.REVIEWED.DT | 2nd Review Final Approval Reviewed Date | DATE | 0 |  |
| CX.2ND.FNLAPPRVL.RVWD.BY.2 | 2nd Review Final Approval Reviewed By V2 | AUDIT | 0 | Audit([CX.2ND.FNLAPPRVL.SEVERITY.2], 1) |
| CX.2ND.FNLAPPRVL.SEVERITY | 2nd Review Final Approval Severity | DROPDOWNLIST | 0 |  |
| CX.2ND.FNLAPPRVL.SEVERITY.2 | 2nd Review Final Approval Severity v2 | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.010 | Redwood Mortgage Corporation Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.020 | Stearns Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.030 | BB&T Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.040 | Bond Loan Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.050 | PennyMac Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.060 | Fannie Mae Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.070 | Ginnie Mae Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.080 | Idaho Housing & Finance Corporation | X | 0 |  |
| CX.2ND.INV.INELIG.090 | NationStar Mortgage Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.100 | New Mexico Finance Authority Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.110 | Provident Funding Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.120 | SunTrust Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.130 | US Bank Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.140 | Wells Fargo Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.150 | Weststar Mortgage Corporation Ineligible | X | 0 |  |
| CX.2ND.INV.INELIG.RES.010 | Redwood Mortgage Corporation Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.020 | Stearns Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.030 | BB&T Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.040 | Bond Loan Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.050 | PennyMac Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.060 | Fannie Mae Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.070 | Ginnie Mae Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.080 | Idaho Housing & Finance Corporation Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.090 | NationStar Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.100 | New Mexico Finance Authority Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.110 | Provident Funding Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.120 | SunTrust Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.130 | US Bank Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.140 | Wells Fargo Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.INV.INELIG.RES.150 | Weststar Mortgage Corporation Ineligible Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.LEVEL.REVIEW.NEEDED | 2nd Level Review Needed | DROPDOWNLIST | 0 |  |
| CX.2ND.LEVEL.REVIEW.RQST.DT | 2nd Level Review Request Date | AUDIT | 0 | Audit([CX.2ND.LEVEL.REVIEW.NEEDED], 2) |
| CX.2ND.LVL.REASON | 2nd Level Review Reason | DROPDOWNLIST | 0 |  |
| CX.2ND.LVL.SUP.REVIEW | Supervisor Reviewed with UW | X | 0 |  |
| CX.2ND.LVL.SUP.REVIEW.DT | Supervisor Reviewed with UW | DATE | 0 |  |
| CX.2ND.LVL.UW.MANAGER.EMAIL | 2nd Level UW Supervisor Email | STRING | 100 | iif([LoanTeamMember.Email.UW 2nd Level Review] = "aortiz-graves@kellermortgage.com", "cpolaco@keller |
| CX.2ND.PA2.FNDG | 2nd Review PA2 Finding | STRING | 5000 |  |
| CX.2ND.PA2.REVIEWED.BY | 2nd Review PA2 Reviewed By | AUDIT | 0 | Audit([CX.2ND.PA2.SEVERITY], 1) |
| CX.2ND.PA2.REVIEWED.BY.2 | 2nd Review PA2 Reviewed By V2 | AUDIT | 0 | Audit([CX.2ND.PA2.SEVERITY.2], 1) |
| CX.2ND.PA2.REVIEWED.BY.INI | 2nd Review PA2 Initial Review By | STRING | 100 |  |
| CX.2ND.PA2.REVIEWED.DT | 2nd Review PA2 Reviewed Date | DATE | 0 |  |
| CX.2ND.PA2.SEVERITY | 2nd Review PA2 Severity | DROPDOWNLIST | 0 |  |
| CX.2ND.PA2.SEVERITY.2 | 2nd Review PA2 Severity v2 | DROPDOWNLIST | 0 |  |
| CX.2ND.PROB.APPR.REVIEWED.BY | 2nd Review Exception Reviewed By | AUDIT | 0 | Audit([CX.2ND.PROB.APPR.REVIEWED.DT], 1) |
| CX.2ND.PROB.APPR.REVIEWED.DT | 2nd Review Problem Appraisal Reviewed Date | DATE | 0 |  |
| CX.2ND.PROB.APPRSL.FNDG | 2nd Review Problem Appraisal Finding | STRING | 5000 |  |
| CX.2ND.RQST.REASON | 2nd Level Review Request Reason | STRING | 500 |  |
| CX.2ND.SSR.EXC.FNDG | 2nd Review SSR Exception Finding | STRING | 5000 |  |
| CX.2ND.SSR.EXC.REVIEWED.BY | 2nd Review SSR Exception Reviewed By | AUDIT | 0 | Audit([CX.2ND.SSR.EXC.REVIEWED.DT], 1) |
| CX.2ND.SSR.EXC.REVIEWED.DT | 2nd Review SSR Exception Reviewed Date | DATE | 0 |  |
| CX.2ND.TRNG.FNDG | CER UW Supervisor Finding | STRING | 5000 |  |
| CX.2ND.TRNG.REVIEW.DT | CER UW Supervisor  Review Date | DATE | 0 |  |
| CX.2ND.TRNG.REVIEWED.BY | CER UW Supervisor Review By | AUDIT | 0 | Audit([CX.2ND.TRNG.FNDG], 1) |
| CX.2ND.TRNG.SEVERITY | 2nd Review Training Severity | DROPDOWNLIST | 0 |  |
| CX.2ND.VTYPE | Property Valuation Type | DROPDOWNLIST | 0 |  |
| CX.2ND.XCPTN.FNDG | 2nd Review Exception Finding | STRING | 5000 |  |
| CX.2ND.XCPTN.REVIEWED.BY | 2nd Review Exception Reviewed By | AUDIT | 0 | Audit([CX.2ND.XCPTN.REVIEWED.DT], 1) |
| CX.2ND.XCPTN.REVIEWED.DT | 2nd Review Exception Reviewed Date | DATE | 0 |  |
| CX.2NDBORROWER | 2nd Borrower | STRING | 75 | [1868#2] |
| CX.2NDCOBORROWER | 2nd Coborrower | STRING | 75 | [1873#2] |
| CX.300 | Secondary Adjust Comment Box | STRING | 1000 |  |
| CX.350 | LO Revenue Confirmation Changed to Unconfirmed | AUDIT | 0 | Audit([cx.232], 2) |
| CX.351 | LO Rev Confirmation Change - User Stamp | AUDIT | 0 | Audit([cx.232], 1) |
| CX.3624.TYPE | AIR Delivery Method | STRING | 20 |  |
| CX.3DAYNOTIFY | Notify LO if disclosures due < 1 day | YN | 0 | IIF((Calendar.AddBusinessDays(Today, 1,false) = [@3143] OR Today = [@3143]) AND IsEmpty([3152]) AND  |
| CX.3DAYNOTIFY.PASTDUE | Disclosures are past due | YN | 0 | IIF(Today > [@3143] AND IsEmpty([3152]) AND [3969].Contains("2015"),"Y","N") |
| CX.3RDBORROWER | 3rd Borrower | STRING | 75 | [1868#3] |
| CX.3RDCOBORROWER | 3rd CoBorrower | STRING | 75 | [1873#3] |
| CX.432.01 | 432.01 | INTEGER | 0 | iif(IsDate([@CX.761.01])and IsDate([CX.762.01]),DateDIFF("d",[@CX.761.01],[@CX.762.01]),"") |
| CX.432.02 | 432.02 | INTEGER | 0 | iif(IsDate([@CX.761.02])and IsDate([@CX.762.02]),DateDIFF("d",[@CX.761.02],[@CX.762.02]),"") |
| CX.432.03 | 432.03 | INTEGER | 0 | iif(IsDate([@CX.761.02])and IsDate([@CX.762.02]),DateDIFF("d",[@CX.761.03],[@CX.762.03]),"") |
| CX.432.04 | 432.04 | INTEGER | 0 | DateDIFF("d",[@CX.761.04],[@CX.762.04]) |
| CX.432.ARCHIVE.01 | 432.ARCHIVE.01 | INTEGER | 0 | iif(IsDate([@CX.761.01])and IsDate([CX.762.01]),ABS(DateDIFF("d",[@CX.762.ARCHIVE.01],[@CX.761.ARCHI |
| CX.432.ARCHIVE.02 | 432.ARCHIVE.02 | INTEGER | 0 | iif(IsDate([@CX.761.01])and IsDate([CX.762.01]),ABS(DateDIFF("d",[@CX.CC.COC.RATELOCK.EXT.DATE],[@CX |
| CX.432.ARCHIVE.03 | 432.ARCHIVE.03 | INTEGER | 0 | iif(IsDate([@CX.761.01])and IsDate([CX.762.01]),ABS(DateDIFF("d",[@CX.CC.COC.LOCK.RELOCK.EXP],[@CX.C |
| CX.4506P1 | 4506 Pair 1 | STRING | 4 | IIf([IR0101#1] = "" or [IR0201#1] = "" or [IR0301#1] = "", "N", "Y") |
| CX.4506P2 | 4506 Pair 2 | STRING | 4 | IIf([4002#2] = "", "N/A", IIf([IR0101#2] = "" or [IR0201#2] = "" or [IR0301#2] = "", "N", "Y")) |
| CX.4506P3 | 4506 Pair 3 | STRING | 4 | IIf([4002#3] = "", "N/A", IIf([IR0101#3] = "" or [IR0201#3] = "" or [IR0301#3] = "", "N", "Y")) |
| CX.4506P4 | 4506 Pair 4 | STRING | 4 | IIf([4002#4] = "", "N/A", IIf([IR0101#4] = "" or [IR0201#4] = "" or [IR0301#4] = "", "N", "Y")) |
| CX.4THBORROWER | 4th Borrower | STRING | 75 | [1868#4] |
| CX.4THCOBORROWER | 4th CoBorrower | STRING | 75 | [1873#4] |
| CX.5CUW.CAPACITY.LO | 5Cs of Undewriting - Capacity (Loan Officer) | STRING | 500 |  |
| CX.5CUW.CAPACITY.LP | 5C's of Underwriting - Capacity (Loan Processor) | STRING | 500 |  |
| CX.5CUW.CAPITAL.LO | 5C's of Underwriting - Capital (Loan Officer) | STRING | 500 |  |
| CX.5CUW.CAPITAL.LP | 5C's of Underwriting - Capital (Loan Processor) | STRING | 500 |  |
| CX.5CUW.CHARACTER.LO | 5C's of Underwriting - Character (Loan Officer) | STRING | 500 |  |
| CX.5CUW.CHARACTER.LP | 5C's of Underwriting - Character (Loan Processor) | STRING | 500 |  |
| CX.5CUW.COLLATERAL.LO | 5C's of Underwriting - Collateral (Loan Officer) | STRING | 500 |  |
| CX.5CUW.COLLATERAL.LP | 5C's of Underwriting - Colateral (Loan Processor) | STRING | 500 |  |
| CX.5CUW.COMPLIANCE.LO | 5C's of Underwriting - Compliance (Loan Officer) | STRING | 500 |  |
| CX.5CUW.COMPLIANCE.LP | 5C's of Underwriting - Compliance (Loan Processor) | STRING | 500 |  |
| CX.761.01 | 761.01 | DATE | 0 |  |
| CX.761.02 | 761.02 | DATE | 0 |  |
| CX.761.03 | 761.03 | DATE | 0 |  |
| CX.761.04 | 761.04 | DATE | 0 |  |
| CX.761.ARCHIVE.01 | 761.ARCHIVE.01 | DATE | 0 |  |
| CX.761.ARCHIVE.02 | 761.ARCHIVE.02 | DATE | 0 |  |
| CX.761.ARCHIVE.03 | 761.ARCHIVE.03 | DATE | 0 |  |
| CX.761.INT | 761 integer | INTEGER | 0 | IIF([@761].ToOADate() = 0, 999999, [@761].ToOADate()) |
| CX.761.LOCKDATE.1 | 1st Lock Date | DATE | 0 |  |
| CX.762.01 | 762.01 | DATE | 0 |  |
| CX.762.02 | 762.02 | DATE | 0 |  |
| CX.762.03 | 762.03 | DATE | 0 |  |
| CX.762.04 | 762.04 | DATE | 0 |  |
| CX.762.ARCHIVE.01 | 762.ARCHIVE.01 | DATE | 0 |  |
| CX.763.LESS4DAYS | Closing Date is less than 4 days out Please adjust | STRING | 9 |  |
| CX.7DAYCTCDUE | 7 Day CTC Due By | DATE | 0 | xDateAdd("d", -7, [763]) |
| CX.AA.COMPLETED | AA Completed | X | 0 |  |
| CX.AA.COMPLETED.BY | AA Completed By | STRING | 99 |  |
| CX.AA.COMPLETED.DT | AA Completed Date | DATE | 0 |  |
| CX.AA.DECLINE.CMPLT | AA Decline Completed | X | 0 |  |
| CX.AA.DECLINE.CMPLT.BY | AA Decline Completed By | STRING | 99 |  |
| CX.AA.DECLINE.CMPLT.DATE | AA Decline Completed Date | DATE | 0 |  |
| CX.AA.GO | Adverse Action Email Trigger | X | 0 |  |
| CX.AA.REQUEST | AA Requested | X | 0 |  |
| CX.AA.REQUEST.REASON.CMMNT | AA Request Reason Comments | STRING | 2500 |  |
| CX.AA.REQUEST.TYPE | AA Request Type | DROPDOWNLIST | 0 |  |
| CX.AA.REQUESTED.BY | AA Requested By | STRING | 99 |  |
| CX.AA.REQUESTED.DT | AA Requested Date | DATE | 0 |  |
| CX.AA.RETURN.FOR.REWORK | Return to UW for Re-work | X | 0 |  |
| CX.AA.RETURN.FOR.REWORK.BY | AA Return for Rework By | STRING | 99 |  |
| CX.AA.RETURN.FOR.REWORK.DT | Return to UW for Rework Date | DATE | 0 |  |
| CX.AA.SENT.BY | Adverse Action Notice Sent By | STRING | 99 |  |
| CX.AA.SENT.DATE | Adverse Action Notice Sent Date | DATE | 0 |  |
| CX.AA.UW.COMMENTS | AA UW Comments | STRING | 2500 |  |
| CX.AA.UW.REQUEST.CMPLT | UW Adverse Request Completed | X | 0 |  |
| CX.AA.UW.RQST.CMPLT.BY | UW Adverse Action Request By | STRING | 99 |  |
| CX.AA.UW.RQST.CMPLT.DT | UW Adverse Action Request Date | DATE | 0 |  |
| CX.AA.UW.SUP.DENIAL | UW Supervisor Denial Review Complete | X | 0 |  |
| CX.AA.UW.SUP.DENIAL.BY | UW Supervisor Denial By | STRING | 99 |  |
| CX.AA.UW.SUP.DENIAL.DATE | UW Supervisor Denial Date | DATE | 0 |  |
| CX.AAF.RESULT | Adverse Action Form Result | DROPDOWNLIST | 0 |  |
| CX.AAF.REVIEWERNAME | Adverse Action Reviewer Name | AUDIT | 0 | Audit([cx.aaf.result], 0) |
| CX.AC.401K.WITHDRAWL | Terms of 401k Withdrawl | X | 0 |  |
| CX.AC.ACCESS.LETTER | Full Access Letter | X | 0 |  |
| CX.AC.ASSET.DEPLETION | Asset Depletion | X | 0 |  |
| CX.AC.ASSETS | Assets Statements | X | 0 |  |
| CX.AC.BANKREF | Bank Reference Letter | X | 0 |  |
| CX.AC.BANKREF.AMOUNT | Bank Reference Letter Amount | DECIMAL_2 | 0 |  |
| CX.AC.BROKER.LOE | Broker Explanation Letter | X | 0 |  |
| CX.AC.BUSINESS.ASSETS | Business Assets Statements | X | 0 |  |
| CX.AC.CDSOLD | CD for Sold Property | X | 0 |  |
| CX.AC.DOWN.PAYMENT | Required Down Payment | X | 0 |  |
| CX.AC.DOWNPAYMENT.AMOUNT | Down Payment Amount | DECIMAL_2 | 0 |  |
| CX.AC.DU.ASSET | DU Asset Amount | DECIMAL_2 | 0 |  |
| CX.AC.DU.ASSETS | DU Assets and Reserves | X | 0 |  |
| CX.AC.EMD.CHECK | Copy of EMD Check | X | 0 |  |
| CX.AC.EMD.CLEAR | EMD Clearance | X | 0 |  |
| CX.AC.ESCROW | Escrow Letter | X | 0 |  |
| CX.AC.ESCROW.AMOUNT | Escrow Letter Amount | DECIMAL_2 | 0 |  |
| CX.AC.GIFT.AMOUNT | Gift Amount | DECIMAL_2 | 0 |  |
| CX.AC.GIFT.LETTER | Gift Letter | X | 0 |  |
| CX.AC.LOE.DEPOSITS | LOE Large Deposits | X | 0 |  |
| CX.AC.NEW.SECOND | New Second Mortgage | X | 0 |  |
| CX.AC.PROCEEDS | Proceeds from Sale | X | 0 |  |
| CX.AC.PROCEEDS.AMOUNT | Proceeds from Sale Amount | DECIMAL_2 | 0 |  |
| CX.AC.SECOND.AMOUNT | New Second Amount | DECIMAL_2 | 0 |  |
| CX.AC.SOURCE | Source of Funds | X | 0 |  |
| CX.AC.SOURCE.AMOUNT | Source of Funds Amount | DECIMAL_2 | 0 |  |
| CX.AC.WIRE | Wire Transfer Documents | X | 0 |  |
| CX.ACC.98 | Upfront Lock-in Fee Amount | DECIMAL_2 | 0 |  |
| CX.ACCOUNT.OFFICER | Account Officer | DROPDOWNLIST | 0 |  |
| CX.ACCOUNTING.CODE | Accounting Code | STRING | 5 |  |
| CX.ACCT.CCSERVICEADDRESS | Address of Customer Care | STRING | 99 |  |
| CX.ACCT.CCSERVICEATTENTION | Attention for Customer Care | STRING | 99 |  |
| CX.ACCT.CCSERVICEHOURS1 | Service Hours of Customer Care | STRING | 99 |  |
| CX.ACCT.CCSERVICEPHONE | Phone Number of Customer Care | PHONE | 0 |  |
| CX.ADDL.FUNDS.SENT | Additional Funds Sent | DECIMAL_2 | 0 |  |
| CX.ADDL.FUNDS.SENT.BY | Additional Funds Sent By | STRING | 50 |  |
| CX.ADDL.FUNDS.SENT.DATE | Additional Funds Sent Date | DATE | 0 |  |
| CX.ADESK.APPOINTMENT | Appraisal Appointment Date | DATE | 0 |  |
| CX.ADESK.APPOINTMENT.CMT | Appraisal Appointment Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.ACCEPTED | Appraisal Order Accepted Date | DATE | 0 |  |
| CX.ADESK.APPRSL.ACCEPTED.CMT | Appraisal Accepted Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.ACTUAL.FEE | Appraisal - Actual Appraisal Fee | DECIMAL_2 | 0 |  |
| CX.ADESK.APPRSL.CMTS | Appraisal Req Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.DUE | Appraisal Due Date | DATE | 0 |  |
| CX.ADESK.APPRSL.DUE.CMT | Appraisal Due Date Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.EFFECTIVE | Appraisal Effective Date | DATE | 0 |  |
| CX.ADESK.APPRSL.NEW.CONST | Apprsl Req New Construction? | YN | 0 |  |
| CX.ADESK.APPRSL.ORDERED | Appraisal - Ordered Date | DATE | 0 |  |
| CX.ADESK.APPRSL.ORDERED.CMTS | Appraisal Ordered Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.PAYMENT | Apprsl Req Payment Type | DROPDOWNLIST | 0 |  |
| CX.ADESK.APPRSL.PLANS.SPEC | Apprsl Req Plans & Specs | STRING | 5000 |  |
| CX.ADESK.APPRSL.RECVED | Appraisal Received | DATE | 0 |  |
| CX.ADESK.APPRSL.RECVED.CMT | Appraisal Received Comments | STRING | 5000 |  |
| CX.ADESK.APPRSL.REQ.BY | Appraisal Req By | STRING | 50 |  |
| CX.ADESK.APPRSL.REQ.ON | Appraisal Req On | DATE | 0 |  |
| CX.ADESK.APPRSL.RUSH | Appraisal Req Rush | YN | 0 |  |
| CX.ADESK.APPRSL.VERBAL.IOP | Appraisal Verbal Intent to Proceed | YN | 0 |  |
| CX.ADESK.CONTRACT.RECVED | Appraisal Purchase Contract Received | DATE | 0 | [Document.DateReceived.Purchase Contract] |
| CX.ADESK.DAYB4CONTACT | Appraisal Day before Contact Date | DATE | 0 | Calendar.AddBusinessDays
([CX.ADESK.APPRSL.DUE],-1, true) |
| CX.ADESK.DAYB4CONTACT.CMT | Appraisal Day B4 Contact Comments | STRING | 5000 |  |
| CX.ADESK.DAYDUECONTACT | Appraisal Day Due Contact Date | DATE | 0 | [CX.ADESK.APPRSL.DUE] |
| CX.ADESK.DAYDUECONTACT.CMT | Appraisal Day Due Contact Comments | STRING | 5000 |  |
| CX.ADESK.INSPECT.DUE.CMT | Appraisal - Final Inspection Due Comments | STRING | 5000 |  |
| CX.ADESK.INSPECT.DUE.DATE | Appraisal - Final Inspection Due Date | DATE | 0 |  |
| CX.ADESK.INSPECT.FINAL | Appraisal Final/Repair Inspection | X | 0 |  |
| CX.ADESK.INSPECT.FINALFEE | Appraisal - Final Inspection Fee | DECIMAL_2 | 0 |  |
| CX.ADESK.INSPECT.FOUNDATION | Appraisal Foundation Inspection | X | 0 |  |
| CX.ADESK.INSPECT.ORDERED | Appraisal Inspection Ordered Date | DATE | 0 |  |
| CX.ADESK.INSPECT.ORDERED.CMT | Appraisal Inspection Ordered Comments | STRING | 5000 |  |
| CX.ADESK.INSPECT.OTHER | Appraisal Other Inspection | X | 0 |  |
| CX.ADESK.INSPECT.OTHER.DESC | Appraisal Other Inspection Description | STRING | 50 |  |
| CX.ADESK.INSPECT.RECVED | Appraisal Inspection Received Date | DATE | 0 |  |
| CX.ADESK.INSPECT.RECVED.CMT | Appraisal Inspection Received Comments | STRING | 5000 |  |
| CX.ADESK.INSPECT.REQ.BY | Appraisal Inspection Req By | STRING | 50 |  |
| CX.ADESK.INSPECT.REQ.CMT | Appraisal Inspection Req Comments | STRING | 5000 |  |
| CX.ADESK.INSPECT.REQ.ON | Appraisal Inspection Req On | DATE | 0 |  |
| CX.ADESK.INSPECT.ROOF | Appraisal Roof Inspection | X | 0 |  |
| CX.ADESK.INSPECT.SEPTIC | Appriasal Septic Inspection | X | 0 |  |
| CX.ADESK.INSPECT.WELLWATER | Appraisal Well Water Inspection | X | 0 |  |
| CX.ADESK.INSPECTION.REQ | Appraisal Inspection Required | YN | 0 |  |
| CX.ADESK.PASTDUECONTACT | Appraisal Past Due Contact Date | DATE | 0 | Calendar.AddBusinessDays
([CX.ADESK.APPRSL.DUE],1, true) |
| CX.ADESK.PASTDUECONTACT.CMT | Appraisal Past Due Contact Comments | STRING | 5000 |  |
| CX.ADESK.RECON.FOLLOWUP | Appraisal Reconsideration Follow-up Date | DATE | 0 |  |
| CX.ADESK.RECON.FOLLOWUP.CMT | Appraisal Reconsideration Followup Comments | STRING | 5000 |  |
| CX.ADESK.RECON.ORDERED | Appraisal Reconsideration Ordered Date | DATE | 0 |  |
| CX.ADESK.RECON.ORDERED.CMT | Appraisal Reconsideration Ordered Comments | STRING | 5000 |  |
| CX.ADESK.RECON.RECVED | Appraisal Reconsideration Received Date | DATE | 0 |  |
| CX.ADESK.RECON.RECVED.CMT | Appraisal Reconsideration Received Comments | STRING | 5000 |  |
| CX.ADESK.RECON.REQ.BY | Appraisal Reconsideration Req By | STRING | 50 |  |
| CX.ADESK.RECON.REQ.CMT | Appraisal Reconsideration Req Comments | STRING | 5000 |  |
| CX.ADESK.RECON.REQ.ON | Appraisal Reconsideration Req On | DATE | 0 |  |
| CX.ADESK.REV.ORDERED | Appraisal Revision Ordered | DATE | 0 |  |
| CX.ADESK.REV.ORDERED.CMT | Appraisal Revision Ordered Comments | STRING | 5000 |  |
| CX.ADESK.REV.RECVED | Appraisal Revision Received | DATE | 0 |  |
| CX.ADESK.REV.RECVED.CMT | Appraisal Revision Received Comments | STRING | 5000 |  |
| CX.ADESK.REV.REQ.BY | Appraisal Revision Req By | STRING | 50 |  |
| CX.ADESK.REV.REQ.CMT | Appraisal Revision Comments | STRING | 5000 |  |
| CX.ADESK.REV.REQ.ON | Appraisal Revision Req On | DATE | 0 |  |
| CX.ADESK.REVIEW.DUE | Appraisal - Review Due Date | DATE | 0 |  |
| CX.ADESK.REVIEW.DUE.CMT | Appraisal - Review Due Date Comments | STRING | 5000 |  |
| CX.ADESK.REVIEW.ORDERED | Appraisal Review Ordered Date | DATE | 0 |  |
| CX.ADESK.REVIEW.ORDERED.CMT | Appraisal Review Ordered Comments | STRING | 5000 |  |
| CX.ADESK.REVIEW.RECVED.CMT | Appraisal Review Received Comments | STRING | 5000 |  |
| CX.ADESK.REVIEW.REQ.BY | Appraisal Review Req By | STRING | 50 |  |
| CX.ADESK.REVIEW.REQ.CMT | Appraisal Review Req Comments | STRING | 5000 |  |
| CX.ADESK.SALESCONTRACT | Appraisal Sales Contract Uploaded | X | 0 |  |
| CX.ADESK.SALESCONTRACT.EXECU | Appraisal Sales Contract Excuted | YN | 0 |  |
| CX.ADESK.SSR1 | Appraisal SSR Score 1 | DECIMAL_1 | 0 |  |
| CX.ADESK.SSR2 | Appraisal SSR Score 2 | DECIMAL_1 | 0 |  |
| CX.ADESK.SSR3 | Appraisal SSR Score 3 | DECIMAL_1 | 0 |  |
| CX.ADESK.SSR4 | Appraisal SSR Score 4 | DECIMAL_1 | 0 |  |
| CX.ADESK.USPS.VALIDATION | Apprsl Req - Subject City Validation Date | DATE | 0 |  |
| CX.ADJUSTCREDITS | Adjust Your Credits | X | 0 |  |
| CX.ADJUSTCREDITS.DATE | Date adjust credits checked | DATE | 0 |  |
| CX.ADMIN.FLDCHKON | Mortgage Tech Field Tracker Switch | X | 0 |  |
| CX.ADU | ADU on Borrower Summary 2 | X | 0 |  |
| CX.ADVERSE.ACTION.FLAG | Adverse Action Flag | X | 0 |  |
| CX.ADVERSE.COMMENTS | Adverse Action Comments | STRING | 1000 |  |
| CX.ADVERSE.FLAG | Flagged for Adverse Action | X | 0 |  |
| CX.ADVERSE.REASON | Reason for Adverse Action | DROPDOWNLIST | 0 |  |
| CX.ADVERSE.TYPE | Adverse Type | DROPDOWNLIST | 0 |  |
| CX.ADVERSELETTER | Adverse Letter Completed | DATE | 0 |  |
| CX.ADW.ACTUAL.APPRSL.FEE | ADW - Actual Appraisal Fee | DECIMAL_2 | 0 |  |
| CX.ADW.ADDRESS.010 | Address Discrepancy Worksheet - Address Listed | STRING | 75 |  |
| CX.ADW.ADDRESS.020 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.030 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.040 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.050 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.060 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.070 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.080 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.090 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.100 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.110 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.ADDRESS.120 | Address Discrepancy Worksheet - Address Listed | STRING | 100 |  |
| CX.ADW.AMC.COMPANY | ADW - AMC Company | DROPDOWN | 256 |  |
| CX.ADW.APPRSL.COMPLETED | ADW - Appraisal Completed - As Is or Subject To | DROPDOWNLIST | 0 |  |
| CX.ADW.APPRSL.EMAIL.BY | ADW - Appraisal Ordered Email By | STRING | 100 |  |
| CX.ADW.APPRSL.EMAIL.ON | ADW - Appraisal Ordered Email On | DATE | 0 |  |
| CX.ADW.APPRSL.FEE.CMT | ADW - Appraisal Fee Variance Comments | STRING | 5000 |  |
| CX.ADW.APPRSL.FEE.VAR.EMAIL | ADW - Appraisal Fee Variance Email | STRING | 1000 | "There is a variance between the Disclosed Appraisal Fee and the Actual Appraisal Fee" & vbCrLf &
v |
| CX.ADW.APPRSL.FEE.VARIANCE | ADW - Appraisal Fee Variance Difference | DECIMAL_2 | 0 | [#641] - [#CX.ADW.ACTUAL.APPRSL.FEE] |
| CX.ADW.APPRSL.ORDERED | ADW - Appraisal Ordered | DATE | 0 |  |
| CX.ADW.APPRSL.ORDERED.EMAIL | ADW - Appraisal Ordered Email | STRING | 5000 | "Appraisal has been ordered from " & [CX.ADW.AMC.COMPANY] & vbCrLf &
vbCrLf &
"Borrower: " & [31]  |
| CX.ADW.APPRSL.VALUE.VARIANCE | ADW - Appraisal Property Value Variance | DECIMAL_2 | 0 | [#356] - [#1821] |
| CX.ADW.COC.EXPECTED | ADW - COC Expected By | DATE | 0 | Calendar.AddRegZBusinessDays
([CX.ADW.COC.REQUESTED.ON], 3, true) |
| CX.ADW.COC.REQUESTED.BY | ADW - COC Requested By | STRING | 50 |  |
| CX.ADW.COC.REQUESTED.ON | ADW - COC Requested On | DATE | 0 |  |
| CX.ADW.COC.SENT | ADW - COC Sent | DATE | 0 |  |
| CX.ADW.DATE.010 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.020 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.030 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.040 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.050 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.060 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.070 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.080 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.090 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.100 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.110 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.DATE.120 | Address Discrepancy Worksheet - Date | DATE | 0 |  |
| CX.ADW.INSPECT.EMAIL.BY | ADW - Inspection Fee Variance Email By | STRING | 100 |  |
| CX.ADW.INSPECT.EMAIL.ON | ADW - Inspection Fee Variance Email On | DATE | 0 |  |
| CX.ADW.INSPECT.FEE.VAR.EMAIL | ADW - Inspection Fee Variance Email | STRING | 1000 | "There is a variance between the Appraised Property Value and Estimated Property Value" & vbCrLf &
 |
| CX.ADW.INSPECT.FEE.VARIANCE | ADW - Inspection Fee Variance | DECIMAL_2 | 0 | [#NEWHUD.X136] - [#CX.ADESK.INSPECT.FINALFEE] |
| CX.ADW.ORDER.SUMMARY.CMTS | ADW - Order Summary Comments | STRING | 5000 |  |
| CX.ADW.PROP.VALUE.EMAIL | ADW - Property Value Variance Email | STRING | 1000 | "There is a variance between the Appraised Property Value and Estimated Property Value" & vbCrLf &
 |
| CX.ADW.PROP.VARIANCE.CMT | ADW - Property Value Variance Comments | STRING | 5000 |  |
| CX.ADW.REASON.010 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.020 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.030 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.040 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.050 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.060 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.070 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.080 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.090 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.100 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.110 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.REASON.120 | Address Discrepancy Worksheet - Reason | STRING | 100 |  |
| CX.ADW.SALES.CONTRACT.CLOSE | ADW - Sales Contract Closing Date | DATE | 0 |  |
| CX.ADW.SENT.BY | Sent By | STRING | 50 |  |
| CX.ADW.SENT.ON | Date Sent | DATE | 0 |  |
| CX.ADW.SPECIAL.INSTRUCTIONS | ADW - Sprecial Instructions | STRING | 5000 |  |
| CX.ADW.VALUE.EMAIL.BY | ADW - Value Variance Email By | STRING | 100 |  |
| CX.ADW.VALUE.EMAIL.ON | ADW - Value Variance Email On | DATE | 0 |  |
| CX.AFFORDABLE.HOUSING | Affordable Housing Indicator | X | 0 |  |
| CX.AFR.UWMETHOD | Method of underwriting for AFR investorloans | DROPDOWNLIST | 0 |  |
| CX.AGGREGATE.MI | copy of field HUD0149 | DATE | 0 | [@HUD0149] |
| CX.AIQ.OFFREADY.COMP | AIQ Offer Ready Review Completed | DATE | 0 |  |
| CX.AIQ.PILOT | Included in AIQ Pilot release | YN | 0 |  |
| CX.AIR.CLOSE | AIR Earliest Closing Date | DATE | 0 |  |
| CX.ALERT.CNT | Alert Counter - Updated by Plugin | INTEGER | 0 |  |
| CX.ALERT.SUMMARY | Alert Summary - Updated by Plugin | STRING | 1000 |  |
| CX.ALERT.TRIGGERED | Alert Triggered | X | 0 |  |
| CX.ALLBORROWERAND | All Borrower Names with "And" | STRING | 200 | IIF([1868]<>"",[1868], "")&IIF([1873] <> "", " and ","")&IIF([1873] <> "", [1873],"")&IIF([CX.2NDBOR |
| CX.ALLMID | Total of All MID Scores | STRING | 10 | SumAny([CX.BORMID], [CX.BORMID2], [CX.BORMID3], [CX.BORMID4], [CX.BORMID5], [CX.BORMID6], [CX.CBORMI |
| CX.ALLMIDCOUNT | Number of Middle Scores | STRING | 10 | SumAny(IF([CX.BORMID] > 0, 1,0) , IF([CX.BORMID2] > 0, 1,0), IF([CX.BORMID3] > 0, 1,0), IF([CX.BORMI |
| CX.ALLNOTARY | All Borrower Names with ", " | STRING | 600 | IIF([1868]<>"",[1868], "")&IIF([1873] <> "", ", ","")&IIF([1873] <> "", [1873],"")&IIF([CX.2NDBORROW |
| CX.AMB.AMOUNT | AMB Report - Amount | DECIMAL_2 | 0 |  |
| CX.AMB.CHECKNUMBER | AMB Report - Customer Check Number | STRING | 10 |  |
| CX.AMB.CUSTOMERNAME | AMB Report - Customer Name | STRING | 45 |  |
| CX.AMB.GLNUMBER | AMB Report - GL Number | STRING | 24 |  |
| CX.AMB.INVOICENUMBER | AMB Report - Invoice Number | STRING | 20 |  |
| CX.AMB.LINEDESCRIPTION | AMB Report - Line Description | STRING | 35 |  |
| CX.AMB.LXCODE | AMB Report - LXCode | STRING | 2 |  |
| CX.AMB.POSTDATE | AMB Report - Post Date | DATE | 0 |  |
| CX.AMB.SECONDARYZIP | AMB Report - Secondary Zip Code | STRING | 4 |  |
| CX.AMB.VOUCHERNUMBER | AMB Report - Voucher Number | INTEGER | 0 |  |
| CX.APP.COORD.MGR.EMAIL | App Coordinator Supervisor Email | STRING | 100 | iif([LoanTeamMember.Email.Application Coord] = "alindsey@kellermortgage.com", "dparzych@kellermortga |
| CX.APP.COORD.MGR.MOBILE | App Coordinator Supervisor Mobile | PHONE | 0 | iif([LoanTeamMember.Email.Application Coord] = "alindsey@kellermortgage.com", "6146202540",
iif([Lo |
| CX.APP.COORD.MGR.NAME | App Coordinator Supervisor Name | STRING | 100 | iif([LoanTeamMember.Email.Application Coord] = "alindsey@kellermortgage.com", "Deborah Parzych",
ii |
| CX.APP.COORD.MGR.OFFICE | App Coordinator Supervisor Office | PHONE | 0 | iif([LoanTeamMember.Email.Application Coord] = "alindsey@kellermortgage.com", "6147681154",
iif([Lo |
| CX.APP.CURE.AMT.01 | TC - Applied Cure Amount 1 | DECIMAL_2 | 0 |  |
| CX.APP.CURE.AMT.02 | TC - Applied Cure Amount 2 | DECIMAL_2 | 0 |  |
| CX.APP.CURE.AMT.03 | TC - Applied Cure Amount 3 | DECIMAL_2 | 0 |  |
| CX.APP.CURE.AMT.04 | TC - Applied Cure Amount 4 | DECIMAL_2 | 0 |  |
| CX.APP.CURE.AMT.05 | TC - Applied Cure Amount 5 | DECIMAL_2 | 0 |  |
| CX.APP.DTE | Broker Application Date | DATE | 0 |  |
| CX.APP30 | TRID Date Plus 30 Days | DATE | 0 | XDateAdd("d", 30, [@3142]) |
| CX.APPORD | Appraisal Ordered | DATE | 0 |  |
| CX.APPR.FNL.INSPCTN.DUE | Appraisal Final Inspection Due Date | DATE | 0 |  |
| CX.APPR.FNL.INSPCTN.ORD | Appraisal Final Inspection Ordered | DATE | 0 |  |
| CX.APPR.FNL.INSPCTN.RCD | Appraisal Final Inspection Received | DATE | 0 |  |
| CX.APPR.IAC.ADDSINFOLDER | Addendums in eFolder | X | 0 |  |
| CX.APPR.IAC.APP.CONF | Appraisal Confirmation Sent | X | 0 |  |
| CX.APPR.IAC.APP.ORDERED | Appraisal Ordered | X | 0 |  |
| CX.APPR.IAC.APP.SENT | Appraisal Order Sent | X | 0 |  |
| CX.APPR.IAC.APP.TEXT | Outstanding Appraisal Request | STRING | 35 |  |
| CX.APPR.IAC.APPRINFOLDER | Appraisal in eFolder | X | 0 |  |
| CX.APPR.IAC.APPRSR.COMPANY | Requested Appraisors Company | STRING | 50 |  |
| CX.APPR.IAC.APPRSR.EMAIL | Requested Appraisors Email | STRING | 100 |  |
| CX.APPR.IAC.APPRSR.NAME | Requested Appraisors Name | STRING | 30 |  |
| CX.APPR.IAC.APPRSR.PHONE | Requested Appraisors Phone | PHONE | 0 |  |
| CX.APPR.IAC.CHECKNUM | APPR.IAC.CHECKNUM | STRING | 10 |  |
| CX.APPR.IAC.CHKCASHED | APPR.IAC.CHKCASHED | X | 0 |  |
| CX.APPR.IAC.COMMENTS | Appraisal Desk Comments | STRING | 200 |  |
| CX.APPR.IAC.CTINFOLDER | Counters in eFolder | X | 0 |  |
| CX.APPR.IAC.FHLMCSC | FHLMC Super Conforming | X | 0 |  |
| CX.APPR.IAC.FIN.CHECKNUM | Final Appr Check Number | STRING | 20 |  |
| CX.APPR.IAC.FIN.CKCASHED | Final Appr Acct to Clear | X | 0 |  |
| CX.APPR.IAC.FIN.COMMENTS | Final Appr Comments | STRING | 200 |  |
| CX.APPR.IAC.FIN.CUST14FV | Final Appr Deadline | DATE | 0 |  |
| CX.APPR.IAC.FIN.INSPDATE | Final Appr Inspect Date | DATE | 0 |  |
| CX.APPR.IAC.FIN.PYMT.MTHD | Final Appr Pymt Method | DROPDOWNLIST | 0 |  |
| CX.APPR.IAC.FIN.PYMT.RECVD | Final Appr Pymt Recvd | DROPDOWNLIST | 0 |  |
| CX.APPR.IAC.FIN.REQUEST.X21 | Final Appr Request Ordered  | DATE | 0 |  |
| CX.APPR.IAC.FNL.CONF | Final Review Confirmed | X | 0 |  |
| CX.APPR.IAC.FNL.ORDERED | Final Inspection Ordered | X | 0 |  |
| CX.APPR.IAC.FNL.SENT | Final Order Sent | X | 0 |  |
| CX.APPR.IAC.FNL.TEXT | Outstanding Final Request | STRING | 35 |  |
| CX.APPR.IAC.FNMAHB | FNMA High Balance | X | 0 |  |
| CX.APPR.IAC.INSPECTDATE | APPR.IAC.INSPECTDATE | DATE | 0 |  |
| CX.APPR.IAC.INSPECTRESDATE | APPR.IAC.INSPECTRESDATE | DATE | 0 |  |
| CX.APPR.IAC.ORD.BY | Appraisal Ordered By | STRING | 30 |  |
| CX.APPR.IAC.PCINFOLDER | Purchase Contract in eFolder | X | 0 |  |
| CX.APPR.IAC.PYMT.RECVD | APPR.IAC.PYMT.RECVD | DROPDOWNLIST | 0 |  |
| CX.APPR.IAC.REQUEST.TEXT | APPR.IAC.REQUEST.TEXT | STRING | 2500 |  |
| CX.APPR.IAC.REV.CHECKNUM | Review Appr Check Number | STRING | 20 |  |
| CX.APPR.IAC.REV.CKCASHED | Review Appr Acct to Clear | X | 0 |  |
| CX.APPR.IAC.REV.COMMENTS | Review Appr Comments | STRING | 200 |  |
| CX.APPR.IAC.REV.CONF | Review Order Confirmed | X | 0 |  |
| CX.APPR.IAC.REV.CUST14FV | Review Appr Deadline | DATE | 0 |  |
| CX.APPR.IAC.REV.INSPDATE | Review Appr Inspect Date | DATE | 0 |  |
| CX.APPR.IAC.REV.ORDERED | Review Appr Ordered | X | 0 |  |
| CX.APPR.IAC.REV.PYMT.MTHD | Review Appr Pymt Method | DROPDOWNLIST | 0 |  |
| CX.APPR.IAC.REV.PYMT.RECVD | Review Appr Pymt Recvd | DROPDOWNLIST | 0 |  |
| CX.APPR.IAC.REV.REQUEST.X21 | Review Appr Ordered  | DATE | 0 |  |
| CX.APPR.IAC.REV.SENT | Review Order Sent | X | 0 |  |
| CX.APPR.IAC.REV.TEXT | Outstanding Review Request | STRING | 35 |  |
| CX.APPR.IAC.REVIEW.1244 | Review Appraisal Co State | STATE | 0 |  |
| CX.APPR.IAC.REVIEW.1246 | Review Appraisal Co Fax | PHONE | 0 |  |
| CX.APPR.IAC.REVIEW.617 | Review Appraisal Co Name | STRING | 30 |  |
| CX.APPR.IAC.REVIEW.618 | Review Appraisal Co Contact | STRING | 30 |  |
| CX.APPR.IAC.REVIEW.619 | Review Appraisal Co Addr | STRING | 50 |  |
| CX.APPR.IAC.REVIEW.620 | Review Appraisal Co City | STRING | 30 |  |
| CX.APPR.IAC.REVIEW.621 | Review Appraisal Co Zip | ZIPCODE | 0 |  |
| CX.APPR.IAC.REVIEW.622 | Review Appraisal Co Phone | PHONE | 0 |  |
| CX.APPR.IAC.REVIEW.623 | Review Appraisal Co Comments | STRING | 200 |  |
| CX.APPR.IAC.REVIEW.89 | Review Appraisal Co Email | STRING | 50 |  |
| CX.APPR.IAC.REVIEW.974 | Review Appraisal Co License # | STRING | 30 |  |
| CX.APPR.IAC.TCF | APPR.IAC.TCF | X | 0 |  |
| CX.APPR.IAC.TYPE.1004D | APPR.IAC.TYPE.1004D | X | 0 |  |
| CX.APPR.IAC.TYPE.1004MC | APPR.IAC.TYPE.1004MC | X | 0 |  |
| CX.APPR.IAC.TYPE.1007 | APPR.IAC.TYPE.1007 | X | 0 |  |
| CX.APPR.IAC.TYPE.1025 | APPR.IAC.TYPE.1025 | X | 0 |  |
| CX.APPR.IAC.TYPE.1073MC | APPR.IAC.TYPE.1073MC | X | 0 |  |
| CX.APPR.IAC.TYPE.2055MC | APPR.IAC.TYPE.2055MC | X | 0 |  |
| CX.APPR.IAC.TYPE.216 | APPR.IAC.TYPE.216 | X | 0 |  |
| CX.APPR.IAC.TYPE.OTHER | APPR.IAC.TYPE.OTHER | X | 0 |  |
| CX.APPR.IAC.TYPE.OTHER.DESC | APPR.IAC.TYPE.OTHER.DESC | STRING | 50 |  |
| CX.APPR.NOT.REQUIRED | Appraisal Not Required | X | 0 |  |
| CX.APPRAISAL.CONDITION.DATE | Appraisal Condition Date | DATE | 0 |  |
| CX.APPRAISAL.DATE | Appraisal Doc Date | DATE | 0 |  |
| CX.APPRAISAL.DUE.DT | Appraisal Due Date | DATE | 0 |  |
| CX.APPRAISAL.EXP.DATE | Appraisal Exp Date | DATE | 0 | DateAdd("d", 120, [CX.APPRAISAL.DATE]) |
| CX.APPRAISAL.EXP.DATE.INT | CX.APPRAISAL.EXP.DATE.INT | INTEGER | 0 | IIF([@CX.APPRAISAL.EXP.DATE].ToOADate() = 0, 999999, [@CX.APPRAISAL.EXP.DATE].ToOADate()) |
| CX.APPRAISAL.INTERNALNOTES | Text box for internal notes for Appraisal team. | STRING | 1000 |  |
| CX.APPRAISAL.NOTES | Appraisal Notes | STRING | 2500 |  |
| CX.APPRAISAL.ORDER.DATE | APPRAISAL.ORDER.DATE | DATE | 0 |  |
| CX.APPRAISAL.ORDERED | Appraisal Ordered Date | STRING | 500 |  |
| CX.APPRAISAL.ORDERED.BY | Appraisal Ordered By | STRING | 500 |  |
| CX.APPRAISAL.RECEIVED.DATE | Appraisal Received Date | DATE | 0 | [Document.DateReceived.APPRAISAL] |
| CX.APPRAISALEXP | Appraisal Expiration | DATE | 0 | DateAdd(“d”, [cx.fx.appraisal.days], [@cx.fx.appraisaldocdate]) |
| CX.APPRAISALEXP.INT | Appraisal Expiration Date Integer | INTEGER | 0 | IIF([@CX.APPRAISALEXP].ToOADate() = 0, 999999, [@CX.APPRAISALEXP].ToOADate()) |
| CX.APPRAISALNOTES | Appraisal Comments | DROPDOWNLIST | 0 |  |
| CX.APPRAISALPIW | Appraisal PIW/PIA | DROPDOWNLIST | 0 |  |
| CX.APPRCONTINGENCYDATE | Appraisal Contingency Date | DATE | 0 |  |
| CX.APPROVED.TO.CLOSED | Approved to Closed # of days | INTEGER | 0 | DateDiff("d", [MS.APP], [MS.DOC]) |
| CX.APPRREVWDISPNO | Review Completed Prior to Disbursement NO | YN | 0 |  |
| CX.APPRREVWDISPYES | Review Completed Before Disbursements | YN | 0 |  |
| CX.APPRSL.COMBO | Appraisal Fee Combo | STRING | 2 | IIf([1821]>"1,000,000" And [1811]<>"Investment" And [1553]<>"2-4 Units" And [1172]<>"VA","1",
Iif([ |
| CX.APPRSL.COOR.MGR.EMAIL | Appraisal Coordinator Supervisor Email | STRING | 100 | iif([LoanTeamMember.Email.Appraisal Coordinato] = "ehawthorne@kellermortgage.com", "khampton@kellerm |
| CX.APPRSL.COOR.MGR.MOBILE | Appraisal Coordinator Supervisor Mobile | PHONE | 0 | iif([LoanTeamMember.Email.Appraisal Coordinato] = "ehawthorne@kellermortgage.com", "9802989814",
ii |
| CX.APPRSL.COOR.MGR.NAME | Appraisal Coordinator Supervisor Name | STRING | 100 | iif([LoanTeamMember.Email.Appraisal Coordinato] = "ehawthorne@kellermortgage.com", "Kimberly Hampton |
| CX.APPRSL.COOR.MGR.OFFICE | Appraisal Coordinator Supervisor office | PHONE | 0 | iif([LoanTeamMember.Email.Appraisal Coordinato] = "ehawthorne@kellermortgage.com", "6147681148",
ii |
| CX.APPRVW.ABA.N | approval appraiser no | YN | 0 |  |
| CX.APPRVW.ABA.Y | Approved Appraiser | YN | 0 |  |
| CX.APPRVW.CB10N | Review Box 10 No | YN | 0 |  |
| CX.APPRVW.CB10Y | Review Box 10 Yes | YN | 0 |  |
| CX.APPRVW.CB11N | APP REVIEW CHECK BOX 11 N | YN | 0 |  |
| CX.APPRVW.CB11Y | APP REVIEW CHECK BOX 11 Y | YN | 0 |  |
| CX.APPRVW.CB1N | Review CB 1 NO | YN | 0 |  |
| CX.APPRVW.CB1Y | Review CB 1 YES | YN | 0 |  |
| CX.APPRVW.CB2N | Review Box 2 | YN | 0 |  |
| CX.APPRVW.CB2Y | Review CB 2 | YN | 0 |  |
| CX.APPRVW.CB3N | Review Box 3 No | YN | 0 |  |
| CX.APPRVW.CB3Y | Review Box 3 Yes | YN | 0 |  |
| CX.APPRVW.CB4N | Review Box 4 No | YN | 0 |  |
| CX.APPRVW.CB4Y | Review Box 4 Yes | YN | 0 |  |
| CX.APPRVW.CB5N | Review Box 5 No | YN | 0 |  |
| CX.APPRVW.CB5Y | Review Box 5 Yes | YN | 0 |  |
| CX.APPRVW.CB6N | Review Box 6 No | YN | 0 |  |
| CX.APPRVW.CB6Y | Review Box 6 Yes | YN | 0 |  |
| CX.APPRVW.CB7N | Review Box 7 No | YN | 0 |  |
| CX.APPRVW.CB7Y | Review Box 7 Yes | YN | 0 |  |
| CX.APPRVW.CB8N | Review Box 8 No | YN | 0 |  |
| CX.APPRVW.CB8Y | Review Box 8 Yes | YN | 0 |  |
| CX.APPRVW.CB9N | Review Box 9 No | YN | 0 |  |
| CX.APPRVW.CB9Y | Review Box 9 Yes | YN | 0 |  |
| CX.APPRVW.COMM | Approved Appraiser Comments | STRING | 600 |  |
| CX.APPRVW.COMM1 | Comments Box 1 | STRING | 500 |  |
| CX.APPRVW.COMM10 | Comments Box 10 | STRING | 500 |  |
| CX.APPRVW.COMM2 | Comments Box 2 | STRING | 500 |  |
| CX.APPRVW.COMM3 | Comments Box 3 | STRING | 500 |  |
| CX.APPRVW.COMM8 | Comments Box 8 | STRING | 500 |  |
| CX.APPRVW.COMM9 | Comments Box 9 | STRING | 500 |  |
| CX.APPTDATE | Appointment Date | DATE | 0 |  |
| CX.APR.TOLERANCE.TRIGGERED | APR Tolerance exceeded | STRING | 1 | iif([CX.ALERT.SUMMARY].Contains("REG-Z TIL must be re-disclosed when the Current APR differs from th |
| CX.APRL.CONTIGENCYDATE | Appraisal Contigency Date | DATE | 0 |  |
| CX.ARMNOTICES | Payments Between Notices | STRING | 10 |  |
| CX.AS.CLOSE.RUSH.BY | Closing Rush Requested By | STRING | 25 |  |
| CX.AS.CLOSE.RUSH.ON | Closing Rush Requested On | STRING | 25 |  |
| CX.AS.UW.RUSH | Underwriting Rush Requested | DROPDOWNLIST | 0 |  |
| CX.AS.UW.RUSH.BY | Underwriting Rush Requested By | STRING | 25 |  |
| CX.AS.UW.RUSH.ON | Underwriting Rush Requested | STRING | 25 |  |
| CX.ASSET.DATE | Asset Doc Date | DATE | 0 |  |
| CX.ASSET.DEPLETION | Asset Depletion | STRING | 20 |  |
| CX.ASSET.EXP.DATE | Asset Exp Date | DATE | 0 | DateAdd("d", 120, [CX.ASSET.DATE]) |
| CX.ASSET.EXP.DATE.INT | Assets Epiration Date Integer | INTEGER | 0 | IIF([@CX.ASSET.EXP.DATE].ToOADate() = 0, 999999, [@CX.ASSET.EXP.DATE].ToOADate()) |
| CX.ASSET.NOTES | Asset Notes | STRING | 2500 |  |
| CX.ASSETS.1 | Assets Checklist | DROPDOWNLIST | 0 |  |
| CX.ASSETS.2 | Assets Checklist | DROPDOWNLIST | 0 |  |
| CX.ASSETS.3 | Assets Checklist | DROPDOWNLIST | 0 |  |
| CX.ASSETS.4 | Assets Checklist | DROPDOWNLIST | 0 |  |
| CX.ASSETS.5 | Assets Checklist | DROPDOWNLIST | 0 |  |
| CX.ASSETS.OVERUNDER | Overage or Shortage of Funds to be Verified | DECIMAL_2 | 0 | [#915]-[#CX.NEEDEDASSETS] |
| CX.ASSETS.STOCKAMT1 | Assets - Stock Amt 1 | DECIMAL_2 | 0 |  |
| CX.ASSETS.STOCKAMT2 | Assets - Stock Amt 2 | DECIMAL_2 | 0 |  |
| CX.ASSETS.STOCKAMT3 | Assets - Stock Amt 3 | DECIMAL_2 | 0 |  |
| CX.ASSETS.STOCKAMT4 | Assets - Stock Amt 4 | DECIMAL_2 | 0 |  |
| CX.ASSETS.STOCKAMT5 | Assets - Stock Amt 5 | DECIMAL_2 | 0 |  |
| CX.ASSETS.STOCKAMT6 | Assets - Stock Amt 6 | DECIMAL_2 | 0 |  |
| CX.ASSETS.WHO.1 | Who made selection | STRING | 75 |  |
| CX.ASSETS.WHO.2 | Who made selection | STRING | 75 |  |
| CX.ASSETS.WHO.3 | Who made selection | STRING | 75 |  |
| CX.ASSETS.WHO.4 | Who made selection | STRING | 75 |  |
| CX.ASSETS.WHO.5 | Who made selection | STRING | 75 |  |
| CX.ASSETSEXP | Assets Expiration | DATE | 0 | DateAdd(“d”, [cx.fx.assets.days], [@cx.fx.assetsdocdate]) |
| CX.ASSETSEXP.INT | Assets Epiration Date integer | INTEGER | 0 | IIF([@CX.ASSETSEXP].ToOADate() = 0, 999999, [@CX.ASSETSEXP].ToOADate()) |
| CX.ASSETSNA | Assets N/A | YN | 0 |  |
| CX.ASSGND.2.CM | Assigned to Client Manager | X | 0 |  |
| CX.ASSIGNED.TO.CM | Assigned to Client Manager | DROPDOWNLIST | 0 |  |
| CX.ASSIGNED.TO.CM.DATE | Assigned to Client Manger Date | DATE | 0 |  |
| CX.ATR.QM.DISCOUNT.BORROWER | Amount Borrower Pays in Discount | DECIMAL_3 | 0 |  |
| CX.AUD.AGENCY | AUD.AGENCY | DROPDOWNLIST | 0 |  |
| CX.AUD.COMPLETED.BY | AUD.COMPLETED.BY | STRING | 100 |  |
| CX.AUD.COMPLETED.DATE | AUD.COMPLETED.DATE | STRING | 100 |  |
| CX.AUD.DEPT.ERROR.1 | AUD.DEPT.ERROR.1 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.10 | AUD.DEPT.ERROR.10 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.2 | AUD.DEPT.ERROR.2 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.3 | AUD.DEPT.ERROR.3 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.4 | AUD.DEPT.ERROR.4 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.5 | AUD.DEPT.ERROR.5 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.6 | AUD.DEPT.ERROR.6 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.7 | AUD.DEPT.ERROR.7 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.8 | AUD.DEPT.ERROR.8 | DROPDOWNLIST | 0 |  |
| CX.AUD.DEPT.ERROR.9 | AUD.DEPT.ERROR.9 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.1 | AUD.FINDING.TYPE.1 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.10 | AUD.FINDING.TYPE.10 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.2 | AUD.FINDING.TYPE.2 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.3 | AUD.FINDING.TYPE.3 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.4 | AUD.FINDING.TYPE.4 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.5 | AUD.FINDING.TYPE.5 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.6 | AUD.FINDING.TYPE.6 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.7 | AUD.FINDING.TYPE.7 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.8 | AUD.FINDING.TYPE.8 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDING.TYPE.9 | AUD.FINDING.TYPE.9 | DROPDOWNLIST | 0 |  |
| CX.AUD.FINDINGS.1 | AUD.FINDINGS.1 | STRING | 5000 |  |
| CX.AUD.FINDINGS.10 | AUD.FINDINGS.10 | STRING | 5000 |  |
| CX.AUD.FINDINGS.2 | AUD.FINDINGS.2 | STRING | 5000 |  |
| CX.AUD.FINDINGS.3 | AUD.FINDINGS.3 | STRING | 5000 |  |
| CX.AUD.FINDINGS.4 | AUD.FINDINGS.4 | STRING | 5000 |  |
| CX.AUD.FINDINGS.5 | AUD.FINDINGS.5 | STRING | 5000 |  |
| CX.AUD.FINDINGS.6 | AUD.FINDINGS.6 | STRING | 5000 |  |
| CX.AUD.FINDINGS.7 | AUD.FINDINGS.7 | STRING | 5000 |  |
| CX.AUD.FINDINGS.8 | AUD.FINDINGS.8 | STRING | 5000 |  |
| CX.AUD.FINDINGS.9 | AUD.FINDINGS.9 | STRING | 5000 |  |
| CX.AUD.FRAUD.MISREP | AUD.SELFREPORT | DROPDOWNLIST | 0 |  |
| CX.AUD.INDEMNIFY | AUD.INDEMNIFY | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.1 | AUD.INVOLVEMENT.1 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.10 | AUD.INVOLVEMENT.10 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.2 | AUD.INVOLVEMENT.2 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.3 | AUD.INVOLVEMENT.3 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.4 | AUD.INVOLVEMENT.4 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.5 | AUD.INVOLVEMENT.5 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.6 | AUD.INVOLVEMENT.6 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.7 | AUD.INVOLVEMENT.7 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.8 | AUD.INVOLVEMENT.8 | DROPDOWNLIST | 0 |  |
| CX.AUD.INVOLVEMENT.9 | AUD.INVOLVEMENT.9 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.1 | AUD.MITIGATED.1 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.10 | AUD.MITIGATED.10 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.2 | AUD.MITIGATED.2 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.3 | AUD.MITIGATED.3 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.4 | AUD.MITIGATED.4 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.5 | AUD.MITIGATED.5 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.6 | AUD.MITIGATED.6 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.7 | AUD.MITIGATED.7 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.8 | AUD.MITIGATED.8 | DROPDOWNLIST | 0 |  |
| CX.AUD.MITIGATED.9 | AUD.MITIGATED.9 | DROPDOWNLIST | 0 |  |
| CX.AUD.REPURCHASE | AUD.REPURCHASE | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.1 | AUD.RISK.1 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.10 | AUD.RISK.10 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.2 | AUD.RISK.2 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.3 | AUD.RISK.3 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.4 | AUD.RISK.4 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.5 | AUD.RISK.5 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.6 | AUD.RISK.6 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.7 | AUD.RISK.7 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.8 | AUD.RISK.8 | DROPDOWNLIST | 0 |  |
| CX.AUD.RISK.9 | AUD.RISK.9 | DROPDOWNLIST | 0 |  |
| CX.AUD.SELFREPORT | AUD.SELFREPORT | DROPDOWNLIST | 0 |  |
| CX.AUD.STARTDATE | AUD.STARTDATE | DATE | 0 |  |
| CX.AUD.TYPE | AUD.TYPE | DROPDOWNLIST | 0 |  |
| CX.AUDIT.119 | AUDIT - Field 119 | STRING | 40 | [119] |
| CX.AUDIT.120 | AUDIT - Field 120 | STRING | 20 | [120] |
| CX.AUDIT.1405 | AUDIT - Field 1405 | STRING | 20 | [1405] |
| CX.AUDIT.1990DATE | Audit Field 1990 Date Changed | AUDIT | 0 | Audit([1990], 2) |
| CX.AUDIT.1990NAME | Audit Field 1990 User Name | AUDIT | 0 | Audit([1990], 1) |
| CX.AUDIT.1990VALUE | Audit Field 1990 last value | STRING | 555 |  |
| CX.AUDIT.1990VALUE2 | Audit Field 1990 Value 2 | STRING | 555 |  |
| CX.AUDIT.228 | AUDIT - Field 228 | STRING | 20 | [228] |
| CX.AUDIT.230 | AUDIT - Field 230 | STRING | 20 | [230] |
| CX.AUDIT.910 | AUDIT - Field 910 Date | STRING | 555 | [910] |
| CX.AUDIT.APPRAISAL.ORDBTN | Appraisal - Audit - Order Button Date | AUDIT | 0 | Audit([cx.appraisal.ordbtn.date], 1) |
| CX.AUDIT.CREDIT.763 | AUDIT - Credit Expired and 763 less than 60 | STRING | 1 | iif([CX.AUDIT.DOC.CREDIT.120] = "Y" AND [cx.763.lessthan60] = "Y", "Y", "N") |
| CX.AUDIT.TRAIL.FIELD.ID | Audit Trail Field ID | STRING | 20 |  |
| CX.AUS.DATE | AUS Doc Date | DATE | 0 |  |
| CX.AUS.EXP.DATE | AUS Exp Date | DATE | 0 | DateAdd("d", 120, [CX.AUS.DATE]) |
| CX.AUS.EXP.DATE.INT | AUS Expiration Date as Integer | INTEGER | 0 | IIF([@CX.AUS.EXP.DATE].ToOADate() = 0, 999999, [@CX.AUS.EXP.DATE].ToOADate()) |
| CX.AUS.VALIDATION | AUS Validation Required | STRING | 6500 | IIf(IsEmpty([300]), Space(1) & "- Credit Report has not been issued or Liabilities have not been imp |
| CX.AUTHBA | Authorized Buyer's Agent | X | 0 |  |
| CX.AUTHBAD | Authorized Buyer's Agent Delegate | X | 0 |  |
| CX.AUTHLA | Authorized Listing Agent | X | 0 |  |
| CX.AUTHLAD | Authorized Listing Agent Delegate | X | 0 |  |
| CX.AUTHORIZATION.NO.MIP | Authorization # MIP Refund | DECIMAL_2 | 0 |  |
| CX.AUTHREQBA | Request Auth of Buyer's Agent | X | 0 |  |
| CX.AUTHREQBAD | Request Auth of Biuyer's Agent Delegate | X | 0 |  |
| CX.AUTHREQLA | Request Auth of Listing Agent | X | 0 |  |
| CX.AUTHREQLAD | Request Auth of Listing Agent Delegate | X | 0 |  |
| CX.AUTOPRINT | Auto Print Rule | STRING | 50 |  |
| CX.AW.IAO.SR.REV | Initial Appraisal Order Sr Review | X | 0 |  |
| CX.B.FULL.NAME1 | Borr Full Name #1 | STRING | 50 | IIF ([4001#1] = "", [4000#1]&" "&[4002#1], [4000#1]&" "&[4001#1]&" "&[4002#1]) |
| CX.B.FULL.NAME2 | Borr Full Name #2 | STRING | 50 | IIF ([4001#2] = "", [4000#2]&" "&[4002#2], [4000#2]&" "&[4001#2]&" "&[4002#2]) |
| CX.B.FULL.NAME3 | Borr Full Name #3 | STRING | 50 | IIF ([4001#3] = "", [4000#3]&" "&[4002#3], [4000#3]&" "&[4001#3]&" "&[4002#3]) |
| CX.B.RETIRED | Borrower Retired  | X | 0 |  |
| CX.B1.1240 | Borrower Pair 1 Bor Email | STRING | 100 | [1240#1] |
| CX.B1.1268 | Borrower Pair 1 CoBor Email | STRING | 100 | [1268#1] |
| CX.B1.1402 | Borrower Pair 1 Bor DOB | DATE | 0 | [1402#1] |
| CX.B1.1403 | Borrower Pair 1 CoBor DOB | DATE | 0 | [1403#1] |
| CX.B1.1480 | Borrower Pair 1 CoBor Cell Phone | PHONE | 0 | [1480#1] |
| CX.B1.1490 | Borrower Pair 1 Bor Cell Phone | PHONE | 0 | [1490#1] |
| CX.B1.1868 | Borrower Pair 1 Bor Name | STRING | 100 | [36#1] & " " & [37#1] |
| CX.B1.1873 | Borrower Pair 1 CoBor Name | STRING | 100 | [68#1] & " " & [69#1] |
| CX.B1.66 | Borrower Pair 1 Bor Hm Phone | PHONE | 0 | [66#1] |
| CX.B1.910 | Borrower Pair 1 Bor Income | DECIMAL_2 | 0 | [910#1] |
| CX.B1.911 | Borrower Pair 1 CoBor Income | DECIMAL_2 | 0 | [911#1] |
| CX.B1.98 | Borrower Pair 1 CoBor Hm Phone | PHONE | 0 | [98#1] |
| CX.B1.FE0102 | Borrower Pair 1 Bor Business | STRING | 100 | [FE0102#1] |
| CX.B1.FE0104 | Borrower Pair 1 Bor Emp Address | STRING | 100 | [FE0104#1] |
| CX.B1.FE0105 | Borrower Pair 1 Bor Emp City | STRING | 100 | [FE0105#1] |
| CX.B1.FE0106 | Borrower Pair 1 Bor Emp St | STATE | 0 | [FE0106#1] |
| CX.B1.FE0107 | Borrower Pair 1 Bor Emp Zip | ZIPCODE | 0 | [FE0107#1] |
| CX.B1.FE0110 | Borrower Pair 1 Bor Title | STRING | 100 | [FE0110#1] |
| CX.B1.FE0117 | Borrower Pair 1 Bor Wk Phone | PHONE | 0 | [FE0117#1] |
| CX.B1.FE0202 | Borrower Pair 1 CoBor Business | STRING | 100 | [FE0202#1] |
| CX.B1.FE0204 | Borrower Pair 1 CoBor Address | STRING | 100 | [FE0204#1] |
| CX.B1.FE0205 | Borrower Pair 1 CoBor Emp City | STRING | 100 | [FE0205#1] |
| CX.B1.FE0206 | Borrower Pair 1 CoBor Emp St | STATE | 0 | [FE0206#1] |
| CX.B1.FE0207 | Borrower Pair 1 CoBor Emp Zip | ZIPCODE | 0 | [FE0207#1] |
| CX.B1.FE0210 | Borrower Pair 1 CoBor Title | STRING | 100 | [FE0210#1] |
| CX.B1.FE0217 | Borrower Pair 1 CoBor Wk Phone | PHONE | 0 | [FE0217#1] |
| CX.B1.FR0104 | Borrower Pair 1 Bor Address | STRING | 100 | [FR0104#1] |
| CX.B1.FR0106 | Borrower Pair 1 Bor City | STRING | 100 | [FR0106#1] |
| CX.B1.FR0107 | Borrower Pair 1 Bor State | STATE | 0 | [FR0107#1] |
| CX.B1.FR0108 | Borrower Pair 1 Bor Zip | ZIPCODE | 0 | [FR0108#1] |
| CX.B1.FR0126 | Borrower Pair 1 Bor Address | STRING | 100 | [FR0126#1] & " " & [FR0125#1] & " " &  [FR0127#1] |
| CX.B1.FR0204 | Borrower Pair 1 CoBor Address | STRING | 100 | [FR0204#1] |
| CX.B1.FR0206 | Borrower Pair 1 CoBor City | STRING | 100 | [FR0206#1] |
| CX.B1.FR0207 | Borrower Pair 1 CoBor State | STATE | 0 | [FR0207#1] |
| CX.B1.FR0208 | Borrower Pair 1 CoBor Zip | ZIPCODE | 0 | [FR0208#1] |
| CX.B1.FR0226 | Borrower Pair 1 CoBor Address | STRING | 100 | [FR0226#1] & " " & [FR0225#1] & " " &  [FR0227#1] |
| CX.B2.1402 | Borrower Pair 2 Bor DOB | DATE | 0 | [1402#2] |
| CX.B2.1403 | Borrower Pair 2 CoBor DOB | DATE | 0 | [1403#2] |
| CX.B2.1868 | Borrower Pair 2 Bor Name | STRING | 100 | [36#2] & " " & [37#2] |
| CX.B2.1873 | Borrower Pair 2 CoBor Name | STRING | 100 | [68#2] & " " & [69#2] |
| CX.B2.910 | Borrower Pair 2 Bor Income | DECIMAL_2 | 0 | [910#2] |
| CX.B2.911 | Borrower Pair 2 CoBor Income | DECIMAL_2 | 0 | [911#2] |
| CX.B2.FE0102 | Borrower Pair 2 Bor Business | STRING | 100 | [FE0102#2] |
| CX.B2.FE0104 | Borrower Pair 2 Bor Emp Address | STRING | 100 | [FE0104#2] |
| CX.B2.FE0105 | Borrower Pair 2 Bor Emp City | STRING | 100 | [FE0105#2] |
| CX.B2.FE0106 | Borrower Pair 2 Bor Emp St | STATE | 0 | [FE0106#2] |
| CX.B2.FE0107 | Borrower Pair 2 Bor Emp Zip | ZIPCODE | 0 | [FE0107#2] |
| CX.B2.FE0110 | Borrower Pair 2 Bor Title | STRING | 100 | [FE0110#2] |
| CX.B2.FE0202 | Borrower Pair 2 CoBor Business | STRING | 100 | [FE0202#2] |
| CX.B2.FE0204 | Borrower Pair 2 CoBor Address | STRING | 100 | [FE0204#2] |
| CX.B2.FE0205 | Borrower Pair 2 CoBor Emp City | STRING | 100 | [FE0205#2] |
| CX.B2.FE0206 | Borrower Pair 2 CoBor Emp St | STATE | 0 | [FE0206#2] |
| CX.B2.FE0207 | Borrower Pair 2 CoBor Emp Zip | ZIPCODE | 0 | [FE0207#2] |
| CX.B2.FE0210 | Borrower Pair 2 CoBor Title | STRING | 100 | [FE0210#2] |
| CX.B2.FIRSTNAME | Borr 2 First Name | STRING | 50 | [4000#2] |
| CX.B2.FR0104 | Borrower Pair 2 Bor Address | STRING | 100 | [FR0104#2] |
| CX.B2.FR0106 | Borrower Pair 2 Bor City | STRING | 100 | [FR0106#2] |
| CX.B2.FR0107 | Borrower Pair 2 Bor State | STATE | 0 | [FR0107#2] |
| CX.B2.FR0108 | Borrower Pair 2 Bor Zip | ZIPCODE | 0 | [FR0108#2] |
| CX.B2.FR0126 | Borrower Pair 2 Bor Address | STRING | 100 | [FR0126#2] & " " & [FR0125#2] & " " &  [FR0127#2] |
| CX.B2.FR0204 | Borrower Pair 2 CoBor Address | STRING | 100 | [FR0204#2] |
| CX.B2.FR0206 | Borrower Pair 2 CoBor City | STRING | 100 | [FR0206#2] |
| CX.B2.FR0207 | Borrower Pair 2 CoBor State | STATE | 0 | [FR0207#2] |
| CX.B2.FR0208 | Borrower Pair 2 CoBor Zip | ZIPCODE | 0 | [FR0208#2] |
| CX.B2.FR0226 | Borrower Pair 2 CoBor Address | STATE | 0 | [FR0226#2] & " " & [FR0225#2] & " " &  [FR0227#2] |
| CX.B2.LASTNAME | Borr 2 Last Name | STRING | 50 | [4002#2] |
| CX.B3.1402 | Borrower Pair 3 Bor DOB | DATE | 0 | [1402#3] |
| CX.B3.1403 | Borrower Pair 3 CoBor DOB | DATE | 0 | [1403#3] |
| CX.B3.1868 | Borrower Pair 3 Bor Name | STRING | 100 | [36#3] & " " & [37#3] |
| CX.B3.1873 | Borrower Pair 3 CoBor Name | STRING | 100 | [68#3] & " " & [69#3] |
| CX.B3.910 | Borrower Pair 3 Bor Income | DECIMAL_2 | 0 | [910#3] |
| CX.B3.911 | Borrower Pair 3 CoBor Income | DECIMAL_2 | 0 | [911#3] |
| CX.B3.FE0102 | Borrower Pair 3 Bor Business | STRING | 100 | [FE0102#3] |
| CX.B3.FE0104 | Borrower Pair 3 Bor Emp Address | STRING | 100 | [FE0104#3] |
| CX.B3.FE0105 | Borrower Pair 3 Bor Emp City | STRING | 100 | [FE0105#3] |
| CX.B3.FE0106 | Borrower Pair 3 Bor Emp St | STATE | 0 | [FE0106#3] |
| CX.B3.FE0107 | Borrower Pair 3 Bor Emp Zip | ZIPCODE | 0 | [FE0107#3] |
| CX.B3.FE0110 | Borrower Pair 3 Bor Title | STRING | 100 | [FE0110#3] |
| CX.B3.FE0202 | Borrower Pair 3 CoBor Business | STRING | 100 | [FE0202#3] |
| CX.B3.FE0204 | Borrower Pair 3 CoBor Address | STRING | 100 | [FE0204#3] |
| CX.B3.FE0205 | Borrower Pair 3 CoBor Emp City | STRING | 100 | [FE0205#3] |
| CX.B3.FE0206 | Borrower Pair 3 CoBor Emp St | STATE | 0 | [FE0206#3] |
| CX.B3.FE0207 | Borrower Pair 3 CoBor Emp Zip | ZIPCODE | 0 | [FE0207#3] |
| CX.B3.FIRSTNAME | Borr 3 First Name | STRING | 50 | [4000#3] |
| CX.B3.FR0104 | Borrower Pair 3 Bor Address | STRING | 100 | [FR0104#3] |
| CX.B3.FR0106 | Borrower Pair 3 Bor City | STRING | 100 | [FR0106#3] |
| CX.B3.FR0107 | Borrower Pair 3 Bor State | STATE | 0 | [FR0107#3] |
| CX.B3.FR0108 | Borrower Pair 3 Bor Zip | ZIPCODE | 0 | [FR0108#3] |
| CX.B3.FR0126 | Borrower Pair 3 Bor Address | STRING | 100 | [FR0126#3] & " " & [FR0125#3] & " " &  [FR0127#3] |
| CX.B3.FR0204 | Borrower Pair 3 CoBor Address | STRING | 100 | [FR0204#3] |
| CX.B3.FR0206 | Borrower Pair 3 CoBor City | STRING | 100 | [FR0206#3] |
| CX.B3.FR0207 | Borrower Pair 3 CoBor State | STATE | 0 | [FR0207#3] |
| CX.B3.FR0208 | Borrower Pair 3 CoBor Zip | ZIPCODE | 0 | [FR0208#3] |
| CX.B3.FR0226 | Borrower Pair 3 CoBor Address | STATE | 0 | [FR0226#3] & " " & [FR0225#3] & " " &  [FR0227#3] |
| CX.B3.LASTNAME | Borr 3 Last Name | STRING | 50 | [4002#3] |
| CX.B4.1402 | Borrower Pair 4 Bor DOB | DATE | 0 | [1402#4] |
| CX.B4.1403 | Borrower Pair 4 CoBor DOB | DATE | 0 | [1403#4] |
| CX.B4.1868 | Borrower Pair 4 Bor Name | STRING | 100 | [36#4] & " " & [37#4] |
| CX.B4.1873 | Borrower Pair 4 CoBor Name | STRING | 100 | [68#4] & " " & [69#4] |
| CX.B4.910 | Borrower Pair 4 Bor Income | DECIMAL_2 | 0 | [910#4] |
| CX.B4.911 | Borrower Pair 4 CoBor Income | DECIMAL_2 | 0 | [911#4] |
| CX.B4.FE0102 | Borrower Pair 4 Bor Business | STRING | 100 | [FE0102#4] |
| CX.B4.FE0104 | Borrower Pair 4 Bor Emp Address | STRING | 100 | [FE0104#4] |
| CX.B4.FE0105 | Borrower Pair 4 Bor Emp City | STRING | 100 | [FE0105#4] |
| CX.B4.FE0106 | Borrower Pair 4 Bor Emp St | STATE | 0 | [FE0106#4] |
| CX.B4.FE0107 | Borrower Pair 4 Bor Emp Zip | ZIPCODE | 0 | [FE0107#4] |
| CX.B4.FE0110 | Borrower Pair 4 Bor Title | STRING | 100 | [FE0110#4] |
| CX.B4.FE0202 | Borrower Pair 4 CoBor Business | STRING | 100 | [FE0202#4] |
| CX.B4.FE0204 | Borrower Pair 4 CoBor Address | STRING | 100 | [FE0204#4] |
| CX.B4.FE0205 | Borrower Pair 4 CoBor Emp City | STRING | 100 | [FE0205#4] |
| CX.B4.FE0206 | Borrower Pair 4 CoBor Emp St | STATE | 0 | [FE0206#4] |
| CX.B4.FE0207 | Borrower Pair 4 CoBor Emp Zip | ZIPCODE | 0 | [FE0207#4] |
| CX.B4.FE0210 | Borrower Pair 4 CoBor Title | STRING | 100 | [FE0210#4] |
| CX.B4.FR0104 | Borrower Pair 4 Bor Address | STRING | 100 | [FR0104#4] |
| CX.B4.FR0106 | Borrower Pair 4 Bor City | STRING | 100 | [FR0106#4] |
| CX.B4.FR0107 | Borrower Pair 4 Bor State | STATE | 0 | [FR0107#4] |
| CX.B4.FR0108 | Borrower Pair 4 Bor Zip | ZIPCODE | 0 | [FR0108#4] |
| CX.B4.FR0126 | Borrower Pair 4 Bor Address | STRING | 100 | [FR0126#4] & " " & [FR0125#4] & " " &  [FR0127#4] |
| CX.B4.FR0204 | Borrower Pair 4 CoBor Address | STRING | 100 | [FR0204#4] |
| CX.B4.FR0206 | Borrower Pair 4 CoBor City | STRING | 100 | [FR0206#4] |
| CX.B4.FR0207 | Borrower Pair 4 CoBor State | STATE | 0 | [FR0207#4] |
| CX.B4.FR0208 | Borrower Pair 4 CoBor Zip | ZIPCODE | 0 | [FR0208#4] |
| CX.B4.FR0226 | Borrower Pair 4 CoBor Address | STATE | 0 | [FR0226#4] & " " & [FR0225#4] & " " &  [FR0227#4] |
| CX.BACCL.DISB.APP.2CH | BAC Closer Disbursement 2 Approval Check | STRING | 1 |  |
| CX.BACCL.DISB.APP.2CH.RI | BAC Closer Disbursement 2 Approval Check Re-Issue | STRING | 1 |  |
| CX.BACCL.DISB.APP.2DATE | BAC Closer Disbursement 2 Approval Date | STRING | 30 |  |
| CX.BACCL.DISB.APP.2NAMEB | BACCL.DISB.APP.2NAMEB | STRING | 60 |  |
| CX.BACCL.DISB.APP.CH | BAC Closer Disbursement Approval Check | STRING | 1 |  |
| CX.BACCL.DISB.APP.CH.RI | BAC Closer Disbursement Approval Check Re-Issue | STRING | 1 |  |
| CX.BACCL.DISB.APP.DATE | BAC Closer Disbursement Approval Date | STRING | 30 |  |
| CX.BACCL.DISB.APP.NAMEB | BACCL.DISB.APP.NAMEB | STRING | 60 |  |
| CX.BACLOP.DISB.APP.CH | BAC Loan Ops Closing Disbursement Approval Check | STRING | 1 |  |
| CX.BACLOP.DISB.APP.CH.RI | BAC Loan Ops Closing Disbursement Approval Check Re-Issue | STRING | 1 |  |
| CX.BACLOP.DISB.APP.DATE | BAC Loan Ops Closing Disbursement Approval Date | STRING | 30 |  |
| CX.BACLOP.DISB.APP.NAMEB | BACLOP.DISB.APP.NAMEB | STRING | 60 |  |
| CX.BACLOP.DISB.APP2.CH | BAC Loan Ops Closing Disbursement Approval 2 Check | STRING | 1 |  |
| CX.BACLOP.DISB.APP2.CH.RI | BAC Loan Ops Closing Disbursement Approval 2 Check Re-Issue | STRING | 1 |  |
| CX.BACLOP.DISB.APP2.DATE | BAC Loan Ops Closing Disbursement Approval 2 Date | STRING | 30 |  |
| CX.BACLOP.DISB.APP2.NAMEB | BACLOP.DISB.APP2.NAMEB | STRING | 60 |  |
| CX.BACPRO.QC.BRL.CLD.CHK | BAC Processing QC Bank Ref Letter Cleared Check | YN | 0 |  |
| CX.BACPRO.QC.BRL.CLD.DATE | BAC Processing QC Bank Ref Letter Cleared Date | STRING | 30 |  |
| CX.BACPRO.QC.BRL.DF.CHK | BAC Processing QC Bank Ref Letter Disc. Found Check | YN | 0 |  |
| CX.BACPRO.QC.BRL.DF.DATE | BAC Processing QC Bank Ref Letter Disc. Found Date | STRING | 30 |  |
| CX.BACPRO.QC.BRL.NA.CHK | BAC Processing QC Bank Ref Letter NA Check | YN | 0 |  |
| CX.BACPRO.QC.BRL.NA.DATE | BAC Processing QC Bank Ref Letter NA Date | STRING | 20 |  |
| CX.BACPRO.QC.BRL.PDG.CHK | BAC Processing QC Bank Ref Letter Pending Check | YN | 0 |  |
| CX.BACPRO.QC.BRL.PDG.DATE | BAC Processing QC Bank Ref Letter Pending Date | STRING | 30 |  |
| CX.BACPRO.QC.CPA.CLD.CHK | BAC Processing QC CPA Letter Cleared Check | YN | 0 |  |
| CX.BACPRO.QC.CPA.CLD.DATE | BAC Processing QC CPA Letter Cleared Date | STRING | 30 |  |
| CX.BACPRO.QC.CPA.DF.CHK | BAC Processing QC CPL Letter Disc. Found Check | YN | 0 |  |
| CX.BACPRO.QC.CPA.DF.DATE | BAC Processing QC CPL Letter Disc. Found Date | STRING | 30 |  |
| CX.BACPRO.QC.CPA.NA.CHK | BAC Processing QC CPA Letter NA Check | YN | 0 |  |
| CX.BACPRO.QC.CPA.NA.DATE | BAC Processing QC CPA Letter NA Date | STRING | 30 |  |
| CX.BACPRO.QC.CPA.PDG.CHK | BAC Processing QC CPA Letter Pending Check | YN | 0 |  |
| CX.BACPRO.QC.CPA.PDG.DATE | BAC Processing QC CPA Letter Pending Date | STRING | 30 |  |
| CX.BACPRO.QC.FFIEC.CHK | BAC Processing FFIEC QC | YN | 0 |  |
| CX.BACPRO.QC.FFIEC.DATE | BAC Processing QC FFIEC Verified Date | STRING | 30 |  |
| CX.BACPRO.WINDST | windstorm insurance checkb | YN | 0 |  |
| CX.BACUW.CURRENT.APPROVALS | BAC Underwriting Current Approvals | STRING | 50 |  |
| CX.BACUW.LOAN.APPR.LOG | BAC Underwriting Approver Log | STRING | 15000 |  |
| CX.BACUW.LOANPURCHASE | Approval Authority | YN | 0 |  |
| CX.BACUW.SEC2ND.APPRAREV.CHE | BAC Underwriting Second MGR Approver Check  - Review | STRING | 1 |  |
| CX.BACUW.SEC2ND.APREV.CHE.RI | BAC Underwriting Second MGR Approver Check Review | STRING | 1 |  |
| CX.BACUW.SEC2ND.CHECK | BAC Underwriting Second MGR Approver Check | STRING | 1 |  |
| CX.BACUW.SEC2ND.CHECK.RI | BAC Underwriting Second MGR Approver Check Re-Issue  | STRING | 1 |  |
| CX.BACUW.SEC2ND.DATE | BACUW.SEC2nd.DATE | STRING | 30 |  |
| CX.BACUW.SEC2ND.DN.LBL | BACUW.SEC2ND.DN.LBL | STRING | 20 |  |
| CX.BACUW.SEC2ND.EXEC.DATE | BACUW.SEC2nd.EXEC.DATE | STRING | 30 |  |
| CX.BACUW.SEC2ND.EXEC.NAME1 | BACUW.SEC2ND.EXEC.NAME1 | STRING | 60 |  |
| CX.BACUW.SEC2ND.NAME2B | BACUW.SEC2ND.NAME2B | STRING | 60 |  |
| CX.BACUW.SECAPP | BAC Underwriting Second Approver | DROPDOWNLIST | 0 |  |
| CX.BACUW.SECAPP.APPRARE.DATE | BAC Underwriting Second Approver Appraisal Review Date | STRING | 30 |  |
| CX.BACUW.SECAPP.APPRARE.NM2 | BACUW.SECAPP.APPRARE.NM2 | STRING | 60 |  |
| CX.BACUW.SECAPP.APPRAREV.CHE | BAC Underwriting Second Approver Appraisal Review Check | STRING | 1 |  |
| CX.BACUW.SECAPP.APREV.CHE.RI | BAC Underwriting Second Approver Appraisal Review Check Re-Issue | STRING | 1 |  |
| CX.BACUW.SECAPP.CHECK | BAC Underwriting Second Approver Check | STRING | 1 |  |
| CX.BACUW.SECAPP.CHECK.RI | BAC Underwriting Second Approver Check Re-Issue | STRING | 1 |  |
| CX.BACUW.SECAPP.DATE | BAC Underwriting Second Approver Date | STRING | 30 |  |
| CX.BACUW.SECAPP.DN.LBL | BAC Underwriting Second Approver Denied LBL | STRING | 20 |  |
| CX.BACUW.SECAPP.NAME2B | BACUW.SECAPP.NAME2B | STRING | 60 |  |
| CX.BACUW.SECCOM.CHECK | BAC Underwriting Second Committee Approver Check | STRING | 1 |  |
| CX.BACUW.SECCOM.CHECK.RI | BAC Underwriting Second Committee Approver Check Re-Issue | STRING | 1 |  |
| CX.BACUW.SECCOM.DATE | BACUW.SECCom.DATE | STRING | 30 |  |
| CX.BACUW.SECCOM.NAME1 | BACUW.SECCOM.NAME1 | STRING | 60 |  |
| CX.BACUW.THCAPP | BAC Underwriting Third Approver | DROPDOWNLIST | 0 |  |
| CX.BACUW.UNDERW.APPRAREV.CHE | BAC Underwriting Approval Appraisal Review Check | STRING | 1 |  |
| CX.BACUW.UNDERW.APPRAREV.DAT | BAC Underwriting Approval Appraisal Review Date | STRING | 30 |  |
| CX.BACUW.UNDERW.APPRAREV.NM1 | BACUW.UNDERW.APPRAREV.NM1 | STRING | 60 |  |
| CX.BACUW.UNDERW.APREV.CHE.RI | BAC Underwriting Approval Appraisal Review Check Re-Issue | STRING | 1 |  |
| CX.BACUW.UNDERW.CHEC | BAC Underwriting Approved Check | STRING | 1 |  |
| CX.BACUW.UNDERW.CHEC.RI | BAC Underwriting Approved Check Re-Issue | STRING | 1 |  |
| CX.BACUW.UNDERW.DATEBAC | BAC Underwriting Approved Date | STRING | 30 |  |
| CX.BACUW.UNDERW.DN.LBL | BAC Underwriting Denied LBL | STRING | 20 |  |
| CX.BACUW.UNDERW.NAME1 | BAC Underwriting Approver Name | STRING | 50 |  |
| CX.BCA.FU.DT | Borrower Cert and Authorization Follow-up Date | DATE | 0 |  |
| CX.BCA.RCD.DT | Borrower Cert and AuthorizationReceived Date | DATE | 0 |  |
| CX.BD.AMOUNT.1 | percent rate bought down | DECIMAL_3 | 0 |  |
| CX.BD.AMOUNT.2 | percent rate bought down | DECIMAL_3 | 0 |  |
| CX.BD.AMOUNT.3 | percent rate bought down | DECIMAL_3 | 0 |  |
| CX.BD.AS.1 | annual subsidy 1  | DECIMAL_2 | 0 |  |
| CX.BD.AS.2 | annual subsidy 2 | DECIMAL_2 | 0 |  |
| CX.BD.AS.3 | annual subsidy 3 | DECIMAL_2 | 0 |  |
| CX.BD.CONTRACT.AMOUNT | total buydown amount shown on contract | DECIMAL_2 | 0 |  |
| CX.BD.CONTRACT.PERCENT | percent not to exceed contract buydown amount | STRING | 5 |  |
| CX.BD.CONTRACT.PERCENT.CALC | calculation of percent times sales price  | DECIMAL_2 | 0 |  |
| CX.BD.DOES.EXCEED.IT | seller buydown screen | DROPDOWNLIST | 0 |  |
| CX.BD.EXCEED.DOES.IT | does this exceed the allowable amount | STRING | 3 |  |
| CX.BD.FIRST.DATE.2 | BUYDOWN FIRST PAYMENT DATE  | DATE | 0 |  |
| CX.BD.FIRST.DATE.3 | BUYDOWN FIRST PAYMENT DATE  | DATE | 0 |  |
| CX.BD.IR.ADJ | IR adjustment | DECIMAL_7 | 0 | ([#CX.BD.NEW.RATE.1]*.01)/12 |
| CX.BD.MAX.IPC.DOLLAR | max ipc dollar amount | DECIMAL_2 | 0 |  |
| CX.BD.MAX.IPC.PERCENT | MAX IPC AMOUNT | DECIMAL_2 | 0 |  |
| CX.BD.MONTHS.1 | BUYDOWN PAYMENT MONTHS | STRING | 10 |  |
| CX.BD.MONTHS.2 | BUYDOWN PAYMENT MONTHS | STRING | 10 |  |
| CX.BD.MONTHS.3 | BUYDOWN PAYMENT MONTHS | STRING | 10 |  |
| CX.BD.NEW.RATE.1 | buydown new rate  | DECIMAL_3 | 0 |  |
| CX.BD.NEW.RATE.2 | buydown new rate  | DECIMAL_3 | 0 |  |
| CX.BD.NEW.RATE.3 | buydown new rate  | DECIMAL_3 | 0 |  |
| CX.BD.PAYMENT.1 | buydown monthly payment  | DECIMAL_2 | 0 | [#1109]*((([#CX.BD.NEW.RATE.1]*0.01) / 12)*Pow((1+(([#CX.BD.NEW.RATE.1] * 0.01)/12)),[4]))/(Pow((1+( |
| CX.BD.PAYMENT.2 | buydown monthly payment  | DECIMAL_2 | 0 | [#1109]*((([#CX.BD.NEW.RATE.2]*0.01) / 12)*Pow((1+(([#CX.BD.NEW.RATE.2] * 0.01)/12)),[4]))/(Pow((1+( |
| CX.BD.PAYMENT.3 | buydown monthly payment  | DECIMAL_2 | 0 | [#1109]*((([#CX.BD.NEW.RATE.3]*0.01) / 12)*Pow((1+(([#CX.BD.NEW.RATE.3] * 0.01)/12)),[4]))/(Pow((1+( |
| CX.BD.PYMNT.1 | Buydown monthly pymnt | DECIMAL_2 | 0 | [#1109]*(([#CX.BD.IR.ADJ]*[#CX.BD.TERM.PWR])/[#cx.bd.term.pwr.2]) |
| CX.BD.SUBSIDY.1 | subsidy amount | DECIMAL_2 | 0 |  |
| CX.BD.SUBSIDY.2 | subsidy amount | DECIMAL_2 | 0 |  |
| CX.BD.SUBSIDY.3 | subsidy amount | DECIMAL_2 | 0 |  |
| CX.BD.TERM.PWR | Buy Down Power | DECIMAL_6 | 0 | Pow((1+([#CX.BD.NEW.RATE.1] * 0.01)/12),[4]) |
| CX.BD.TERM.PWR.2 | Buy Down Power 2 | DECIMAL_6 | 0 | Pow((1+([#CX.BD.NEW.RATE.1] * 0.01)/12),([4]-1)) |
| CX.BD.TOTAL.DOLLAR | TOTAL DOLLAR AMOUNT OF ACTUAL IPC | DECIMAL_2 | 0 |  |
| CX.BD.TOTAL.IPC.PERCENT | total IPC % | DECIMAL_2 | 0 |  |
| CX.BD.TOTAL.SELLER.CC | TOTAL OF SELLER PAID CLOSING COSTS | DECIMAL_2 | 0 |  |
| CX.BDOC1 | B1 DOCTYPE | DROPDOWNLIST | 0 |  |
| CX.BDOC2 | B2 DOCTYPE | DROPDOWNLIST | 0 |  |
| CX.BIC.B.CALC | Return of Income Calc | DECIMAL_2 | 0 | iif ([CX.BIC.B.FREQUENCY]="Hourly", ((([#CX.BIC.DOLLARS]*[#CX.BIC.HOURS])*52)/12), iif ([CX.BIC.B.FR |
| CX.BIC.B.CALC2 | Return of Income Calc | DECIMAL_2 | 0 | iif ([CX.BIC.B.FREQUENCY2]="Hourly", ((([#CX.BIC.DOLLARS2]*[#CX.BIC.HOURS2])*52)/12), iif ([CX.BIC.B |
| CX.BIC.B.FREQUENCY | Borrower's Pay Frequency | STRING | 25 |  |
| CX.BIC.B.FREQUENCY2 | Borrower's Pay Frequency 2 | STRING | 25 |  |
| CX.BIC.C.CALC | Return of Income Calc | DECIMAL_2 | 0 | iif ([CX.BIC.C.FREQUENCY]="Hourly", ((([#CX.BIC.C.DOLLARS]*[#CX.BIC.C.HOURS])*52)/12), iif ([CX.BIC. |
| CX.BIC.C.CALC2 | Return of Income Calc | DECIMAL_2 | 0 | iif ([CX.BIC.C.FREQUENCY2]="Hourly", ((([#CX.BIC.C.DOLLARS2]*[#CX.BIC.C.HOURS2])*52)/12), iif ([CX.B |
| CX.BIC.C.DOLLARS | Dollars per Period | DECIMAL_2 | 0 |  |
| CX.BIC.C.DOLLARS2 | Dollars per Period | DECIMAL_2 | 0 |  |
| CX.BIC.C.FORMULA | formula being used for income calc | STRING | 40 |  |
| CX.BIC.C.FORMULA2 | formula being used for income calc | STRING | 40 |  |
| CX.BIC.C.FREQUENCY | CoBorrower's Pay Frequency | STRING | 25 |  |
| CX.BIC.C.FREQUENCY2 | CoBorrower's Pay Frequency | STRING | 25 |  |
| CX.BIC.C.HOURS | Hours per Week | DECIMAL_2 | 0 |  |
| CX.BIC.C.HOURS2 | Hours per Week | DECIMAL_2 | 0 |  |
| CX.BIC.DOLLARS | Dollars per Period | DECIMAL_2 | 0 |  |
| CX.BIC.DOLLARS2 | Dollars per Period | DECIMAL_2 | 0 |  |
| CX.BIC.FORMULA | formula being used for income calc | STRING | 40 |  |
| CX.BIC.FORMULA2 | Formula being used for income calc | STRING | 40 |  |
| CX.BIC.HOURS | Hours per Week | DECIMAL_2 | 0 |  |
| CX.BIC.HOURS2 | Hours per Week 2 | DECIMAL_2 | 0 |  |
| CX.BKRSTATUS000.CHECK | BKRSTATUS000.CHECK | X | 0 |  |
| CX.BKRSTATUS000BY | Changed By | STRING | 30 |  |
| CX.BKRSTATUS000DATE | Date Changed | STRING | 30 |  |
| CX.BKRSTATUS010.CHECK | BKRSTATUS010.CHECK | X | 0 |  |
| CX.BKRSTATUS010BY | Changed By | STRING | 30 |  |
| CX.BKRSTATUS010DATE | Date Changed | STRING | 30 |  |
| CX.BKRSTATUS020.CHECK | BKRSTATUS020.CHECK | X | 0 |  |
| CX.BKRSTATUS020BY | Changed By | STRING | 30 |  |
| CX.BKRSTATUS020DATE | Date Changed | STRING | 30 |  |
| CX.BKRSTATUS030.CHECK | BKRSTATUS030.CHECK | X | 0 |  |
| CX.BKRSTATUS030BY | Changed By | STRING | 30 |  |
| CX.BKRSTATUS030CHECK | Resubmitted after Approval | X | 0 |  |
| CX.BKRSTATUS030DATE | Date Changed | STRING | 30 |  |
| CX.BLEND.LOANID | Blend - Loan GUID at import | STRING | 40 |  |
| CX.BOND | Bond Name | STRING | 150 |  |
| CX.BORMID | Borrower Middle Score | STRING | 10 | LMedian([#2871], [#2872], [#2873]) |
| CX.BORMID2 | Borrower Middle Score 2 | STRING | 10 | LMedian([#2883], [#2884], [#2885]) |
| CX.BORMID3 | Borrower Middle Score 3 | STRING | 10 | LMedian([#2895], [#2896], [#2897]) |
| CX.BORMID4 | Borrower Middle Score 4 | STRING | 10 | LMedian([#2907], [#2908], [#2909]) |
| CX.BORMID5 | Borrower Middle Score 5 | STRING | 10 | LMedian([#2919], [#2920], [#2921]) |
| CX.BORMID6 | Borrower Middle Score 6 | STRING | 10 | LMedian([#2931], [#2932], [#2933]) |
| CX.BORR.CONTACT.BY.PROCESSOR | Borrowers have been contacted by the Processor  | X | 0 |  |
| CX.BORR.NAME | Borrower Name | STRING | 50 | [4000]&" "&[4002] |
| CX.BORR.NICKNAME | Borrower's Nickname | STRING | 50 |  |
| CX.BORRCOUNT | Borrower Count | INTEGER | 0 | Count([4000#1], [4000#2], [4000#3], [4000#4], [4000#5], [4000#6], [4004#1], [4004#2], [4004#3], [400 |
| CX.BORRCOURISK | Borrower Country of Risk | STRING | 20 |  |
| CX.BORRCOURISKC | Borrower Country of Risk Code | STRING | 2 |  |
| CX.BORRNAMECOMBINED | Borrower First, Middle & Last names combined | STRING | 100 | [4000]&" "&[4001]&" "&[4002] |
| CX.BORROWER.COUNT | Count of all borrowers | INTEGER | 0 | COUNT([37#1], [37#2], [37#3], [37#4], [37#5], [37#6], [69#1], [69#2], [69#3], [69#4], [69#5], [69#6] |
| CX.BORROWER.INVESTOR | Current Investor | STRING | 40 |  |
| CX.BORROWERRACE | Borrower Race | DROPDOWNLIST | 0 |  |
| CX.BORROWERRACEAG | Aggregate of the Values of the race fields | STRING | 8 | [1524] & [1525] & [1526] & [1529] &[1527] &[1530] &[1528] |
| CX.BORRPBEMAIL | Private Banking Approval Email Sent | X | 0 |  |
| CX.BORRWORKNUMBER | Direct Work Number | STRING | 25 |  |
| CX.BP.SCORE.1 | BP Score Present 1 | INTEGER | 0 | iif(IsEmpty([CX.PAIR1.BORROWER.FICO]), 0, 1) |
| CX.BP.SCORE.2 | BP Score Present 2 | INTEGER | 0 | iif(IsEmpty([CX.PAIR2.BORROWER.FICO]), 0, 1) |
| CX.BR.SS.LAST4 | Borrower Last 4 of Social Security # | STRING | 4 | Right([65],4) |
| CX.BRANCH | Branch | STRING | 30 |  |
| CX.BRANCH.CODE | Branch Code | DROPDOWNLIST | 0 |  |
| CX.BRANCH.LEADSOURCE | Branch Lead Source | DROPDOWN | 256 |  |
| CX.BRANCH.NAME | Branch Name | DROPDOWNLIST | 0 |  |
| CX.BRIAN.DOC.BUCKET | Brian Testing | STRING | 45 |  |
| CX.BRIAN.DOC.TITLE | Brian Testing Print to eFolder | STRING | 45 |  |
| CX.BROKER.CANCELREQ.DT | Date/Time - Broker Cancel Request | STRING | 99 |  |
| CX.BROKER.CANCELREQ.NOTES | Broker Cancel Request Notes | STRING | 8000 |  |
| CX.BROKER.CANCELREQ.UN | Submitting User - Broker Cancel Request | STRING | 99 |  |
| CX.BROKER.CLICKED.BY2 | Who clicked the second checkbox | STRING | 30 |  |
| CX.BROKER.CLICKED.DATE2 | When the second checkbox was clicked | DATE | 0 |  |
| CX.BROKER.DENIALREQ.DT | Date/Time - Broker Denial Request | STRING | 99 |  |
| CX.BROKER.DENIALREQ.NOTES | Notes - Broker Denial Request | STRING | 99 |  |
| CX.BROKER.DENIALREQ.UN | User - Broker Denial Request | STRING | 99 |  |
| CX.BROKER.QCREVIEW.DT | Date/Time - Compliance Review Result Complete | STRING | 99 |  |
| CX.BROKER.QCREVIEW.NOTES | Notes - Compliance Review Result Complete | STRING | 8000 |  |
| CX.BROKER.QCREVIEW.RESULT | Compliance Review Result | STRING | 99 |  |
| CX.BROKER.QCREVIEW.UN | User - Compliance Review Result Complete | STRING | 99 |  |
| CX.BROKERED.SUBMITTED.TO.INV | Brokered File Submitted to investor | YN | 0 |  |
| CX.BRW.LEADSOURCE | BrwSummary - Lead Source | DROPDOWNLIST | 0 |  |
| CX.BRW.PRIM1.FNAME | Borrower - Primary First Name | STRING | 40 | [4000#1] |
| CX.BRW.PRIM1.LNAME | Borrower - Primary Last Name | STRING | 40 | [4002#1] |
| CX.BRWPAIR1.FN | Borrower Pair #1 - First Name - 4000#2 | STRING | 40 | [4000#2] |
| CX.BRWPAIR1.LN | Borrower Pair #1 - Last Name - 4002#2 | STRING | 40 | [4002#2] |
| CX.BRWPAIR2.FN | Borrower Pair # 2 - First Name | STRING | 40 | [4004#2] |
| CX.BRWPAIR2.LN | Borrower Pair #2 - First Name | STRING | 40 | [4006#2] |
| CX.BS.BRANCH | Branch | DROPDOWNLIST | 0 |  |
| CX.BS.BRANCHMANAGER | HMC Branch Manager | STRING | 555 |  |
| CX.BSAQ1 | BSARRQ1 | DROPDOWNLIST | 0 |  |
| CX.BSAQ2 | BSARRQ2 | DROPDOWNLIST | 0 |  |
| CX.BSAQ3 | BSARRQ3 | DROPDOWNLIST | 0 |  |
| CX.BSAQ4 | BSARRQ4 | DROPDOWNLIST | 0 |  |
| CX.BSAQ5 | BSARRQ5 | DROPDOWNLIST | 0 |  |
| CX.BSAQ6 | BSARRQ6 | DECIMAL | 0 |  |
| CX.BSARATING | BSA Rating | STRING | 10 |  |
| CX.BSARRSUM | BSARRSUM | DECIMAL | 0 | sum([CX.BSAQ1], [CX.BSAQ2], [CX.BSAQ3], [CX.BSAQ4], [CX.BSAQ5], [CX.BSAQ6]) |
| CX.BSO.BRANCH | Branch Name | STRING | 40 |  |
| CX.BSO.BRANCH.MANAGER | Branch Manager | STRING | 75 |  |
| CX.BSO.CROSS.STATE | Cross State Loan | X | 0 |  |
| CX.BSO.CROSS.STATE.LO | Cross State Loan - Loan Officer | STRING | 75 |  |
| CX.BSO.PEERGROUP | Peer Group | STRING | 20 |  |
| CX.BSO.REGION | Divisional Manager | STRING | 30 |  |
| CX.BSO.REGION.2 | Regional Manager | STRING | 75 |  |
| CX.BSO.TEAMLOAN | Team Loan | X | 0 |  |
| CX.BSO.TEAMLOAN.LO | Team Loan - Loan Officer | STRING | 75 |  |
| CX.BSO.TERMED | Termed LO | X | 0 |  |
| CX.BSO.TERMED.LO | Termed LO Name | STRING | 75 |  |
| CX.BSO.TRANSLOAN | Transitional Loan | X | 0 |  |
| CX.BSO.TRANSLOAN.LO | Transitional Loan - Loan Officer | STRING | 75 |  |
| CX.BUILDER.DEPOSIT | Builder Deposit | DECIMAL_2 | 0 |  |
| CX.BUSINESS.SOURCE | Business Source | DROPDOWNLIST | 0 |  |
| CX.BUYDOWNTOTALSUBSIDY | Buydown Total Seller Subsidy | DECIMAL_2 | 0 |  |
| CX.BUYDOWNTYPE | Buydown Type  | DROPDOWNLIST | 0 |  |
| CX.BUYERSSAVINGS | Buyer's Savings | DECIMAL_2 | 0 |  |
| CX.BUYERSSAVINGSE | Buyer's Savings Eligibility | STRING | 30 |  |
| CX.BWRAPPSENTCALL | Bwr App Sent Call | DATE | 0 |  |
| CX.BWRAPPSENTEMAIL | Bwr App Sent Email | DATE | 0 |  |
| CX.BWS.PRINTYN | Borrower Worksheet Print Yes/No | YN | 0 |  |
| CX.C.RETIRED | Co-Borrower Retired | X | 0 |  |
| CX.CA.DP1 | CA Domestic Partner Q1 | X | 0 |  |
| CX.CA.DP2 | CA Domestic Partner Q2 | X | 0 |  |
| CX.CA.DP3 | CA Domestic Partner Q3 | X | 0 |  |
| CX.CA.DP4 | CA Domestic Partner Q4 | X | 0 |  |
| CX.CA.EXPIRATION.DATE | Offer Ready Expiration Date | STRING | 99 |  |
| CX.CA.ISSUE.BY | Offer Ready Issued By | STRING | 99 |  |
| CX.CA.ISSUE.DATE | Offer Ready Issued Date | DATE | 0 |  |
| CX.CA.OBO.MM | CA On Behalf Of Mortgage Manager | STRING | 100 |  |
| CX.CA.OBO.MM.EMAIL | CA On Behalf Of Mortgage Manager Email | STRING | 200 |  |
| CX.CA.REQUEST.BY | Offer Ready Requested By | STRING | 99 |  |
| CX.CA.REQUEST.DATE | Offer Ready Requested Date | DATE | 0 |  |
| CX.CA.SUSP.DATE | Offer Ready Suspense Date | DATE | 0 |  |
| CX.CA.SUSPENSE.BY | Offer Ready Suspended By | STRING | 99 |  |
| CX.CAD.2ND.COUNT.RECEIVED | Count of 2nd Appraisals Received | INTEGER | 0 |  |
| CX.CAD.2ND.COUNT.SENT | Count of 2nd Appraisals Sent | INTEGER | 0 |  |
| CX.CAD.2ND.METHOD | 2nd Appraisal Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.2ND.REC.COUNT | Count of 2nd Appraisals Received | INTEGER | 0 |  |
| CX.CAD.2ND.RECV.BY | 2nd Appraisal Received By | STRING | 20 |  |
| CX.CAD.2ND.RECV.DATE | 2nd Appraisal Received Date | STRING | 20 |  |
| CX.CAD.2ND.SENT.BY | 2nd Appraisal Sent By | STRING | 20 |  |
| CX.CAD.2ND.SENT.DATE | 2nd Appraisal Sent Date | STRING | 20 |  |
| CX.CAD.ADR.METHOD | Desk Review Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.ADR.REC.COUNT | Count of Desk Reviews Received | INTEGER | 0 |  |
| CX.CAD.ADR.RECV.BY | Desk Review Received By | STRING | 20 |  |
| CX.CAD.ADR.RECV.DATE | Desk Review Received Date | STRING | 20 |  |
| CX.CAD.ADR.SENT.BY | Desk Review Sent By | STRING | 20 |  |
| CX.CAD.ADR.SENT.COUNT | Count of ADRs Sent | INTEGER | 0 |  |
| CX.CAD.ADR.SENT.DATE | Desk Review Sent Date | STRING | 20 |  |
| CX.CAD.AFR.METHOD | Field Review Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.AFR.REC.COUNT | Count of Field Reviews Received | INTEGER | 0 |  |
| CX.CAD.AFR.RECV.BY | Field Review Received By | STRING | 20 |  |
| CX.CAD.AFR.RECV.DATE | Field Review Received Date | STRING | 20 |  |
| CX.CAD.AFR.SENT.BY | Field Review Sent By | STRING | 20 |  |
| CX.CAD.AFR.SENT.COUNT | Count of Field Reviews Received | INTEGER | 0 |  |
| CX.CAD.AFR.SENT.DATE | Field Review Sent Date | STRING | 20 |  |
| CX.CAD.APPR.METHOD | Appraisal Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.APPR.REC.COUNT | Count of Appraisals Received | INTEGER | 0 |  |
| CX.CAD.APPR.RECV.BY | Appraisal Received By | STRING | 20 |  |
| CX.CAD.APPR.RECV.DATE | Appraisal Received Date | STRING | 20 |  |
| CX.CAD.APPR.SENT.BY | Appraisal Sent By | STRING | 20 |  |
| CX.CAD.APPR.SENT.COUNT | Count of Appraisals Sent | INTEGER | 0 |  |
| CX.CAD.APPR.SENT.DATE | Appraisal Sent Date | STRING | 20 |  |
| CX.CAD.ARCHIVE.2ND | CX.CAD.ARCHIVE.2ND | DATE | 0 |  |
| CX.CAD.ARCHIVE.ADR | CX.CAD.ARCHIVE.ADR | DATE | 0 |  |
| CX.CAD.ARCHIVE.APPR | CX.CAD.ARCHIVE.APPR | DATE | 0 |  |
| CX.CAD.ARCHIVE.ARV | CX.CAD.ARCHIVE.ARV | DATE | 0 |  |
| CX.CAD.ARCHIVE.AUS | CX.CAD.ARCHIVE.AUS | DATE | 0 |  |
| CX.CAD.ARCHIVE.AVM | CX.CAD.ARCHIVE.AVM | DATE | 0 |  |
| CX.CAD.ARV.COUNT.RECEIVED | Count of Recerts Received | INTEGER | 0 |  |
| CX.CAD.ARV.COUNT.SENT | Count of Recerts Sent | INTEGER | 0 |  |
| CX.CAD.ARV.METHOD | Recertification Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.ARV.RECV.BY | Recertification Received By | STRING | 20 |  |
| CX.CAD.ARV.RECV.DATE | Recertification Received Date | STRING | 20 |  |
| CX.CAD.ARV.SENT.BY | Recertification Sent By | STRING | 20 |  |
| CX.CAD.ARV.SENT.DATE | Recertification Sent Date | STRING | 20 |  |
| CX.CAD.AUS.COUNT.RECEIVED | Count of AUS Vals Received | INTEGER | 0 |  |
| CX.CAD.AUS.COUNT.SENT | Count of AUS Vals Sent | INTEGER | 0 |  |
| CX.CAD.AUS.METHOD | AUS Val Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.AUS.RECV.BY | AUS Val Received By | STRING | 20 |  |
| CX.CAD.AUS.RECV.DATE | AUS Val Received Date | STRING | 20 |  |
| CX.CAD.AUS.SENT.BY | AUS Val Sent By | STRING | 20 |  |
| CX.CAD.AUS.SENT.DATE | AUS Val Sent Date | STRING | 20 |  |
| CX.CAD.AUS.VAL.AMT | AUS Valuation Amount | DECIMAL_2 | 0 |  |
| CX.CAD.AVM.METHOD | AVM Sent Method | DROPDOWNLIST | 0 |  |
| CX.CAD.AVM.REC.COUNT | Count of AVMs Received | INTEGER | 0 |  |
| CX.CAD.AVM.RECV.BY | AVM Received By | STRING | 20 |  |
| CX.CAD.AVM.RECV.DATE | AVM Received Date | STRING | 20 |  |
| CX.CAD.AVM.SENT.BY | AVM Sent By | STRING | 20 |  |
| CX.CAD.AVM.SENT.COUNT | Count of AVMs Sent | INTEGER | 0 |  |
| CX.CAD.AVM.SENT.DATE | AVM Sent Date | STRING | 20 |  |
| CX.CAD.BHE.CHECKED | CAD.BHE.CHECKED | X | 0 |  |
| CX.CAD.BWE.CHECKED | CAD.BWE.CHECKED | X | 0 |  |
| CX.CAD.CHE.CHECKED | CAD.CHE.CHECKED | X | 0 |  |
| CX.CAD.COPY.RECEIVED.2ND | CX.CAD.COPY.RECEIVED.2ND | DATE | 0 | [@Document.DateReceived.*PROPERTY: Appraisal 2nd] |
| CX.CAD.COPY.RECEIVED.ADR | CX.CAD.COPY.RECEIVED.ADR | DATE | 0 | [@Document.DateReceived.*PROPERTY: Appraisal Review] |
| CX.CAD.COPY.RECEIVED.APPR | CX.CAD.COPY.RECEIVED.APPR | DATE | 0 | [@Document.DateReceived.*PROPERTY: Appraisal] |
| CX.CAD.COPY.RECEIVED.ARV | CX.CAD.COPY.RECEIVED.ARV | DATE | 0 | [@Document.DateReceived.*PROPERTY: Appraisal Recertification] |
| CX.CAD.COPY.RECEIVED.AUS | CX.CAD.COPY.RECEIVED.AUS | DATE | 0 | [@Document.DateReceived.*PROPERTY: AUS Valuation] |
| CX.CAD.COPY.RECEIVED.AVM | CX.CAD.COPY.RECEIVED.AVM | DATE | 0 | [@Document.DateReceived.*PROPERTY: Appraisal AVM] |
| CX.CAD.COUNT.TOTAL.DIFF | All Received minus All Sent | DECIMAL | 0 | SumAny ([#CX.CAD.COUNT.TOTAL.RECV] - [#CX.CAD.COUNT.TOTAL.SENT]) |
| CX.CAD.COUNT.TOTAL.RECV | Total Valuations Received | DECIMAL | 0 | SumAny([#CX.CAD.REC.COUNT.APPR],[#CX.CAD.REC.COUNT.AVM],[#CX.CAD.REC.COUNT.ADR],[#CX.CAD.REC.COUNT.2 |
| CX.CAD.COUNT.TOTAL.SENT | Total Valuations Sent | DECIMAL | 0 | SumAny([#CX.CAD.SENT.COUNT.APPR],[#CX.CAD.SENT.COUNT.AVM],[#CX.CAD.SENT.COUNT.ADR],[#CX.CAD.SENT.COU |
| CX.CAD.COVER.SENT.METHOD | CAD Sent How | STRING | 10 |  |
| CX.CAD.COVER.TEXT | Valuation Cover Letter Text | STRING | 1500 | "Borrower: " & [31] & vbCrLf &
iif (NOT IsEmpty([68]), "Co-Borrower: " & [1602] & vbCrLf, "") &

 |
| CX.CAD.COVERLETTER.PRINT | Puts Cover Letter in Print Menu | X | 0 |  |
| CX.CAD.CWE.CHECKED | CAD.CWE.CHECKED | X | 0 |  |
| CX.CAD.EMAIL.COUNT.SENT | Count of Emailed Certifications | INTEGER | 0 | SumAny([#CX.CAD.SENT.COUNT.APPR],[#CX.CAD.SENT.COUNT.AVM],[#CX.CAD.SENT.COUNT.ADR],[#CX.CAD.COUNT.SE |
| CX.CAD.EMAILS.USED.TEXT | Concantenated Email Addresses | STRING | 200 | iif ([CX.CAD.BHE.CHECKED]="X", [1240] & "; ","") & 
iif ([CX.CAD.BWE.CHECKED]="X", [1178] & "; ","" |
| CX.CAD.INV.DEL.CERT | Investor Delivery Cert Cover | STRING | 600 | iif (isDate([CX.CAD.APPR.SENT.DATE]),iif ([#CX.CAD.APPR.SENT.COUNT] = "1","1 copy ", [CX.CAD.APPR.SE |
| CX.CAD.INV.PRINT.DATE | Date Inv Cert Printed Last | X | 0 |  |
| CX.CAD.LAST.SENT.BY | Valuation Last Sent By | STRING | 20 |  |
| CX.CAD.LAST.SENT.ON | Valuation Last Sent On | DATE | 0 |  |
| CX.CAD.LAST.SENT.TYPE | Last Valuation Sent | STRING | 20 |  |
| CX.CAD.METHOD.2ND | CX.CAD.METHOD.2ND | DROPDOWNLIST | 0 |  |
| CX.CAD.METHOD.ADR | CX.CAD.METHOD.ADR | DROPDOWNLIST | 0 |  |
| CX.CAD.METHOD.APPR | CX.CAD.METHOD.APPR | DROPDOWNLIST | 0 |  |
| CX.CAD.METHOD.ARV | CX.CAD.METHOD.ARV | DROPDOWNLIST | 0 |  |
| CX.CAD.METHOD.AUS | CX.CAD.METHOD.AUS | DROPDOWNLIST | 0 |  |
| CX.CAD.METHOD.AVM | CX.CAD.METHOD.AVM | DROPDOWNLIST | 0 |  |
| CX.CAD.REC.COUNT.2ND | CX.CAD.REC.COUNT.2ND | INTEGER | 0 |  |
| CX.CAD.REC.COUNT.ADR | CX.CAD.REC.COUNT.ADR | INTEGER | 0 |  |
| CX.CAD.REC.COUNT.APPR | CX.CAD.REC.COUNT.APPR | INTEGER | 0 |  |
| CX.CAD.REC.COUNT.ARV | CX.CAD.REC.COUNT.ARV | INTEGER | 0 |  |
| CX.CAD.REC.COUNT.AUS | CX.CAD.REC.COUNT.AUS | INTEGER | 0 |  |
| CX.CAD.REC.COUNT.AVM | CX.CAD.REC.COUNT.AVM | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.2ND | CX.CAD.SENT.COUNT.2ND | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.ADR | CX.CAD.SENT.COUNT.ADR | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.APPR | CX.CAD.SENT.COUNT.APPR | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.ARV | CX.CAD.SENT.COUNT.ARV | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.AUS | CX.CAD.SENT.COUNT.AUS | INTEGER | 0 |  |
| CX.CAD.SENT.COUNT.AVM | CX.CAD.SENT.COUNT.AVM | INTEGER | 0 |  |
| CX.CAD.SENT.DIFFERENCE | CAD.SENT.DIFFERENCE | INTEGER | 0 | SumAny([#CX.CAD.VAL.COUNT.RECEIVED] - [#CX.CAD.EMAIL.COUNT.SENT]) |
| CX.CAD.VAL.COUNT.RECEIVED | Total Valuations Received | INTEGER | 0 | SumAny(Val([CX.CAD.REC.COUNT.APPR]),Val([CX.CAD.REC.COUNT.AVM]),Val([CX.CAD.REC.COUNT.ADR]),Val([CX. |
| CX.CANCELREASON | Cancel Reason | DROPDOWNLIST | 0 |  |
| CX.CANCELREASONO | Cancel Reason Other | STRING | 500 |  |
| CX.CANCELREQDATE | Cancel Request Date | DATE | 0 |  |
| CX.CAPTURE.INCOME | Capture 2009 Income | X | 0 |  |
| CX.CASE.NUMBER.TRANS.DATE | Case Number Transfer Date | DATE | 0 |  |
| CX.CB.FULL.NAME1 | CoBorr Full Name 1 | STRING | 50 | IIF ([4005#1] = "", [4004#1]&" "&[4006#1], [4004#1]&" "&[4005#1]&" "&[4006#1]) |
| CX.CB.FULL.NAME2 | CoBorr Full Name 2 | STRING | 50 | IIF ([4005#2] = "", [4004#2]&" "&[4006#2], [4004#2]&" "&[4005#2]&" "&[4006#2]) |
| CX.CB.FULL.NAME3 | CoBorr Full Name 3 | STRING | 50 | IIF ([4005#3] = "", [4004#3]&" "&[4006#3], [4004#3]&" "&[4005#3]&" "&[4006#3]) |
| CX.CB2.FIRSTNAME | CoBorr 2 First Name | STRING | 50 | [4004#2] |
| CX.CB2.LASTNAME | CoBorr 2 Last Name | STRING | 50 | [4006#2] |
| CX.CB3.FIRSTNAME | CoBorr 3 First Name | STRING | 50 | [4004#3] |
| CX.CB3.LASTNAME | CoBorr 3 Last Name | STRING | 50 | [4006#3] |
| CX.CBCOURISK | Co-Borrower Country of Risk | STRING | 20 |  |
| CX.CBCOURISKC | Co-Borrower Country of Risk Code | STRING | 5 |  |
| CX.CBDOC1 | CB1 DOCTYPE | DROPDOWNLIST | 0 |  |
| CX.CBDOC2 | CB2 DOCTYPE | DROPDOWNLIST | 0 |  |
| CX.CBORMID | Co-Borrower Middle Score | STRING | 10 | LMedian([#2877], [#2878], [#2879]) |
| CX.CBORMID2 | Co-Borrower Middle Score 2 | STRING | 10 | LMedian([#2889], [#2890], [#2891]) |
| CX.CBORMID3 | Co-Borrower Middle Score 3 | STRING | 10 | LMedian([#2901], [#2902], [#2903]) |
| CX.CBORMID4 | Co-Borrower Middle Score 4 | STRING | 10 | LMedian([#2913], [#2914], [#2915]) |
| CX.CBORMID5 | Co-Borrower Middle Score 5 | STRING | 10 | LMedian([#2925], [#2926], [#2927]) |
| CX.CBORMID6 | Co-Borrower Middle Score 6 | STRING | 10 | LMedian([#2937], [#2938], [#2939]) |
| CX.CBP.SCORE.1 | CBP Score Present 1 | INTEGER | 0 | iif(IsEmpty([CX.PAIR1.COBORROWER.FICO]), 0, 1) |
| CX.CBP.SCORE.2 | CBP Score Present 2 | INTEGER | 0 | iif(IsEmpty([CX.PAIR2.COBORROWER.FICO]), 0, 1) |
| CX.CC.0.A.CHECKED | All Checked A Items | STRING | 1200 | iif(NOT isempty([CX.CC.A.001]),	"- " + [CX.CC.A.001]				+ vbCr,	"") +
iif(NOT isempty([CX.CC.A.002] |
| CX.CC.0.CHECKALL | Check All/Uncheck All | X | 0 |  |
| CX.CC.0.P.CHECKED | All Checked P Items | STRING | 1000 | iif(NOT isempty([CX.CC.P.001]),	"- " + [CX.CC.P.001]				+ vbCr,	"") +
iif(NOT isempty([CX.CC.P.002] |
| CX.CC.0.PAIDOFFITEMS | All To Be Paid Off Items | STRING | 1000 | iif(NOT isempty([CX.CC.R.090]) and ([CX.CC.0.PAIDOFF])="Y",	"- " & [CX.CC.R.090] & vbCr & vbCr, "")  |
| CX.CC.0.R.CHECKED | All Checked R Items | STRING | 1000 | iif(NOT isempty([CX.CC.R.010]),	"- " + [CX.CC.R.010]								+ vbCr,	"") +
iif(NOT isempty([CX.CC.R. |
| CX.CC.1 | Compliance Condition 1 | STRING | 200 |  |
| CX.CC.10 | Compliance Condition | STRING | 200 |  |
| CX.CC.11 | Compliance Condition 11 | STRING | 200 |  |
| CX.CC.12 | Compliance Condition 12 | STRING | 200 |  |
| CX.CC.13 | Compliance Condition 13 | STRING | 200 |  |
| CX.CC.14 | Compliance Condition 14 | STRING | 200 |  |
| CX.CC.15 | Compliance Condition 15 | STRING | 200 |  |
| CX.CC.16 | Compliance Condition 16 | STRING | 200 |  |
| CX.CC.17 | Compliance Condition 17 | STRING | 200 |  |
| CX.CC.18 | Compliance Condition 18 | STRING | 200 |  |
| CX.CC.19 | Compliance Condition 19 | STRING | 200 |  |
| CX.CC.2 | Compliance Condition 2 | STRING | 200 |  |
| CX.CC.20 | Compliance Condition 20 | STRING | 200 |  |
| CX.CC.21 | Compliance Condition 21 | STRING | 200 |  |
| CX.CC.22 | Compliance Condition 22 | STRING | 200 |  |
| CX.CC.23 | Compliance Condition 23 | STRING | 200 |  |
| CX.CC.24 | Compliance Condition 24 | STRING | 200 |  |
| CX.CC.25 | Compliance Condition 25 | STRING | 200 |  |
| CX.CC.26 | Compliance Condition 26 | STRING | 200 |  |
| CX.CC.27 | Compliance Condition 27 | STRING | 200 |  |
| CX.CC.28 | Compliance Condition 28 | STRING | 200 |  |
| CX.CC.29 | Compliance Condition 29 | STRING | 200 |  |
| CX.CC.3 | Compliance Condition 3 | STRING | 200 |  |
| CX.CC.30 | Compliance Condition 30 | STRING | 200 |  |
| CX.CC.4 | Compliance Condition 4 | STRING | 200 |  |
| CX.CC.5 | Compliance Condition 5 | STRING | 200 |  |
| CX.CC.6 | Compliance Condition 6 | STRING | 200 |  |
| CX.CC.7 | Compliance Condition 7 | STRING | 200 |  |
| CX.CC.8 | Compliance Condition 8 | STRING | 200 |  |
| CX.CC.9 | Compliance Condition 9 | STRING | 200 |  |
| CX.CC.A.001 | Subject to Final Loan Approval | DROPDOWNLIST | 0 |  |
| CX.CC.A.002 | Documents become void if not signed/dated/notarized on | DROPDOWNLIST | 0 |  |
| CX.CC.A.002.DATE | 002 Documents Void On Date | DATE | 0 |  |
| CX.CC.A.003 | Borrower to sign/date final 1003 and Addendums | DROPDOWNLIST | 0 |  |
| CX.CC.A.004 | IRS Form 4506T to be signed at closing | DROPDOWNLIST | 0 |  |
| CX.CC.A.005 | Borrowers to sign and date tax returns | DROPDOWNLIST | 0 |  |
| CX.CC.A.006 | VOE to meet investor guidelines | DROPDOWNLIST | 0 |  |
| CX.CC.A.007 | Occupancy certificate to be executed at closing | DROPDOWNLIST | 0 |  |
| CX.CC.A.008 | No secondary financing permitted | DROPDOWNLIST | 0 |  |
| CX.CC.A.009 | Loan amount limited to $ | DROPDOWNLIST | 0 |  |
| CX.CC.A.009.AMOUNT | Loan Limit Amount | STRING | 15 |  |
| CX.CC.A.010 | Closing protection letter from the Title Company | DROPDOWNLIST | 0 |  |
| CX.CC.A.011 | Copy of Photo Driver's License | DROPDOWNLIST | 0 |  |
| CX.CC.A.012 | Borrower funds to close cannot exceed $ | DROPDOWNLIST | 0 |  |
| CX.CC.A.012.AMOUNT | Borrower Funds | STRING | 15 |  |
| CX.CC.A.013 | Closing agent/Notary to complete identity certification | DROPDOWNLIST | 0 |  |
| CX.CC.A.014 | Loan cannot close with POA unless approved by Investor | DROPDOWNLIST | 0 |  |
| CX.CC.A.015 | Misc CC.A Item 15 | X | 0 |  |
| CX.CC.A.015.MISC | Misc CC.A Item 15 Description | STRING | 100 |  |
| CX.CC.A.016 | Misc CC.A Item 16 | X | 0 |  |
| CX.CC.A.016.MISC | Misc CC.A Item 16 Description | STRING | 100 |  |
| CX.CC.A.017 | Misc CC.A Item 17 | X | 0 |  |
| CX.CC.A.017.MISC | Misc CC.A Item 17 Description | STRING | 100 |  |
| CX.CC.ADDR.PROP1 | Property Address 1 | STRING | 500 |  |
| CX.CC.ADDR.PROP10 | Property Address 10 | STRING | 500 |  |
| CX.CC.ADDR.PROP2 | Property Address 2 | STRING | 500 |  |
| CX.CC.ADDR.PROP3 | Property Address 3 | STRING | 500 |  |
| CX.CC.ADDR.PROP4 | Property Address 4 | STRING | 500 |  |
| CX.CC.ADDR.PROP5 | Property Address 5 | STRING | 500 |  |
| CX.CC.ADDR.PROP6 | Property Address 6 | STRING | 500 |  |
| CX.CC.ADDR.PROP7 | Property Address 7 | STRING | 500 |  |
| CX.CC.ADDR.PROP8 | Property Address 8 | STRING | 500 |  |
| CX.CC.ADDR.PROP9 | Property Address 9 | STRING | 500 |  |
| CX.CC.ADDRESS | Address on the card | STRING | 0 |  |
| CX.CC.AMOUNT | Amount to be charged on the card | DECIMAL | 0 |  |
| CX.CC.APN.1 | APN CC Property 1 | STRING | 50 |  |
| CX.CC.APN.10 | APN CC Property 10 | STRING | 50 |  |
| CX.CC.APN.2 | APN CC Property 2 | STRING | 50 |  |
| CX.CC.APN.3 | APN CC Property 3 | STRING | 50 |  |
| CX.CC.APN.4 | APN CC Property 4 | STRING | 50 |  |
| CX.CC.APN.5 | APN CC Property 5 | STRING | 50 |  |
| CX.CC.APN.6 | APN CC Property 6 | STRING | 50 |  |
| CX.CC.APN.7 | APN CC Property 7 | STRING | 50 |  |
| CX.CC.APN.8 | APN CC Property 8 | STRING | 50 |  |
| CX.CC.APN.9 | APN CC Property 9 | STRING | 50 |  |
| CX.CC.APPROVE | Compliance Conds Approve Date | DATE | 0 |  |
| CX.CC.APPROVE.BY | Compliance Conds Approved By | STRING | 50 |  |
| CX.CC.BALANCE.LTV | Total Balance for LTV Calc Purposes | DECIMAL_2 | 0 | sumany(iif([cx.cc.ltv1]="Y",[#CX.CC.BALANCE1],0), iif([cx.cc.ltv2]="Y",[#CX.CC.BALANCE2],0), iif([cx |
| CX.CC.BALANCE.TOTAL | Mortgage Balance | DECIMAL_2 | 0 | sumany([CX.CC.BALANCE1],[CX.CC.BALANCE10],[CX.CC.BALANCE2],[CX.CC.BALANCE3],[CX.CC.BALANCE4],[CX.CC. |
| CX.CC.BALANCE1 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE10 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE2 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE3 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE4 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE5 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE6 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE7 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE8 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BALANCE9 | Mortgage Balance | DECIMAL_2 | 0 |  |
| CX.CC.BATH.1 | Bath Ct of CC Prop 1 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.10 | Bath Ct of CC Prop 10 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.2 | Bath Ct of CC Prop 2 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.3 | Bath Ct of CC Prop 3 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.4 | Bath Ct of CC Prop 4 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.5 | Bath Ct of CC Prop 5 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.6 | Bath Ct of CC Prop 6 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.7 | Bath Ct of CC Prop 7 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.8 | Bath Ct of CC Prop 8 | DECIMAL_2 | 0 |  |
| CX.CC.BATH.9 | Bath Ct of CC Prop 9 | DECIMAL_2 | 0 |  |
| CX.CC.BEDROOM.1 | Bedroom Ct of CC Prop 1 | INTEGER | 0 |  |
| CX.CC.BEDROOM.10 | Bedroom Ct of CC Prop 10 | INTEGER | 0 |  |
| CX.CC.BEDROOM.2 | Bedroom Ct of CC Prop 2 | INTEGER | 0 |  |
| CX.CC.BEDROOM.3 | Bedroom Ct of CC Prop 3 | INTEGER | 0 |  |
| CX.CC.BEDROOM.4 | Bedroom Ct of CC Prop 4 | INTEGER | 0 |  |
| CX.CC.BEDROOM.5 | Bedroom Ct of CC Prop 5 | INTEGER | 0 |  |
| CX.CC.BEDROOM.6 | Bedroom Ct of CC Prop 6 | INTEGER | 0 |  |
| CX.CC.BEDROOM.7 | Bedroom Ct of CC Prop 7 | INTEGER | 0 |  |
| CX.CC.BEDROOM.8 | Bedroom Ct of CC Prop 8 | INTEGER | 0 |  |
| CX.CC.BEDROOM.9 | Bedroom Ct of CC Prop 9 | INTEGER | 0 |  |
| CX.CC.BOS.ON.CD.APPROVED | Borrowers on CD | INTEGER | 0 |  |
| CX.CC.BOS.ON.CD.CURRENT | Borrowers on CD | INTEGER | 0 | iif([CX.VESTING.SMS] = "Y", 
sum([#CX.VESTING.MBWOS], 
iif(isempty([4002#1]) = False, 1, 0), 
iif |
| CX.CC.BPO.VALUE.LTV.1 | BPO Value LTV Property 1 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.1], [#CX.CC.VALUE.BPO1]), 100) |
| CX.CC.BPO.VALUE.LTV.10 | BPO Value LTV Property 10 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.10], [#CX.CC.VALUE.BPO10]), 100) |
| CX.CC.BPO.VALUE.LTV.2 | BPO Value LTV Property 2 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.2], [#CX.CC.VALUE.BPO2]), 100) |
| CX.CC.BPO.VALUE.LTV.3 | BPO Value LTV Property 3 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.3], [#CX.CC.VALUE.BPO3]), 100) |
| CX.CC.BPO.VALUE.LTV.4 | BPO Value LTV Property 4 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.4], [#CX.CC.VALUE.BPO4]), 100) |
| CX.CC.BPO.VALUE.LTV.5 | BPO Value LTV Property 5 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.5], [#CX.CC.VALUE.BPO5]), 100) |
| CX.CC.BPO.VALUE.LTV.6 | BPO Value LTV Property 6 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.6], [#CX.CC.VALUE.BPO6]), 100) |
| CX.CC.BPO.VALUE.LTV.7 | BPO Value LTV Property 7 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.7], [#CX.CC.VALUE.BPO7]), 100) |
| CX.CC.BPO.VALUE.LTV.8 | BPO Value LTV Property 8 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.8], [#CX.CC.VALUE.BPO8]), 100) |
| CX.CC.BPO.VALUE.LTV.9 | BPO Value LTV Property 9 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.9], [#CX.CC.VALUE.BPO9]), 100) |
| CX.CC.BPO.VENDOR.1 | BPO Vendor for CC Property 1 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.10 | BPO Vendor for CC Property 10 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.2 | BPO Vendor for CC Property 2 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.3 | BPO Vendor for CC Property 3 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.4 | BPO Vendor for CC Property 4 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.5 | BPO Vendor for CC Property 5 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.6 | BPO Vendor for CC Property 6 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.7 | BPO Vendor for CC Property 7 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.8 | BPO Vendor for CC Property 8 | DROPDOWNLIST | 0 |  |
| CX.CC.BPO.VENDOR.9 | BPO Vendor for CC Property 9 | DROPDOWNLIST | 0 |  |
| CX.CC.CARDNUMBER | Number of the Card. | STRING | 0 |  |
| CX.CC.CFS.PROP.TYPE.1 | Property Type CC 1 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.10 | Property Type CC 10 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.2 | Property Type CC 2 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.3 | Property Type CC 3 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.4 | Property Type CC 4 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.5 | Property Type CC 5 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.6 | Property Type CC 6 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.7 | Property Type CC 7 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.8 | Property Type CC 8 | DROPDOWNLIST | 0 |  |
| CX.CC.CFS.PROP.TYPE.9 | Property Type CC 9 | DROPDOWNLIST | 0 |  |
| CX.CC.CITY | City on the card | STRING | 0 |  |
| CX.CC.CITY.1 | CC City Property 1 | STRING | 256 |  |
| CX.CC.CITY.10 | CC City Property 10 | STRING | 256 |  |
| CX.CC.CITY.2 | CC City Property 2 | STRING | 256 |  |
| CX.CC.CITY.3 | CC City Property 3 | STRING | 256 |  |
| CX.CC.CITY.4 | CC City Property 4 | STRING | 256 |  |
| CX.CC.CITY.5 | CC City Property 5 | STRING | 256 |  |
| CX.CC.CITY.6 | CC City Property 6 | STRING | 256 |  |
| CX.CC.CITY.7 | CC City Property 7 | STRING | 256 |  |
| CX.CC.CITY.8 | CC City Property 8 | STRING | 256 |  |
| CX.CC.CITY.9 | CC City Property 9 | STRING | 256 |  |
| CX.CC.CLR.1 | Compliance Cleared 1 | X | 0 |  |
| CX.CC.CLR.10 | Compliance Cleared 10 | X | 0 |  |
| CX.CC.CLR.11 | Compliance Cleared 11 | X | 0 |  |
| CX.CC.CLR.12 | Compliance Cleared 12 | X | 0 |  |
| CX.CC.CLR.13 | Compliance Cleared 13 | X | 0 |  |
| CX.CC.CLR.14 | Compliance Cleared 14 | X | 0 |  |
| CX.CC.CLR.15 | Compliance Cleared 15 | X | 0 |  |
| CX.CC.CLR.16 | Compliance Cleared 16 | X | 0 |  |
| CX.CC.CLR.17 | Compliance Cleared 17 | X | 0 |  |
| CX.CC.CLR.18 | Compliance Cleared 18 | X | 0 |  |
| CX.CC.CLR.19 | Compliance Cleared 19 | X | 0 |  |
| CX.CC.CLR.2 | Compliance Cleared 2 | X | 0 |  |
| CX.CC.CLR.20 | Compliance Cleared 20 | X | 0 |  |
| CX.CC.CLR.21 | Compliance Cleared 21 | X | 0 |  |
| CX.CC.CLR.22 | Compliance Cleared 22 | X | 0 |  |
| CX.CC.CLR.23 | Compliance Cleared 23 | X | 0 |  |
| CX.CC.CLR.24 | Compliance Cleared 24 | X | 0 |  |
| CX.CC.CLR.25 | Compliance Cleared 25 | X | 0 |  |
| CX.CC.CLR.26 | Compliance Cleared 26 | X | 0 |  |
| CX.CC.CLR.27 | Compliance Cleared 27 | X | 0 |  |
| CX.CC.CLR.28 | Compliance Cleared 28 | X | 0 |  |
| CX.CC.CLR.29 | Compliance Cleared 29 | X | 0 |  |
| CX.CC.CLR.3 | Compliance Cleared 3 | X | 0 |  |
| CX.CC.CLR.30 | Compliance Cleared 30 | X | 0 |  |
| CX.CC.CLR.4 | Compliance Cleared 4 | X | 0 |  |
| CX.CC.CLR.5 | Compliance Cleared 5 | X | 0 |  |
| CX.CC.CLR.6 | Compliance Cleared 6 | X | 0 |  |
| CX.CC.CLR.7 | Compliance Cleared 7 | X | 0 |  |
| CX.CC.CLR.8 | Compliance Cleared 8 | X | 0 |  |
| CX.CC.CLR.9 | Compliance Cleared 9 | X | 0 |  |
| CX.CC.COC.ALTLOAD | Used to reset the UW Popup Grid | X | 0 |  |
| CX.CC.COC.BORROWER | CC.COC.BORROWER | X | 0 |  |
| CX.CC.COC.BORROWER.CHANGE | CC.COC.BORROWER.CHANGE | DROPDOWNLIST | 0 |  |
| CX.CC.COC.ESCROWS | CC.COC.Escrows | X | 0 |  |
| CX.CC.COC.ESCROWS.CHANGE | CC.COC.Escrows.CHANGE | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.01 | CC.COC.FEE.01 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.01.ARCHIVE | CC.COC.FEE.01.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.01], 1) |
| CX.CC.COC.FEE.01.CURRENT | CC.COC.FEE.01.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.02 | CC.COC.FEE.02 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.02.ARCHIVE | CC.COC.FEE.02.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.02], 1) |
| CX.CC.COC.FEE.02.CURRENT | CC.COC.FEE.02.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.03 | CC.COC.FEE.03 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.03.ARCHIVE | CC.COC.FEE.03.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.03], 1) |
| CX.CC.COC.FEE.03.CURRENT | CC.COC.FEE.03.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.04 | CC.COC.FEE.04 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.04.ARCHIVE | CC.COC.FEE.04.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.04], 1) |
| CX.CC.COC.FEE.04.CURRENT | CC.COC.FEE.04.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.05 | CC.COC.FEE.05 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.05.ARCHIVE | CC.COC.FEE.05.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.05], 1) |
| CX.CC.COC.FEE.05.CURRENT | CC.COC.FEE.05.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.06 | CC.COC.FEE.06 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.06.ARCHIVE | CC.COC.FEE.06.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.06], 1) |
| CX.CC.COC.FEE.06.CURRENT | CC.COC.FEE.06.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.07 | CC.COC.FEE.07 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.07.ARCHIVE | CC.COC.FEE.07.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.07], 1) |
| CX.CC.COC.FEE.07.CURRENT | CC.COC.FEE.07.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.08 | CC.COC.FEE.08 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.08.ARCHIVE | CC.COC.FEE.08.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.08], 1) |
| CX.CC.COC.FEE.08.CURRENT | CC.COC.FEE.08.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.09 | CC.COC.FEE.09 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.09.ARCHIVE | CC.COC.FEE.09.ARCHIVE | DECIMAL_2 | 0 | Audit([CX.CC.COC.FEE.09], 1) |
| CX.CC.COC.FEE.09.CURRENT | CC.COC.FEE.09.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.FEE.10 | CC.COC.FEE.10 | DROPDOWNLIST | 0 |  |
| CX.CC.COC.FEE.10.ARCHIVE | CC.COC.FEE.10.ARCHIVE | DECIMAL_2 | 0 | Audit([CC.COC.FEE.10], 1) |
| CX.CC.COC.FEE.10.CURRENT | CC.COC.FEE.10.CURRENT | DECIMAL_2 | 0 |  |
| CX.CC.COC.LOANAMOUNT | CC.COC.LOANAMOUNT | X | 0 |  |
| CX.CC.COC.LOANAMOUNT.ARCHIVE | CC.COC.LOANAMOUNT.ARCHIVE | DECIMAL_2 | 0 | Audit([2], 1) |
| CX.CC.COC.LOANAMOUNT.CHANGE | CC.COC.LOANAMOUNT.CHANGE | STRING | 100 |  |
| CX.CC.COC.LOCK.RELOCK.DATE | CC.COC.Lock.RELOCK.DATE | DATE | 0 | iif(IsDate([CX.762.02])and IsDate([CX.761.ARCHIVE.02])and([@761]>[@CX.762.02]),[@761],"") |
| CX.CC.COC.LOCK.RELOCK.DAYS | CC.COC.Lock.RELOCK.DAYS | INTEGER | 0 | iif([@761]>[@CX.762.02],[#432],"") |
| CX.CC.COC.LOCK.RELOCK.EXP | CC.COC.Lock.RELOCK.EXP | DATE | 0 | iif(IsDate([CX.762.02])and IsDate([CX.761.ARCHIVE.02])and([@761]>[@CX.762.02]),[@762],"") |
| CX.CC.COC.OTHERCOCFEE | CC.COC.OTHERCOC-or-FEE | X | 0 |  |
| CX.CC.COC.OTHERCOCFEE.CHANGE | CC.COC.OTHERCOCFEE.CHANGE | STRING | 100 |  |
| CX.CC.COC.PROGRAM | CC.COC.PROGRAM | X | 0 |  |
| CX.CC.COC.PROGRAM.ARCHIVE | CC.COC.PROGRAM.ARCHIVE | STRING | 100 | Audit([1401], 1) |
| CX.CC.COC.PROGRAM.CHANGE | CC.COC.PROGRAM.CHANGE | STRING | 100 |  |
| CX.CC.COC.PROPERTY | CC.COC.Property | X | 0 |  |
| CX.CC.COC.PROPERTY.CHANGE | CC.COC.Property.CHANGE | DROPDOWNLIST | 0 |  |
| CX.CC.COC.RATELOCK | CC.COC.RateLock | X | 0 |  |
| CX.CC.COC.RATELOCK.DATE | CC.COC.RateLock.DATE | DATE | 0 |  |
| CX.CC.COC.RATELOCK.DAYS | CC.COC.RateLock.DAYS | INTEGER | 0 |  |
| CX.CC.COC.RATELOCK.EXP | CC.COC.RateLock.EXP | DATE | 0 |  |
| CX.CC.COC.RATELOCK.EXT.DATE | CC.COC.RateLock.EXT.DATE | DATE | 0 | iif(IsDate([@CX.762.02])and([@761]<=[@CX.762.02]),[@761],"") |
| CX.CC.COC.RATELOCK.EXT.DAYS | CC.COC.RateLock.EXT.DAYS | INTEGER | 0 | iif([@761]<=[@CX.762.02],[#432],"") |
| CX.CC.COC.RATELOCK.EXT.EXP | CC.COC.RateLock.EXT.EXP | DATE | 0 | iif(IsDate([@CX.762.02])and([@761]<=[@CX.762.02]),[@762],"") |
| CX.CC.COC.RATELOCK.EXTENSION | CC.COC.RateLock.EXTENSION | X | 0 |  |
| CX.CC.COC.RATELOCK.RELOCK | CC.COC.RateLock.RELOCK | X | 0 |  |
| CX.CC.COC.UNDERWRITING | CC.COC.UNDERWRITING | X | 0 |  |
| CX.CC.COC.UW.CHANGE | CC.COC.UNDERWRITING.CHANGE | STRING | 100 |  |
| CX.CC.COUNT.PROP | Count of Cross Collateral Properties | INTEGER | 0 | Count([CX.CC.PROP.ID.1], [CX.CC.PROP.ID.2], [CX.CC.PROP.ID.3], [CX.CC.PROP.ID.4], [CX.CC.PROP.ID.5], |
| CX.CC.D1 | Compliance Date 1 | STRING | 35 |  |
| CX.CC.D10 | Compliance Date 10 | STRING | 35 |  |
| CX.CC.D11 | Compliance Date 11 | STRING | 35 |  |
| CX.CC.D12 | Compliance Date 12 | STRING | 35 |  |
| CX.CC.D13 | Compliance Date 13 | STRING | 35 |  |
| CX.CC.D14 | Compliance Date 14 | STRING | 35 |  |
| CX.CC.D15 | Compliance Date 15 | STRING | 35 |  |
| CX.CC.D16 | Compliance Date 16 | STRING | 35 |  |
| CX.CC.D17 | Compliance Date 17 | STRING | 35 |  |
| CX.CC.D18 | Compliance Date 18 | STRING | 35 |  |
| CX.CC.D19 | Compliance Date 19 | STRING | 35 |  |
| CX.CC.D2 | Compliance Date 2 | STRING | 35 |  |
| CX.CC.D20 | Compliance Date 20 | STRING | 35 |  |
| CX.CC.D21 | Compliance Date 21 | STRING | 35 |  |
| CX.CC.D22 | Compliance Date 22 | STRING | 35 |  |
| CX.CC.D23 | Compliance Date 23 | STRING | 35 |  |
| CX.CC.D24 | Compliance Date 24 | STRING | 35 |  |
| CX.CC.D25 | Compliance Date 25 | STRING | 35 |  |
| CX.CC.D26 | Compliance Date 26 | STRING | 35 |  |
| CX.CC.D27 | Compliance Date 27 | STRING | 35 |  |
| CX.CC.D28 | Compliance Date 28 | STRING | 35 |  |
| CX.CC.D29 | Compliance Date 29 | STRING | 35 |  |
| CX.CC.D3 | Compliance Date 3 | STRING | 35 |  |
| CX.CC.D30 | Compliance Date 30 | STRING | 35 |  |
| CX.CC.D4 | Compliance Date 4 | STRING | 35 |  |
| CX.CC.D5 | Compliance Date 5 | STRING | 35 |  |
| CX.CC.D6 | Compliance Date 6 | STRING | 35 |  |
| CX.CC.D7 | Compliance Date 7 | STRING | 35 |  |
| CX.CC.D8 | Compliance Date 8 | STRING | 35 |  |
| CX.CC.D9 | Compliance Date 9 | STRING | 35 |  |
| CX.CC.DEED1 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED10 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED2 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED3 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED4 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED5 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED6 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED7 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED8 | Deed Released Date | DATE | 0 |  |
| CX.CC.DEED9 | Deed Released Date | DATE | 0 |  |
| CX.CC.ESCROW.RES.1 | Escrow Reserves Property 1 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.10 | Escrow Reserves Property 10 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.2 | Escrow Reserves Property 2 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.3 | Escrow Reserves Property 3 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.4 | Escrow Reserves Property 4 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.5 | Escrow Reserves Property 5 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.6 | Escrow Reserves Property 6 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.7 | Escrow Reserves Property 7 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.8 | Escrow Reserves Property 8 | DECIMAL_2 | 0 |  |
| CX.CC.ESCROW.RES.9 | Escrow Reserves Property 9 | DECIMAL_2 | 0 |  |
| CX.CC.EST.VALUE.LTV.1 | Estimated Value LTV Property 1 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.1], [#CX.CC.VALUE.LO1]), 100) |
| CX.CC.EST.VALUE.LTV.10 | Estimated Value LTV Property 10 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.10], [#CX.CC.VALUE.LO10]), 100) |
| CX.CC.EST.VALUE.LTV.2 | Estimated Value LTV Property 2 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.2], [#CX.CC.VALUE.LO2]), 100) |
| CX.CC.EST.VALUE.LTV.3 | Estimated Value LTV Property 3 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.3], [#CX.CC.VALUE.LO3]), 100) |
| CX.CC.EST.VALUE.LTV.4 | Estimated Value LTV Property 4 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.4], [#CX.CC.VALUE.LO4]), 100) |
| CX.CC.EST.VALUE.LTV.5 | Estimated Value LTV Property 5 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.5], [#CX.CC.VALUE.LO5]), 100) |
| CX.CC.EST.VALUE.LTV.6 | Estimated Value LTV Property 6 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.6], [#CX.CC.VALUE.LO6]), 100) |
| CX.CC.EST.VALUE.LTV.7 | Estimated Value LTV Property 7 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.7], [#CX.CC.VALUE.LO7]), 100) |
| CX.CC.EST.VALUE.LTV.8 | Estimated Value LTV Property 8 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.8], [#CX.CC.VALUE.LO8]), 100) |
| CX.CC.EST.VALUE.LTV.9 | Estimated Value LTV Property 9 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.9], [#CX.CC.VALUE.LO9]), 100) |
| CX.CC.EXPMONTH | Expiration Month on the card | DROPDOWNLIST | 0 |  |
| CX.CC.EXPYEAR | Expiration Year on the card | DROPDOWNLIST | 0 |  |
| CX.CC.FINAL.VALUE.LTV.1 | Final Value LTV Property 1 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.1], [#CX.CC.VALUE.FINAL1]), 100) |
| CX.CC.FINAL.VALUE.LTV.10 | Final Value LTV Property 10 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.10], [#CX.CC.VALUE.FINAL10]), 100) |
| CX.CC.FINAL.VALUE.LTV.2 | Final Value LTV Property 2 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.2], [#CX.CC.VALUE.FINAL2]), 100) |
| CX.CC.FINAL.VALUE.LTV.3 | Final Value LTV Property 3 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.3], [#CX.CC.VALUE.FINAL3]), 100) |
| CX.CC.FINAL.VALUE.LTV.4 | Final Value LTV Property 4 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.4], [#CX.CC.VALUE.FINAL4]), 100) |
| CX.CC.FINAL.VALUE.LTV.5 | Final Value LTV Property 5 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.5], [#CX.CC.VALUE.FINAL5]), 100) |
| CX.CC.FINAL.VALUE.LTV.6 | Final Value LTV Property 6 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.6], [#CX.CC.VALUE.FINAL6]), 100) |
| CX.CC.FINAL.VALUE.LTV.7 | Final Value LTV Property 7 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.7], [#CX.CC.VALUE.FINAL7]), 100) |
| CX.CC.FINAL.VALUE.LTV.8 | Final Value LTV Property 8 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.8], [#CX.CC.VALUE.FINAL8]), 100) |
| CX.CC.FINAL.VALUE.LTV.9 | Final Value LTV Property 9 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.9], [#CX.CC.VALUE.FINAL9]), 100) |
| CX.CC.FIRSTNAME | First Name of Credit card holder | STRING | 0 |  |
| CX.CC.FUNDS1 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS10 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS2 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS3 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS4 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS5 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS6 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS7 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS8 | Funds Received Date | DATE | 0 |  |
| CX.CC.FUNDS9 | Funds Received Date | DATE | 0 |  |
| CX.CC.HOA.1 | HOA CC Property 1 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.10 | HOA CC Property 10 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.2 | HOA CC Property 2 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.3 | HOA CC Property 3 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.4 | HOA CC Property 4 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.5 | HOA CC Property 5 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.6 | HOA CC Property 6 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.7 | HOA CC Property 7 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.8 | HOA CC Property 8 | DECIMAL_2 | 0 |  |
| CX.CC.HOA.9 | HOA CC Property 9 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.1 | Insurance CC Property 1 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.10 | Insurance CC Property 10 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.2 | Insurance CC Property 2 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.3 | Insurance CC Property 3 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.4 | Insurance CC Property 4 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.5 | Insurance CC Property 5 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.6 | Insurance CC Property 6 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.7 | Insurance CC Property 7 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.8 | Insurance CC Property 8 | DECIMAL_2 | 0 |  |
| CX.CC.INSURANCE.9 | Insurance CC Property 9 | DECIMAL_2 | 0 |  |
| CX.CC.LA.1 | Loan Amount CC 1 | DECIMAL_2 | 0 |  |
| CX.CC.LA.10 | Loan Amount CC 10 | DECIMAL_2 | 0 |  |
| CX.CC.LA.2 | Loan Amount CC 2 | DECIMAL_2 | 0 |  |
| CX.CC.LA.3 | Loan Amount CC 3 | DECIMAL_2 | 0 |  |
| CX.CC.LA.4 | Loan Amount CC 4 | DECIMAL_2 | 0 |  |
| CX.CC.LA.5 | Loan Amount CC 5 | DECIMAL_2 | 0 |  |
| CX.CC.LA.6 | Loan Amount CC 6 | DECIMAL_2 | 0 |  |
| CX.CC.LA.7 | Loan Amount CC 7 | DECIMAL_2 | 0 |  |
| CX.CC.LA.8 | Loan Amount CC 8 | DECIMAL_2 | 0 |  |
| CX.CC.LA.9 | Loan Amount CC 9 | DECIMAL_2 | 0 |  |
| CX.CC.LA.TOTAL | Cumulative Loan Amount | DECIMAL_2 | 0 | [#CX.CC.LA.1] + [#CX.CC.LA.2] + [#CX.CC.LA.3] + [#CX.CC.LA.4] + [#CX.CC.LA.5] + [#CX.CC.LA.6] + [#CX |
| CX.CC.LASTNAME | Last Name of the Credit card holder | STRING | 0 |  |
| CX.CC.LTV | Cross-Collateral LTV | DECIMAL_3 | 0 | ([CX.CC.BALANCE.LTV]/[CX.CC.VALUE.FINAL.LTV])*100 |
| CX.CC.LTV1 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV10 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV2 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV3 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV4 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV5 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV6 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV7 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV8 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.LTV9 | Property is in LTV calculation | YN | 0 |  |
| CX.CC.NM.1 | Compliance Name 1 | STRING | 35 |  |
| CX.CC.NM.10 | Compliance Name 10 | STRING | 35 |  |
| CX.CC.NM.11 | Compliance Name 11 | STRING | 35 |  |
| CX.CC.NM.12 | Compliance Name 12 | STRING | 35 |  |
| CX.CC.NM.13 | Compliance Name 13 | STRING | 35 |  |
| CX.CC.NM.14 | Compliance Name 14 | STRING | 35 |  |
| CX.CC.NM.15 | Compliance Name 15 | STRING | 35 |  |
| CX.CC.NM.16 | Compliance Name 16 | STRING | 35 |  |
| CX.CC.NM.17 | Compliance Name 17 | STRING | 35 |  |
| CX.CC.NM.18 | Compliance Name 18 | STRING | 35 |  |
| CX.CC.NM.19 | Compliance Name 19 | STRING | 35 |  |
| CX.CC.NM.2 | Compliance Name 2 | STRING | 35 |  |
| CX.CC.NM.20 | Compliance Name 20 | STRING | 35 |  |
| CX.CC.NM.21 | Compliance Name 21 | STRING | 35 |  |
| CX.CC.NM.22 | Compliance Name 22 | STRING | 35 |  |
| CX.CC.NM.23 | Compliance Name 23 | STRING | 35 |  |
| CX.CC.NM.24 | Compliance Name 24 | STRING | 35 |  |
| CX.CC.NM.25 | Compliance Name 25 | STRING | 35 |  |
| CX.CC.NM.26 | Compliance Name 26 | STRING | 35 |  |
| CX.CC.NM.27 | Compliance Name 27 | STRING | 35 |  |
| CX.CC.NM.28 | Compliance Name 28 | STRING | 35 |  |
| CX.CC.NM.29 | Compliance Name 29 | STRING | 35 |  |
| CX.CC.NM.3 | Compliance Name 3 | STRING | 35 |  |
| CX.CC.NM.30 | Compliance Name 30 | STRING | 35 |  |
| CX.CC.NM.4 | Compliance Name 4 | STRING | 35 |  |
| CX.CC.NM.5 | Compliance Name 5 | STRING | 35 |  |
| CX.CC.NM.6 | Compliance Name 6 | STRING | 35 |  |
| CX.CC.NM.7 | Compliance Name 7 | STRING | 35 |  |
| CX.CC.NM.8 | Compliance Name 8 | STRING | 35 |  |
| CX.CC.NM.9 | Compliance Name 9 | STRING | 35 |  |
| CX.CC.NOT.REQD.REASON | CC Not Required reason | DROPDOWNLIST | 0 |  |
| CX.CC.NOTES | Closing Checklist - Notes | STRING | 1000 |  |
| CX.CC.P.001 | Taxes to be paid up current at time of closing | DROPDOWNLIST | 0 |  |
| CX.CC.P.002 | Hazard Insurance of $ | DROPDOWNLIST | 0 |  |
| CX.CC.P.002.AMOUNT | Hazard Insurance Fee | STRING | 15 |  |
| CX.CC.P.003 | Borrower funds to close cannot exceed $ | DROPDOWNLIST | 0 |  |
| CX.CC.P.003.AMOUNT | Borrower Funds Not Exceed | STRING | 15 |  |
| CX.CC.P.004 | Seller contributions limited to | DROPDOWNLIST | 0 |  |
| CX.CC.P.004.AMOUNT | Seller Contributions Not Exceed | STRING | 15 |  |
| CX.CC.P.005 | Seller paid closing costs $ | DROPDOWNLIST | 0 |  |
| CX.CC.P.005.AMOUNT | Seller Paid Costs | STRING | 15 |  |
| CX.CC.P.006 | Endorsements: | DROPDOWNLIST | 0 |  |
| CX.CC.P.006.ENDORSE | Endorsements | STRING | 50 |  |
| CX.CC.P.007 | Misc CC.P Item 007 | X | 0 |  |
| CX.CC.P.007.ENDORSE | CC.P.007.ENDORSE | STRING | 200 |  |
| CX.CC.P.007.MISC | Misc CC.P Item 007 Description | STRING | 100 |  |
| CX.CC.P.008 | Misc CC.P Item 008 | X | 0 |  |
| CX.CC.P.008.MISC | Misc CC.P Item 008 Description | STRING | 100 |  |
| CX.CC.P.009 | Misc CC.P Item 009 | X | 0 |  |
| CX.CC.P.009.MISC | Misc CC.P Item 009 Description | STRING | 100 |  |
| CX.CC.POA | Closing Checklist - POA | X | 0 | IIF(IsDate([Document.DateReceived.Power of Attorney]),"X","") |
| CX.CC.PROP.ID.1 | Property ID Prop 1 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP1]), " ", ([364] & " " & "-" & " " & "1")) |
| CX.CC.PROP.ID.10 | Property ID Prop 10 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP10]), " ", ([364] & " " & "-" & " " & "10")) |
| CX.CC.PROP.ID.2 | Property ID Prop 2 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP2]), " ", ([364] & " " & "-" & " " & "2")) |
| CX.CC.PROP.ID.3 | Property ID Prop 3 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP3]), " ", ([364] & " " & "-" & " " & "3")) |
| CX.CC.PROP.ID.4 | Property ID Prop 4 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP4]), " ", ([364] & " " & "-" & " " & "4")) |
| CX.CC.PROP.ID.5 | Property ID Prop 5 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP5]), " ", ([364] & " " & "-" & " " & "5")) |
| CX.CC.PROP.ID.6 | Property ID Prop 6 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP6]), " ", ([364] & " " & "-" & " " & "6")) |
| CX.CC.PROP.ID.7 | Property ID Prop 7 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP7]), " ", ([364] & " " & "-" & " " & "7")) |
| CX.CC.PROP.ID.8 | Property ID Prop 8 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP8]), " ", ([364] & " " & "-" & " " & "8")) |
| CX.CC.PROP.ID.9 | Property ID Prop 9 | STRING | 15 | IIF (IsEmpty ([CX.CC.ADDR.PROP9]), " ", ([364] & " " & "-" & " " & "9")) |
| CX.CC.R.010 | Taxes to be paid in full at time of closing | DROPDOWNLIST | 0 |  |
| CX.CC.R.020 | Hazard Insurance of $ | DROPDOWNLIST | 0 |  |
| CX.CC.R.020.AMOUNT | Hazard Insurance Fee | STRING | 15 |  |
| CX.CC.R.030 | Three day right of rescission | DROPDOWNLIST | 0 |  |
| CX.CC.R.040 | Cash to borrower limited to lesser of | DROPDOWNLIST | 0 |  |
| CX.CC.R.040.AMOUNT | Cash Lesser of Amount | STRING | 15 |  |
| CX.CC.R.040.PERCENT | Cash Lesser of Percent | STRING | 15 |  |
| CX.CC.R.050 | Endorsements: | DROPDOWNLIST | 0 |  |
| CX.CC.R.050.ENDORSEMENTS | Refy Endorsements | STRING | 100 |  |
| CX.CC.R.060 | Misc.CC R Item 060 | X | 0 |  |
| CX.CC.R.060.MISC | Misc CC R Item 060 Description | STRING | 100 |  |
| CX.CC.R.070 | Misc CC R Items 070 | X | 0 |  |
| CX.CC.R.070.MISC | Misc CC R Item 070 Description | STRING | 100 |  |
| CX.CC.R.080 | Misc CC R Item 080 | X | 0 |  |
| CX.CC.R.080.MISC | Misc CC R Item 080 Description | STRING | 100 |  |
| CX.CC.R.090 | Payoff and release all liens of record for the following items: | DROPDOWNLIST | 0 | iif ([CX.CC.0.PAIDOFF]="Y","Payoff and release all liens of record for the following items:","") |
| CX.CC.REFUNDAMT1 | Refund Amount | DECIMAL_2 | 0 |  |
| CX.CC.REFUNDAMT2 | Refund Amount | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.1 | Rehab Reserves Property 1 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.10 | Rehab Reserves Property 10 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.2 | Rehab Reserves Property 2 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.3 | Rehab Reserves Property 3 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.4 | Rehab Reserves Property 4 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.5 | Rehab Reserves Property 5 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.6 | Rehab Reserves Property 6 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.7 | Rehab Reserves Property 7 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.8 | Rehab Reserves Property 8 | DECIMAL_2 | 0 |  |
| CX.CC.REHAB.RES.9 | Rehab Reserves Property 9 | DECIMAL_2 | 0 |  |
| CX.CC.REVIEW | Compliance Conds Review Date | DATE | 0 |  |
| CX.CC.SCODE | Security Code on the card | STRING | 0 |  |
| CX.CC.SQFT.1 | Sq Footage of CC Prop 1 | INTEGER | 0 |  |
| CX.CC.SQFT.10 | Sq Footage of CC Prop 10 | INTEGER | 0 |  |
| CX.CC.SQFT.2 | Sq Footage of CC Prop 2 | INTEGER | 0 |  |
| CX.CC.SQFT.3 | Sq Footage of CC Prop 3 | INTEGER | 0 |  |
| CX.CC.SQFT.4 | Sq Footage of CC Prop 4 | INTEGER | 0 |  |
| CX.CC.SQFT.5 | Sq Footage of CC Prop 5 | INTEGER | 0 |  |
| CX.CC.SQFT.6 | Sq Footage of CC Prop 6 | INTEGER | 0 |  |
| CX.CC.SQFT.7 | Sq Footage of CC Prop 7 | INTEGER | 0 |  |
| CX.CC.SQFT.8 | Sq Footage of CC Prop 8 | INTEGER | 0 |  |
| CX.CC.SQFT.9 | Sq Footage of CC Prop 9 | INTEGER | 0 |  |
| CX.CC.SS.BY | Compliance Second Sign By | STRING | 75 |  |
| CX.CC.SS.DATE | Compliance Second Sign Date | DATE | 0 |  |
| CX.CC.STATE | State of the card holder | STATE | 0 |  |
| CX.CC.STATE.1 | CC State Property 1 | STATE | 0 |  |
| CX.CC.STATE.10 | CC State Property 10 | STATE | 0 |  |
| CX.CC.STATE.2 | CC State Property 2 | STATE | 0 |  |
| CX.CC.STATE.3 | CC State Property 3 | STATE | 0 |  |
| CX.CC.STATE.4 | CC State Property 4 | STATE | 0 |  |
| CX.CC.STATE.5 | CC State Property 5 | STATE | 0 |  |
| CX.CC.STATE.6 | CC State Property 6 | STATE | 0 |  |
| CX.CC.STATE.7 | CC State Property 7 | STATE | 0 |  |
| CX.CC.STATE.8 | CC State Property 8 | STATE | 0 |  |
| CX.CC.STATE.9 | CC State Property 9 | STATE | 0 |  |
| CX.CC.SUBMITTAL.DATE | Compliance Submittal Date | STRING | 25 |  |
| CX.CC.TAXES.1 | Taxes CC Property 1 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.10 | Taxes CC Property 10 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.2 | Taxes CC Property 2 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.3 | Taxes CC Property 3 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.4 | Taxes CC Property 4 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.5 | Taxes CC Property 5 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.6 | Taxes CC Property 6 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.7 | Taxes CC Property 7 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.8 | Taxes CC Property 8 | DECIMAL_2 | 0 |  |
| CX.CC.TAXES.9 | Taxes CC Property 9 | DECIMAL_2 | 0 |  |
| CX.CC.UNIT.COUNT.1 | Number of Units Property 1 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.10 | Number of Units Property 10 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.2 | Number of Units Property 2 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.3 | Number of Units Property 3 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.4 | Number of Units Property 4 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.5 | Number of Units Property 5 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.6 | Number of Units Property 6 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.7 | Number of Units Property 7 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.8 | Number of Units Property 8 | INTEGER | 0 |  |
| CX.CC.UNIT.COUNT.9 | Number of Units Property 9 | INTEGER | 0 |  |
| CX.CC.VALUE.BPO | Total BPO Value | DECIMAL_2 | 0 | sumany([CX.CC.VALUE.BPO1],[CX.CC.VALUE.BPO10],[CX.CC.VALUE.BPO2],[CX.CC.VALUE.BPO3],[CX.CC.VALUE.BPO |
| CX.CC.VALUE.BPO1 | BPO Value 1 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO10 | BPO Value 10 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO2 | BPO Value 2 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO3 | BPO Value 3 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO4 | BPO Value 4 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO5 | BPO Value 5 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO6 | BPO Value 6 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO7 | BPO Value 7 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO8 | BPO Value 8 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.BPO9 | BPO Value 9 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.DATE.BPO1 | BPO Property 1 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO10 | BPO Property 10 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO2 | BPO Property 2 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO3 | BPO Property 3 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO4 | BPO Property 4 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO5 | BPO Property 5 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO6 | BPO Property 6 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO7 | BPO Property 7 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO8 | BPO Property 8 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.BPO9 | BPO Property 9 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL1 | Reconciled 1 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL10 | Reconciled 10 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL2 | Reconciled 2 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL3 | Reconciled 3 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL4 | Reconciled 4 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL5 | Reconciled 5 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL6 | Reconciled 6 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL7 | Reconciled 7 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL8 | Reconciled 8 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.FINAL9 | Reconciled 9 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO1 | WPO 1 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO10 | WPO Property 10 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO2 | WPO Property 2 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO3 | WPO Property 3 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO4 | WPO Property 4 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO5 | WPO Property 5 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO6 | WPO Property 6 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO7 | WPO Property 7 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO8 | WPO Property 8 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.DATE.WPO9 | WPO Property 9 Valuation Date | DATE | 0 |  |
| CX.CC.VALUE.FINAL | Total Final Value | DECIMAL_2 | 0 | sumany([CX.CC.VALUE.FINAL1],[CX.CC.VALUE.FINAL10],[CX.CC.VALUE.FINAL2],[CX.CC.VALUE.FINAL3],[CX.CC.V |
| CX.CC.VALUE.FINAL.LTV | Final Value Total for LTV Calculation | DECIMAL_2 | 0 | sumany(iif([cx.cc.ltv1]="Y",[#CX.CC.value.final1],0), iif([cx.cc.ltv2]="Y",[#CX.CC.value.final2],0), |
| CX.CC.VALUE.FINAL1 | Final Value 1 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL10 | Final Value 10 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL2 | Final Value 2 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL3 | Final Value 3 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL4 | Final Value 4 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL5 | Final Value 5 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL6 | Final Value 6 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL7 | Final Value 7 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL8 | Final Value 8 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.FINAL9 | Final Value 9 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO | Total Value LO Estimated Value | DECIMAL_2 | 0 | sumany([CX.CC.VALUE.LO1],[CX.CC.VALUE.LO10],[CX.CC.VALUE.LO2],[CX.CC.VALUE.LO3],[CX.CC.VALUE.LO4],[C |
| CX.CC.VALUE.LO1 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO10 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO2 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO3 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO4 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO5 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO6 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO7 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO8 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.LO9 | Loan Officer Value | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO | Total WPO Value | DECIMAL_2 | 0 | sumany([CX.CC.VALUE.WPO1],[CX.CC.VALUE.WPO10],[CX.CC.VALUE.WPO2],[CX.CC.VALUE.WPO3],[CX.CC.VALUE.WPO |
| CX.CC.VALUE.WPO1 | WPO Value 1 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO10 | WPO Value 10 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO2 | WPO Value 2 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO3 | WPO Value 3 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO4 | WPO Value 4 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO5 | WPO Value 5 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO6 | WPO Value 6 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO7 | WPO Value 7 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO8 | WPO Value 8 | DECIMAL_2 | 0 |  |
| CX.CC.VALUE.WPO9 | WPO Value 9 | DECIMAL_2 | 0 |  |
| CX.CC.VAR | Total Variance | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO],[CX.CC.VALUE.WPO]),[CX.CC.VALUE.WPO]), 100) |
| CX.CC.VAR1 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO1],[CX.CC.VALUE.WPO1]),[CX.CC.VALUE.WPO1]), 100) |
| CX.CC.VAR10 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO10],[CX.CC.VALUE.WPO10]),[CX.CC.VALUE.WPO10]), 100) |
| CX.CC.VAR2 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO2],[CX.CC.VALUE.WPO2]),[CX.CC.VALUE.WPO2]), 100) |
| CX.CC.VAR3 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO3],[CX.CC.VALUE.WPO3]),[CX.CC.VALUE.WPO3]), 100) |
| CX.CC.VAR4 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO4],[CX.CC.VALUE.WPO4]),[CX.CC.VALUE.WPO4]), 100) |
| CX.CC.VAR5 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO5],[CX.CC.VALUE.WPO5]),[CX.CC.VALUE.WPO5]), 100) |
| CX.CC.VAR6 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO6],[CX.CC.VALUE.WPO6]),[CX.CC.VALUE.WPO6]), 100) |
| CX.CC.VAR7 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO7],[CX.CC.VALUE.WPO7]),[CX.CC.VALUE.WPO7]), 100) |
| CX.CC.VAR8 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO8],[CX.CC.VALUE.WPO8]),[CX.CC.VALUE.WPO8]), 100) |
| CX.CC.VAR9 | Difference between WPO and BPO | DECIMAL_2 | 0 | Mult(Div(Diff([CX.CC.VALUE.BPO9],[CX.CC.VALUE.WPO9]),[CX.CC.VALUE.WPO9]), 100) |
| CX.CC.WPO.VALUE.LTV.1 | WPO Value LTV Property 1 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.1], [#CX.CC.VALUE.WPO1]), 100) |
| CX.CC.WPO.VALUE.LTV.10 | WPO Value LTV Property 10 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.10], [#CX.CC.VALUE.WPO10]), 100) |
| CX.CC.WPO.VALUE.LTV.2 | WPO Value LTV Property 2 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.2], [#CX.CC.VALUE.WPO2]), 100) |
| CX.CC.WPO.VALUE.LTV.3 | WPO Value LTV Property 3 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.3], [#CX.CC.VALUE.WPO3]), 100) |
| CX.CC.WPO.VALUE.LTV.4 | WPO Value LTV Property 4 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.4], [#CX.CC.VALUE.WPO4]), 100) |
| CX.CC.WPO.VALUE.LTV.5 | WPO Value LTV Property 5 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.5], [#CX.CC.VALUE.WPO5]), 100) |
| CX.CC.WPO.VALUE.LTV.6 | WPO Value LTV Property 6 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.6], [#CX.CC.VALUE.WPO6]), 100) |
| CX.CC.WPO.VALUE.LTV.7 | WPO Value LTV Property 7 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.7], [#CX.CC.VALUE.WPO7]), 100) |
| CX.CC.WPO.VALUE.LTV.8 | WPO Value LTV Property 8 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.8], [#CX.CC.VALUE.WPO8]), 100) |
| CX.CC.WPO.VALUE.LTV.9 | WPO Value LTV Property 9 | DECIMAL_2 | 0 | Mult(Div([#CX.CC.LA.9], [#CX.CC.VALUE.WPO9]), 100) |
| CX.CC.WPO.VENDOR.1 | WPO Vendor for CC Property 1 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.10 | WPO Vendor for CC Property 10 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.2 | WPO Vendor for CC Property 2 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.3 | WPO Vendor for CC Property 3 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.4 | WPO Vendor for CC Property 4 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.5 | WPO Vendor for CC Property 5 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.6 | WPO Vendor for CC Property 6 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.7 | WPO Vendor for CC Property 7 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.8 | WPO Vendor for CC Property 8 | DROPDOWNLIST | 0 |  |
| CX.CC.WPO.VENDOR.9 | WPO Vendor for CC Property 9 | DROPDOWNLIST | 0 |  |
| CX.CC.ZIP | Zip of the card holder | ZIPCODE | 0 |  |
| CX.CC.ZIP.1 | CC Zipcode Property 1 | ZIPCODE | 0 |  |
| CX.CC.ZIP.10 | CC Zipcode Property 10 | ZIPCODE | 0 |  |
| CX.CC.ZIP.2 | CC Zipcode Property 2 | ZIPCODE | 0 |  |
| CX.CC.ZIP.3 | CC Zipcode Property 3 | ZIPCODE | 0 |  |
| CX.CC.ZIP.4 | CC Zipcode Property 4 | ZIPCODE | 0 |  |
| CX.CC.ZIP.5 | CC Zipcode Property 5 | ZIPCODE | 0 |  |
| CX.CC.ZIP.6 | CC Zipcode Property 6 | ZIPCODE | 0 |  |
| CX.CC.ZIP.7 | CC Zipcode Property 7 | ZIPCODE | 0 |  |
| CX.CC.ZIP.8 | CC Zipcode Property 8 | ZIPCODE | 0 |  |
| CX.CC.ZIP.9 | CC Zipcode Property 9 | ZIPCODE | 0 |  |
| CX.CCAUSCOUNT | Compliance Center AUS Count | INTEGER | 0 |  |
| CX.CCAUSDATE | Compliance Center AUS Date | DATE | 0 |  |
| CX.CCAUSENGINE | Compliance Center AUS Engine | DROPDOWNLIST | 0 |  |
| CX.CCCHANGECIRCUMSTANCEBY | Change Circumstance Request By | STRING | 20 |  |
| CX.CCCHANGECIRCUMSTANCEON | Change Circumstance Request On | DATE | 0 |  |
| CX.CCCHGCIRCAPPRVD | Change of Circumstance Approved | X | 0 |  |
| CX.CCCHGCIRCAPPRVDBY | Change Circumstance Apprvd By | STRING | 20 |  |
| CX.CCCHGCIRCAPPRVDON | Change Circumstance Apprvd On | DATE | 0 |  |
| CX.CCCHGCIRCAPPRVDONNOW | COC Approved On | STRING | 22 |  |
| CX.CCCHGCIRCREQBY | Change Circumstance Required By | STRING | 20 |  |
| CX.CCCHGCIRCREQON | COC Required By | DATE | 0 |  |
| CX.CCCHGCIRCREQONNOW | COC Info Requested | STRING | 22 |  |
| CX.CCCHGCIRCREQS | Change Circumstance Requirement | STRING | 500 |  |
| CX.CCCHGCIRCUMSTANCEONNOW | COC Requested On | STRING | 22 |  |
| CX.CCECOA.ALERT.COUNT | Copy of ECOA Alert Count | STRING | 5 | [Alert.ECOA NOTIFICATION REQUIRED.AlertCount] |
| CX.CCECOA.ALERT.DATE | Date ECOA Alert was Triggered | DATE | 0 | Calendar.AddPostalDays([@3142],20,true) |
| CX.CCECOA.CLR.BY | ECOA Cleared By | STRING | 20 |  |
| CX.CCECOA.CLR.ON | ECOA Cleared Date | DATE | 0 |  |
| CX.CCECOA.SENT | ECOA Notice Sent | DATE | 0 |  |
| CX.CCECOADATE.1ST | ECOA Notification Date | DATE | 0 | Calendar.AddPostalDays([@3142],30,true) |
| CX.CCI.ACCOUNT.CCV2 | Account Number | STRING | 4 |  |
| CX.CCI.ACCOUNT.EXP.DATE | Account Expiration Date | STRING | 10 |  |
| CX.CCI.ACCOUNT.NUMBER | Account Number | STRING | 100 |  |
| CX.CCI.AUTHORIZED.AMT | Authorized Amount | DECIMAL_2 | 0 |  |
| CX.CCI.BILLING.ADDR | Account Billing Address | STRING | 100 |  |
| CX.CCI.BILLING.CITY | Account Billing City | STRING | 100 |  |
| CX.CCI.BILLING.SM.MLNG | Billing Same as Mailing | X | 0 |  |
| CX.CCI.BILLING.STATE | Account Billing State | STATE | 0 |  |
| CX.CCI.BILLING.ZIPCODE | Account Billing Zipcode | ZIPCODE | 0 |  |
| CX.CCI.CARDHOLDER.NAME | Cardholder Name | STRING | 100 |  |
| CX.CCI.TYPE | Credit Card Type | DROPDOWNLIST | 0 |  |
| CX.CCPERSONELLSIGNOFF | Compliance SignOff Name | STRING | 75 |  |
| CX.CCR.1031 | 1031 Exchange | DROPDOWNLIST | 0 |  |
| CX.CCR.2984.AUTH | Approver Authority Level | STRING | 100 |  |
| CX.CCR.ADDITIONAL.COMMENTS | Analysis Additional Comments | STRING | 5000 |  |
| CX.CCR.AGGCTOODEBT | Aggregrate CTOO FSBNW Debt | DECIMAL_2 | 0 | [#CX.CCR.EXISTDEBT] + [#CX.CCR.NEWMONEY] |
| CX.CCR.APPROVER2 | 2nd Approver | STRING | 100 |  |
| CX.CCR.APPROVER2.AUTH | 2nd Approver Authority Level | STRING | 100 |  |
| CX.CCR.APPROVER2.DATE | 2nd Approver Date | DATE | 0 |  |
| CX.CCR.APPROVER3 | 3rd Approver | STRING | 100 |  |
| CX.CCR.APPROVER3.AUTH | 3rd Approver Authority Level | STRING | 100 |  |
| CX.CCR.APPROVER3.DATE | 3rd Approver Date | DATE | 0 |  |
| CX.CCR.AUTOPAY | Auto Pay Required | DROPDOWNLIST | 0 |  |
| CX.CCR.AUTOPAY.BANK | Auto Pay Bank | STRING | 256 |  |
| CX.CCR.B2.NAME | Borrower 2 | STRING | 100 |  |
| CX.CCR.B3.NAME | Borrower 3 | STRING | 100 |  |
| CX.CCR.BROKER.LOAN | Broker Loan | DROPDOWNLIST | 0 |  |
| CX.CCR.C.PRESNT.HOUSING | Subj Property Present Housing Expense | DECIMAL_2 | 0 |  |
| CX.CCR.C.REV.CMPLT | Credit Review Complete | X | 0 |  |
| CX.CCR.CB2.NAME | Co-Borrower 2 | STRING | 100 |  |
| CX.CCR.CB3.NAME | Co-Borrower 3 | STRING | 100 |  |
| CX.CCR.COV.BTR.DUE.WIN | Borrower Tax Returns Due Within | DROPDOWNLIST | 0 |  |
| CX.CCR.COV.BTR.FREQ | Borrower Tax Return Frequency | DROPDOWNLIST | 0 |  |
| CX.CCR.COV.GUAR.DUE.WIN | Guarantor Tax Returns Due Within | DROPDOWNLIST | 0 |  |
| CX.CCR.COV.GUAR.TR.FREQ | Guarantor Tax Return Frequency | DROPDOWNLIST | 0 |  |
| CX.CCR.COV.LEASE.DUE.WIN | Lease or Evid. of Rent Due Within | DROPDOWNLIST | 0 |  |
| CX.CCR.COV.LEASE.FREQ | Lease or Evid. of Rent Frequency | DROPDOWNLIST | 0 |  |
| CX.CCR.CUST | FSBNW Bank Customer Since | DATE | 0 |  |
| CX.CCR.DEPOSIT.AMT | FFNWB Deposit Amounts | DECIMAL_2 | 0 |  |
| CX.CCR.DEPOSITACCTS | FSBNW Deposit Accounts | STRING | 100 |  |
| CX.CCR.DSC | DSC | STRING | 40 |  |
| CX.CCR.EXISTDEBT | FSBNW Existing Debt | DECIMAL_2 | 0 |  |
| CX.CCR.LEASED.LAND | Leased Land | DROPDOWNLIST | 0 |  |
| CX.CCR.NB.OWNER | Non Borrowing Owner | DROPDOWNLIST | 0 |  |
| CX.CCR.NB.SPOUSE | Non Borrowing Spouse | DROPDOWNLIST | 0 |  |
| CX.CCR.NEWMONEY | FSBNW New Money | DECIMAL_2 | 0 |  |
| CX.CCR.POA | POA | DROPDOWNLIST | 0 |  |
| CX.CCR.POLICY.EXCEPTION | Policy Exception | DROPDOWNLIST | 0 |  |
| CX.CCR.PRICE.EXCEPTION | Price Exception | DROPDOWNLIST | 0 |  |
| CX.CCR.PURPOSE.DESC | Purpose and Description of Loan | STRING | 5000 |  |
| CX.CCR.RECOMMEND | Recommended by | STRING | 100 |  |
| CX.CCR.RECOMMEND.AUTH | Recommender Authorization | STRING | 100 |  |
| CX.CCR.RECOMMEND.DATE | Recommended Date | DATE | 0 |  |
| CX.CCR.REFER.BRCH | Refer Branch | DROPDOWNLIST | 0 |  |
| CX.CCR.RISK.RATING | Risk Rating | DROPDOWNLIST | 0 |  |
| CX.CCR.TRUST | Trust | DROPDOWNLIST | 0 |  |
| CX.CCR.UW.DESIGNATION | UW Designation | DROPDOWNLIST | 0 |  |
| CX.CCR.UW.NONCONFORM | U/W Non-Conformity | DROPDOWNLIST | 0 |  |
| CX.CCR.UW.TYPE | UW Type | DROPDOWNLIST | 0 |  |
| CX.CCWITHDRAWNDAYS | Days Left to Withdraw | INTEGER | 0 | DateDiff("d",TODAY,[3143]) |
| CX.CCWITHDRAWNON | Date Withdrawn | DATE | 0 |  |
| CX.CD.1012 | Project Type | STRING | 100 |  |
| CX.CD.1041 | Property Type | STRING | 50 |  |
| CX.CD.1045 | Mtg Insurance | DECIMAL_2 | 0 |  |
| CX.CD.11 | Property Street | STRING | 80 |  |
| CX.CD.1172 | Loan Type | STRING | 40 |  |
| CX.CD.12 | Subj City | STRING | 50 |  |
| CX.CD.136 | Purchase Price | DECIMAL_2 | 0 |  |
| CX.CD.14 | Subj State | STRING | 2 |  |
| CX.CD.1401 | Loan Program | STRING | 60 |  |
| CX.CD.1405 | Real Estate Taxes | DECIMAL_2 | 0 |  |
| CX.CD.143 | Total Seller Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.15 | Subject Property | STRING | 5 |  |
| CX.CD.16 | # of Units | INTEGER | 0 |  |
| CX.CD.1811 | Occupancy Status | STRING | 40 |  |
| CX.CD.19 | Loan Purpose | STRING | 40 |  |
| CX.CD.1959 | Index Type | STRING | 40 |  |
| CX.CD.2 | Loan Amount | DECIMAL_2 | 0 |  |
| CX.CD.2203 | Buy Side Lock CD | DECIMAL_2 | 0 |  |
| CX.CD.2293 | Impounds Waived | STRING | 20 |  |
| CX.CD.230 | HOI | DECIMAL_2 | 0 |  |
| CX.CD.2312 | AUS | STRING | 25 |  |
| CX.CD.233 | HOA Dues | DECIMAL_2 | 0 |  |
| CX.CD.3 | Rate | STRING | 5 |  |
| CX.CD.353 | LTV | DECIMAL_3 | 0 |  |
| CX.CD.356 | Appraised Value | INTEGER | 0 |  |
| CX.CD.4 | Loan Term | INTEGER | 0 |  |
| CX.CD.4000 | Borrower First Name | STRING | 40 |  |
| CX.CD.4002 | Borrower Last Name | STRING | 40 |  |
| CX.CD.4004 | Co-Borrower First Name | STRING | 40 |  |
| CX.CD.4006 | Co-Borrower Last Name | STRING | 40 |  |
| CX.CD.411 | Title Co Name | STRING | 35 |  |
| CX.CD.428 | Subordinate Financing | DECIMAL_2 | 0 |  |
| CX.CD.608 | Amortization | STRING | 20 |  |
| CX.CD.610 | Escrow Co Name | STRING | 35 |  |
| CX.CD.688 | Index | DECIMAL_3 | 0 |  |
| CX.CD.689 | Margin | DECIMAL_3 | 0 |  |
| CX.CD.740 | DTI (Front) | DECIMAL | 0 |  |
| CX.CD.742 | DTI (Back) | DECIMAL | 0 |  |
| CX.CD.799 | APR | DECIMAL_3 | 0 |  |
| CX.CD.910 | Total Borrower Income | DECIMAL_2 | 0 |  |
| CX.CD.911 | Total Co-Borrower Income | DECIMAL_2 | 0 |  |
| CX.CD.976 | CLTV | DECIMAL | 0 |  |
| CX.CD.BKRPCC | Total Broker Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.BORPCC | Total Bwr Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.COPYTRIGGER | Field Used to Copy Fields | STRING | 1 |  |
| CX.CD.LENPCC | Total Lender Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.MORNET.X67 | Doc Type | STRING | 100 |  |
| CX.CD.NEWHUD.X1149 | Total Lender Credit | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X23 | Contract Seller Credit | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X24 | Section 700 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X25 | Section 700 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X26 | Section 700 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X27 | Section 700 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X28 | Section 800 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X29 | Section 800 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X30 | Section 800 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X31 | Section 800 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X32 | Section 900 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X33 | Section 900 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X34 | Section 900 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X35 | Section 900 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X36 | Section 1000 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X37 | Section 1000 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X38 | Section 1000 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X39 | Section 1000 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X40 | Section 1100 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X41 | Section 1100 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X42 | Section 1100 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X43 | Section 1100 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X44 | Section 1200 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X4427 | Section 1400 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X4428 | Section 1400 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X45 | Section 1200 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X46 | Section 1200 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X47 | Section 1200 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X48 | Section 1300 Borrower Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X49 | Section 1300 Seller Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X50 | Section 1300 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X51 | Section 1300 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X52 | Section 1400 Other Total CD | DECIMAL_2 | 0 |  |
| CX.CD.NEWHUD2.X53 | Section 1400 Total CD | DECIMAL_2 | 0 |  |
| CX.CD.OK.TO.PRINT | CD is OK to print | X | 0 | IIF(IsEmpty([761]) Or IsEmpty([762]) Or IsEmpty([3152]), "",
  IIF([@CX.TODAYS.DATE] > [@762], "", |
| CX.CD.OTHPCC | Total Other Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.READY.DATE | CD Ready Date | DATE | 0 | IIf(Min(
[CX.DocDate.Title.Int],
[CX.DOCDATE.APPRSL.INT]) = 999999, "",
Date.FromOADate(Min(
[CX |
| CX.CD.REQUEST.DATE | Date CD Was Requested | STRING | 64 |  |
| CX.CD.TNBPCC | Total Non-Bwr Paid CC | DECIMAL_2 | 0 |  |
| CX.CD.TOTPCC | Total Closing Costs | DECIMAL_2 | 0 |  |
| CX.CD.VALIDATION.CHANGES | CD Validation Changes | DROPDOWNLIST | 0 | IIF([CX.CD.4000] <> "", IIF([#CX.CD.911] <> [#911] or 
[CX.CD.MORNET.X67] <> [MORNET.X67] or
[#CX. |
| CX.CD.VASUMM.X23 | Credit Score for Decision Making | INTEGER | 0 |  |
| CX.CD5.X39 | Copy of CD5.X39 | STRING | 30 |  |
| CX.CDOF.2553 | Calculated Disbursement Date | DATE | 0 | IIF ([1811] = "PrimaryResidence" AND [19] = "Cash-Out Refinance",Calendar.AddPostalDays([763],4,true |
| CX.CDOF.763.1 | First Est Closing Date | DATE | 0 |  |
| CX.CDOF.763.2 | Second Est Closing Date | DATE | 0 |  |
| CX.CDOF.ADDLINSTRUCTIONS | Add'l Instructions | STRING | 500 |  |
| CX.CDOF.ADJUSTED.TIME | Time adjusted for zone | STRING | 10 | ([#CUST96FV])+([#CX.CDOF.TIMEZONE]) |
| CX.CDOF.AGGREGATE | Closing Date and Time | STRING | 30 |  |
| CX.CDOF.BORRSIGN.DATE | Borr Sign Date | DATE | 0 |  |
| CX.CDOF.CLOCKTIME.REQ | Clock Time Requested | STRING | 8 | iif([CUST96FV]= "0600", "6:00 AM",
iif([CUST96FV]= "0630", "6:30 AM",
iif([CUST96FV]= "0700", "7:0 |
| CX.CDOF.CLOSEDATEAPR.BY | Closing Date Approved By | STRING | 20 |  |
| CX.CDOF.CLOSEDATEAPR.NOW | CDOF.CLOSEDATEAPR.NOW | STRING | 20 |  |
| CX.CDOF.CLOSEDATEAPR.ON | Closing Date Approved On | DATE | 0 |  |
| CX.CDOF.CLOSEDATEDENIED.NOW | Date Request Denied | STRING | 25 |  |
| CX.CDOF.CLOSEDOCAPR.NOW | CDOF.CLOSEDOCAPR.NOW | STRING | 20 |  |
| CX.CDOF.CLOSEDOCSAPR.BY | Closing Docs Approved BY | STRING | 20 |  |
| CX.CDOF.CLOSEDOCSAPR.ON | Closing Docs Approved On | DATE | 0 |  |
| CX.CDOF.COPY763 | Archived Estimated Closing Date | STRING | 10 | [763] |
| CX.CDOF.DATE | Next Available Date | DATE | 0 |  |
| CX.CDOF.DATETIME.APRVD | Closing Date Approved | DROPDOWNLIST | 0 |  |
| CX.CDOF.DATETIME.LOCK | Closing Date and Time Locked | DROPDOWNLIST | 0 |  |
| CX.CDOF.DELIVERED.BY | CDOF.DELIVERED.BY | DROPDOWNLIST | 0 |  |
| CX.CDOF.DENVER.TIME | Time adjusted to Denver | STRING | 10 | iif([CX.CDOF.ADJUSTED.TIME]= "600", "6:00 AM",
iif([CX.CDOF.ADJUSTED.TIME]= "630", "6:30 AM",
iif( |
| CX.CDOF.DOCS.BY | CDOF.DOCS.BY | DATE | 0 |  |
| CX.CDOF.EARLIEST | Earliest Closing Date | DATE | 0 | iif ([@3147]>[@CX.CDOF.TODAYPLUS.2],[@3147],
iif ([@3147]<[@CX.CDOF.TODAYPLUS.2],[@CX.CDOF.TODAYPLU |
| CX.CDOF.EARLIEST.DATE | CDOF.EARLIEST.DATE | STRING | 10 | [CX.CDOF.EARLIEST] |
| CX.CDOF.EARLYDATEAPR.BY | Early Date Approved By | STRING | 20 |  |
| CX.CDOF.EARLYDATEAPR.ON | Early Date Approved On | DATE | 0 |  |
| CX.CDOF.FIGSENT.BY | Who Sent Closing Figures | STRING | 20 |  |
| CX.CDOF.FIGSENT.ON | Date Sent Closing Figures | DATE | 0 |  |
| CX.CDOF.FIGSENT.ON.2 | Short Date Figs Sent | STRING | 10 | [CX.CDOF.FIGSENT.ON] |
| CX.CDOF.FIGURES.BY | CDOF.FIGURES.BY | DATE | 0 |  |
| CX.CDOF.MAILAWAY | Is this a Mail Away Closing? | YN | 0 |  |
| CX.CDOF.MAILOUT | Are Closing Docs being mailed to the borrower | DROPDOWNLIST | 0 |  |
| CX.CDOF.MSFUN | Closing Date Passed - Not Funded | X | 0 | IIF ([@CX.CDOF.2553] < [@CX.CDOF.TODAY] AND ([MS.FUN]) = "","X","") |
| CX.CDOF.REQUEST.DATE | Date Request Sent | DATE | 0 |  |
| CX.CDOF.REQUESTED.ON | Date and time request sent | STRING | 20 |  |
| CX.CDOF.REQUESTED.TIME | Requested Local Time of Closing | DROPDOWNLIST | 0 |  |
| CX.CDOF.SHORTDATE | Early Closing Date Request | DROPDOWNLIST | 0 |  |
| CX.CDOF.TEST.ECD1 | CDOF.TEST.ECD1 | DATE | 0 |  |
| CX.CDOF.TEST.ECD2 | CDOF.TEST.ECD2 | DATE | 0 |  |
| CX.CDOF.TEST.ECD3 | CDOF.TEST.ECD3 | DATE | 0 |  |
| CX.CDOF.TIME | Requested Closing Time | DROPDOWNLIST | 0 |  |
| CX.CDOF.TIMEREQ | Time of Closing Requested | DROPDOWNLIST | 0 |  |
| CX.CDOF.TIMEZONE | Time Zone | STRING | 10 |  |
| CX.CDOF.TIMEZONE.2 | Timezone Abbreviation | STRING | 2 | iif ([CX.CDOF.TIMEZONE]= "-200", "ET",
iif ([CX.CDOF.TIMEZONE]= "-100", "CT",
iif ([CX.CDOF.TIMEZO |
| CX.CDOF.TIMEZONENAME | Requested Time Zone | DROPDOWNLIST | 0 |  |
| CX.CDOF.TODAY | Today's Date | DATE | 0 | DateAdd("d",0,System.DateTime.Now) |
| CX.CDOF.TODAYPLUS.2 | Today plus 2 days | DATE | 0 | Calendar.AddBusinessDays (TODAY, 2, true) |
| CX.CDSENT | CD has Been Sent | YN | 0 |  |
| CX.CER.LO.RESPONSE | LO Condition Exception Request Granted – Condition Waived | X | 0 |  |
| CX.CER.LO.RESPONSE.BY | CER Response By | DATE | 0 |  |
| CX.CER.LO.RESPONSE.DT | CER Response Date | DATE | 0 |  |
| CX.CER.UW.DETERMINATION.DT | UW Determination Date | DATE | 0 |  |
| CX.CF.OPEN.EXTERNAL | Open External Conditions | STRING | 8000 |  |
| CX.CG.UW.APPROVAL | CG Checkbox for UW approval  | X | 0 |  |
| CX.CHANGE.IN.CIRCUMSTANCE | Change In Circumstance | STRING | 5000 | [CX.CIC.REASON] |
| CX.CHANGELO.REQUEST.DT | Date user requested the LO change | STRING | 99 |  |
| CX.CHANGELO.REQUEST.EMAIL | Email of user who requested the LO change | STRING | 99 |  |
| CX.CHANGELO.REQUEST.UN | User who requested the LO change | STRING | 99 |  |
| CX.CHANGELO.TYPE | LO change - Type | STRING | 99 |  |
| CX.CHANNEL.IDENTIFIER | Channel Identifier | STRING | 50 |  |
| CX.CHECK.MI | Check MI | X | 0 |  |
| CX.CHECK.PTOC.1 | Check P to Comp 1 | X | 0 |  |
| CX.CHECK.PTOC.10 | Check P to Comp 10 | X | 0 |  |
| CX.CHECK.PTOC.2 | Check P to Comp 2 | X | 0 |  |
| CX.CHECK.PTOC.3 | Check P to Comp 3 | X | 0 |  |
| CX.CHECK.PTOC.4 | Check P to Comp 4 | X | 0 |  |
| CX.CHECK.PTOC.5 | Check P to Comp 5 | X | 0 |  |
| CX.CHECK.PTOC.6 | Check P to Comp 6 | X | 0 |  |
| CX.CHECK.PTOC.7 | Check P to Comp 7 | X | 0 |  |
| CX.CHECK.PTOC.8 | Check P to Comp 8 | X | 0 |  |
| CX.CHECK.PTOC.9 | Check P to Comp 9 | X | 0 |  |
| CX.CHECK.PTOC.REV.1 | Check P to Comp Reviewed 1 | X | 0 |  |
| CX.CHECK.PTOC.REV.10 | Check P to Comp Reviewed 10 | X | 0 |  |
| CX.CHECK.PTOC.REV.2 | Check P to Comp Reviewed 2 | X | 0 |  |
| CX.CHECK.PTOC.REV.3 | Check P to Comp Reviewed 3 | X | 0 |  |
| CX.CHECK.PTOC.REV.4 | Check P to Comp Reviewed 4 | X | 0 |  |
| CX.CHECK.PTOC.REV.5 | Check P to Comp Reviewed 5 | X | 0 |  |
| CX.CHECK.PTOC.REV.6 | Check P to Comp Reviewed 6 | X | 0 |  |
| CX.CHECK.PTOC.REV.7 | Check P to Comp Reviewed 7 | X | 0 |  |
| CX.CHECK.PTOC.REV.8 | Check P to Comp Reviewed 8 | X | 0 |  |
| CX.CHECK.PTOC.REV.9 | Check P to Comp Reviewed 9 | X | 0 |  |
| CX.CHECK.PTOUW.1 | Check P to UW 1 | X | 0 |  |
| CX.CHECK.PTOUW.10 | Check P to UW 10 | X | 0 |  |
| CX.CHECK.PTOUW.2 | Check P to UW 2 | X | 0 |  |
| CX.CHECK.PTOUW.3 | Check P to UW 3 | X | 0 |  |
| CX.CHECK.PTOUW.4 | Check P to UW 4 | X | 0 |  |
| CX.CHECK.PTOUW.5 | Check P to UW 5 | X | 0 |  |
| CX.CHECK.PTOUW.6 | Check P to UW 6 | X | 0 |  |
| CX.CHECK.PTOUW.7 | Check P to UW 7 | X | 0 |  |
| CX.CHECK.PTOUW.8 | Check P to UW 8 | X | 0 |  |
| CX.CHECK.PTOUW.9 | Check P to UW 9 | X | 0 |  |
| CX.CHECK.PTOUW.REV.1 | Check P to UW Rev 1 | X | 0 |  |
| CX.CHECK.PTOUW.REV.10 | Check P to UW Rev 10 | X | 0 |  |
| CX.CHECK.PTOUW.REV.2 | Check P to UW Rev 2 | X | 0 |  |
| CX.CHECK.PTOUW.REV.3 | Check P to UW Rev 3 | X | 0 |  |
| CX.CHECK.PTOUW.REV.4 | Check P to UW Rev 4 | X | 0 |  |
| CX.CHECK.PTOUW.REV.5 | Check P to UW Rev 5 | X | 0 |  |
| CX.CHECK.PTOUW.REV.6 | Check P to UW Rev 6 | X | 0 |  |
| CX.CHECK.PTOUW.REV.7 | Check P to UW Rev 7 | X | 0 |  |
| CX.CHECK.PTOUW.REV.8 | Check P to UW Rev 8 | X | 0 |  |
| CX.CHECK.PTOUW.REV.9 | Check P to UW Rev 9 | X | 0 |  |
| CX.CHECKDIGIT | TEST CHECK DIGIT | STRING | 1 |  |
| CX.CHECKLIST.1 | 30 Day Pay Stubs | YN | 0 |  |
| CX.CHECKLIST.1.DATE | 30 Day Pay Stubs When | STRING | 30 |  |
| CX.CHECKLIST.1.NAME | 30 Day Pay Stubs Who | STRING | 50 |  |
| CX.CHECKLIST.2 | Bank Statements | YN | 0 |  |
| CX.CHECKLIST.2.DATE | Bank Statements When | STRING | 30 |  |
| CX.CHECKLIST.2.NAME | Bank Statements Who | STRING | 50 |  |
| CX.CHECKLIST.3 | W-2's | YN | 0 |  |
| CX.CHECKLIST.3.DATE | W-2's When | STRING | 30 |  |
| CX.CHECKLIST.3.NAME | W-2's Who | STRING | 50 |  |
| CX.CHECKLIST.4 | Tax Returns | YN | 0 |  |
| CX.CHECKLIST.4.DATE | Tax Returns When | STRING | 30 |  |
| CX.CHECKLIST.4.NAME | Tax Returns Who | STRING | 50 |  |
| CX.CHECKLIST.5 | DL and SS Card | YN | 0 |  |
| CX.CHECKLIST.5.DATE | DL and SS Card When | STRING | 30 |  |
| CX.CHECKLIST.5.NAME | DL and SS Card Who | STRING | 50 |  |
| CX.CHECKLIST.6 | Income Calc Form  | YN | 0 |  |
| CX.CHECKLIST.6.DATE | Income Calc Form  When | STRING | 30 |  |
| CX.CHECKLIST.6.NAME | Income Calc Form Who | STRING | 50 |  |
| CX.CHECKLIST.7 | Credit Report | YN | 0 |  |
| CX.CHECKLIST.7.DATE | Credit Report When | STRING | 30 |  |
| CX.CHECKLIST.7.NAME | Credit Report Who | STRING | 50 |  |
| CX.CHECKLIST.8 | DU | YN | 0 |  |
| CX.CHECKLIST.8.DATE | DU When | STRING | 30 |  |
| CX.CHECKLIST.8.NAME | DU Who | STRING | 50 |  |
| CX.CHECKLIST.9 | sales contract  | YN | 0 |  |
| CX.CHECKLIST.9.DATE | Sales Contract When | STRING | 30 |  |
| CX.CHECKLIST.9.NAME | Sales Contract Who  | STRING | 50 |  |
| CX.CHECKLIST.NOTES | Important Things to Know About this File | STRING | 750 |  |
| CX.CIAAPPROVAL | CIA Approval | X | 0 |  |
| CX.CIBI.ACF | Available Construction Funds | DECIMAL_2 | 0 | [CX.CIBI.S1LFA] |
| CX.CIBI.C1.DA | Closing 1 - Draw Amount | DECIMAL_2 | 0 | [1045] |
| CX.CIBI.C1.DND | Closing 1 - Draw Net Deductions | DECIMAL_2 | 0 | [CX.CIBI.C1.DA] |
| CX.CIBI.C1.DTD | Closing 1 - DTD | DECIMAL_2 | 0 | [CX.CIBI.EMPTB] |
| CX.CIBI.C1.LFA | Closing 1 Loan Funds available | DECIMAL_2 | 0 | [CX.CIBI.LFA] |
| CX.CIBI.C1.NLB | Closing 1 - New Loan Balance | DECIMAL_2 | 0 | Diff([CX.CIBI.C1.DA],Max(Min(Diff([CX.CIBI.C1.UD],[CX.CIBI.C1.DTD]),[CX.CIBI.C1.DA]),0)) |
| CX.CIBI.C1.RF | Closing 1 Reserve Funds | DECIMAL_2 | 0 | [cx.cibi.sb7.reserve] |
| CX.CIBI.C1.UD | Closing 1 - Undisbursed Downpmnt | DECIMAL_2 | 0 | [CX.CIBI.DOWN.PAYMENT] |
| CX.CIBI.C1ELB | Closing 1 ELB | DECIMAL_2 | 0 |  |
| CX.CIBI.C2.DA | CIBI.C2.DA | DECIMAL_2 | 0 | [CX.CIBI.LANDCOST] |
| CX.CIBI.C2.DND | CIBI.C2.DND | DECIMAL_2 | 0 | diff([CX.CIBI.C2.DA],iif([CX.CIBI.LANDOWNER]="Builder",min([CX.CIBI.C2.DTD],[CX.CIBI.C2.DA]),0)) |
| CX.CIBI.C2.DTD | CIBI.C2.DTD | DECIMAL_2 | 0 | [CX.CIBI.C1.DTD] |
| CX.CIBI.C2.ELB | CIBI.C2.ELB | DECIMAL_2 | 0 | [CX.CIBI.C1.NLB] |
| CX.CIBI.C2.NLB | CIBI.C2.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.C1.NLB],[CX.CIBI.C2.DA]),min([CX.CIBI.C2.UD],[CX.CIBI.C2.DA],iif([CX.CIBI.LANDO |
| CX.CIBI.C2.RF | CIBI.C2.RF | DECIMAL_2 | 0 | [CX.CIBI.C1.RF] |
| CX.CIBI.C2.UD | CIBI.C2.UD | DECIMAL_2 | 0 | diff([CX.CIBI.C1.UD],max(min(diff([[CX.CIBI.C1.UD],[CX.CIBI.C1.DTD]),[CX.CIBI.C1.DA]),0)) |
| CX.CIBI.C2LFA | CIBI.C2LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.C2.ELB]) |
| CX.CIBI.C3.DA | CIBI.C3.DA | DECIMAL_2 | 0 | [CX.CIBI.CONST.FUNDS] |
| CX.CIBI.C3.DND | CIBI.C3.DND | DECIMAL_2 | 0 | [CX.CIBI.C3.DA] |
| CX.CIBI.C3.DTD | CIBI.C3.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.C2.DTD],iif([CX.CIBI.LANDOWNER]="Builder",min([CX.CIBI.C2.DTD],[CX.CIBI.C2.DA]),0)) |
| CX.CIBI.C3.ELB | CIBI.C3.ELB | DECIMAL_2 | 0 | [CX.CIBI.C2.NLB] |
| CX.CIBI.C3.NLB | CIBI.C3.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.C2.NLB],[CX.CIBI.C3.DA]),max(min(diff([CX.CIBI.C3.UD],[CX.CIBI.C3.DTD]),[CX.CIB |
| CX.CIBI.C3.RF | CIBI.C3.RF | DECIMAL_2 | 0 | [CX.CIBI.C2.RF] |
| CX.CIBI.C3.UD | CIBI.C3.UD | DECIMAL_2 | 0 | diff([CX.CIBI.C2.UD],min([CX.CIBI.C2.UD],[CX.CIBI.C2.DA],iif([CX.CIBI.LANDOWNER]="Builder",[CX.CIBI. |
| CX.CIBI.C3LFA | CIBI.C3LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.C3.ELB]) |
| CX.CIBI.CCPBB | Closing Costs paid by builder | DECIMAL_2 | 0 |  |
| CX.CIBI.CONST.FUNDS | Construction Funds | DECIMAL_2 | 0 | sumany([CX.CIBI.LANDCOST],[CX.CTP.3A.VALUE]) |
| CX.CIBI.CONST.FUNDS.CONV | Construction Funds - Conv | DECIMAL_2 | 0 | sumany([CX.DRAW.BUILD.COST],[CX.CIBI.LANDCOST.conv]) |
| CX.CIBI.CONST.FUNDS.FHA | Construction Funds - FHA | DECIMAL_2 | 0 | sumany([CX.DRAW.BUILD.COST],[CX.CIBI.LANDCOST.FHA]) |
| CX.CIBI.CONV.HOLDBACK | Lender Holdback at Closing | DECIMAL_2 | 0 | sumany([CX.CIBI.DFA.CONV],[CX.CIBI.CONV.RESERVE]) |
| CX.CIBI.CONV.HOLDBACK.HUD | Lender Holdback at Closing | DECIMAL_2 | 0 | diff([CX.DRAW.BUILD.COST],[CX.CIBI.CONV.SCDAC]) |
| CX.CIBI.CONV.RESERVE | Conventional Reserve | DECIMAL_2 | 0 | IIF(left([CX.CIBI.LANDOWNER],5)="Build",Mult([CX.CIBI.CONST.FUNDS.CONV],[CX.CIBI.CONV.RETAINAGE]),mu |
| CX.CIBI.CONV.SCDAC | Soft Cost Disb. at Closing - Conv | DECIMAL_2 | 0 | mult([CX.CIBI.FAAHD],.10) |
| CX.CIBI.DED.CONST.FUNDS | Deductions to construction funds | DECIMAL_2 | 0 | Sumany([CX.CIBI.CCPBB],[CX.CIBI.EMPTB],[CX.CIBI.REALTORCOMM]) |
| CX.CIBI.DED.CONST.FUNDS.CONV | Deductions to Construction Funds - CONV | DECIMAL_2 | 0 | sumany([CX.CIBI.CCPBB],[CX.CIBI.EMPTB],[CX.CIBI.REALTORCOMM.CONV]) |
| CX.CIBI.DFA.CONV | Draw Funds Available - Conv | DECIMAL_2 | 0 | diff([CX.CIBI.FAAHD],[CX.CIBI.CONV.SCDAC]) |
| CX.CIBI.DFA.FHA | Draw Funds Available - FHA | DECIMAL_2 | 0 | diff([CX.CIBI.FAAHD.FHA],[CX.CIBI.FHA.SCDAC]) |
| CX.CIBI.DOWN.PAYMENT | OTC Down Payment | DECIMAL_2 | 0 | iif(sumany(Diff([CX.CIBI.CONST.FUNDS],[2]),[1045])<0,0,sumany(Diff([CX.CIBI.CONST.FUNDS],[2]),[1045] |
| CX.CIBI.EMPTB | Earnest Money Paid to Builder | DECIMAL_2 | 0 |  |
| CX.CIBI.FAAHD | Funds available after HUD Deductions | DECIMAL_2 | 0 | diff(diff(diff([CX.CIBI.CONST.FUNDS.CONV],[CX.CIBI.LANDCOST.CONV]),[CX.CIBI.DED.CONST.FUNDS.CONV]),[ |
| CX.CIBI.FAAHD.FHA | Funds available after HUD Deductions | DECIMAL_2 | 0 | diff(diff(diff([CX.CIBI.CONST.FUNDS.FHA],[CX.CIBI.LANDCOST.FHA]),[CX.CIBI.DED.CONST.FUNDS]),[CX.CIBI |
| CX.CIBI.FHA.HOLDBACK | Lender Holdback at Closing | DECIMAL_2 | 0 | sumany([CX.CIBI.DFA.FHA],[CX.CIBI.FHA.RESERVE]) |
| CX.CIBI.FHA.HOLDBACK.HUD | Lender Holdback at Closing | DECIMAL_2 | 0 | diff([CX.DRAW.BUILD.COST],[CX.CIBI.FHA.SCDAC]) |
| CX.CIBI.FHA.RESERVE | FHA Reserve | DECIMAL_2 | 0 | IIF(left([CX.CIBI.LANDOWNER],5)="Build",Mult([CX.CIBI.CONST.FUNDS.FHA],[CX.CIBI.FHA.RETAINAGE]),mult |
| CX.CIBI.FHA.SCDAC | Soft Cost Disb. at Closing - FHA | DECIMAL_2 | 0 | mult([CX.CIBI.FAAHD.FHA],.10) |
| CX.CIBI.FOUNDATION.TYPE | Foundation Type | DROPDOWNLIST | 0 |  |
| CX.CIBI.LANDCOST | Land Cost for Draw Schedule | STRING | 25 | IIF([CX.CTP.1A.LANDOWNRSHP]="Purchasing At Closing",[+CX.CTP.1D.VALUE],iif([CX.CTP.1A.LANDOWNRSHP]=" |
| CX.CIBI.LANDCOST.CONV | Conv Landcost | DECIMAL_2 | 0 |  |
| CX.CIBI.LANDCOST.FHA | FHA Landcost  | STRING | 25 | IIF([CX.CTP.1A.LANDOWNRSHP]="Purchasing At Closing",[CX.CTP.1D.VALUE],iif([CX.CTP.1A.LANDOWNRSHP]="C |
| CX.CIBI.LANDOWNER | Landowner on Draw Schedule | STRING | 35 | IIF([CX.CTP.BUILDERISSELLER]="Y","Builder/Contractor is also seller of the lot.",IIF([CX.CTP.1A.LAND |
| CX.CIBI.LFA | Loan Funds available | DECIMAL_2 | 0 | Diff([2],[CX.CIBI.SB7.RESERVE]) |
| CX.CIBI.NW5.C1.LB | Closing 1 Loan Balance | DECIMAL_2 | 0 | diff([CX.CIBI.LANDCOST],min([CX.CIBI.DOWN.PAYMENT],[CX.CIBI.LANDCOST])) |
| CX.CIBI.NW5.C2.FA | NW% Closing 2 - Funds available | DECIMAL_2 | 0 | diff([CX.CIBI.NW5.LFA],diff([CX.CIBI.LANDCOST],min([CX.CIBI.DOWN.PAYMENT],[CX.CIBI.LANDCOST]))) |
| CX.CIBI.NW5.C2.LB | NW5 Closing 2 Loan Balance | DECIMAL_2 | 0 | sumany([CX.CIBI.NW5.C1.LB],diff([CX.CIBI.DED.CONST.FUNDS],max(min(diff([CX.CIBI.DOWN.PAYMENT],MIN([C |
| CX.CIBI.NW5.DA.1ST | CIBI.NW5.DA.1ST | DECIMAL_2 | 0 | Mult([CX.CIBI.NW5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.1,.1)) |
| CX.CIBI.NW5.DA.2ND | CIBI.NW5.DA.2ND | DECIMAL_2 | 0 | MULT([CX.CIBI.NW5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.1)) |
| CX.CIBI.NW5.DA.3RD | NW5 Stage 3 Draw Amt | DECIMAL_2 | 0 | MULT([CX.CIBI.NW5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.31,.34)) |
| CX.CIBI.NW5.DA.4TH | NW5 Stage 4 Draw Amount | DECIMAL_2 | 0 | MULT([CX.CIBI.NW5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.21,.21)) |
| CX.CIBI.NW5.FA.2ND | CIBI.NW5.FA.2ND | DECIMAL_2 | 0 | Diff([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.TPO.1ST]) |
| CX.CIBI.NW5.FA.3RD | CIBI.NW5.FA.3RD | DECIMAL_2 | 0 | DIFF([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.TPO.2ND]) |
| CX.CIBI.NW5.FA.4TH | NW5 Funds Available Stage 4 | DECIMAL_2 | 0 | DIFF([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.TPO.3RD]) |
| CX.CIBI.NW5.FA.5TH | NW5 Stage 5 Funds Available | DECIMAL_2 | 0 | DIFF([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.TPO.4TH]) |
| CX.CIBI.NW5.FA.RESERVE | CIBI.NW5.FA.RESERVE | DECIMAL_2 | 0 | DIFF([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.TPO.5TH]) |
| CX.CIBI.NW5.FA.STG1 | CIBI.NW5.FA.STG1 | DECIMAL_2 | 0 | Diff([CX.CIBI.NW5.LFA],[CX.CIBI.NW5.C2.LB]) |
| CX.CIBI.NW5.LFA | NW5 Loan Funds Available | DECIMAL_2 | 0 | diff(min([1109],[CX.CIBI.CONST.FUNDS]),[CX.CIBI.NW5.RESERVE]) |
| CX.CIBI.NW5.RESERVE | CIBI.NW5.RESERVE | DECIMAL_2 | 0 | iif([CX.CIBI.LANDOWNER]="Builder/Contractor is also seller of the lot.",multany([CX.CIBI.TOTALCOST], |
| CX.CIBI.NW5.TEXT.1ST | NW5 Built Stage 1 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.NW5.TEXT.2ND | NW5 Stage 2 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.NW5.TEXT.3RD | NW5 Stage 3 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.NW5.TEXT.4TH | NW5 Stage 4 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.NW5.TEXT.5TH | NW5 Stage 5 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.NW5.TPO.1ST | CIBI.NW5.TPO.1ST | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.NW5.C2.LB]+[CX.CIBI.NW5.DA.1ST]),MIN([CX.CIBI.NW5.UD.1ST],[CX.CIBI.NW5.DA.1ST]) |
| CX.CIBI.NW5.TPO.2ND | CIBI.NW5.TPO.2ND | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.NW5.TPO.1ST]+[CX.CIBI.NW5.DA.2ND]),MIN([CX.CIBI.NW5.UD.2ND],[CX.CIBI.NW5.DA.2ND |
| CX.CIBI.NW5.TPO.3RD | NW5 TPO Stage 3 | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.NW5.TPO.2ND]+[CX.CIBI.NW5.DA.3RD]),MIN([CX.CIBI.NW5.UD.3RD],[CX.CIBI.NW5.DA.3RD |
| CX.CIBI.NW5.TPO.4TH | NW5 TPO Stage 4 | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.NW5.TPO.3RD]+[CX.CIBI.NW5.DA.4TH]),MIN([CX.CIBI.NW5.UD.4TH],[CX.CIBI.NW5.DA.4TH |
| CX.CIBI.NW5.TPO.5TH | CIBI.NW5.TPO.5TH | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.NW5.TPO.4TH]+[CX.CIBI.NW5.DA.5TH]),MIN([CX.CIBI.NW5.UD.5TH],[CX.CIBI.NW5.DA.5TH |
| CX.CIBI.NW5.TPO.RESERVE | CIBI.NW5.TPO.RESERVE | DECIMAL_2 | 0 | diff(Sumany([#CX.CIBI.NW5.TPO.5TH]+[#CX.CIBI.NW5.DA.RESERVE]),MIN([#CX.CIBI.NW5.UD.RESERVE],[#CX.CIB |
| CX.CIBI.R.DA | CIBI.R.DA | DECIMAL_2 | 0 | [CX.CIBI.SB7.RESERVE] |
| CX.CIBI.R.DND | CIBI.R.DND | DECIMAL_2 | 0 | diff([CX.CIBI.R.DA],min([CX.CIBI.R.DTD],[CX.CIBI.R.DA])) |
| CX.CIBI.R.DTD | CIBI.R.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.S5.DTD],min([CX.CIBI.S5.DTD],[CX.CIBI.S5.DA])) |
| CX.CIBI.R.NLB | CIBI.R.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.S5.NLB],[CX.CIBI.R.DA]),min([CX.CIBI.R.UD],[CX.CIBI.R.DA])) |
| CX.CIBI.R.UD | CIBI.R.UD | DECIMAL_2 | 0 | diff([CX.CIBI.S5.UD],min([CX.CIBI.S5.UD],[CX.CIBI.S5.DTD])) |
| CX.CIBI.REALTORCOMM | Realtor Commisions | DECIMAL_2 | 0 | SumAny([L211],[L213]) |
| CX.CIBI.REALTORCOMM.CONV | Realtor Comm - Conv | DECIMAL_2 | 0 | SumAny([L211],[L213]) |
| CX.CIBI.S1.DA | CIBI.S1.DA | DECIMAL_2 | 0 | multany([CX.CIBI.ACF],div([CX.DRAW.STAGE1.PRCNT],100)) |
| CX.CIBI.S1.DND | CIBI.S1.DND | DECIMAL_2 | 0 | diff([CX.CIBI.S1.DA],min([CX.CIBI.S1.DTD],[CX.CIBI.S1.DA])) |
| CX.CIBI.S1.DTD | CIBI.S1.DTD | DECIMAL_2 | 0 | [CX.CIBI.C3.DTD] |
| CX.CIBI.S1.ELB | CIBI.S1.ELB | DECIMAL_2 | 0 | [CX.CIBI.C3.NLB] |
| CX.CIBI.S1.NLB | CIBI.S1.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.C3.NLB],[CX.CIBI.S1.DA]),min([CX.CIBI.S1.UD],[CX.CIBI.S1.DA])) |
| CX.CIBI.S1.RF | CIBI.S1.RF | DECIMAL_2 | 0 | [CX.CIBI.C3.RF] |
| CX.CIBI.S1.UD | CIBI.S1.UD | DECIMAL_2 | 0 | diff([CX.CIBI.C3.UD],max(min(diff([CX.CIBI.C3.UD],[CX.CIBI.C3.DTD]),[CX.CIBI.C3.DA]),0)) |
| CX.CIBI.S1LFA | CIBI.S1LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.S1.ELB]) |
| CX.CIBI.S2.DA | CIBI.S2.DA | DECIMAL_2 | 0 | multany([CX.CIBI.ACF],div([CX.DRAW.STAGE2.PRCNT],100)) |
| CX.CIBI.S2.DND | CIBI.S2.DND | DECIMAL_2 | 0 | diff([CX.CIBI.S2.DA],min([CX.CIBI.S2.DTD],[CX.CIBI.S2.DA])) |
| CX.CIBI.S2.DTD | CIBI.S2.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.S1.DTD],min([CX.CIBI.S1.DTD],[CX.CIBI.S1.DA])) |
| CX.CIBI.S2.NLB | CIBI.S2.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.s1.NLB],[CX.CIBI.S2.DA]),min([CX.CIBI.S2.UD],[CX.CIBI.S2.DA])) |
| CX.CIBI.S2.RF | CIBI.S2.RF | DECIMAL_2 | 0 | [CX.CIBI.S1.RF] |
| CX.CIBI.S2.UD | CIBI.S2.UD | DECIMAL_2 | 0 | diff([CX.CIBI.S1.UD],min([CX.CIBI.S1.UD],[CX.CIBI.S1.DTD])) |
| CX.CIBI.S3.DA | CIBI.S3.DA | DECIMAL_2 | 0 | multany([CX.CIBI.ACF],div([CX.DRAW.STAGE3.PRCNT],100)) |
| CX.CIBI.S3.DND | CIBI.S3.DND | DECIMAL_2 | 0 | diff([CX.CIBI.S3.DA],min([CX.CIBI.S3.DTD],[CX.CIBI.S3.DA])) |
| CX.CIBI.S3.DTD | CIBI.S3.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.S2.DTD],min([CX.CIBI.S2.DTD],[CX.CIBI.S2.DA])) |
| CX.CIBI.S3.ELB | CIBI.S3.ELB | DECIMAL_2 | 0 | [CX.CIBI.S2.NLB] |
| CX.CIBI.S3.NLB | CIBI.S3.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.s2.NLB],[CX.CIBI.S3.DA]),min([CX.CIBI.S3.UD],[CX.CIBI.S3.DA])) |
| CX.CIBI.S3.RF | CIBI.S3.RF | DECIMAL_2 | 0 | [CX.CIBI.S2.RF] |
| CX.CIBI.S3.UD | CIBI.S3.UD | DECIMAL_2 | 0 | diff([CX.CIBI.S2.UD],min([CX.CIBI.S2.UD],[CX.CIBI.S2.DTD])) |
| CX.CIBI.S3LFA | CIBI.S3LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.S3.ELB]) |
| CX.CIBI.S4.DA | CIBI.S4.DA | DECIMAL_2 | 0 | multany([CX.CIBI.ACF],div([CX.DRAW.STAGE4.PRCNT],100)) |
| CX.CIBI.S4.DND | CIBI.S4.DND | DECIMAL_2 | 0 | diff([CX.CIBI.S4.DA],min([CX.CIBI.S4.DTD],[CX.CIBI.S4.DA])) |
| CX.CIBI.S4.DTD | CIBI.S4.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.S3.DTD],min([CX.CIBI.S3.DTD],[CX.CIBI.S3.DA])) |
| CX.CIBI.S4.ELB | CIBI.S4.ELB | DECIMAL_2 | 0 | [CX.CIBI.S3.NLB] |
| CX.CIBI.S4.NLB | CIBI.S4.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.S3.NLB],[CX.CIBI.S4.DA]),min([CX.CIBI.S4.UD],[CX.CIBI.S4.DA])) |
| CX.CIBI.S4.RF | CIBI.S4.RF | DECIMAL_2 | 0 | [CX.CIBI.S3.RF] |
| CX.CIBI.S4.UD | CIBI.S4.UD | DECIMAL_2 | 0 | diff([CX.CIBI.S3.UD],min([CX.CIBI.S3.UD],[CX.CIBI.S3.DTD])) |
| CX.CIBI.S4LFA | CIBI.S4LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.S4.ELB]) |
| CX.CIBI.S5.DA | CIBI.S5.DA | DECIMAL_2 | 0 | multany([CX.CIBI.ACF],div([CX.DRAW.STAGE5.PRCNT],100)) |
| CX.CIBI.S5.DND | CIBI.S5.DND | DECIMAL_2 | 0 | diff([CX.CIBI.S5.DA],min([CX.CIBI.S5.DTD],[CX.CIBI.S5.DA])) |
| CX.CIBI.S5.DTD | CIBI.S5.DTD | DECIMAL_2 | 0 | diff([CX.CIBI.S4.DTD],min([CX.CIBI.S4.DTD],[CX.CIBI.S4.DA])) |
| CX.CIBI.S5.ELB | CIBI.S5.ELB | DECIMAL_2 | 0 | [CX.CIBI.S4.NLB] |
| CX.CIBI.S5.NLB | CIBI.S5.NLB | DECIMAL_2 | 0 | diff(sumany([CX.CIBI.s4.NLB],[CX.CIBI.S5.DA]),min([CX.CIBI.S5.UD],[CX.CIBI.S5.DA])) |
| CX.CIBI.S5.RF | CIBI.S5.RF | DECIMAL_2 | 0 | [CX.CIBI.S4.RF] |
| CX.CIBI.S5.UD | CIBI.S5.UD | DECIMAL_2 | 0 | diff([CX.CIBI.S2.UD],min([CX.CIBI.S2.UD],[CX.CIBI.S2.DTD])) |
| CX.CIBI.S5LFA | CIBI.S5LFA | DECIMAL_2 | 0 | diff([CX.CIBI.LFA],[CX.CIBI.S5.ELB]) |
| CX.CIBI.SB5.C1.LB | Closing 1 Loan Balance | DECIMAL_2 | 0 | diff([CX.CIBI.LANDCOST],min([CX.CIBI.DOWN.PAYMENT],[CX.CIBI.LANDCOST])) |
| CX.CIBI.SB5.C2.FA | SB5 Closing 2 - Funds available | DECIMAL_2 | 0 | diff([CX.CIBI.NW5.LFA],[CX.CIBI.SB5.C1.LB]) |
| CX.CIBI.SB5.C2.LB | SB5 Closing 2 Loan Balance | DECIMAL_2 | 0 | sumany([CX.CIBI.SB5.C1.LB],diff([CX.CIBI.DED.CONST.FUNDS],max(min(diff([CX.CIBI.DOWN.PAYMENT],MIN([C |
| CX.CIBI.SB5.DA.1ST | CIBI.SB5.DA.1ST | DECIMAL_2 | 0 | Mult([CX.CIBI.SB5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.1,.1)) |
| CX.CIBI.SB5.DA.2ND | CIBI.SB5.DA.2ND | DECIMAL_2 | 0 | MULT([CX.CIBI.SB5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.1)) |
| CX.CIBI.SB5.DA.3RD | SB5 Stage 3 Draw Amount | DECIMAL_2 | 0 | MULT([CX.CIBI.SB5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.28)) |
| CX.CIBI.SB5.DA.4TH | SB5 Draw Amt Stage 4 | DECIMAL_2 | 0 | MULT([CX.CIBI.SB5.FA.STG1],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.25)) |
| CX.CIBI.SB5.DA.5TH | SB5 Draw Amount Stage 5 | DECIMAL_2 | 0 | [CX.CIBI.SB5.FA.5TH] |
| CX.CIBI.SB5.FA.2ND | CIBI.SB5.FA.2ND | DECIMAL_2 | 0 | Diff([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.TPO.1ST]) |
| CX.CIBI.SB5.FA.3RD | CIBI.SB5.FA.3RD | DECIMAL_2 | 0 | DIFF([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.TPO.2ND]) |
| CX.CIBI.SB5.FA.4TH | SB5 Funds Available Stage 4 | DECIMAL_2 | 0 | DIFF([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.TPO.3RD]) |
| CX.CIBI.SB5.FA.5TH | SB5 Funds Available Stage 5 | DECIMAL_2 | 0 | DIFF([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.TPO.4TH]) |
| CX.CIBI.SB5.FA.RESERVE | SB5 Funds Available Reserve | DECIMAL_2 | 0 | DIFF([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.TPO.5TH]) |
| CX.CIBI.SB5.FA.STG1 | CIBI.SB5.FA.STG1 | DECIMAL_2 | 0 | Diff([CX.CIBI.SB5.LFA],[CX.CIBI.SB5.C2.LB]) |
| CX.CIBI.SB5.LFA | SB5 Loan Funds Available | DECIMAL_2 | 0 | diff(min([1109],[CX.CIBI.CONST.FUNDS]),[CX.CIBI.SB7.RESERVE]) |
| CX.CIBI.SB5.TPO.1ST | CIBI.SB5.TPO.1ST | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.SB5.C2.LB]+[CX.CIBI.SB5.DA.1ST]),MIN([CX.CIBI.SB5.UD.1ST],[CX.CIBI.SB5.DA.1ST]) |
| CX.CIBI.SB5.TPO.2ND | CIBI.SB5.TPO.2ND | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.SB5.TPO.1ST]+[CX.CIBI.SB5.DA.2ND]),MIN([CX.CIBI.SB5.UD.2ND],[CX.CIBI.SB5.DA.2ND |
| CX.CIBI.SB5.TPO.3RD | SB5 Stage 3 Total PaidOut  | DECIMAL_2 | 0 | diff(Sumany([CX.CIBI.SB5.TPO.2ND]+[CX.CIBI.SB5.DA.3RD]),MIN([CX.CIBI.SB5.UD.3RD],[CX.CIBI.SB5.DA.3RD |
| CX.CIBI.SB5.TPO.4TH | SB5 Total PaidOut Stage 4 | DECIMAL_2 | 0 | diff(SumAny([CX.CIBI.SB5.TPO.3RD],[CX.CIBI.SB5.DA.4TH]),MIN([CX.CIBI.SB5.UD.4TH],[CX.CIBI.SB5.DA.4TH |
| CX.CIBI.SB5.TPO.5TH | SB5 Total PaidOut Stage 5 | DECIMAL_2 | 0 | diff(SumAny([CX.CIBI.SB5.TPO.4TH],[CX.CIBI.SB5.DA.5TH]),MIN([CX.CIBI.SB5.UD.5TH],[CX.CIBI.SB5.DA.5TH |
| CX.CIBI.SB5.TPO.RESERVE | SB5 Total Paidout  | DECIMAL_2 | 0 | diff(SumAny([CX.CIBI.SB5.TPO.5TH],[CX.CIBI.SB7.RESERVE]),MIN([CX.CIBI.SB5.UD.RESERVE],[CX.CIBI.SB7.R |
| CX.CIBI.SB7.CONST.FUNDS.AVLB | Constructions funds available SB7 | DECIMAL_2 | 0 | DIFF(DIFF(DIFF([CX.CIBI.TOTALCOST],[CX.CIBI.LANDCOST]),xdec([CX.CIBI.REALTORCOMM])),[CX.CIBI.SB7.RES |
| CX.CIBI.SB7.DA.1ST | Draw Amount stage 1 (SB7) | DECIMAL_2 | 0 | Mult([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.1,.1)) |
| CX.CIBI.SB7.DA.2ND | Draw Amount Stage 2 (SB7) | DECIMAL_2 | 0 | MULT([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.1)) |
| CX.CIBI.SB7.DA.3RD | Draw Amount Stage 3 (SB7) | DECIMAL_2 | 0 | MULT([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.16)) |
| CX.CIBI.SB7.DA.4TH | Draw Amount Stage 4 (SB7) | DECIMAL_2 | 0 | MULT([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.13)) |
| CX.CIBI.SB7.DA.5TH | Draw Amount Stage 5 (SB7) | DECIMAL_2 | 0 | MULT([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.25)) |
| CX.CIBI.SB7.DA.6TH | Draw Amount Stage 6 (SB7) | DECIMAL_2 | 0 | MULT([CX.CIBI.SB7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.11,.11)) |
| CX.CIBI.SB7.DA.7TH | Draw Amount Stage 7 (SB7) | DECIMAL_2 | 0 | [CX.CIBI.SB7.FA.7TH] |
| CX.CIBI.SB7.FA.2ND | Funds Available Stage 2 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.1ST]) |
| CX.CIBI.SB7.FA.3RD | Funds Available Stage 3 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.2ND]) |
| CX.CIBI.SB7.FA.4TH | Funds Available Stage 4 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.3RD]) |
| CX.CIBI.SB7.FA.5TH | Funds Available Stage 5 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.4TH]) |
| CX.CIBI.SB7.FA.6TH | Funds Available Stage 6 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.5TH]) |
| CX.CIBI.SB7.FA.7TH | Funds Available Stage 7 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.6TH]) |
| CX.CIBI.SB7.FA.CLOSING | Funds Available Closing (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.CONST.FUNDS.AVLB],xdec([CX.CIBI.LANDCOST]),[CX.CIBI.REALTORCOMM]) |
| CX.CIBI.SB7.FA.RESERVE | Funds available - reserve | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.TPO.7TH]) |
| CX.CIBI.SB7.FA.STG1 | Funds Available Stage 1 (SB7) | DECIMAL_2 | 0 | Diff([CX.CIBI.SB7.FA.CLOSING],[CX.CIBI.SB7.REALTORCOMM.TPO]) |
| CX.CIBI.SB7.REALTORCOMM.FA | Realtor Comm Funds available | DECIMAL_2 | 0 | diff([CX.CIBI.SB7.FA.CLOSING],xdec([CX.CIBI.LANDCOST])) |
| CX.CIBI.SB7.REALTORCOMM.TPO | Realtor Comm Total Paid out | DECIMAL_2 | 0 | sumany([CX.CIBI.REALTORCOMM],xdec([CX.CIBI.LANDCOST])) |
| CX.CIBI.SB7.RESERVE | Reserve for SB7 | DECIMAL_2 | 0 | iif(left([CX.CIBI.LANDOWNER],5)="Build",MULT([CX.CIBI.TOTALCOST],.05),MULT([CX.CTP.3A.VALUE],.05)) |
| CX.CIBI.SB7.RESERVE.TPO | Reserve Total Paid out | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.7TH],[CX.CIBI.SB7.RESERVE]) |
| CX.CIBI.SB7.TEXT.1ST | SB7 Stage 1 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.2ND | SB7 Stage 2 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.3RD | SB7 Stage 3 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.4TH | SB7 Stage 4 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.5TH | SB& Stage 5 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.6TH | SB7 Stage 6 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TEXT.7TH | SB7 Stage 7 Text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.SB7.TPO.1ST | Total PaidOut Stage 1 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.REALTORCOMM.TPO],[CX.CIBI.SB7.DA.1ST]) |
| CX.CIBI.SB7.TPO.2ND | Total PaidOut Stage 2 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.1ST],[CX.CIBI.SB7.DA.2ND]) |
| CX.CIBI.SB7.TPO.3RD | Total PaidOut Stage 3 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.2ND],[CX.CIBI.SB7.DA.3RD]) |
| CX.CIBI.SB7.TPO.4TH | Total Paid Out Stage 4 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.3RD],[CX.CIBI.SB7.DA.4TH]) |
| CX.CIBI.SB7.TPO.5TH | Total PaidOut Stage 5 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.4TH],[CX.CIBI.SB7.DA.5TH]) |
| CX.CIBI.SB7.TPO.6TH | Total PaidOut Stage 6 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.5TH],[CX.CIBI.SB7.DA.6TH]) |
| CX.CIBI.SB7.TPO.7TH | Total PaidOut Stage 7 (SB7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.SB7.TPO.6TH],[CX.CIBI.SB7.DA.7TH]) |
| CX.CIBI.TOTALCOST | Total Cost for Draw Schedule | DECIMAL_2 | 0 | IIF([CX.CTP.1A.LANDOWNRSHP]="Purchasing At Closing",SUMANY([CX.CTP.3A.VALUE],[CX.CTP.1D.VALUE]),iif( |
| CX.CIBI.TX5.DA.3RD | TX5 Draw Amount stage 3 | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.28)) |
| CX.CIBI.TX5.DA.4TH | TX5 Draw Amount Stage 4 | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.25)) |
| CX.CIBI.TX5.DA.5TH | TX5 Draw Amt Stage 5 | DECIMAL_2 | 0 | [CX.CIBI.TX5.FA.5TH] |
| CX.CIBI.TX5.FA.4TH | TX5 Funds Available Stage 4 | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.3RD],[CX.CIBI.TX5.DA.3RD]) |
| CX.CIBI.TX5.FA.5TH | TX5 Funds Available Stage 5 | DECIMAL_2 | 0 | Diff([CX.CIBI.TX5.FA.4TH],[CX.CIBI.TX5.DA.4TH]) |
| CX.CIBI.TX5.FA.RET | TX5 FA Ret | DECIMAL_2 | 0 | Diff([CX.CIBI.TX5.FA.5TH],[CX.CIBI.TX5.DA.5TH]) |
| CX.CIBI.TX5.TPO.3RD | TX5 Stage 3 Total Paid Out | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.2ND],[CX.CIBI.TX5.DA.3RD]) |
| CX.CIBI.TX5.TPO.4TH | TX5 Total Paid Out Stage 4 | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX5.TPO.3RD],[CX.CIBI.TX5.DA.4TH]) |
| CX.CIBI.TX5.TPO.5TH | TX5 TPO Stage 5 | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX5.TPO.4TH],[CX.CIBI.TX5.DA.5TH]) |
| CX.CIBI.TX5.TPO.RET | TX5 TPO RET | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX5.TPO.5TH],[CX.CIBI.TX7.RETAINAGE]) |
| CX.CIBI.TX7.CONST.FUNDS.AVLB | Construction Funds available for Disbursement (TX7) | DECIMAL_2 | 0 | diff(diff([CX.CIBI.TOTALCOST],[CX.CIBI.TX7.RETAINAGE]),xInt([CX.CIBI.LANDCOST])) |
| CX.CIBI.TX7.DA.1ST | Draw amount stage 1 (TX7) | DECIMAL_2 | 0 | Mult([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.1,.1)) |
| CX.CIBI.TX7.DA.2ND | Draw Amount Stage 2 (TX7) | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.1)) |
| CX.CIBI.TX7.DA.3RD | Draw Amount Stage 3 | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.16)) |
| CX.CIBI.TX7.DA.4TH | Draw Amount Stage 4 (TX7) | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.13)) |
| CX.CIBI.TX7.DA.5TH | Draw Amount Stage 5 (TX7) | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.25,.25)) |
| CX.CIBI.TX7.DA.6TH | Draw Amount Stage 6 | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.13)) |
| CX.CIBI.TX7.DA.7TH | Draw Amount Stage 7 (TX7) | DECIMAL_2 | 0 | MULT([CX.CIBI.TX7.CONST.FUNDS.AVLB],iif([CX.CIBI.FOUNDATION.TYPE]="Slab",.13,.13)) |
| CX.CIBI.TX7.FA.2ND | Funds Available Stage 2 (TX7) | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.STG1],[CX.CIBI.TX7.DA.1ST]) |
| CX.CIBI.TX7.FA.3RD | Funds Available Stage 3 (TX7) | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.2ND],[CX.CIBI.TX7.DA.2ND]) |
| CX.CIBI.TX7.FA.4TH | Funds available Stage 4 (TX7) | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.3RD],[CX.CIBI.TX7.DA.3RD]) |
| CX.CIBI.TX7.FA.5TH | Funds Available Stage 5 (TX7) | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.4TH],[CX.CIBI.TX7.DA.4TH]) |
| CX.CIBI.TX7.FA.6TH | Funds Available Stage 6 | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.5TH],[CX.CIBI.TX7.DA.5TH]) |
| CX.CIBI.TX7.FA.7TH | Funds Available Stage 7 (TX7) | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.6TH],[CX.CIBI.TX7.DA.6TH]) |
| CX.CIBI.TX7.FA.CLOSING | Funds available - closing | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.CONST.FUNDS.AVLB],[CX.CIBI.LANDCOST]) |
| CX.CIBI.TX7.FA.STG1 | TX7 Stage 1 Funds Available | DECIMAL_2 | 0 | Diff([CX.CIBI.TX7.FA.CLOSING],Xint([CX.CIBI.LANDCOST])) |
| CX.CIBI.TX7.RETAINAGE | Retainage for TX 7 Draw | DECIMAL_2 | 0 | iif(left([CX.CIBI.LANDOWNER],5)="Build",MULT([CX.CIBI.TOTALCOST],.1),MULT([CX.CTP.3A.VALUE],.1)) |
| CX.CIBI.TX7.TEXT.1ST | Stage 1 Text (TX7) | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.2ND | TX7 Stage 2 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.3RD | TX7 Stage 3 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.4TH | TX7 Stage 4 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.5TH | TX7 Stage 5 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.6TH | TX7 Stage 6 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TEXT.7TH | TX7 Stage 7 text | STRING | 255 | iif([CX.CIBI.FOUNDATION.TYPE]="","N/A","*Weststar will disburse "&iif([CX.CIBI.FOUNDATION.TYPE]="Sla |
| CX.CIBI.TX7.TPO.1ST | Total Payout 1st Stage (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.LANDCOST],[CX.CIBI.TX7.DA.1ST]) |
| CX.CIBI.TX7.TPO.2ND | Total Payout Stage 2 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.1ST],[CX.CIBI.TX7.DA.2ND]) |
| CX.CIBI.TX7.TPO.3RD | Total Payout Stage 3 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.2ND],[CX.CIBI.TX7.DA.3RD]) |
| CX.CIBI.TX7.TPO.4TH | Total Paidout Stage 4 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.3RD],[CX.CIBI.TX7.DA.4TH]) |
| CX.CIBI.TX7.TPO.5TH | Total Paidout Stage 5 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.4TH],[CX.CIBI.TX7.DA.5TH]) |
| CX.CIBI.TX7.TPO.6TH | Total Paid Out Stage 6 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.5TH],[CX.CIBI.TX7.DA.6TH]) |
| CX.CIBI.TX7.TPO.7TH | Total Paid Out Stage 7 (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.TPO.6TH],[CX.CIBI.TX7.DA.7TH]) |
| CX.CIBI.TX7.TPO.RETAINAGE | Total Paid Out Retainage (TX7) | DECIMAL_2 | 0 | SumAny([CX.CIBI.TX7.RETAINAGE],[CX.CIBI.TX7.DA.7TH]) |
| CX.CIC.1 | Change Circumstance 1 | STRING | 1000 |  |
| CX.CIC.10 | Change Circumstance 10 | STRING | 1000 |  |
| CX.CIC.2 | Change Circumstance 2 | STRING | 1000 |  |
| CX.CIC.3 | Change Circumstance 3 | STRING | 1000 |  |
| CX.CIC.4 | Change Circumstance 4 | STRING | 1000 |  |
| CX.CIC.5 | Change Circumstance 5 | STRING | 1000 |  |
| CX.CIC.6 | Change Circumstance 6 | STRING | 1000 |  |
| CX.CIC.7 | Change Circumstance 7 | STRING | 1000 |  |
| CX.CIC.8 | Change Circumstance 8 | STRING | 1000 |  |
| CX.CIC.9 | Change Circumstance 9 | STRING | 1000 |  |
| CX.CIC.CHANGE.DESCT | CIC Change Description | STRING | 1000 |  |
| CX.CIC.DT.DISCOVERY | Date of Discovery | DATE | 0 |  |
| CX.CIC.DT.SUBMISSION | Date of Submission of CIC | DATE | 0 |  |
| CX.CIC.SEC.COMPTD.BY.1 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.10 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.2 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.3 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.4 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.5 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.6 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.7 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.8 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.BY.9 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.1 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.10 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.2 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.3 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.4 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.5 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.6 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.7 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.8 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.COMMENT.9 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.1 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.10 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.2 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.3 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.4 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.5 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.6 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.7 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.8 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC.SEC.COMPTD.WHEN.9 | Secondary Completed  | STRING | 5000 |  |
| CX.CIC1 | Fee Description | STRING | 150 |  |
| CX.CIC1.COMMENTS | cic1 comments | STRING | 100 |  |
| CX.CIC1.COMPLETED | cic completed | X | 0 |  |
| CX.CIC1.COMPLETED.BY | completed by | STRING | 20 |  |
| CX.CIC1.COMPLETED.COMMENTS | cic1 completed comments | STRING | 150 |  |
| CX.CIC1.COMPLETED.DATE | cic 1 secondary audit date | DATE | 0 |  |
| CX.CIC1.DATE | Change Circumstance 1 Date | DATE | 0 |  |
| CX.CIC1.REQUESTED.BY | cic1 requested by | STRING | 25 |  |
| CX.CIC10 | Fee Description 4 | STRING | 150 |  |
| CX.CIC10.COMMENTS | cic 10 request comments | STRING | 2000 |  |
| CX.CIC10.COMPLETED | cic 10 completed | X | 0 |  |
| CX.CIC10.COMPLETED.BY | cic 10 completed by | STRING | 50 |  |
| CX.CIC10.COMPLETED.COMMENTS | cic 10 completed comments | STRING | 2000 |  |
| CX.CIC10.COMPLETED.DATE | cic 10 completed date | DATE | 0 |  |
| CX.CIC10.DATE | Change Circumstance 10 Date | DATE | 0 |  |
| CX.CIC10.REQUESTED.BY | cic 10 requested by  | STRING | 50 |  |
| CX.CIC11 | Previous Fee 4 | DECIMAL_2 | 0 |  |
| CX.CIC12 | New Fee 4 | DECIMAL_2 | 0 |  |
| CX.CIC13 | Fee Description 5 | STRING | 150 |  |
| CX.CIC14 | Previous Fee 5 | DECIMAL_2 | 0 |  |
| CX.CIC15 | New Fee 5 | DECIMAL_2 | 0 |  |
| CX.CIC16 | Fee Description 6 | STRING | 150 |  |
| CX.CIC17 | Previous Fee 6 | DECIMAL_2 | 0 |  |
| CX.CIC18 | New Fee 6 | DECIMAL_2 | 0 |  |
| CX.CIC2 | Previous Fee  | DECIMAL_2 | 0 |  |
| CX.CIC2.COMMENTS | cic2 comments | STRING | 100 |  |
| CX.CIC2.COMPLETED | cic2 completed | X | 0 |  |
| CX.CIC2.COMPLETED.BY | completed by 2 | STRING | 20 |  |
| CX.CIC2.COMPLETED.COMMENTS | cic2 completed comments | STRING | 150 |  |
| CX.CIC2.COMPLETED.DATE | cic 2 secondary date | DATE | 0 |  |
| CX.CIC2.DATE | Change Circumstance 2 Date | DATE | 0 |  |
| CX.CIC2.REQUESTED.BY | cic2 requested by | STRING | 25 |  |
| CX.CIC200 | CIC Loan Amount Checkbox | X | 0 |  |
| CX.CIC210 | CIC Interest Rate Check box | X | 0 |  |
| CX.CIC230 | CIC Interest Rate Locked Checkbox | X | 0 |  |
| CX.CIC240 | CIC Interest Rate Extended Checkbox | X | 0 |  |
| CX.CIC250 | CIC Fee Addition Checkbox | X | 0 |  |
| CX.CIC260 | CIC LTV Changed Checkbox | X | 0 |  |
| CX.CIC270 | CIC New Loan Amount | DECIMAL_2 | 0 |  |
| CX.CIC280 | CIC New Interest Rate | DECIMAL_3 | 0 |  |
| CX.CIC290 | LTV Change Explanation | STRING | 1000 |  |
| CX.CIC3 | New Fee  | DECIMAL_2 | 0 |  |
| CX.CIC3.COMMENTS | cic 3 comments | STRING | 100 |  |
| CX.CIC3.COMPLETED | cic3 completed | X | 0 |  |
| CX.CIC3.COMPLETED.BY | cic3 completed by | STRING | 20 |  |
| CX.CIC3.COMPLETED.COMMENTS | cic3 completed comments | STRING | 150 |  |
| CX.CIC3.COMPLETED.DATE | cic3 completed date | DATE | 0 |  |
| CX.CIC3.DATE | Change Circumstance 3 Date  | DATE | 0 |  |
| CX.CIC3.REQUESTED.BY | cic3 requested by | STRING | 25 |  |
| CX.CIC300 | CIC Notes to Processing | STRING | 1000 |  |
| CX.CIC310 | CIC Delivery Method | DROPDOWNLIST | 0 |  |
| CX.CIC350 | CIC Program Change Checkbox | X | 0 |  |
| CX.CIC360 | CIC Program Change Notes | STRING | 1000 |  |
| CX.CIC4 | Fee Description 2 | STRING | 150 |  |
| CX.CIC4.COMMENTS | cic4 comments | STRING | 100 |  |
| CX.CIC4.COMPLETED | cic4 completed | X | 0 |  |
| CX.CIC4.COMPLETED.BY | cic4 completed by | STRING | 20 |  |
| CX.CIC4.COMPLETED.COMMENTS | cic4 completed comments | STRING | 100 |  |
| CX.CIC4.COMPLETED.DATE | cic4 completed date | DATE | 0 |  |
| CX.CIC4.DATE | Change Circumstance 4 Date | DATE | 0 |  |
| CX.CIC4.REQUESTED.BY | cic4 requested by | STRING | 20 |  |
| CX.CIC5 | Previous Fee 2 | DECIMAL_2 | 0 |  |
| CX.CIC5.COMMENTS | cic 5 comments | STRING | 2000 |  |
| CX.CIC5.COMPLETED | cic 5 completed check box | X | 0 |  |
| CX.CIC5.COMPLETED.BY | cic 5 completed by | STRING | 150 |  |
| CX.CIC5.COMPLETED.COMMENTS | cic 5 completed comments | STRING | 2000 |  |
| CX.CIC5.COMPLETED.DATE | cic 5 completed date | DATE | 0 |  |
| CX.CIC5.DATE | Change Circumstance 5 Date | DATE | 0 |  |
| CX.CIC5.REQUESTED.BY | cic 5 requested by | STRING | 150 |  |
| CX.CIC6 | New Fee 2 | DECIMAL_2 | 0 |  |
| CX.CIC6.COMMENTS | cic 6 request comments | STRING | 2000 |  |
| CX.CIC6.COMPLETED | cic 6 completed check box | X | 0 |  |
| CX.CIC6.COMPLETED.BY | cic 6 completed by | STRING | 25 |  |
| CX.CIC6.COMPLETED.COMMENTS | cic 6 completed comments | STRING | 2000 |  |
| CX.CIC6.COMPLETED.DATE | cic 6 completed date | DATE | 0 |  |
| CX.CIC6.DATE | Change Circumstance 6 Date | DATE | 0 |  |
| CX.CIC6.REQUESTED.BY | cic 6 requested by | STRING | 100 |  |
| CX.CIC7 | Fee Description 3 | STRING | 150 |  |
| CX.CIC7.COMMENTS | cic 7 comments | STRING | 2000 |  |
| CX.CIC7.COMPLETED | cic 7 completed | X | 0 |  |
| CX.CIC7.COMPLETED.BY | cic 7 completed by | STRING | 100 |  |
| CX.CIC7.COMPLETED.COMMENTS | cic 7 completed comments | STRING | 2000 |  |
| CX.CIC7.COMPLETED.DATE | cic 7 completed date | DATE | 0 |  |
| CX.CIC7.DATE | Change Circumstance 7 Date | DATE | 0 |  |
| CX.CIC7.REQUESTED.BY | cic7 requested by | STRING | 25 |  |
| CX.CIC8 | Previous Fee 3 | DECIMAL_2 | 0 |  |
| CX.CIC8.COMMENTS | cic 8 requested comments | STRING | 2000 |  |
| CX.CIC8.COMPLETED | cic 8 completed | X | 0 |  |
| CX.CIC8.COMPLETED.BY | cic 8 completed by | STRING | 100 |  |
| CX.CIC8.COMPLETED.COMMENTS | cic 8 completed comments | STRING | 2000 |  |
| CX.CIC8.COMPLETED.DATE | cic 8 completed date | DATE | 0 |  |
| CX.CIC8.DATE | Change Circumstance 8 Date | DATE | 0 |  |
| CX.CIC8.REQUESTED.BY | cic 8 requested by | STRING | 100 |  |
| CX.CIC9 | New Fee 3 | DECIMAL_2 | 0 |  |
| CX.CIC9.COMMENTS | cic 9 comments | STRING | 2000 |  |
| CX.CIC9.COMPLETED | cic 9 completed | X | 0 |  |
| CX.CIC9.COMPLETED.BY | cic 9 completed by | STRING | 50 |  |
| CX.CIC9.COMPLETED.COMMENTS | cic 9 completed comments | STRING | 2000 |  |
| CX.CIC9.COMPLETED.DATE | cic 9 completed date | DATE | 0 |  |
| CX.CIC9.DATE | Change Circumstance 9 Date | DATE | 0 |  |
| CX.CIC9.REQUESTED.BY | cic 9 requested by | STRING | 50 |  |
| CX.CIF.BO.ID | CIF BORROWER ID | STRING | 20 |  |
| CX.CIF.BO2.ID | CIF BORROWER 2 ID | STRING | 20 |  |
| CX.CIF.BO2W | CIF BORROWER 2 W8 | STRING | 11 | [65#2] |
| CX.CIF.BO3.ID | CIF BORROWER 3 ID | STRING | 20 |  |
| CX.CIF.BO3W | CIF BORROWER 3 W8 | STRING | 11 | [65#3] |
| CX.CIF.BO4.ID | CIF BORROWER 4 ID | STRING | 20 |  |
| CX.CIF.BO4W | CIF BORROWER 4 W8 | STRING | 11 | [65#4] |
| CX.CIF.BORR.NO | CIF BORROWER 1 NUMBER | STRING | 15 |  |
| CX.CIF.BORR.RISK | CIF BORROWER RISK | STRING | 20 | [FE0179#1] |
| CX.CIF.BORR.SX | CIF BORROWER SEX | STRING | 8 | [471#1] |
| CX.CIF.BORR2.COUNT | CIF BORROWER 2 COUNTRY | STRING | 20 |  |
| CX.CIF.BORR2.NO | CIF BORROWER 2 NUMBER | STRING | 15 |  |
| CX.CIF.BORR2.RISK | CIF BORROWER 2 RISK | STRING | 20 | [FE0179#2] |
| CX.CIF.BORR2.SX | CIF BORROWER 2 SEX | STRING | 8 | [471#2] |
| CX.CIF.BORR2NAME | CIF BORROWER 2 NAME | STRING | 40 | [36#2]  & " " &  [37#2] |
| CX.CIF.BORR3.COUNT | CIF BORROWER 3 COUNTRY | STRING | 20 |  |
| CX.CIF.BORR3.NO | CIF BORROWER 3 NUMBER | STRING | 15 |  |
| CX.CIF.BORR3.RISK | CIF BORROWER 3 RISK | STRING | 20 | [FE0179#3] |
| CX.CIF.BORR3.SX | CIF BORROWER 3 SEX | STRING | 8 | [471#3] |
| CX.CIF.BORR3NAME | CIF BORROWER 3 NAME | STRING | 40 | [36#3]  & " " &  [37#3] |
| CX.CIF.BORR4.COUNT | CIF BORROWER 4 COUNTRY | STRING | 20 |  |
| CX.CIF.BORR4.NO | CIF BORROWER 4 NUMBER | STRING | 15 |  |
| CX.CIF.BORR4.RISK | CIF BORROWER 4 RISK | STRING | 20 | [FE0179#4] |
| CX.CIF.BORR4.SX | CIF BORROWER 4 SEX | STRING | 8 | [471#4] |
| CX.CIF.BORR4NAME | CIF BORROWER 4 NAME | STRING | 40 | [36#4]  & " " &  [37#4] |
| CX.CIF.BORRNAME | CIF BORROWER NAME | STRING | 40 | [36#1]  & " " &  [37#1] |
| CX.CIF.BOW | CIF BORROWER 1 W8 | STRING | 11 | [65#1] |
| CX.CIF.CBO3W | CIF COBORROWER 3 W8 | STRING | 11 | [97#3] |
| CX.CIF.CBO4W | CIF COBORROWER 4 W8 | STRING | 11 | [97#4] |
| CX.CIF.COBO.ID | CIF COBORR ID | STRING | 20 |  |
| CX.CIF.COBO.RISK | CIF COBORR RISK | STRING | 20 | [FE0279#1] |
| CX.CIF.COBO.SX | CIF COBORROWER SEX | STRING | 8 | [478#1] |
| CX.CIF.COBO2.COUNT | CIF COBORR 2 COUNTRY | STRING | 20 |  |
| CX.CIF.COBO2.ID | CIF COBORR 2 ID | STRING | 20 |  |
| CX.CIF.COBO2.RISK | CIF COBORR 2 RISK | STRING | 20 | [FE0279#2] |
| CX.CIF.COBO2.SX | CIF COBORROWER 2 SEX | STRING | 8 | [478#2] |
| CX.CIF.COBO2W | CIF CO BORROWER 2 W8 | STRING | 11 | [97#2] |
| CX.CIF.COBO3.ID | CIF COBORR 3 ID | STRING | 20 |  |
| CX.CIF.COBO3.RISK | CIF COBORR 3 RISK | STRING | 20 | [FE0279#3] |
| CX.CIF.COBO3.SX | CIF COBORROWER 3 SEX | STRING | 8 | [478#3] |
| CX.CIF.COBO4.COUNT | CIF COBORR 4 COUNTRY | STRING | 20 |  |
| CX.CIF.COBO4.ID | CIF COBORR 4 ID | STRING | 20 |  |
| CX.CIF.COBO4.RISK | CIF COBORR 4 RISK | STRING | 20 | [FE0279#4] |
| CX.CIF.COBO4.SX | CIF COBORROWER 4 SEX | STRING | 8 | [478#4] |
| CX.CIF.COBORR.NO | CIF COBORROWER 1 NUMBER | STRING | 15 |  |
| CX.CIF.COBORR2.NO | CIF COBORROWER 2 NUMBER | STRING | 15 |  |
| CX.CIF.COBORR2NAME | CO BORR 2 NAME | STRING | 40 | [68#2]  & " " &  [69#2] |
| CX.CIF.COBORR3.NO | CIF COBORROWER 3 NUMBER | STRING | 15 |  |
| CX.CIF.COBORR3NAME | CIF COBORR 3 NAME | STRING | 40 | [68#3]  & " " &  [69#3] |
| CX.CIF.COBORR4.NO | CIF COBORROWER 4 NUMBER | STRING | 15 |  |
| CX.CIF.COBORR4NAME | CIF COBORR 4 NAME | STRING | 40 | [68#4]  & " " &  [69#4] |
| CX.CIF.COBORRNAME | CIF COBORR NAME | STRING | 40 | [68]  & " " &  [69] |
| CX.CIF.COBOW | CIF COBORROWER 1 W8 | STRING | 11 | [97#1] |
| CX.CIF.CORP.CIFNO | CORP CIF NUMBER | STRING | 15 |  |
| CX.CIF.CORP.PHONE | CORP PHONENO | STRING | 15 |  |
| CX.CIF.CORP.TIN | CORP TIN CERT# | STRING | 15 |  |
| CX.CITY.ST.ZIP | City, ST Zip | STRING | 100 | [12] & ", " & [14] & "  " & [15] |
| CX.CIW.DATE.010 | Credit Inq Date 010 | DATE | 0 |  |
| CX.CIW.DATE.020 | Credit Inq Date 020 | DATE | 0 |  |
| CX.CIW.DATE.030 | Credit Inq Date 030 | DATE | 0 |  |
| CX.CIW.DATE.040 | Credit Inq Date 040 | DATE | 0 |  |
| CX.CIW.DATE.050 | Credit Inq Date 050 | DATE | 0 |  |
| CX.CIW.DATE.060 | Credit Inq Date 060 | DATE | 0 |  |
| CX.CIW.DATE.070 | Credit Inq Date 070 | DATE | 0 |  |
| CX.CIW.DATE.080 | Credit Inq Date 080 | DATE | 0 |  |
| CX.CIW.DATE.090 | Credit Inq Date 090 | DATE | 0 |  |
| CX.CIW.DATE.100 | Credit Inq Date 100 | DATE | 0 |  |
| CX.CIW.DATE.110 | Credit Inq Date 110 | DATE | 0 |  |
| CX.CIW.DATE.120 | Credit Inq Date 120 | DATE | 0 |  |
| CX.CIW.NAME.010 | Credit Inq Name 010 | STRING | 20 |  |
| CX.CIW.NAME.020 | Credit Inq Name 020 | STRING | 20 |  |
| CX.CIW.NAME.030 | Credit Inq Name 030 | STRING | 20 |  |
| CX.CIW.NAME.040 | Credit Inq Name 040 | STRING | 20 |  |
| CX.CIW.NAME.050 | Credit Inq Name 050 | STRING | 20 |  |
| CX.CIW.NAME.060 | Credit Inq Name 060 | STRING | 20 |  |
| CX.CIW.NAME.070 | Credit Inq Name 070 | STRING | 20 |  |
| CX.CIW.NAME.080 | Credit Inq Name 080 | STRING | 20 |  |
| CX.CIW.NAME.090 | Credit Inq Name 090 | STRING | 20 |  |
| CX.CIW.NAME.100 | Credit Inq Name 100 | STRING | 20 |  |
| CX.CIW.NAME.110 | Credit Inq Name 110 | STRING | 20 |  |
| CX.CIW.NAME.120 | Credit Inq Name 120 | STRING | 20 |  |
| CX.CIW.REASON.010 | Credit Inq Reason 010 | STRING | 200 |  |
| CX.CIW.REASON.020 | Credit Inq Reason 020 | STRING | 200 |  |
| CX.CIW.REASON.030 | Credit Inq Reason 030 | STRING | 200 |  |
| CX.CIW.REASON.040 | Credit Inq Reason 040 | STRING | 200 |  |
| CX.CIW.REASON.050 | Credit Inq Reason 050 | STRING | 200 |  |
| CX.CIW.REASON.060 | Credit Inq Reason 060 | STRING | 200 |  |
| CX.CIW.REASON.070 | Credit Inq Reason 070 | STRING | 200 |  |
| CX.CIW.REASON.080 | Credit Inq Reason 080 | STRING | 200 |  |
| CX.CIW.REASON.090 | Credit Inq Reason 090 | STRING | 200 |  |
| CX.CIW.REASON.100 | Credit Inq Reason 100 | STRING | 200 |  |
| CX.CIW.REASON.110 | Credit Inq Reason 110 | STRING | 200 |  |
| CX.CIW.REASON.120 | Credit Inq Reason 120 | STRING | 200 |  |
| CX.CIW.SENT.BY | Credit Inquiry Letter Sent By | STRING | 25 |  |
| CX.CIW.SENT.ON | Credit Enquiry Sent On | STRING | 20 |  |
| CX.CL.01 | Funding Worksheet - Overfunding 01 Description | STRING | 200 |  |
| CX.CL.01.AMT | Funding Worksheet - Overfunding 01 Amount | DECIMAL_2 | 0 |  |
| CX.CL.02 | Funding Worksheet - Overfunding 02 Description | STRING | 200 |  |
| CX.CL.02.AMT | Funding Worksheet - Overfunding.02 Amount | DECIMAL_2 | 0 |  |
| CX.CL.03 | Funding Worksheet - Overfunding 03 Description | STRING | 200 |  |
| CX.CL.03.AMT | Funding Worksheet - Overfunding 03 Amount | DECIMAL_2 | 0 |  |
| CX.CL.04 | Funding Worksheet - Overfunding 04 Description | STRING | 200 |  |
| CX.CL.04.AMT | Funding Worksheet - Overfunding 04 Amount | DECIMAL_2 | 0 |  |
| CX.CL.05 | Funding Worksheet - Overfunding 05 Description | STRING | 200 |  |
| CX.CL.05.AMT | Funding Worksheet - Overfunding 05 Amount | DECIMAL_2 | 0 |  |
| CX.CL.06 | Funding Worksheet - Overfunding 06 Description | STRING | 200 |  |
| CX.CL.06.AMT | Funding Worksheet - Overfunding 06 Amount | DECIMAL_2 | 0 |  |
| CX.CL.CLD.PA.NODAYS | # of days 1st Pmt to CLD Loan Purchase | DECIMAL | 0 | 0 |
| CX.CL.FUND.CHLST1 | Verification of required cash to close | DROPDOWNLIST | 0 |  |
| CX.CL.FUND.CHLST2 | Final HUD1/CD | DROPDOWNLIST | 0 |  |
| CX.CL.FUND.CHLST3 | CIF# has been obtained  | DROPDOWNLIST | 0 |  |
| CX.CL.FUND.CHLST4 | Mail-a-way Verification | DROPDOWNLIST | 0 |  |
| CX.CL.FUND.CHLST5 | US LLC - Final Company Resolution | DROPDOWNLIST | 0 |  |
| CX.CL.FUND.CHLST8 | Confirm ADDENDUM TO CONTRACT | DROPDOWNLIST | 0 |  |
| CX.CL.REQUEST.BY | Used to get the user id of the requester | STRING | 40 |  |
| CX.CLD.BANKABA | CLD Loan Seller Bank ABA | STRING | 25 |  |
| CX.CLD.DELEGATION | Service Level | DROPDOWNLIST | 0 |  |
| CX.CLD.ESCHZDPMTS | Amount of escrowed hazard ins pmts purchased | DECIMAL_2 | 0 | ([#cx.cld.pa.pmtspurch]*[#230]) |
| CX.CLD.EXEMPT.1 | Exemption One | DROPDOWNLIST | 0 |  |
| CX.CLD.EXEMPT.2 | Exemption Two | DROPDOWNLIST | 0 |  |
| CX.CLD.NOTICE.OF.ASSIGNMENT | CLD Notice of Assignment   | DATE | 0 |  |
| CX.CLD.PA.BANKACCT | CLD Loan Seller Bank Acct# | STRING | 25 |  |
| CX.CLD.PA.BANKNM | CLD Loan Seller's Bank Name | STRING | 35 |  |
| CX.CLD.PA.CLDAMIN | CLD Admin Fee | DECIMAL_2 | 0 |  |
| CX.CLD.PA.CONSTINT | Interim Construction Interest | DECIMAL_2 | 0 | ([CX.CLD.PA.CONSTRATE]/36500)*DateDiff("d",[@992],[@CX.CLD.PA.PDATE])*[CX.CIBI.SB5.TPO.1st] |
| CX.CLD.PA.CONSTRATE | Interim Construction Interest Rate | DECIMAL_3 | 0 | 0 |
| CX.CLD.PA.ESCBAL | CLD Loan Escrow Balance | DECIMAL_2 | 0 | sumany([#HUD23]+[#cx.cld.pa.esctxpmt]+[#cx.cld.eschzdpmts]+[#cx.cld.pa.othermopmt]) |
| CX.CLD.PA.ESCHLDBK | CLD Loan Escrow Holdback Amount | DECIMAL_2 | 0 |  |
| CX.CLD.PA.ESCTXPMT | Amount of monthly taxes purchased | DECIMAL_2 | 0 | 0 |
| CX.CLD.PA.FPDATE | CLD Loan 1st Pmt Date | DATE | 0 | [@682] |
| CX.CLD.PA.FPWMC | CLD Loan 1st Pmt to WMC Date | DATE | 0 |  |
| CX.CLD.PA.NODAYSWL | Number of days of rewarehouse advnce | DECIMAL | 0 | DateDiff("d",[@cx.cld.pa.upbankdt],[@cx.cld.pa.pdate]) |
| CX.CLD.PA.NOTES | Purchase Advice Notes | STRING | 2560 |  |
| CX.CLD.PA.NXTPMTDUE | Next Payment Due Date | DATE | 0 |  |
| CX.CLD.PA.OTHERMOPMT | Monthly pmts other than tax & ins | DECIMAL_2 | 0 | (([#l268]+[#235])*[#cx.cld.pa.pmtspurch]) |
| CX.CLD.PA.OTHERSELLERAMT | Other Seller Reduction Amount | DECIMAL_2 | 0 |  |
| CX.CLD.PA.OTHERSELLERLAB | Other Seller Reduction Label | STRING | 20 |  |
| CX.CLD.PA.PDATE | CLD Loan Purchase Date | DATE | 0 |  |
| CX.CLD.PA.PMTSPURCH | No of Payments being purchased | DECIMAL | 0 |  |
| CX.CLD.PA.PREM.PAID | Seller Receivable Paid Date | DATE | 0 |  |
| CX.CLD.PA.SELLERNET | CLD Loan Seller Net Amt | DECIMAL_2 | 0 | Diff([@CX.CLD.PA.SELLGR],(-[#CX.CLD.PA.SELLINT]+[#CX.CLD.PA.ESCBAL]+[#CX.CLD.PA.ESCHLDBK]+[#CX.CLD.P |
| CX.CLD.PA.SELLGR | CLD Loan Seller Gross Amount | DECIMAL_2 | 0 | sum(([#cx.cld.pa.upb]*[#2218])/100) |
| CX.CLD.PA.SELLINT | CLD Loan Interest Due Seller | DECIMAL_2 | 0 | ((([#cx.cld.pa.upb]*([#3]/100))/365)*[#cx.cl.cld.pa.nodays]) |
| CX.CLD.PA.UPB | CLD Loan Purchase Unpaid Balance | DECIMAL_2 | 0 |  |
| CX.CLD.PA.UPBANKDT | Re-Warehouse Advance Date | DATE | 0 |  |
| CX.CLD.PA.UPBANKER | Re-Warehouse Upstream Banker | STRING | 35 |  |
| CX.CLD.PA.WHINTAMT | Amount of int accrued by correspondent on re-warehouse line | DECIMAL_2 | 0 | ((([#cx.cld.readvance]*([#3]/100))/365)*[#cx.cld.pa.nodayswl]) |
| CX.CLD.PA.WHPO | CLD Loan Warehouse Payoff Amt | DECIMAL_2 | 0 |  |
| CX.CLD.PA.WIRECASH | CLD Loan Purchase (RW Cash) Amt | DECIMAL_2 | 0 |  |
| CX.CLD.PA.WIREDT | CLD Loan Purchase Wire Date | DATE | 0 |  |
| CX.CLD.PA.WIRELINE | CLD Loan Purchase (RW Line) Amt | DECIMAL_2 | 0 |  |
| CX.CLD.PRICING.NOTIFICATION | Pricing Field Hash | STRING | 1000 | [2]&[3]&[136]&[356]&[11]&[12]&[14]&[15]&[13]&[1041]&[16]&[1172]&[608]&[1811]&[19]&[VASUMM.X23]&[353] |
| CX.CLD.QC | Initial QC Name | STRING | 20 |  |
| CX.CLD.QC.203K.010 | Rehabilitation Loan Agreement | X | 0 |  |
| CX.CLD.QC.203K.020 | Rehabilitation Loan Rider | X | 0 |  |
| CX.CLD.QC.203K.030 | 203K Max Mortgage | X | 0 |  |
| CX.CLD.QC.203K.040 | 203K Borrower Acknowledgement | X | 0 |  |
| CX.CLD.QC.203K.050 | Homeowner/Contractor Agreement | X | 0 |  |
| CX.CLD.QC.203K.060 | Mortgagee Assurance of Completion | X | 0 |  |
| CX.CLD.QC.203K.070 | Contractor Bid | X | 0 |  |
| CX.CLD.QC.203K.080 | Draw Requests | X | 0 |  |
| CX.CLD.QC.203K.NOTES | 203K Notes | STRING | 256 |  |
| CX.CLD.QC.APPR.010 | Appraisal | X | 0 |  |
| CX.CLD.QC.APPR.020 | Sales Contract | X | 0 |  |
| CX.CLD.QC.APPR.030 | Conditional Commitment | X | 0 |  |
| CX.CLD.QC.APPR.040 | Engineer's Report | X | 0 |  |
| CX.CLD.QC.APPR.050 | Termite Report | X | 0 |  |
| CX.CLD.QC.APPR.060 | NOV | X | 0 |  |
| CX.CLD.QC.APPR.070 | Property Certifications | X | 0 |  |
| CX.CLD.QC.APPR.080 | Flood Zone Certification | X | 0 |  |
| CX.CLD.QC.APPR.090 | Condo Approval | X | 0 |  |
| CX.CLD.QC.APPR.100 | Final Repair Inspection | X | 0 |  |
| CX.CLD.QC.APPR.110 | UCDP | X | 0 |  |
| CX.CLD.QC.APPR.NOTES | Appraisal Notes | STRING | 256 |  |
| CX.CLD.QC.ASSET.010 | Asset Docs | X | 0 |  |
| CX.CLD.QC.ASSET.020 | Bank Statements | X | 0 |  |
| CX.CLD.QC.ASSET.030 | Gift Documentation | X | 0 |  |
| CX.CLD.QC.ASSET.NOTES | Asset Notes | STRING | 256 |  |
| CX.CLD.QC.CLS.010 | VA Quality Cert | X | 0 |  |
| CX.CLD.QC.CLS.020 | UFMIP Proof of Payment | X | 0 |  |
| CX.CLD.QC.CLS.030 | Cert of Loan Disbursement 2-1820 | X | 0 |  |
| CX.CLD.QC.CLS.040 | LQI Certification | X | 0 |  |
| CX.CLD.QC.CLS.050 | Buydown Agreement and Schedule | X | 0 |  |
| CX.CLD.QC.CLS.060 | Escrow Holdback | X | 0 |  |
| CX.CLD.QC.CLS.070 | Escrow Waiver | X | 0 |  |
| CX.CLD.QC.CLS.080 | First Payment Letter | X | 0 |  |
| CX.CLD.QC.CLS.090 | HUD-1 | X | 0 |  |
| CX.CLD.QC.CLS.100 | Mortgage/DOT | X | 0 |  |
| CX.CLD.QC.CLS.110 | Name Affidavit | X | 0 |  |
| CX.CLD.QC.CLS.120 | Note | X | 0 |  |
| CX.CLD.QC.CLS.130 | Notice of Assignment | X | 0 |  |
| CX.CLD.QC.CLS.140 | Final TIL | X | 0 |  |
| CX.CLD.QC.CLS.150 | Right of Recission | X | 0 |  |
| CX.CLD.QC.CLS.160 | IRRRL VA Comparison | X | 0 |  |
| CX.CLD.QC.CLS.170 | Notice to Homebuyer | X | 0 |  |
| CX.CLD.QC.CLS.180 | W9/W8 Request for TIN Cert | X | 0 |  |
| CX.CLD.QC.CLS.190 | Wiring Instructions | X | 0 |  |
| CX.CLD.QC.CLS.NOTES | Closing Document Notes | STRING | 256 |  |
| CX.CLD.QC.CREDITDOC.010 | Credit Report | X | 0 |  |
| CX.CLD.QC.CREDITDOC.020 | Required Score | INTEGER | 0 |  |
| CX.CLD.QC.CREDITDOC.030 | Miscellaneous Credit Docs | X | 0 |  |
| CX.CLD.QC.CREDITDOC.040 | Payoff Statement | X | 0 |  |
| CX.CLD.QC.CREDITDOC.050 | Pay History | X | 0 |  |
| CX.CLD.QC.CREDITDOC.060 | Bankruptcy Documentation | X | 0 |  |
| CX.CLD.QC.CREDITDOC.070 | Child Care Letter | X | 0 |  |
| CX.CLD.QC.CREDITDOC.080 | Divorce Documentation | X | 0 |  |
| CX.CLD.QC.CREDITDOC.NOTES | Credit Document Notes | STRING | 256 |  |
| CX.CLD.QC.EMPL.010 | Verification of Employment | X | 0 |  |
| CX.CLD.QC.EMPL.020 | 10 Day VOE | X | 0 |  |
| CX.CLD.QC.EMPL.030 | Income Documentation | X | 0 |  |
| CX.CLD.QC.EMPL.040 | Tax Transcript | X | 0 |  |
| CX.CLD.QC.EMPL.050 | Borrower LOX | X | 0 |  |
| CX.CLD.QC.EMPL.060 | SSN Validation | X | 0 |  |
| CX.CLD.QC.EMPL.070 | CAIVRS | X | 0 |  |
| CX.CLD.QC.EMPL.080 | Case File Assignment | X | 0 |  |
| CX.CLD.QC.EMPL.090 | Fraud Guard | X | 0 |  |
| CX.CLD.QC.EMPL.100 | MERS Assignment | X | 0 |  |
| CX.CLD.QC.EMPL.NOTES | Employment Notes | STRING | 256 |  |
| CX.CLD.QC.FHAIDISC.010 | Initial 92900A | X | 0 |  |
| CX.CLD.QC.FHAIDISC.020 | FHA Purchase Agreement Addendum | X | 0 |  |
| CX.CLD.QC.FHAIDISC.030 | FHA Informed Consumer Choice | X | 0 |  |
| CX.CLD.QC.FHAIDISC.040 | FHA Get A Home Inspection | X | 0 |  |
| CX.CLD.QC.FHAIDISC.050 | Assumption Notice to Homeowner | X | 0 |  |
| CX.CLD.QC.FHAIDISC.060 | Important Notice to Homebuyer | X | 0 |  |
| CX.CLD.QC.FHAIDISC.NOTES | FHA Disclosure Notes | STRING | 256 |  |
| CX.CLD.QC.FINALAPP.010 | Final 1003 | X | 0 |  |
| CX.CLD.QC.FINALAPP.020 | Final 92900A or 26-1802A | X | 0 |  |
| CX.CLD.QC.FINALAPP.NOTES | Final Application Notes | STRING | 256 |  |
| CX.CLD.QC.IDISC.010 | Application Date Validated | X | 0 |  |
| CX.CLD.QC.IDISC.020 | Compliance Date Notes | STRING | 256 |  |
| CX.CLD.QC.IDISC.030 | Intial 1003 | X | 0 |  |
| CX.CLD.QC.IDISC.040 | NMLS Verification | X | 0 |  |
| CX.CLD.QC.IDISC.050 | Property Type Validated | X | 0 |  |
| CX.CLD.QC.IDISC.060 | GFEs Validated | X | 0 |  |
| CX.CLD.QC.IDISC.070 | GFE Acknowledgement | X | 0 |  |
| CX.CLD.QC.IDISC.080 | CoC Validation | X | 0 |  |
| CX.CLD.QC.IDISC.090 | SSP Validation | X | 0 |  |
| CX.CLD.QC.IDISC.100 | Initial TIL Validation | X | 0 |  |
| CX.CLD.QC.IDISC.110 | Intent to Proceed Validation | X | 0 |  |
| CX.CLD.QC.IDISC.120 | 3 Day Validation | X | 0 |  |
| CX.CLD.QC.IDISC.130 | Borrower Cert and Auth | X | 0 |  |
| CX.CLD.QC.IDISC.140 | Notice to Home Owner | X | 0 |  |
| CX.CLD.QC.IDISC.150 | Fair Credit Reporting Act | X | 0 |  |
| CX.CLD.QC.IDISC.160 | Equal Credit Opportunity Act | X | 0 |  |
| CX.CLD.QC.IDISC.170 | Right to Financial Privacy | X | 0 |  |
| CX.CLD.QC.IDISC.180 | Information Disclosure Authorization | X | 0 |  |
| CX.CLD.QC.IDISC.190 | Servicing Disclosure | X | 0 |  |
| CX.CLD.QC.IDISC.200 | Appraisal Acknowledgement | X | 0 |  |
| CX.CLD.QC.IDISC.205 | LDP/GSA Party Type 1 | STRING | 20 |  |
| CX.CLD.QC.IDISC.206 | LDP/GSA Party Type 2 | STRING | 20 |  |
| CX.CLD.QC.IDISC.207 | LDP/GSA Party Type 3 | STRING | 20 |  |
| CX.CLD.QC.IDISC.208 | LDP/GSA Party Type 4 | STRING | 20 |  |
| CX.CLD.QC.IDISC.210 | Coborrower 2 Name | STRING | 20 |  |
| CX.CLD.QC.IDISC.220 | CoBorrower 3 Name | STRING | 20 |  |
| CX.CLD.QC.IDISC.225 | LDP/GSA Misc Party 1 | STRING | 20 |  |
| CX.CLD.QC.IDISC.226 | LDP/GSA Misc Party 2 | STRING | 20 |  |
| CX.CLD.QC.IDISC.227 | LDP/GSA Misc Party 3 | STRING | 20 |  |
| CX.CLD.QC.IDISC.228 | LDP/GSA Misc Party 4 | STRING | 20 |  |
| CX.CLD.QC.IDISC.230 | LDP Borrower | X | 0 |  |
| CX.CLD.QC.IDISC.240 | LDP Coborrower 1 | X | 0 |  |
| CX.CLD.QC.IDISC.250 | LDP Coborrower 2 | X | 0 |  |
| CX.CLD.QC.IDISC.260 | LDP Coborrower 3 | X | 0 |  |
| CX.CLD.QC.IDISC.270 | LDP Loan Officer | X | 0 |  |
| CX.CLD.QC.IDISC.280 | LDP Escrow Company | X | 0 |  |
| CX.CLD.QC.IDISC.290 | LDP Escrow Officer | X | 0 |  |
| CX.CLD.QC.IDISC.300 | LDP Buyer's Realty Company | X | 0 |  |
| CX.CLD.QC.IDISC.310 | LDP Buyer's Agent | X | 0 |  |
| CX.CLD.QC.IDISC.320 | LDP Seller's Realty Company | X | 0 |  |
| CX.CLD.QC.IDISC.330 | LDP Seller's Agent | X | 0 |  |
| CX.CLD.QC.IDISC.335 | LDP Misc Party 1 | X | 0 |  |
| CX.CLD.QC.IDISC.336 | LDP Misc Party 2 | X | 0 |  |
| CX.CLD.QC.IDISC.337 | LDP Misc Party 3 | X | 0 |  |
| CX.CLD.QC.IDISC.338 | LDP Misc Party 4 | X | 0 |  |
| CX.CLD.QC.IDISC.340 | GSA Borrower | X | 0 |  |
| CX.CLD.QC.IDISC.350 | GSA Coborrower 1 | X | 0 |  |
| CX.CLD.QC.IDISC.360 | GSA Coborrower 2 | X | 0 |  |
| CX.CLD.QC.IDISC.370 | GSA Coborrower 3 | X | 0 |  |
| CX.CLD.QC.IDISC.380 | GSA Loan Officer | X | 0 |  |
| CX.CLD.QC.IDISC.390 | GSA Escrow Company | X | 0 |  |
| CX.CLD.QC.IDISC.400 | GSA Escrow Officer | X | 0 |  |
| CX.CLD.QC.IDISC.410 | GSA Buyer's Realty Company | X | 0 |  |
| CX.CLD.QC.IDISC.420 | GSA Buyer's Agent | X | 0 |  |
| CX.CLD.QC.IDISC.430 | GSA Seller's Realty Company | X | 0 |  |
| CX.CLD.QC.IDISC.440 | GSA Seller's Agent | X | 0 |  |
| CX.CLD.QC.IDISC.445 | GSA Misc Party 1 | X | 0 |  |
| CX.CLD.QC.IDISC.446 | GSA Misc Party 2 | X | 0 |  |
| CX.CLD.QC.IDISC.447 | GSA Misc Party 3 | X | 0 |  |
| CX.CLD.QC.IDISC.448 | GSA Misc Party 4 | X | 0 |  |
| CX.CLD.QC.IDISC.450 | Initial 4506T | X | 0 |  |
| CX.CLD.QC.IDISC.460 | ARM Disclosures | X | 0 |  |
| CX.CLD.QC.IDISC.470 | Interest Rate Lock/Float Agreement | X | 0 |  |
| CX.CLD.QC.IDISC.480 | Advance Fee Agreement | X | 0 |  |
| CX.CLD.QC.IDISC.490 | NM Net Tangible Benefit Form | X | 0 |  |
| CX.CLD.QC.IDISC.500 | HPML Certification | X | 0 |  |
| CX.CLD.QC.IDISC.510 | FACT Act Notice | X | 0 |  |
| CX.CLD.QC.IDISC.520 | Anti-Steering Disclosure | X | 0 |  |
| CX.CLD.QC.IDISC.NOTES | Initial Disclosure Notes | STRING | 256 |  |
| CX.CLD.QC.INS.010 | PMI Cert | X | 0 |  |
| CX.CLD.QC.INS.020 | Flood Insurance | X | 0 |  |
| CX.CLD.QC.INS.030 | Hazard Insurance | X | 0 |  |
| CX.CLD.QC.INS.NOTES | Insurance Notes | STRING | 256 |  |
| CX.CLD.QC.NAME | Initial QC Name | STRING | 20 |  |
| CX.CLD.QC.OTC.010 | Builder's Cert | X | 0 |  |
| CX.CLD.QC.OTC.020 | HUD Warranty of Completion | X | 0 |  |
| CX.CLD.QC.OTC.030 | Termite Report 99A 99B | X | 0 |  |
| CX.CLD.QC.OTC.040 | Net Proceeds Worksheet | X | 0 |  |
| CX.CLD.QC.OTC.050 | Max Loan Worksheet | X | 0 |  |
| CX.CLD.QC.OTC.060 | Health Authority Approval | X | 0 |  |
| CX.CLD.QC.OTC.070 | Builder's Risk | X | 0 |  |
| CX.CLD.QC.OTC.080 | 10 Year Warranty | X | 0 |  |
| CX.CLD.QC.OTC.NOTES | OTC Notes | STRING | 256 |  |
| CX.CLD.QC.TITLE.010 | CPL | X | 0 |  |
| CX.CLD.QC.TITLE.020 | Title Commitment | X | 0 |  |
| CX.CLD.QC.TITLE.030 | Tax Information Sheet | X | 0 |  |
| CX.CLD.QC.TITLE.040 | Tax Certification | X | 0 |  |
| CX.CLD.QC.TITLE.050 | Survey | X | 0 |  |
| CX.CLD.QC.TITLE.060 | Subordination Agreement | X | 0 |  |
| CX.CLD.QC.TITLE.070 | POA | X | 0 |  |
| CX.CLD.QC.TITLE.NOTES | Title Document Notes | STRING | 256 |  |
| CX.CLD.QC.UWDOC.010 | 92900LT | X | 0 |  |
| CX.CLD.QC.UWDOC.020 | AUS Findings | X | 0 |  |
| CX.CLD.QC.UWDOC.030 | Final 1008 | X | 0 |  |
| CX.CLD.QC.UWDOC.040 | Final 26-1802A | X | 0 |  |
| CX.CLD.QC.UWDOC.050 | VA 26-1880 COE | X | 0 |  |
| CX.CLD.QC.UWDOC.060 | IRRRL Worksheet 26-8923 | X | 0 |  |
| CX.CLD.QC.UWDOC.070 | Verification of VA Indebtedness | X | 0 |  |
| CX.CLD.QC.UWDOC.080 | Loan Analysis 26-6393 | X | 0 |  |
| CX.CLD.QC.UWDOC.090 | Delegated Exemption Form | X | 0 |  |
| CX.CLD.QC.UWDOC.NOTES | Underwriting Document Notes | STRING | 256 |  |
| CX.CLD.QC.VAIDISC.010 | Initial VA 26-1802A | X | 0 |  |
| CX.CLD.QC.VAIDISC.020 | VA Federal Collection Policy | X | 0 |  |
| CX.CLD.QC.VAIDISC.030 | VA Nearest Living Relative | X | 0 |  |
| CX.CLD.QC.VAIDISC.040 | Counseling Checklist for Military Homebuyer | X | 0 |  |
| CX.CLD.QC.VAIDISC.050 | Origination Statement Itemization | X | 0 |  |
| CX.CLD.QC.VAIDISC.060 | VA Debt Questionnaire | X | 0 |  |
| CX.CLD.QC.VAIDISC.070 | VA Disclosure Notes | X | 0 |  |
| CX.CLD.QC.VAIDISC.NOTES | VA Disclosure Notes | STRING | 256 |  |
| CX.CLD.READVANCE | Re-Warehouse Advance Amt. | DECIMAL_2 | 0 | [CX.CLD.PA.WHPO] |
| CX.CLD.REHRCT | Re-Warehouse Haircut Amt. | DECIMAL_2 | 0 |  |
| CX.CLD.RWADVANCE | Re-Warehouse Advance Amt. | DECIMAL_2 | 0 |  |
| CX.CLD.SELLERLNNUMB | TPO Seller's Loan # | STRING | 20 |  |
| CX.CLD.SUB.COUNT | Submission Count | INTEGER | 0 |  |
| CX.CLD.SUB.DATE | Submission Date | DATE | 0 |  |
| CX.CLD.SUB.LOG | Submission Log | STRING | 10000 |  |
| CX.CLD.UW.APPROVED | Approval Indicator | X | 0 |  |
| CX.CLD.UW.CONDITIONAL | Condtional Approval Indicator | X | 0 |  |
| CX.CLD.UW.CTC | Clear to Close | X | 0 |  |
| CX.CLD.UW.DECLINED | Declined Indicator | X | 0 |  |
| CX.CLD.UW.IREVIEW | Intial Review Date | DATE | 0 |  |
| CX.CLD.UW.SUSPENDED | Suspense Indicator | X | 0 |  |
| CX.CLEAR.2.CLOSE.DATE | Clear to Close Date | DATE | 0 |  |
| CX.CLEAR.VALIDATION.CHANGES | Clear Validation Changes | STRING | 1 |  |
| CX.CLEAR.VALIDATION.DT | Validation Cleared Date | AUDIT | 0 | Audit([cx.clear.validation.changes], 2) |
| CX.CLEAR.VALIDATIONS.ID | Validations Cleared By | AUDIT | 0 | Audit([CX.CLEAR.VALIDATION.CHANGES], 1) |
| CX.CLEARTOCLOSEEXP | Clear to Close Expected | DATE | 0 |  |
| CX.CLOSE.DATE.CHANGE.COUNT | CLOSE.DATE.CHANGE.COUNT | INTEGER | 0 |  |
| CX.CLOSED.TO.FUND | Closed to Fund # of Days | INTEGER | 0 | DateDiff("d", [MS.DOC], [MS.FUN]) |
| CX.CLOSER.MANAGER.EMAIL | Closer Supervisor Email | STRING | 100 | iif([LoanTeamMember.Email.Closer] = "kwideman@kellermortgage.com", "dparzych@kellermortgage.com",
i |
| CX.CLOSER.MANAGER.MOBILE | Closer Supervisor mobile | PHONE | 0 | iif([LoanTeamMember.Email.Closer] = "kwideman@kellermortgage.com", "6146202540",
iif([LoanTeamMembe |
| CX.CLOSER.MANAGER.NAME | Closer Supervisor Name | STRING | 100 | iif([LoanTeamMember.Email.Closer] = "kwideman@kellermortgage.com", "Deborah Parzych",
iif([LoanTeam |
| CX.CLOSER.MANAGER.OFFICE | Closer Supervisor Office | PHONE | 0 | iif([LoanTeamMember.Email.Closer] = "kwideman@kellermortgage.com", "6147681154",
iif([LoanTeamMembe |
| CX.CLOSING.POA | POA Confirmed by Closing | X | 0 |  |
| CX.CLOSINGDATEBEGIN | Earliest Close Date | DATE | 0 |  |
| CX.CLOSINGDATEEND | Last Day For Closing | DATE | 0 |  |
| CX.CLOSINGDOCSRECVD | Date Closing Documents Returned | DATE | 0 |  |
| CX.CLOSINGFIGURESOUT | Closing Figures Sent to Closing Agent | DATE | 0 |  |
| CX.CLOSINGTIME | Expected Closing Time | STRING | 10 |  |
| CX.CLR.FF | Friends and Family | YN | 0 |  |
| CX.CLR.NONE | Special Loan - NONE | YN | 0 |  |
| CX.CLR.SF | Special Financing Flag | YN | 0 |  |
| CX.CLR.SPOT | Spot Loan Flag | YN | 0 |  |
| CX.CLS.INSTR.BODY | Closing Instructions | STRING | 4000 | vbCrLf & vbCrLf &
[CX.CC.0.A.CHECKED] & vbCrLf &
IIF(instr(ucase([19]),"PUR"),[CX.CC.0.P.CHECKED], |
| CX.CLS.INSTR.CHECKBOX | Closing Instructions Checkbox | X | 0 |  |
| CX.CLS.INSTR.FOOTER | Closing Instructions Footer | STRING | 1000 | ("-- Borrowers must sign all loan documents exactly as their names appear on the signature line of e |
| CX.CLS.INSTR.HEADER | Closing Instructions Header | STRING | 100 | iif(instr(ucase([19]),"PUR"),"Purchase Closing Instructions:",
iif(instr(ucase([19]),"REF"),"Refina |
| CX.CLS.INSTR.PUR | Purchase Closing Instructions | STRING | 2500 | ("Purchase Closing Instructions:" + vbCrLf + vbCrLf +
" - Subject to Final Loan Approval" + vbCrLf  |
| CX.CLS.INSTR.REF | Refinance Closing Instructions | STRING | 2500 | ("Refinance Closing Instructions:" + vbCrLf + vbCrLf +
" - Subject to Final Loan Approval" + vbCrLf |
| CX.CLS.INSTRUCTIONS | Closing Instructions | STRING | 4000 | [CX.CLS.INSTR.HEADER] & vbCrLf & vbCrLf &
[CX.CLS.INSTR.BODY] & vbCrLf & vbCrLf &
[CX.CLS.INSTR.FO |
