# Field Access Rules (58)

> **Source**: Bayshore reference data (imported into BE11146040) — BRA extraction 2026-02-21

Field access rules control which personas can view/edit specific fields.

- **Active**: 58
- **Inactive**: 0

> Access Rights: 0=Hidden, 1=ReadOnly, 2=ReadWrite

### 1. General Field Access
- Status: Active
- Role ID: -1
- Rights (66 entries across 11 personas):
  - Persona 1: 6 fields, access=2, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 7: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 8: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 11: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 12: 6 fields, access=1/2, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 13: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 15: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 18: 6 fields, access=1/2, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 19: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - Persona 22: 6 fields, access=1, e.g. 1051, 2012, 2013, 2305, 2400
  - ... +1 more personas

### 2. Rate is Locked
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (341 entries across 16 personas):
  - Persona 1: 24 fields, access=1/2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 7: 24 fields, access=1, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 8: 24 fields, access=1, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 11: 24 fields, access=1, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 12: 24 fields, access=1/2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 13: 24 fields, access=1/2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 15: 24 fields, access=1/2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 18: 24 fields, access=2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 19: 24 fields, access=1/2, e.g. 1041, 1109, 1172, 1177, 1335
  - Persona 22: 24 fields, access=1, e.g. 1041, 1109, 1172, 1177, 1335
  - ... +6 more personas
- Advanced Code:
```
Not IsEmpty([762])
```

### 3. 2010 GFE and Itemization Lockdown after Disclosure
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (2596 entries across 11 personas):
  - Persona 1: 236 fields, access=2, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 7: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 8: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 11: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 12: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 13: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 15: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 18: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 19: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - Persona 22: 236 fields, access=1, e.g. 1014, 1063, 11, 1109, 1172
  - ... +1 more personas
- Advanced Code:
```
IsEmpty([3137]) = False AND [3168] <> "Y" AND (IsEmpty([3140]) Or [@3140] >= Today) AND [@761] <= [@3137]
```

### 4. If TBD
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (16 entries across 16 personas):
  - Persona 1: 1 fields, access=2, e.g. 1821
  - Persona 7: 1 fields, access=1, e.g. 1821
  - Persona 8: 1 fields, access=1, e.g. 1821
  - Persona 11: 1 fields, access=1, e.g. 1821
  - Persona 12: 1 fields, access=1, e.g. 1821
  - Persona 13: 1 fields, access=1, e.g. 1821
  - Persona 15: 1 fields, access=1, e.g. 1821
  - Persona 18: 1 fields, access=1, e.g. 1821
  - Persona 19: 1 fields, access=1, e.g. 1821
  - Persona 22: 1 fields, access=1, e.g. 1821
  - ... +6 more personas
- Advanced Code:
```
[11] = "TBD"
```

### 5. If Coborrower is not blank
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (48 entries across 16 personas):
  - Persona 1: 3 fields, access=2, e.g. 1415, 1452, 60
  - Persona 7: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 8: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 11: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 12: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 13: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 15: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 18: 3 fields, access=2, e.g. 1415, 1452, 60
  - Persona 19: 3 fields, access=1, e.g. 1415, 1452, 60
  - Persona 22: 3 fields, access=1, e.g. 1415, 1452, 60
  - ... +6 more personas
- Advanced Code:
```
[69] <> "" and [300] <> ""
```

### 6. If Borrower Credit reference # is not Blank
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (48 entries across 16 personas):
  - Persona 1: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 7: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 8: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 11: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 12: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 13: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 15: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 18: 3 fields, access=2, e.g. 1414, 1450, 67
  - Persona 19: 3 fields, access=1, e.g. 1414, 1450, 67
  - Persona 22: 3 fields, access=1, e.g. 1414, 1450, 67
  - ... +6 more personas
- Advanced Code:
```
[37] <> "" and [300] <> ""
```

