# Custom Fields

Rows: 467 | Columns: 6

| Field ID | Description | Format | Calculation | Max Length | AuditSettings |
| --- | --- | --- | --- | --- | --- |
| CX.PROCSUBMTASK60 | ProcSubm - Flood Cert | STRING |  | 40 |  |
| CUST94FV |  | NONE |  | 0 |  |
| CUST90FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.15 | PTD Closing Review - Section 5 Item 15 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.1.12 | PTD Closing Review - Section 1 Item 12 | STRING |  | 9 |  |
| CUST26FV | 26.  Borrower to meet LC to sign docs (LA) | DATE |  | 0 |  |
| CX.DRAWFEE | Draw Fee | DECIMAL_4 |  | 0 |  |
| CX.UWSNAPLOAN15 | UW Snapshot Loan - Warn Purpose | STRING | iif([19]=[CX.UWSNAPLOAN05],"","REVIEW DIFFERENCE") | 25 |  |
| CX.LENDERCREDITBPS | Lender Credit IN BPS | DECIMAL_3 | [#141]/[#1109]*100 | 0 |  |
| CUST04FV | 4.  Enter personal data (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.38 | PTD UW Review - Section 1 Item 38 | STRING |  | 9 |  |
| CUST52FV | 52.  Receive check, survey, & signed HUD (LA) | DATE |  | 0 |  |
| CUST68FV |  | NONE |  | 0 |  |
| CUST49FV | 49.  Confirm doc signing with title company (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.5.2 | PTD UW Review - Section 5 Item 2 | STRING |  | 9 |  |
| CX.LSWCONDOASSONAME | Condo Association Name | STRING |  | 80 |  |
| CX.MTGTECH.PTD.CLO.REV.2.4 | PTD Closing Review - Section 2 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.2.3 | File Setup Review - Secontion 2 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.4.4 | PTD UW Review - Section 4 Item 4 | STRING |  | 9 |  |
| CX.MXLENDECREDIT | Max Lender Credit | DECIMAL_2 | ((([#CX.LOCKCALC]-100)/100)*[#1109]) | 0 |  |
| CX.MTGTECH.PTD.UW.REV.7.4 | PTD UW Review - Section 7 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.3.4 | File Setup Review - Secontion 3 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.23 | PTD UW Review - Section 1 Item 23 | STRING |  | 9 |  |
| CX.UWSNAPASST01 | UW Snapshot Assets - Earnest Money | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.6.2 | PTD UW Review - Section 6 Item 2 | STRING |  | 9 |  |
| CX.GOLDSTAR | GoldStar | DECIMAL_2 | IIF([2278]="Flagstar Correspondent",IIF([1172] = "Conventional",[2]*.01,[2]*.02), 0) | 0 |  |
| CX.UWSNAPINC01 | UW Snapshot Income - Borrower | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.FSR.1.1 | File Setup Review - Secontion 1 Item 1 | STRING |  | 9 |  |
| CUST39FV | 39.  Complete fee sheet (LA) | DATE |  | 0 |  |
| CX.UWSNAPLOAN01 | UW Snapshot Loan - Int Rate | DECIMAL_3 |  | 0 |  |
| CX.LSWCONDOH06 | Condo H06 | STRING |  | 50 |  |
| CX.UWSNAPLOAN04 | UW Snapshot Loan - Doc Type | STRING |  | 25 |  |
| CX.MTGTECH.PTD.CLO.REV.2.9 | PTD Closing Review - Section 2 Item 9 | STRING |  | 9 |  |
| CUST54FV | 54.  Send Thank You Packet (LA) | DATE |  | 0 |  |
| CUST51FV | 51.  Compliance Audit File (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.21 | PTD UW Review - Section 1 Item 21 | STRING |  | 9 |  |
| CUST45FV | 45.  Forward copy of final HUD to LC (LA) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.3.5 | File Setup Review - Secontion 3 Item 5 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.2.4 | File Setup Review - Secontion 2 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.8.1 | PTD UW Review - Section 8 Item 1 | STRING |  | 9 |  |
| CX.DOCMAGIC.PLANCODE | DocMagic Plan Code | STRING |  | 20 |  |
| CX.CORPPROCESSOR | Corp Processor | INTEGER |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.14 | PTD Closing Review - Section 5 Item 14 | STRING |  | 9 |  |
| CUST37FV | 37.  Follow up with uw after 24 hrs (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.11 | PTD Closing Review - Section 2 Item 11 | STRING |  | 9 |  |
| CX.UWSNAPOK | CX.USSNAPOK | STRING | iif    ([CX.UWSNAPINC11] = "" AND [CX.UWSNAPINC12] = "" AND [CX.UWSNAPINC13] = "" AND [CX.UWSNAPASST11] = "" AND [CX.UWSNAPASST12] = "" AND [CX.U | 25 |  |
| CUST89FV |  | NONE |  | 0 |  |
| CX.PAIR2.COBORROWER.FICO | Co-Borrower Pair 2 FICO | INTEGER | IIF(IsEmpty([60#2]), Min([1452#2], [1415#2]),  IIF(IsEmpty([1452#2]), Min([60#2], [1415#2]),  IIF(IsEmpty([1415#2]), Min([60#2], [1452#2]),   Media | 0 |  |
| CX.PROFITTOTAL | PROFITTOTAL | DECIMAL_2 | [#CX.LENDERCREDITPB]+[#CX.LOCKEXTPB]+[#CX.DISCOUNTPB]+[#CX.SRPINCOMEPB]+[#CX.CORPMARGINPB]+[#CX.INVESTORBONUSPB]+[#CX.INVESTORFEESPB]+[#CX.INTERESTREC | 0 |  |
| CUST27FV | 27.  Lock conversation with borrower (LC) | DATE |  | 0 |  |
| CX.UWSNAPLOAN02 | UW Snapshot Loan - Ln Amt | DECIMAL_2 |  | 0 |  |
| CX.UWSNAPPROP03 | UW Snapshot Property - Pur Price | DECIMAL_2 |  | 0 |  |
| CX.PROCSUBMCOMM01 | ProcSubmComm-Borrowers | STRING |  | 10 |  |
| CUST13FV | 13.  Update processing milestone (LA) | DATE |  | 0 |  |
| CUST76FV |  | NONE |  | 0 |  |
| CUST10FV | 10.  Start File, Order Credit (LC) | DATE |  | 0 |  |
| CX.PROCSUBMTASK30 | ProcSubm - Payoffs | STRING |  | 40 |  |
| CX.UWSNAPPROP14 | UW Snapshot Property - Warn Prop Type | STRING | iif([1041]=[CX.UWSNAPPROP04],"","REVIEW DIFFERENCE") | 25 |  |
| CUST69FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.DT | PTD UW Review - Date/Time Complete | STRING |  | 99 |  |
| CX.PAIR2.BORROWER.FICO | Borrower Pair 2 FICO | INTEGER | IIF(IsEmpty([67#2]), Min([1450#2], [1414#2]),  IIF(IsEmpty([1450#2]), Min([67#2], [1414#2]),  IIF(IsEmpty([1414#2]), Min([67#2], [1450#2]),   Media | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.USER | PTD Closing Review - User | STRING |  | 99 |  |
| CX.MTGTECH.PTD.UW.REV.10.5 | PTD UW Review - Section 10 Item 5 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.3.3 | File Setup Review - Secontion 3 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.COMPLETE.DATE | File Setup Review - Date Complete | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.3 | PTD Closing Review - Section 5 Item 3 | STRING |  | 9 |  |
| CUST09FV | 9.  Receive Concierge Packet back (LC) | DATE |  | 0 |  |
| CUST95FV | Wire Shortage Amt | DECIMAL_2 | [cust97fv]+[pm05] | 0 |  |
| CX.PROCSUBMCHK20 | ProcSubmChk - Inv Reg Number | X |  | 0 |  |
| CX.LSWVOECOBORROWER | Verification of Employment Co-Borrower | PHONE |  | 0 |  |
| CX.UWSNAPASST12 | UW Snapshot Assets - Warn Deposits | STRING | iif([#979]=[#CX.UWSNAPASST02],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.1.20 | PTD UW Review - Section 1 Item 20 | STRING |  | 9 |  |
| CUST38FV | 38.  Send Customer Survey to title processor (LA) | DATE |  | 0 |  |
| CUST81FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.33 | PTD UW Review - Section 1 Item 33 | STRING |  | 9 |  |
| CX.DISCOUNTPB | DISCOUNTPB | DECIMAL_2 |  | 0 |  |
| CUST79FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.43 | PTD UW Review - Section 1 Item 43 | STRING |  | 9 |  |
| CUST93FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.2 | PTD Closing Review - Section 2 Item 2 | STRING |  | 9 |  |
| CUST98FV | Nag Issue | DROPDOWN |  | 256 |  |
| CX.MTGTECH.PTD.UW.REV.1.8 | PTD UW Review - Section 1 Item 8 | STRING |  | 9 |  |
| CX.PAIR5.COBORROWER.FICO | Co-Borrower Pair 5 FICO | INTEGER | IIF(IsEmpty([60#5]), Min([1452#5], [1415#5]),  IIF(IsEmpty([1452#5]), Min([60#5], [1415#5]),  IIF(IsEmpty([1415#5]), Min([60#5], [1452#5]),   Media | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.13 | PTD UW Review - Section 1 Item 13 | STRING |  | 9 |  |
| CUST96FV | Hair Cut % | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.34 | PTD UW Review - Section 1 Item 34 | STRING |  | 9 |  |
| CX.PAIR3.BORROWER.FICO | Borrower Pair 3 FICO | INTEGER | IIF(IsEmpty([67#3]), Min([1450#3], [1414#3]),  IIF(IsEmpty([1450#3]), Min([67#3], [1414#3]),  IIF(IsEmpty([1414#3]), Min([67#3], [1450#3]),   Media | 0 |  |
| CX.PROCSUBMTASK10 | ProcSubm - Title | STRING |  | 40 |  |
| CX.MTGTECH.PTD.CLO.REV.5.2 | PTD Closing Review - Section 5 Item 2 | STRING |  | 9 |  |
| CX.LSWPAYOFFSTATEMENTS | Payoff Statements | STRING |  | 50 |  |
| CX.MTGTECH.PTD.CLO.REV.4.7 | PTD Closing Review - Section 4 Item 7 | STRING |  | 9 |  |
| CUST48FV | 48.  Email Closing Cost Comparison Sheet (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.3.5 | PTD UW Review - Section 3 Item 5 | STRING |  | 9 |  |
| CX.SCHDCLOSINGDATE | Schd Closing Date | STRING |  | 12 |  |
| CX.PAIR1.COBORROWER.FICO | Co-Borrower Pair 1 FICO | INTEGER | IIF(IsEmpty([60#1]), Min([1452#1], [1415#1]),  IIF(IsEmpty([1452#1]), Min([60#1], [1415#1]),  IIF(IsEmpty([1415#1]), Min([60#1], [1452#1]),   Media | 0 |  |
| CUST62FV |  | NONE |  | 0 |  |
| CX.LSWFINANCINGCONTINGENCY | Financing Contingency | DATE |  | 0 |  |
| CUST75FV |  | NONE |  | 0 |  |
| CX.UWSNAPLIA15 | UW Snapshot Liabilities - Warn Total Debt Ratio | STRING | iif([#742]=[#CX.UWSNAPLIA05],"","REVIEW DIFFERENCE") | 25 |  |
| CUST100FV |  | NONE |  | 0 |  |
| CUST12FV | 12.  Send file to Processor (LC) | DATE |  | 0 |  |
| CX.212 | Prospect Loan Investor | STRING |  | 100 |  |
| CX.EXTDATE1 | Lock Ext Date 1 | DATE |  | 0 |  |
| CX.PROCSUBMTASK40 | ProcSubm - Appraisal | STRING |  | 40 |  |
| CX.MTGTECH.PTD.UW.REV.1.18 | PTD UW Review - Section 1 Item 18 | STRING |  | 9 |  |
| CX.CORPMARGINPB | CORPMARGINPB | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.FSR.1.9 | File Setup Review - Secontion 1 Item 9 | STRING |  | 9 |  |
| CX.UWSNAPPROP04 | UW Snapshot Property - Prop Type | STRING |  | 25 |  |
| CX.MTGTECH.PTD.CLO.REV.1.14 | PTD Closing Review - Section 1 Item 14 | STRING |  | 9 |  |
| CX.UWSNAPLOAN13 | UW Snapshot Loan - Warn Occupancy | STRING | iif([1811]=[CX.UWSNAPLOAN03],"","REVIEW DIFFERENCE") | 25 |  |
| CX.LSWCONDOCOI | Condo Coi | STRING |  | 50 |  |
| CX.MTGTECH.FSR.1.6 | File Setup Review - Secontion 1 Item 6 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.37 | PTD UW Review - Section 1 Item 37 | STRING |  | 9 |  |
| CX.CONDITIONS.REVIEWEDON | Conditions Reviewed On | DATE |  | 0 |  |
| CX.DOCMAGIC.TITLE.ONLY | Title Only Borrower Name | STRING |  | 100 |  |
| CX.MTGTECH.FSR.3.NOLOCK.2 | File Setup Review - Secontion 3 Item 2 | STRING |  | 9 |  |
| CX.CORPMARGIN | Corporate Margin | DECIMAL_4 |  | 0 |  |
| CX.LSW.REFINANCETYPE | LOAN SUBMISSION WORKSHEET | STRING |  | 70 |  |
| CX.MTGTECH.FSR.3.NOLOCK.4 | File Setup Review - Secontion 3 Item 4 | STRING |  | 9 |  |
| CX.LSWPURCHASECONTRACTSTATUS | Purchase Contract Status | STRING |  | 50 |  |
| CX.MTGTECH.PTD.UW.REV.9.2 | PTD UW Review - Section 9 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.2.5 | File Setup Review - Secontion 2 Item 5 | STRING |  | 9 |  |
| CUST11FV | 11.  Run CreditXpert (LC) | DATE |  | 0 |  |
| CUST78FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.4.6 | PTD UW Review - Section 4 Item 6 | STRING |  | 9 |  |
| CX.CONDITIONS.REVIEWEDBY | Conditions Reviewed By | STRING |  | 30 |  |
| CUST92FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.12 | PTD UW Review - Section 1 Item 12 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.3.2 | PTD UW Review - Section 3 Item 2 | STRING |  | 9 |  |
| CX.LSWSUBORDINATION | Subordination | STRING |  | 50 |  |
| CX.MTGTECH.PTD.CLO.REV.5.5 | PTD Closing Review - Section 5 Item 5 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.1.7 | File Setup Review - Secontion 1 Item 7 | STRING |  | 9 |  |
| CX.BRANCH | Branch | STRING |  | 30 |  |
| CX.PAIR6.BORROWER.FICO | Borrower Pair 6 FICO | INTEGER | IIF(IsEmpty([67#6]), Min([1450#6], [1414#6]),  IIF(IsEmpty([1450#6]), Min([67#6], [1414#6]),  IIF(IsEmpty([1414#6]), Min([67#6], [1450#6]),   Media | 0 |  |
| CX.LSWAPPLICATIONCONTINGENCY | Application Contingency | DATE |  | 0 |  |
| CUST03FV | 3.  Call with Mini High Trust Interview (LC) | DATE |  | 0 |  |
| CX.PAIRS16 | Borrower Pair 1-6 | INTEGER | Min([CX.PAIR1.BORROWER.FICO], [CX.PAIR1.COBORROWER.FICO], [CX.PAIR2.BORROWER.FICO], [CX.PAIR2.COBORROWER.FICO], [CX.PAIR3.BORROWER.FICO], [CX.PAIR3.CO | 0 |  |
| CUST63FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.8 | PTD Closing Review - Section 1 Item 8 | STRING |  | 9 |  |
| CUST74FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.4.8 | PTD UW Review - Section 4 Item 8 | STRING |  | 9 |  |
| CX.PROCSUBMCHK07 | ProcSubmChk - Income Docs | X |  | 0 |  |
| CX.COMM200 | Commission-Referral Source | DROPDOWNLIST |  | 0 |  |
| CUST91FV |  | NONE |  | 0 |  |
| CX.1393 | Copy of HMDA Status | STRING | iif([1393]="","Active", iif([1393]="Loan Originated","Closed", "Adverse")) | 30 |  |
| CUST61FV |  | NONE |  | 0 |  |
| CX.LOANFOLDER | Current Loan Folder | STRING | [LOANFOLDER] | 20 |  |
| CX.UWSNAPLOAN17 | UW Snapshot Loan - Warn CLTV | STRING | iif([#976]=[#CX.UWSNAPLOAN07],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.1.31 | PTD UW Review - Section 1 Item 31 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.10 | PTD Closing Review - Section 1 Item 10 | STRING |  | 9 |  |
| CX.UWSNAPLOAN06 | UW Snapshot Loan - LTV | DECIMAL_4 |  | 0 |  |
| CX.UWSNAPPROG12 | US Snapshot Program - Warn Investor | STRING | iif([VEND.X263]=[CX.UWSNAPPROG02],"","REVIEW DIFFERENCE") | 25 |  |
| CUST35FV | 35.  Check docs as they are received (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.9.3 | PTD UW Review - Section 9 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.3.NOLOCK.3 | File Setup Review - Secontion 3 Item 3 | STRING |  | 9 |  |
| CX.LSWAUSSTATUS | AUS Status | STRING |  | 50 |  |
| CUST82FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.6 | PTD Closing Review - Section 1 Item 6 | STRING |  | 9 |  |
| CUST77FV |  | NONE |  | 0 |  |
| CX.UWSNAPPROG03 | UW Snapshot Program - Prog Name | STRING |  | 100 |  |
| CX.MTGTECH.PTD.UW.REV.1.10 | PTD UW Review - Section 1 Item 10 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.4.2 | PTD UW Review - Section 4 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.10.3 | PTD UW Review - Section 10 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.7.3 | PTD UW Review - Section 7 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.3.6 | PTD UW Review - Section 3 Item 6 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.1.2 | PTD Closing Review - Section 1 Item 2 | STRING |  | 9 |  |
| CX.PROCSUBMTASK50 | ProcSubm - Tax Transcripts | STRING |  | 40 |  |
| CUST67FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.10 | PTD Closing Review - Section 5 Item 10 | STRING |  | 9 |  |
| CUST07FV | 7.  Send Thank You Card (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.4.5 | PTD Closing Review - Section 4 Item 5 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.NOTES | PTD UW Review - Notes | STRING |  | 8000 |  |
| CX.RQLENDERCREDIT | Required Lender Credit | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.11 | PTD Closing Review - Section 1 Item 11 | STRING |  | 9 |  |
| CX.UWSNAPINC11 | UW Snapshot Income - Warn 01 | STRING | iif([#910]=[#CX.UWSNAPINC01],"","REVIEW DIFFERENCE") | 25 |  |
| CX.UWSNAPPROP12 | UW Snapshot Property - Warn Appr Value | STRING | iif([#356]=[#CX.UWSNAPPROP02],"","REVIEW DIFFERENCE") | 25 |  |
| CX.LSWCHKBXCREDITINQUIRIES | CHECKBOX FOR CREDIT INQUIRIES EXPLAINED | X |  | 0 |  |
| CUST02FV | 2.  Add new client info in Encompass (LC)   | DATE |  | 0 |  |
| CX.UWSNAPPROP02 | UW Snapshot Property - Appr Value | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.13 | PTD Closing Review - Section 5 Item 13 | STRING |  | 9 |  |
| CX.PAIR6.COBORROWER.FICO | Co-Borrower Pair 6 FICO | INTEGER | IIF(IsEmpty([60#6]), Min([1452#6], [1415#6]),  IIF(IsEmpty([1452#6]), Min([60#6], [1415#6]),  IIF(IsEmpty([1415#6]), Min([60#6], [1452#6]),   Media | 0 |  |
| CX.MTGTECH.PTD.UW.REV.3.1 | PTD UW Review - Section 3 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.5.3 | PTD UW Review - Section 5 Item 3 | STRING |  | 9 |  |
| CX.UWSNAPPROG02 | UW Snapshot Program - Investor | STRING |  | 100 |  |
| CX.PROCSUBMTASK12 | ProcSubm - CPL | X |  | 0 |  |
| CX.INTERESTRECOVERY | Interest Recovery | DECIMAL |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.4.3 | PTD UW Review - Section 4 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.3.2 | File Setup Review - Secontion 3 Item 2 | STRING |  | 9 |  |
| CUST87FV |  | NONE |  | 0 |  |
| CX.PROCSUBMCHK11 | ProcSubmChk - Inv Registration | X |  | 0 |  |
| CX.UWSNAPINC02 | UW Snapshot Income - CoBorrower | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.FSR.4.1 | File Setup Review - Secontion 4 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.4.6 | PTD Closing Review - Section 4 Item 6 | STRING |  | 9 |  |
| CX.UWSNAPPROG16 | UW Snapshot Program - Warn Loan Type | STRING | iif([1172]=[CX.UWSNAPPROG06],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.9.5 | PTD UW Review - Section 9 Item 5 | STRING |  | 9 |  |
| CUST01FV | 1.  Receive referral for a new client (LC) | DATE |  | 0 |  |
| CUST34FV | 34.  Order Home Owner's Insurance (LA) | DATE |  | 0 |  |
| CX.LSWAMC | Appraisal Status | STRING |  | 50 |  |
| CX.MTGTECH.FSR.1.10 | File Setup Review - Secontion 1 Item 10 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.3.NOLOCK.1 | File Setup Review - Secontion 3 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.4 | PTD UW Review - Section 1 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.7.2 | PTD UW Review - Section 7 Item 2 | STRING |  | 9 |  |
| CX.LOCOMP | Lo Comp | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.10.7 | PTD UW Review - Section 10 Item 7 | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.9 | PTD UW Review - Section 1 Item 9 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.2.5 | PTD UW Review - Section 2 Item 5 | STRING |  | 9 |  |
| CUST84FV |  | NONE |  | 0 |  |
| CX.UWSNAPLOAN11 | UW Snapshot Loan - Warn Int Rate | STRING | iif([#3]=[#CX.UWSNAPLOAN01],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.CLO.REV.4.1 | PTD Closing Review - Section 4 Item 1 | STRING |  | 9 |  |
| CX.LSWVOEBORROWER | LSW Verification of Employment | PHONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.10 | PTD Closing Review - Section 2 Item 10 | STRING |  | 9 |  |
| CX.INVESTORFEE | Investor Fee | DECIMAL |  | 0 |  |
| CX.UWSNAPLIA11 | UW Snapshot Liabilities - Warn Hsg Exp | STRING | iif([#912]=[#CX.UWSNAPLIA01],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.9.4 | PTD UW Review - Section 9 Item 4 | STRING |  | 9 |  |
| CX.CORPPRO | CORP PROCESOR | STRING |  | 3 |  |
| CX.MTGTECH.PTD.UW.REV.3.3 | PTD UW Review - Section 3 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.2.8 | PTD Closing Review - Section 2 Item 8 | STRING |  | 9 |  |
| CX.UWSNAPPROG05 | UW Snapshot Program - Spec Prog | STRING |  | 25 |  |
| CX.INVESTORBONUSPB | INVESTORBONUSPB | DECIMAL_1 |  | 0 |  |
| CX.MTGTECH.PTD.NOD | Number of Days between date of last transfer and contract date. | STRING | DATEDIFF("d",[CX.MTGTECH.PTD.UW.REV.10.6],[CX.MTGTECH.PTD.UW.REV.10.7]) | 3 |  |
| CX.MTGTECH.PTD.UW.REV.2.3 | PTD UW Review - Section 2 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.1.5 | File Setup Review - Secontion 1 Item 5 | STRING |  | 9 |  |
| CX.LSWISTHISCONDO | Is this a condo? | DROPDOWNLIST |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.28 | PTD UW Review - Section 1 Item 28 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.39 | PTD UW Review - Section 1 Item 39 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.COMPLETE.DT | File Setup Review - Date/Time Complete | STRING |  | 99 |  |
| CUST86FV |  | NONE |  | 0 |  |
| CX.UWSNAPLOAN12 | UW Snapshot Loan - Warn Ln Amt | STRING | iif([#2]=[#CX.UWSNAPLOAN02],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.CLO.REV.4.2 | PTD Closing Review - Section 4 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.1.11 | File Setup Review - Secontion 1 Item 11 | STRING |  | 9 |  |
| CX.DOCMAGIC.TRANSFERTO | DocMagic Transfer To | STRING |  | 20 |  |
| CX.MTGTECH.FSR.3.NOLOCK.5 | File Setup Review - Secontion 3 Item 5 | STRING |  | 9 |  |
| CX.LSWTITTLEESCROW | Title/Escrow | STRING |  | 50 |  |
| CX.MTGTECH.PTD.CLO.REV.4.3 | PTD Closing Review - Section 4 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.2.6 | File Setup Review - Secontion 2 Item 6 | STRING |  | 9 |  |
| CUST71FV |  | NONE |  | 0 |  |
| CX.UWSNAPPROG04 | UW Snapshot Program - Agency HiBal | STRING |  | 25 |  |
| CUST36FV | 36.  Clear remaining conditions (LA) | DATE |  | 0 |  |
| CX.BSUWSTATUSDATE | Last File Status Change  | AUDIT | Audit([CX.BSUWSTATUS], 2) | 0 | Timestamp |
| CUST20FV | 20.  Intro call to Realtors (LA) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.1.3 | File Setup Review - Secontion 1 Item 3 | STRING |  | 9 |  |
| CX.UWSNAPASST02 | UW Snapshot Assets - Total Deposits | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.2.4 | PTD UW Review - Section 2 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.6 | PTD Closing Review - Section 5 Item 6 | STRING |  | 9 |  |
| CX.LOCKCALC | Lock Caculation  | STRING | [#CX.LOCKEDPRICE]-[#CX.CORPMARGIN]-[#CX.BRANCHMARGIN]-[#CX.INVESTORBONUS]+[#1061]-[#CX.EXTPRICE1]-[#CX.EXTPRICE2]-[#CX.EXTPRICE3]-[#CX.INVESTORFEE]-[# | 20 |  |
| CX.MTGTECH.PTD.UW.REV.1.35 | PTD UW Review - Section 1 Item 35 | STRING |  | 9 |  |
| CUST50FV | 50.  Prepare and send Realtor Surveys (LA) | DATE |  | 0 |  |
| CX.MTGTECHPRINTSCREEN | DNR - Field for plugin | X |  | 0 |  |
| CX.LOCKEXTPB | LOCKEXTPB | DECIMAL_2 |  | 0 |  |
| CX.SEC003 | Secondary Program Type | STRING |  | 30 |  |
| CX.MTGTECH.PTD.CLO.REV.1.4 | PTD Closing Review - Section 1 Item 4 | STRING |  | 9 |  |
| CX.UWSNAPLIA01 | UW Snapshot Liabilities - Prop Hsg Exp | DECIMAL_2 |  | 0 |  |
| CX.UWSUBCOUNT | Submission Count | STRING |  | 2 |  |
| CUST97FV | Hair Cut Amt | DECIMAL_2 | [CUST96FV]*[2] | 0 |  |
| CX.INVESTORFEESPB | INVESTORFEESPB | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.DATE | PTD UW Review - Date Complete | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.9 | PTD Closing Review - Section 1 Item 9 | STRING |  | 9 |  |
| CX.PROCSUBMCHK19 | General Notes | STRING |  | 300 |  |
| CX.MTGTECH.PTD.UW.REV.3.4 | PTD UW Review - Section 3 Item 4 | STRING |  | 9 |  |
| CX.NETMARGIN | NETMARGIN | DECIMAL_3 | [#CX.LOCKEDPRICE]-[#CX.CORPMARGIN]-[#CX.BRANCHMARGIN]-[#CX.INVESTORBONUS]+[#1061]-[#CX.LENDERCREDITBPS]-[#CX.EXTPRICE1]-[#CX.EXTPRICE2]-[#CX.EXTPRICE3 | 0 |  |
| CX.PAIR1.BORROWER.FICO | Borrower Pair 1 FICO | INTEGER | IIF(IsEmpty([67#1]), Min([1450#1], [1414#1]),  IIF(IsEmpty([1450#1]), Min([67#1], [1414#1]),  IIF(IsEmpty([1414#1]), Min([67#1], [1450#1]),   Media | 0 |  |
| CX.MTGTECH.PTD.UW.REV.2.2 | PTD UW Review - Section 2 Item 2 | STRING |  | 9 |  |
| CX.EXTPRICE3 | Lock Ext Price 3 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.8 | PTD Closing Review - Section 5 Item 8 | STRING |  | 9 |  |
| CUST43FV | 43.  Final HUD ordered from title company (LA) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.6.2 | File Setup Review - Secontion 6 Item 2 | STRING |  | 9 |  |
| CX.CONDITIONS.REVIEWED | Trigger for Reviewed Email | X |  | 0 |  |
| CX.PROCSUBMCHK17 | Income Notes | STRING |  | 300 |  |
| CUST85FV |  | NONE |  | 0 |  |
| CX.UWSNAPLOAN07 | UW Snapshot Loan - CLTV | DECIMAL_4 |  | 0 |  |
| CUST05FV | 5.  Email, Mail, or Fax Packet (LC) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.5.2 | File Setup Review - Secontion 5 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.3.1 | PTD Closing Review - Section 3 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.1.7 | PTD Closing Review - Section 1 Item 7 | STRING |  | 9 |  |
| CUST28FV | 28.  Lock in Loan (LC) | DATE |  | 0 |  |
| CX.DOCSTOCLOSER | Docs to Closer Expected | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.1 | PTD UW Review - Section 1 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.10.2 | PTD UW Review - Section 10 Item 2 | STRING |  | 29 |  |
| CX.PARPRICE | PAR PRICE | DECIMAL_4 |  | 0 |  |
| CUST55FV | 55.  Complete profit management (LA) | DATE |  | 0 |  |
| CUST57FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.4.4 | PTD Closing Review - Section 4 Item 4 | STRING |  | 9 |  |
| CX.LENDERCREDITPB | LENDERCREDITPB | DECIMAL_2 |  | 0 |  |
| CX.UWSNAPPROG14 | UW Snapshot Program - Warn Agency HiBal | STRING | iif([CX.SEC002]=[CX.UWSNAPPROG04],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.FSR.6.1 | File Setup Review - Secontion 6 Item 1 | STRING |  | 9 |  |
| CUST80FV |  | NONE |  | 0 |  |
| CX.DATECALC006 | Days since Closing (748) | INTEGER | DATEDIFF("d",[748],TODAY) | 0 |  |
| CX.UWSNAPINC12 | UW Snapshot Income - Warn 02 | STRING | iif([#911]=[#CX.UWSNAPINC02],"","REVIEW DIFFERENCE") | 25 |  |
| CX.PROCSUBMCOMM02 | ProcSubmComm-Realtors | STRING |  | 10 |  |
| CX.SEC002 | Agency High Balance | STRING |  | 1 |  |
| CX.LOCOMPDOLLARS | Lo Comp Dollars | DECIMAL_2 | (([#2]*([#CX.LOCOMP]/100))+(([#2]*([#CX.LOCOMP]/100)))*.10) | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.14 | PTD UW Review - Section 1 Item 14 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.12 | PTD Closing Review - Section 5 Item 12 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.10.4 | PTD UW Review - Section 10 Item 4 | STRING |  | 9 |  |
| CUST73FV |  | NONE |  | 0 |  |
| CX.MTGTECH.FSR.1.4 | File Setup Review - Secontion 1 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.2.6 | PTD UW Review - Section 2 Item 6 | STRING |  | 9 |  |
| CUST14FV | 14.  Prepare Loan Magic Reports (LC) | DATE |  | 0 |  |
| CUST21FV | 21.  Intro call to Borrowers (LA) | DATE |  | 0 |  |
| CX.UWSNAPASST11 | UW Snapshot Assets - Warn Earnest | STRING | iif([#183]=[#CX.UWSNAPASST01],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.CLO.REV.5.1 | PTD Closing Review - Section 5 Item 1 | STRING |  | 9 |  |
| CUST88FV |  | NONE |  | 0 |  |
| CX.UWSNAPINC03 | UW Snapshot Income - Total | DECIMAL_2 |  | 0 |  |
| CX.UWSNAPPROG13 | UW Snapshot Program - Warn Prog Name | STRING | iif([1401]=[CX.UWSNAPPROG03],"","REVIEW DIFFERENCE") | 25 |  |
| CX.INTERESTRECOVPB | INTERESTRECOVPB | DECIMAL_2 |  | 0 |  |
| CX.UWSNAPLIA13 | UW Snapshot Liabilities - Warn Liab Bal | STRING | iif([#733]=[#CX.UWSNAPLIA03],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.9.6 | PTD UW Review - Section 9 Item 6 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.40 | PTD UW Review - Section 1 Item 40 | STRING |  | 9 |  |
| CX.PAIR4.COBORROWER.FICO | Co-Borrower Pair 4 FICO | INTEGER | IIF(IsEmpty([60#4]), Min([1452#4], [1415#4]),  IIF(IsEmpty([1452#4]), Min([60#4], [1415#4]),  IIF(IsEmpty([1415#4]), Min([60#4], [1452#4]),   Media | 0 |  |
| CX.PROCSUBMTASK13 | ProcSubm - Tax Cert | X |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.1 | PTD Closing Review - Section 2 Item 1 | STRING |  | 9 |  |
| CX.IHMC.LOCK | Pocket/Lock Status | STRING |  | 20 |  |
| CX.EXTDATE2 | Lock Ext Date 2 | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.6.1 | PTD UW Review - Section 6 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.18 | PTD Closing Review - Section 5 Item 18 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.15 | PTD UW Review - Section 1 Item 15 | STRING |  | 29 |  |
| CX.MTGTECH.PTD.UW.REV.10.6 | PTD UW Review - Section 10 Item 6 | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.26 | PTD UW Review - Section 1 Item 26 | STRING |  | 9 |  |
| CUST31FV | 31.  Receive conditional approval (LA) | DATE |  | 0 |  |
| CX.PAIR4.BORROWER.FICO | Borrower Pair 4 FICO | INTEGER | IIF(IsEmpty([67#4]), Min([1450#4], [1414#4]),  IIF(IsEmpty([1450#4]), Min([67#4], [1414#4]),  IIF(IsEmpty([1414#4]), Min([67#4], [1450#4]),   Media | 0 |  |
| CUST18FV | 18.  Email client with referral (LC) | DATE |  | 0 |  |
| CUST22FV | 22.  Seller Letter (LA) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.COMPLETE.USER | File Setup Review - Completing User | STRING |  | 99 |  |
| CX.MTGTECH.PTD.CLO.REV.2.13 | PTD Closing Review - Section 2 Item 13 | STRING |  | 9 |  |
| CUST41FV | 41.  Notify all parties involved that docs are ordered (LA) | DATE |  | 0 |  |
| CUST59FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.DATE | PTD Closing Review - Date Completed | DATE |  | 0 |  |
| CX.UWSNAPLIA12 | UW Snapshot Liabilities - Warn Liab Pmt | STRING | iif([#350]=[#CX.UWSNAPLIA02],"","REVIEW DIFFERENCE") | 25 |  |
| CX.SCHDCLOSINGTIME | Schd Closing Time | STRING |  | 10 |  |
| CX.UWSNAPPROP13 | UW Snapshot Property - Warn Pur Price | STRING | iif([#136]=[#CX.UWSNAPPROP03],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.FSR.2.8 | File Setup Review - Secontion 2 Item 8 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.1.1 | PTD Closing Review - Section 1 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.1.12 | File Setup Review - Secontion 1 Item 12 | STRING |  | 9 |  |
| CUST08FV | 8.  Call referral source (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.5.4 | PTD UW Review - Section 5 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.16 | PTD Closing Review - Section 5 Item 16 | STRING |  | 9 |  |
| CX.UWSNAPPROP05 | UW Snapshot Property - Units | INTEGER |  | 0 |  |
| CUST42FV | 42.  Follow up with title company on closing package (LA) | DATE |  | 0 |  |
| CX.EXTDATE3 | Lock Ext Date 3 | DATE |  | 0 |  |
| CUST17FV | 17.  Borrower moves forward (LC) | DROPDOWNLIST |  | 0 |  |
| CUST72FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.USER | PTD UW Review - Completing User | STRING |  | 99 |  |
| CX.UWSNAPLOAN16 | UW Snapshot Loan - Warn LTV | STRING | iif([#353]=[#CX.UWSNAPLOAN06],"","REVIEW DIFFERENCE") | 25 |  |
| CX.INVESTORBONUS | Investor Bonus | DECIMAL_4 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.8.3 | PTD UW Review - Section 8 Item 3 | STRING |  | 9 |  |
| CUST64FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.7 | PTD Closing Review - Section 5 Item 7 | STRING |  | 9 |  |
| CX.BRANCHMARGIN | Branch Margin | DECIMAL_4 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.16 | PTD UW Review - Section 1 Item 16 | STRING |  | 9 |  |
| CX.PARRATE | PARRATE | DECIMAL_3 |  | 0 |  |
| CX.UWSNAPLIA03 | UW Snapshot Liabilties - Total Liab | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.8.4 | PTD UW Review - Section 8 Item 4 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.5.1 | PTD UW Review - Section 5 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.2.5 | PTD Closing Review - Section 2 Item 5 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.2.2 | File Setup Review - Secontion 2 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.6.3 | PTD UW Review - Section 6 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.4.5 | PTD UW Review - Section 4 Item 5 | STRING |  | 9 |  |
| CX.PROCSUBMCHK08 | ProcSubmChk - Asset Docs | X |  | 0 |  |
| CX.MTGTECH.FSR.2.7 | File Setup Review - Secontion 2 Item 7 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.11 | PTD UW Review - Section 1 Item 11 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.22 | PTD UW Review - Section 1 Item 22 | STRING |  | 9 |  |
| CX.EXTPRICE1 | Lock Ext Price 1 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.5.17 | PTD Closing Review - Section 5 Item 17 | STRING |  | 9 |  |
| CX.MTGTECH.FSR.1.2 | File Setup Review - Secontion 1 Item 2 | STRING |  | 9 |  |
| CX.LSWPURCHASECONTRACTREC | Purchase Contract Received | DATE |  | 0 |  |
| CX.PAIR3.COBORROWER.FICO | Co-Borrower Pair 3 FICO | INTEGER | IIF(IsEmpty([60#3]), Min([1452#3], [1415#3]),  IIF(IsEmpty([1452#3]), Min([60#3], [1415#3]),  IIF(IsEmpty([1415#3]), Min([60#3], [1452#3]),   Media | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.12 | PTD Closing Review - Section 2 Item 12 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.3.2 | PTD Closing Review - Section 3 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.2.1 | PTD UW Review - Section 2 Item 1 | STRING |  | 9 |  |
| CUST23FV | 23.  Call Borrowers with reminder (LA) | DATE |  | 0 |  |
| CX.UWSNAPLOAN05 | UW Snapshot Loan - Purp | STRING |  | 25 |  |
| CX.LOCKEDPRICE | LOCKED PRICE | DECIMAL_4 |  | 0 |  |
| CX.UWSNAPPROG11 | UW Snapshot Program - Warn Channel | STRING | iif([2626]=[CX.UWSNAPPROG01],"","REVIEW DIFFERENCE") | 25 |  |
| CUST83FV |  | NONE |  | 0 |  |
| CX.LOCKNOTES | Lock Notes | STRING |  | 2000 |  |
| CX.MTGTECH.PTD.CLO.REV.3.3 | PTD Closing Review - Section 3 Item 3 | STRING |  | 9 |  |
| CX.UWSNAPLIA05 | UW Snapshot Liabilities - Total Debt Ratio | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.10.1 | PTD UW Review - Section 10 Item 1 | STRING |  | 29 |  |
| CX.DOCMAGIC.ALTLENDER | DocMagic Alternate Lender Field | STRING |  | 20 |  |
| CUST56FV | Genral Notes | STRING |  | 500 |  |
| CX.MTGTECH.PTD.CLO.REV.1.5 | PTD Closing Review - Section 1 Item 5 | STRING |  | 9 |  |
| CX.BSUWSTATUS | File Status | STRING |  | 30 |  |
| CX.MTGTECH.PTD.UW.REV.1.3 | PTD UW Review - Section 1 Item 3 | STRING |  | 9 |  |
| CX.PAIR5.BORROWER.FICO | Borrower Pair 5 FICO | INTEGER | IIF(IsEmpty([67#5]), Min([1450#5], [1414#5]),  IIF(IsEmpty([1450#5]), Min([67#5], [1414#5]),  IIF(IsEmpty([1414#5]), Min([67#5], [1450#5]),   Media | 0 |  |
| CUST06FV | 6.  Enter contact type (LC) | DATE |  | 0 |  |
| CX.PROCSUBMCHK02 | ProcSubmChk - Channel and Investor | X |  | 0 |  |
| CX.MTGTECH.FSR.2.1 | File Setup Review - Secontion 2 Item 1 | STRING |  | 9 |  |
| CX.PROCSUBMCHK18 | Asset Notes | STRING |  | 300 |  |
| CX.UWSNAPLOAN14 | UW Snapshot Loan - Warn Doc | STRING | iif([MORNET.X67]=[CX.UWSNAPLOAN04],"","REVIEW DIFFERENCE") | 25 |  |
| CX.PROCSUBMDAYS | Days to Est. Close | INTEGER | DateDiff("d",TODAY,[763]) | 0 |  |
| CUST33FV | 33.  Send email to borrower (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.13 | PTD Closing Review - Section 1 Item 13 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.9 | PTD Closing Review - Section 5 Item 9 | STRING |  | 9 |  |
| CUST16FV | 16.  Can we do something (LC) | DROPDOWNLIST |  | 0 |  |
| CX.UWSNAPLOAN03 | UW Snapshot Loan - Occ | STRING |  | 25 |  |
| CX.CORPSRP | Corp SRP | DECIMAL_2 | ([#2]*(([#CX.CORPMARGIN]+[#CX.INVESTORFEE]+[#CX.INTERESTRECOVERY])/100)+995-[#CX.GOLDSTAR]+[#CX.CORPPRO])+([#2]*([#CX.INVESTORBONUS]/100)) | 0 |  |
| CUST46FV | 46.  Call Borrower on final figure (LC) | DATE |  | 0 |  |
| CX.LSWCREDITINQUIRYNOTES | CREDIT INQUIRY NOTES FROM LSB SHEET | STRING |  | 300 |  |
| CUST65FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.2.6 | PTD Closing Review - Section 2 Item 6 | STRING |  | 9 |  |
| CUST40FV | 40.  Follow up with lender on doc turn time (LA) | DATE |  | 0 |  |
| CX.MTGTECH.FSR.5.1 | File Setup Review - Secontion 5 Item 1 | STRING |  | 9 |  |
| CX.UWSNAPPROP15 | UW Snapshot Property - Warn Units | STRING | iif([#16]=[#CX.UWSNAPPROP05],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.PTD.UW.REV.1.2 | PTD UW Review - Section 1 Item 2 | STRING |  | 9 |  |
| CX.UWSNAPLIA04 | UW Snapshot Liabilities - Hsg Ratio | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.4.1 | PTD UW Review - Section 4 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.5 | PTD UW Review - Section 1 Item 5 | STRING |  | 9 |  |
| CX.UWSNAPPROG01 | UW Snapshot Program - Channel | STRING |  | 30 |  |
| CX.ATAPPDISCLDATE | At Application Disclosure Due Date | DATE | iif([2626]<>""  AND [4000]<>""  AND [4002]<>""  AND [65]<>""  AND [IRS4506.X1]<>""  AND [1240]<>"",Today,"") | 0 |  |
| CX.PROCSUBMCHK03 | ProcSubmChk - Loan Progam | X |  | 0 |  |
| CUST24FV | 24.  Order Title, Escrow, & Appraisal (LA) | DATE |  | 0 |  |
| CX.UWSNAPPROP01 | UW Snapshot Property - County | STRING |  | 25 |  |
| CUST19FV | 19.  Proactive Pre-qual Letter (LC) | DATE |  | 0 |  |
| CUST30FV | 30.  Follow up with lender on approval (LA) | DATE |  | 0 |  |
| CUST15FV | 15.  Call client (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.DT | PTD Closing Review - Date/Time Completed | STRING |  | 99 |  |
| CX.UWSNAPTIME | UW Snapshot Time | STRING |  | 25 |  |
| CX.UWSNAPPROG15 | UW Snapshot Program - Warn Spec Prog | STRING | iif([CX.SEC003]=[CX.UWSNAPPROG05],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECH.FSR.4.2 | File Setup Review - Secontion 4 Item 2 | STRING |  | 9 |  |
| CUST66FV |  | NONE |  | 0 |  |
| CX.EXTPRICE2 | Lock Ext Price 2 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.42 | PTD UW Review - Section 1 Item 42 | STRING |  | 9 |  |
| CX.UWSNAPINC13 | UW Snapshot Income - Warn 03 | STRING | iif([#736]=[#CX.UWSNAPINC03],"","REVIEW DIFFERENCE") | 25 |  |
| CX.MTGTECHFOLDERS | Field for Auto Move Plugin | STRING |  | 30 |  |
| CX.PROCSUBMTASK11 | ProcSubm - Title Commitment | X |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.3 | PTD Closing Review - Section 1 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.2.3 | PTD Closing Review - Section 2 Item 3 | STRING |  | 9 |  |
| CUST29FV | 29.  Call Realtor with Weekly Friday Update (LC) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.7 | PTD UW Review - Section 1 Item 7 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.7.1 | PTD UW Review - Section 7 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.17 | PTD UW Review - Section 1 Item 17 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.10.8 | PTD UW Review - Section 10 Item 8 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.24 | PTD UW Review - Section 1 Item 24 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.11 | PTD Closing Review - Section 5 Item 11 | STRING |  | 9 |  |
| CUST58FV |  | NONE |  | 0 |  |
| CX.MTGTECH.FSR.3.1 | File Setup Review - Secontion 3 Item 1 | STRING |  | 9 |  |
| CX.UWSUSPENSENOTES | UW's Suspense Notes | STRING |  | 3000 |  |
| CUST32FV | 32.  Complete & send Commitment Letter (LA) | DATE |  | 0 |  |
| CUST53FV | 53.  Send copy of HUD to CPA (LA) | DATE |  | 0 |  |
| CUST47FV | 47.  Prepare Closing Cost Comparison Sheet (LC) | DATE |  | 0 |  |
| CX.UWSNAPLIA14 | UW Snapshot Liabilities - Warn Hsg Ratio | STRING | iif([#740]=[#CX.UWSNAPLIA04],"","REVIEW DIFFERENCE") | 25 |  |
| CX.UWSNAPPROP11 | UW Snapshot Property - Warn County | STRING | iif([13]=[CX.UWSNAPPROP01],"","REVIEW DIFFERENCE") | 25 |  |
| CUST99FV | House/Self-Gen | DROPDOWNLIST |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.41 | PTD UW Review - Section 1 Item 41 | STRING |  | 9 |  |
| CUST60FV |  | NONE |  | 0 |  |
| CX.WKSHT1COMMENTS | Worksheet Pg 1 Comments | STRING |  | 1000 |  |
| CX.MTGTECH.PTD.UW.REV.1.19 | PTD UW Review - Section 1 Item 19 | STRING |  | 9 |  |
| CUST70FV |  | NONE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.6 | PTD UW Review - Section 1 Item 6 | STRING |  | 9 |  |
| CX.SCHDCLSOINGTIME | Schd Closing Time | STRING |  | 10 |  |
| CX.BRANCHCOMP | Branch Comp | DECIMAL_2 | [#2]*((([#CX.NETMARGIN]+[CX.BRANCHMARGIN]-([CX.LOCOMPDOLLARS]/[#2]*100))-100)/100)+500-[#CX.CORPPRO] | 0 |  |
| CX.FICOREPFICOLOAN | Rep FICO (Loan) | INTEGER | min([CX.FICOREPFICOBORR1],[CX.FICOREPFICOBORR2],[CX.FICOREPFICOBORR3],[CX.FICOREPFICOBORR4],[CX.FICOREPFICOBORR5],[CX.FICOREPFICOBORR6]) | 0 |  |
| CX.MTGTECH.PTD.UW.REV.1.27 | PTD UW Review - Section 1 Item 27 | DECIMAL_3 |  | 0 |  |
| CX.MTGTECH.PTD.CLO.REV.1.15 | PTD Closing Review - Section 1 Item 15 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.1.36 | PTD UW Review - Section 1 Item 36 | STRING |  | 9 |  |
| CX.CLEARTOCLOSEEXP | Clear to Close Expected | DATE |  | 0 |  |
| CUST25FV | 25.  Submit File (LA) | DATE |  | 0 |  |
| CX.MTGTECH.PTD.UW.REV.8.2 | PTD UW Review - Section 8 Item 2 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.5.4 | PTD Closing Review - Section 5 Item 4 | STRING |  | 9 |  |
| CX.UWSNAPLIA02 | UW Snapshot Liabilities - Total Liab Pmts | DECIMAL_2 |  | 0 |  |
| CUST44FV | 44.  Receive final HUD (LA) | DATE |  | 0 |  |
| CX.SRPINCOMEPB | SRPINCOMEPB | DECIMAL_2 |  | 0 |  |
| CX.MTGTECH.FSR.4.3 | File Setup Review - Secontion 4 Item 3 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.UW.REV.9.1 | PTD UW Review - Section 9 Item 1 | STRING |  | 9 |  |
| CX.MTGTECH.PTD.CLO.REV.2.7 | PTD Closing Review - Section 2 Item 7 | STRING |  | 9 |  |
| CX.UWSNAPPROG06 | UW Snapshot Program - Loan Type | STRING |  | 25 |  |
| CX.MTGTECH.PTD.UW.REV.4.7 | PTD UW Review - Section 4 Item 7 | STRING |  | 9 |  |
