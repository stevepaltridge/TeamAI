# Field Data Entry Rules (126)

> **Source**: Bayshore reference data (imported into BE11146040) — BRA extraction 2026-02-21

Data entry rules validate/require field values during loan processing.

- **Active**: 126
- **Inactive**: 0

### 1. General Field Rule
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REQUESTLOCK, Type: ?, Value: (empty)
- Required Fields (23):
  - BUTTON_REQUESTLOCK requires 2089
  - BUTTON_REQUESTLOCK requires 2090
  - BUTTON_REQUESTLOCK requires 2092
  - BUTTON_REQUESTLOCK requires 2853
  - BUTTON_REQUESTLOCK requires 2866
  - BUTTON_REQUESTLOCK requires 2867
  - BUTTON_REQUESTLOCK requires 2871
  - BUTTON_REQUESTLOCK requires 2872
  - BUTTON_REQUESTLOCK requires 2873
  - BUTTON_REQUESTLOCK requires 2947
  - BUTTON_REQUESTLOCK requires 2950
  - BUTTON_REQUESTLOCK requires 2951
  - BUTTON_REQUESTLOCK requires 2952
  - BUTTON_REQUESTLOCK requires 2958
  - BUTTON_REQUESTLOCK requires 2959
  - BUTTON_REQUESTLOCK requires 2961
  - BUTTON_REQUESTLOCK requires 2963
  - BUTTON_REQUESTLOCK requires 3043
  - BUTTON_REQUESTLOCK requires 353
  - BUTTON_REQUESTLOCK requires 740
  - ... +3 more

### 2. File Must be Locked
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_PLANCODE, Type: ?, Value: (empty)
- Required Fields (6):
  - BUTTON_PLANCODE requires 2400
  - BUTTON_PLANCODE requires 432
  - BUTTON_PLANCODE requires 748
  - BUTTON_PLANCODE requires 761
  - BUTTON_PLANCODE requires 762
  - BUTTON_PLANCODE requires L770