### 7. Purchase Advice Date only if Funded
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (16 entries across 16 personas):
  - Persona 1: 1 fields, access=2, e.g. 2370
  - Persona 7: 1 fields, access=1, e.g. 2370
  - Persona 8: 1 fields, access=1, e.g. 2370
  - Persona 11: 1 fields, access=1, e.g. 2370
  - Persona 12: 1 fields, access=1, e.g. 2370
  - Persona 13: 1 fields, access=1, e.g. 2370
  - Persona 15: 1 fields, access=1, e.g. 2370
  - Persona 18: 1 fields, access=1, e.g. 2370
  - Persona 19: 1 fields, access=1, e.g. 2370
  - Persona 22: 1 fields, access=1, e.g. 2370
  - ... +6 more personas
- Advanced Code:
```
IsEmpty([MS.FUN])
```

### 8. 2010 Itemization Lockdown (Fee Names locked)
- Status: Active
- Role ID: -1
- Rights (800 entries across 16 personas):
  - Persona 1: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 7: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 8: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 11: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 12: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 13: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 15: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 18: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 19: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - Persona 22: 50 fields, access=1, e.g. 1390, 154, 1627, 1628, 1640
  - ... +6 more personas

### 9. Lock Date and # of Lock Days Access
- Status: Active
- Role ID: -1
- Rights (32 entries across 16 personas):
  - Persona 1: 2 fields, access=1/2, e.g. 432, 761
  - Persona 7: 2 fields, access=1, e.g. 432, 761
  - Persona 8: 2 fields, access=1, e.g. 432, 761
  - Persona 11: 2 fields, access=1, e.g. 432, 761
  - Persona 12: 2 fields, access=1, e.g. 432, 761
  - Persona 13: 2 fields, access=1, e.g. 432, 761
  - Persona 15: 2 fields, access=1, e.g. 432, 761
  - Persona 18: 2 fields, access=2, e.g. 432, 761
  - Persona 19: 2 fields, access=1, e.g. 432, 761
  - Persona 22: 2 fields, access=1, e.g. 432, 761
  - ... +6 more personas

### 10. HUD Line 802 Credit or Charge for Rate
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (16 entries across 16 personas):
  - Persona 1: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 7: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 8: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 11: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 12: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 13: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 15: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 18: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 19: 1 fields, access=1, e.g. NEWHUD.X715
  - Persona 22: 1 fields, access=1, e.g. NEWHUD.X715
  - ... +6 more personas
- Advanced Code:
```
([NEWHUD.X713] = "Origination Charge" OR [NEWHUD.X713] = "Settlement Reduced" OR [NEWHUD.X713] = "Settlement Increased")
```

### 11. When NEWHUD.X715 is checked, NEWHUD.X713 is disabled
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (16 entries across 16 personas):
  - Persona 1: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 7: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 8: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 11: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 12: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 13: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 15: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 18: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 19: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 22: 1 fields, access=1, e.g. NEWHUD.X713
  - ... +6 more personas
- Advanced Code:
```
([NEWHUD.X715] = "Include Origination Points" OR [NEWHUD.X715] = "Include Origination Credit")
```

### 12. USDA Management for Insuring
- Status: Active
- Role ID: -1
- Rights (8 entries across 2 personas):
  - Persona 35: 4 fields, access=2, e.g. USDA.X157, USDA.X159, USDA.X160, USDA.X161
  - Persona 40: 4 fields, access=2, e.g. USDA.X157, USDA.X159, USDA.X160, USDA.X161

### 13. Disable Access to Seller Side for HUD lines 1001 - 1010
- Status: Active
- Role ID: -1
- Rights (170 entries across 17 personas):
  - Persona 1: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 7: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 8: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 11: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 12: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 13: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 15: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 18: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 19: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - Persona 22: 10 fields, access=1, e.g. 1632, 563, 595, 596, 597
  - ... +7 more personas

### 14. 2010 Itemization - Rule for credit/debit based on Rate pt1
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (17 entries across 17 personas):
  - Persona 1: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 7: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 8: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 11: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 12: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 13: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 15: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 18: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 19: 1 fields, access=1, e.g. NEWHUD.X713
  - Persona 22: 1 fields, access=1, e.g. NEWHUD.X713
  - ... +7 more personas
- Advanced Code:
```
[NEWHUD.X1139] = "Y" and [364] = "909041038"
```

