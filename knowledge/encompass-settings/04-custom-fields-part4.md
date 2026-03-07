# Custom Fields (Part 4)

| fieldID | description | format | maxLength | calculation |
| --- | --- | --- | --- | --- |
| CX.IRC.103 | Is the index disclosed in the ARM program current (no older than 1year)? | X | 0 |  |
| CX.IRC.201 | Was the 92900a completed (pages 1,2 & 4)? | X | 0 |  |
| CX.IRC.202 | File contains all FHA disclosures? | X | 0 |  |
| CX.IRC.203 | Assumption Notice - Release of Liability | X | 0 |  |
| CX.IRC.204 | Consumer Choice Disclosure Notice | X | 0 |  |
| CX.IRC.205 | Notice to Homebuyers (HUD 92900B) | X | 0 |  |
| CX.IRC.206 | FHA Home Inspection (HUD-92564-CN) | X | 0 |  |
| CX.IRC.207 | Face-to-Face Interview Statement | X | 0 |  |
| CX.IRC.301 | Was the 26-1802a complete (pages 1,2, & 4)? | X | 0 |  |
| CX.IRC.302 | File contains all VA disclosures? | X | 0 |  |
| CX.IRC.303 | Request for Certificate of Eligibility (VA 26-1880) | X | 0 |  |
| CX.IRC.304 | VA Debt Questionnaire (VA 26-0551) | X | 0 |  |
| CX.IRC.305 | VA Federal Collection Policy Notice (VA 26-0503) | X | 0 |  |
| CX.IRC.306 | VA Interest Rate and Discount Statement | X | 0 |  |
| CX.IRC.307 | VA Military Counseling Checklist | X | 0 |  |
| CX.IRC.308 | VA Rights of VA Loan Borrowers | X | 0 |  |
| CX.IRC.309 | VA Verification of Benefit (VA 26-8978) | X | 0 |  |
| CX.IRC.310 | Nearest Living Relative Statement | X | 0 |  |
| CX.ISFOLDERDENIED | Is the Loan in the Denied Loan Folder? | STRING | 99 | IIF([CX.LOANFOLDER] = "Denied","Yes","No") |
| CX.ISGBLOAN | Is a Goldwater Loan | YN | 0 |  |
| CX.ISTHISEXCEP | Exception Dropdown | DROPDOWNLIST | 0 |  |
| CX.ISTHISEXCEPUW | Exception Dropdown UW | DROPDOWNLIST | 0 |  |
| CX.IV.INVESTOR | IV Investor | DROPDOWNLIST | 0 |  |
| CX.IV.LO.TARGET | IV LO Target | DROPDOWNLIST | 0 |  |
| CX.IV.ME1.B1 | IV.ME1.B1 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B2 | IV.ME1.B2 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B3 | IV.ME1.B3 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B4 | IV.ME1.B4 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B5 | IV.ME1.B5 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B6 | IV.ME1.B6 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B7 | IV.ME1.B7 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.B8 | IV.ME1.B8 | DECIMAL_2 | 0 | sumany([CX.IV.ME1.B1],[CX.IV.ME1.B2],[CX.IV.ME1.B3],[CX.IV.ME1.B4],[CX.IV.ME1.B5],[CX.IV.ME1.B6],[CX |
| CX.IV.ME1.CB1 | IV.ME1.CB1 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB2 | IV.ME1.CB2 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB3 | IV.ME1.CB3 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB4 | IV.ME1.CB4 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB5 | IV.ME1.CB5 | DECIMAL_3 | 0 |  |
| CX.IV.ME1.CB6 | IV.ME1.CB6 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB7 | IV.ME1.CB7 | DECIMAL_2 | 0 |  |
| CX.IV.ME1.CB8 | IV.ME1.CB8 | DECIMAL_2 | 0 |  |
| CX.IV.RESTRICT1 | IV Restricted 1 | DROPDOWNLIST | 0 |  |
| CX.IV.RESTRICT2 | IV Restricted 2 | DROPDOWNLIST | 0 |  |
| CX.JP.CB.DD.FILE.CNTS | JP.CB.DD.FILE.CNTS | DROPDOWNLIST | 0 |  |
| CX.JP.CB.DD.FILE.CNTS.TS | JP.CB.DD.FILE.CNTS.TS | STRING | 75 |  |
| CX.JP.CB.DD.ITP | JP.CB.DD.ITP | DROPDOWNLIST | 0 |  |
| CX.JP.CB.DD.ITP.TS | JP.CB.DD.ITP.TS | STRING | 75 |  |
| CX.JP.COMMENTS | JP.COMMENTS | STRING | 1500 |  |
| CX.JP.DD.AB | JP.DD.AB | DROPDOWNLIST | 0 |  |
| CX.JP.DD.AB.TS | JP.DD.AB.TS | STRING | 75 |  |
| CX.JP.DD.COE | JP.DD.COE | DROPDOWNLIST | 0 |  |
| CX.JP.DD.COE.TS | JP.DD.COE.TS | STRING | 75 |  |
| CX.JP.DD.FCA | JP.DD.FCA | DROPDOWNLIST | 0 |  |
| CX.JP.DD.FCA.TS | JP.DD.FCA.TS | STRING | 75 |  |
| CX.JP.DD.HOI | JP.DD.HOI | DROPDOWNLIST | 0 |  |
| CX.JP.DD.HOI.TS | JP.DD.HOI.TS | STRING | 75 |  |
| CX.JP.DD.ID | JP.DD.ID | DROPDOWNLIST | 0 |  |
| CX.JP.DD.ID.TS | JP.DD.ID.TS | STRING | 75 |  |
| CX.JP.DD.LN | JP.DD.LN | DROPDOWNLIST | 0 |  |
| CX.JP.DD.LN.TS | JP.DD.LN.TS | STRING | 75 |  |
| CX.JP.DD.MP | JP.DD.MP | DROPDOWNLIST | 0 |  |
| CX.JP.DD.MP.TS | JP.DD.MP.TS | STRING | 75 |  |
| CX.JP.DD.OC | JP.DD.OC | DROPDOWNLIST | 0 |  |
| CX.JP.DD.OC.TS | JP.DD.OC.TS | STRING | 75 |  |
| CX.JP.DD.OF | JP.DD.OF | DROPDOWNLIST | 0 |  |
| CX.JP.DD.OF.TS | JP.DD.OF.TS | STRING | 75 |  |
| CX.JP.DD.OS | JP.DD.OS | DROPDOWNLIST | 0 |  |
| CX.JP.DD.OS.TS | JP.DD.OS.TS | STRING | 75 |  |
| CX.JP.DD.PP | JP.DD.PP | DROPDOWNLIST | 0 |  |
| CX.JP.DD.PP.TS | JP.DD.PP.TS | STRING | 75 |  |
| CX.JP.DD.RP | JP.DD.RP | DROPDOWNLIST | 0 |  |
| CX.JP.DD.RP.TS | JP.DD.RP.TS | STRING | 75 |  |
| CX.JP.DD.RPL | JP.DD.RPL | DROPDOWNLIST | 0 |  |
| CX.JP.DD.RPL.TS | JP.DD.RPL.TS | STRING | 75 |  |
| CX.JP.DD.VOE | JP.DD.VOE | DROPDOWNLIST | 0 |  |
| CX.JP.DD.VOE.TS | JP.DD.VOE.TS | STRING | 75 |  |
| CX.JR.PIPELINE.MGR.EMAIL | Jr. Pipeline Manager Email | STRING | 100 |  |
| CX.JR.PIPELINE.MGR.MOBILE | Jr. Pipeline Manager Mobile | PHONE | 0 |  |
| CX.JR.PIPELINE.MGR.NAME | Jr Pipeline Manager Name | STRING | 100 |  |
| CX.JR.PIPELINE.MGR.OFFICE | Jr. Pipeline Manager Office | PHONE | 0 |  |
| CX.JR.UW.MANAGER.EMAIL | Jr. UW Supervisor Email | STRING | 100 | iif([LoanTeamMember.Email.Jr.Underwriter] = "jlakritz@kellermortgage.com", "asnead@kellermortgage.co |
| CX.JUMBO.PROGRAM | Jumbo Program | STRING | 75 |  |
| CX.JV.BPS | JV BPS | DECIMAL_3 | 0 |  |
| CX.JV.COMP | JV Comp | DECIMAL_2 | 0 | [#CX.JV.BPS] * [#2] |
| CX.JV.COMP.FINAL | Final JV Comp | DECIMAL_2 | 0 | iif([CX.JV.COMP] > "15000.00", "15000.00", [CX.JV.COMP]) |
| CX.JV.COMPLIANCE.EMAIL | Compliance Email | STRING | 250 |  |
| CX.KM.BLEND.AUDITLOG | KM Blend - Audit Log | STRING | 80000 |  |
| CX.KM.COVERED.INITIATED | Keller Covered Initiated | DROPDOWNLIST | 0 |  |
| CX.KM.COVERED.INITIATED.BY | Keller Covered Initiated By | AUDIT | 0 | Audit([CX.KM.COVERED.INITIATED], 1) |
| CX.KM.COVERED.INITIATED.DT | Keller Covered Initiated Date | AUDIT | 0 | Audit([CX.KM.COVERED.INITIATED], 2) |
| CX.KM.COVERED.INITIATED.NO | Keller Covered - No - Reason | STRING | 250 |  |
| CX.KM.DISCUPDATE | Plugin - Disclosure Entry Update | STRING | 30 |  |
| CX.KM.MOVETOFOLDER | MOVE | STRING | 50 |  |
| CX.KM.PC.COUNT.INSURE | Post Closing Cond. Mgmt. Insuring Count | INTEGER | 0 | [#CX.KM.PC.RBTN.INSURING.1]+[#CX.KM.PC.RBTN.INSURING.2]+[#CX.KM.PC.RBTN.INSURING.3]+[#CX.KM.PC.RBTN. |
| CX.KM.PC.COUNT.INVEST | Post Closing Cond. Mgmt. Investing Count | INTEGER | 0 | [#CX.KM.PC.RBTN.INVESTING.1]+[#CX.KM.PC.RBTN.INVESTING.2]+[#CX.KM.PC.RBTN.INVESTING.3]+[#CX.KM.PC.RB |
| CX.KM.PC.COUNT.SHIP | Post Closing Cond. Mgmt. Shipping Count | INTEGER | 0 | [#CX.KM.PC.RBTN.SHIPPING.1]+[#CX.KM.PC.RBTN.SHIPPING.2]+[#CX.KM.PC.RBTN.SHIPPING.3]+[#CX.KM.PC.RBTN. |
| CX.KM.PC.COUNT.TRAILING | Post Closing Cond. Mgmt. Trailing Count | INTEGER | 0 | [#CX.KM.PC.RBTN.TRAILING.1]+[#CX.KM.PC.RBTN.TRAILING.2]+[#CX.KM.PC.RBTN.TRAILING.3]+[#CX.KM.PC.RBTN. |
| CX.KM.PC.RBTN.1 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.10 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.11 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.12 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.13 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.14 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.15 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.16 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.17 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.18 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.19 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.2 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.20 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.3 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.4 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.5 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.6 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.7 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.8 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.9 | Post Closing Cond. Mgmt. Category | STRING | 30 |  |
| CX.KM.PC.RBTN.INSURING.1 | Post Closing Cond. Mgmt. Insuring Radio Button Value | INTEGER | 0 |  |
| CX.KM.PC.RBTN.INVESTING.1 | Post Closing Cond. Mgmt. Ivesting Radio Button Value | INTEGER | 0 |  |
| CX.KM.PC.RBTN.SHIPPING.1 | Post Closing Cond. Mgmt. Shipping Radio Button Value | INTEGER | 0 |  |
| CX.KM.PC.RBTN.TRAILING.1 | Post Closing Cond. Mgmt. Trailing Radio Button Value | INTEGER | 0 |  |
| CX.KM.TEMPLATETOSEND | Custom Email Template To Send | STRING | 99 |  |
| CX.KMAGENTAPPSTATUS | KM Agent App Status | STRING | 20 |  |
| CX.KRIS | Kris | STRING | 8000 |  |
| CX.KWUIDLOANBA | KWUID Loan Buyer's Agent | STRING | 10 |  |
| CX.KWUIDLOANLA | KW UID Loan Listing Agent | STRING | 10 |  |
| CX.KYC.AUTSIGADDRESS | Authotized Signer Address | STRING | 50 |  |
| CX.KYC.AUTSIGCITY | Authorized Signer City | STRING | 50 |  |
| CX.KYC.AUTSIGDOB | Authorized Signer DOB | DATE | 0 |  |
| CX.KYC.AUTSIGIDNUM | Authorized Signer ID Number | STRING | 20 |  |
| CX.KYC.AUTSIGIDTP | Authorized Signer ID Type | DROPDOWNLIST | 0 |  |
| CX.KYC.AUTSIGIDTPISSUE | Authorized Signer ID Issuance | STRING | 20 |  |
| CX.KYC.AUTSIGNAME | Authorized Signer Name | STRING | 50 |  |
| CX.KYC.AUTSIGSSN | Authorized Signer Social Security Number | SSN | 0 |  |
| CX.KYC.AUTSIGSTATE | Authorized Signer State | STATE | 0 |  |
| CX.KYC.AUTSIGZIP | Authorized Signer ZIP | ZIPCODE | 0 |  |
| CX.KYC.BENEFOWN | BENEFICIAL OWNER | YN | 0 |  |
| CX.KYC.BORROWER | BORROWER | YN | 0 |  |
| CX.KYC.CB.2 | Foreignbank | YN | 0 |  |
| CX.KYC.CB.4 | BankLetter | YN | 0 |  |
| CX.KYC.CB.6 | ReferenceLetter | YN | 0 |  |
| CX.KYC.CER.MULTISIG | Certificate of Beneficial Owner(s) Multi Signers | DROPDOWNLIST | 0 |  |
| CX.KYC.CER.NAMTITL.CBO | Name and Title Certificate of Beneficial Owner | STRING | 200 |  |
| CX.KYC.CER.SIGLINE1 | Certificate of Beneficial Owner(s) Signer Line 1 | STRING | 200 |  |
| CX.KYC.CER.SIGLINE2 | Certificate of Beneficial Owner(s) Signer Line 2 | STRING | 200 |  |
| CX.KYC.CER.SIGLINE3 | Certificate of Beneficial Owner(s) Signer Line 3 | STRING | 200 |  |
| CX.KYC.CER.SIGLINE4 | Certificate of Beneficial Owner(s) Signer Line 4 | STRING | 200 |  |
| CX.KYC.CER.SIGLINE5 | Certificate of Beneficial Owner(s) Signer Line 5 | STRING | 200 |  |
| CX.KYC.CER.SIGLINE6 | Certificate of Beneficial Owner(s) Signer Line 6 | STRING | 200 |  |
| CX.KYC.COBORR | COBORR | YN | 0 |  |
| CX.KYC.COOWN | COOWNER | YN | 0 |  |
| CX.KYC.CTC | Cash to close verification | YN | 0 |  |
| CX.KYC.CURRBANKSTAT | CURRENT BANK STAT | YN | 0 |  |
| CX.KYC.DO | DO | YN | 0 |  |
| CX.KYC.DOES | DO(eS) | YN | 0 |  |
| CX.KYC.ENT | KYC LEGAL ENTITY | YN | 0 |  |
| CX.KYC.GIFT | GIFT? | YN | 0 |  |
| CX.KYC.GUARANT | GUARANTOR | YN | 0 |  |
| CX.KYC.IND | KYC INDIVIDUAL | YN | 0 |  |
| CX.KYC.INHERITANCE | INHERITANCE? | YN | 0 |  |
| CX.KYC.LOTTERY | LOTTERY? | YN | 0 |  |
| CX.KYC.OTHER | OTHER? | YN | 0 |  |
| CX.KYC.OWRPER1B1 | KYC Ownership % 1 B 1 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER1B2 | KYC Ownership % 1 B 2 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER2B1 | KYC Ownership % 2 B 1 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER2B2 | KYC Ownership % 2 B 2 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER3B1 | KYC Ownership % 3 B 1 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER3B2 | KYC Ownership % 3 B 2 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER4B1 | KYC Ownership % 4 B 1 | DECIMAL_2 | 0 |  |
| CX.KYC.OWRPER4B2 | KYC Ownership % 4 B 2 | DECIMAL_2 | 0 |  |
| CX.KYC.PENSION | PENSION? | YN | 0 |  |
| CX.KYC.PEP | YES PEP | YN | 0 |  |
| CX.KYC.PEPN | NO PEP | YN | 0 |  |
| CX.KYC.POWEROFATT | POWER OF ATT | YN | 0 |  |
| CX.KYC.SALEOFPROP | SALE OF PROP? | YN | 0 |  |
| CX.KYC.SELFEMP | SELFEMPLOYED? | YN | 0 |  |
| CX.KYC.SELLER | SELLER | YN | 0 |  |
| CX.KYC.USBANK | USBANK? | YN | 0 |  |
| CX.KYC.VERIFODDEP | verification of deposit | YN | 0 |  |
| CX.KYCBENEOWN.2B1 | KYC BENEFICIAL OWNER COMPARISON (325) | YN | 0 |  |
| CX.KYCBENEOWN.3B1 | KYC BENEFICIAL OWNER  | YN | 0 |  |
| CX.KYCBENEOWN.4B2 | KYC BENEFICIAL OWNER | YN | 0 |  |
| CX.KYCBKLTR.2B1 | KYC BANK LETTER | YN | 0 |  |
| CX.KYCBKLTR.3B1 | KYC BANK LETTER | YN | 0 |  |
| CX.KYCBKLTR.4B2 | KYC BANK LETTER | YN | 0 |  |
| CX.KYCBORR325.2B1 | KYC BORROWER COMPARISON (325) | YN | 0 |  |
| CX.KYCBORR325.3B1 | KYC BORROWER | YN | 0 |  |
| CX.KYCBORR325.4B2 | KYC BORROWER | YN | 0 |  |
| CX.KYCBUSTYPE.2B1 | KYC BUSINESS TYPE BORR 1 | STRING | 24651 |  |
| CX.KYCBUSTYPE.2B2 | KYC BUSINESS TYPE BORR 2 | STRING | 24651 |  |
| CX.KYCBUSTYPE.3B1 | KYC BUSINESS TYPE | STRING | 500 |  |
| CX.KYCBUSTYPE.3B2 | KYC BUSINESS TYPE | STRING | 500 |  |
| CX.KYCBUSTYPE.4B1 | KYC BUSINESS TYPE | STRING | 500 |  |
| CX.KYCBUSTYPE.4B2 | KYC BUSINESS TYPE | STRING | 500 |  |
| CX.KYCCB325.2B1 | KYC CO-BORROWER COMPARISON (325) | YN | 0 |  |
| CX.KYCCB325.4B2 | KYC CO-BORROWER | YN | 0 |  |
| CX.KYCCBCOUNTRYOFRISK | Co-Borrower Country of Risk | STRING | 60 |  |
| CX.KYCCBID.2B2 | BORROWER KYC ID TYPE BORR 2 | DROPDOWNLIST | 0 |  |
| CX.KYCCBID.3B2 | KYC CO-BORROWER ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCCBID.4B2 | KYC CO-BORRWER ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCCBKSTM.2B1 | KYC CURRENT BANK STATEMENT | YN | 0 |  |
| CX.KYCCBKSTM.3B1 | KYC CURRENT BANK STATEMENT | YN | 0 |  |
| CX.KYCCBKSTM.4B2 | KYC BANK STATEMENT | YN | 0 |  |
| CX.KYCCO325.2B1 | KYC CO-OWNER COMPARISON (325) | YN | 0 |  |
| CX.KYCCO325.4B2 | KYC CO-OWNERS | YN | 0 |  |
| CX.KYCCOBORR.3B1 | KYC CO-BORROWER | YN | 0 |  |
| CX.KYCCOOWN.3B1 | KYC CO-OWNERS | YN | 0 |  |
| CX.KYCCOUNTRY.2B1 | KYC COUNTRY ISSUED BORR 1 | STRING | 24651 |  |
| CX.KYCCOUNTRY.2B2 | KYC COUNTRY ISSUED BORR 2 | STRING | 24651 |  |
| CX.KYCCOUNTRY.3B1 | KYC COUNTRY ID ISSUED  | STRING | 50 |  |
| CX.KYCCOUNTRY.3B2 | KYC COUNTRY ISSUED | STRING | 50 |  |
| CX.KYCCOUNTRY.4B1 | KYC COUNTRY ISSUED | STRING | 50 |  |
| CX.KYCCOUNTRY.4B2 | KYC COUNTRY ISSUED | STRING | 50 |  |
| CX.KYCDATEISSUE.2B1 | KYC DATE ISSUED BORR 1 | STRING | 24651 |  |
| CX.KYCDATEISSUE.2B2 | KYC DATE ISSUED BORR 2 | STRING | 24651 |  |
| CX.KYCDOCTYPE.2B1 | KYC ADDRESS DOC TYPE BORR 1 | DROPDOWNLIST | 0 |  |
| CX.KYCDOCTYPE.2B2 | KYC ADDRESS DOC TYPE BORR 2 | DROPDOWNLIST | 0 |  |
| CX.KYCDOCTYPE.3B1 | KYC ADDRESS DOC TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCDOCTYPE.3B2 | KYC ADDRESS DOC TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCDOCTYPE.4B1 | KYC ADDRESS DOC TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCDOCTYPE.4B2 | KYC ADDRESS DOC TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCDOES.2B1 | KYC DOES YES | YN | 0 |  |
| CX.KYCDOES.3B1 | KYC DOES | YN | 0 |  |
| CX.KYCDOES.4B2 | KYC DOES | YN | 0 |  |
| CX.KYCDOESNOT.2B1 | KYC DOES NOT N | YN | 0 |  |
| CX.KYCDOESNOT.3B1 | KYC DOES NOT | YN | 0 |  |
| CX.KYCDOESNOT.4B2 | KYC DOES NOT | YN | 0 |  |
| CX.KYCDTEBO | KYC BANK OFFICER CERT DATE | DATE | 0 |  |
| CX.KYCDTEISSUED.3B1 | KYC ID DATE OF ISSUE | DATE | 0 |  |
| CX.KYCDTEISSUED.3B2 | KYC ID DATE OF ISSUE | DATE | 0 |  |
| CX.KYCDTEISSUED.4B1 | KYC ID DATE OF ISSUE | DATE | 0 |  |
| CX.KYCDTEISSUED.4B2 | KYC ID DATE OF ISSUE | DATE | 0 |  |
| CX.KYCEXPINC.2B1 | KYC EXPLAIN INCOME | STRING | 1000 |  |
| CX.KYCEXPINC.3B1 | KYC EXPLAIN INCOME | STRING | 500 |  |
| CX.KYCEXPINC.4B2 | KYC EXPLAIN INCOME | STRING | 500 |  |
| CX.KYCFNB.2B1 | KYC FOREIGN BANK | YN | 0 |  |
| CX.KYCFNB.3B1 | KYC FOREIGN BANK | YN | 0 |  |
| CX.KYCFNB.4B2 | KYC FOREIGN BANK | YN | 0 |  |
| CX.KYCGART325.2B1 | KYC GUARANTOR COMPARISON (325) | YN | 0 |  |
| CX.KYCGART325.3B1 | KYC GUARANTOR | YN | 0 |  |
| CX.KYCGART325.4B2 | KYC GUARANTORS | YN | 0 |  |
| CX.KYCGIFT.2B1 | KYC GIFT | YN | 0 |  |
| CX.KYCGIFT.3B1 | KYC GIFT | YN | 0 |  |
| CX.KYCGIFT.4B2 | KYC GIFT | YN | 0 |  |
| CX.KYCID.2B1 | BORROWER KYC ID TYPE BORR 1 | DROPDOWNLIST | 0 |  |
| CX.KYCID.3B1 | BORROWER KYC ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCID.4B1 | KYC BORROWER ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCIDEXP.2B1 | KYC ID DATE EXPIRES BORR 1 | STRING | 24651 |  |
| CX.KYCIDEXP.2B2 | KYC ID DATE EXPIRES BORR 2 | STRING | 24651 |  |
| CX.KYCIDEXP.3B1 | KYC ID EXPIRATION DATE | DATE | 0 |  |
| CX.KYCIDEXP.3B2 | KYC ID EXPIRATION DATE | DATE | 0 |  |
| CX.KYCIDEXP.4B1 | KYC ID EXPIRATION DATE | DATE | 0 |  |
| CX.KYCIDEXP.4B2 | KYC ID EXPIRATION DATE | DATE | 0 |  |
| CX.KYCIDNUM.2B1 | KYC ID NUMBER BORR 1 | STRING | 24651 |  |
| CX.KYCIDNUM.2B2 | KYC ID NUMBER BORR 2 | STRING | 24651 |  |
| CX.KYCIDNUM.3B1 | KYC ID NUMBER  | STRING | 50 |  |
| CX.KYCIDNUM.3B2 | KYC ID NUMBER | STRING | 50 |  |
| CX.KYCIDNUM.4B1 | KYC ID NUMBER | STRING | 50 |  |
| CX.KYCIDNUM.4B2 | KYC ID NUMBER | STRING | 50 |  |
| CX.KYCINDV.2B1 | KYC ENTITY INDIVIDUAL | YN | 0 |  |
| CX.KYCINDV.3B1 | KYC ENTITY INDIVIDUAL | YN | 0 |  |
| CX.KYCINDV.4B1 | KYC ENTITY INDIVIDUAL | YN | 0 |  |
| CX.KYCINHERIT.2B1 | KYC INHERIT | YN | 0 |  |
| CX.KYCINHERIT.3B1 | KYC INHERITANCE | YN | 0 |  |
| CX.KYCINHERIT.4B2 | KYC INHERITANCE | YN | 0 |  |
| CX.KYCLEGAL.2B1 | KYC ENTITY LEGAL | YN | 0 |  |
| CX.KYCLEGAL.3B1 | KYC ENTITY LEGAL | YN | 0 |  |
| CX.KYCLEGAL.4B1 | KYC ENTITY LEGAL | YN | 0 |  |
| CX.KYCLOT.2B1 | KYC LOTTERY | YN | 0 |  |
| CX.KYCLOT.3B1 | KYC LOTTERY | YN | 0 |  |
| CX.KYCLOT.4B2 | KYC LOTTERY | YN | 0 |  |
| CX.KYCMGRAPP | KYC MANAGING DIRECTOR APPROVAL | DATE | 0 |  |
| CX.KYCOT.2B1 | KYC OTHER | YN | 0 |  |
| CX.KYCOT.3B1 | KYC OTHER | YN | 0 |  |
| CX.KYCOT.4B2 | KYC OTHER | YN | 0 |  |
| CX.KYCPEN.2B1 | KYC PENSION | YN | 0 |  |
| CX.KYCPEN.3B1 | KYC PENSION | YN | 0 |  |
| CX.KYCPEN.4B2 | KYC PENSION | YN | 0 |  |
| CX.KYCPEP.2B1 | YES PEP | YN | 0 |  |
| CX.KYCPEP.3B1 | YES PEP | YN | 0 |  |
| CX.KYCPEP.4B2 | YES PEP | YN | 0 |  |
| CX.KYCPEPEXP.2B1 | PEP EXPLANATION | STRING | 24000 |  |
| CX.KYCPEPEXP.3B1 | PEP EXPLANATION | STRING | 200 |  |
| CX.KYCPEPEXP.4B2 | PEP EXPLANATION | STRING | 500 |  |
| CX.KYCPEPN.2B1 | NO PEP | YN | 0 |  |
| CX.KYCPEPN.3B1 | KYC PEP N | YN | 0 |  |
| CX.KYCPEPN.4B2 | KYC PEP N | YN | 0 |  |
| CX.KYCPOA325.2B1 | KYC POA COMPARISON (325) | YN | 0 |  |
| CX.KYCPOA325.3B1 | KYC POWER OF ATTORNEY | YN | 0 |  |
| CX.KYCPOA325.4B2 | KYC POWER OF ATTORNEY | YN | 0 |  |
| CX.KYCREFLTR.2B1 | KYC REFERENCE LETTER | YN | 0 |  |
| CX.KYCREFLTR.3B1 | KYC REFERENCE LETTER | YN | 0 |  |
| CX.KYCREFLTR.4B2 | KYC REFERENCE LETTER | YN | 0 |  |
| CX.KYCSECONDARYID.2B1 | KYC SECONDARYID  BORR 1 | DROPDOWNLIST | 0 |  |
| CX.KYCSECONDARYID.2B2 | KYC SECONDARYID  BORR 2 | DROPDOWNLIST | 0 |  |
| CX.KYCSECONDARYID.3B1 | KYC SECONDARY ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCSECONDARYID.3B2 | KYC SECONDARY ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCSECONDARYID.4B1 | KYC SECONDARY ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCSECONDARYID.4B2 | KYC SECONDARY ID TYPE | DROPDOWNLIST | 0 |  |
| CX.KYCSELFEMP.2B1 | KYC SELF EMPLOYED | YN | 0 |  |
| CX.KYCSELFEMP.3B1 | KYC SELF EMPLOYED | YN | 0 |  |
| CX.KYCSELFEMP.4B2 | KYC SELF EMPLOYED | YN | 0 |  |
| CX.KYCSELL325.2B1 | KYC SELLER COMPARISON (325) | YN | 0 |  |
| CX.KYCSELL325.3B1 | KYC SELLER | YN | 0 |  |
| CX.KYCSELL325.4B2 | KYC SELLER | YN | 0 |  |
| CX.KYCSOP.2B1 | KYC SALE OF PROPERTY | YN | 0 |  |
| CX.KYCSOP.3B1 | KYC SALE OF PROPERTY | YN | 0 |  |
| CX.KYCSOP.4B2 | KYC SALE OF PROPERTY | YN | 0 |  |
| CX.KYCSRCWEALTH.2B1 | KYC SOURCE OF WEALTH  BORR 1 | STRING | 24651 |  |
| CX.KYCSRCWEALTH.2B2 | KYC SOURCE OF WEALTH BORR 2 | STRING | 24651 |  |
| CX.KYCSRCWEALTH.3B1 | KYC SOURCE OF WEALTH | DROPDOWNLIST | 0 |  |
| CX.KYCSRCWEALTH.3B2 | KYC SOURCE OF WEALTH | DROPDOWNLIST | 0 |  |
| CX.KYCSRCWEALTH.4B1 | KYC SOURCE OF WEALTH | DROPDOWNLIST | 0 |  |
| CX.KYCSRCWEALTH.4B2 | KYC SOURCE OF WEALTH | DROPDOWNLIST | 0 |  |
| CX.KYCUSB.2B1 | KYC US BANK | YN | 0 |  |
| CX.KYCUSB.3B1 | KYC US BANK | YN | 0 |  |
| CX.KYCUSB.4B2 | KYC US BANK | YN | 0 |  |
| CX.KYCVOD.2B1 | KYC VERIFICATION OF DEPOSIT | YN | 0 |  |
| CX.KYCVOD.3B1 | KYC VERIFICATION OF DEPOSIT | YN | 0 |  |
| CX.KYCVOD.4B2 | KYC VERIFICATION OF DEPOSIT | YN | 0 |  |
| CX.L770.LONG | L770 MMMM d, yyyy | STRING | 25 | [@L770] |
| CX.LA.CURRENT.RENT.AMT.1 | Current Rent Amount | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.10 | Current Rent Amount CC10 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.2 | Current Rent Amount CC2 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.3 | Current Rent Amount CC3 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.4 | Current Rent Amount CC4 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.5 | Current Rent Amount CC5 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.6 | Current Rent Amount CC6 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.7 | Current Rent Amount CC7 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.8 | Current Rent Amount CC8 | DECIMAL_2 | 0 |  |
| CX.LA.CURRENT.RENT.AMT.9 | Current Rent Amount CC9 | DECIMAL_2 | 0 |  |
| CX.LA.DRS.1 | Debt Service Ratio | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.10 | Debt Service Ratio CC10 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.2 | Debt Service Ratio CC2 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.3 | Debt Service Ratio CC3 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.4 | Debt Service Ratio CC4 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.5 | Debt Service Ratio CC5 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.6 | Debt Service Ratio CC6 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.7 | Debt Service Ratio CC7 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.8 | Debt Service Ratio CC8 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.DRS.9 | Debt Service Ratio CC9 | DECIMAL_2 | 0 | [#cx.prequal.total.prepaids] / [#cx.la.current.rent.amt] |
| CX.LA.RR.RENTAL.AMT.1 | RR Rental Amount | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.10 | RR Rental Amount CC 10 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.2 | RR Rental Amount CC2 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.3 | RR Rental Amount CC3 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.4 | RR Rental Amount CC4 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.5 | RR Rental Amount CC5 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.6 | RR Rental Amount CC6 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.7 | RR Rental Amount CC7 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.8 | RR Rental Amount CC8 | DECIMAL_2 | 0 |  |
| CX.LA.RR.RENTAL.AMT.9 | RR Rental Amount CC9 | DECIMAL_2 | 0 |  |
| CX.LAST.4SSN.BORR | Last 4 Digits of Borrower's SSN | STRING | 4 | Right([2870], 4) |
| CX.LAST.4SSN.COBORR | Last 4 Digits of Co-Borrower's SSN | STRING | 4 | Right([2876], 4) |
| CX.LAST.4SSN.COMORT1 | Last 4 Digits of CoMortgagors 1 SSN | STRING | 4 | Right([2882], 4) |
| CX.LAST.4SSN.COMORT2 | Last 4 Digits CoMortgagor 2 SNN | STRING | 4 | Right([2888], 4) |
| CX.LAST.CONTACT | Date Last Contacted | DATE | 0 |  |
| CX.LAST.SOLD | Last Time Home Was Sold  | DATE | 0 |  |
| CX.LAST.STATUS | Last Status | STRING | 500 |  |
| CX.LAST.STATUS.DATE | Last Status Date Update | DATE | 0 |  |
| CX.LAST.STATUS.DT | Last Status Date | DATE | 0 |  |
| CX.LASTDISCLOSED.LNTYPE | Last disclosed Loan Type | STRING | 99 |  |
| CX.LASTDISCLOSED.PURPOSE | Last disclosed Loan Purpose | STRING | 99 |  |
| CX.LASTSENTGFE | Last Sent GFE | DATE | 0 | iif(isempty([CX.LAST.SENT.GFE]) = TRUE , 
iif(isempty([3150]) = FALSE, [3150] , [3148]) , [CX.LAST. |
| CX.LASTSENTTIL | Last Sent TIL | DATE | 0 | iif(isempty([CX.LAST.SENT.TIL]) = TRUE , 
iif(isempty([3154]) = FALSE, [3154] , [3152]) , [CX.LAST. |
| CX.LATE.FEE.CB | Get Late Fee Box | X | 0 |  |
| CX.LATEFEEDAYSTEXT | Late Fee Days as alpha | STRING | 20 |  |
| CX.LATEFEEOVERRIDE | CX.LATEFEEOVERRIDE | STRING | 10 |  |
| CX.LC.EXEMPT | Exempt | DROPDOWNLIST | 0 |  |
| CX.LC.Q1 | 2 year residence history | X | 0 |  |
| CX.LC.Q10 | Funding Fee Purchase or Cash out  | X | 0 |  |
| CX.LC.Q11 | Funding Fee with Down payment  | X | 0 |  |
| CX.LC.Q12 | Certification of Eligibility   | X | 0 |  |
| CX.LC.Q13 | COE, if Active Duty Service Member | X | 0 |  |
| CX.LC.Q14 | Loan Analysis  | X | 0 |  |
| CX.LC.Q15 | Loans Summary | X | 0 |  |
| CX.LC.Q16 | Case # Assignment/Appraisal Info | X | 0 |  |
| CX.LC.Q17 | NOV issued  | X | 0 |  |
| CX.LC.Q18 | VA Lender Certification  | X | 0 |  |
| CX.LC.Q19 | Patriot Act Identification  | X | 0 |  |
| CX.LC.Q2 | Purchase Contract Fully executed | X | 0 |  |
| CX.LC.Q20 | Nearest Living Relative | X | 0 |  |
| CX.LC.Q21 | Alive & Well if POA or Active Duty | X | 0 |  |
| CX.LC.Q22 | Counseling Checklist (Active Duty & Reservist) | X | 0 |  |
| CX.LC.Q23 | VA Funding Fee .50% (Unless  Exempt) | X | 0 |  |
| CX.LC.Q24 | VA LIN | X | 0 |  |
| CX.LC.Q25 | VA COE | X | 0 |  |
| CX.LC.Q26 | Copy of 1st mortgage note | X | 0 |  |
| CX.LC.Q27 | VA Loan Comparison | X | 0 |  |
| CX.LC.Q28 | VA IRRRL Worksheet  | X | 0 |  |
| CX.LC.Q29 | Nearest Living Relative | X | 0 |  |
| CX.LC.Q3 | Purchase Contract Addendum  | X | 0 |  |
| CX.LC.Q30 | Alive & Well if POA or Active Duty | X | 0 |  |
| CX.LC.Q31 | FHA Case Assignment  | X | 0 |  |
| CX.LC.Q32 | Check Appraisal Date against Case # | X | 0 |  |
| CX.LC.Q33 | FHA Conditional Commitment completed | X | 0 |  |
| CX.LC.Q34 | FHA Refi Calculation Worksheet   | X | 0 |  |
| CX.LC.Q35 | FHA-FHA Refinance Authorization  | X | 0 |  |
| CX.LC.Q36 | 4506T | X | 0 |  |
| CX.LC.Q37 | Patriot Act Disclosure | X | 0 |  |
| CX.LC.Q38 | If new contruction | X | 0 |  |
| CX.LC.Q39 | MI Company | X | 0 |  |
| CX.LC.Q4 | Does borrower own additional properties | X | 0 |  |
| CX.LC.Q40 | Complete MI on ULDD | X | 0 |  |
| CX.LC.Q41 | HUD Addendum | X | 0 |  |
| CX.LC.Q42 | Check App Date against Case # | X | 0 |  |
| CX.LC.Q43 | Appraisal Logging | X | 0 |  |
| CX.LC.Q44 | Final HUD Addendum | X | 0 |  |
| CX.LC.Q45 | Final Transmittal | X | 0 |  |
| CX.LC.Q46 | AVM | X | 0 |  |
| CX.LC.Q47 | Seasoning Requirements | X | 0 |  |
| CX.LC.Q48 | Cash Out Limit | X | 0 |  |
| CX.LC.Q49 | Property not listed | X | 0 |  |
| CX.LC.Q5 | SS# Validation for all borrowers | X | 0 |  |
| CX.LC.Q50 | Utility Bill | X | 0 |  |
| CX.LC.Q6 | CAIVRS | X | 0 |  |
| CX.LC.Q7 | Cash out letter | X | 0 |  |
| CX.LC.Q8 | FHA Amendatory Clause  | X | 0 |  |
| CX.LC.Q9 | VA Escape Clause | X | 0 |  |
| CX.LCR.ALERT.1 | Lender Credit Request > Max Amount Approved | STRING | 1 | iif([#CX.LCR.FEE.TOTAL]>[#CX.LCR.SEC.MAX.AMT], "", "Y") |
| CX.LCR.ALERT.2 | HUD Lender Credit > Branch Manager Approved Amount | STRING | 1 | iif(([#L135]>[#CX.LCR.FEE.TOTAL] AND [3969] = "RESPA 2010 GFE and HUD-1") OR ([#1647] > [#CX.LCR.FEE |
| CX.LCR.BM.APPROVED | Lender Credit Requested - BM Approved | STRING | 75 |  |
| CX.LCR.BM.APPROVED.DATE | Lender Credit Requested - BM Approved Date | DATE | 0 |  |
| CX.LCR.CORP.APPROVED.BY | Lender Credit Requested - Corporate Approved By | STRING | 75 |  |
| CX.LCR.CORP.APPROVED.DATE | Lender Credit Requested - Corporate Approved Date | DATE | 0 |  |
| CX.LCR.CORP.CB.APPROVED | Lender Credit Requested - Corporate Approved  | X | 0 |  |
| CX.LCR.CORP.CB.REJECTED | Lender Credit Requested - Corporate Rejected | X | 0 |  |
| CX.LCR.CORP.NOTES | Lender Credit Requested - Corporate Notes | STRING | 1000 |  |
| CX.LCR.FEE.TOTAL | LCR Total Amount | DECIMAL_2 | 0 | SUM([#CX.LCR.FEE1.AMOUNT],
[#CX.LCR.FEE2.AMOUNT], 
[#CX.LCR.FEE3.AMOUNT],
[#CX.LCR.FEE4.AMOUNT]) |
| CX.LCR.FEE.TOTAL.POINTS | LCR Total Points | DECIMAL_3 | 0 | SUM([#CX.LCR.FEE1.POINTS],
[#CX.LCR.FEE2.POINTS], 
[#CX.LCR.FEE3.POINTS],
[#CX.LCR.FEE4.POINTS]) |
| CX.LCR.FEE1.AMOUNT | Lender Credit Requested Fee1 Amt | DECIMAL_2 | 0 |  |
| CX.LCR.FEE1.DESCRIPTION | Lender Credit Requested Fee1 Desc | STRING | 200 |  |
| CX.LCR.FEE1.POINTS | Lender Credit Requested Fee1 Pts | DECIMAL_3 | 0 | mult(DIV([CX.LCR.FEE1.AMOUNT],[2]),100) |
| CX.LCR.FEE1.REASON | Lender Credit Request Fee1 Reason | DROPDOWNLIST | 0 |  |
| CX.LCR.FEE2.AMOUNT | Lender Credit Requested Fee2 Amt | DECIMAL_2 | 0 |  |
| CX.LCR.FEE2.DESCRIPTION | Lender Credit Requested Fee2 Desc | STRING | 200 |  |
| CX.LCR.FEE2.POINTS | Lender Credit Requested Fee2 Pts | DECIMAL_3 | 0 | mult(DIV([CX.LCR.FEE2.AMOUNT],[2]),100) |
| CX.LCR.FEE2.REASON | Lender Credit Request Fee2 Reason | DROPDOWNLIST | 0 |  |
| CX.LCR.FEE3.AMOUNT | Lender Credit Requested Fee3 Amt | DECIMAL_2 | 0 |  |
| CX.LCR.FEE3.DESCRIPTION | Lender Credit Requested Fee3 Desc | STRING | 200 |  |
| CX.LCR.FEE3.POINTS | Lender Credit Requested Fee3 Pts | DECIMAL_3 | 0 | mult(DIV([CX.LCR.FEE3.AMOUNT],[2]),100) |
| CX.LCR.FEE3.REASON | Lender Credit Request Fee3 Reason | DROPDOWNLIST | 0 |  |
| CX.LCR.FEE4.AMOUNT | Lender Credit Requested Fee4 Amt | DECIMAL_2 | 0 |  |
| CX.LCR.FEE4.DESCRIPTION | Lender Credit Requested Fee4 Desc | STRING | 200 |  |
| CX.LCR.FEE4.POINTS | Lender Credit Requested Fee4 Pts | DECIMAL_3 | 0 | mult(DIV([CX.LCR.FEE4.AMOUNT],[2]),100) |
| CX.LCR.FEE4.REASON | Lender Credit Request Fee4 Reason | DROPDOWNLIST | 0 |  |
| CX.LCR.MGR.CB.APPROVED | LCR Manager Approved | X | 0 |  |
| CX.LCR.REQUESTOREMAIL | LCR - Requestor Email | STRING | 75 |  |
| CX.LCR.SEC.APPRVD.AMT | AFN Field | DECIMAL_2 | 0 |  |
| CX.LCR.SEC.MAX.AMT | Lender Credit Request - Secondary Max Amount | DECIMAL_2 | 0 |  |
| CX.LD.SALESPE.BPS | Total Sales PE | DECIMAL_3 | 0 | SumAny([#3375]+[#4769]+[#4773]+[#4777]+[#4781]) |
| CX.LE.1012 | Project Type | STRING | 100 |  |
| CX.LE.1041 | Property Type | STRING | 50 |  |
| CX.LE.1045 | Mtg Insurance | DECIMAL_2 | 0 |  |
| CX.LE.11 | Property Street | STRING | 80 |  |
| CX.LE.1172 | Loan Type | STRING | 40 |  |
| CX.LE.12 | Subj City | STRING | 50 |  |
| CX.LE.136 | Purchase Price | DECIMAL_2 | 0 |  |
| CX.LE.14 | Subj State | STRING | 2 |  |
| CX.LE.1401 | Loan Program | STRING | 60 |  |
| CX.LE.1405 | Real Estate Taxes | DECIMAL_2 | 0 |  |
| CX.LE.143 | Total Seller Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.15 | Subject Property Zipcode | ZIPCODE | 0 |  |
| CX.LE.16 | # of Units | INTEGER | 0 |  |
| CX.LE.1811 | Occupancy Status | STRING | 40 |  |
| CX.LE.19 | Loan Purpose | STRING | 40 |  |
| CX.LE.1959 | Index Type | STRING | 40 |  |
| CX.LE.2 | Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.2203 | Buy Side Lock LE | DECIMAL_2 | 0 |  |
| CX.LE.2293 | Impounds Waived | STRING | 20 |  |
| CX.LE.230 | HOI | DECIMAL_2 | 0 |  |
| CX.LE.2312 | AUS | STRING | 25 |  |
| CX.LE.233 | HOA Dues | DECIMAL_2 | 0 |  |
| CX.LE.3 | Rate | STRING | 5 |  |
| CX.LE.353 | LTV | DECIMAL_3 | 0 |  |
| CX.LE.356 | Appraised Value | INTEGER | 0 |  |
| CX.LE.4 | Loan Term | INTEGER | 0 |  |
| CX.LE.4000 | Borrower First Name | STRING | 40 |  |
| CX.LE.4002 | Borrower Last Name | STRING | 40 |  |
| CX.LE.4004 | Co-Borrower First Name | STRING | 40 |  |
| CX.LE.4006 | Co-Borrower Last Name | STRING | 40 |  |
| CX.LE.411 | Title Co Name | STRING | 35 |  |
| CX.LE.428 | Subordinate Financing | DECIMAL_2 | 0 |  |
| CX.LE.608 | Amortization | STRING | 20 |  |
| CX.LE.610 | Escrow Co Name | STRING | 35 |  |
| CX.LE.688 | Index | DECIMAL_3 | 0 |  |
| CX.LE.689 | Margin | DECIMAL_3 | 0 |  |
| CX.LE.740 | DTI (Front) | DECIMAL | 0 |  |
| CX.LE.742 | DTI (Back) | DECIMAL | 0 |  |
| CX.LE.799 | APR | DECIMAL_3 | 0 |  |
| CX.LE.910 | Total Borrower Income | DECIMAL_2 | 0 |  |
| CX.LE.911 | Total Co-Borrower Income | DECIMAL_2 | 0 |  |
| CX.LE.976 | CLTV | DECIMAL | 0 |  |
| CX.LE.APR.0 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.1 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.10 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.2 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.3 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.4 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.5 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.6 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.7 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.8 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.APR.9 | LE - APR | DECIMAL_3 | 0 |  |
| CX.LE.BASELNAMT.0 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.1 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.10 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.2 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.3 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.4 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.5 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.6 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.7 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.8 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BASELNAMT.9 | LE - Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.BKRPCC | Total Broker Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.BORPCC | Total Bwr Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.0 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.1 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.10 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.2 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.3 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.4 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.5 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.6 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.7 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.8 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANSHOP.9 | LE - Items You Can Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.0 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.1 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.10 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.2 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.3 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.4 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.5 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.6 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.7 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.8 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.CANTSHOP.9 | LE - Items You Can't Shop For | DECIMAL_2 | 0 |  |
| CX.LE.COPYTRIGGER | Field Used to Copy Fields | STRING | 1 |  |
| CX.LE.DATE.CHECK | LE Date Check | X | 0 |  |
| CX.LE.DIC.0 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.1 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.10 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.2 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.3 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.4 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.5 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.6 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.7 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.8 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DIC.9 | LE - Daily Interest Charges | DECIMAL_2 | 0 |  |
| CX.LE.DISC.ID.0 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.1 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.10 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.2 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.3 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.4 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.5 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.6 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.7 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.8 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.ID.9 | LE - Disclosure ID | STRING | 50 |  |
| CX.LE.DISC.INCLUDE.0 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.1 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.10 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.2 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.3 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.4 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.5 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.6 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.7 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.8 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.DISC.INCLUDE.9 | LE - Disclosure Included in timeline | YN | 0 |  |
| CX.LE.ESCROW.0 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.1 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.10 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.2 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.3 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.4 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.5 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.6 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.7 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.8 | LE - Escrows | YN | 0 |  |
| CX.LE.ESCROW.9 | LE - Escrows | YN | 0 |  |
| CX.LE.H.0 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.1 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.10 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.2 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.3 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.4 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.5 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.6 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.7 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.8 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.H.9 | LE - H Other Options Amt | DECIMAL_2 | 0 |  |
| CX.LE.HOI.0 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.1 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.10 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.2 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.3 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.4 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.5 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.6 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.7 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.8 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.HOI.9 | LE - Home Owners Insurance | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.0 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.1 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.10 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.2 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.3 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.4 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.5 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.6 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.7 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.8 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENDER.9 | LE - Total Lender Costs | DECIMAL_2 | 0 |  |
| CX.LE.LENPCC | Total Lender Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.0 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.1 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.10 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.2 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.3 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.4 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.5 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.6 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.7 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.8 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNAMT.9 | LE - Loan Amount | DECIMAL_2 | 0 |  |
| CX.LE.LNTYPE.0 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.1 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.10 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.2 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.3 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.4 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.5 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.6 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.7 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.8 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LNTYPE.9 | LE - Loan Type | STRING | 30 |  |
| CX.LE.LTP.0 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.1 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.10 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.2 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.3 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.4 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.5 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.6 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.7 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.8 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.LTP.9 | LE - Lender's Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.MIP.0 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.1 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.10 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.2 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.3 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.4 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.5 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.6 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.7 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.8 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MIP.9 | LE - MIP/PMI/ Funding Amt | DECIMAL_2 | 0 |  |
| CX.LE.MORNET.X67 | Doc Type | STRING | 100 |  |
| CX.LE.NEWHUD.X1149 | Total Lender Credit | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X23 | Contract Seller Credit | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X24 | Section 700 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X25 | Section 700 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X26 | Section 700 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X27 | Section 700 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X28 | Section 800 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X29 | Section 800 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X30 | Section 800 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X31 | Section 800 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X32 | Section 900 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X33 | Section 900 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X34 | Section 900 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X35 | Section 900 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X36 | Section 1000 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X37 | Section 1000 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X38 | Section 1000 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X39 | Section 1000 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X40 | Section 1100 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X41 | Section 1100 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X42 | Section 1100 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X43 | Section 1100 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X44 | Section 1200 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X4427 | Section 1400 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X4428 | Section 1400 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X45 | Section 1200 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X46 | Section 1200 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X47 | Section 1200 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X48 | Section 1300 Borrower Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X49 | Section 1300 Seller Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X50 | Section 1300 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X51 | Section 1300 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X52 | Section 1400 Other Total LE | DECIMAL_2 | 0 |  |
| CX.LE.NEWHUD2.X53 | Section 1400 Total LE | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.0 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.1 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.10 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.2 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.3 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.4 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.5 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.6 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.7 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.8 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.ORIG.9 | LE - Total Origination Fees | DECIMAL_2 | 0 |  |
| CX.LE.OTHPCC | Total Other Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.OTP.0 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.1 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.10 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.2 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.3 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.4 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.5 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.6 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.7 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.8 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.OTP.9 | LE - Owerners Title Policy | DECIMAL_2 | 0 |  |
| CX.LE.PRINTDT.0 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.1 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.10 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.2 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.3 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.4 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.5 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.6 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.7 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.8 | LE - Print Date | DATE | 0 |  |
| CX.LE.PRINTDT.9 | LE - Print Date | DATE | 0 |  |
| CX.LE.RATE.0 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.1 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.10 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.2 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.3 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.4 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.5 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.6 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.7 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.8 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.RATE.9 | LE - Rate | DECIMAL_3 | 0 |  |
| CX.LE.REC.0 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.1 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.10 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.2 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.3 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.4 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.5 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.6 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.7 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.8 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.REC.9 | LE - Recording Fees | DECIMAL_2 | 0 |  |
| CX.LE.TERM.0 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.1 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.10 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.2 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.3 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.4 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.5 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.6 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.7 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.8 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TERM.9 | LE - Term (Mos) | INTEGER | 0 |  |
| CX.LE.TNBPCC | Total Non-Bwr Paid CC | DECIMAL_2 | 0 |  |
| CX.LE.TOTPCC | Total Closing Costs | DECIMAL_2 | 0 |  |
| CX.LE.TT.0 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.1 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.10 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.2 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.3 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.4 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.5 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.6 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.7 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.8 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.TT.9 | LE - Transfer Taxes | DECIMAL_2 | 0 |  |
| CX.LE.VALIDATION.CHANGES | LE Validation Changes | DROPDOWNLIST | 0 | IIF([CX.LE.4000] <> "", IIF([#CX.LE.911] <> [#911] or 
[CX.LE.MORNET.X67] <> [MORNET.X67] or
[#CX. |
| CX.LE.VASUMM.X23 | Credit Score for Decision Making | INTEGER | 0 |  |
| CX.LEAD | Lead | X | 0 |  |
| CX.LEAD.SOURCE | Lead Source Dropdown | DROPDOWNLIST | 0 |  |
| CX.LEAD.SOURCE.OTHER | Lead Source: Other | STRING | 30 |  |
| CX.LEADSOURCE | Retail Lead Source | DROPDOWNLIST | 0 |  |
| CX.LECD.DISCLOSED | LE or CD Last Disclosed Date | STRING | 30 |  |
| CX.LEN.1109 | Number of characters in field 1109 | DECIMAL | 0 | [CX.ROUND.1109.HMDA]/10 |
| CX.LEN.2 | Number of characters in field 2 | DECIMAL | 0 | [CX.ROUND.2.HMDA]/10 |
| CX.LENDER.CREDIT | Lender Credits | DECIMAL_2 | 0 | sum([#L135], [#L149]) |
| CX.LENDER.CREDIT.PERCENT | Lender Credit % | DECIMAL_3 | 0 | MULT(DIV([#CX.LENDER.CREDIT],[#1109]),100) |
| CX.LENDER.CTC | Lender Cash to Close | DECIMAL_2 | 0 |  |
| CX.LENDER.ID.CODE | Lender Id Code | STRING | 10 | iif([14]="OH","12419400009","2419400021") |
| CX.LENDER.INTRATE | Lender Initial Rate | DECIMAL_2 | 0 |  |
| CX.LENDER.INTRATE.CD | Lender Interest Rate | DECIMAL_2 | 0 |  |
| CX.LENDER.LOANAMNT.BS.CD | Lender Base Loan Amount | DECIMAL_2 | 0 |  |
| CX.LENDER.LOANAMNT.TOT | Lender Total Loan Amount | DECIMAL_2 | 0 |  |
| CX.LENDER.LOANAMNT.TOT.CD | Lender Total Loan Amount | DECIMAL_2 | 0 |  |
| CX.LENDER.LOANAMT.BS | Lender Loan Amount | DECIMAL_2 | 0 |  |
| CX.LENDER.SHOP | Lender the Borrower went with  | DROPDOWNLIST | 0 |  |
| CX.LENDERCREDIT.TOTAL | Total of all Lender Credits | DECIMAL_2 | 0 |  |
| CX.LESENTDT | Lender LE Sent Date | DATE | 0 |  |
| CX.LETTER.INC.SENT | Letter of Incompleteness Sent  | DATE | 0 |  |
| CX.LETTER.OF.INC.COMMENTS | Adverse Action Comments | STRING | 1000 |  |
| CX.LETTER.OF.INC.REASON01 | LETTER.OF.INC.REASON01 | X | 0 |  |
| CX.LETTER.OF.INC.REASON02 | LETTER.OF.INC.REASON02 | X | 0 |  |
| CX.LETTER.OF.INC.REASON03 | LETTER.OF.INC.REASON03 | X | 0 |  |
| CX.LETTER.OF.INC.REASON04 | LETTER.OF.INC.REASON04 | X | 0 |  |
| CX.LETTER.OF.INC.REASON05 | LETTER.OF.INC.REASON05 | X | 0 |  |
| CX.LETTER.OF.INC.REASON06 | LETTER.OF.INC.REASON06 | X | 0 |  |
| CX.LETTER.OF.INC.REASON07 | LETTER.OF.INC.REASON07 | X | 0 |  |
| CX.LETTER.OF.INC.REASON08 | LETTER.OF.INC.REASON08 | X | 0 |  |
| CX.LETTER.OF.INC.REASON09 | LETTER.OF.INC.REASON09 | X | 0 |  |
| CX.LETTER.OF.INCMP.FLAG | Letter of Incomplete Flag | X | 0 |  |
| CX.LIB.PAIR.US.1 | Borrower Pair 1 US Total | DECIMAL_2 | 0 | SumAny(IIF([DD0139#1] <> "Y",[DD0134#1],0),IIF([DD0239#1] <> "Y" ,[DD0234#1],0), IIF([DD0339#1] <> " |
| CX.LIB.PAIR.US.2 | Borrower Pair 2 US Total | DECIMAL_2 | 0 | SumAny(IIF([DD0139#2] <> "Y",[DD0134#2],0),IIF([DD0239#2] <> "Y" ,[DD0234#2],0), IIF([DD0339#2] <> " |
| CX.LIB.PAIR.US.3 | Borrower Pair 3 US Total | DECIMAL_2 | 0 | SumAny(IIF([DD0139#3] <> "Y",[DD0134#3],0),IIF([DD0239#3] <> "Y" ,[DD0234#3],0), IIF([DD0339#3] <> " |
| CX.LIB.PAIR.US.4 | Borrower Pair 4 US Total | DECIMAL_2 | 0 | SumAny(IIF([DD0139#4] <> "Y",[DD0134#4],0),IIF([DD0239#4] <> "Y" ,[DD0234#4],0), IIF([DD0339#4] <> " |
| CX.LNCOPY.NEW.LN | Loan Copy Tool - New Loan Number | STRING | 30 |  |
| CX.LNCOPY.PREVIOUS.LN | Loan Copy Tool - Previous Loan Number | STRING | 30 |  |
| CX.LNCOPY.REASON | Loan Copy Tool - Reason for copy | STRING | 500 |  |
| CX.LO.APPROVAL.DATE | Loan Officer Approval Date | DATE | 0 |  |
| CX.LO.APPROVAL.DATEAUDIT | LO Approval Date Audit | AUDIT | 0 | Audit([cx.lo.approval.date], 1) |
| CX.LO.CA.LICENSE | LO CA LIcense Type | DROPDOWNLIST | 0 |  |
| CX.LO.EMPLOYEE.ID | LO Employee ID | STRING | 6 | IIF(isempty([CX.LO.EMP.ID.PART.1])= True, 
[CX.LO.EMP.ID.PART.2],[CX.LO.EMP.ID.PART.1]) |
| CX.LO.JUMBO.INDICATOR | Jumbo Indicator LO | X | 0 |  |
| CX.LO.NOTEPAD | Note pad for LO to provide loandetails to LOA and Processor | STRING | 300 |  |
| CX.LO.NOTETOLOG | Sends e-mail to LO and adds comments to the Log | X | 0 |  |
| CX.LO.PIW.PRESUMED | Presumed PIW Eligible by LO | X | 0 |  |
| CX.LO.RQD | LO Required Items | STRING | 6500 | IIF((IsEmpty([4000]) or IsEmpty([4002]) or IsEmpty([65])), Chr(149) & Space(1) & "Full Borrower Name |
| CX.LOAN.CHECKLIST.SHOW | Show Cleared By Name Date on Loan Checklist | X | 0 |  |
| CX.LOAN.CLOSED | CX.LOAN.CLOSED - DateTime when current loan is closed | STRING | 20 |  |
| CX.LOAN.CONDITION.DATE | Loan Condition Date | DATE | 0 |  |
| CX.LOAN.CONTIGENCYDATE | Loan Contigency Date | DATE | 0 |  |
| CX.LOAN.FOLDER.CURRENT | Loan Folder - Current Loan Folder - Updated when loan is opened | STRING | 100 |  |
| CX.LOAN.FOLDER.MOVE | Loan Folder - Set to Loan Folder where Loan should be moved when it's saved | STRING | 100 |  |
| CX.LOAN.OFFICER.UCASE | Loan Officer - Upper Case | STRING | 75 | ucase([LoanTeamMember.Name.Loan Officer]) |
| CX.LOAN.OPEN | Loan Open | STRING | 40 |  |
| CX.LOAN.OPENED | CX.LOAN.OPENED - DateTime when current loan was opened | STRING | 20 |  |
| CX.LOAN.PROGRAM | Loan Program Long Name | STRING | 100 | [1347] & " Year " & [1172] & " " & [608] & " " & [19] |
| CX.LOAN.SAVED | CX.LOAN.SAVED - DateTime when current loan was last saved | STRING | 20 |  |
| CX.LOAN.STATUS | Loan Status | STRING | 500 |  |
| CX.LOAN.STATUS.DATE | Loan Status Date | DATE | 0 |  |
| CX.LOAN.SUB.ASSETS | Loan Sub form, assets notes | STRING | 350 |  |
| CX.LOAN.SUB.CREDIT | Loan Sub form, credit notes | STRING | 350 |  |
| CX.LOAN.SUB.HOA | Loan Sub form, HOA notes | STRING | 350 |  |
| CX.LOAN.SUB.INCOME | Loan Sub form, income notes | STRING | 350 |  |
| CX.LOAN.SUB.MISC | Loan Sub form, misc notes | STRING | 350 |  |
| CX.LOAN.SUB.PROPERTY | Loan Sub form, property notes | STRING | 350 |  |
| CX.LOAN.SUB.STORY | Loan Sub form, loan story notes | STRING | 350 |  |
| CX.LOANAUDIT100 | Loan Audit - Results (Discl Rvw) | STRING | 2000 |  |
| CX.LOANCOMMITTEE | Loan Committee Loan | X | 0 |  |
| CX.LOANCONTINGENCYDATE | Loan Contingency Date | DATE | 0 |  |
| CX.LOANDATE.ADD12 | Current Loan + 12 Months | DATE | 0 | xDateAdd("m", 12, [@NTB.X1]) |
| CX.LOANDOC.ALT.DATE | Alternate Closing Date | DATE | 0 |  |
| CX.LOANDOC.ALT.SENT | Alternate Date/Time Sent | STRING | 20 |  |
| CX.LOANDOC.ALT.TIME | Alternate Closing Time | STRING | 10 |  |
| CX.LOANDOC.DOCREASON.1 | LOANDOC.DOCREASON.1 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.DOCREASON.1.ANS | LOANDOC.DOCREASON.1.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.1.CL | LOANDOC.DOCREASON.1.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.1.CLBY | LOANDOC.DOCREASON.1.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.1.FL | LOANDOC.DOCREASON.1.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.1.FLBY | LOANDOC.DOCREASON.1.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.1.FULL | LOANDOC.DOCREASON.1.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.2 | LOANDOC.DOCREASON.2 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.DOCREASON.2.ANS | LOANDOC.DOCREASON.2.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.2.CL | LOANDOC.DOCREASON.2.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.2.CLBY | LOANDOC.DOCREASON.2.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.2.FL | LOANDOC.DOCREASON.2.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.2.FLBY | LOANDOC.DOCREASON.2.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.2.FULL | LOANDOC.DOCREASON.2.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.3 | LOANDOC.DOCREASON.3 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.DOCREASON.3.ANS | LOANDOC.DOCREASON.3.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.3.CL | LOANDOC.DOCREASON.3.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.3.CLBY | LOANDOC.DOCREASON.3.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.3.FL | LOANDOC.DOCREASON.3.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.3.FLBY | LOANDOC.DOCREASON.3.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.3.FULL | LOANDOC.DOCREASON.3.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.4 | LOANDOC.DOCREASON.4 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.DOCREASON.4.ANS | LOANDOC.DOCREASON.4.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.4.CL | LOANDOC.DOCREASON.4.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.4.CLBY | LOANDOC.DOCREASON.4.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.4.FL | LOANDOC.DOCREASON.4.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.4.FLBY | LOANDOC.DOCREASON.4.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.4.FULL | LOANDOC.DOCREASON.4.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.5 | LOANDOC.DOCREASON.5 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.DOCREASON.5.ANS | LOANDOC.DOCREASON.5.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.5.CL | LOANDOC.DOCREASON.5.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.5.CLBY | LOANDOC.DOCREASON.5.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.5.FL | LOANDOC.DOCREASON.5.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.5.FLBY | LOANDOC.DOCREASON.5.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.5.FULL | LOANDOC.DOCREASON.5.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.6.ANS | LOANDOC.DOCREASON.6.ANS | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.6.CL | LOANDOC.DOCREASON.6.CL | X | 0 |  |
| CX.LOANDOC.DOCREASON.6.CLBY | LOANDOC.DOCREASON.6.CLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.6.FL | LOANDOC.DOCREASON.6.FL | X | 0 |  |
| CX.LOANDOC.DOCREASON.6.FLBY | LOANDOC.DOCREASON.6.FLBY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.6.FULL | LOANDOC.DOCREASON.6.FULL | STRING | 5 |  |
| CX.LOANDOC.DOCREASON.FLL.BY | LOANDOC.DOCREASON.FLL.BY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.FLL.NOW | LOANDOC.DOCREASON.FLL.NOW | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.FLL.ON | LOANDOC.DOCREASON.FLL.ON | DATE | 0 |  |
| CX.LOANDOC.DOCREASON.MISC | LOANDOC.DOCREASON.MISC | STRING | 300 |  |
| CX.LOANDOC.DOCREASON.X.BY | LOANDOC.DOCREASON.X.BY | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.X.NOW | LOANDOC.DOCREASON.X.NOW | STRING | 20 |  |
| CX.LOANDOC.DOCREASON.X.ON | LOANDOC.DOCREASON.X.ON | DATE | 0 |  |
| CX.LOANDOC.EARLY.REQUESTED | LOANDOC.EARLY.REQUESTED | YN | 0 |  |
| CX.LOANDOC.FIGREASON.1 | LOANDOC.FIGREASON.1 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.FIGREASON.1.ANS | LOANDOC.FIGREASON.1.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.1.CL | LOANDOC.FIGREASON.1.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.1.CLBY | LOANDOC.FIGREASON.1.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.1.FL | LOANDOC.FIGREASON.1.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.1.FLBY | LOANDOC.FIGREASON.1.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.1.FULL | LOANDOC.FIGREASON.1.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.2 | LOANDOC.FIGREASON.2 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.FIGREASON.2.ANS | LOANDOC.FIGREASON.2.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.2.CL | LOANDOC.FIGREASON.2.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.2.CLBY | LOANDOC.FIGREASON.2.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.2.FL | LOANDOC.FIGREASON.2.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.2.FLBY | LOANDOC.FIGREASON.2.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.2.FULL | LOANDOC.FIGREASON.2.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.3 | LOANDOC.FIGREASON.3 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.FIGREASON.3.ANS | LOANDOC.FIGREASON.3.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.3.CL | LOANDOC.FIGREASON.3.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.3.CLBY | LOANDOC.FIGREASON.3.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.3.FL | LOANDOC.FIGREASON.3.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.3.FLBY | LOANDOC.FIGREASON.3.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.3.FULL | LOANDOC.FIGREASON.3.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.4 | LOANDOC.FIGREASON.4 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.FIGREASON.4.ANS | LOANDOC.FIGREASON.4.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.4.CL | LOANDOC.FIGREASON.4.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.4.CLBY | LOANDOC.FIGREASON.4.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.4.FL | LOANDOC.FIGREASON.4.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.4.FLBY | LOANDOC.FIGREASON.4.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.4.FULL | LOANDOC.FIGREASON.4.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.5 | LOANDOC.FIGREASON.5 | DROPDOWNLIST | 0 |  |
| CX.LOANDOC.FIGREASON.5.ANS | LOANDOC.FIGREASON.5.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.5.CL | LOANDOC.FIGREASON.5.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.5.CLBY | LOANDOC.FIGREASON.5.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.5.FL | LOANDOC.FIGREASON.5.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.5.FLBY | LOANDOC.FIGREASON.5.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.5.FULL | LOANDOC.FIGREASON.5.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.6.ANS | LOANDOC.FIGREASON.6.ANS | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.6.CL | LOANDOC.FIGREASON.6.CL | X | 0 |  |
| CX.LOANDOC.FIGREASON.6.CLBY | LOANDOC.FIGREASON.6.CLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.6.FL | LOANDOC.FIGREASON.6.FL | X | 0 |  |
| CX.LOANDOC.FIGREASON.6.FLBY | LOANDOC.FIGREASON.6.FLBY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.6.FULL | LOANDOC.FIGREASON.6.FULL | STRING | 5 |  |
| CX.LOANDOC.FIGREASON.FLL.BY | LOANDOC.FIGREASON.FLL.BY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.FLL.NOW | LOANDOC.FIGREASON.FLL.NOW | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.FLL.ON | LOANDOC.FIGREASON.FLL.ON | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.MISC | LOANDOC.FIGREASON.MISC | STRING | 300 |  |
| CX.LOANDOC.FIGREASON.X.BY | LOANDOC.FIGREASON.X.BY | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.X.NOW | LOANDOC.FIGREASON.X.NOW | STRING | 20 |  |
| CX.LOANDOC.FIGREASON.X.ON | LOANDOC.FIGREASON.X.ON | DATE | 0 |  |
| CX.LOANDOC.LC.1003 | Lender Credit on 1003 | DECIMAL_2 | 0 | IIF ([202]="LenderCredit",[141],
IIF ([1091]="LenderCredit",[1095],
IIF ([1106]="LenderCredit",[11 |
| CX.LOANDOC.LC.APPRVDBY | Lender Credit Approved By | STRING | 30 |  |
| CX.LOANDOC.LC.APPRVDON | Lender Credit Approved On | DATE | 0 |  |
| CX.LOANDOC.LC.OVER | Lender Credit Over Available | DECIMAL_2 | 0 | ([#CX.LOANDOC.LENDERCREDIT2]-[#CX.LOANDOC.LC.1003]) |
| CX.LOANDOC.LENDERCREDIT | Max Lender Credit | DECIMAL_5 | 0 | ([#CX.LOANDOC.TOTRETURN1]-[#CX.LOANDOC.LOCOMP1]) |
| CX.LOANDOC.LENDERCREDIT2 | Lender Credit in Dollars | DECIMAL_2 | 0 | ([#CX.PM515]-[#CX.LOANDOC.LOCOMP]) |
| CX.LOANDOC.LOCOMP | LO Comp in Dollars | DECIMAL_2 | 0 | ([CX.LOANDOC.LOCOMP1] * [2])/100 |
| CX.LOANDOC.LOCOMP1 | LO Comp Plan from Chums | DECIMAL_5 | 0 |  |
| CX.LOANDOC.TOTRETURN | Total Return in Dollars | DECIMAL_2 | 0 | ([2295] - 100) * ([2] / 100) |
| CX.LOANDOC.TOTRETURN1 | Total Return Percentage | DECIMAL_5 | 0 | (([#CX.PM515]/[#2])*100) |
| CX.LOANDOC002 | Loan Doc Order - Fee Corrections | STRING | 255 |  |
| CX.LOANDOC006 | Loan Doc Order - Confirmation | YN | 0 |  |
| CX.LOANDOC007 | Loan Doc Order - Request Indication | YN | 0 |  |
| CX.LOANDOC010 | Loan Doc Order - 2nd Req Indicator | YN | 0 |  |
| CX.LOANDOC045 | CD Receipt Deadline Calc | DATE | 0 | Calendar.AddPostalDays([@763], -3,true) |
| CX.LOANDOC046 | LE Receipt Deadline Calc | DATE | 0 | Calendar.AddPostalDays([@763], -4,true) |
| CX.LOANFOLDER | Current Loan Folder Name | STRING | 20 |  |
| CX.LOANFOLDERMINDY | Loan Folder Name | STRING | 100 | [LOANFOLDER] |
| CX.LOANLASTMODIFIED | Copy of LOAN LAST MODIFIED | DATE | 0 | [LOANLASTMODIFIED] |
| CX.LOANNOTES.ASSETS | Loan Notes - Assets | STRING | 1000 |  |
| CX.LOANNOTES.CREDIT | Loan Notes - Credit | STRING | 1000 |  |
| CX.LOANNOTES.INCOME | Loan Notes - Income | STRING | 1000 |  |
| CX.LOANNOTES.LIABILITY | Loan Notes - Liabilities | STRING | 1000 |  |
| CX.LOANNOTES.MISC | Loan Notes - Misc | STRING | 1000 |  |
| CX.LOANNOTES.PRICINGCC | Loan Notes - Pricing & CC | STRING | 2000 |  |
| CX.LOANNOTES.PROPERTY | Loan Notes - Property | STRING | 1000 |  |
| CX.LOANNUMBER.2ND | Sub. 2nd Loan Number | STRING | 20 |  |
| CX.LOANNUMBER.3RD | Sub. 3rd Loan Number | STRING | 20 |  |
| CX.LOANSETUP.DROPDOWN | Loan Setup Status Dropdown | DROPDOWNLIST | 0 |  |
| CX.LOANSETUP.RESP.DROPDOWN | Loan Setup Responsible Party Dropdown | DROPDOWNLIST | 0 |  |
| CX.LOANSTATUS | Loan Status | STRING | 200 |  |
| CX.LOANSTATUSDATE | Loan Status Date | DATE | 0 |  |
| CX.LOCHKBIGPICTURE | LO notes to file to proc/uw | STRING | 10000 |  |
| CX.LOCHKCLOSINGTRUST | Closing in a Trust  | DROPDOWNLIST | 0 |  |
| CX.LOCHKPOAREQ | Power of Attorney required | DROPDOWNLIST | 0 |  |
| CX.LOCHKTITLEONLY | Is there someone on title only? | DROPDOWNLIST | 0 |  |
| CX.LOCK.DAYSTOEXPIRE | Lock - Days to Expiration | INTEGER | 0 | IIF(IsDate([761]) AND IsDate([762]),DateDiff("d",[@761],[@762]),nothing) |
| CX.LOCK.EXP.DATE.INT | CX.LOCK.EXP.DATE.INT | INTEGER | 0 | IIF([@762].ToOADate() = 0, 999999, [@762].ToOADate()) |
| CX.LOCKDAYSLEFT | Lock Days Left | INTEGER | 0 | DateDiff("d",[#CX.DATE.TODAY#],[#762#]) |
| CX.LOCKEMAILSENT | Auto Emailer - OB Lock Email Sent | YN | 0 |  |
| CX.LOCKEXPWARNINGSENT | Has the Lock Expiration warning been sent | STRING | 3 |  |
| CX.LOCKREQBTN.PRESSED | Lock Request Button Pressed? | STRING | 9 |  |
| CX.LOCKREQBTN.PRESSED1 | Lock Request Button Pressed? | STRING | 9 |  |
| CX.LOCKSNAP.BY | Lock Snapshot By | STRING | 150 |  |
| CX.LOCKSNAPCHECKALL | Lock Snapshot - Indicate Review | STRING | 15 | Iif([CX.LOCKSNAPPROG11]="REVIEW DIFFERENCE" OR [CX.LOCKSNAPPROG12]="REVIEW DIFFERENCE" OR [CX.LOCKSN |
| CX.LOCKSNAPLOAN01 | Lock Snapshot Loan - Int Rate | DECIMAL_3 | 0 |  |
| CX.LOCKSNAPLOAN02 | Lock Snapshot Loan - Ln Amt | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPLOAN03 | Lock Snapshot Loan - Occ | STRING | 25 |  |
| CX.LOCKSNAPLOAN04 | Lock Snapshot Loan - Doc Type | STRING | 25 |  |
| CX.LOCKSNAPLOAN05 | Lock Snapshot Loan - Purp | STRING | 25 |  |
| CX.LOCKSNAPLOAN06 | Lock Snapshot Loan - LTV | DECIMAL_3 | 0 |  |
| CX.LOCKSNAPLOAN07 | Lock Snapshot Loan - CLTV | DECIMAL_3 | 0 |  |
| CX.LOCKSNAPLOAN08 | Lock Snapshot Loan - FICO | STRING | 3 |  |
| CX.LOCKSNAPLOAN09 | Lock Snapshot Loan - DTI | DECIMAL_3 | 0 |  |
| CX.LOCKSNAPLOAN10 | Lock Snapshot Loan - Margin | DECIMAL_3 | 0 |  |
| CX.LOCKSNAPLOAN11 | Lock Snapshot Loan - Warn In Rate | STRING | 25 | iif([3]=[CX.LOCKSNAPLOAN01],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN12 | Lock Snapshot Loan - Warn Ln Amt | STRING | 25 | iif([2]<=[CX.LOCKSNAPLOAN22H] AND [2]>=[CX.LOCKSNAPLOAN22L],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN13 | Lock Snapshot Loan - Warn Occ | STRING | 25 | iif([1811]=[CX.LOCKSNAPLOAN03],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN14 | Lock Snapshot Loan - Warn Doc Type | STRING | 25 | iif([MORNET.X67]=[CX.LOCKSNAPLOAN04],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN15 | Lock Snapshot Loan - Warn Purp | STRING | 25 | iif([19]=[CX.LOCKSNAPLOAN05],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN16 | Lock Snapshot Loan - Warn LTV | STRING | 25 | iif([353]<=[CX.LOCKSNAPLOAN26H] AND [353]>[CX.LOCKSNAPLOAN26L],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN17 | Lock Snapshot Loan - Warn CLTV | STRING | 25 | iif([976]<=[CX.LOCKSNAPLOAN27H] AND [976]>[CX.LOCKSNAPLOAN27L],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN18 | Lock Snapshot Loan - Warn FICO | STRING | 25 | iif([VASUMM.X23]=[CX.LOCKSNAPLOAN08],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN19 | Lock Snapshot Loan - Warn DTI | STRING | 25 | "" |
| CX.LOCKSNAPLOAN20 | Lock Snapshot Loan - Warn Margin | STRING | 25 | iif([689]=[CX.LOCKSNAPLOAN10],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN22H | Lock Snapshot Loan - Ln Amt Threshold (High) | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPLOAN22L | Lock Snapshot - Ln Amt Threshold (Low) | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPLOAN23 | Lock Snapshot Loan - 1109 | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPLOAN24 | Lock Snapshot Loan - Warn 1109 | STRING | 25 | iif([1109]=[CX.LOCKSNAPLOAN23],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN26H | Lock Snapshot Loan - LTV Threshold | DECIMAL_3 | 0 | Iif([CX.LOCKSNAPLOAN06]>97,125,Iif([CX.LOCKSNAPLOAN06]>95 and [CX.LOCKSNAPLOAN06]<=97,97,Iif([CX.LOC |
| CX.LOCKSNAPLOAN26L | Lock Snapshot Loan - LTV Threshold (Low) | DECIMAL_3 | 0 | Iif([CX.LOCKSNAPLOAN06]>97,97,[CX.LOCKSNAPLOAN26H]-5) |
| CX.LOCKSNAPLOAN27H | Lock Snapshot Loan - CLTV Threshold | DECIMAL_3 | 0 | Iif([CX.LOCKSNAPLOAN07]>97,125,Iif([CX.LOCKSNAPLOAN07]>95 and [CX.LOCKSNAPLOAN07]<=97,97,Iif([CX.LOC |
| CX.LOCKSNAPLOAN27L | Lock Snapshot Loan - CLTV Threshold (Low) | DECIMAL_3 | 0 | Iif([CX.LOCKSNAPLOAN07]>97,97,[CX.LOCKSNAPLOAN27H]-5) |
| CX.LOCKSNAPLOAN28 | Lock Snapshot Loan - Amortization | STRING | 25 |  |
| CX.LOCKSNAPLOAN29 | Lock Snapshot Loan - Warn Amortization | STRING | 25 | iif([608]=[CX.LOCKSNAPLOAN28],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPLOAN30 | Lock Snapshot Loan - Term | STRING | 3 |  |
| CX.LOCKSNAPLOAN31 | Lock Snapshot Loan - Warn Term | STRING | 25 | iif([325]=[CX.LOCKSNAPLOAN30],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROF01 | Lock Snapshot Profit - Disc Pts $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF02 | Lock Snapshot Profit - Prem Pricing $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF03 | Lock Snapshot Profit - Orig Fee $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF04 | Lock Snapshot Profit - Disc Pts $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF05 | Lock Snapshot Profit - 802 Credit $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF06 | Lock Snapshot Profit - Lender Paid CC $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF07 | Lock Snapshot Profit - OverUnder $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF08 | Lock Snapshot Profit - NetOverUnder $ | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROF18 | Lock Snapshot Profit - Net Over/Under Warn | STRING | 25 | iif([CX.PM525]<0,"SHORT FUNDS","") |
| CX.LOCKSNAPPROG01 | Lock Snapshot Program - Channel | STRING | 25 |  |
| CX.LOCKSNAPPROG02 | Lock Snapshot Program - Investor | STRING | 50 |  |
| CX.LOCKSNAPPROG03 | Lock Snapshot Program - Prog Nama | STRING | 50 |  |
| CX.LOCKSNAPPROG04 | Lock Snapshot Program - Agency HiBal | STRING | 25 |  |
| CX.LOCKSNAPPROG06 | Lock Snapshot Program - Loan Type | STRING | 25 |  |
| CX.LOCKSNAPPROG07 | Loan Snapshot Program - Interest Only | STRING | 5 |  |
| CX.LOCKSNAPPROG08 | Lock Snapshot Program - Impounds | STRING | 15 |  |
| CX.LOCKSNAPPROG09 | Lock Snapshot Program - Specialty Prog Name | STRING | 30 |  |
| CX.LOCKSNAPPROG11 | Lock Snapshot Program - Warn Channel | STRING | 25 | iif([2626]=[CX.LOCKSNAPPROG01],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG12 | Lock Snapshot Program - Warn Investor | STRING | 25 | iif([VEND.X263]=[CX.LOCKSNAPPROG02],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG13 | Lock Snapshot Program - Warn Prog Name | STRING | 25 | iif([1401]=[CX.LOCKSNAPPROG03],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG14 | Lock Snapshot Program - Warn Agency HiBal | STRING | 25 | iif([CX.SEC002]=[CX.LOCKSNAPPROG04],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG15 | Lock Snapshot Program - Warn Spec Prog | STRING | 25 | iif([CX.SEC003]=[CX.LOCKSNAPPROG05],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG16 | Lock Snapshot Program - Warn Loan Type | STRING | 25 | iif([1172]=[CX.LOCKSNAPPROG06],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG17 | Lock Snapshot Program - Warn IO | STRING | 25 | iif([2982]=[CX.LOCKSNAPPROG07],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROG18 | Lock Snapshot Program - Warn Impounds | STRING | 25 | iif([2293]=[CX.LOCKSNAPPROG08],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROP01 | Lock Snapshot Prop - Prop Type | STRING | 25 |  |
| CX.LOCKSNAPPROP02 | Lock Snapshot Prop - Units | INTEGER | 0 |  |
| CX.LOCKSNAPPROP03 | Lock Snapshot Prop - Pur Price | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROP04 | Lock Snapshot Prop - Appr Value | DECIMAL_2 | 0 |  |
| CX.LOCKSNAPPROP11 | Lock Snapshot Prop - Warn Prop Type | STRING | 25 | iif([1041]=[CX.LOCKSNAPPROP01],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROP12 | Lock Snapshot Prop - Warn Units | STRING | 25 | iif([16]=[CX.LOCKSNAPPROP02],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROP13 | Lock Snapshot Prop - Warn Pur Price | STRING | 25 | iif([136]=[CX.LOCKSNAPPROP03],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPPROP14 | Lock Snapshot Prop - Warn Appr Value | STRING | 25 | iif([356]=[CX.LOCKSNAPPROP04],"","REVIEW DIFFERENCE") |
| CX.LOCKSNAPTIME | Lock Snapshot Time Stamp | STRING | 25 |  |
| CX.LOEVENT | Event sponsored by Loan Officer | STRING | 25 |  |
| CX.LONGDATEPATTERN | Day, month year | STRING | 150 |  |
| CX.LOPS.BAC.REFI | BAC Refi | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST.CMTS | Loan Ops Disbursement Checklist Comments | STRING | 1000 |  |
| CX.LOPS.DIS.CHLST10 | Is there evidence of Insurance for Hazard/Windstorm  | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST16 | Is the Standard Flood Hazard Determination Form in the file? | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST20 | For Condos copy of the Flood Declarations Page | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST21 | Flood insurance coverage should be the lower of principal balance, replacement value as shown on the | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST22 | For Condos: Evidence of HO6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST24 | Dated within 90 days of closing date | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST25 | CPL - provided on behalf of title closing agent | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST26 | Dated by underwriter. | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST27 | Disbursement amount request is in accordance with Approved Credit Authorities | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST28 | Lending Limits and Disbursement protocol have been followed. | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST29 | LTV not greater than 80% | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST3 | OFAC - Dated within 30 days of Closing Date | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST34 | All parties have been checked for hits on the OFAC List | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST35 | Override approvals have been obtained for suspect hits | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST4 | Copy of Assignment of Mortgage | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST43 | Wire Instructions? | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST45 | Was there a Corporate Resolution authorizing the conveyance of the property, the proposed mortgage a | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST49 | Original Note | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST5 | Insurance Endorsement Letter | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST50 | Does the top section of the document accurately reflect: | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST53 | Disbursement Request indicates closing will be a mail away | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST54 | If yes, confirm receipt of "confirmed close" email from closing agent  BEFORE disbursing. | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST57 | Copy of Good-bye Letter & RESPA disclosure | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST6 | Copy of Mortgage | DROPDOWNLIST | 0 |  |
| CX.LOPS.DIS.CHLST60 | Review Title | DROPDOWNLIST | 0 |  |
| CX.LOPS.DOCSRCVD | Docs Received | DATE | 0 |  |
| CX.LOPS.FILE.RDY.SYNY | File Completed ready for Synergy | STRING | 1 |  |
| CX.LOPS.PC.APP1 | CX.LOPS.PC.APP1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.APP2 | CX.LOPS.PC.APP2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.APP3 | CX.LOPS.PC.APP3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.APP4 | CX.LOPS.PC.APP4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.APP5 | CX.LOPS.PC.APP5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.APP6 | CX.LOPS.PC.APP6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ASS1 | CX.LOPS.PC.ASS1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ASS1.DD | CX.LOPS.PC.ASS1.DD | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ASS2 | CX.LOPS.PC.ASS2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ASS3 | CX.LOPS.PC.ASS3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CLA1 | CX.LOPS.PC.CLA1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CLA2 | CX.LOPS.PC.CLA2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CLA3 | CX.LOPS.PC.CLA3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CLI1 | CX.LOPS.PC.CLI1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CLI2 | CX.LOPS.PC.CLI2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CMTS | Post Closing Comments | STRING | 1000 |  |
| CX.LOPS.PC.CORP1 | CX.LOPS.PC.CORP1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP10 | CX.LOPS.PC.CORP10 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP11 | CX.LOPS.PC.CORP11 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP12 | CX.LOPS.PC.CORP12 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP2 | CX.LOPS.PC.CORP2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP3 | CX.LOPS.PC.CORP3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP4 | CX.LOPS.PC.CORP4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP5 | CX.LOPS.PC.CORP5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP6 | CX.LOPS.PC.CORP6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP7 | CX.LOPS.PC.CORP7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP8 | CX.LOPS.PC.CORP8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.CORP9 | CX.LOPS.PC.CORP9 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC1 | CX.LOPS.PC.MISC1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC10 | CX.LOPS.PC.MISC10 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC11 | CX.LOPS.PC.MISC11 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC12 | CX.LOPS.PC.MISC12 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC13 | CX.LOPS.PC.MISC13 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC14 | CX.LOPS.PC.MISC14 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC15 | CX.LOPS.PC.MISC15 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC16 | CX.LOPS.PC.MISC16 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC2 | CX.LOPS.PC.MISC2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC3 | CX.LOPS.PC.MISC3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC4 | CX.LOPS.PC.MISC4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC5 | CX.LOPS.PC.MISC5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC6 | CX.LOPS.PC.MISC6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC7 | CX.LOPS.PC.MISC7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC8 | CX.LOPS.PC.MISC8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MISC9 | CX.LOPS.PC.MISC9 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG1 | CX.LOPS.PC.MTG1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG1.DD | CX.LOPS.PC.MTG1.DD | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG10 | CX.LOPS.PC.MTG10 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG11 | CX.LOPS.PC.MTG11 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG12 | CX.LOPS.PC.MTG12 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG13 | CX.LOPS.PC.MTG13 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG14 | CX.LOPS.PC.MTG14 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG15 | CX.LOPS.PC.MTG15 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG16 | CX.LOPS.PC.MTG16 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG17 | CX.LOPS.PC.MTG17 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG18 | CX.LOPS.PC.MTG18 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG19 | CX.LOPS.PC.MTG19 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG2 | CX.LOPS.PC.MTG2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG20 | CX.LOPS.PC.MTG20 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG21 | CX.LOPS.PC.MTG21 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG22 | CX.LOPS.PC.MTG22 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG23 | CX.LOPS.PC.MTG23 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG24 | CX.LOPS.PC.MTG24 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG24.DD | CX.LOPS.PC.MTG24.DD | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG25 | CX.LOPS.PC.MTG25 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG26 | CX.LOPS.PC.MTG26 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG3 | CX.LOPS.PC.MTG3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG4 | CX.LOPS.PC.MTG4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG5 | CX.LOPS.PC.MTG5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG6 | CX.LOPS.PC.MTG6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG7 | CX.LOPS.PC.MTG7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG8 | CX.LOPS.PC.MTG8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.MTG9 | CX.LOPS.PC.MTG9 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE1 | CX.LOPS.PC.NOTE1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE1.DD | CX.LOPS.PC.NOTE1.DD | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE11 | CX.LOPS.PC.NOTE11 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE12 | CX.LOPS.PC.NOTE12 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE13 | CX.LOPS.PC.NOTE13 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE14 | CX.LOPS.PC.NOTE14 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE15 | CX.LOPS.PC.NOTE15 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE16 | CX.LOPS.PC.NOTE16 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE17 | CX.LOPS.PC.NOTE17 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE18 | CX.LOPS.PC.NOTE18 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE19 | CX.LOPS.PC.NOTE19 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE2 | CX.LOPS.PC.NOTE2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE20 | CX.LOPS.PC.NOTE20 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE21 | CX.LOPS.PC.NOTE21 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE22 | CX.LOPS.PC.NOTE22 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE23 | CX.LOPS.PC.NOTE23 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE24 | CX.LOPS.PC.NOTE24 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE25 | CX.LOPS.PC.NOTE25 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE3 | CX.LOPS.PC.NOTE3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE4 | CX.LOPS.PC.NOTE4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE5 | CX.LOPS.PC.NOTE5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE6 | CX.LOPS.PC.NOTE6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE7 | CX.LOPS.PC.NOTE7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE8 | CX.LOPS.PC.NOTE8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTE9 | CX.LOPS.PC.NOTE9 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.NOTES.AGENT | Notes for Closing Agent | STRING | 500 |  |
| CX.LOPS.PC.NOTES.APP | Notes for Application | STRING | 500 |  |
| CX.LOPS.PC.NOTES.ASSIGNMENT | Notes for Assignment | STRING | 500 |  |
| CX.LOPS.PC.NOTES.CORP | Notes for Corp | STRING | 500 |  |
| CX.LOPS.PC.NOTES.INSTRUCT | Notes for Closing Instructions | STRING | 500 |  |
| CX.LOPS.PC.NOTES.MISC | Notes for Closing Misc | STRING | 500 |  |
| CX.LOPS.PC.NOTES.MORTGAGE | Notes for Mortgage | STRING | 500 |  |
| CX.LOPS.PC.NOTES.NOTE | Notes for Note | STRING | 500 |  |
| CX.LOPS.PC.NOTES.ROR | Notes for ROR | STRING | 500 |  |
| CX.LOPS.PC.NOTES.TITLE | Notes for Title | STRING | 500 |  |
| CX.LOPS.PC.NOTES.TRUST | Notes for Trust | STRING | 500 |  |
| CX.LOPS.PC.ROR1 | CX.LOPS.PC.ROR1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ROR2 | CX.LOPS.PC.ROR2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ROR3 | CX.LOPS.PC.ROR3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ROR4 | CX.LOPS.PC.ROR4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ROR5 | CX.LOPS.PC.ROR5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.ROR6 | CX.LOPS.PC.ROR6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL1 | CX.LOPS.PC.TITL1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL10 | CX.LOPS.PC.TITL10 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL11 | CX.LOPS.PC.TITL11 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL12 | CX.LOPS.PC.TITL12 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL13 | CX.LOPS.PC.TITL13 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL14 | CX.LOPS.PC.TITL14 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL15 | CX.LOPS.PC.TITL15 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL16 | CX.LOPS.PC.TITL16 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL17 | CX.LOPS.PC.TITL17 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL18 | CX.LOPS.PC.TITL18 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL19 | CX.LOPS.PC.TITL19 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL2 | CX.LOPS.PC.TITL2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL20 | CX.LOPS.PC.TITL20 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL21 | CX.LOPS.PC.TITL21 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL3 | CX.LOPS.PC.TITL3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL4 | CX.LOPS.PC.TITL4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL5 | CX.LOPS.PC.TITL5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL6 | CX.LOPS.PC.TITL6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL7 | CX.LOPS.PC.TITL7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL8 | CX.LOPS.PC.TITL8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TITL9 | CX.LOPS.PC.TITL9 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST1 | CX.LOPS.PC.TRST1 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST2 | CX.LOPS.PC.TRST2 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST3 | CX.LOPS.PC.TRST3 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST4 | CX.LOPS.PC.TRST4 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST5 | CX.LOPS.PC.TRST5 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST6 | CX.LOPS.PC.TRST6 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST7 | CX.LOPS.PC.TRST7 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST8 | CX.LOPS.PC.TRST8 | DROPDOWNLIST | 0 |  |
| CX.LOPS.PC.TRST9 | CX.LOPS.PC.TRST9 | DROPDOWNLIST | 0 |  |
| CX.LOSUBMGENERAL | General Notes to Processor | STRING | 2000 |  |
| CX.LP.APPTRK.ACKD1 | Appraisal Tracking - Borrower Acknowledgement date 1 | DATE | 0 |  |
| CX.LP.APPTRK.ACKD2 | Appraisal Tracking - Borrower Acknowledgement date 2 | DATE | 0 |  |
| CX.LP.APPTRK.ACKD3 | Appraisal Tracking - Borrower Acknowledgement date 3 | DATE | 0 |  |
| CX.LP.APPTRK.ACKD4 | Appraisal Tracking - Borrower Acknowledgement date 4 | DATE | 0 |  |
| CX.LP.APPTRK.DR1 | Appraisal Tracking - Date Received 1 | DATE | 0 |  |
| CX.LP.APPTRK.DR2 | Appraisal Tracking - Date Received 2 | DATE | 0 |  |
| CX.LP.APPTRK.DR3 | Appraisal Tracking - Date Received 3 | DATE | 0 |  |
| CX.LP.APPTRK.DR4 | Appraisal Tracking - Date Received 4 | DATE | 0 |  |
| CX.LP.APPTRK.DS1 | Appraisal Tracking - Date Sent to borrower 1 | DATE | 0 |  |
| CX.LP.APPTRK.DS2 | Appraisal Tracking - Date Sent to borrower 2 | DATE | 0 |  |
| CX.LP.APPTRK.DS3 | Appraisal Tracking - Date Sent to borrower 3 | DATE | 0 |  |
| CX.LP.APPTRK.DS4 | Appraisal Tracking - Date Sent to borrower 4 | DATE | 0 |  |
| CX.LP.APPTRK.EARLIESTCOE | Appraisal Tracking - Earliest COE | DATE | 0 | Calendar.AddBusinessDays([@CX.LP.APPTRK.EARLIESTCOECALC], 2, true) |
| CX.LP.APPTRK.SENDMETHOD1 | Appraisal Tracking - Send Method 1 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.SENDMETHOD2 | Appraisal Tracking - Send Method 2 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.SENDMETHOD3 | Appraisal Tracking - Send Method 3 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.SENDMETHOD4 | Appraisal Tracking - Send Method 4 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.VAL1 | Appraisal Valuation Type 1 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.VAL2 | Appraisal Valuation Type 2 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.VAL3 | Appraisal Valuation Type 3 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.VAL4 | Appraisal Valuation Type 4 | DROPDOWNLIST | 0 |  |
| CX.LP.APPTRK.WAIVED | Appraisal Tracking - Did the Borrower Waive right to receive Appraisal on time | YN | 0 |  |
| CX.LP.NOTES | LP Notes | STRING | 5000 |  |
| CX.LPMIPREMIUM | LPMI Premium | DECIMAL_2 | 0 |  |
| CX.LS.1014.1 | Loan Scenario - 1014.1 | DECIMAL_3 | 0 |  |
| CX.LS.1014.2 | Loan Scenario - 1014.2 | DECIMAL_3 | 0 |  |
| CX.LS.1014.3 | Loan Scenario - 1014.3 | DECIMAL_3 | 0 |  |
| CX.LS.1014.4 | Loan Scenario - 1014.4 | DECIMAL_3 | 0 |  |
| CX.LS.1045.1 | Loan Scenario - 1045.1 | DECIMAL_2 | 0 |  |
| CX.LS.1045.2 | Loan Scenario - 1045.2 | DECIMAL_2 | 0 |  |
| CX.LS.1045.3 | Loan Scenario - 1045.3 | DECIMAL_2 | 0 |  |
| CX.LS.1045.4 | Loan Scenario - 1045.4 | DECIMAL_2 | 0 |  |
| CX.LS.1073.1 | Loan Scenario - 1073.1 | DECIMAL_2 | 0 |  |
| CX.LS.1073.2 | Loan Scenario - 1073.2 | DECIMAL_2 | 0 |  |
| CX.LS.1073.3 | Loan Scenario - 1073.3 | DECIMAL_2 | 0 |  |
| CX.LS.1073.4 | Loan Scenario - 1073.4 | DECIMAL_2 | 0 |  |
| CX.LS.1092.1 | Loan Scenario - 1092.1 | DECIMAL_2 | 0 |  |
| CX.LS.1092.2 | Loan Scenario - 1092.2 | DECIMAL_2 | 0 |  |
| CX.LS.1092.3 | Loan Scenario - 1092.3 | DECIMAL_2 | 0 |  |
| CX.LS.1092.4 | Loan Scenario - 1092.4 | DECIMAL_2 | 0 |  |
| CX.LS.1107.1 | Loan Scenario - 1107.1 | DECIMAL_2 | 0 |  |
| CX.LS.1107.2 | Loan Scenario - 1107.2 | DECIMAL_2 | 0 |  |
| CX.LS.1107.3 | Loan Scenario - 1107.3 | DECIMAL_2 | 0 |  |
| CX.LS.1107.4 | Loan Scenario - 1107.4 | DECIMAL_2 | 0 |  |
| CX.LS.1109.1 | Loan Scenario - 1109.1 | DECIMAL_2 | 0 |  |
| CX.LS.1109.2 | Loan Scenario - 1109.2 | DECIMAL_2 | 0 |  |
| CX.LS.1109.3 | Loan Scenario - 1109.3 | DECIMAL_2 | 0 |  |
| CX.LS.1109.4 | Loan Scenario - 1109.4 | DECIMAL_2 | 0 |  |
| CX.LS.1172.1 | Loan Scenario - 1172.1 | STRING | 20 |  |
| CX.LS.1172.2 | Loan Scenario - 1172.2 | STRING | 20 |  |
| CX.LS.1172.3 | Loan Scenario - 1172.3 | STRING | 20 |  |
| CX.LS.1172.4 | Loan Scenario - 1172.4 | STRING | 20 |  |
| CX.LS.1177.1 | Loan Scenario - 1177.1 | STRING | 50 |  |
| CX.LS.1335.1 | Loan Scenario - 1335.1 | DECIMAL_2 | 0 |  |
| CX.LS.1335.2 | Loan Scenario - 1335.2 | DECIMAL_2 | 0 |  |
| CX.LS.1335.3 | Loan Scenario - 1335.3 | DECIMAL_2 | 0 |  |
| CX.LS.1335.4 | Loan Scenario - 1335.4 | DECIMAL_2 | 0 |  |
| CX.LS.136.1 | Loan Scenario - 136.1 | DECIMAL_2 | 0 |  |
| CX.LS.136.2 | Loan Scenario - 136.2 | DECIMAL_2 | 0 |  |
| CX.LS.136.3 | Loan Scenario - 136.3 | DECIMAL_2 | 0 |  |
| CX.LS.136.4 | Loan Scenario - 136.4 | DECIMAL_2 | 0 |  |
| CX.LS.137.1 | Loan Scenario - 137.1 | DECIMAL_2 | 0 |  |
| CX.LS.137.2 | Loan Scenario - 137.2 | DECIMAL_2 | 0 |  |
| CX.LS.137.3 | Loan Scenario - 137.3 | DECIMAL_2 | 0 |  |
| CX.LS.137.4 | Loan Scenario - 137.4 | DECIMAL_2 | 0 |  |
| CX.LS.138.1 | Loan Scenario - 138.1 | DECIMAL_2 | 0 |  |
| CX.LS.138.2 | Loan Scenario - 138.2 | DECIMAL_2 | 0 |  |
| CX.LS.138.3 | Loan Scenario - 138.3 | DECIMAL_2 | 0 |  |
| CX.LS.138.4 | Loan Scenario - 138.4 | DECIMAL_2 | 0 |  |
| CX.LS.140.1 | Loan Scenario - 140.1 | DECIMAL_2 | 0 |  |
| CX.LS.140.2 | Loan Scenario - 140.2 | DECIMAL_2 | 0 |  |
| CX.LS.140.3 | Loan Scenario - 140.3 | DECIMAL_2 | 0 |  |
| CX.LS.140.4 | Loan Scenario - 140.4 | DECIMAL_2 | 0 |  |
| CX.LS.1401.1 | Loan Scenario - 1401.1 | STRING | 50 |  |
| CX.LS.1401.2 | Loan Scenario - 1401.2 | STRING | 50 |  |
| CX.LS.1401.3 | Loan Scenario - 1401.3 | STRING | 50 |  |
| CX.LS.1401.4 | Loan Scenario - 1401.4 | STRING | 50 |  |
| CX.LS.1405.1 | Loan Scenario Tool | DECIMAL_2 | 0 |  |
| CX.LS.1405.2 | Loan Scenario 1405.2 | DECIMAL_2 | 0 |  |
| CX.LS.1405.3 | Loan Scenario 1405.3 | DECIMAL_2 | 0 |  |
| CX.LS.1405.4 | Loan Scenario 1405.4 | DECIMAL_2 | 0 |  |
| CX.LS.142.1 | Loan Scenario - 142.1 | DECIMAL_2 | 0 |  |
| CX.LS.142.2 | Loan Scenario - 142.2 | DECIMAL_2 | 0 |  |
| CX.LS.142.3 | Loan Scenario - 142.3 | DECIMAL_2 | 0 |  |
| CX.LS.142.4 | Loan Scenario - 142.4 | DECIMAL_2 | 0 |  |
| CX.LS.1663.1 | Loan Scenario - 1663.1 | DECIMAL_2 | 0 |  |
| CX.LS.1663.2 | Loan Scenario - 1663.2 | DECIMAL_2 | 0 |  |
| CX.LS.1663.3 | Loan Scenario - 1663.3 | DECIMAL_2 | 0 |  |
| CX.LS.1663.4 | Loan Scenario - 1663.4 | DECIMAL_2 | 0 |  |
| CX.LS.1699.1 | Loan Scenario - 1699.1 | DECIMAL_3 | 0 |  |
| CX.LS.1699.2 | Loan Scenario - 1699.2 | DECIMAL_3 | 0 |  |
| CX.LS.1699.3 | Loan Scenario - 1699.3 | DECIMAL_3 | 0 |  |
| CX.LS.1699.4 | Loan Scenario - 1699.4 | DECIMAL_3 | 0 |  |
| CX.LS.1700.1 | Loan Scenario - 1700.1 | DECIMAL_3 | 0 |  |
| CX.LS.1700.2 | Loan Scenario - 1700.2 | DECIMAL_3 | 0 |  |
| CX.LS.1700.3 | Loan Scenario - 1700.3 | DECIMAL_3 | 0 |  |
| CX.LS.1700.4 | Loan Scenario 1700.4 | DECIMAL_3 | 0 |  |
| CX.LS.1733.1 | Loan Scenario - 1733.1 | DECIMAL_2 | 0 |  |
| CX.LS.1733.2 | Loan Scenario - 1733.2 | DECIMAL_2 | 0 |  |
| CX.LS.1733.3 | Loan Scenario - 1733.3 | DECIMAL_2 | 0 |  |
| CX.LS.1733.4 | Loan Scenario - 1733.4 | DECIMAL_2 | 0 |  |
| CX.LS.1742.1 | Loan Scenario - 1742.1 | DECIMAL_2 | 0 |  |
| CX.LS.1742.2 | Loan Scenario - 1742.2 | DECIMAL_2 | 0 |  |
| CX.LS.1742.3 | Loan Scenario - 1742.3 | DECIMAL_2 | 0 |  |
| CX.LS.1742.4 | Loan Scenario - 1742.4 | DECIMAL_2 | 0 |  |
| CX.LS.1771.1 | Loan Scenario - 1771.1 | DECIMAL_2 | 0 |  |
| CX.LS.1771.2 | Loan Scenario - 1771.2 | DECIMAL_2 | 0 |  |
| CX.LS.1771.3 | Loan Scenario - 1771.3 | DECIMAL_2 | 0 |  |
| CX.LS.1771.4 | Loan Scenario - 1771.4 | DECIMAL_2 | 0 |  |
| CX.LS.1785.1 | Loan Scenario - 1785.1 | STRING | 50 |  |
| CX.LS.1785.2 | Loan Scenario - 1785.2 | STRING | 50 |  |
| CX.LS.1785.3 | Loan Scenario - 1785.3 | STRING | 50 |  |
| CX.LS.1785.4 | Loan Scenario - 1785.4 | STRING | 50 |  |
| CX.LS.1790.1 | Loan Scenario - 1790.1 | DECIMAL_3 | 0 |  |
| CX.LS.1790.2 | Loan Scenario - 1790.2 | DECIMAL_3 | 0 |  |
| CX.LS.1790.3 | Loan Scenario - 1790.3 | DECIMAL_3 | 0 |  |
| CX.LS.1790.4 | Loan Scenario - 1790.4 | DECIMAL_3 | 0 |  |
| CX.LS.1791.1 | Loan Scenario - 1791.1 | DECIMAL_3 | 0 |  |
| CX.LS.1791.2 | Loan Scenario - 1791.2 | DECIMAL_3 | 0 |  |
| CX.LS.1791.3 | Loan Scenario - 1791.3 | DECIMAL_3 | 0 |  |
| CX.LS.1791.4 | Loan Scenario - 1791.4 | DECIMAL_3 | 0 |  |
| CX.LS.1827.1 | Loan Scenario - 1827.1 | DECIMAL_3 | 0 |  |
| CX.LS.1827.2 | Loan Scenario - 1827.2 | DECIMAL_3 | 0 |  |
| CX.LS.1827.3 | Loan Scenario - 1827.3 | DECIMAL_3 | 0 |  |
| CX.LS.1827.4 | Loan Scenario - 1827.4 | DECIMAL_3 | 0 |  |
| CX.LS.1959.1 | Loan Scenario - 1959.1 | DROPDOWNLIST | 0 |  |
| CX.LS.1959.2 | Loan Scenario - 1959.2 | DROPDOWNLIST | 0 |  |
| CX.LS.1959.3 | Loan Scenario - 1959.3 | DROPDOWNLIST | 0 |  |
| CX.LS.1959.4 | Loan Scenario - 1959.4 | DROPDOWNLIST | 0 |  |
| CX.LS.2.1 | Loan Scenario - 2.1 | DECIMAL_2 | 0 |  |
| CX.LS.2.2 | Loan Scenario - 2.2 | DECIMAL_2 | 0 |  |
| CX.LS.2.3 | Loan Scenario - 2.3 | DECIMAL_2 | 0 |  |
| CX.LS.2.4 | Loan Scenario - 2.4 | DECIMAL_2 | 0 |  |
| CX.LS.229.1 | Loan Scenario 229.1 | DECIMAL_2 | 0 |  |
| CX.LS.229.2 | Loan Scenario 229.2 | DECIMAL_2 | 0 |  |
| CX.LS.229.3 | Loan Scenario 229.3 | DECIMAL_2 | 0 |  |
| CX.LS.229.4 | Loan Scenario 229.4 | DECIMAL_2 | 0 |  |
| CX.LS.230.1 | Loan Scenario Tool | DECIMAL_2 | 0 |  |
| CX.LS.230.2 | Loan Scenario 230.2 | DECIMAL_2 | 0 |  |
| CX.LS.230.3 | Loan Scenario 230.3 | DECIMAL_2 | 0 |  |
| CX.LS.230.4 | Loan Scenario 230.4 | DECIMAL_2 | 0 |  |
| CX.LS.232.1 | Loan Scenario Tool | DECIMAL_2 | 0 |  |
| CX.LS.232.2 | Loan Scenario 232.2 | DECIMAL_2 | 0 |  |
| CX.LS.232.3 | Loan Scenario 232.3 | DECIMAL_2 | 0 |  |
| CX.LS.232.4 | Loan Scenario 232.4 | DECIMAL_2 | 0 |  |
| CX.LS.233.1 | Loan Scenario Tool | DECIMAL_2 | 0 |  |
| CX.LS.233.2 | Loan Scenario 232.2 | DECIMAL_2 | 0 |  |
| CX.LS.233.3 | Loan Scenario 233.3 | DECIMAL_2 | 0 |  |
| CX.LS.233.4 | Loan Scenario 233.4 | DECIMAL_2 | 0 |  |
| CX.LS.234.1 | Loan Scenario Tool | DECIMAL_2 | 0 |  |
| CX.LS.234.2 | Loan Scenario 234.2 | DECIMAL_2 | 0 |  |
| CX.LS.234.3 | Loan Scenario 234.3 | DECIMAL_2 | 0 |  |
| CX.LS.234.4 | Loan Scenario 234.4 | DECIMAL_2 | 0 |  |
| CX.LS.247.1 | Loan Scenario - 247.1 | DECIMAL_3 | 0 |  |
| CX.LS.247.2 | Loan Scenario - 247.2 | DECIMAL_3 | 0 |  |
| CX.LS.247.3 | Loan Scenario - 247.3 | DECIMAL_3 | 0 |  |
| CX.LS.247.4 | Loan Scenario - 247.4 | DECIMAL_3 | 0 |  |
| CX.LS.2625.1 | Loan Scenario - 2625.1 | DECIMAL_3 | 0 |  |
| CX.LS.2625.2 | Loan Scenario - 2625.2 | DECIMAL_3 | 0 |  |
| CX.LS.2625.3 | Loan Scenario - 2625.3 | DECIMAL_3 | 0 |  |
| CX.LS.2625.4 | Loan Scenario - 2625.4 | DECIMAL_3 | 0 |  |
| CX.LS.3.1 | Loan Scenario - 3.1 | DECIMAL_3 | 0 |  |
| CX.LS.3.2 | Loan Scenario - 3.2 | DECIMAL_3 | 0 |  |
| CX.LS.3.3 | Loan Scenario - 3.3 | DECIMAL_3 | 0 |  |
| CX.LS.3.4 | Loan Scenario - 3.4 | DECIMAL_3 | 0 |  |
| CX.LS.325.1 | Loan Scenario - 325.1 | INTEGER | 0 |  |
| CX.LS.325.2 | Loan Scenario - 325.2 | INTEGER | 0 |  |
| CX.LS.325.3 | Loan Scenario - 325.3 | INTEGER | 0 |  |
| CX.LS.325.4 | Loan Scenario - 325.4 | INTEGER | 0 |  |
| CX.LS.353.1 | Loan Scenario - 353.1 | DECIMAL_3 | 0 |  |
| CX.LS.353.2 | Loan Scenario - 353.2 | DECIMAL_3 | 0 |  |
| CX.LS.353.3 | Loan Scenario - 353.3 | DECIMAL_3 | 0 |  |
| CX.LS.353.4 | Loan Scenario - 353.4 | DECIMAL_3 | 0 |  |
| CX.LS.356.1 | Loan Scenario - 356.1 | DECIMAL_2 | 0 |  |
| CX.LS.356.2 | Loan Scenario - 356.2 | DECIMAL_2 | 0 |  |
| CX.LS.356.3 | Loan Scenario - 356.3 | DECIMAL_2 | 0 |  |
| CX.LS.356.4 | Loan Scenario - 356.4 | DECIMAL_2 | 0 |  |
| CX.LS.4.1 | Loan Scenario - 4.1 | INTEGER | 0 |  |
| CX.LS.4.2 | Loan Scenario - 4.2 | INTEGER | 0 |  |
| CX.LS.4.3 | Loan Scenario - 4.3 | INTEGER | 0 |  |
| CX.LS.4.4 | Loan Scenario - 4.4 | INTEGER | 0 |  |
| CX.LS.423.3 | Loan Scenario - 423.3 | STRING | 50 |  |
| CX.LS.423.4 | Loan Scenario - 423.4 | STRING | 50 |  |
| CX.LS.442DONE | LS 442 completion cert done date | DATE | 0 |  |
| CX.LS.442DUE | LS 442 completion cert due date | DATE | 0 |  |
| CX.LS.442NEEDED | LS 442 completion cert needed | YN | 0 |  |
| CX.LS.442ORDERED | LS 442 completion cert ordered date | DATE | 0 |  |
| CX.LS.442RECEIVED | LS 442 completion cert received date | DATE | 0 |  |
| CX.LS.5.1 | Loan Scenario - 5.1 | DECIMAL_2 | 0 |  |
| CX.LS.5.2 | Loan Scenario - 5.2 | DECIMAL_2 | 0 |  |
| CX.LS.5.3 | Loan Scenario - 5.3 | DECIMAL_2 | 0 |  |
| CX.LS.5.4 | Loan Scenario - 5.4 | DECIMAL_2 | 0 |  |
| CX.LS.688.1 | Loan Scenario - 688.1 | DECIMAL_3 | 0 |  |
| CX.LS.688.2 | Loan Scenario - 688.2 | DECIMAL_3 | 0 |  |
| CX.LS.688.3 | Loan Scenario - 688.3 | DECIMAL_3 | 0 |  |
| CX.LS.688.4 | Loan Scenario - 688.4 | DECIMAL_3 | 0 |  |
| CX.LS.689.1 | Loan Scenario - 689.1 | DECIMAL_3 | 0 |  |
| CX.LS.689.2 | Loan Scenario - 689.2 | DECIMAL_3 | 0 |  |
| CX.LS.689.3 | Loan Scenario - 689.3 | DECIMAL_3 | 0 |  |
| CX.LS.689.4 | Loan Scenario - 689.4 | DECIMAL_3 | 0 |  |
| CX.LS.694.1 | Loan Scenario - 694.1 | DECIMAL_3 | 0 |  |
| CX.LS.694.2 | Loan Scenario - 694.2 | DECIMAL_3 | 0 |  |
| CX.LS.694.3 | Loan Scenario - 694.3 | DECIMAL_3 | 0 |  |
| CX.LS.694.4 | Loan Scenario - 694.4 | DECIMAL_3 | 0 |  |
| CX.LS.695.1 | Loan Scenario - 695.1 | DECIMAL_3 | 0 |  |
| CX.LS.695.2 | Loan Scenario - 695.2 | DECIMAL_3 | 0 |  |
| CX.LS.695.3 | Loan Scenario - 695.3 | DECIMAL_3 | 0 |  |
| CX.LS.695.4 | Loan Scenario - 695.4 | DECIMAL_3 | 0 |  |
| CX.LS.696.1 | Loan Scenario - 696.1 | DECIMAL_3 | 0 |  |
| CX.LS.696.2 | Loan Scenario - 696.2 | DECIMAL_3 | 0 |  |
| CX.LS.696.3 | Loan Scenario - 696.3 | DECIMAL_3 | 0 |  |
| CX.LS.696.4 | Loan Scenario - 696.4 | DECIMAL_3 | 0 |  |
| CX.LS.697.1 | Loan Scenario - 697.1 | DECIMAL_3 | 0 |  |
| CX.LS.697.2 | Loan Scenario - 697.2 | DECIMAL_3 | 0 |  |
| CX.LS.697.3 | Loan Scenario - 697.3 | DECIMAL_3 | 0 |  |
| CX.LS.697.4 | Loan Scenario - 697.4 | DECIMAL_3 | 0 |  |
| CX.LS.733.1 | Loan Scenario - 733.1 | DECIMAL_2 | 0 |  |
| CX.LS.733.2 | Loan Scenario - 733.2 | DECIMAL_2 | 0 |  |
| CX.LS.733.3 | Loan Scenario - 733.3 | DECIMAL_2 | 0 |  |
| CX.LS.733.4 | Loan Scenario - 733.4 | DECIMAL_2 | 0 |  |
| CX.LS.799.1 | Loan Scenario - 799.1 | DECIMAL_3 | 0 |  |
| CX.LS.799.1.PF | Loan Scenario - 799.1 Print | DECIMAL_3 | 0 | IIF ([CX.LS.APR.PRINT] = "X", "",  [CX.LS.799.1]) |
| CX.LS.799.2 | Loan Scenario - 799.2 | DECIMAL_3 | 0 |  |
| CX.LS.799.2.PF | Loan Scenario - 799.2 Print Form | DECIMAL_3 | 0 | IIF ([CX.LS.APR.PRINT] = "X", "",  [CX.LS.799.2]) |
| CX.LS.799.3 | Loan Scenario - 799.3 | DECIMAL_3 | 0 |  |
| CX.LS.799.3.PF | Loan Scenario - 799.3 Print | DECIMAL_3 | 0 | IIF ([CX.LS.APR.PRINT] = "X", "",  [CX.LS.799.3]) |
| CX.LS.799.4 | Loan Scenario - 799.4 | DECIMAL_3 | 0 |  |
| CX.LS.799.4.PF | Loan Scenario - 799.4 Print | DECIMAL_3 | 0 | IIF ([CX.LS.APR.PRINT] = "X", "",  [CX.LS.799.4]) |
| CX.LS.912.1 | Loan Scenario - 912.1 | DECIMAL_2 | 0 |  |
| CX.LS.912.2 | Loan Scenario - 912.2 | DECIMAL_2 | 0 |  |
| CX.LS.912.3 | Loan Scenario - 912.3 | DECIMAL_2 | 0 |  |
| CX.LS.912.4 | Loan Scenario - 912.4 | DECIMAL_2 | 0 |  |
| CX.LS.976.1 | Loan Scenario - 976.1 | DECIMAL_3 | 0 |  |
| CX.LS.976.2 | Loan Scenario - 976.2 | DECIMAL_3 | 0 |  |
| CX.LS.976.3 | Loan Scenario - 976.3 | DECIMAL_3 | 0 |  |
| CX.LS.976.4 | Loan Scenario - 976.4 | DECIMAL_3 | 0 |  |
| CX.LS.AMORT | Amortization Type (LS) | DROPDOWNLIST | 0 |  |
| CX.LS.APPR.SUBJ.TO | Appraisal Subject to | STRING | 250 |  |
| CX.LS.APPRAISAL | LS appraisal | STRING | 5000 |  |
| CX.LS.APPRCOMPLETED | LS Appraisal Completed | DATE | 0 |  |
| CX.LS.APPRORDERED | LS Appraisal Ordered | DATE | 0 |  |
| CX.LS.APPRREQBY | LS Appraisal Required By | DATE | 0 |  |
| CX.LS.APPRSCHEDFOR | LS Appraisal Scheduled For | DATE | 0 |  |
| CX.LS.APR.LABEL | Loan Scenario APR Label Print | STRING | 10 | IIF ([CX.LS.APR.PRINT] = "X", "", "APR") |
| CX.LS.AVMCALC | AVM Calc to Est Value | STRING | 30 | if([CX.LS.AVMSMAPPROVAL]="X","Approved",if(([CX.LS.AVMVALUE]/[1821]*100)<85,"Requires Approval","Val |
| CX.LS.AVMSMAPPROVAL | AVM Low Value SM Approval | X | 0 |  |
| CX.LS.AVMVALUE | AVM Value | DECIMAL_2 | 0 |  |
| CX.LS.BAAPPRORDERED | LS Buyer's Agent Appraisal Ordered | DATE | 0 |  |
| CX.LS.BCITIZENSHIP | Borrower Citizenship | DROPDOWNLIST | 0 |  |
| CX.LS.BPDOCTYPE | Borrower Primary Doc Type | DROPDOWNLIST | 0 |  |
| CX.LS.BPDOCTYPE2 | Borrower Primary Doc Type 2 | DROPDOWNLIST | 0 |  |
| CX.LS.BPDOCTYPEM | Borrower Primary Doc Type Months | DROPDOWNLIST | 0 |  |
| CX.LS.BPDOCTYPEM2 | Borrower Primary Doc Type Months 2 | DROPDOWNLIST | 0 |  |
| CX.LS.BWRAPPRORDERED | LS Borrower Appraisal Ordered | DATE | 0 |  |
| CX.LS.BWRAPPRSCHED | LS Borrower Appraisal Scheduled For | DATE | 0 |  |
| CX.LS.CAMPAIGN | Campaign Type | DROPDOWNLIST | 0 |  |
| CX.LS.CAMPAIGNCODE | Campaign Code | STRING | 100 |  |
| CX.LS.CASH.BORR.0 | Loan Scanario - Borrower Cash | DECIMAL_2 | 0 | IIF([LE2.X28] = "N", [LE2.X25], [LE2.X26]) |
| CX.LS.CASH.BORR.1 | Loan Scanario 1 - Borrower Cash  | DECIMAL_2 | 0 |  |
| CX.LS.CASH.BORR.2 | Loan Scanario 2 - Borrower Cash  | DECIMAL_2 | 0 |  |
| CX.LS.CASH.BORR.3 | Loan Scanario 3 - Borrower Cash  | DECIMAL_2 | 0 |  |
| CX.LS.CASH.BORR.4 | Loan Scanario 4 - Borrower Cash  | DECIMAL_2 | 0 |  |
| CX.LS.CBCITIZENSHIP | Co-Borrower Citizenship | DROPDOWNLIST | 0 |  |
| CX.LS.CBPDOCTYPE | Co-Borrower Primary Doc Type | DROPDOWNLIST | 0 |  |
| CX.LS.CBPDOCTYPE2 | Co-Borrower Primary Doc Type 2 | DROPDOWNLIST | 0 |  |
| CX.LS.CBPDOCTYPEM | Co-Borrower Primary Doc Type Months | DROPDOWNLIST | 0 |  |
| CX.LS.CBPDOCTYPEM2 | Co-Borrower Primary Doc Type Months 2 | DROPDOWNLIST | 0 |  |
| CX.LS.CC.0 | Closing Costs | DECIMAL_2 | 0 | sumany ([LE2.XSTD], [LE2.XSTE]) |
| CX.LS.CC.1 | Closing Costs Scenario 1 | INTEGER | 0 |  |
| CX.LS.CC.2 | Closing Costs Scenario 2 | INTEGER | 0 |  |
| CX.LS.CC.3 | Closing Costs Scenario 3 | INTEGER | 0 |  |
| CX.LS.CC.4 | Closing Costs Scenario 4 | INTEGER | 0 |  |
| CX.LS.CIRCVBYTITLE | LS closing instr received by title co date | DATE | 0 |  |
| CX.LS.CIREQBY | LS closing instr required by date | DATE | 0 |  |
| CX.LS.CISENT | LS closing instr sent date | DATE | 0 |  |
| CX.LS.CLOSER.NOTES | Closer Notes | STRING | 2000 |  |
| CX.LS.CLOSER.NOTES.AUDIT | Closer Notes Audit | STRING | 10000 |  |
| CX.LS.CLOSINGLOCATION | LS Closing Location | STRING | 200 |  |
| CX.LS.CLSDOCREQBY | LS closing docs required by date | DATE | 0 |  |
| CX.LS.CLSDOCSRCVBYTITLE | LS closing docs received by title co date | DATE | 0 |  |
| CX.LS.COLAPPRV | LS Collateral Approved | DATE | 0 |  |
| CX.LS.CONDOAPPROV | LS Condo Project Approved | DATE | 0 |  |
| CX.LS.CONDODOCSREQ | LS Condo Docs Requested | DATE | 0 |  |
| CX.LS.CONDODOCSSUB | LS Condo Docs Submitted | DATE | 0 |  |
| CX.LS.COPY.1 | Copied to Scenario 1 | STRING | 1 |  |
| CX.LS.COPY.2 | Copied to Scenario 2 | STRING | 1 |  |
| CX.LS.COPY.3 | Copied to Scenario 3 | STRING | 1 |  |
| CX.LS.COPY.4 | Copied to Scenario 4 | STRING | 1 |  |
| CX.LS.COULDHAVECLOSED | LS Could Have Closed Date | DATE | 0 |  |
| CX.LS.CU.SCORE | SSR Score | STRING | 10 |  |
| CX.LS.CUAUWSTMT | CUA UW Statement | STRING | 100 |  |
| CX.LS.DISCOUNT.0 | Discount | DECIMAL_2 | 0 | [#NEWHUD.X1151] |
| CX.LS.DISCOUNT.1 | Discount Scenario 1 | DECIMAL_2 | 0 |  |
| CX.LS.DISCOUNT.2 | Discount Scenario 2 | DECIMAL_2 | 0 |  |
| CX.LS.DISCOUNT.3 | Discount Scenario 3 | DECIMAL_2 | 0 |  |
| CX.LS.DISCOUNT.4 | Discount Scenario 4 | DECIMAL_2 | 0 |  |
| CX.LS.ECONSENTREQ | eConsent Requested | DATE | 0 |  |
| CX.LS.ESCROWCLOSE | LS close of escrow date | DATE | 0 |  |
| CX.LS.ESCROWSIGN | LS escrow sign date | DATE | 0 |  |
| CX.LS.EXPLAINDEADLINES | LS explanation of deadlines | STRING | 400 |  |
| CX.LS.FINALLECALL | LS Final LE Call to Bwr | DATE | 0 |  |
| CX.LS.FINALLEDUE | LS Final LE Due | DATE | 0 |  |
| CX.LS.FINALLERET | LS Final LE Returned | DATE | 0 |  |
| CX.LS.FINALLESENT | LS Final LE Sent | DATE | 0 |  |
| CX.LS.FLOOD.COMP.APPR | Flood Zone from Appraisal | STRING | 3 |  |
| CX.LS.FORM.OPEN.COUNTER | Count of form open per session | INTEGER | 0 |  |
| CX.LS.FUNDSRCVBYTITLE | LS funds received by title co date | DATE | 0 |  |
| CX.LS.FUNDSREQBY | LS funds required by date | DATE | 0 |  |
| CX.LS.HELP.TEXT | Loan Scenario Help Text | STRING | 1100 | "This worksheet will allow you to make side by side comparisons" 
+ vbcr +
"of any 4 loan programs |
| CX.LS.HOUSING.DIFF | Loan Scenario - Housing Difference | DECIMAL_2 | 0 | [#912]-[#737] |
| CX.LS.HOUSING.DIFF.1 | Loan Scenario - Housing Difference.1 | DECIMAL_2 | 0 |  |
| CX.LS.HOUSING.DIFF.2 | Loan Scenario - Housing Difference.2 | DECIMAL_2 | 0 |  |
| CX.LS.HOUSING.DIFF.3 | Loan Scenario - Housing Difference.3 | DECIMAL_2 | 0 |  |
| CX.LS.HOUSING.DIFF.4 | Loan Scenario - Housing Difference.4 | DECIMAL_2 | 0 |  |
| CX.LS.HUD1RCVBYTITLE | LS HUD1 received by title co date | DATE | 0 |  |
| CX.LS.HUD1REQBYDATE | LS HUD1 required by date | DATE | 0 |  |
| CX.LS.HUD1SENT | LS HUD1 sent date | DATE | 0 |  |
| CX.LS.LASTCRVW | Last Reviewed by Closer | DATE | 0 |  |
| CX.LS.LASTDOCRCVD | Last Document Received | DATE | 0 |  |
| CX.LS.LASTPRVW | Last Reviewed by Processor Sr | DATE | 0 |  |
| CX.LS.LASTPRVW.JR | Last Reviewed by Processor Jr | DATE | 0 |  |
| CX.LS.LASTQRVW | Last Reviewed by QA Analyst | DATE | 0 |  |
| CX.LS.LASTURVW | Last Reviewed by Underwriter | DATE | 0 |  |
| CX.LS.LE2.XLC.1 | Lender Credit Scenario 1 | DECIMAL_2 | 0 |  |
| CX.LS.LE2.XLC.2 | Lender Credit Scenario 2 | DECIMAL_2 | 0 |  |
| CX.LS.LE2.XLC.3 | Lender Credit Scenario 3 | DECIMAL_2 | 0 |  |
| CX.LS.LE2.XLC.4 | Lender Credit Scenario 4 | DECIMAL_2 | 0 |  |
| CX.LS.LIENPOS | Lien Position (LS) | DROPDOWNLIST | 0 |  |
| CX.LS.LO.NOTES | Loan Officer Notes | STRING | 2000 |  |
| CX.LS.LO.NOTES.AUDIT | LO Notes Audit | STRING | 8000 |  |
| CX.LS.LOANPURPOSE | Loan Purpose (LS) | DROPDOWNLIST | 0 |  |
| CX.LS.LOANTYPE | Loan Type (LS) | DROPDOWNLIST | 0 |  |
| CX.LS.MUSTCLOSEBY | LS must close by date | DATE | 0 |  |
| CX.LS.OBSERVATIONS | Loan Setup Observations | STRING | 3000 |  |
| CX.LS.OPENER.NOTES | Opener Notes | STRING | 2000 |  |
| CX.LS.OPENER.NOTES.AUDIT | Opener Notes Audit | STRING | 10000 |  |
| CX.LS.ORIGCLOSE | LS Original Close Date | DATE | 0 |  |
| CX.LS.POSTCLOSER.NOTES | Post Closer Notes | STRING | 2000 |  |
| CX.LS.POSTCLOSER.NOTES.AUDIT | Post Closer Notes Audit | STRING | 10000 |  |
| CX.LS.PP.0 | Prepaids | INTEGER | 0 | [#LE2.XSTF] |
| CX.LS.PP.1 | Prepaids Scenario 1 | INTEGER | 0 |  |
| CX.LS.PP.2 | Prepaids Scenario 2 | INTEGER | 0 |  |
| CX.LS.PP.3 | Prepaids Scenario 3 | INTEGER | 0 |  |
| CX.LS.PP.4 | Prepaids Scenario 4 | INTEGER | 0 |  |
| CX.LS.PREFERRED.NAME | Preferred Name | STRING | 256 |  |
| CX.LS.PREQ.ANNUAL.SAV | Loan Scenario - Annual Savings | DECIMAL_2 | 0 | ([#CX.LS.HOUSING.DIFF]+[#CX.LS.PREQ.MONTH.SAV])*12 |
| CX.LS.PREQ.ANNUAL.SAV.1 | Loan Scenario - Annual Savings.1 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.ANNUAL.SAV.2 | Loan Scenario - Annual Savings.2 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.ANNUAL.SAV.3 | Loan Scenario - Annual Savings.3 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.ANNUAL.SAV.4 | Loan Scenario - Annual Savings.4 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.MONTH.SAV | Loan Scenario - Monthly Savings | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.MONTH.SAV.1 | Loan Scenario - Monthly Savings.1 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.MONTH.SAV.2 | Loan Scenario - Monthly Savings.2 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.MONTH.SAV.3 | Loan Scenario - Monthly Savings.3 | DECIMAL_2 | 0 |  |
| CX.LS.PREQ.MONTH.SAV.4 | Loan Scenario - Monthly Savings.4 | DECIMAL_2 | 0 |  |
| CX.LS.PRINT | Allowed to Print Command | X | 0 |  |
| CX.LS.PRINT.NOTE.1 | Loan Scenario - Print Borrower Notes.1 | X | 0 |  |
| CX.LS.PRINT.NOTE.2 | Loan Scenario - Print Borrower Notes.2 | X | 0 |  |
| CX.LS.PRINT.NOTE.3 | Loan Scenario - Print Borrower Notes.3 | X | 0 |  |
| CX.LS.PRINT.NOTE.4 | Loan Scenario - Print Borrower Notes.4 | X | 0 |  |
| CX.LS.PROC.NOTES | Processor Notes | STRING | 2000 |  |
| CX.LS.PROC.NOTES.AUDIT | Processor Notes Audit | STRING | 10000 |  |
| CX.LS.RL.AO.NOTES | Rate Lock Appraisal Order Notes | STRING | 2000 |  |
| CX.LS.RL.AO.NOTES.AUDIT | Rate Lock Appraisal Order Notes Audit | STRING | 10000 |  |
| CX.LS.SCHEDCLOSEDATE | Scheduled Close Date | DATE | 0 |  |
| CX.LS.SCHEDCLOSETIME | Scheduled Close Time | STRING | 100 |  |
| CX.LS.SEMINAR | Seminar | DROPDOWNLIST | 0 |  |
| CX.LS.SURVEYBA1 | LS Survey BA 1 | INTEGER | 0 |  |
| CX.LS.SURVEYBA2 | LS Survey BA 2 | INTEGER | 0 |  |
| CX.LS.SURVEYBA3 | LS Survey BA 3 | INTEGER | 0 |  |
| CX.LS.SURVEYBWR1 | LS Survey Bwr 1 | INTEGER | 0 |  |
| CX.LS.SURVEYBWR2 | LS Survey Bwr 2 | INTEGER | 0 |  |
| CX.LS.SURVEYBWR3 | LS Survey Bwr 3 | INTEGER | 0 |  |
| CX.LS.SYS.X1.1 | Loan Scenario - SYS.X1.1 | X | 0 |  |
| CX.LS.SYS.X1.2 | Loan Scenario - SYS.X1.2 | X | 0 |  |
| CX.LS.SYS.X1.3 | Loan Scenario - SYS.X1.3 | X | 0 |  |
| CX.LS.SYS.X1.4 | Loan Scenario - SYS.X1.4 | X | 0 |  |
| CX.LS.T.E.NOTES | Title/Escrow Notes | STRING | 2000 |  |
| CX.LS.T.E.NOTES.AUDIT | Title/Escrow Notes Audit | STRING | 10000 |  |
| CX.LS.TCC.0 | Total Closing Costs | INTEGER | 0 | [#LE2.XSTJ] |
| CX.LS.TCC.1 | Total Closing Costs Scenario 1 | INTEGER | 0 |  |
| CX.LS.TCC.2 | Total Closing Costs Scenario 2 | INTEGER | 0 |  |
| CX.LS.TCC.3 | Total Closing Costs Scenario 3 | INTEGER | 0 |  |
| CX.LS.TCC.4 | Total Closing Costs Scenario 4 | INTEGER | 0 |  |
| CX.LS.UW.NOTES | UW Notes | STRING | 2000 |  |
| CX.LS.UW.NOTES.AUDIT | UW Notes Audit | STRING | 10000 |  |
| CX.LS.X273.1 | Loan Scenario - x273.1 | STRING | 250 |  |
| CX.LS.X273.1.PF | Loan Scenario - x273.1 Print | STRING | 250 | IIF ([CX.LS.PRINT.NOTE.1] = "X", [CX.LS.X273.1], "") |
| CX.LS.X273.2 | Loan Scenario - x273.2 | STRING | 250 |  |
| CX.LS.X273.2.PF | Loan Scenario - x273.2 Print | STRING | 250 | IIF ([CX.LS.PRINT.NOTE.2] = "X", [CX.LS.X273.2], "") |
| CX.LS.X273.3 | Loan Scenario - x273.3 | STRING | 250 |  |
| CX.LS.X273.3.PF | Loan Scenario - x273.3 Print  | STRING | 250 | IIF ([CX.LS.PRINT.NOTE.3] = "X", [CX.LS.X273.3], "") |
| CX.LS.X273.4 | Loan Scenario - x273.4 | STRING | 250 |  |
| CX.LS.X273.4.PF | Loan Scenario - x273.4 Print | STRING | 250 | IIF ([CX.LS.PRINT.NOTE.4] = "X", [CX.LS.X273.4], "") |
| CX.LT.USPS.VERIFIED | Indicates Subject Property Verified Successfully | YN | 0 |  |
| CX.LT.USPS.VERIFIED.ADDRESS | Verified Address Returned from USPS API | STRING | 1024 |  |
| CX.LT.USPS.VERIFIED.BY | Encompass ID Who Initiated Verification | STRING | 250 |  |
| CX.LT.USPS.VERIFIED.DATETIME | Timestamp of Last USPS Verification | STRING | 250 |  |
| CX.LTR.OF.INC.REASON09.TEXT | LTR.OF.INC.REASON09.TEXT | STRING | 256 |  |
| CX.MACRO.ACTION | MacroExecPlugin - Macro.ExecAction().  Set to action name for execution from Field Trigger | STRING | 100 |  |
| CX.MACRO.DELAYMS | MacroExecPlugin - Execution delay in milliseconds.  Set to some delay value to solve repeated popups | INTEGER | 0 |  |
| CX.MACRO.SIGNATURE | MacroExecPlugin - Macro.ExecSignature().  Set to EPASS signature for execution from Field Trigger | STRING | 200 |  |
| CX.MANUAL.FLD.ACTIVATED | Manual Flood Activated | DATE | 0 | [@Log.Alert.DateActivated.Flood Certificate Pending Manual Research] |
| CX.MANUAL.FLD.DAYS.PAST.DUE | Manual Flood Cert Days Past Due | INTEGER | 0 | DateDiff("d", [CX.Manual.FLD.Activated],TODAY) |
| CX.MANUAL.FLD.PAST.DUE | Manual Flood Past Due | DATE | 0 | DateAdd("d", 1, [@Log.Alert.DateActivated.Flood Certificate Pending Manual Research]) |
| CX.MATURITYDT.2DIGITDAYPATTERN | dd | STRING | 2 |  |
| CX.MATURITYDT.2DIGITYEARPATTERN | yy | STRING | 2 |  |
| CX.MATURITYDT.DAYALPHAPATTERN | dddd | STRING | 10 |  |
| CX.MATURITYDT.DAYPATTERN | st, nd, rd, th | STRING | 4 |  |
| CX.MATURITYDT.DAYSPELLEDPATTERN | alpha day | STRING | 20 |  |
| CX.MATURITYDT.LONGDATEPATTERN | Day, month year | STRING | 150 |  |
| CX.MATURITYDT.MONTHDAYYEARPATTERN | MMMM, dd yyyy | STRING | 30 |  |
| CX.MATURITYDT.MONTHPATTERN | MMMM | STRING | 20 |  |
| CX.MATURITYDT.MONTHYEARPATTERN | MMMM, yyyy | STRING | 30 |  |
| CX.MATURITYDT.SHORTDATEPATTERN | M/d/yyyy | STRING | 10 |  |
| CX.MATURITYDT.YEARFORMAT | YYYY | STRING | 4 |  |
| CX.MATURITYDT.YEARTEXT | Year in Text Format | STRING | 50 |  |
| CX.MCC | MCC | DROPDOWNLIST | 0 |  |
| CX.MCC.BUILDER.LOAN | MCC Builder Loan | X | 0 |  |
| CX.MCC.NAME | MCC Name | STRING | 200 |  |
| CX.MCC.RESERVATION.DATE | MCC Reservation Date | DATE | 0 |  |
| CX.MCC.RESERVATION.EXP.DATE | MCC Reservation Expiration Date | DATE | 0 |  |
| CX.MCC.RESERVATION.NUMBER | MCC Reservation Number | STRING | 35 |  |
| CX.MEMBER.APPLICATION.NOTES | Section for sales to provide details regarding the account application for new members | STRING | 250 |  |
| CX.MEMBER.INITIATE.APP | click this button to initiate new member application | X | 0 |  |
| CX.MEMBER.NUMBER | Member Number - Primary Borrower | STRING | 50 |  |
| CX.MEMBERNUMBER | Member Number | STRING | 20 |  |
| CX.MEMBERSTATUS | Member Status | STRING | 5 |  |
| CX.MERS.COMMENTS | MERS Final Docs Comments | STRING | 1000 |  |
| CX.MFYR | Manufactured House Year | STRING | 4 | [2579] |
| CX.MI.CHECKED | MI Checked | X | 0 |  |
| CX.MI.CHECKED.BY | MI Checked Date | AUDIT | 0 | Audit([CX.MI.CHECKED], 2) |
| CX.MI.CHECKED.DATE | MI Checked By | AUDIT | 0 | Audit([CX.MI.CHECKED], 1) |
| CX.MI.NOT.REQUIRED | MI is not required | X | 0 |  |
| CX.MI.STATUS | Mortgage Insurance Status | YN | 0 |  |
| CX.MI.UPDATE | Push the Get MI Button to Recalculate MI | STRING | 1 |  |
| CX.MIAC.MSR | MIAC MSR VALUE | DECIMAL_7 | 0 |  |
| CX.MIAC.MSR.DOLLAR | cx.miac.msr.dollar | DECIMAL_2 | 0 |  |
| CX.MIC.C.D | MIC Cleared Date | DATE | 0 |  |
| CX.MIC.C.U | MIC Received User | AUDIT | 0 | Audit([CX.MIC.C.D], 0) |
| CX.MIC.R.D | MIC  Recieved | DATE | 0 |  |
| CX.MIC.R.U | MIC  Received User | AUDIT | 0 | Audit([CX.MIC.R.D], 0) |
| CX.MIC.S.D | MIC Sent Date | DATE | 0 |  |
| CX.MIC.S.U | MIC Received User | AUDIT | 0 | Audit([CX.MIC.S.D], 0) |
| CX.MIDAVG | Average of MID Scores | INTEGER | 0 | DIV([CX.ALLMID], [CX.ALLMIDCOUNT]) |
| CX.MINOR.CODE | Minor Code | DROPDOWNLIST | 0 |  |
| CX.MIP.AMT.PAID.CASH | MIP Amount Paid in Cash is incorrect | STRING | 1 |  |
| CX.MIP.CHECK.OVERRIDE | MIP Check Override | INTEGER | 0 |  |
| CX.MIP.FUND.GUAR.FINANCED | MIP / Funding / Guarantee Financed | YN | 0 |  |
| CX.MIP.LATE.CHARGE.AMOUNT | MIP Late Charge Amount | DECIMAL_2 | 0 |  |
| CX.MIPVAPOSTCLOSENOTES | MIP/VA Post Closing Notes | STRING | 1000 |  |
| CX.MISC.C.D | MIsC Cleared Date | DATE | 0 |  |
| CX.MISC.C.U | MISC Received User | AUDIT | 0 | Audit([CX.MISC.C.D], 0) |
| CX.MISC.D | Type of Misc Trailing Doc | STRING | 30 |  |
| CX.MISC.R.D | MIsC  Recieved | DATE | 0 |  |
| CX.MISC.R.U | MIsC  Received User | AUDIT | 0 | Audit([CX.MISC.R.D], 0) |
| CX.MISC.S.D | MISC Sent Date | DATE | 0 |  |
| CX.MISC.S.U | MISC Received User | AUDIT | 0 | Audit([CX.MISC.S.D], 0) |
| CX.MLCDUE | MLC Due Date | DATE | 0 |  |
| CX.MLCISSUED | MLC Issued Date | DATE | 0 |  |
| CX.MLONOTESMCCCREDIT | MLO File Notes- MCC Credit | DROPDOWNLIST | 0 |  |
| CX.MM.BA.CP | MM.BA.CP | PHONE | 0 | [VEND.X500] |
| CX.MM.BA.EM | MM.BA.EM | STRING | 100 | [VEND.X141] |
| CX.MM.BA.FN | MM.BA.FN | STRING | 50 | Trim(Left([VEND.X139], InStr([VEND.X139], " "))) |
| CX.MM.BA.LAN | MM.BA.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BA.LN | MM.BA.LN | STRING | 50 | Trim(Right([VEND.X139],([VEND.X139].Length()-InStr([VEND.X139], " ")))) |
| CX.MM.BA.OPTOUT | MM.BA.OPTOUT | X | 0 |  |
| CX.MM.BOR1.LAN | MM.BOR1.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR1.OPTOUT | MM.BOR1.OPTOUT | X | 0 |  |
| CX.MM.BOR2.LAN | MM.BOR2.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR2.OPTOUT | MM.BOR2.OPTOUT | X | 0 |  |
| CX.MM.BOR3.LAN | MM.BOR3.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR3.OPTOUT | MM.BOR3.OPTOUT | X | 0 |  |
| CX.MM.BOR4.LAN | MM.BOR4.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR4.OPTOUT | MM.BOR4.OPTOUT | X | 0 |  |
| CX.MM.BOR5.LAN | MM.BOR5.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR5.OPTOUT | MM.BOR5.OPTOUT | X | 0 |  |
| CX.MM.BOR6.LAN | MM.BOR6.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR6.OPTOUT | MM.BOR6.OPTOUT | X | 0 |  |
| CX.MM.BOR7.LAN | MM.BOR7.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR7.OPTOUT | MM.BOR7.OPTOUT | X | 0 |  |
| CX.MM.BOR8.LAN | MM.BOR8.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.BOR8.OPTOUT | MM.BOR8.OPTOUT | X | 0 |  |
| CX.MM.CA01.DT | MM.CA01.DT | DATE | 0 |  |
| CX.MM.CA01.TF | MM.CA01.TF | STRING | 5 |  |
| CX.MM.CA02.DT | MM.CA02.DT | DATE | 0 |  |
| CX.MM.CA02.TF | MM.CA02.TF | STRING | 5 |  |
| CX.MM.CA03.DT | MM.CA03.DT | DATE | 0 |  |
| CX.MM.CA03.TF | MM.CA03.TF | STRING | 5 |  |
| CX.MM.CA04.DT | MM.CA04.DT | DATE | 0 |  |
| CX.MM.CA04.TF | MM.CA04.TF | STRING | 5 |  |
| CX.MM.CA05.DT | MM.CA05.DT | DATE | 0 |  |
| CX.MM.CA05.TF | MM.CA05.TF | STRING | 5 |  |
| CX.MM.CA06.DT | MM.CA06.DT | DATE | 0 |  |
| CX.MM.CA06.TF | MM.CA06.TF | STRING | 5 |  |
| CX.MM.CA07.DT | MM.CA07.DT | DATE | 0 |  |
| CX.MM.CA07.TF | MM.CA07.TF | STRING | 5 |  |
| CX.MM.CA08.DT | MM.CA08.DT | DATE | 0 |  |
| CX.MM.CA08.TF | MM.CA08.TF | STRING | 5 |  |
| CX.MM.CA09.DT | MM.CA09.DT | DATE | 0 |  |
| CX.MM.CA09.TF | MM.CA09.TF | STRING | 5 |  |
| CX.MM.CA10.DT | MM.CA10.DT | DATE | 0 |  |
| CX.MM.CA10.TF | MM.CA10.TF | STRING | 5 |  |
| CX.MM.LP.CP | MM.LP.CP | PHONE | 0 | [LoanTeamMember.Cell.Loan Processor] |
| CX.MM.LP.EM | MM.LP.EM | STRING | 100 | [LoanTeamMember.Email.Loan Processor] |
| CX.MM.LP.FN | MM.LP.FN | STRING | 50 | Trim(Left([LoanTeamMember.Name.Loan Processor], InStr([LoanTeamMember.Name.Loan Processor], " "))) |
| CX.MM.LP.LAN | MM.LP.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.LP.LN | MM.LP.LN | STRING | 50 | Trim(Right([LoanTeamMember.Name.Loan Processor],([LoanTeamMember.Name.Loan Processor].Length()-InStr |
| CX.MM.LP.OP | MM.LP.OP | PHONE | 0 | [LoanTeamMember.Phone.Loan Processor] |
| CX.MM.LP.OPTOUT | MM.LP.OPTOUT | X | 0 |  |
| CX.MM.MLO.CP | MM.MLO.CP | PHONE | 0 | [LoanTeamMember.Cell.Loan Officer] |
| CX.MM.MLO.EM | MM.MLO.EM | STRING | 100 | [LoanTeamMember.Email.Loan Officer] |
| CX.MM.MLO.FN | MM.MLO.FN | STRING | 50 | Trim(Left([LoanTeamMember.Name.Loan Officer], InStr([LoanTeamMember.Name.Loan Officer], " "))) |
| CX.MM.MLO.LAN | MM.MLO.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.MLO.LN | MM.MLO.LN | STRING | 50 | Trim(Right([LoanTeamMember.Name.Loan Officer],([LoanTeamMember.Name.Loan Officer].Length()-InStr([Lo |
| CX.MM.MLO.OP | MM.MLO.OP | PHONE | 0 | [LoanTeamMember.Phone.Loan Officer] |
| CX.MM.MLO.OPTOUT | MM.MLO.OPTOUT | X | 0 |  |
| CX.MM.SA.CP | MM.SA.CP | PHONE | 0 | [VEND.X501] |
| CX.MM.SA.EM | MM.SA.EM | STRING | 100 | [VEND.X152] |
| CX.MM.SA.FN | MM.SA.FN | STRING | 50 | Trim(Left([VEND.X150], InStr([VEND.X150], " "))) |
| CX.MM.SA.LAN | MM.SA.LAN | DROPDOWNLIST | 0 |  |
| CX.MM.SA.LN | MM.SA.LN | STRING | 50 | Trim(Right([VEND.X150],([VEND.X150].Length()-InStr([VEND.X150], " ")))) |
| CX.MM.SA.OPTOUT | MM.SA.OPTOUT | X | 0 |  |
| CX.MM.STARTON | MM.STARTON | DATE | 0 |  |
| CX.MNTHSJOB | Months on Job | DECIMAL | 0 | DateDiff("month",[BE0111],[BE0114]) |
| CX.MONTHDAYYEARPATTERN | MMMM, dd yyyy | STRING | 30 |  |
| CX.MONTHPATTERN | MMMM | STRING | 20 |  |
| CX.MONTHYEARPATTERN | MMMM, yyyy | STRING | 30 |  |
| CX.MORT.CREDIT.CERTIFICATE | Mortgage Credit Certificate Utilized  | DROPDOWNLIST | 0 |  |
| CX.MS.EXPECTED.DATE.PROC | CX.MS.EXPECTED.DATE.PROC | DATE | 0 |  |
| CX.MS.SETDATE.000.NOTES | MS.SETDATE.000.NOTES | STRING | 500 |  |
| CX.MS.SETDATE.001.PREQUAL | MS.SETDATE.001.PREQUAL | DATE | 0 |  |
| CX.MS.SETDATE.001.PREQUAL.BY | MS.SETDATE.001.PREQUAL.BY | STRING | 30 |  |
| CX.MS.SETDATE.001.PREQUAL.DA | MS.SETDATE.001.PREQUAL.DATE | STRING | 30 |  |
| CX.MS.SETDATE.020.PROC | MS.SETDATE.020.PROC | DATE | 0 |  |
| CX.MS.SETDATE.020.PROC.BY | MS.SETDATE.020.PROC.BY | STRING | 30 |  |
| CX.MS.SETDATE.020.PROC.DATE | MS.SETDATE.020.PROC.DATE | STRING | 30 |  |
| CX.MS.SETDATE.020.PROC.TIMES | MS.SETDATE.020.PROC.TIMES | INTEGER | 0 |  |
| CX.MS.SETDATE.030.SUBM | MS.SETDATE.030.SUBM | DATE | 0 |  |
| CX.MS.SETDATE.030.SUBM.BY | MS.SETDATE.030.SUBM.BY | STRING | 30 |  |
| CX.MS.SETDATE.030.SUBM.DATE | MS.SETDATE.030.SUBM.DATE | STRING | 30 |  |
| CX.MS.SETDATE.030.SUBM.TIMES | MS.SETDATE.030.SUBM.TIMES | INTEGER | 0 |  |
| CX.MS.SETDATE.032.COND | MS.SETDATE.032.COND | DATE | 0 |  |
| CX.MS.SETDATE.032.COND.BY | MS.SETDATE.032.COND.BY | STRING | 30 |  |
| CX.MS.SETDATE.032.COND.DATE | MS.SETDATE.032.COND.DATE | STRING | 30 |  |
| CX.MS.SETDATE.035.RESUB | MS.SETDATE.035.RESUB | DATE | 0 |  |
| CX.MS.SETDATE.035.RESUB.BY | MS.SETDATE.035.RESUB.BY | STRING | 30 |  |
| CX.MS.SETDATE.035.RESUB.DATE | MS.SETDATE.035.RESUB.DATE | STRING | 30 |  |
| CX.MS.SETDATE.035.RESUB.TIME | MS.SETDATE.035.RESUB.TIMES | INTEGER | 0 |  |
| CX.MS.SETDATE.040.APPR | MS.SETDATE.040.APPR | DATE | 0 |  |
| CX.MS.SETDATE.040.APPR.BY | MS.SETDATE.040.APPR.BY | STRING | 30 |  |
| CX.MS.SETDATE.040.APPR.DATE | MS.SETDATE.040.APPR.DATE | STRING | 30 |  |
| CX.MS.SETDATE.042.DOC.TIMES | MS.SETDATE.042.DOC.TIMES | INTEGER | 0 |  |
| CX.MS.SETDATE.042.DOCPREP | MS.SETDATE.042.DOCPREP | DATE | 0 |  |
| CX.MS.SETDATE.042.DOCPREP.BY | MS.SETDATE.042.DOCPREP.BY | STRING | 30 |  |
| CX.MS.SETDATE.042.DOCPREP.DA | MS.SETDATE.042.DOCPREP.DATE | STRING | 30 |  |
| CX.MS.SETDATE.044.CLEAR | MS.SETDATE.044.CLEAR | DATE | 0 |  |
| CX.MS.SETDATE.044.CLEAR.BY | MS.SETDATE.044.CLEAR.BY | STRING | 30 |  |
| CX.MS.SETDATE.044.CLEAR.DATE | MS.SETDATE.044.CLEAR.DATE | STRING | 30 |  |
| CX.MS.SETDATE.050.DOCSIGN | MS.SETDATE.050.DOCSIGN | DATE | 0 |  |
| CX.MS.SETDATE.050.DOCSIGN.BY | MS.SETDATE.050.DOCSIGN.BY | STRING | 30 |  |
| CX.MS.SETDATE.050.DOCSIGN.DA | MS.SETDATE.050.DOCSIGN.DATE | STRING | 30 |  |
| CX.MS.SETDATE.060.FUNDED | MS.SETDATE.060.FUNDED | DATE | 0 |  |
| CX.MS.SETDATE.060.FUNDED.BY | MS.SETDATE.060.FUNDED.BY | STRING | 30 |  |
| CX.MS.SETDATE.060.FUNDED.DAT | MS.SETDATE.060.FUNDED.DATE | STRING | 30 |  |
| CX.MS.SETDATE.062.SHIPPED | MS.SETDATE.062.SHIPPED | DATE | 0 |  |
| CX.MS.SETDATE.062.SHIPPED.BY | MS.SETDATE.062.SHIPPED.BY | STRING | 30 |  |
| CX.MS.SETDATE.062.SHIPPED.DA | MS.SETDATE.062.SHIPPED.DATE | STRING | 30 |  |
| CX.MS.SETDATE.070.COMPLETE | MS.SETDATE.070.COMPLETE | DATE | 0 |  |
| CX.MS.SETDATE.070.COMPLETE.B | MS.SETDATE.070.COMPLETE.BY | STRING | 30 |  |
| CX.MS.SETDATE.070.COMPLETE.D | MS.SETDATE.070.COMPLETE.DATE | STRING | 30 |  |
| CX.MS.STATUSDATE | Human Readable Version | STRING | 100 | IIF(NOT IsDate([@MS.STATUSDATE]),[MS.STATUSDATE].ToString("dddd, hh:mm tt, MMMM dd, yyyy"),"That's n |
| CX.MTECH.ASSIGN.ROLE | Role Assignment - Role to be assigned.  Set this field before User / Group field. | STRING | 99 |  |
| CX.MTECH.ASSIGN.ROLE.GROUP | Role Assignment - Group to assign to Role. Set this field after Role field. | STRING | 99 |  |
| CX.MTECH.ASSIGN.ROLE.USER | Role Assignment - User to assign to Role. Set this field after Role field. | STRING | 99 |  |
| CX.MTECH.BTN.ORDERDOCS.EN | Order Docs Btn Plugin - Set to 'Y' to enable Order Docs button.  Blank/'N' - button is disabled | YN | 0 | IIF ([CX.MTECH.BTN.ORDERDOCS.MSG] = "", "Y", "N") |
| CX.MTECH.BTN.ORDERDOCS.MSG | Order Docs Btn Plugin - Set to Message that should be displayed when Order Docs is disabled | STRING | 200 | IIF(([@CX.TODAYS.DATE] = [@3154] or [@CX.TODAYS.DATE] = [@3152]), "The LE was issued  today - you ca |
| CX.MTECH.DODB.NOTES | Note field on Disable Order Docs Button Admin form | STRING | 1000 |  |
| CX.MTECH.EPRINT.EN | ePrint Button - Enable / Disable | STRING | 1 |  |
| CX.MTECH.FOLDER.CURRENT | Folder Move Plugin - Current Loan Folder.  Set when loan is opened and when folder is moved. | STRING | 100 |  |
| CX.MTECH.FOLDER.MOVETO | Folder Move Plugin - Loan is moved to this Folder when it is saved. | STRING | 100 |  |
| CX.MTECH.TEST.DOCB.DATE.01 | Test Date for Disable Order Docs Plugin | DATE | 0 |  |
| CX.MTECH.TEST.DOCB.DATE.02 | Test Date for Disable Order Docs Button | DATE | 0 |  |
| CX.MTGTECH.ACCESSMODE | Determines Access for a certain persona | STRING | 99 |  |
| CX.MTGTECH.BLITZFOLDERID | BlitzDocs folder ID for this loan | STRING | 99 |  |
| CX.MTGTECH.BLITZSTATUS | Update BlitzDocsStatus | STRING | 99 |  |
| CX.MTGTECH.BLITZUPDATE | Run BlitzDocs Update | STRING | 99 |  |
| CX.MTGTECH.COMORTWARNING | Date, Time and User Name | STRING | 50 |  |
| CX.MTGTECH.COUNSELORSIMPORT | Indicates if Housing Counselors Have Been Imported | X | 0 |  |
| CX.MTGTECH.CUSTEMAIL | Trigger for Custom Emails | STRING | 99 |  |
| CX.MTGTECH.ROLE | Role Assignment - Role to be assigned to | STRING | 99 |  |
| CX.MTGTECH.USER | Role Assignment - User to be assigned | STRING | 99 |  |
| CX.MTGTECHPRINTSCREEN | Print Screen Field | X | 0 |  |
| CX.MUNIS.RCVD | munis received | DATE | 0 |  |
| CX.MVNT.DOCS.1109 | MVNT.DOCS.1109 | STRING | 50 |  |
| CX.MVNT.DOCS.1177 | MVNT.DOCS.1177 | STRING | 5 |  |
| CX.MVNT.DOCS.137 | MVNT.DOCS.137 | STRING | 50 |  |
| CX.MVNT.DOCS.14 | MVNT.DOCS.14 | STRING | 40 |  |
| CX.MVNT.DOCS.1401 | MVNT.DOCS.1401 | STRING | 100 |  |
| CX.MVNT.DOCS.19 | MVNT.DOCS.19 | STRING | 50 |  |
| CX.MVNT.DOCS.1946 | MVNT.DOCS.1946 | STRING | 10 |  |
| CX.MVNT.DOCS.1947 | MVNT.DOCS.1947 | STRING | 20 |  |
| CX.MVNT.DOCS.1948 | MVNT.DOCS.1948 | STRING | 10 |  |
| CX.MVNT.DOCS.3 | MVNT.DOCS.3 | STRING | 50 |  |
| CX.MVNT.DOCS.325 | MVNT.DOCS.325 | STRING | 50 |  |
| CX.MVNT.DOCS.4 | MVNT.DOCS.4 | STRING | 50 |  |
| CX.MVNT.DOCS.675 | MVNT.DOCS.675 | STRING | 5 |  |
| CX.MVNT.DOCS.799 | MVNT.DOCS.799 | STRING | 50 |  |
| CX.MVNT.DOCS.COMPARE | Current Data Does Not Match Last Mvnt Data | STRING | 2 | iif([#CX.MVNT.DOCS.14] <> [#14] OR [#CX.MVNT.DOCS.19] <> [#19] OR [#CX.MVNT.DOCS.1401] <> [#1401] OR |
| CX.MVNT.DOCS.COMPARE.CHANGES | Mavent Docs Compare Flag | YN | 0 | iif([#CX.MVNT.DOCS.14] <> [#14] OR [#CX.MVNT.DOCS.19] <> [#19] OR [#CX.MVNT.DOCS.1401] <> [1401] OR  |
| CX.MVNT.DOCS.DT | Date Team member validates Changes and re-runs complaince report | DATE | 0 |  |
| CX.MVNT.DOCS.SNAP1109 | MVNT.DOCS.SNAP1109 | STRING | 40 | iif([#1109]=[#CX.MVNT.DOCS.1109],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP1177 | MVNT.DOCS.SNAP1177 | STRING | 40 | iif([#1177]=[#CX.MVNT.DOCS.1177],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP137 | MVNT.DOCS.SNAP137 | STRING | 40 | iif([#137]=[#CX.MVNT.DOCS.137],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP14 | MVNT.DOCS.SNAP14 | STRING | 40 | iif([14]=[CX.MVNT.DOCS.14],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP1401 | MVNT.DOCS.SNAP1401 | STRING | 40 | iif([1401]=[CX.MVNT.DOCS.1401],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP19 | MVNT.DOCS.SNAP19 | STRING | 40 | iif([19]=[CX.MVNT.DOCS.19],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP1946 | MVNT.DOCS.SNAP1946 | STRING | 40 | iif([1946]=[CX.MVNT.DOCS.1946],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP1947 | MVNT.DOCS.SNAP1947 | STRING | 40 | iif([#1947]=[#CX.MVNT.DOCS.1947],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP1948 | MVNT.DOCS.SNAP1948 | STRING | 40 | iif([#1948]=[#CX.MVNT.DOCS.1948],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP3 | MVNT.DOCS.SNAP3 | STRING | 40 | iif([#3]=[#CX.MVNT.DOCS.3],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP325 | MVNT.DOCS.SNAP325 | STRING | 40 | iif([#4]=[#CX.MVNT.DOCS.325],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP4 | MVNT.DOCS.SNAP4 | STRING | 40 | iif([#4]=[#CX.MVNT.DOCS.4],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP675 | MVNT.DOCS.SNAP675 | STRING | 40 | iif([675]=[CX.MVNT.DOCS.675],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.SNAP799 | MVNT.DOCS.SNAP799 | STRING | 40 | iif([#799]=[#CX.MVNT.DOCS.799],"","REVIEW DIFFERENCE") |
| CX.MVNT.DOCS.USER | Teammember who validate the Data Changes | AUDIT | 0 | Audit([CX.MVNT.DOCS.DT], 1) |
| CX.MW.2ND.SUBORDINATED | Is 2nd Subordinated | X | 0 |  |
| CX.MW.ARMPRGM.LIST | ARM Program | DROPDOWNLIST | 0 | iif([1401]="1301 FHA 1yr ARM","101 - FHA 1yr ARM",
iif([1401]="1303 FHA 3/1yr ARM","103 - FHA/VA 3/ |
| CX.MW.LOANLIMITCAT | Loan Limit Cat | DROPDOWNLIST | 0 |  |
| CX.MW.PRODUCTCODES | ProductCode | STRING | 4 | iif([1401]="1150 FHA 15yr FRM","1150",
iif([1401]="1300 FHA 30yr FRM","1300",
iif([1401]="1301 FHA |
| CX.MWS.PRINTYN | Mortgage Worksheet Print YN | YN | 0 |  |
| CX.N.C.D | Note Cleared Date | DATE | 0 |  |
| CX.N.C.U | Note Received User | AUDIT | 0 | Audit([CX.N.C.D], 0) |
| CX.N.R.D | Note Recieved | DATE | 0 |  |
| CX.N.R.U | Note Received User | AUDIT | 0 | Audit([CX.N.R.D], 0) |
| CX.N.S.D | Note Sent Date | DATE | 0 |  |
| CX.N.S.U | Note Received User | AUDIT | 0 | Audit([CX.N.S.D], 0) |
| CX.NBAZ.CONST.AGR.DATE | NBAZ - Construction Loan Agreement Date | DATE | 0 |  |
| CX.NBAZ.CONST.ARCH.NAME | NBAZ - Construction - Architect Name | STRING | 500 |  |
| CX.NBAZ.CONST.COMMENCE.DATE | NBAZ - Construction - Commence Date | DATE | 0 |  |
| CX.NBAZ.CONST.COMPL.DATE | NBAZ - Construction - Completion Date | DATE | 0 |  |
| CX.NBAZ.CONST.CONT.NAME | NBAZ - Construction - Contractor Name | STRING | 500 |  |
| CX.NBAZ.CONST.PROJ.COST | NBAZ - Construction - Total Cost of the Project | DECIMAL_2 | 0 |  |
| CX.NC.COUNT | Non-Conformity Count | INTEGER | 0 | IIf(Not IsEmpty([CX.NONCONF.1]), 1, 0) +
IIF(Not IsEmpty([CX.NONCONF.2]), 1, 0) +
IIf(Not IsEmpty( |
| CX.NC.POLICY.COUNT | Non-Conformity and Policy Count | INTEGER | 0 | [#CX.NC.Count] + [#CX.PE.Count] |
| CX.ND.JUMBO | Non Delegated Jumbo Loan | X | 0 |  |
| CX.ND.JUMBO.PKG.DECISION.DT | Non Delegated Jumbo Loan Decision Date | DATE | 0 |  |
| CX.ND.JUMBO.PKG.SENT.DT | Non Delegated Jumbo Loan Package Sent Date | DATE | 0 |  |
| CX.NEEDEDASSETS | Total Needed Verified Assets | DECIMAL_2 | 0 | IIF (Instr(lcase([1172]),"fha") and ([16] = "3" or [16] = "4"),([#912]*3)+[#142],
IIF (Instr(lcase( |
| CX.NET.ESCROWS | Net Escrows | DROPDOWNLIST | 0 |  |
| CX.NET.SRP | Base SRP minus Adjusters | DECIMAL_3 | 0 | ([#CX.SRP.ADJUSTERS]+[#2205]) |
| CX.NETBUYSIDEDOLLAR | BUY SIDE DOLLAR AMOUNT | DECIMAL_2 | 0 |  |
| CX.NETPRICE | Net Pricing - Approval | DECIMAL_3 | 0 | [2203] - 100.000 |
| CX.NEW.SERVICER.START.DATE | the date your new servicer will start  | DATE | 0 | Iif (Day([2370])<=12,xdate(month([2370])&"/1/"&year([2370])),iif(month([2370])=12,xdate("1/1/"&year( |
| CX.NEWBUILD | New Build | YN | 0 |  |
| CX.NEXT.LO.BRANCH | The next to be assigned LO's Branch | STRING | 99 |  |
| CX.NEXT.LO.EMAIL | The next to be assigned LO's Email | STRING | 99 |  |
| CX.NEXT.LO.NAME | The next to be assigned LO | STRING | 99 |  |
| CX.NEXT.LO.NMLS | The next to be assigned LO's NMLS ID | STRING | 99 |  |
| CX.NEXT.LO.PHONE | The next to be assigned LO's Phone | PHONE | 0 |  |
| CX.NEXT.LO.UN | The username of the next to be assigned LO | STRING | 99 |  |
| CX.NICKNAME.B | nickname for borrower | STRING | 35 |  |
| CX.NICKNAME.CB | nickname for coborrower | STRING | 35 |  |
| CX.NICKNAMEBORROWER | Nickname Borrower | STRING | 30 |  |
| CX.NICKNAMECB | Nickname CB | STRING | 30 |  |
| CX.NLSUQCBY | NLSUQ By | STRING | 64 |  |
| CX.NLSUQCDATE | NLSU QC Date | DATE | 0 |  |
| CX.NO.MI | MI Exclusion | X | 0 |  |
| CX.NOAPPRAISAL.DT | Date - Clicked No Appraisal | STRING | 99 |  |
| CX.NOAPPRAISAL.UN | User - Clicked No Appraisal | STRING | 99 |  |
| CX.NOI.FLAG | NOI Flag | X | 0 |  |
| CX.NOIA.DAYS2NEWNOTIFYDATE | New Notification Date (date documents received from borrower + 30)   | STRING | 99 | IIF(IsDate([CX.NOIA.NEWNOTIFYDATE]) = False, "N/A",DateDiff("d", today(), [@CX.NOIA.NEWNOTIFYDATE])) |
| CX.NOIA.INEFOLDER | Is the NOIA in the eFolder? (Yes/No) | STRING | 99 | IIF(IsDate([Document.DateReceived.NOIA (Notice of Incomplete Application)]),"Yes","No") |
| CX.NOIA.NEWNOTIFYDATE | New Notification Date (date documents received from borrower + 30)   | DATE | 0 | IIF(IsEmpty([CX.REGB.NOIRECEIVED]), [CX.REGB.NOIREQBY],[CX.REGB.NOIRECEIVED].AddDays(30)) |
| CX.NOIADDTLREQ | NOI Additional Information Requested | STRING | 200 |  |
| CX.NOIADDTLREQBY | NOI Additional Information Requested By | STRING | 20 |  |
| CX.NOIADDTLREQON | NIO Additional Information Requested On | DATE | 0 |  |
| CX.NOIADDTLREQONNOW | NOI Additional Information Requested On | STRING | 20 |  |
| CX.NOIAPPROVED | NOI Reasons Approved | X | 0 |  |
| CX.NOIAPPROVEDBY | NOI Reasons Appr'd By | STRING | 30 |  |
| CX.NOIAPPROVEDON | NOI Reasons Appr'd On | DATE | 0 |  |
| CX.NOIAPPROVEDONNOW | NOW NOIAPPROVEDON | STRING | 20 |  |
| CX.NOIDAYSAGO | NOI Days Ago (GFE APP DATE) | INTEGER | 0 | DateDiff("d",[3142],TODAY) |
| CX.NOIDAYSTOGO | NOI Days To Go Till NOI Letter | INTEGER | 0 | 30-(DateDiff("d",[3142],TODAY)) |
| CX.NOIITEMSBY | NOI Reasons Required By | STRING | 30 | DateAdd("d",10,TODAY) |
| CX.NOILETTEREXP | NOI Letter Expires | DATE | 0 | Calendar.AddPostalDays([@CX.NOIPRNTDON],10,true) |
| CX.NOILETTEREXPVERBOSE | NOI Letter Exp (Verbose) | STRING | 30 | Choose(Month([CX.NOILETTEREXP]),"January","February","March","April","May","June","July","August","S |
| CX.NOILOCKREASONS | NOI Lock Reasons | X | 0 |  |
| CX.NOIPRNTDBY | NOI Letter Printed By | STRING | 30 |  |
| CX.NOIPRNTDON | NOI Letter Printed On | DATE | 0 |  |
| CX.NOIREASON1 | NOI Reason 1 | DROPDOWNLIST | 0 |  |
| CX.NOIREASON2 | NOI Reason 2 | DROPDOWNLIST | 0 |  |
| CX.NOIREASON3 | NOI Reason 3 | DROPDOWNLIST | 0 |  |
| CX.NOIREASON4 | NOI Reason 4 | DROPDOWNLIST | 0 |  |
| CX.NOIREASON5 | NOI Reason 5 | DROPDOWNLIST | 0 |  |
| CX.NOIREASON6 | NOI Reason 6 | DROPDOWNLIST | 0 |  |
| CX.NOIREASONAMT | NOI Reason Amount | DECIMAL_2 | 0 |  |
| CX.NOIREASONMISC | NOI Reason Misc | STRING | 500 |  |
| CX.NOIREASONTO | NOI Reason Paid To | STRING | 100 |  |
| CX.NOIREQUESTEDBY | NOI Letter Requested By | STRING | 30 |  |
| CX.NOIREQUESTEDON | NOI Letter Requested On | STRING | 30 |  |
| CX.NOIREQUESTEDONNOW | NOW NOIREQUESTEDON | STRING | 20 |  |
| CX.NOISUBLIENCHECK | NOI Sub Lien Amt - To | STRING | 500 |  |
| CX.NON.BORROW.SPOUSE | Non Borrowering Spouse | YN | 0 |  |
| CX.NONBORROWERINGSPOUSE | Is there a non borrowering spouse? | DROPDOWNLIST | 0 |  |
| CX.NONCONF.1 | Non-Conformity Type 1 | DROPDOWNLIST | 0 |  |
| CX.NONCONF.2 | Non-Conformity Type 2 | DROPDOWNLIST | 0 |  |
| CX.NONCONF.3 | Non-Conformity Type 3 | DROPDOWNLIST | 0 |  |
| CX.NONCONF.4 | Non-Conformity Type 4 | DROPDOWNLIST | 0 |  |
| CX.NOSURVEY | Exclude from Survey | YN | 0 |  |
| CX.NOTES.CAT.EMAIL.PR.BOR | Notes Categories for Email Dropdown | DROPDOWNLIST | 0 |  |
| CX.NOTES.CAT.EMAIL.PR.TPO | Notes Categories for Email Dropdown | DROPDOWNLIST | 0 |  |
| CX.NOTES.CATEGORIES.EMAIL | Category Dropdown | DROPDOWNLIST | 0 |  |
| CX.NOTES.CATS.OP.EMAIL | NOTES.CATS.OP.EMAIL | DROPDOWNLIST | 0 |  |
| CX.NOTES.CATS.OP.EMAIL.IM | NOTES.CATS.OP.EMAIL.IM | DROPDOWNLIST | 0 |  |
| CX.NOTES.SUBJECT.EMAIL | Email Subject | STRING | 75 |  |
| CX.NOW | Set By Plugin | STRING | 20 |  |
| CX.NOW1 | DateTime.Now | STRING | 40 | DateTime.Now.ToString("MM/dd/yyyy HH.mm.ss.fff") |
| CX.NOW2 | Now | STRING | 40 | CStr(Now) |
| CX.NQM.PROGRAM | NQM Program | STRING | 75 |  |
| CX.NULL.DD | Null Drop Down | DROPDOWNLIST | 0 |  |
| CX.OB.CITIZENSHIP | OB CITIZENSHIP | DROPDOWNLIST | 0 |  |
| CX.OB.CREDIT.EVENT | Recent Credit Event | DROPDOWNLIST | 0 |  |
| CX.OB.DOCTYPE | OB DOCTYPE | DROPDOWNLIST | 0 |  |
| CX.OB.DSCR.RATIO | OB DSCR Ratio Dropdown | DROPDOWNLIST | 0 |  |
| CX.OB.LIMTEDTRADES | Tradelines | DROPDOWNLIST | 0 |  |
| CX.OB.PREPAYMENT | OB Pre-Payment | DROPDOWNLIST | 0 |  |
| CX.OC.CR.FA.ON.CREDIT | Is there a Fraud Alert on Credit | DROPDOWNLIST | 0 |  |
| CX.OC.CR.NM.SS.MTCH | Opening Do Names and Social Security Match Application | DROPDOWNLIST | 0 |  |
| CX.OC.CR.SSN.CRBUR.MATCH | Opening Do SSN Match between match on CR Bureau | DROPDOWNLIST | 0 |  |
| CX.OC.FA.APPLY.VERIF | Application Status Verified | DROPDOWNLIST | 0 |  |
| CX.OC.FA.FR.FORM.COMPLT | Fraud Form Completed | DROPDOWNLIST | 0 |  |
| CX.OC.FA.IDENT.VERIF | Identity Verified | DROPDOWNLIST | 0 |  |
| CX.OC.FA.NAME.VERIF | Name Verified | DROPDOWNLIST | 0 |  |
| CX.OC.LPA.CONDO.LKUP.CMPLT | Condo Lookup Completed | X | 0 |  |
| CX.OC.LPA.HOA.CNTCT.CMPLT | HOA Contact Updated | X | 0 |  |
| CX.OC.LPA.INS.CNTCT.CMPLT | Insurance Contact Updated | X | 0 |  |
| CX.OC.TR.PROP.ADDR | Opening Does the Property address Match? | DROPDOWNLIST | 0 |  |
| CX.OFAC.CB.1859 | OFAC 1859 Checked | YN | 0 |  |
| CX.OFAC.CB.638 | OFAC 638 Checked | YN | 0 |  |
| CX.OFAC.CB.B1.1868 | OFAC B1 1868 Checked | YN | 0 |  |
| CX.OFAC.CB.B1.1873 | OFAC B1 1873 Checked | YN | 0 |  |
| CX.OFAC.CB.B2.1868 | OFAC B2 1868 Checked | YN | 0 |  |
| CX.OFAC.CB.B2.1873 | OFAC B2 1873 Checked | YN | 0 |  |
| CX.OFAC.CB.B3.1868 | OFAC B3 1868 Checked | YN | 0 |  |
| CX.OFAC.CB.B3.1873 | OFAC B3 1873 Checked | YN | 0 |  |
| CX.OFAC.CB.B4.1868 | OFAC B4 1868 Checked | YN | 0 |  |
| CX.OFAC.CB.B4.1873 | OFAC B4 1873 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.NAMTITL | OFAC NAMTITL Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE1 | OFAC SIGLINE1 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE2 | OFAC SIGLINE2 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE3 | OFAC SIGLINE3 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE4 | OFAC SIGLINE4 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE5 | OFAC SIGLINE5 Checked | YN | 0 |  |
| CX.OFAC.CB.CER.SIGLINE6 | OFAC SIGLINE6 Checked | YN | 0 |  |
| CX.OFAC.CB.NBOC0101 | OFAC NBOC0101 Checked | YN | 0 |  |
| CX.OFAC.CB.NBOC0201 | OFAC NBOC0201 Checked | YN | 0 |  |
| CX.OFAC.CB.NBOC0301 | OFAC NBOC0301 Checked | YN | 0 |  |
| CX.OFAC.CB.NBOC0401 | OFAC NBOC0401 Checked | YN | 0 |  |
| CX.OFAC.CB.SELLER3 | OFAC Seller3 Checked | YN | 0 |  |
| CX.OFAC.CB.SELLER4 | OFAC Seller4 Checked | YN | 0 |  |
| CX.OFAC.CB.TPO.X61 | OFAC TPO X61 Checked | YN | 0 |  |
| CX.OFAC.CB.TPO.X74 | OFAC TPO X74 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X133 | OFAC VEND X133 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X139 | OFAC VEND X139 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X144 | OFAC VEND X144 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X150 | OFAC VEND X150 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X293 | OFAC VEND X293 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X412 | OFAC VEND X412 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X655 | OFAC VEND X655 Checked | YN | 0 |  |
| CX.OFAC.CB.VEND.X668 | OFAC VEND X668 Checked | YN | 0 |  |
| CX.OFAC.MISC.CB1 | Misc OFAC Name Checked #1 | YN | 0 |  |
| CX.OFAC.MISC.CB10 | Misc OFAC Name Checked #10 | YN | 0 |  |
| CX.OFAC.MISC.CB2 | Misc OFAC Name Checked #2 | YN | 0 |  |
| CX.OFAC.MISC.CB3 | Misc OFAC Name Checked #3 | YN | 0 |  |
| CX.OFAC.MISC.CB4 | Misc OFAC Name Checked #4 | YN | 0 |  |
| CX.OFAC.MISC.CB5 | Misc OFAC Name Checked #5 | YN | 0 |  |
| CX.OFAC.MISC.CB6 | Misc OFAC Name Checked #6 | YN | 0 |  |
| CX.OFAC.MISC.CB7 | Misc OFAC Name Checked #7 | YN | 0 |  |
| CX.OFAC.MISC.CB8 | Misc OFAC Name Checked #8 | YN | 0 |  |
| CX.OFAC.MISC.CB9 | Misc OFAC Name Checked #9 | YN | 0 |  |
| CX.OFAC.MISC.FN1 | Misc OFAC Full Name #1 | STRING | 100 |  |
| CX.OFAC.MISC.FN10 | Misc OFAC Full Name #10 | STRING | 100 |  |
| CX.OFAC.MISC.FN2 | Misc OFAC Full Name #2 | STRING | 100 |  |
| CX.OFAC.MISC.FN3 | Misc OFAC Full Name #3 | STRING | 100 |  |
| CX.OFAC.MISC.FN4 | Misc OFAC Full Name #4 | STRING | 100 |  |
| CX.OFAC.MISC.FN5 | Misc OFAC Full Name #5 | STRING | 100 |  |
| CX.OFAC.MISC.FN6 | Misc OFAC Full Name #6 | STRING | 100 |  |
| CX.OFAC.MISC.FN7 | Misc OFAC Full Name #7 | STRING | 100 |  |
| CX.OFAC.MISC.FN8 | Misc OFAC Full Name #8 | STRING | 100 |  |
| CX.OFAC.MISC.FN9 | Misc OFAC Full Name #9 | STRING | 100 |  |
| CX.OFAC.MISC.R1 | Relation to the Loan #1 | STRING | 100 |  |
| CX.OFAC.MISC.R10 | Relation to the Loan #10 | STRING | 100 |  |
| CX.OFAC.MISC.R2 | Relation to the Loan #2 | STRING | 100 |  |
| CX.OFAC.MISC.R3 | Relation to the Loan #3 | STRING | 100 |  |
| CX.OFAC.MISC.R4 | Relation to the Loan #4 | STRING | 100 |  |
| CX.OFAC.MISC.R5 | Relation to the Loan #5 | STRING | 100 |  |
| CX.OFAC.MISC.R6 | Relation to the Loan #6 | STRING | 100 |  |
| CX.OFAC.MISC.R7 | Relation to the Loan #7 | STRING | 100 |  |
| CX.OFAC.MISC.R8 | Relation to the Loan #8 | STRING | 100 |  |
| CX.OFAC.MISC.R9 | Relation to the Loan #9 | STRING | 100 |  |
| CX.OFAC.SE.PAIR1 | OFAC.SE.PAIR1 | STRING | 500 |  |
| CX.OFAC.SE.PAIR2 | OFAC.SE.PAIR2 | STRING | 500 |  |
| CX.OFAC.SE.PAIR3 | OFAC.SE.PAIR3 | STRING | 500 |  |
| CX.OFAC.SE.PAIR4 | OFAC.SE.PAIR4 | STRING | 500 |  |
| CX.OLD.1045 | Archived MIP | DECIMAL_2 | 0 |  |
| CX.OLD.1109 | Archived Loan Amount | DECIMAL_2 | 0 |  |
| CX.OLD.1335 | Archived Down Payment Amount | DECIMAL_2 | 0 |  |
| CX.OLD.136 | Archived Purchase Price | DECIMAL_2 | 0 |  |
| CX.OLD.137 | Archived Closing Costs | DECIMAL_2 | 0 |  |
| CX.OLD.138 | Archived Prepaid Items | DECIMAL_2 | 0 |  |
| CX.OLD.140 | Archived Subordinate Financing | DECIMAL_2 | 0 |  |
| CX.OLD.1401 | Archived Loan Program | STRING | 50 |  |
| CX.OLD.142 | Archived Cash to/from Borrower | DECIMAL_2 | 0 |  |
| CX.OLD.1771 | Archived Down Payment Percent | DECIMAL_3 | 0 |  |
| CX.OLD.2 | Archived Total Loan Amt | DECIMAL_2 | 0 |  |
| CX.OLD.26 | Archived Refinance Payoff | DECIMAL_2 | 0 |  |
| CX.OLD.3121 | Archived Disclosed APR | DECIMAL_3 | 0 |  |
| CX.OLD.350 | Archived Montly Debt | DECIMAL_2 | 0 |  |
| CX.OLD.356 | Archived Appraised Value | DECIMAL_2 | 0 |  |
| CX.OLD.4 | Archived Term | INTEGER | 0 |  |
| CX.OLD.5 | Archived P and I | DECIMAL_2 | 0 |  |
| CX.OLD.732 | Archived Assets | DECIMAL_2 | 0 |  |
| CX.OLD.736 | Archived Monthly Income | DECIMAL_2 | 0 |  |
| CX.OLD.799 | Archived Current APR | DECIMAL_3 | 0 |  |
| CX.OLD.912 | Archived PITI | DECIMAL_2 | 0 |  |
| CX.OLD.915 | Archived Liquid Assets | DECIMAL_2 | 0 |  |
| CX.OLD.VASUMM.X23 | Archived Credit Score | INTEGER | 0 |  |
| CX.OLDCLOSINGCOSTNAME | Old Closing Cost Name Check | INTEGER | 0 |  |
| CX.ONC.GRP.OUT.PROC.DESC | ONC.GRP.OUT.PROC.DESC | STRING | 20000 |  |
| CX.OOOOOOOOOOOOOOOOOOOOOOOO | WFASDFF | STRING | 900 |  |
| CX.OP.PRINT.TRIGGER.01 | Originators Form - Print Trigger Check Box 1 | X | 0 |  |
| CX.OP.PRINT.TRIGGER.02 | Originators Form - Print Trigger 02 | X | 0 |  |
| CX.OP.REQUEST.BY | used to get the user id of the ops requester | STRING | 40 |  |
| CX.OPEN.STREET | Open Street Address Field | DROPDOWNLIST | 0 |  |
| CX.OPP.SUB.DNQ | Opportunity Sub Status - Does Not Qualify | DROPDOWNLIST | 0 |  |
| CX.OPP.SUB.FUTURE.PROSPECT | Opportunity  Sub Status - Future Prospect | DROPDOWNLIST | 0 |  |
| CX.OPP.SUB.STATUS.HOT | Opportunity Sub Status - Hot | DROPDOWNLIST | 0 |  |
| CX.OPP.SUB.STATUS.VALUE | Sub Status Final Value | STRING | 50 |  |
| CX.OPP.SUB.TERMS.PRESENTED | Opportunity Sub Status - Terms Presented | DROPDOWNLIST | 0 |  |
| CX.OPPORTUNITY.STATUS | Opportunity status | DROPDOWNLIST | 0 |  |
| CX.OPPORTUNITY.STATUS.NOT | Opportunity Status Notes | STRING | 100 |  |
| CX.ORDER.APPRAISAL | Order Appraisal CB | X | 0 |  |
| CX.ORDER.APPRAISAL.DATE | Appraisal Order Request Date | AUDIT | 0 | Audit([CX.ORDER.APPRAISAL], 2) |
| CX.ORDER.APPRAISAL.ON | order appraisal on | YN | 0 | IIF([CX.COVER.NO.WHEN] <= [CX.TODAY.NOT.NOW], "Y", "N") |
| CX.ORDERTITLE | Order Title email | X | 0 |  |
| CX.ORG.UW.SUB.DATE | Original UW Submitted Date | DATE | 0 |  |
| CX.ORIG.BRANCH | Originating Branch | DROPDOWNLIST | 0 |  |
| CX.ORIG.CLS.PURCH.CONTRACT | Original Closing Date from Purchase Contract | DATE | 0 |  |
| CX.ORIG.TITLE | Originator Title | STRING | 50 |  |
| CX.ORIGINAL.APPRAISED.VALUE | Appraised Value Originally entered on the loan  | DECIMAL_2 | 0 | xdec([CX.ORG.APPR.VALUE.STRING]) |
| CX.ORIGTOPRO | ORIG TO PROC COMMENTS | STRING | 1000 |  |
| CX.OTC.CALC.FACTOR | Calc Trigger for OTC Fields | INTEGER | 0 |  |
| CX.OTC.CLCS.LOAN.NUMBER | CLCS Loan Number  | STRING | 20 |  |
| CX.OTC.CONS.STATUS1 | OTC Construction Status 1 | STRING | 150 |  |
| CX.OTC.CONS.STATUS2 | OTC Construction Status 2 | STRING | 150 |  |
| CX.OTC.CONS.STATUS3 | OTC Construction Status 3 | STRING | 150 |  |
| CX.OTC.CONS.STATUS4 | OTC Construction Status 4 | STRING | 150 |  |
| CX.OTC.EXT1.AAPR | OTC Extension 1 Approval Date | DATE | 0 |  |
| CX.OTC.EXT1.NO.MNTHS | OTC Extension 1 Number of Months | INTEGER | 0 |  |
| CX.OTC.EXT1.REASON | OTC Extension 1 Reason | STRING | 100 |  |
| CX.OTC.EXT1.REV.PAY.DATE | OTC Revised Amort Payment Date 1 | DATE | 0 |  |
| CX.OTC.EXT2.AAPR | OTC Extension 2 Approval Date | DATE | 0 |  |
| CX.OTC.EXT2.NO.MNTHS | OTC Extension 2 Number of Months | INTEGER | 0 |  |
| CX.OTC.EXT2.REASON | OTC Extension 2 Reason | STRING | 100 |  |
| CX.OTC.EXT2.REV.PAY.DATE | OTC Revised Amort Payment Date 2 | DATE | 0 |  |
| CX.OTC.EXT3.AAPR | OTC Extension 3 Approval Date | DATE | 0 |  |
| CX.OTC.EXT3.NO.MNTHS | OTC Extension 3 Number of Months | INTEGER | 0 |  |
| CX.OTC.EXT3.REASON | OTC Extension 3 Reason | STRING | 100 |  |
| CX.OTC.EXT3.REV.PAY.DATE | OTC Revised Amort Payment Date 3 | DATE | 0 |  |
| CX.OTC.GENERAL.COMMENTS | OTC General Comments | STRING | 500 |  |
| CX.OTC.LOT.VALUE | Construction Lot Value | DECIMAL_2 | 0 |  |
| CX.OTC.LTC | Construction Loan to Cost | DECIMAL_2 | 0 |  |
| CX.OTC.MAX.LTC | Maximum Construction Loan to Cost | DECIMAL_2 | 0 |  |
| CX.OTC.PERCENT.COMP1 | OTC Percent Complete 1 | INTEGER | 0 |  |
| CX.OTC.PERCENT.COMP2 | OTC Percent Complete 2 | INTEGER | 0 |  |
| CX.OTC.PERCENT.COMP3 | OTC Percent Complete 3 | INTEGER | 0 |  |
| CX.OTC.PERCENT.COMP4 | OTC Percent Complete 4 | INTEGER | 0 |  |
| CX.OTC.PURCH.PRICE.LOT | Construction Loan Purchase price of lot  | DECIMAL_2 | 0 |  |
| CX.OTC.STATUS.COMMENT1 | OTC Construction Status Comment1 | STRING | 200 |  |
| CX.OTC.STATUS.COMMENT2 | OTC Construction Status Comment2 | STRING | 200 |  |
| CX.OTC.STATUS.COMMENT3 | OTC Construction Status Comment3 | STRING | 200 |  |
| CX.OTC.STATUS.COMMENT4 | OTC Construction Status Comment4 | STRING | 200 |  |
| CX.OTC.STATUS.DATE1 | OTC Construction Status % Complete as of Date | DATE | 0 |  |
| CX.OTC.STATUS.DATE2 | OTC Construction Status % Complete as of Date | DATE | 0 |  |
| CX.OTC.STATUS.DATE3 | OTC Construction Status % Complete as of Date | DATE | 0 |  |
| CX.OTC.STATUS.DATE4 | OTC Construction Status % Complete as of Date | DATE | 0 |  |
| CX.OTC.TITLE.GREATER.12MOS | Has the Borrower been on title for at least 12 months prior to the LE application date; or was the p | DROPDOWNLIST | 0 |  |
| CX.OTC.TITLE.LESSTHAN.12MOS | Has the Borrower been in title for less than 12 months prior to the LE Date? If Yes, enter Purchase  | DROPDOWNLIST | 0 |  |
| CX.OTC.TOT.ACQ.COST | Construction Loan Total Acquisition Cost  | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORINCTOTAL | BORROWER INCOME TOTAL | DECIMAL_2 | 0 | SumAny([CX.OTCALC.BORYTDAMT], [CX.OTCALC.BORW2AMT.1], [CX.OTCALC.BORW2AMT.2], [CX.OTCALC.BORW2AMT.3] |
| CX.OTCALC.BOROTTOTAL | BORROWER OVERTIME TOTAL | DECIMAL_2 | 0 | Diff([CX.OTCALC.BORW2.AVGTOTAL], [101]) |
| CX.OTCALC.BORTOTALMOS | BORROWER TOTAL OF NUMBER OF MONTHS | DECIMAL_2 | 0 | SumAny([CX.OTCALC.BORYTDMOS], [CX.OTCALC.BORW2.1MOS], [CX.OTCALC.BORW2.2MOS], [CX.OTCALC.BORW2.3MOS] |
| CX.OTCALC.BORW2.1 | BORROWER W2 (1) - YEAR | STRING | 4 |  |
| CX.OTCALC.BORW2.1MOS | NUMBER OF MONTHS FOR W2 (1) | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2.2 | BORROWER W2 (2) - YEAR | STRING | 4 |  |
| CX.OTCALC.BORW2.2MOS | NUMBER OF MONTHS FOR W2 (2) | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2.3 | BORROWER W2 (3) - YEAR | STRING | 4 |  |
| CX.OTCALC.BORW2.3MOS | NUMBER OF MONTHS FOR W2 (3) | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2.4 | BORROWER W2 (4) - YEAR | STRING | 4 |  |
| CX.OTCALC.BORW2.4MOS | NUMBER OF MONTHS FOR W2 (4) | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2.AVGTOTAL | AVERAGE TOTAL OF BORROWER W2 AND YTD | DECIMAL_2 | 0 | Div([CX.OTCALC.BORINCTOTAL], [CX.OTCALC.BORTOTALMOS]) |
| CX.OTCALC.BORW2AMT.1 | BORROWER W2 (1) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2AMT.2 | BORROWER W2 (2) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2AMT.3 | BORROWER W2 (3) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORW2AMT.4 | BORROWER W2 (4) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORYTD | BORROWER YTD PERIOD ENDING DATE | DATE | 0 |  |
| CX.OTCALC.BORYTDAMT | BORROWER YTD TOTAL | DECIMAL_2 | 0 |  |
| CX.OTCALC.BORYTDMOS | BORROWER NUMBER OF MONTHS YTD | DECIMAL_2 | 0 | XDateDiff("M", [CX.OTCALC.FIRST], [CX.OTCALC.BORYTD]) |
| CX.OTCALC.COBORINCTOTAL | COBORROWER INCOME TOTAL | DECIMAL_2 | 0 | SumAny([CX.OTCALC.COBORYTDAMT], [CX.OTCALC.COBORW2AMT.1], [CX.OTCALC.COBORW2AMT.2], [CX.OTCALC.COBOR |
| CX.OTCALC.COBOROTTOTAL | COBORROWER OVERTIME TOTAL | DECIMAL_2 | 0 | Diff([CX.OTCALC.COBORW2.AVGTOTAL], [110]) |
| CX.OTCALC.COBORTOTALMOS | COBORROWER TOTAL OF NUMBER OF MONTHS | DECIMAL_2 | 0 | SumAny([CX.OTCALC.COBORYTDMOS], [CX.OTCALC.COBORW2.1MOS], [CX.OTCALC.COBORW2.2MOS], [CX.OTCALC.COBOR |
| CX.OTCALC.COBORW2.1 | COBORROWER W2 (1) - YEAR | STRING | 4 |  |
| CX.OTCALC.COBORW2.1MOS | NUMBER OF MONTHS FOR COBORROWER W2 (1) | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2.2 | COBORROWER W2 (2) - YEAR | STRING | 4 |  |
| CX.OTCALC.COBORW2.2MOS | NUMBER OF MONTHS FOR COBORROWER W2 (2) | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2.3 | COBORROWER W2 (3) - YEAR | STRING | 4 |  |
| CX.OTCALC.COBORW2.3MOS | NUMBER OF MONTHS FOR COBORROWER W2 (2) | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2.4 | COBORROWER W2 (4) - YEAR | STRING | 4 |  |
| CX.OTCALC.COBORW2.4MOS | NUMBER OF MONTHS FOR COBORROWER W2 (4) | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2.AVGTOTAL | AVERAGE TOTAL OF COBORROWER W2 AND YTD | DECIMAL_2 | 0 | Div([CX.OTCALC.COBORINCTOTAL], [CX.OTCALC.COBORTOTALMOS]) |
| CX.OTCALC.COBORW2AMT.1 | COBORROWER W2 (1) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2AMT.2 | COBORROWER W2 (2) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2AMT.3 | COBORROWER W2 (3) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORW2AMT.4 | COBORROWER W2 (4) AMOUNT | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORYTD | COBORROWER YTD PERIOD ENDING DATE | DATE | 0 |  |
| CX.OTCALC.COBORYTDAMT | COBORROWER YTD TOTAL | DECIMAL_2 | 0 |  |
| CX.OTCALC.COBORYTDMOS | COBORROWER NUMBER OF MONTHS YTD | DECIMAL_2 | 0 | XDateDiff("M", [CX.OTCALC.FIRST], [CX.OTCALC.COBORYTD]) |
| CX.PA.ADDL.REQ.2 | Pre Approval Additional Requirement 2 | DROPDOWNLIST | 0 |  |
| CX.PA.ADDL.REQ.3 | Pre Approval Additional Requirement 3 | DROPDOWNLIST | 0 |  |
| CX.PA.CURRENT.STATUS | Pre Approval Current Status | DROPDOWNLIST | 0 |  |
| CX.PA.EMAIL | PreApproval Email | X | 0 |  |
| CX.PA.OBO.MM | PA On Behalf Of Mortgage Manager | STRING | 100 |  |
| CX.PA.OBO.MM.EMAIL | PA On Behalf Of Mortgage Manager Email | STRING | 200 |  |
| CX.PA.OBO.OPTIONS | Pre Approval On Behalf Of | DROPDOWNLIST | 0 |  |
| CX.PA2.COMPLETE.BY.FIRST | PA2 Completed By - First | STRING | 150 |  |
| CX.PA2.CONTINGENT | PA2 Contingent upon Sale of Current Home | X | 0 |  |
| CX.PA2.RUSH | Rush PA2 Requested | X | 0 |  |
| CX.PA2UWINITIAL | PA2 UW Initial | STRING | 30 |  |
| CX.PA2UWTBDAPPROVED | PA2 UW TBD APPROVED | STRING | 30 |  |
| CX.PA2UWTBDSUSPEND | PA2 UW TBD SUSPEND | STRING | 30 |  |
| CX.PA2UWTBDUW | PA2 UW TBD UW | STRING | 30 |  |
| CX.PACOMMENTS | Purchase Advice Comments | STRING | 5000 |  |
| CX.PAIR.ID | Borrower Pair ID | STRING | 3 |  |
| CX.PAIR1.BORROWER.FICO | Borrower Pair 1 FICO | INTEGER | 0 | IIF(IsEmpty([67#1]), Min([1450#1], [1414#1]),
	IIF(IsEmpty([1450#1]), Min([67#1], [1414#1]),
	IIF( |
| CX.PAIR1.BORROWER.FICO.TEST | Borrower Pair 1 FICO_test | INTEGER | 0 | IIF(IsEmpty([67#1]) Or [67#1] > "1000", Min([1450#1], [1414#1]),
IIF(IsEmpty([1450#1]) Or [1450#1]  |
| CX.PAIR1.COBORROWER.FICO | Co-Borrower Pair 1 FICO | INTEGER | 0 | IIF(IsEmpty([60#1]), Min([1452#1], [1415#1]),
	IIF(IsEmpty([1452#1]), Min([60#1], [1415#1]),
	IIF( |
| CX.PAIR2.BORROWER.FICO | Borrower Pair 2 FICO | INTEGER | 0 | IIF(IsEmpty([67#2]), Min([1450#2], [1414#2]),
	IIF(IsEmpty([1450#2]), Min([67#2], [1414#2]),
	IIF( |
| CX.PAIR2.COBORROWER.FICO | Co-Borrower Pair 2 FICO | INTEGER | 0 | IIF(IsEmpty([60#2]), Min([1452#2], [1415#2]),
	IIF(IsEmpty([1452#2]), Min([60#2], [1415#2]),
	IIF( |
| CX.PAIR3.BORROWER.FICO | Borrower Pair 3 FICO | INTEGER | 0 | IIF(IsEmpty([67#3]), Min([1450#3], [1414#3]),
	IIF(IsEmpty([1450#3]), Min([67#3], [1414#3]),
	IIF( |
| CX.PAIR3.COBORROWER.FICO | Co-Borrower Pair 3 FICO | INTEGER | 0 | IIF(IsEmpty([60#3]), Min([1452#3], [1415#3]),
	IIF(IsEmpty([1452#3]), Min([60#3], [1415#3]),
	IIF( |
| CX.PAIR4.BORROWER.FICO | Borrower Pair 4 FICO | INTEGER | 0 | IIF(IsEmpty([67#4]), Min([1450#4], [1414#4]),
	IIF(IsEmpty([1450#4]), Min([67#4], [1414#4]),
	IIF( |
| CX.PAIR4.COBORROWER.FICO | Co-Borrower Pair 4 FICO | INTEGER | 0 | IIF(IsEmpty([60#4]), Min([1452#4], [1415#4]),
	IIF(IsEmpty([1452#4]), Min([60#4], [1415#4]),
	IIF( |
| CX.PAIR5.BORROWER.FICO | Borrower Pair 5 FICO | INTEGER | 0 | IIF(IsEmpty([67#5]), Min([1450#5], [1414#5]),
	IIF(IsEmpty([1450#5]), Min([67#5], [1414#5]),
	IIF( |
| CX.PAIR5.COBORROWER.FICO | Co-Borrower Pair 5 FICO | INTEGER | 0 | IIF(IsEmpty([60#5]), Min([1452#5], [1415#5]),
	IIF(IsEmpty([1452#5]), Min([60#5], [1415#5]),
	IIF( |
| CX.PAIR6.BORROWER.FICO | Borrower Pair 6 FICO | INTEGER | 0 | IIF(IsEmpty([67#6]), Min([1450#6], [1414#6]),
	IIF(IsEmpty([1450#6]), Min([67#6], [1414#6]),
	IIF( |
| CX.PAIR6.COBORROWER.FICO | Co-Borrower Pair 6 FICO | INTEGER | 0 | IIF(IsEmpty([60#6]), Min([1452#6], [1415#6]),
	IIF(IsEmpty([1452#6]), Min([60#6], [1415#6]),
	IIF( |
| CX.PAIRS.AVERAGE | Average of Credit Scores | INTEGER | 0 | DIV(([#CX.PAIR1.BORROWER.FICO] + [#CX.PAIR2.BORROWER.FICO] + [#CX.PAIR3.BORROWER.FICO] + [#CX.PAIR4. |
| CX.PAIRS.COUNT | Credit Score Count | INTEGER | 0 | Sum([#CX.BP.SCORE.1 ],
[#CX.CBP.SCORE.1 ],
[#CX.BP.SCORE.2 ],
[#CX.CBP.SCORE.2 ],
[#CX.BP.SCORE. |
| CX.PAIRS16 | Borrower Pair 1-6 | INTEGER | 0 | Min([CX.PAIR1.BORROWER.FICO], [CX.PAIR1.COBORROWER.FICO], [CX.PAIR2.BORROWER.FICO], [CX.PAIR2.COBORR |
| CX.PAM.MILESTONES | PAM.MILESTONES | STRING | 50 |  |
| CX.PARTNERID | Partner ID | STRING | 10 |  |
| CX.PAYING.OFF.FHA | Payoff off FHA loan? | DROPDOWNLIST | 0 |  |
| CX.PAYMENT.SHOCK | Payment Shock | DECIMAL_2 | 0 | [#912] - [#CX.CCR.C.PRESNT.HOUSING] |
| CX.PAYMENT.SHOCK.PER | Payment Shock percentage | DECIMAL_2 | 0 | (([#912] - [#CX.CCR.C.PRESNT.HOUSING])/[#CX.CCR.C.PRESNT.HOUSING])*100 |
| CX.PAYOFF.1ST.ACCTNUM | PAYOFF.1ST.ACCTNUM | STRING | 30 |  |
| CX.PAYOFF.1ST.BALANCE | PAYOFF.1ST.BALANCE | DECIMAL | 0 |  |
| CX.PAYOFF.1ST.BYTITLE | PAYOFF.1ST.BYTITLE | DROPDOWNLIST | 0 |  |
| CX.PAYOFF.1ST.LENDER | PAYOFF.1ST.LENDER | STRING | 30 |  |
| CX.PAYOFF.1ST.PHONE | PAYOFF.1ST.PHONE | PHONE | 0 |  |
| CX.PAYOFF.1ST.REQ.BY | PAYOFF.1ST.REQ.BY | STRING | 20 |  |
| CX.PAYOFF.1ST.REQ.ON | PAYOFF.1ST.REQ.ON | DATE | 0 |  |
| CX.PAYOFF.1ST.RETURN | PAYOFF.1ST.RETURN | DROPDOWNLIST | 0 |  |
| CX.PAYOFF.2ND.ACCTNUM | PAYOFF.2ND.ACCTNUM | STRING | 30 |  |
| CX.PAYOFF.2ND.BALANCE | PAYOFF.2ND.BALANCE | DECIMAL | 0 |  |
| CX.PAYOFF.2ND.BYTITLE | PAYOFF.2ND.BYTITLE | DROPDOWNLIST | 0 |  |
| CX.PAYOFF.2ND.LENDER | PAYOFF.2ND.LENDER | STRING | 30 |  |
| CX.PAYOFF.2ND.PHONE | PAYOFF.2ND.PHONE | PHONE | 0 |  |
| CX.PAYOFF.2ND.REQ.BY | PAYOFF.2ND.REQ.BY | STRING | 20 |  |
| CX.PAYOFF.2ND.REQ.ON | PAYOFF.2ND.REQ.ON | DATE | 0 |  |
| CX.PAYOFF.2ND.RETURN | PAYOFF.2ND.RETURN | DROPDOWNLIST | 0 |  |
| CX.PAYOFF.CO.ADDRESS | PAYOFF.CO.ADDRESS | STRING | 60 |  |
| CX.PAYOFF.CO.CITY | PAYOFF.CO.CITY | STRING | 30 |  |
| CX.PAYOFF.CO.CONTACT | PAYOFF.CO.CONTACT | STRING | 30 |  |
| CX.PAYOFF.CO.EMAIL | PAYOFF.CO.EMAIL | STRING | 50 |  |
| CX.PAYOFF.CO.FAX | PAYOFF.CO.FAX | PHONE | 0 |  |
| CX.PAYOFF.CO.NAME | PAYOFF.CO.NAME | STRING | 30 |  |
| CX.PAYOFF.CO.PHONE | PAYOFF.CO.PHONE | PHONE | 0 |  |
| CX.PAYOFF.CO.STATE | PAYOFF.CO.STATE | STRING | 2 |  |
| CX.PAYOFF.CO.ZIP | PAYOFF.CO.ZIP | STRING | 10 |  |
| CX.PAYOFF.DATE.THRU | PAYOFF.DATE.THRU | DATE | 0 |  |
| CX.PAYOFF.REQ.BY | PAYOFF.REQ.BY | STRING | 20 |  |
| CX.PAYOFF.REQ.ON | PAYOFF.REQ.ON | DATE | 0 |  |
| CX.PAYSTUBS.EXP.DATE.INT | Paystub Expiration Date Integer | INTEGER | 0 | IIF([@CX.INCOME.PAYSTUBS.EXP.DATE].ToOADate() = 0, 999999, [@CX.INCOME.PAYSTUBS.EXP.DATE].ToOADate() |
| CX.PBCMASSIGN | Private Banking Country Manager Assignment | STRING | 3 |  |
| CX.PC.AE | Loan Officer | X | 0 |  |
| CX.PC.AGING | Warehouse Aging | DECIMAL | 0 | XDateDiff("d", [CX.TODAY],[1997]) |
| CX.PC.AMOUNT | Check Request Amount | DECIMAL_2 | 0 |  |
| CX.PC.CHECKDATE | Date Completed | DATE | 0 |  |
| CX.PC.CHECKNUM | Check Number | STRING | 15 |  |
| CX.PC.CLEARDATE.1 | Investor Stip Clear Date 1 | DATE | 0 |  |
| CX.PC.CLEARDATE.10 | Investor Stip Clear Date 10 | DATE | 0 |  |
| CX.PC.CLEARDATE.2 | Investor Stip Clear Date 2 | DATE | 0 |  |
| CX.PC.CLEARDATE.3 | Investor Stip Clear Date 3 | DATE | 0 |  |
| CX.PC.CLEARDATE.4 | Investor Stip Clear Date 4 | DATE | 0 |  |
| CX.PC.CLEARDATE.5 | Investor Stip Clear Date 5 | DATE | 0 |  |
| CX.PC.CLEARDATE.6 | Investor Stip Clear Date 6 | DATE | 0 |  |
| CX.PC.CLEARDATE.7 | Investor Stip Clear Date 7 | DATE | 0 |  |
| CX.PC.CLEARDATE.8 | Investor Stip Clear Date 8 | DATE | 0 |  |
| CX.PC.CLEARDATE.9 | Investor Stip Clear Date 9 | DATE | 0 |  |
| CX.PC.CLOSE | Closer | X | 0 |  |
| CX.PC.COL.STATUS | Collateral Status Notes | STRING | 5000 |  |
| CX.PC.COND.ADDED.1 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.10 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.11 | CX.PC.COND.ADDED.11 | X | 0 |  |
| CX.PC.COND.ADDED.12 | CX.PC.COND.ADDED.12 | X | 0 |  |
| CX.PC.COND.ADDED.13 | CX.PC.COND.ADDED.13 | X | 0 |  |
| CX.PC.COND.ADDED.14 | CX.PC.COND.ADDED.14 | X | 0 |  |
| CX.PC.COND.ADDED.15 | CX.PC.COND.ADDED.15 | X | 0 |  |
| CX.PC.COND.ADDED.16 | CX.PC.COND.ADDED.16 | X | 0 |  |
| CX.PC.COND.ADDED.17 | CX.PC.COND.ADDED.17 | X | 0 |  |
| CX.PC.COND.ADDED.18 | CX.PC.COND.ADDED.18 | X | 0 |  |
| CX.PC.COND.ADDED.19 | CX.PC.COND.ADDED.19 | X | 0 |  |
| CX.PC.COND.ADDED.2 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.20 | CX.PC.COND.ADDED.20 | X | 0 |  |
| CX.PC.COND.ADDED.3 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.4 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.5 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.6 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.7 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.8 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.9 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.ADDED.D.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.1], 2) |
| CX.PC.COND.ADDED.D.10 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.10], 2) |
| CX.PC.COND.ADDED.D.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.11], 2) |
| CX.PC.COND.ADDED.D.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.12], 2) |
| CX.PC.COND.ADDED.D.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.13], 2) |
| CX.PC.COND.ADDED.D.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.14], 2) |
| CX.PC.COND.ADDED.D.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.15], 0) |
| CX.PC.COND.ADDED.D.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.16], 2) |
| CX.PC.COND.ADDED.D.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.17], 2) |
| CX.PC.COND.ADDED.D.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.18], 2) |
| CX.PC.COND.ADDED.D.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.19], 2) |
| CX.PC.COND.ADDED.D.2 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.2], 2) |
| CX.PC.COND.ADDED.D.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.20], 0) |
| CX.PC.COND.ADDED.D.3 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.3], 2) |
| CX.PC.COND.ADDED.D.4 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.4], 2) |
| CX.PC.COND.ADDED.D.5 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.5], 2) |
| CX.PC.COND.ADDED.D.6 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.6], 2) |
| CX.PC.COND.ADDED.D.7 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.7], 2) |
| CX.PC.COND.ADDED.D.8 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.8], 2) |
| CX.PC.COND.ADDED.D.9 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.9], 2) |
| CX.PC.COND.ADDED.U.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.1], 0) |
| CX.PC.COND.ADDED.U.10 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.10], 0) |
| CX.PC.COND.ADDED.U.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.11], 0) |
| CX.PC.COND.ADDED.U.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.12], 0) |
| CX.PC.COND.ADDED.U.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.13], 0) |
| CX.PC.COND.ADDED.U.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.14], 0) |
| CX.PC.COND.ADDED.U.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.15], 0) |
| CX.PC.COND.ADDED.U.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.16], 0) |
| CX.PC.COND.ADDED.U.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.17], 0) |
| CX.PC.COND.ADDED.U.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.18], 0) |
| CX.PC.COND.ADDED.U.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.19], 0) |
| CX.PC.COND.ADDED.U.2 | a | AUDIT | 0 | Audit([CX.PC.COND.ADDED.2], 0) |
| CX.PC.COND.ADDED.U.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.ADDED.20], 0) |
| CX.PC.COND.ADDED.U.3 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.3], 0) |
| CX.PC.COND.ADDED.U.4 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.4], 0) |
| CX.PC.COND.ADDED.U.5 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.5], 0) |
| CX.PC.COND.ADDED.U.6 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.6], 0) |
| CX.PC.COND.ADDED.U.7 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.7], 0) |
| CX.PC.COND.ADDED.U.8 | d | AUDIT | 0 | Audit([CX.PC.COND.ADDED.8], 0) |
| CX.PC.COND.ADDED.U.9 | u | AUDIT | 0 | Audit([CX.PC.COND.ADDED.9], 0) |
| CX.PC.COND.CLEARED.1 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.10 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.11 | PC.COND.CLEARED.11 | X | 0 |  |
| CX.PC.COND.CLEARED.12 | CX.PC.COND.CLEARED.12 | X | 0 |  |
| CX.PC.COND.CLEARED.13 | CX.PC.COND.CLEARED.13 | X | 0 |  |
| CX.PC.COND.CLEARED.14 | CX.PC.COND.CLEARED.14 | X | 0 |  |
| CX.PC.COND.CLEARED.15 | CX.PC.COND.CLEARED.15 | X | 0 |  |
| CX.PC.COND.CLEARED.16 | CX.PC.COND.CLEARED.16 | X | 0 |  |
| CX.PC.COND.CLEARED.17 | CX.PC.COND.CLEARED.17 | X | 0 |  |
| CX.PC.COND.CLEARED.18 | CX.PC.COND.CLEARED.18 | X | 0 |  |
| CX.PC.COND.CLEARED.19 | CX.PC.COND.CLEARED.19 | X | 0 |  |
| CX.PC.COND.CLEARED.2 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.20 | CX.PC.COND.CLEARED.20 | X | 0 |  |
| CX.PC.COND.CLEARED.3 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.4 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.5 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.6 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.7 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.8 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.9 | PC.COND.CLEARED | X | 0 |  |
| CX.PC.COND.CLEARED.D.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.1], 2) |
| CX.PC.COND.CLEARED.D.10 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.10], 2) |
| CX.PC.COND.CLEARED.D.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.11], 2) |
| CX.PC.COND.CLEARED.D.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.12], 2) |
| CX.PC.COND.CLEARED.D.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.13], 2) |
| CX.PC.COND.CLEARED.D.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.14], 2) |
| CX.PC.COND.CLEARED.D.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.15], 2) |
| CX.PC.COND.CLEARED.D.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.16], 2) |
| CX.PC.COND.CLEARED.D.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.17], 2) |
| CX.PC.COND.CLEARED.D.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.18], 2) |
| CX.PC.COND.CLEARED.D.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.19], 2) |
| CX.PC.COND.CLEARED.D.2 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.2], 2) |
| CX.PC.COND.CLEARED.D.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.20], 2) |
| CX.PC.COND.CLEARED.D.3 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.3], 2) |
| CX.PC.COND.CLEARED.D.4 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.4], 2) |
| CX.PC.COND.CLEARED.D.5 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.5], 2) |
| CX.PC.COND.CLEARED.D.6 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.6], 2) |
| CX.PC.COND.CLEARED.D.7 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.7], 2) |
| CX.PC.COND.CLEARED.D.8 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.8], 2) |
| CX.PC.COND.CLEARED.D.9 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.9], 2) |
| CX.PC.COND.CLEARED.U.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.1], 0) |
| CX.PC.COND.CLEARED.U.10 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.10], 0) |
| CX.PC.COND.CLEARED.U.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.11], 0) |
| CX.PC.COND.CLEARED.U.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.12], 0) |
| CX.PC.COND.CLEARED.U.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.13], 0) |
| CX.PC.COND.CLEARED.U.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.14], 0) |
| CX.PC.COND.CLEARED.U.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.15], 0) |
| CX.PC.COND.CLEARED.U.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.16], 0) |
| CX.PC.COND.CLEARED.U.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.17], 0) |
| CX.PC.COND.CLEARED.U.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.18], 0) |
| CX.PC.COND.CLEARED.U.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.19], 0) |
| CX.PC.COND.CLEARED.U.2 | a | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.2], 0) |
| CX.PC.COND.CLEARED.U.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.20], 0) |
| CX.PC.COND.CLEARED.U.3 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.3], 0) |
| CX.PC.COND.CLEARED.U.4 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.4], 0) |
| CX.PC.COND.CLEARED.U.5 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.5], 0) |
| CX.PC.COND.CLEARED.U.6 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.6], 0) |
| CX.PC.COND.CLEARED.U.7 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.7], 0) |
| CX.PC.COND.CLEARED.U.8 | d | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.8], 0) |
| CX.PC.COND.CLEARED.U.9 | u | AUDIT | 0 | Audit([CX.PC.COND.CLEARED.9], 0) |
| CX.PC.COND.DEPT.1 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.10 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.11 | PC.COND.DEPT.11 | STRING | 30 |  |
| CX.PC.COND.DEPT.12 | CX.PC.COND.DEPT.12 | STRING | 30 |  |
| CX.PC.COND.DEPT.13 | CX.PC.COND.DEPT.13 | STRING | 30 |  |
| CX.PC.COND.DEPT.14 | CX.PC.COND.DEPT.14 | STRING | 30 |  |
| CX.PC.COND.DEPT.15 | CX.PC.COND.DEPT.15 | STRING | 30 |  |
| CX.PC.COND.DEPT.16 | CX.PC.COND.DEPT.16 | STRING | 30 |  |
| CX.PC.COND.DEPT.17 | CX.PC.COND.DEPT.17 | STRING | 30 |  |
| CX.PC.COND.DEPT.18 | CX.PC.COND.DEPT.18 | STRING | 30 |  |
| CX.PC.COND.DEPT.19 | CX.PC.COND.DEPT.19 | STRING | 30 |  |
| CX.PC.COND.DEPT.2 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.20 | CX.PC.COND.DEPT.20 | STRING | 30 |  |
| CX.PC.COND.DEPT.21 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.22 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.23 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.24 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.25 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.26 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.27 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.28 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.29 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.3 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.30 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.31 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.32 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.33 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.34 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.35 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.36 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.37 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.38 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.39 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.4 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.40 | PCCM Condition Department | STRING | 30 |  |
| CX.PC.COND.DEPT.5 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.6 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.7 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.8 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.DEPT.9 | PC.COND.DEPT. | STRING | 30 |  |
| CX.PC.COND.MANAGER.1 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.10 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.11 | PC.COND.MANAGER.11 | STRING | 30 |  |
| CX.PC.COND.MANAGER.12 | CX.PC.COND.MANAGER.12 | STRING | 30 |  |
| CX.PC.COND.MANAGER.13 | CX.PC.COND.MANAGER.13 | STRING | 30 |  |
| CX.PC.COND.MANAGER.14 | CX.PC.COND.MANAGER.14 | STRING | 30 |  |
| CX.PC.COND.MANAGER.15 | CX.PC.COND.MANAGER.15 | STRING | 30 |  |
| CX.PC.COND.MANAGER.16 | CX.PC.COND.MANAGER.16 | STRING | 30 |  |
| CX.PC.COND.MANAGER.17 | CX.PC.COND.MANAGER.17 | STRING | 30 |  |
| CX.PC.COND.MANAGER.18 | CX.PC.COND.MANAGER.18 | STRING | 30 |  |
| CX.PC.COND.MANAGER.19 | CX.PC.COND.MANAGER.19 | STRING | 30 |  |
| CX.PC.COND.MANAGER.2 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.20 | CX.PC.COND.MANAGER.20 | STRING | 30 |  |
| CX.PC.COND.MANAGER.21 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.22 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.23 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.24 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.25 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.26 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.27 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.28 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.29 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.3 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.30 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.31 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.32 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.33 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.34 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.35 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.36 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.37 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.38 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.39 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.4 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.40 | PCCM Condition Manager | STRING | 30 |  |
| CX.PC.COND.MANAGER.5 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.6 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.7 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.8 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.MANAGER.9 | PC.COND.MANAGER. | STRING | 30 |  |
| CX.PC.COND.NOTES.1 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.10 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.11 | PC.COND.NOTES.11 | STRING | 500 |  |
| CX.PC.COND.NOTES.12 | CX.PC.COND.NOTES.12 | STRING | 500 |  |
| CX.PC.COND.NOTES.13 | CX.PC.COND.NOTES.13 | STRING | 500 |  |
| CX.PC.COND.NOTES.14 | CX.PC.COND.NOTES.14 | STRING | 500 |  |
| CX.PC.COND.NOTES.15 | CX.PC.COND.NOTES.15 | STRING | 500 |  |
| CX.PC.COND.NOTES.16 | CX.PC.COND.NOTES.16 | STRING | 500 |  |
| CX.PC.COND.NOTES.17 | CX.PC.COND.NOTES.17 | STRING | 500 |  |
| CX.PC.COND.NOTES.18 | CX.PC.COND.NOTES.18 | STRING | 500 |  |
| CX.PC.COND.NOTES.19 | CX.PC.COND.NOTES.19 | STRING | 500 |  |
| CX.PC.COND.NOTES.2 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.20 | CX.PC.COND.NOTES.20 | STRING | 500 |  |
| CX.PC.COND.NOTES.21 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.22 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.23 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.24 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.25 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.26 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.27 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.28 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.29 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.3 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.30 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.31 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.32 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.33 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.34 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.35 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.36 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.37 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.38 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.39 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.4 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.40 | PC.COND.NOTES. | STRING | 1000 |  |
| CX.PC.COND.NOTES.5 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.6 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.7 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.8 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.NOTES.9 | PC.COND.NOTES. | STRING | 500 |  |
| CX.PC.COND.RECEIVED.1 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.10 | PC.COND.REQUESTED. | X | 0 |  |
| CX.PC.COND.RECEIVED.11 | PC.COND.RECEIVED.11 | X | 0 |  |
| CX.PC.COND.RECEIVED.12 | CX.PC.COND.RECEIVED.12 | X | 0 |  |
| CX.PC.COND.RECEIVED.13 | CX.PC.COND.RECEIVED.13 | X | 0 |  |
| CX.PC.COND.RECEIVED.14 | CX.PC.COND.RECEIVED.14 | X | 0 |  |
| CX.PC.COND.RECEIVED.15 | CX.PC.COND.RECEIVED.15 | X | 0 |  |
| CX.PC.COND.RECEIVED.16 | CX.PC.COND.RECEIVED.16 | X | 0 |  |
| CX.PC.COND.RECEIVED.17 | CX.PC.COND.RECEIVED.17 | X | 0 |  |
| CX.PC.COND.RECEIVED.18 | CX.PC.COND.RECEIVED.18 | X | 0 |  |
| CX.PC.COND.RECEIVED.19 | CX.PC.COND.RECEIVED.19 | X | 0 |  |
| CX.PC.COND.RECEIVED.2 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.20 | CX.PC.COND.RECEIVED.20 | X | 0 |  |
| CX.PC.COND.RECEIVED.3 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.4 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.5 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.6 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.7 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.8 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.9 | PC.COND.RECEIVED | X | 0 |  |
| CX.PC.COND.RECEIVED.D.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.1], 2) |
| CX.PC.COND.RECEIVED.D.10 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.10], 2) |
| CX.PC.COND.RECEIVED.D.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.11], 2) |
| CX.PC.COND.RECEIVED.D.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.12], 2) |
| CX.PC.COND.RECEIVED.D.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.13], 2) |
| CX.PC.COND.RECEIVED.D.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.14], 2) |
| CX.PC.COND.RECEIVED.D.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.15], 2) |
| CX.PC.COND.RECEIVED.D.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.16], 2) |
| CX.PC.COND.RECEIVED.D.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.17], 2) |
| CX.PC.COND.RECEIVED.D.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.18], 2) |
| CX.PC.COND.RECEIVED.D.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.19], 2) |
| CX.PC.COND.RECEIVED.D.2 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.2], 2) |
| CX.PC.COND.RECEIVED.D.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.20], 2) |
| CX.PC.COND.RECEIVED.D.3 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.3], 2) |
| CX.PC.COND.RECEIVED.D.4 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.4], 2) |
| CX.PC.COND.RECEIVED.D.5 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.5], 2) |
| CX.PC.COND.RECEIVED.D.6 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.6], 2) |
| CX.PC.COND.RECEIVED.D.7 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.7], 2) |
| CX.PC.COND.RECEIVED.D.8 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.8], 2) |
| CX.PC.COND.RECEIVED.D.9 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.9], 2) |
| CX.PC.COND.RECEIVED.U.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.1], 0) |
| CX.PC.COND.RECEIVED.U.10 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.10], 0) |
| CX.PC.COND.RECEIVED.U.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.11], 0) |
| CX.PC.COND.RECEIVED.U.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.12], 0) |
| CX.PC.COND.RECEIVED.U.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.13], 0) |
| CX.PC.COND.RECEIVED.U.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.14], 0) |
| CX.PC.COND.RECEIVED.U.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.15], 0) |
| CX.PC.COND.RECEIVED.U.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.16], 0) |
| CX.PC.COND.RECEIVED.U.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.17], 0) |
| CX.PC.COND.RECEIVED.U.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.18], 0) |
| CX.PC.COND.RECEIVED.U.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.19], 0) |
| CX.PC.COND.RECEIVED.U.2 | a | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.2], 0) |
| CX.PC.COND.RECEIVED.U.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.20], 0) |
| CX.PC.COND.RECEIVED.U.3 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.3], 0) |
| CX.PC.COND.RECEIVED.U.4 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.4], 0) |
| CX.PC.COND.RECEIVED.U.5 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.5], 0) |
| CX.PC.COND.RECEIVED.U.6 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.6], 0) |
| CX.PC.COND.RECEIVED.U.7 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.7], 0) |
| CX.PC.COND.RECEIVED.U.8 | d | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.8], 0) |
| CX.PC.COND.RECEIVED.U.9 | u | AUDIT | 0 | Audit([CX.PC.COND.RECEIVED.9], 0) |
| CX.PC.COND.REQUESTED.1 | PC.COND.REQUESTED. | X | 0 |  |
| CX.PC.COND.REQUESTED.10 | PC.COND.REQUESTED. | X | 0 |  |
| CX.PC.COND.REQUESTED.11 | CX.PC.COND.REQUESTED.11 | X | 0 |  |
| CX.PC.COND.REQUESTED.12 | CX.PC.COND.REQUESTED.12 | X | 0 |  |
| CX.PC.COND.REQUESTED.13 | CX.PC.COND.REQUESTED.13 | X | 0 |  |
| CX.PC.COND.REQUESTED.14 | CX.PC.COND.REQUESTED.14 | X | 0 |  |
| CX.PC.COND.REQUESTED.15 | CX.PC.COND.REQUESTED.15 | X | 0 |  |
| CX.PC.COND.REQUESTED.16 | CX.PC.COND.REQUESTED.16 | X | 0 |  |
| CX.PC.COND.REQUESTED.17 | CX.PC.COND.REQUESTED.17 | X | 0 |  |
| CX.PC.COND.REQUESTED.18 | CX.PC.COND.REQUESTED.18 | X | 0 |  |
| CX.PC.COND.REQUESTED.19 | CX.PC.COND.REQUESTED.19 | X | 0 |  |
| CX.PC.COND.REQUESTED.2 | PC.COND.REQUESTED. | X | 0 |  |
| CX.PC.COND.REQUESTED.20 | CX.PC.COND.REQUESTED.20 | X | 0 |  |
| CX.PC.COND.REQUESTED.21 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.22 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.23 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.24 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.25 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.26 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.27 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.28 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.29 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.3 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.30 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.31 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.32 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.33 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.34 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.35 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.36 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.37 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.38 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.39 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.4 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.40 | PCCM Requested | X | 0 |  |
| CX.PC.COND.REQUESTED.5 | PC.COND.ADDED. | X | 0 |  |
| CX.PC.COND.REQUESTED.6 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.7 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.8 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.9 | PC.COND.REQUESTED | X | 0 |  |
| CX.PC.COND.REQUESTED.D.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.1], 2) |
| CX.PC.COND.REQUESTED.D.10 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.10], 2) |
| CX.PC.COND.REQUESTED.D.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.11], 2) |
| CX.PC.COND.REQUESTED.D.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.12], 2) |
| CX.PC.COND.REQUESTED.D.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.13], 2) |
| CX.PC.COND.REQUESTED.D.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.14], 2) |
| CX.PC.COND.REQUESTED.D.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.15], 2) |
| CX.PC.COND.REQUESTED.D.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.16], 2) |
| CX.PC.COND.REQUESTED.D.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.17], 2) |
| CX.PC.COND.REQUESTED.D.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.18], 2) |
| CX.PC.COND.REQUESTED.D.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.19], 2) |
| CX.PC.COND.REQUESTED.D.2 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.2], 2) |
| CX.PC.COND.REQUESTED.D.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.20], 2) |
| CX.PC.COND.REQUESTED.D.21 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.21], 2) |
| CX.PC.COND.REQUESTED.D.22 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.22], 2) |
| CX.PC.COND.REQUESTED.D.23 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.23], 2) |
| CX.PC.COND.REQUESTED.D.24 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.24], 2) |
| CX.PC.COND.REQUESTED.D.25 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.25], 2) |
| CX.PC.COND.REQUESTED.D.26 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.26], 2) |
| CX.PC.COND.REQUESTED.D.27 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.27], 2) |
| CX.PC.COND.REQUESTED.D.28 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.28], 2) |
| CX.PC.COND.REQUESTED.D.29 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.29], 2) |
| CX.PC.COND.REQUESTED.D.3 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.3], 2) |
| CX.PC.COND.REQUESTED.D.30 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.30], 2) |
| CX.PC.COND.REQUESTED.D.31 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.31], 2) |
| CX.PC.COND.REQUESTED.D.32 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.32], 2) |
| CX.PC.COND.REQUESTED.D.33 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.33], 2) |
| CX.PC.COND.REQUESTED.D.34 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.34], 2) |
| CX.PC.COND.REQUESTED.D.35 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.35], 2) |
| CX.PC.COND.REQUESTED.D.36 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.36], 2) |
| CX.PC.COND.REQUESTED.D.37 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.37], 2) |
| CX.PC.COND.REQUESTED.D.38 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.38], 2) |
| CX.PC.COND.REQUESTED.D.39 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.39], 2) |
| CX.PC.COND.REQUESTED.D.4 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.4], 2) |
| CX.PC.COND.REQUESTED.D.40 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.40], 2) |
| CX.PC.COND.REQUESTED.D.5 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.5], 2) |
| CX.PC.COND.REQUESTED.D.6 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.6], 2) |
| CX.PC.COND.REQUESTED.D.7 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.7], 2) |
| CX.PC.COND.REQUESTED.D.8 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.8], 2) |
| CX.PC.COND.REQUESTED.D.9 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.9], 2) |
| CX.PC.COND.REQUESTED.U.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.1], 0) |
| CX.PC.COND.REQUESTED.U.10 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.10], 0) |
| CX.PC.COND.REQUESTED.U.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.11], 0) |
| CX.PC.COND.REQUESTED.U.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.12], 0) |
| CX.PC.COND.REQUESTED.U.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.13], 0) |
| CX.PC.COND.REQUESTED.U.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.14], 0) |
| CX.PC.COND.REQUESTED.U.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.15], 0) |
| CX.PC.COND.REQUESTED.U.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.16], 0) |
| CX.PC.COND.REQUESTED.U.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.17], 0) |
| CX.PC.COND.REQUESTED.U.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.18], 0) |
| CX.PC.COND.REQUESTED.U.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.19], 0) |
| CX.PC.COND.REQUESTED.U.2 | a | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.2], 0) |
| CX.PC.COND.REQUESTED.U.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.20], 0) |
| CX.PC.COND.REQUESTED.U.21 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.21], 0) |
| CX.PC.COND.REQUESTED.U.22 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.22], 0) |
| CX.PC.COND.REQUESTED.U.23 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.23], 0) |
| CX.PC.COND.REQUESTED.U.24 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.24], 0) |
| CX.PC.COND.REQUESTED.U.25 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.25], 0) |
| CX.PC.COND.REQUESTED.U.26 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.26], 0) |
| CX.PC.COND.REQUESTED.U.27 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.27], 0) |
| CX.PC.COND.REQUESTED.U.28 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.28], 0) |
| CX.PC.COND.REQUESTED.U.29 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.29], 0) |
| CX.PC.COND.REQUESTED.U.3 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.3], 0) |
| CX.PC.COND.REQUESTED.U.30 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.30], 0) |
| CX.PC.COND.REQUESTED.U.31 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.31], 0) |
| CX.PC.COND.REQUESTED.U.32 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.32], 0) |
| CX.PC.COND.REQUESTED.U.33 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.33], 0) |
| CX.PC.COND.REQUESTED.U.34 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.34], 0) |
| CX.PC.COND.REQUESTED.U.35 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.35], 0) |
| CX.PC.COND.REQUESTED.U.36 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.36], 0) |
| CX.PC.COND.REQUESTED.U.37 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.37], 0) |
| CX.PC.COND.REQUESTED.U.38 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.38], 0) |
| CX.PC.COND.REQUESTED.U.39 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.39], 0) |
| CX.PC.COND.REQUESTED.U.4 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.4], 0) |
| CX.PC.COND.REQUESTED.U.40 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.40], 0) |
| CX.PC.COND.REQUESTED.U.5 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.5], 0) |
| CX.PC.COND.REQUESTED.U.6 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.6], 0) |
| CX.PC.COND.REQUESTED.U.7 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.7], 0) |
| CX.PC.COND.REQUESTED.U.8 | d | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.8], 0) |
| CX.PC.COND.REQUESTED.U.9 | u | AUDIT | 0 | Audit([CX.PC.COND.REQUESTED.9], 0) |
| CX.PC.COND.SENT.1 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.10 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.11 | PC.COND.SENT.11 | X | 0 |  |
| CX.PC.COND.SENT.12 | CX.PC.COND.SENT.12 | X | 0 |  |
| CX.PC.COND.SENT.13 | CX.PC.COND.SENT.13 | X | 0 |  |
| CX.PC.COND.SENT.14 | CX.PC.COND.SENT.14 | X | 0 |  |
| CX.PC.COND.SENT.15 | CX.PC.COND.SENT.15 | X | 0 |  |
| CX.PC.COND.SENT.16 | CX.PC.COND.SENT.16 | X | 0 |  |
| CX.PC.COND.SENT.17 | CX.PC.COND.SENT.17 | X | 0 |  |
| CX.PC.COND.SENT.18 | CX.PC.COND.SENT.18 | X | 0 |  |
| CX.PC.COND.SENT.19 | CX.PC.COND.SENT.19 | X | 0 |  |
| CX.PC.COND.SENT.2 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.20 | CX.PC.COND.SENT.20 | X | 0 |  |
| CX.PC.COND.SENT.3 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.4 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.5 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.6 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.7 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.8 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.9 | PC.COND.Sent | X | 0 |  |
| CX.PC.COND.SENT.D.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.1], 2) |
| CX.PC.COND.SENT.D.10 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.10], 2) |
| CX.PC.COND.SENT.D.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.11], 2) |
| CX.PC.COND.SENT.D.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.12], 2) |
| CX.PC.COND.SENT.D.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.13], 2) |
| CX.PC.COND.SENT.D.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.14], 2) |
| CX.PC.COND.SENT.D.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.15], 2) |
| CX.PC.COND.SENT.D.16 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.16], 2) |
| CX.PC.COND.SENT.D.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.17], 2) |
| CX.PC.COND.SENT.D.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.18], 2) |
| CX.PC.COND.SENT.D.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.19], 2) |
| CX.PC.COND.SENT.D.2 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.2], 2) |
| CX.PC.COND.SENT.D.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.20], 2) |
| CX.PC.COND.SENT.D.3 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.3], 2) |
| CX.PC.COND.SENT.D.4 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.4], 2) |
| CX.PC.COND.SENT.D.5 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.5], 2) |
| CX.PC.COND.SENT.D.6 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.6], 2) |
| CX.PC.COND.SENT.D.7 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.7], 2) |
| CX.PC.COND.SENT.D.8 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.8], 2) |
| CX.PC.COND.SENT.D.9 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.9], 2) |
| CX.PC.COND.SENT.U.1 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.1], 0) |
| CX.PC.COND.SENT.U.10 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.10], 0) |
| CX.PC.COND.SENT.U.11 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.11], 0) |
| CX.PC.COND.SENT.U.12 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.12], 0) |
| CX.PC.COND.SENT.U.13 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.13], 0) |
| CX.PC.COND.SENT.U.14 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.14], 0) |
| CX.PC.COND.SENT.U.15 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.15], 0) |
| CX.PC.COND.SENT.U.16 | audit | AUDIT | 0 | Audit([PC.COND.SENT.16], 0) |
| CX.PC.COND.SENT.U.17 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.17], 0) |
| CX.PC.COND.SENT.U.18 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.18], 0) |
| CX.PC.COND.SENT.U.19 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.19], 0) |
| CX.PC.COND.SENT.U.2 | a | AUDIT | 0 | Audit([CX.PC.COND.SENT.2], 0) |
| CX.PC.COND.SENT.U.20 | audit | AUDIT | 0 | Audit([CX.PC.COND.SENT.20], 0) |
| CX.PC.COND.SENT.U.3 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.3], 0) |
| CX.PC.COND.SENT.U.4 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.4], 0) |
| CX.PC.COND.SENT.U.5 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.5], 0) |
| CX.PC.COND.SENT.U.6 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.6], 0) |
| CX.PC.COND.SENT.U.7 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.7], 0) |
| CX.PC.COND.SENT.U.8 | d | AUDIT | 0 | Audit([CX.PC.COND.SENT.8], 0) |
| CX.PC.COND.SENT.U.9 | u | AUDIT | 0 | Audit([CX.PC.COND.SENT.9], 0) |
| CX.PC.COND.USER.1 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.10 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.11 | PC.COND.USER.11 | STRING | 30 |  |
| CX.PC.COND.USER.12 | CX.PC.COND.USER.12 | STRING | 30 |  |
| CX.PC.COND.USER.13 | CX.PC.COND.USER.13 | STRING | 30 |  |
| CX.PC.COND.USER.14 | CX.PC.COND.USER.14 | STRING | 30 |  |
| CX.PC.COND.USER.15 | CX.PC.COND.USER.15 | STRING | 30 |  |
| CX.PC.COND.USER.16 | CX.PC.COND.USER.16 | STRING | 30 |  |
| CX.PC.COND.USER.17 | CX.PC.COND.USER.17 | STRING | 30 |  |
| CX.PC.COND.USER.18 | CX.PC.COND.USER.18 | STRING | 30 |  |
| CX.PC.COND.USER.19 | CX.PC.COND.USER.19 | STRING | 30 |  |
| CX.PC.COND.USER.2 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.20 | CX.PC.COND.USER.20 | STRING | 30 |  |
| CX.PC.COND.USER.21 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.22 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.23 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.24 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.25 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.26 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.27 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.28 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.29 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.3 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.30 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.31 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.32 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.33 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.34 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.35 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.36 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.37 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.38 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.39 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.4 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.40 | PCCM Condition User | STRING | 30 |  |
| CX.PC.COND.USER.5 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.6 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.7 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.8 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.COND.USER.9 | PC.COND.USER. | STRING | 30 |  |
| CX.PC.CONDITION.1 | Condition 1 | STRING | 100 |  |
| CX.PC.CONDITION.1.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.1.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.10 | Condition 10 | STRING | 100 |  |
| CX.PC.CONDITION.10.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.10.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.11 | CX.PC.CONDITION.11 | STRING | 100 |  |
| CX.PC.CONDITION.11.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.11.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.12 | CX.PC.CONDITION.12 | STRING | 100 |  |
| CX.PC.CONDITION.12.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.12.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.13 | CX.PC.CONDITION.13 | STRING | 100 |  |
| CX.PC.CONDITION.13.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.13.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.14 | CX.PC.CONDITION.14 | STRING | 100 |  |
| CX.PC.CONDITION.14.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.14.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.15 | CX.PC.CONDITION.15 | STRING | 100 |  |
| CX.PC.CONDITION.15.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.15.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.16 | CX.PC.CONDITION.16 | STRING | 100 |  |
| CX.PC.CONDITION.16.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.16.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.17 | CX.PC.CONDITION.17 | STRING | 100 |  |
| CX.PC.CONDITION.17.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.17.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.18 | CX.PC.CONDITION.18 | STRING | 100 |  |
| CX.PC.CONDITION.18.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.18.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.19 | CX.PC.CONDITION.19 | STRING | 100 |  |
| CX.PC.CONDITION.19.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.19.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.2 | Condition 2 | STRING | 100 |  |
| CX.PC.CONDITION.2.DATE | date  | DATE | 0 |  |
| CX.PC.CONDITION.2.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.20 | CX.PC.CONDITION.20 | STRING | 100 |  |
| CX.PC.CONDITION.20.DATE | due date | DATE | 0 |  |
| CX.PC.CONDITION.20.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.21 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.22 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.23 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.24 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.25 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.26 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.27 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.28 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.29 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.3 | Condition 3 | STRING | 100 |  |
| CX.PC.CONDITION.3.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.3.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.30 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.31 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.32 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.33 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.34 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.35 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.36 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.37 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.38 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.39 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.4 | Condition 4 | STRING | 101 |  |
| CX.PC.CONDITION.4.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.4.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.40 | PCCM Condition | STRING | 100 |  |
| CX.PC.CONDITION.5 | Condition 5 | STRING | 100 |  |
| CX.PC.CONDITION.5.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.5.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.6 | Condition 6 | STRING | 100 |  |
| CX.PC.CONDITION.6.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.6.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.7 | Condition 7 | STRING | 100 |  |
| CX.PC.CONDITION.7.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.7.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.8 | Condition 8 | STRING | 100 |  |
| CX.PC.CONDITION.8.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.8.DUE | due | DATE | 0 |  |
| CX.PC.CONDITION.9 | Condition 9 | STRING | 100 |  |
| CX.PC.CONDITION.9.DATE | date | DATE | 0 |  |
| CX.PC.CONDITION.9.DUE | due | DATE | 0 |  |
| CX.PC.CUREDATE | Cure by Date | DATE | 0 |  |
| CX.PC.DAYSONLINE | Days Since Funding | INTEGER | 0 | IIF(IsDate([1999]),DateDiff("d", [@1999], Today),nothing) |
| CX.PC.DECLINE | Declined | X | 0 |  |
| CX.PC.DECLINE.DATE | Declined Date | DATE | 0 |  |
| CX.PC.DEFICIENCY.1 | Post-Closing Deficiency 1 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.1.BY | Post-Closing Deficiency marked by 1 | STRING | 30 |  |
| CX.PC.DEFICIENCY.10 | Post-Closing Deficiency 10 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.10.BY | Post-Closing Deficiency marked by 10 | STRING | 30 |  |
| CX.PC.DEFICIENCY.11 | Post-Closing Deficiency 11 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.11.BY | Post-Closing Deficiency marked by 11 | STRING | 30 |  |
| CX.PC.DEFICIENCY.12 | Post-Closing Deficiency 12 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.12.BY | Post-Closing Deficiency marked by 12 | STRING | 30 |  |
| CX.PC.DEFICIENCY.13 | Post-Closing Deficiency 13 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.13.BY | Post-Closing Deficiency marked by 13 | STRING | 30 |  |
| CX.PC.DEFICIENCY.14 | Post-Closing Deficiency 14 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.14.BY | Post-Closing Deficiency marked by 14 | STRING | 30 |  |
| CX.PC.DEFICIENCY.15 | Post-Closing Deficiency 15 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.15.BY | Post-Closing Deficiency marked by 15 | STRING | 30 |  |
| CX.PC.DEFICIENCY.16 | Post-Closing Deficiency 16 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.16.BY | Post-Closing Deficiency marked by 16 | STRING | 30 |  |
| CX.PC.DEFICIENCY.17 | Post-Closing Deficiency 17 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.17.BY | Post-Closing Deficiency marked by 17 | STRING | 30 |  |
| CX.PC.DEFICIENCY.18 | Post-Closing Deficiency 18 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.18.BY | Post-Closing Deficiency marked by 18 | STRING | 30 |  |
| CX.PC.DEFICIENCY.19 | Post-Closing Deficiency 19 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.19.BY | Post-Closing Deficiency marked by 19 | STRING | 30 |  |
| CX.PC.DEFICIENCY.2 | Post-Closing Deficiency 2 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.2.BY | Post-Closing Deficiency marked by 2 | STRING | 30 |  |
| CX.PC.DEFICIENCY.20 | Post-Closing Deficiency 20 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.20.BY | Post-Closing Deficiency marked by 20 | STRING | 30 |  |
| CX.PC.DEFICIENCY.3 | Post-Closing Deficiency 3 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.3.BY | Post-Closing Deficiency marked by 3 | STRING | 30 |  |
| CX.PC.DEFICIENCY.4 | Post-Closing Deficiency 4 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.4.BY | Post-Closing Deficiency marked by 4 | STRING | 30 |  |
| CX.PC.DEFICIENCY.5 | Post-Closing Deficiency 5 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.5.BY | Post-Closing Deficiency marked by 5 | STRING | 30 |  |
| CX.PC.DEFICIENCY.6 | Post-Closing Deficiency 6 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.6.BY | Post-Closing Deficiency marked by 6 | STRING | 30 |  |
| CX.PC.DEFICIENCY.7 | Post-Closing Deficiency 7 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.7.BY | Post-Closing Deficiency marked by 7 | STRING | 30 |  |
| CX.PC.DEFICIENCY.8 | Post-Closing Deficiency 8 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.8.BY | Post-Closing Deficiency marked by 8 | STRING | 30 |  |
| CX.PC.DEFICIENCY.9 | Post-Closing Deficiency 9 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.9.BY | Post-Closing Deficiency marked by 9 | STRING | 30 |  |
| CX.PC.DEFICIENCY.COMMENT.1 | Post-Closing Deficiency Comment 1 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.10 | Post-Closing Deficiency Comment 10 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.11 | Post-Closing Deficiency Comment 11 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.12 | Post-Closing Deficiency Comment 12 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.13 | Post-Closing Deficiency Comment 13 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.14 | Post-Closing Deficiency Comment 14 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.15 | Post-Closing Deficiency Comment 15 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.16 | Post-Closing Deficiency Comment 16 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.17 | Post-Closing Deficiency Comment 17 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.18 | Post-Closing Deficiency Comment 18 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.19 | Post-Closing Deficiency Comment 19 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.2 | Post-Closing Deficiency Comment 2 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.20 | Post-Closing Deficiency Comment 20 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.3 | Post-Closing Deficiency Comment 3 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.4 | Post-Closing Deficiency Comment 4 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.5 | Post-Closing Deficiency Comment 5 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.6 | Post-Closing Deficiency Comment 6 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.7 | Post-Closing Deficiency Comment 7 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.8 | Post-Closing Deficiency Comment 8 | STRING | 600 |  |
| CX.PC.DEFICIENCY.COMMENT.9 | Post-Closing Deficiency Comment 9 | STRING | 600 |  |
| CX.PC.DEFICIENCY.DATE.1 | Post-Closing Deficiency Marked Date 1 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.10 | Post-Closing Deficiency Marked Date 10 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.11 | Post-Closing Deficiency Marked Date 11 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.12 | Post-Closing Deficiency Marked Date 12 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.13 | Post-Closing Deficiency Marked Date 13 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.14 | Post-Closing Deficiency Marked Date 14 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.15 | Post-Closing Deficiency Marked Date 15 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.16 | Post-Closing Deficiency Marked Date 16 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.17 | Post-Closing Deficiency Marked Date 17 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.18 | Post-Closing Deficiency Marked Date 18 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.19 | Post-Closing Deficiency Marked Date 19 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.2 | Post-Closing Deficiency Marked Date 2 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.20 | Post-Closing Deficiency Marked Date 20 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.3 | Post-Closing Deficiency Marked Date 3 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.4 | Post-Closing Deficiency Marked Date 4 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.5 | Post-Closing Deficiency Marked Date 5 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.6 | Post-Closing Deficiency Marked Date 6 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.7 | Post-Closing Deficiency Marked Date 7 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.8 | Post-Closing Deficiency Marked Date 8 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.9 | Post-Closing Deficiency Marked Date 9 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.1 | Post-Closing Deficiency Date Resolved 1 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.10 | Post-Closing Deficiency Date Resolved 10 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.11 | Post-Closing Deficiency Date Resolved 11 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.12 | Post-Closing Deficiency Date Resolved 12 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.13 | Post-Closing Deficiency Date Resolved 13 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.14 | Post-Closing Deficiency Date Resolved 14 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.15 | Post-Closing Deficiency Date Resolved 15 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.16 | Post-Closing Deficiency Date Resolved 16 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.17 | Post-Closing Deficiency Date Resolved 17 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.18 | Post-Closing Deficiency Date Resolved 18 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.19 | Post-Closing Deficiency Date Resolved 19 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.2 | Post-Closing Deficiency Date Resolved 2 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.20 | Post-Closing Deficiency Date Resolved 20 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.3 | Post-Closing Deficiency Date Resolved 3 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.4 | Post-Closing Deficiency Date Resolved 4 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.5 | Post-Closing Deficiency Date Resolved 5 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.6 | Post-Closing Deficiency Date Resolved 6 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.7 | Post-Closing Deficiency Date Resolved 7 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.8 | Post-Closing Deficiency Date Resolved 8 | STRING | 30 |  |
| CX.PC.DEFICIENCY.DATE.RE.9 | Post-Closing Deficiency Date Resolved 9 | STRING | 30 |  |
| CX.PC.DEFICIENCY.RATE.1 | Post-Closing Deficiency Rating 1 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.10 | Post-Closing Deficiency Rating 10 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.11 | Post-Closing Deficiency Rating 11 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.12 | Post-Closing Deficiency Rating 12 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.13 | Post-Closing Deficiency Rating 13 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.14 | Post-Closing Deficiency Rating 14 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.15 | Post-Closing Deficiency Rating 15 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.16 | Post-Closing Deficiency Rating 16 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.17 | Post-Closing Deficiency Rating 17 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.18 | Post-Closing Deficiency Rating 18 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.19 | Post-Closing Deficiency Rating 19 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.2 | Post-Closing Deficiency Rating 2 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.20 | Post-Closing Deficiency Rating 20 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.3 | Post-Closing Deficiency Rating 3 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.4 | Post-Closing Deficiency Rating 4 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.5 | Post-Closing Deficiency Rating 5 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.6 | Post-Closing Deficiency Rating 6 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.7 | Post-Closing Deficiency Rating 7 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.8 | Post-Closing Deficiency Rating 8 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RATE.9 | Post-Closing Deficiency Rating 9 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.1 | Post-Closing Deficiency Resolved 1 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.10 | Post-Closing Deficiency Resolved 10 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.11 | Post-Closing Deficiency Resolved 11 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.12 | Post-Closing Deficiency Resolved 12 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.13 | Post-Closing Deficiency Resolved 13 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.14 | Post-Closing Deficiency Resolved 14 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.15 | Post-Closing Deficiency Resolved 15 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.16 | Post-Closing Deficiency Resolved 16 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.17 | Post-Closing Deficiency Resolved 17 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.18 | Post-Closing Deficiency Resolved 18 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.19 | Post-Closing Deficiency Resolved 19 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.2 | Post-Closing Deficiency Resolved 2 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.20 | Post-Closing Deficiency Resolved 20 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.3 | Post-Closing Deficiency Resolved 3 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.4 | Post-Closing Deficiency Resolved 4 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.5 | Post-Closing Deficiency Resolved 5 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.6 | Post-Closing Deficiency Resolved 6 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.7 | Post-Closing Deficiency Resolved 7 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.8 | Post-Closing Deficiency Resolved 8 | DROPDOWNLIST | 0 |  |
| CX.PC.DEFICIENCY.RESOLVED.9 | Post-Closing Deficiency Resolved 9 | DROPDOWNLIST | 0 |  |
| CX.PC.FD.RECORDED.DATE.1 | Post Closing FD Recorded Date 1 | DATE | 0 |  |
| CX.PC.FIRSTROUND | Purchased First Round | X | 0 |  |
| CX.PC.MHDC | MHDC Approval | X | 0 |  |
| CX.PC.NOTEONLY | Note Only | X | 0 |  |
| CX.PC.NOTES | Post Closer Notes | STRING | 5000 |  |
| CX.PC.NUMSTIPS | Total Number of Stips | DROPDOWNLIST | 0 |  |
| CX.PC.OPENCONDITIONS | # of Open PC Conditions | STRING | 2 | [CX.PC.TOTALCOUNT] - [CX.PC.TOTALCOUNT.TRIGGER] |