### 3. Case Number Validation
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.CASENUMBERLENGTH, Type: 3, Value: Select Case [1172]
	Case "FHA"
		If [cx.casenumberlength]<>15 then
			Fail ("

### 4. MERS/MIN Validation
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 1051, Type: 3, Value: If Value.Length<>18
     Fail("MERS/MIN # must be 18 characters long")
End if

### 5. Order Docs Button Rules
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (8):
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24

### 6. Order Docs Button Rules - Retail only
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (10):
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires 1894
  - BUTTON_REGZ-TILORDER DOCS requires 541
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24

### 7. Retail. Wholesale and Brokered Loans
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires 1785

### 8. -BUTTON: No Lock Button without Required Fields
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REQUESTLOCK, Type: ?, Value: (empty)
- Required Fields (24):
  - BUTTON_REQUESTLOCK requires 1041
  - BUTTON_REQUESTLOCK requires 1109
  - BUTTON_REQUESTLOCK requires 1172
  - BUTTON_REQUESTLOCK requires 1401
  - BUTTON_REQUESTLOCK requires 1414
  - BUTTON_REQUESTLOCK requires 1450
  - BUTTON_REQUESTLOCK requires 1811
  - BUTTON_REQUESTLOCK requires 19
  - BUTTON_REQUESTLOCK requires 2089
  - BUTTON_REQUESTLOCK requires 2090
  - BUTTON_REQUESTLOCK requires 2092
  - BUTTON_REQUESTLOCK requires 2216
  - BUTTON_REQUESTLOCK requires 2293
  - BUTTON_REQUESTLOCK requires 3142
  - BUTTON_REQUESTLOCK requires 353
  - BUTTON_REQUESTLOCK requires 4
  - BUTTON_REQUESTLOCK requires 420
  - BUTTON_REQUESTLOCK requires 67
  - BUTTON_REQUESTLOCK requires 740
  - BUTTON_REQUESTLOCK requires 742
  - ... +4 more

### 9. -FAIL:Can't save file without NMLS number in field 3238 (7/22/11
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 3238, Type: 3, Value: If IsEmpty(Value) Then
Fail("Before you can save this loan, you must enter your

### 10. -BUTTON: Require GFE App Date Prior to Lock Request (1/23/12
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REQUESTLOCK, Type: ?, Value: (empty)
- Required Fields (11):
  - BUTTON_REQUESTLOCK requires 11
  - BUTTON_REQUESTLOCK requires 1109
  - BUTTON_REQUESTLOCK requires 12
  - BUTTON_REQUESTLOCK requires 14
  - BUTTON_REQUESTLOCK requires 15
  - BUTTON_REQUESTLOCK requires 1821
  - BUTTON_REQUESTLOCK requires 4000
  - BUTTON_REQUESTLOCK requires 4002
  - BUTTON_REQUESTLOCK requires 65
  - BUTTON_REQUESTLOCK requires 736
  - BUTTON_REQUESTLOCK requires VASUMM.X23

### 11. -FAIL: Can't save as Refinance without a valid property address
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 3142, Type: 3, Value: If [@3142] > "12/16/2013" and instr(ucase([19]),"REFINANCE") > 0 and (instr(ucas

### 12. -FAIL: Can't save Duplicated Loans without a Template applied
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 2860, Type: 3, Value: If IsEmpty(Value) Then
Fail("Before you can save this loan, you must apply a st

### 13. -FAIL: Require Est Closing Date (763) Before Saving
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 763, Type: 3, Value: IF IsEmpty(value) THEN
Fail("You must enter an Estimated Closing Date before yo

### 14. -FAIL:Can't save with PASSED Est Close Date (3/20/15
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 763, Type: 3, Value: If (VALUE) < [CX.DATE.TODAY] and IsEmpty([MS.FUN]) and IsEmpty([749]) then
Fail

### 15. eDisclosure Request Button - Not on Sunday
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CX.DATE.TODAY.IS.TUESDAY

### 16. Appraisal Review Type
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 2358, Type: 1, Value: Desk Drive By Field Full

### 17. !FAIL: Anne Moody - Fail when 682 is not the first of the month
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 682, Type: 3, Value: If [3142] > "01/31/2018"
	If Not IsEmpty ( VALUE ) Then
    		If Not ( Day ( V

### 18. zAnne Fail
- Status: Active
- Role ID: -1
- Data Entry Records (2):
  - Field: CX.LO.CA.LICENSE, Type: 3, Value: If (VALUE).contains("2-") and [1264].contains("Flagstar")  then 
FAIL("Sorry no
  - Field: 1264, Type: 3, Value: If (VALUE).contains("Flagstar") and [CX.LO.CA.LICENSE].contains("2-")  then 
FA

### 19. *PSR_PreSubmission Request: HOA Cert
- Status: Active
- Role ID: -1
- Data Entry Records (2):
  - Field: CX.PS.DATE.HOA.CERT, Type: ?, Value: (empty)
  - Field: CX.PS.ORDER.HOA.CERT, Type: ?, Value: (empty)
- Required Fields (7):
  - CX.PS.DATE.HOA.CERT requires CX.PS.ORDER.HOA.TYPE
  - CX.PS.ORDER.HOA.CERT requires 11
  - CX.PS.ORDER.HOA.CERT requires 12
  - CX.PS.ORDER.HOA.CERT requires 14
  - CX.PS.ORDER.HOA.CERT requires 15
  - CX.PS.ORDER.HOA.CERT requires CX.HOA.COMP.NAME
  - CX.PS.ORDER.HOA.CERT requires CX.HOA.CONTACT.PHONE

### 20. *PSR_PreSubmission Requests
- Status: Active
- Role ID: -1
- Data Entry Records (6):
  - Field: CX.PS.CMPLT.FHA.CASE.NMBR, Type: ?, Value: (empty)
  - Field: CX.PS.CMPLT.TITLE.ESCROW, Type: ?, Value: (empty)
  - Field: CX.PS.CMPLT.VOE, Type: ?, Value: (empty)
  - Field: CX.PS.CMPLT.CERT.ELIG, Type: ?, Value: (empty)
  - Field: CX.PS.CMPLT.VOD, Type: ?, Value: (empty)
  - Field: CX.PS.CMPLT.HOA.CERT, Type: ?, Value: (empty)
- Required Fields (7):
  - CX.PS.CMPLT.FHA.CASE.NMBR requires CX.PS.DATE.FHA.CASE.NMBR
  - CX.PS.CMPLT.TITLE.ESCROW requires CX.PS.DATE.TITLE.ESCROW
  - CX.PS.CMPLT.VOE requires CX.PS.DATE.VOE
  - CX.PS.CMPLT.CERT.ELIG requires CX.PS.DATE.CERT.ELIG
  - CX.PS.CMPLT.VOD requires CX.PS.DATE.VOD
  - CX.PS.CMPLT.HOA.CERT requires CX.PS.DATE.HOA.CERT
  - CX.PS.CMPLT.HOA.CERT requires CX.PS.ORDER.HOA.CERT.CLM

### 21. MSGBOX - Leave file comments before exiting
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: GUID, Type: 3, Value: If [MS.START] <> "" then
   MsgBox("Please add file comments before exiting the

### 22. *FAIL:  Aprraisal POC Amount Cannot Exceed Appraisal Value
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: NEWHUD2.X1101, Type: 3, Value: If (VALUE) > [641] then
Fail(vbcr + vbcr + "You cannot save your changes." + vb

### 23. SP-Auto Trigger GetLateFee Button
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_GETLATEFEE, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_GETLATEFEE requires 4001

### 24. *FAIL: Earliest Closing Date
- Status: Active
- Role ID: -1
- Data Entry Records (2):
  - Field: 748, Type: 3, Value: Dim D As DateTime = [@748]
If  D = DateTime.MinValue Then
    D = "01/01/1900"
  - Field: CX.VA.ECD, Type: 3, Value: Dim D As DateTime = [@748]
If  D = DateTime.MinValue Then
    D = "01/01/1900"

### 25. Earliest Close Date
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 748, Type: 3, Value: If [@748] < [@3147] Then
        Fail("Your Close Date is before the Earliest A

### 26. Manner in Which Title will be Held
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 33, Type: 2, Value: Sole Ownership Life Estate Tenancy in Common Joint Tenancy with Right of Survivo

### 27. Block Save Rule
- Status: Active
- Role ID: -1
- Data Entry Records (1):
  - Field: 1401, Type: 3, Value: If [1401].contains("DU") Then 
Fail("This Broker cannot originate Fannie Mae lo

### 28. Max LTV Conventional - Primary 1 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 97.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "Purchase" or [19] = "NoCash-Out Refinance") and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 29. Max LTV Conventional - Primary 2 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "Purchase" or [19] = "NoCash-Out Refinance") and [#16] = 2 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 30. Max LTV Conventional Primary 3 - 4 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase") and ([#16] = 3 or [#16] = 4) and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 31. Max LTV Conventional - Primary 1 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [19] = "Cash-Out Refinance" and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 32. Max LTV Conventional Primary 2 - 4 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [19] = "Cash-Out Refinance" and [#16] >= 2 and [#16] <= 4 and  ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 33. Max LTV Conventional Second Home Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90.00
- Advanced Code:
```
[1811] = "SecondHome" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase") and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 34. Max LTV Conventional Second Home Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "SecondHome" and [19] = "Cash-Out Refinance" and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 35. Max LTV Conventional Investment 1 Unit Purchase
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[1811] = "Investor" and [19] = "Purchase" and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 36. Max LTV Conventional Investment 2 - 4 Unit Purchase/NCO
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and ([19] = "NoCash-Out Refinance" or [19] = "Purchase") and [#16] >= 2 and [#16] <= 4 and  ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 37. Max LTV Conventional Investment - 1 Unit No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and [19] = "NoCash-Out Refinance" and [#16] = 1 and ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 38. Max LTV Conventional Investment 1 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and [19] = "Cash-Out Refinance" and [#16] = 1 and  ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 39. Max LTV Conventional Investment 2-4 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 70.00
- Advanced Code:
```
[1811] = "Investor" and [#16] >= 2 and [#16] <= 4 and [19] = "Cash-Out Refinance" and  ([1401] = "C20" or [1401] = "C15" or [1401] = "C30" or [1401] = "C25" or [1401] = "C10" or [1401] = "C15EMP" or [1401] = "C30EMP")
```

### 40. Max LTV Conv ARM Primary 1 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 97.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "Purchase" or [19] = "NoCash-Out Refinance") and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 41. Max LTV Conv ARM Primary 2 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 80.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "Purchase" or [19] = "NoCash-Out Refinance") and [#16] = 2 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "CC7/1L" or [1401] = "C10/1L")
```

### 42. Max LTV Conv ARM Primary 3-4 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase") and ([#16] = 3 or [#16] = 4) and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 43. Max LTV Conv ARM Primary 1 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [19] = "Cash-Out Refinance" and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 44. Max LTV Conv ARM Primary 2-4 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [19] = "Cash-Out Refinance" and [#16] >= 2 and [#16] <= 4 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 45. Max LTV Conv ARM Second Home Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90.00
- Advanced Code:
```
[1811] = "SecondHome" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase") and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 46. Max LTV Conv ARM Second Home Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "SecondHome" and [19] = "Cash-Out Refinance" and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 47. Max LTV Conv ARM Investment 1 Unit Purchase
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85
- Advanced Code:
```
[1811] = "Investor" and [19] = "Purchase" and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 48. Max LTV Conv ARM Investment 2-4 Unit Purchase/No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and ([19] = "NoCash-Out Refinance" or [19] = "Purchase") and [#16] >= 2 and [#16] <= 4 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 49. Max LTV Conv ARM Investment 1 Unit No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and [19] = "NoCash-Out Refinance" and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 50. Max LTV Conv ARM Investment 1 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and [19] = "Cash-Out Refinance" and [#16] = 1 and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 51. Max LTV Conv ARM Investment 2-4 Unit Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 70.00
- Advanced Code:
```
[1811] = "Investor" and [#16] >= 2 and [#16] <= 4 and [19] = "Cash-Out Refinance" and ([1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C7/1L" or [1401] = "C10/1L")
```

### 52. Max LTV Conf HomePath Primary 1 Unit
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 97.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [#16] = 1 and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 53. Max LTV Conf HomePath Primary 2 Unit
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 80
- Advanced Code:
```
[1811] = "PrimaryResidence" and [#16] = 2 and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 54. Max LTV Conf HomePath Primary 3-4 Units
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([#16] = 3 or [#16] = 4) and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 55. Max LTV Conf HomePath Second Home
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90.00
- Advanced Code:
```
[1811] = "SecondHome" and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 56. Max LTV Conf HomePath Investment 1 Unit
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90
- Advanced Code:
```
[1811] = "Investor" and [#16] = 1 and ([1401] = "CHP15" or [1401] = "CHP30") and [@745] >= #7/1/2011#
```

### 57. Max LTV Conf HomePath Investment 2 Units
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and [#16] = 2 and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 58. Max LTV Conf HomePath Investment 3-4 Units
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "Investor" and ([#16] = 3 or [#16] = 4) and ([1401] = "CHP15" or [1401] = "CHP30")
```

### 59. Max LTV High Balance HomePath Primary 1 Unit
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [#16] = 1 and ([1401] = "CJHP15" or [1401] = "CJHP30")
```

### 60. Max LTV High Balance HomePath Primary 2 Unit
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 75.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and [#16] >= 2 and [#16] <= 4 and ([1401] = "CJHP15" or [1401] = "CJHP30")
```

### 61. Max LTV High Balance HomePath Second Home
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 65.00
- Advanced Code:
```
[1811] = "SecondHome" and ([1401] = "CJ15HP" or [1401] = "CJHP30")
```

### 62. Max LTV High Balance HomePath Investment
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 65.00
- Advanced Code:
```
[1811] = "Investor" and [#16] >= 1 and [#16] <= 4 and ([1401] = "CJHP15" or [1401] = "CJHP30")
```

### 63. Max LTV Conf Fixed & ARM High Balance Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 60.00
- Advanced Code:
```
[19] = "Cash-Out Refinance" and ([1401] = "CJ15" or [1401] = "CJ5/1L" or [1401] = "CJ7/1L" or [1401] = "CJ30")
```

### 64. Max LTV Primary FL Condos Conf Fixed & ARMS
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 80.00
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase" OR [19] = "Cash-Out Refinance") and ([1041] = "Condominium" OR [1041] = "HighRiseCondominium") and [14] = "FL" and ([1401] = "C10" or [1401] = "C15" or [1401] = "C20" or [1401] = "C25" or [1401] = "C30" or [1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C10/1L" or [1401] = "C7/1L")
```

### 65. Max LTV Second Home FL Condos Conf Fixed & ARMS
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 80.00
- Advanced Code:
```
[1811] = "SecondHome" and ([19] = "NoCash-Out Refinance" OR [19] = "Purchase" OR [19] = "Cash-Out Refinance") and ([1041] = "Condominium" OR [1041] = "HighRiseCondominium") and [14] = "FL" and ([1401] = "C10" or [1401] = "C15" or [1401] = "C20" or [1401] = "C25" or [1401] = "C30" or [1401] = "C3/1L" or [1401] = "C5/1L" or [1401] = "C10/1L" or [1401] = "C7/1L")
```

### 66. Max LTV Primary FL Condos DU Refi Plus
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 95
- Advanced Code:
```
[1811] = "PrimaryResidence" and ([1041] = "Condominium" OR [1041] = "HighRiseCondominium") and [14] = "FL" and ([1401] = "C30IW" or [1401] = "C15IW")
```

### 67. Max LTV Second Home FL Condos DU Refi Plus
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 80.00
- Advanced Code:
```
[1811] = "SecondHome" and ([1041] = "Condominium" OR [1041] = "HighRiseCondominium") and [14] = "FL" and ([1401] = "C30IW" or [1401] = "C15IW")
```

### 68. Maximum LTV FHA Fixed Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[19] = "Cash-Out Refinance" and ([1401] = "F15" or [1401] = "F20" or [1401] = "F25" or [1401] = "F30" or [1401] = "F30G1" or [1401] = "F30G2" or [1401] = "FJ30" or [1401] = "F30REFER" or [1401] = "F15 REFER" or [1401] = "F30EMP")
```

### 69. Maximum LTV FHA ARM Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 85.00
- Advanced Code:
```
[19] = "Cash-Out Refinance" and ([1401] = "F3/1T" or [1401] = "F5/1T")
```

### 70. Maximum LTV FHA Fixed No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 97.75
- Advanced Code:
```
[19] = "NoCash-Out Refinance" and ([1401] = "F15" or [1401] = "F20" or [1401] = "F25" or [1401] = "F30" or [1401] = "F30G1" or [1401] = "F30G2" or [1401] = "FJ30" or [1401] = "F30REFER" or [1401] = "F15 REFER" or [1401] = "F30EMP")
```

### 71. Maximum LTV FHA ARM No Cash Out
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 97.75
- Advanced Code:
```
[19] = "NoCash-Out Refinance" and ([1401] = "F3/1T" or [1401] = "F5/1T")
```

### 72. DCA2 Rate
- Status: Active
- Condition: `10`
- Role ID: -1
- Data Entry Records (1):
  - Field: 3, Type: 1, Value: 0.000
- Advanced Code:
```
DCA2
```

### 73. Is a Streamline
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REQUESTLOCK, Type: ?, Value: (empty)
- Required Fields (19):
  - BUTTON_REQUESTLOCK requires 2089
  - BUTTON_REQUESTLOCK requires 2090
  - BUTTON_REQUESTLOCK requires 2092
  - BUTTON_REQUESTLOCK requires 2853
  - BUTTON_REQUESTLOCK requires 2866
  - BUTTON_REQUESTLOCK requires 2867
  - BUTTON_REQUESTLOCK requires 2871
  - BUTTON_REQUESTLOCK requires 2872
  - BUTTON_REQUESTLOCK requires 2873
  - BUTTON_REQUESTLOCK requires 2947
  - BUTTON_REQUESTLOCK requires 2950
  - BUTTON_REQUESTLOCK requires 2951
  - BUTTON_REQUESTLOCK requires 2952
  - BUTTON_REQUESTLOCK requires 2958
  - BUTTON_REQUESTLOCK requires 2959
  - BUTTON_REQUESTLOCK requires 2961
  - BUTTON_REQUESTLOCK requires 3043
  - BUTTON_REQUESTLOCK requires 353
  - BUTTON_REQUESTLOCK requires 976
- Advanced Code:
```
([MORNET.X40] = "StreamlineWithAppraisal" OR [MORNET.X40] = "StreamlineWithoutAppraisal")
```

### 74. When Not Streamline
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REQUESTLOCK, Type: ?, Value: (empty)
- Required Fields (21):
  - BUTTON_REQUESTLOCK requires 2089
  - BUTTON_REQUESTLOCK requires 2090
  - BUTTON_REQUESTLOCK requires 2092
  - BUTTON_REQUESTLOCK requires 2853
  - BUTTON_REQUESTLOCK requires 2866
  - BUTTON_REQUESTLOCK requires 2867
  - BUTTON_REQUESTLOCK requires 2871
  - BUTTON_REQUESTLOCK requires 2872
  - BUTTON_REQUESTLOCK requires 2873
  - BUTTON_REQUESTLOCK requires 2947
  - BUTTON_REQUESTLOCK requires 2950
  - BUTTON_REQUESTLOCK requires 2951
  - BUTTON_REQUESTLOCK requires 2952
  - BUTTON_REQUESTLOCK requires 2958
  - BUTTON_REQUESTLOCK requires 2959
  - BUTTON_REQUESTLOCK requires 2961
  - BUTTON_REQUESTLOCK requires 3043
  - BUTTON_REQUESTLOCK requires 353
  - BUTTON_REQUESTLOCK requires 740
  - BUTTON_REQUESTLOCK requires 742
  - ... +1 more
- Advanced Code:
```
NOT ([MORNET.X40] = "StreamlineWithAppraisal" OR [MORNET.X40] = "StreamlineWithoutAppraisal")
```

### 75. FHA Minimum Credit Score
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.MIDFICO, Type: ?, Value: 640 900
- Advanced Code:
```
[1401] = "F15" or [1401] = "F15BB3" or [1401] = "F15REO" or [1401] = "F20" and [1401] = "F25" or [1401] = "F30" or [1401] = "F30BB3" or [1401] = "F30G1" or [1401] = "F30G2" or [1401] = "F30LS" or [1401] = "F30REO" or [1401] = "F5/1T" or [1401] = "F3/1T" or [1401] = "FJ30" or [1401] = "F30EMP"
```

### 76. ARM Requirements
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_PRINT, Type: ?, Value: (empty)
- Required Fields (11):
  - BUTTON_PRINT requires 1699
  - BUTTON_PRINT requires 1700
  - BUTTON_PRINT requires 1827
  - BUTTON_PRINT requires 247
  - BUTTON_PRINT requires 2625
  - BUTTON_PRINT requires 688
  - BUTTON_PRINT requires 689
  - BUTTON_PRINT requires 694
  - BUTTON_PRINT requires 695
  - BUTTON_PRINT requires 696
  - BUTTON_PRINT requires 697
- Advanced Code:
```
([608] = "GraduatedPaymentMortgage" OR [608] = "AdjustableRate")
```

### 77. Max LTV Conf HomePath Investment 1 Unit Prior to 7/1/11
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 353, Type: ?, Value: 90.00
- Advanced Code:
```
[1811] = "Investor" and [#16] = 1 and ([1401] = "CHP15" or [1401] = "CHP30") and [@745] < #7/1/2011#
```

### 78. TDHCA772 Rate
- Status: Active
- Condition: `10`
- Role ID: -1
- Data Entry Records (1):
  - Field: 3, Type: 1, Value: 0.000
- Advanced Code:
```
TDHCA772
```

### 79. Min Credit Score for FHA Non-Credit Qualifying Streamline
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: VASUMM.X23, Type: ?, Value: 620 900
- Advanced Code:
```
[1401] = "F30STRF" and [364] <> "909050185"
```

### 80. Minimum Credit Score for FHA Manual UW & FHA with DPA
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: VASUMM.X23, Type: ?, Value: 680 900
- Advanced Code:
```
[1401] = "F30BB3" or [1401] = "F30LS" and [@2149] >= #12/19/2011#
```

### 81. FHA Case Number assigned
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 1040, Type: ?, Value: (empty)
- Required Fields (1):
  - 1040 requires 3042
- Advanced Code:
```
IsEmpty([MS.FUN]) and Not IsEmpty([MS.PROC]) and [1172] = "FHA"
```

### 82. Everbank Underwriting
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: LOANTEAMMEMBER.NAME.UNDERWRITER, Type: 1, Value: Everbank Underwriting
- Advanced Code:
```
[1401] = "FNRFP15F" 
```

### 83. FHA Streamline - Loan Program Enforcement
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (2):
  - Field: 1401, Type: 1, Value: F15STRF F25STRF F20STRF F30STRF FJ30STRF FHA 30 Year Fixed Streamlined Refinance
  - Field: MORNET.X40, Type: ?, Value: (empty)
- Required Fields (1):
  - MORNET.X40 requires 3432
- Advanced Code:
```
IsEmpty([MS.FUN]) AND [1172]="FHA" and Not IsEmpty([MS.PROC]) AND ([MORNET.X40] = "StreamlineWithAppraisal" OR [MORNET.X40] = "StreamlineWithoutAppraisal")
```

### 84. Min Credit Score for FHA Non-Credit Qualifying Streamline:jumbo
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: VASUMM.X23, Type: ?, Value: 680 900
- Advanced Code:
```
 [1401] = "FJ30STRF" and [@2149] >= #12/19/2011#
```

### 85. HMDA Required fields at GFE app date
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 3142, Type: ?, Value: (empty)
- Required Fields (10):
  - 3142 requires 1109
  - 3142 requires 1172
  - 3142 requires 1523
  - 3142 requires 3335
  - 3142 requires 384
  - 3142 requires 471
  - 3142 requires 479
  - 3142 requires 799
  - 3142 requires HMDA.X11
  - 3142 requires HMDA.X14
- Advanced Code:
```
[420] = "First Lien" and [1401] <> "TDHCA772" and [1401] <> "TDHCA792"
```

### 86. Conventional Loans >80% LTV
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (2):
  - Field: L248, Type: 1, Value: Genworth RMIC MGIC PMI Mortgage Proctor United Guaranty HUD ESSENT GUARANTY
  - Field: 353, Type: ?, Value: (empty)
- Required Fields (1):
  - 353 requires 232
- Advanced Code:
```
[1172] = "Conventional" and [1401] <> "CHP15" and [1401] <> "CHP30" and [1401] <> "CJ15HP" and [1401] <> "CJ30HP" and [1401] <> "C15IW" and [1401] <> "C30IW" and [353] > 80.00 and NOT IsNumeric(SumAny([1199],[1201],[1826]))
```

### 87. HMDA Required fields at GFE app date with Coborrower
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 3142, Type: ?, Value: (empty)
- Required Fields (11):
  - 3142 requires 1109
  - 3142 requires 1172
  - 3142 requires 1523
  - 3142 requires 1531
  - 3142 requires 3335
  - 3142 requires 384
  - 3142 requires 471
  - 3142 requires 478
  - 3142 requires 799
  - 3142 requires HMDA.X11
  - 3142 requires HMDA.X14
- Advanced Code:
```
[420] = "First Lien" and [1401] <> "TDHCA772" and [1401] <> "TDHCA792" and [97] <> ""
```

### 88. Title I Loan Programs
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 2, Type: ?, Value: 0 69678
- Advanced Code:
```
[1401].Contains("F10T1") or [1401].Contains("F20T1") or [1401].Contains("F15T1") or [1401].Contains("F10TI") or [1401].Contains("F15TI") or [1401].Contains("F20TI")
```

### 89. Conventional OTC
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (2):
  - Field: VASUMM.X23, Type: ?, Value: 700 1000
  - Field: 353, Type: ?, Value: 70
- Advanced Code:
```
[1172] = "Conventional" and [1401].Contains("OTC")
```

### 90. App date on or after 8/8/2014
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (10):
  - BUTTON_EDISCLOSURES requires HC0102
  - BUTTON_EDISCLOSURES requires HC0202
  - BUTTON_EDISCLOSURES requires HC0302
  - BUTTON_EDISCLOSURES requires HC0402
  - BUTTON_EDISCLOSURES requires HC0502
  - BUTTON_EDISCLOSURES requires HC0602
  - BUTTON_EDISCLOSURES requires HC0702
  - BUTTON_EDISCLOSURES requires HC0802
  - BUTTON_EDISCLOSURES requires HC0902
  - BUTTON_EDISCLOSURES requires HC1002
- Advanced Code:
```
[@745] >= #8/8/2014#
```

### 91. App date on or after 9/2/2014
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (2):
  - BUTTON_EDISCLOSURES requires DISCLOSURE.X957
  - BUTTON_EDISCLOSURES requires DISCLOSURE.X959
- Advanced Code:
```
[@745] >= #9/2/2014# and [14]="TX"
```

### 92. Florida Purchase Loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires NEWHUD.X76
- Advanced Code:
```
[14] = "FL" and [19] = "Purchase"
```

### 93. Refi Loans in Prospects folder
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 65, Type: ?, Value: (empty)
- Required Fields (4):
  - 65 requires 11
  - 65 requires 12
  - 65 requires 14
  - 65 requires 15
- Advanced Code:
```
([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance") and [CX.MTGTECHFOLDERS] = "Prospects"
```

### 94. Order Docs Button Rules - Man Home
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (14):
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires 2579
  - BUTTON_REGZ-TILORDER DOCS requires 2583
  - BUTTON_REGZ-TILORDER DOCS requires 2585
  - BUTTON_REGZ-TILORDER DOCS requires 2587
  - BUTTON_REGZ-TILORDER DOCS requires 2588
  - BUTTON_REGZ-TILORDER DOCS requires 2589
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24
- Advanced Code:
```
([1041] = "ManufacturedHousing" OR [1041] = "MHSelect")
```

### 95. VA IRRRL
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: VASUMM.X27, Type: ?, Value: 36
- Advanced Code:
```
[958] = "IRRRL" and Not IsEmpty([Log.MS.Date.submittal])
```

### 96. Order Docs Button Rules - Conv Loans with MI
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (18):
  - BUTTON_REGZ-TILORDER DOCS requires 1040
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires 2579
  - BUTTON_REGZ-TILORDER DOCS requires 2583
  - BUTTON_REGZ-TILORDER DOCS requires 2585
  - BUTTON_REGZ-TILORDER DOCS requires 2587
  - BUTTON_REGZ-TILORDER DOCS requires 2588
  - BUTTON_REGZ-TILORDER DOCS requires 2589
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L248
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24
  - BUTTON_REGZ-TILORDER DOCS requires VEND.X167
  - BUTTON_REGZ-TILORDER DOCS requires VEND.X177
- Advanced Code:
```
[3265] = "Y" and [1172] = "Conventional"
```

### 97. Loan is in Scenario, Test or Training folder
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (2):
  - Field: 4000, Type: 1, Value: Alice Penny Dad Mom Ross Wanna Needa Elizabeth Ken Homer Mort Ann Sonny Loco Pit
  - Field: 4002, Type: 1, Value: Test Knowscore Tintin Rock Rock Jr. Motion Graves Gage Loanseeker Customer Spend
- Advanced Code:
```
([CX.MTGTECHFOLDERS] = "Scenario" or [CX.MTGTECHFOLDERS] = "test folder" or [CX.MTGTECHFOLDERS] = "Training") and [@Log.MS.Date.Started] >= #4/29/2015#
```

### 98. Required Fields for Edisclosures - TRID loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (23):
  - BUTTON_EDISCLOSURES requires NEWHUD2.X3043
  - BUTTON_EDISCLOSURES requires NEWHUD2.X3076
  - BUTTON_EDISCLOSURES requires NEWHUD2.X3109
  - BUTTON_EDISCLOSURES requires NEWHUD2.X73
  - BUTTON_EDISCLOSURES requires NEWHUD2.X76
  - BUTTON_EDISCLOSURES requires NEWHUD2.X79
  - BUTTON_EDISCLOSURES requires RESPA.X28
  - BUTTON_EDISCLOSURES requires SP0101
  - BUTTON_EDISCLOSURES requires SP0102
  - BUTTON_EDISCLOSURES requires SP0103
  - BUTTON_EDISCLOSURES requires SP0104
  - BUTTON_EDISCLOSURES requires SP0105
  - BUTTON_EDISCLOSURES requires SP0106
  - BUTTON_EDISCLOSURES requires SP0107
  - BUTTON_EDISCLOSURES requires SP0117
  - BUTTON_EDISCLOSURES requires SP0119
  - BUTTON_EDISCLOSURES requires SP0201
  - BUTTON_EDISCLOSURES requires SP0202
  - BUTTON_EDISCLOSURES requires SP0203
  - BUTTON_EDISCLOSURES requires SP0204
  - ... +3 more
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 99. Order Docs Button Rules - Retail PUD
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (11):
  - BUTTON_REGZ-TILORDER DOCS requires 1298
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires 1894
  - BUTTON_REGZ-TILORDER DOCS requires 541
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24
- Advanced Code:
```
[1041] = "PUD"
```

### 100. Copy of Order Docs Button Rules - Retail Legal Desc = NO
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (11):
  - BUTTON_REGZ-TILORDER DOCS requires 1416
  - BUTTON_REGZ-TILORDER DOCS requires 1417
  - BUTTON_REGZ-TILORDER DOCS requires 1418
  - BUTTON_REGZ-TILORDER DOCS requires 1419
  - BUTTON_REGZ-TILORDER DOCS requires 1846
  - BUTTON_REGZ-TILORDER DOCS requires 1894
  - BUTTON_REGZ-TILORDER DOCS requires 541
  - BUTTON_REGZ-TILORDER DOCS requires CUST78FV
  - BUTTON_REGZ-TILORDER DOCS requires L362
  - BUTTON_REGZ-TILORDER DOCS requires QM.X23
  - BUTTON_REGZ-TILORDER DOCS requires QM.X24
- Advanced Code:
```
[1041] = "PUD" and [1884] <> "Y"
```

### 101. TRID - Aggregate required before eDisclosures (JR 20150916)
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CX.TRID.AGGREGATE
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 102. Required Fields for Edisclosures after 9/21/2015
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (14):
  - BUTTON_EDISCLOSURES requires 1057
  - BUTTON_EDISCLOSURES requires 1523
  - BUTTON_EDISCLOSURES requires 169
  - BUTTON_EDISCLOSURES requires 170
  - BUTTON_EDISCLOSURES requires 171
  - BUTTON_EDISCLOSURES requires 172
  - BUTTON_EDISCLOSURES requires 173
  - BUTTON_EDISCLOSURES requires 174
  - BUTTON_EDISCLOSURES requires 1785
  - BUTTON_EDISCLOSURES requires 265
  - BUTTON_EDISCLOSURES requires 463
  - BUTTON_EDISCLOSURES requires 466
  - BUTTON_EDISCLOSURES requires 471
  - BUTTON_EDISCLOSURES requires 965
- Advanced Code:
```
[@MS.START] >= #9/21/2015#
```

### 103. Activate rule to prevent E-disclosure on TRID loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CUST42FV
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 104. TRID - Old Closing Cost Name Check
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CX.OLDCLOSINGCOSTNAME
- Advanced Code:
```
[1785].Contains("NEW") and [3969] = "RESPA-TILA 2015 LE and CD"

```

### 105. VA loans with value for 1045
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires NEWHUD2.X2286
- Advanced Code:
```
[#1045] > 0 and [1172] = "VA" and [3969] = "RESPA-TILA 2015 LE and CD"
```

### 106. Florida Refi Loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires NEWHUD.X76
- Advanced Code:
```
[14] = "FL" and ([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
```

### 107. -FAIL: Test for Startup Template on WebApps
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: 2024, Type: ?, Value: (empty)
- Required Fields (1):
  - 2024 requires 2860
- Advanced Code:
```
[2024] = "WebCenter"
```

### 108. Order Docs Button - FHA MIP Checks
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_REGZ-TILORDER DOCS requires CX.PRESS.GET.MI.BUTTON
- Advanced Code:
```
[1172] = "FHA" and (([#1107]<>[#CX.FHA.UFMIP.CHECK]) or ([#1199]<>[#CX.FHA.MIP.CHECK]))
```

### 109. Order Docs Button Rules - Flood Insurance
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (2):
  - BUTTON_REGZ-TILORDER DOCS requires 1388
  - BUTTON_REGZ-TILORDER DOCS requires 235
- Advanced Code:
```
[#NEWHUD2.X4400] > 0 or [#NEWHUD2.X4399] > 0
```

### 110. Order Docs Button Rules - Flood Insurance - Julie Backup
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (2):
  - BUTTON_REGZ-TILORDER DOCS requires 1388
  - BUTTON_REGZ-TILORDER DOCS requires 235
- Advanced Code:
```
[2366] = "Y"
```

### 111. Order Docs Button Rules - UND Approval Epired
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_REGZ-TILORDER DOCS, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_REGZ-TILORDER DOCS requires CX.UND.APPROVAL.EXPIRED
- Advanced Code:
```
[@2302] < [@2553]
```

### 112. Edisclosures - FHA MIP Check
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CX.PRESS.GET.MI.BUTTON
- Advanced Code:
```
[#CX.FHA.MIP.CHECK]<>0 and [1172] = "FHA" and (([#1107]<>[#CX.FHA.UFMIP.CHECK]) or ([#1199]<>[#CX.FHA.MIP.CHECK]))
```

### 113. Edisclosures - Brokered Loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: BUTTON_EDISCLOSURES, Type: ?, Value: (empty)
- Required Fields (1):
  - BUTTON_EDISCLOSURES requires CX.BROKER.EXCEPTION.APPROVAL
- Advanced Code:
```
[@MS.START] >= #5/24/2016# and (IsEmpty([CUST02FV]) or [CUST05FV] <> "Y")
```

### 114. *PSR_Presubmission Request_Title and Escrow
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.PS.OPEN.TITLE.ESCROW, Type: ?, Value: (empty)
- Required Fields (18):
  - CX.PS.OPEN.TITLE.ESCROW requires 1174
  - CX.PS.OPEN.TITLE.ESCROW requires 1175
  - CX.PS.OPEN.TITLE.ESCROW requires 1243
  - CX.PS.OPEN.TITLE.ESCROW requires 3142
  - CX.PS.OPEN.TITLE.ESCROW requires 411
  - CX.PS.OPEN.TITLE.ESCROW requires 412
  - CX.PS.OPEN.TITLE.ESCROW requires 413
  - CX.PS.OPEN.TITLE.ESCROW requires 414
  - CX.PS.OPEN.TITLE.ESCROW requires 416
  - CX.PS.OPEN.TITLE.ESCROW requires 417
  - CX.PS.OPEN.TITLE.ESCROW requires 610
  - CX.PS.OPEN.TITLE.ESCROW requires 611
  - CX.PS.OPEN.TITLE.ESCROW requires 612
  - CX.PS.OPEN.TITLE.ESCROW requires 613
  - CX.PS.OPEN.TITLE.ESCROW requires 614
  - CX.PS.OPEN.TITLE.ESCROW requires 615
  - CX.PS.OPEN.TITLE.ESCROW requires 87
  - CX.PS.OPEN.TITLE.ESCROW requires 88
- Advanced Code:
```
([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
```

### 115. ADVERSE Borrower Ethnicity Face-To-Face
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (6):
  - CX.FX.ADVERSE requires 4144
  - CX.FX.ADVERSE requires 4145
  - CX.FX.ADVERSE requires 4146
  - CX.FX.ADVERSE requires 4147
  - CX.FX.ADVERSE requires 4210
  - CX.FX.ADVERSE requires 4211
- Advanced Code:
```
[4143] = "FaceToFace" AND [4144] <> "Y" AND [4145] <> "Y" AND [4146] <> "Y" AND [4147] <> "Y" AND [4211] <> "Y" AND [4210] <> "Y"
```

### 116. ADVERSE Borrower Ethnicity
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (8):
  - CX.FX.ADVERSE requires 4144
  - CX.FX.ADVERSE requires 4145
  - CX.FX.ADVERSE requires 4146
  - CX.FX.ADVERSE requires 4147
  - CX.FX.ADVERSE requires 4205
  - CX.FX.ADVERSE requires 4210
  - CX.FX.ADVERSE requires 4211
  - CX.FX.ADVERSE requires 4243
- Advanced Code:
```
[4143] <> "FaceToFace" AND [4144] <> "Y" AND [4145] <> "Y" AND [4146] <> "Y" AND [4147] <> "Y" AND [4211] <> "Y" AND [4243] <> "Y" AND [4205] <> "Y" AND [4210] <> "Y"
```

### 117. ADVERSE Borrower Face to Face
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (3):
  - CX.FX.ADVERSE requires 4121
  - CX.FX.ADVERSE requires 4122
  - CX.FX.ADVERSE requires 4123
- Advanced Code:
```
[4143] = "FaceToFace"
```

### 118. ADVERSE Borrower Race Face to Face
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (13):
  - CX.FX.ADVERSE requires 1526
  - CX.FX.ADVERSE requires 1527
  - CX.FX.ADVERSE requires 1528
  - CX.FX.ADVERSE requires 4122
  - CX.FX.ADVERSE requires 4149
  - CX.FX.ADVERSE requires 4150
  - CX.FX.ADVERSE requires 4152
  - CX.FX.ADVERSE requires 4153
  - CX.FX.ADVERSE requires 4154
  - CX.FX.ADVERSE requires 4155
  - CX.FX.ADVERSE requires 4156
  - CX.FX.ADVERSE requires 4157
  - CX.FX.ADVERSE requires 4158
- Advanced Code:
```
[4143] = "FaceToFace" AND [1524] <> "Y" AND [1525] <> "Y" AND [4148] <> "Y" AND [4151] <> "Y" AND [4152] <> "Y" AND [4149] <> "Y" AND [4150] <> "Y" AND [4153] <> "Y" AND [1526] <> "Y" AND [1527] <> "Y" AND [4155] <> "Y" AND [4157] <> "Y" AND [4158] <> "Y" AND [4156] <> "Y"AND [1528] <> "Y"
```

### 119. ADVERSE Borrower Race
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (14):
  - CX.FX.ADVERSE requires 1526
  - CX.FX.ADVERSE requires 1527
  - CX.FX.ADVERSE requires 1528
  - CX.FX.ADVERSE requires 4149
  - CX.FX.ADVERSE requires 4150
  - CX.FX.ADVERSE requires 4152
  - CX.FX.ADVERSE requires 4153
  - CX.FX.ADVERSE requires 4154
  - CX.FX.ADVERSE requires 4155
  - CX.FX.ADVERSE requires 4156
  - CX.FX.ADVERSE requires 4157
  - CX.FX.ADVERSE requires 4158
  - CX.FX.ADVERSE requires 4244
  - CX.FX.ADVERSE requires 4252
- Advanced Code:
```
[4143] <> "FaceToFace" AND [1524] <> "Y" AND [1525] <> "Y" AND [4148] <> "Y" AND [4151] <> "Y" AND [4152] <> "Y" AND [4149] <> "Y" AND [4150] <> "Y" AND [4153] <> "Y" AND [1526] <> "Y" AND [1527] <> "Y" AND [4155] <> "Y" AND [4157] <> "Y" AND [4158] <> "Y" AND [4156] <> "Y"AND [1528] <> "Y" AND [4252] <> "Y" AND [4244] <> "Y" 
```

### 120. ADVERSE General 2009
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (15):
  - CX.FX.ADVERSE requires 1109
  - CX.FX.ADVERSE requires 1172
  - CX.FX.ADVERSE requires 1401
  - CX.FX.ADVERSE requires 1402
  - CX.FX.ADVERSE requires 1416
  - CX.FX.ADVERSE requires 1417
  - CX.FX.ADVERSE requires 1418
  - CX.FX.ADVERSE requires 1419
  - CX.FX.ADVERSE requires 1811
  - CX.FX.ADVERSE requires 3
  - CX.FX.ADVERSE requires 353
  - CX.FX.ADVERSE requires 4
  - CX.FX.ADVERSE requires 4143
  - CX.FX.ADVERSE requires 742
  - CX.FX.ADVERSE requires CX.FX.DENIALREASON
- Advanced Code:
```
[1825] <> "2020"
```

### 121. ADVERSE General 2020
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (15):
  - CX.FX.ADVERSE requires 1109
  - CX.FX.ADVERSE requires 1172
  - CX.FX.ADVERSE requires 1401
  - CX.FX.ADVERSE requires 1402
  - CX.FX.ADVERSE requires 1417
  - CX.FX.ADVERSE requires 1418
  - CX.FX.ADVERSE requires 1419
  - CX.FX.ADVERSE requires 1811
  - CX.FX.ADVERSE requires 3
  - CX.FX.ADVERSE requires 353
  - CX.FX.ADVERSE requires 4
  - CX.FX.ADVERSE requires 4143
  - CX.FX.ADVERSE requires 742
  - CX.FX.ADVERSE requires CX.FX.DENIALREASON
  - CX.FX.ADVERSE requires URLA.X197
- Advanced Code:
```
[1825] = "2020"
```

### 122. ADVERSE General Co-Borrower 2009
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (6):
  - CX.FX.ADVERSE requires 1403
  - CX.FX.ADVERSE requires 1416
  - CX.FX.ADVERSE requires 1520
  - CX.FX.ADVERSE requires 1521
  - CX.FX.ADVERSE requires 1522
  - CX.FX.ADVERSE requires 4131
- Advanced Code:
```
[4004] <> "" AND [1825] <> "2020"
```

### 123. ADVERSE General Co-Borrower 2020
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (6):
  - CX.FX.ADVERSE requires 1403
  - CX.FX.ADVERSE requires 1520
  - CX.FX.ADVERSE requires 1521
  - CX.FX.ADVERSE requires 1522
  - CX.FX.ADVERSE requires 4131
  - CX.FX.ADVERSE requires URLA.X198
- Advanced Code:
```
[4004] <> "" AND [1825] = "2020"
```

### 124. ADVERSE HELOC
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (1):
  - CX.FX.ADVERSE requires 1888
- Advanced Code:
```
[1172] = "HELOC"
```

### 125. ADVERSE Member Number
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (1):
  - CX.FX.ADVERSE requires CX.FX.LOANNUM.MEMBER
- Advanced Code:
```
[CX.FX.LOANNUM.MEMBER.NO] <> "Y"
```

### 126. ADVERSE Refinance
- Status: Active
- Condition: `9`
- Role ID: -1
- Data Entry Records (1):
  - Field: CX.FX.ADVERSE, Type: ?, Value: (empty)
- Required Fields (1):
  - CX.FX.ADVERSE requires 299
- Advanced Code:
```
([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
```