### 15. 2010 Itemization - Rule for credit/debit based on Rate pt 2
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (34 entries across 17 personas):
  - Persona 1: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 7: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 8: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 11: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 12: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 13: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 15: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 18: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 19: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - Persona 22: 2 fields, access=1, e.g. NEWHUD.X1139, NEWHUD.X715
  - ... +7 more personas
- Advanced Code:
```
[364] = "909041038" and ([NEWHUD.X713] = "Origination Charge" OR [NEWHUD.X713] = "Settlement Reduced" OR [NEWHUD.X713] = "Settlement Increased")
```

### 16. Construction to Perm worksheet for non OTC programs
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (119 entries across 17 personas):
  - Persona 1: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 7: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 8: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 11: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 12: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 13: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 15: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 18: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 19: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - Persona 22: 7 fields, access=1, e.g. CX.CTP.1A.LANDOWNRSHP, CX.CTP.1C.VALUE, CX.CTP.1D.VALUE, CX.CTP.1E.VALUE, CX.CTP.1F.VALUE
  - ... +7 more personas
- Advanced Code:
```
NOT [1401].Contains("OTC") and NOT [1401].Contains("One Time Close")
```

### 17. Restrict access to ARI Fields
- Status: Active
- Role ID: -1
- Rights (35 entries across 20 personas):
  - Persona 1: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 7: 16 fields, access=2/1, e.g. CX.ARI.APPR.RECD, CX.ARI.SURVEY.2PHASE.EST, CX.ARI.SURVEY.AB.FOLLOW, CX.ARI.SURVEY.ACRE.CUT, CX.ARI.SURVEY.ADD.COMM
  - Persona 8: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 11: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 12: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 13: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 15: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 18: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 19: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - Persona 22: 1 fields, access=2, e.g. CX.ARI.APPR.RECD
  - ... +10 more personas

### 18. Construction to Perm worksheet - OTC
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (255 entries across 17 personas):
  - Persona 1: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 7: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 8: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 11: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 12: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 13: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 15: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 18: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 19: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - Persona 22: 15 fields, access=1, e.g. 1176, 1265, 1677, 1961, 1962
  - ... +7 more personas
- Advanced Code:
```
[1401].Contains("OTC") or [1401].Contains("One Time Close")
```

### 19. Not IsEmpty GFE Date
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (18 entries across 18 personas):
  - Persona 1: 1 fields, access=1, e.g. 3142
  - Persona 7: 1 fields, access=1, e.g. 3142
  - Persona 8: 1 fields, access=1, e.g. 3142
  - Persona 11: 1 fields, access=1, e.g. 3142
  - Persona 12: 1 fields, access=1, e.g. 3142
  - Persona 13: 1 fields, access=1, e.g. 3142
  - Persona 15: 1 fields, access=1, e.g. 3142
  - Persona 18: 1 fields, access=1, e.g. 3142
  - Persona 19: 1 fields, access=1, e.g. 3142
  - Persona 22: 1 fields, access=1, e.g. 3142
  - ... +8 more personas
- Advanced Code:
```
Not IsEmpty([3142])
```

### 20. ATR <> Qualified Mortgage
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (18 entries across 18 personas):
  - Persona 1: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 8: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 15: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 22: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +8 more personas
- Advanced Code:
```
[QM.X23] <> "Qualified Mortgage"
```

### 21. Access to MI
- Status: Active
- Role ID: -1
- Rights (17 entries across 17 personas):
  - Persona 7: 1 fields, access=1, e.g. 232
  - Persona 8: 1 fields, access=1, e.g. 232
  - Persona 11: 1 fields, access=1, e.g. 232
  - Persona 12: 1 fields, access=1, e.g. 232
  - Persona 13: 1 fields, access=1, e.g. 232
  - Persona 15: 1 fields, access=1, e.g. 232
  - Persona 18: 1 fields, access=1, e.g. 232
  - Persona 19: 1 fields, access=1, e.g. 232
  - Persona 22: 1 fields, access=1, e.g. 232
  - Persona 35: 1 fields, access=1, e.g. 232
  - ... +7 more personas

### 22. Manual Underwrite
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=1, e.g. 1544
  - Persona 7: 1 fields, access=1, e.g. 1544
  - Persona 8: 1 fields, access=1, e.g. 1544
  - Persona 11: 1 fields, access=1, e.g. 1544
  - Persona 12: 1 fields, access=1, e.g. 1544
  - Persona 13: 1 fields, access=1, e.g. 1544
  - Persona 15: 1 fields, access=1, e.g. 1544
  - Persona 18: 1 fields, access=1, e.g. 1544
  - Persona 19: 1 fields, access=1, e.g. 1544
  - Persona 22: 1 fields, access=1, e.g. 1544
  - ... +10 more personas
- Advanced Code:
```
[1543] = "Manual Underwriting"
```

### 23. Letter of Incompleteness Flag
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 7: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 8: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 11: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 12: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 13: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 15: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 18: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 19: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - Persona 22: 1 fields, access=1, e.g. CX.LETTER.OF.INCMP.FLAG
  - ... +10 more personas
- Advanced Code:
```
[CX.LETTER.OF.INC.REASON02] <> "X" and [CX.LETTER.OF.INC.REASON01] <> "X" and [CX.LETTER.OF.INC.REASON03] <> "X" and [CX.LETTER.OF.INC.REASON04] <> "X" and [CX.LETTER.OF.INC.REASON05] <> "X" and [CX.LETTER.OF.INC.REASON06] <> "X" and [CX.LETTER.OF.INC.REASON07] <> "X" and [CX.LETTER.OF.INC.REASON08] <> "X" and [CX.LETTER.OF.INC.REASON09] <> "X"
```

### 24. VA Loans with seller side fund fee
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 8: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 15: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 22: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +10 more personas
- Advanced Code:
```
[1172] = "VA" and [#571] <> 0
```

### 25. TRID - Lock Down Form Version (JR 20150901)
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=2, e.g. 3969
  - Persona 7: 1 fields, access=1, e.g. 3969
  - Persona 8: 1 fields, access=1, e.g. 3969
  - Persona 11: 1 fields, access=1, e.g. 3969
  - Persona 12: 1 fields, access=1, e.g. 3969
  - Persona 13: 1 fields, access=1, e.g. 3969
  - Persona 15: 1 fields, access=1, e.g. 3969
  - Persona 18: 1 fields, access=1, e.g. 3969
  - Persona 19: 1 fields, access=1, e.g. 3969
  - Persona 22: 1 fields, access=1, e.g. 3969
  - ... +10 more personas
- Advanced Code:
```
[@MS.START] >= #10/3/2015#
```

### 26. FHA Loans with LTV>90
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (40 entries across 20 personas):
  - Persona 1: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 8: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 15: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - Persona 22: 2 fields, access=1, e.g. BUTTON_EDISCLOSURES, BUTTON_REGZ-TILORDER DOCS
  - ... +10 more personas
- Advanced Code:
```
[1172] = "FHA" and [#353] > 90 and [#1198] <> 360
```

### 27. TRID - Access to 1003 P3 - (JR 20150909)
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (16 entries across 1 personas):
  - Persona 7: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 28. TRID 801G Lockdown JR20150915
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (140 entries across 20 personas):
  - Persona 1: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 7: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 8: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 11: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 12: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 13: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 15: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 18: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 19: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - Persona 22: 7 fields, access=1, e.g. 155, 200, NEWHUD.X1045, POPT.X7, SYS.X289
  - ... +10 more personas
- Advanced Code:
```
[154] = ""
```

### 29. TRID 801H Lockdown JR20150915
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (140 entries across 20 personas):
  - Persona 1: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 7: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 8: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 11: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 12: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 13: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 15: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 18: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 19: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - Persona 22: 7 fields, access=1, e.g. 1625, 1626, NEWHUD.X1046, POPT.X8, SYS.X215
  - ... +10 more personas
- Advanced Code:
```
[1627] = ""
```

### 30. TRID 801I Lockdown JR20150915
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (120 entries across 20 personas):
  - Persona 1: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 7: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 8: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 11: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 12: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 13: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 15: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 18: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 19: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - Persona 22: 6 fields, access=1, e.g. 1839, 1840, NEWHUD.X1047, POPT.X9, SYS.X294
  - ... +10 more personas
- Advanced Code:
```
[1838] = ""
```

### 31. Retail Loans Only
- Status: Active
- Role ID: -1
- Rights (240 entries across 20 personas):
  - Persona 1: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 7: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 8: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 11: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 12: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 13: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 15: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 18: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 19: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - Persona 22: 12 fields, access=1, e.g. 1620, 389, 439, 572, NEWHUD.X114
  - ... +10 more personas

### 32. Lenders Title Insurance required for All TRID loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 8: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 15: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 22: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +10 more personas
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD" and ([#NEWHUD.X639]+[#NEWHUD.X784])=0
```

### 33. Loans Approved on or after 11/9/2015 but not yet in Post Closing
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (60 entries across 20 personas):
  - Persona 1: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 7: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 8: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 11: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 12: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 13: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 15: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 18: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 19: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - Persona 22: 3 fields, access=1, e.g. 3171, 3173, FV.X366
  - ... +10 more personas
- Advanced Code:
```
[Log.MS.Date.Approval]>=#11/9/2015#
```

### 34. Loans Started after 10/7/2105
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (40 entries across 20 personas):
  - Persona 1: 2 fields, access=1, e.g. 202, L128
  - Persona 7: 2 fields, access=1, e.g. 202, L128
  - Persona 8: 2 fields, access=1, e.g. 202, L128
  - Persona 11: 2 fields, access=1, e.g. 202, L128
  - Persona 12: 2 fields, access=1, e.g. 202, L128
  - Persona 13: 2 fields, access=1, e.g. 202, L128
  - Persona 15: 2 fields, access=1, e.g. 202, L128
  - Persona 18: 2 fields, access=1, e.g. 202, L128
  - Persona 19: 2 fields, access=1, e.g. 202, L128
  - Persona 22: 2 fields, access=1, e.g. 202, L128
  - ... +10 more personas
- Advanced Code:
```
[@MS.START] >= #10/7/2015#
```

### 35. Loans started after 9/21/2015
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 7: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 8: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 11: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 12: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 13: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 15: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 18: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 19: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 22: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - ... +10 more personas
- Advanced Code:
```
[CX.BORROWERRACEAG]="" and [@MS.START] >= #9/21/2015#

```

### 36. Non-Brokered TRID Loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (320 entries across 20 personas):
  - Persona 1: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 7: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 8: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 11: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 12: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 13: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 15: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 18: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 19: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - Persona 22: 16 fields, access=1, e.g. LE2.X5, LE2.X6, LE3.X10, LE3.X22, LE3.X23
  - ... +10 more personas
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 37. Owners Title Insurance required for All TRID Purchase loans
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 8: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 15: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 22: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +10 more personas
- Advanced Code:
```
[19] = "Purchase" and [3969] = "RESPA-TILA 2015 LE and CD" and ([#NEWHUD.X572]+[#NEWHUD.X783])=0
```

### 38. PFQC - Read Only access
- Status: Active
- Role ID: -1

### 39. testtest
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (20 entries across 20 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 7: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 8: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 11: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 12: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 13: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 15: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 18: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 19: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 22: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - ... +10 more personas
- Advanced Code:
```
Not IsEmpty([3977])
```

### 40. TRID - Lock Seller Obligated in Orgination Fees (JR 20150928)
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (1080 entries across 20 personas):
  - Persona 1: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 7: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 8: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 11: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 12: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 13: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 15: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 18: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 19: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - Persona 22: 54 fields, access=1, e.g. NEWHUD2.X1021, NEWHUD2.X1054, NEWHUD2.X1087, NEWHUD2.X1120, NEWHUD2.X1153
  - ... +10 more personas
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 41. ACCESS: 1205 (MI Discontinued at 78% on Second & Investments
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (32 entries across 32 personas):
  - Persona 1: 1 fields, access=0, e.g. 1205
  - Persona 7: 1 fields, access=0, e.g. 1205
  - Persona 8: 1 fields, access=0, e.g. 1205
  - Persona 11: 1 fields, access=0, e.g. 1205
  - Persona 12: 1 fields, access=2, e.g. 1205
  - Persona 13: 1 fields, access=2, e.g. 1205
  - Persona 15: 1 fields, access=2, e.g. 1205
  - Persona 18: 1 fields, access=0, e.g. 1205
  - Persona 19: 1 fields, access=0, e.g. 1205
  - Persona 22: 1 fields, access=0, e.g. 1205
  - ... +22 more personas
- Advanced Code:
```
([1811] = "SecondHome" OR [1811] = "Investor") and IsEmpty([1205])
```

### 42. !MOVE RULE ACCESS
- Status: Active
- Role ID: -1
- Rights (96 entries across 32 personas):
  - Persona 1: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 7: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 8: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 11: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 12: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 13: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 15: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 18: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 19: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - Persona 22: 3 fields, access=2, e.g. CUST25FV, CX.MTECH.FOLDER.CURRENT, CX.MTECH.FOLDER.MOVETO
  - ... +22 more personas

### 43. +TRID - Access to Details of Trans fields on 1003 P3
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (368 entries across 23 personas):
  - Persona 1: 16 fields, access=2, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 7: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 11: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 12: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 13: 16 fields, access=1/2, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 18: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 19: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 35: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 39: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - Persona 41: 16 fields, access=1, e.g. 1092, 1093, 1095, 1109, 1115
  - ... +13 more personas
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 44. +TRID - Lock Down Form Version
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (23 entries across 23 personas):
  - Persona 1: 1 fields, access=1, e.g. 3969
  - Persona 7: 1 fields, access=1, e.g. 3969
  - Persona 11: 1 fields, access=1, e.g. 3969
  - Persona 12: 1 fields, access=1, e.g. 3969
  - Persona 13: 1 fields, access=1, e.g. 3969
  - Persona 18: 1 fields, access=1, e.g. 3969
  - Persona 19: 1 fields, access=1, e.g. 3969
  - Persona 35: 1 fields, access=1, e.g. 3969
  - Persona 39: 1 fields, access=1, e.g. 3969
  - Persona 41: 1 fields, access=1, e.g. 3969
  - ... +13 more personas
- Advanced Code:
```
[@MS.START] >= #10/3/2015#
```

### 45. +TRID: Lockdown Sig Type on LE3 [LE3.X19] at "By Name"
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (23 entries across 23 personas):
  - Persona 1: 1 fields, access=2, e.g. LE3.X19
  - Persona 7: 1 fields, access=1, e.g. LE3.X19
  - Persona 11: 1 fields, access=1, e.g. LE3.X19
  - Persona 12: 1 fields, access=1, e.g. LE3.X19
  - Persona 13: 1 fields, access=1, e.g. LE3.X19
  - Persona 18: 1 fields, access=1, e.g. LE3.X19
  - Persona 19: 1 fields, access=1, e.g. LE3.X19
  - Persona 35: 1 fields, access=1, e.g. LE3.X19
  - Persona 39: 1 fields, access=1, e.g. LE3.X19
  - Persona 41: 1 fields, access=1, e.g. LE3.X19
  - ... +13 more personas
- Advanced Code:
```
[LE3.X19] = "ByName"
```

### 46. +TRID: Restricted Access to Customize checkboxes on CD1
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (46 entries across 23 personas):
  - Persona 1: 2 fields, access=2, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 7: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 11: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 12: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 13: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 18: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 19: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 35: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 39: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - Persona 41: 2 fields, access=1, e.g. LOANTERMTABLE.CUSTOMIZE, PAYMENTTABLE.CUSTOMIZE
  - ... +13 more personas
- Advanced Code:
```
[3969] = "RESPA-TILA 2015 LE and CD"
```

### 47. +TRID: Owners Title Insrequired for All Purchase loans (10/2/15
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (25 entries across 25 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 35: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 39: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 41: 1 fields, access=0, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +15 more personas
- Advanced Code:
```
[19] = "Purchase" and [3969] = "RESPA-TILA 2015 LE and CD" and ([#NEWHUD.X572]+[#NEWHUD.X783])=0
```

### 48. Mavent Fail
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (25 entries across 25 personas):
  - Persona 1: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 7: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 11: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 12: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 13: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 18: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 19: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 35: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 39: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - Persona 41: 1 fields, access=1, e.g. BUTTON_REGZ-TILORDER DOCS
  - ... +15 more personas
- Advanced Code:
```
[COMPLIANCEREVIEW.ALERTS] = "Did Not Pass"
```

### 49. Order Docs Access
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (50 entries across 25 personas):
  - Persona 1: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 7: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 11: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 12: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 13: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 18: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 19: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 35: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 39: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - Persona 41: 2 fields, access=1, e.g. BUTTON_ORDERDOCS, BUTTON_REGZ-TILOrder Docs
  - ... +15 more personas
- Advanced Code:
```
IsEmpty([2305]) and [4004] = "Test"
```

### 50. No eDisclosures on Thursday
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (65 entries across 65 personas):
  - Persona 1: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 7: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 8: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 11: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 12: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 13: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 15: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 18: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 19: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - Persona 22: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
  - ... +55 more personas
- Advanced Code:
```
[CX.DATE.TODAY.IS.TUESDAY] = ""
```

### 51. ! Hide eDisclosure Button on Sunday
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (65 entries across 65 personas):
  - Persona 1: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 7: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 8: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 11: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 12: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 13: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 15: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 18: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 19: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - Persona 22: 1 fields, access=0, e.g. BUTTON_EDISCLOSURES
  - ... +55 more personas
- Advanced Code:
```
(DateTime.Now.ToString("dddd")) = "Thursday"
```

### 52. LO NMLS Test
- Status: Active
- Role ID: -1
- Rights (130 entries across 65 personas):
  - Persona 1: 2 fields, access=1, e.g. 1612, 3238
  - Persona 7: 2 fields, access=1, e.g. 1612, 3238
  - Persona 8: 2 fields, access=1, e.g. 1612, 3238
  - Persona 11: 2 fields, access=1, e.g. 1612, 3238
  - Persona 12: 2 fields, access=1, e.g. 1612, 3238
  - Persona 13: 2 fields, access=1, e.g. 1612, 3238
  - Persona 15: 2 fields, access=1, e.g. 1612, 3238
  - Persona 18: 2 fields, access=1, e.g. 1612, 3238
  - Persona 19: 2 fields, access=1, e.g. 1612, 3238
  - Persona 22: 2 fields, access=1, e.g. 1612, 3238
  - ... +55 more personas

### 53. Lock Request Button
- Status: Active
- Condition: `9`
- Role ID: -1
- Advanced Code:
```
[11] = "" Or
LCase([11])="tbd"
```

### 54. !!!test1
- Status: Active
- Role ID: -1
- Rights (2 entries across 2 personas):
  - Persona 11: 1 fields, access=2, e.g. 748
  - Persona 12: 1 fields, access=2, e.g. 748

### 55. !!!test2
- Status: Active
- Condition: `8`
- Milestone ID: e6896d81-2cf3-4b1d-8f4e-47e94d89f897
- Role ID: -1
- Rights (2 entries across 2 personas):
  - Persona 11: 1 fields, access=1, e.g. 748
  - Persona 12: 1 fields, access=1, e.g. 748
- Advanced Code:
```
e6896d81-2cf3-4b1d-8f4e-47e94d89f897
```

### 56. *PSR_Presubmission Requests
- Status: Active
- Role ID: -1
- Rights (621 entries across 27 personas):
  - Persona 1: 23 fields, access=2, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 7: 23 fields, access=2, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 11: 23 fields, access=2, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 18: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 22: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 41: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 42: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 43: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 89: 23 fields, access=1, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - Persona 122: 23 fields, access=2, e.g. CX.PS.OPEN.TITLE.ESCROW, CX.PS.ORDER.BVOE.RQST1, CX.PS.ORDER.BVOE.RQST2, CX.PS.ORDER.BVOE.RQST3, CX.PS.ORDER.BVOE.RQST4
  - ... +17 more personas

### 57. Jeannene Disclosure Testing
- Status: Active
- Condition: `9`
- Role ID: -1
- Rights (1 entries across 1 personas):
  - Persona 7: 1 fields, access=1, e.g. BUTTON_EDISCLOSURES
- Advanced Code:
```
IsEmpty ([3152]) AND ([3143] < [CX.DATE.TODAY])
```

### 58. Processor Block
- Status: Active
- Role ID: -1
- Rights (1 entries across 1 personas):
  - Persona 11: 1 fields, access=1, e.g. 1109

