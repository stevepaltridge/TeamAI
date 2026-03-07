# Milestone Requirements (36)

## Requirement 1: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":7,"MilestoneID":"2","advancedCode":"If [CX.YEARS.AT.RESIDENCE] <> \"Yes\" then\r\nFail(\"At least 2 years of residence is required to complete the milestone.\")\r\nEnd if"}
- **ruleID**: 7
- **ruleName**: Residence Less Than 2 Years (Updated 9/7/2014)
- **lastModTime**: 2015-12-16T13:02:40.88
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 2: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":8,"MilestoneID":"2","advancedCode":"If [#101] >\"0.00\" and [CX.YEARS.AT.EMPLOYER] <> \"Yes\"\r\nFail(\"At least 2 years of employment is required to complete the milestone.\")\r\nEnd if"}
- **ruleID**: 8
- **ruleName**: Employed Less Than 2 Years (Updated 9/7/2014)
- **lastModTime**: 2014-12-15T21:14:18.297
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 3: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":9,"MilestoneID":"4","advancedCode":"If [@763]>[@762]\r\n\tFail(\"Lock Period Does Not Cover Funding.\")\r\n\r\n\t\r\nElse if Today>[@762]\r\n\tFail(\"Lock Period Does Not Cover Funding.\")\r\n\r\n\r\nEnd if\r\n\t"}
- **ruleID**: 9
- **ruleName**: Closing -Lock Period Does Not Cover Expected Funding
- **lastModTime**: 2013-01-01T08:14:31.71
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 4: Unnamed

- **lstFields**: [1 items]
  - {"ruleID":10,"fieldID":"2149","MilestoneID":"4"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 10
- **ruleName**: Lock Date Must Be Present Prior to Clear to Close
- **lastModTime**: 2014-02-20T07:14:47.447
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 5: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [5 items]
  - {"ruleID":16,"MilestoneID":"2","advancedCode":"IF [ComplianceReview.Alerts] = \"Did Not Pass\" Then\r\n\tFail(\"You cannot finish this milestone because the compliance check \tfailed.\")\r\nEnd IF"}
  - {"ruleID":16,"MilestoneID":"3","advancedCode":"IF [ComplianceReview.Alerts] = \"Did Not Pass\" Then\r\n\tFail(\"You cannot finish this milestone because the compliance check \t\tfailed.\")\r\nEnd IF"}
  - {"ruleID":16,"MilestoneID":"4","advancedCode":"IF [ComplianceReview.Alerts] = \"Did Not Pass\" Then\r\n\tFail(\"You cannot finish this milestone because the compliance check \tfailed.\")\r\nEnd IF"}
  - {"ruleID":16,"MilestoneID":"5","advancedCode":"IF [ComplianceReview.Alerts] = \"Did Not Pass\" Then\r\n\tFail(\"You cannot finish this milestone because the compliance check \tfailed.\")\r\nEnd IF"}
  - {"ruleID":16,"MilestoneID":"6","advancedCode":"IF [ComplianceReview.Alerts] = \"Did Not Pass\" Then\r\n\tFail(\"You cannot finish this milestone because the compliance check \tfailed.\")\r\nEnd IF"}
- **ruleID**: 16
- **ruleName**: Compliance Review Fail
- **lastModTime**: 2013-01-01T08:14:33.94
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 6: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":19,"MilestoneID":"4","advancedCode":"if [CX.UC.CHANGES] = \"Yes\" then\r\nFail(\"You cannot complete the Approval Milestone because there are differences between Approved Data and Current Data. Please review the UW Comparison Screen\")\r\nEnd If"}
- **ruleID**: 19
- **ruleName**: UW Comparison Screen Differs Cannot Complete Final Approval
- **lastModTime**: 2013-01-03T14:42:58.093
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 7: Unnamed

- **lstFields**: [1 items]
  - {"ruleID":22,"fieldID":"2626","MilestoneID":"6"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 22
- **ruleName**: Reqs for Funding
- **lastModTime**: 2017-02-01T18:40:05.68
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 8: Unnamed

- **lstFields**: [70 items]
  - {"ruleID":25,"fieldID":"1041","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1057","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1172","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"12","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"13","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"14","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1401","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"15","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1550","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"16","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1603","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"169","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"170","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"171","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"172","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"173","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"174","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"18","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1811","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
  - {"ruleID":25,"fieldID":"1821","MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442"}
- **lstDocs**: [1 items]
  - {"ruleID":25,"MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442","docGuid":"d60c0530-7716-4b41-8461-1a3efd024e26","attachedRequired":1}
- **lstTasks**: [2 items]
  - {"ruleID":25,"MilestoneID":"f44cb586-1c31-46d9-8206-ac8510cdae6c","taskGuid":"7f762777-cd67-4215-8d03-f36bee1ce938","isRequired":1}
  - {"ruleID":25,"MilestoneID":"888a2759-fe82-429b-a43a-65f10b3b4442","taskGuid":"ca46f169-87cb-4f77-8411-624f8d33d633","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 25
- **ruleName**: Milestone Completion - Credit Qualification
- **lastModTime**: 2017-02-01T18:40:15.957
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 9: Unnamed

- **lstFields**: [79 items]
  - {"ruleID":26,"fieldID":"1014","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1051","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"11","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1109","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"12","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1257","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1258","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1259","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1260","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1264","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1393","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1395","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1396","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1397","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"14","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1401","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1402","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"15","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1603","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
  - {"ruleID":26,"fieldID":"1719","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":26,"MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd","taskGuid":"ac1d83c2-f578-42c3-8cae-70e2c1d61158","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 26
- **ruleName**: Milestone Completion - Doc Preperation
- **lastModTime**: 2017-02-01T18:40:17.863
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 10: Unnamed

- **lstFields**: [12 items]
  - {"ruleID":27,"fieldID":"1541","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"1543","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"1546","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"2293","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"2305","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"2354","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"2355","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"617","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"618","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"974","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"DU.LP.ID","MilestoneID":"4"}
  - {"ruleID":27,"fieldID":"VEND.X263","MilestoneID":"4"}
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":27,"MilestoneID":"4","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 27
- **ruleName**: Milestone Completion - Approval
- **lastModTime**: 2017-12-18T16:30:02.843
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 11: Unnamed

- **lstFields**: [5 items]
  - {"ruleID":28,"fieldID":"2012","MilestoneID":"70367ac9-ec21-4be4-a548-8d5710eb6cee"}
  - {"ruleID":28,"fieldID":"2014","MilestoneID":"70367ac9-ec21-4be4-a548-8d5710eb6cee"}
  - {"ruleID":28,"fieldID":"2016","MilestoneID":"70367ac9-ec21-4be4-a548-8d5710eb6cee"}
  - {"ruleID":28,"fieldID":"2019","MilestoneID":"70367ac9-ec21-4be4-a548-8d5710eb6cee"}
  - {"ruleID":28,"fieldID":"VEND.X267","MilestoneID":"70367ac9-ec21-4be4-a548-8d5710eb6cee"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 28
- **ruleName**: Milestone Completion - Shipping
- **lastModTime**: 2017-02-01T18:40:21.493
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 12: Unnamed

- **lstFields**: [12 items]
  - {"ruleID":29,"fieldID":"1991","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1992","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1993","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1994","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1995","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1996","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1997","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1998","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"1999","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"2000","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"VEND.X200","MilestoneID":"6"}
  - {"ruleID":29,"fieldID":"VEND.X263","MilestoneID":"6"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 29
- **ruleName**: Milestone Completion - Funding
- **lastModTime**: 2017-02-01T18:40:23.587
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 13: Unnamed

- **lstFields**: [2 items]
  - {"ruleID":30,"fieldID":"1405","MilestoneID":"5f295963-64b5-4b95-9ff3-86529a08bf14"}
  - {"ruleID":30,"fieldID":"230","MilestoneID":"5f295963-64b5-4b95-9ff3-86529a08bf14"}
- **lstDocs**: [0 items]
- **lstTasks**: [2 items]
  - {"ruleID":30,"MilestoneID":"5f295963-64b5-4b95-9ff3-86529a08bf14","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
  - {"ruleID":30,"MilestoneID":"5f295963-64b5-4b95-9ff3-86529a08bf14","taskGuid":"e2be529f-b00a-4b35-a605-6226030bdedb","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 30
- **ruleName**: Milestone Completion - Closing Request
- **lastModTime**: 2017-02-01T18:40:25.44
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 14: Unnamed

- **lstFields**: [24 items]
  - {"ruleID":31,"fieldID":"1014","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1067","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1086","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1133","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1149","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1544","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"1829","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"191","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"2301","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"2302","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"2984","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"984","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X338","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X339","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X340","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X341","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X342","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X343","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X345","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":31,"fieldID":"QM.X346","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
- **lstDocs**: [0 items]
- **lstTasks**: [5 items]
  - {"ruleID":31,"MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5","taskGuid":"6b185884-cab1-499b-882a-944f12c89cdd","isRequired":1}
  - {"ruleID":31,"MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
  - {"ruleID":31,"MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5","taskGuid":"a5cd92ed-d30f-4c25-b9ed-843770575ef1","isRequired":1}
  - {"ruleID":31,"MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5","taskGuid":"51c57732-4ae4-4583-92f6-601cc1e819a1","isRequired":1}
  - {"ruleID":31,"MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5","taskGuid":"f696fdf5-0625-4b1b-86b5-db875c0af9b9","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 31
- **ruleName**: Milestone Completion - Conditional Approval
- **lastModTime**: 2017-02-01T18:40:29.467
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 15: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [3 items]
  - {"ruleID":32,"MilestoneID":"205b71df-ed01-456f-9ffc-87c883ecf0af","taskGuid":"674b186d-d2d9-4b12-8c3b-787450ef855a","isRequired":1}
  - {"ruleID":32,"MilestoneID":"205b71df-ed01-456f-9ffc-87c883ecf0af","taskGuid":"628eb26f-f486-4e46-b5a0-a8f152b0b2c4","isRequired":1}
  - {"ruleID":32,"MilestoneID":"205b71df-ed01-456f-9ffc-87c883ecf0af","taskGuid":"8142e0be-6f0d-4ef2-be54-4ccc20690312","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 32
- **ruleName**: Milestone Completion - Credit Application
- **lastModTime**: 2017-02-01T18:40:31.553
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 16: Unnamed

- **lstFields**: [4 items]
  - {"ruleID":33,"fieldID":"479","MilestoneID":"ca99ab06-d8d5-4044-b719-f5407a79b8b2"}
  - {"ruleID":33,"fieldID":"CX.CREDITAUTH","MilestoneID":"ca99ab06-d8d5-4044-b719-f5407a79b8b2"}
  - {"ruleID":33,"fieldID":"CX.CREDITAUTH.BY","MilestoneID":"ca99ab06-d8d5-4044-b719-f5407a79b8b2"}
  - {"ruleID":33,"fieldID":"CX.CREDITCOMMENTS","MilestoneID":"ca99ab06-d8d5-4044-b719-f5407a79b8b2"}
- **lstDocs**: [1 items]
  - {"ruleID":33,"MilestoneID":"ca99ab06-d8d5-4044-b719-f5407a79b8b2","docGuid":"962b6436-b3cf-4da7-af62-7e0eeef51eb2","attachedRequired":1}
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 33
- **ruleName**: Milestone Completion - Credit Inquiry
- **lastModTime**: 2017-02-01T18:40:33.543
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 17: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [2 items]
  - {"ruleID":34,"MilestoneID":"80dcf250-3c95-4673-a726-160eec345f49","docGuid":"cd4dc65f-6c36-4cd1-a63f-e2e9d5526483","attachedRequired":0}
  - {"ruleID":34,"MilestoneID":"80dcf250-3c95-4673-a726-160eec345f49","docGuid":"53037f90-6c6a-4d1e-a02c-d5129f5fe9f2","attachedRequired":1}
- **lstTasks**: [1 items]
  - {"ruleID":34,"MilestoneID":"80dcf250-3c95-4673-a726-160eec345f49","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 34
- **ruleName**: Milestone Completion - Resubmittal
- **lastModTime**: 2017-02-01T18:40:35.4
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 18: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [2 items]
  - {"ruleID":35,"MilestoneID":"5","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
  - {"ruleID":35,"MilestoneID":"5","taskGuid":"93591159-543c-4f8b-b827-8e7a71b71d33","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 35
- **ruleName**: Milestone Completion - Doc Signing
- **lastModTime**: 2017-02-01T18:40:38.023
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 19: Unnamed

- **lstFields**: [1 items]
  - {"ruleID":36,"fieldID":"4143","MilestoneID":"2"}
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":36,"MilestoneID":"2","taskGuid":"7f762777-cd67-4215-8d03-f36bee1ce938","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 36
- **ruleName**: Milestone Completion - Processing
- **lastModTime**: 2021-01-26T19:20:47.873
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 20: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [11 items]
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"900b5fb1-1fe4-47f8-8ef5-399a02bd9d34","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"9b27d0d3-d068-488a-afbb-e5e834b99000","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"4b5160a9-796a-42c9-82eb-44998f53e9b1","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"74d895f7-1aca-4659-9d38-6ea7cb30eab0","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"4bd2c4eb-6246-442e-b2e3-2a2c38ed40e6","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"2aa9253a-b4e5-4f78-9118-636ca81cad45","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"6db716ab-5452-4744-89bf-7c888bb018bd","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"8f424165-f0c1-4824-aa3d-5dbf956e7864","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"a62f3d35-e749-4991-a0aa-9dad01d8a3fa","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"b3ca31bd-d6b4-4576-8177-d8f647d75112","isRequired":1}
  - {"ruleID":37,"MilestoneID":"3","taskGuid":"b1a486b5-61a0-42e7-9142-503f132d3757","isRequired":1}
- **lstCode**: [1 items]
  - {"ruleID":37,"MilestoneID":"3","advancedCode":"IF NOT [CX.PRWK.TBDPREQUAL] = \"X\" Then\r\n\tFail(\"You cannot finish this milestone because the Subject Property Address contains \"\"TBD\"\".\")\r\nEnd IF"}
- **ruleID**: 37
- **ruleName**: Milestone Completion - Submittal
- **lastModTime**: 2018-03-13T17:09:55.657
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 1
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 21: Unnamed

- **lstFields**: [1 items]
  - {"ruleID":38,"fieldID":"1051","MilestoneID":"d348deff-4175-4247-aab1-6246d31089fd"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 38
- **ruleName**: Milestone Completion - Doc Prep
- **lastModTime**: 2017-02-01T18:40:44.657
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 22: Unnamed

- **lstFields**: [4 items]
  - {"ruleID":40,"fieldID":"1416","MilestoneID":"6"}
  - {"ruleID":40,"fieldID":"1417","MilestoneID":"6"}
  - {"ruleID":40,"fieldID":"1418","MilestoneID":"6"}
  - {"ruleID":40,"fieldID":"1419","MilestoneID":"6"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 40
- **ruleName**: All Non-Wholesale Loans
- **lastModTime**: 2017-02-01T18:40:46.87
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 23: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [10 items]
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' Borrower Information Provided warning\r\nIf Not IsEmpty([4000]) Then\r\n\tIf IsEmpty([4143]) Then\r\n\t\tFail(\"your Borrower Information Provided warning\")\r\n\tEnd If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' Borrower Visual Observation warning\r\nIf Not IsEmpty([4000]) Then\r\n    If [4143] = \"FaceToFace\" And ([4121] = \"\" Or [4122] = \"\" Or [4123] = \"\") Then\r\n\t    Fail(\"your Borrower Visual Observation warning\")\r\n    End If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' Borrower Ethnicity warning\r\nIf Not IsEmpty([4000]) Then\r\n    If IsEmpty([4210]) And IsEmpty([4211]) And IsEmpty([4205]) And IsEmpty([4243]) And IsEmpty([4212]) Then\r\n\t\tFail(\"your Borrower Ethnicity warning\")\r\n    End If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' Borrower Race warning\r\nIf Not IsEmpty([4000]) Then\r\n\tIf [1524] = \"\" And [1525] = \"\" And [1526] = \"\" And [1527] = \"\" And [1528] = \"\" And [4252] = \"\" And [4244] = \"\" And [1530] = \"\" Then\r\n\t\tFail(\"your Borrower Race warning\")\r
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' Borrower Sex warning\r\nIf Not IsEmpty([4000]) Then\r\n\tIf IsEmpty([4193]) And IsEmpty([4194]) And IsEmpty([4195]) And IsEmpty([4245]) And IsEmpty([4196]) Then\r\n\t\tFail(\"your Borrower Sex warning\")\r\n    End If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' CoBorrower Information Provided\r\nIf Not IsEmpty([4004]) Then\r\n\tIf IsEmpty([4131]) Then\r\n\t\tFail(\"your CoBorrower Information Provided warning\")\r\n\tEnd If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' CoBorrower Visual Observation warning\r\nIf Not IsEmpty([4000]) Then\r\n    If [4131].ToString = \"FaceToFace\" And (IsEmpty([4132]) Or IsEmpty([4133]) Or IsEmpty([4134])) Then\r\n        Fail(\"your CoBorrower Visual Observation warning\")\r\n    End
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' CoBorrower Ethicity warning\r\nIf Not IsEmpty([4004]) Then\r\n\tIf IsEmpty([4213]) And IsEmpty([4214]) And IsEmpty([4206]) And IsEmpty([4246]) And IsEmpty([4215]) Then\r\n\t\tFail(\"your CoBorrower Ethicity warning\")\r\n\tEnd If\r\nEnd If"}
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' CoBorrower Race warning\r\nIf Not IsEmpty([4004]) Then\r\n\tIf [1532] = \"\" And [1533] = \"\" And [1534] = \"\" And [1535] = \"\" And [1536] = \"\" And [4253] = \"\" And [4247] = \"\" And [1538] = \"\" Then\r\n\t\tFail(\"your CoBorrower Race warning\
  - {"ruleID":41,"MilestoneID":"2","advancedCode":"' CoBorrower Sex warning\r\nIf Not IsEmpty([4004]) Then\r\n\tIf [4197] <> \"Y\" And [4198] <> \"Y\" And [4199] <> \"Y\" And [4248] <> \"Y\" And [4200] <> \"Y\" Then\r\n\t\tFail(\"your CoBorrower Sex warning\")\r\n\tEnd If\r\nEnd If"}
- **ruleID**: 41
- **ruleName**: Check: Demographics Field Completion Check
- **lastModTime**: 2021-01-26T23:42:58.37
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 1
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 24: Unnamed

- **lstFields**: [3 items]
  - {"ruleID":42,"fieldID":"4000","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
  - {"ruleID":42,"fieldID":"4001","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
  - {"ruleID":42,"fieldID":"4002","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 42
- **ruleName**: MS Qual
- **lastModTime**: 2025-01-02T15:08:25.13
- **advancedCode**: 
- **advancedCodeXml**: 
- **status**: 1
- **Condition**: 0
- **ConditionState**: 
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 25: Unnamed

- **lstFields**: [2 items]
  - {"ruleID":2,"fieldID":"1107","MilestoneID":"2"}
  - {"ruleID":2,"fieldID":"1198","MilestoneID":"2"}
- **lstDocs**: [0 items]
- **lstTasks**: [9 items]
  - {"ruleID":2,"MilestoneID":"3","taskGuid":"bd004c81-4518-4ccb-acc3-5a5a5b30157a","isRequired":1}
  - {"ruleID":2,"MilestoneID":"2","taskGuid":"38f240df-7c47-4ae1-9466-727ca0c74f16","isRequired":1}
  - {"ruleID":2,"MilestoneID":"5","taskGuid":"74262503-2d70-4e53-8fb1-32b5cbba5a6d","isRequired":1}
  - {"ruleID":2,"MilestoneID":"2","taskGuid":"af6cf6f3-add1-4de9-869f-76e5612306ba","isRequired":1}
  - {"ruleID":2,"MilestoneID":"2","taskGuid":"1fa35bfa-8a55-4293-ba18-31517bffe388","isRequired":1}
  - {"ruleID":2,"MilestoneID":"5","taskGuid":"e9a02a5b-ebd1-43c7-a868-7e6a2243eaa3","isRequired":1}
  - {"ruleID":2,"MilestoneID":"5","taskGuid":"91e086e1-c2f8-4b45-95eb-b633d284f8e8","isRequired":1}
  - {"ruleID":2,"MilestoneID":"5","taskGuid":"feeaed11-2d1a-4a48-89a5-19f925f7143b","isRequired":1}
  - {"ruleID":2,"MilestoneID":"2","taskGuid":"ac1d83c2-f578-42c3-8cae-70e2c1d61158","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 2
- **ruleName**: FHA Milestone Requirements
- **lastModTime**: 2013-01-01T08:14:36.237
- **advancedCode**: 3
- **advancedCodeXml**: 
- **status**: 0
- **Condition**: 2
- **ConditionState**: 3
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 26: Unnamed

- **lstFields**: [4 items]
  - {"ruleID":3,"fieldID":"1041","MilestoneID":"4"}
  - {"ruleID":3,"fieldID":"2317","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":3,"fieldID":"2318","MilestoneID":"3c34f220-44ec-412c-80a8-5f4dcf4b18d5"}
  - {"ruleID":3,"fieldID":"4000","MilestoneID":"2"}
- **lstDocs**: [2 items]
  - {"ruleID":3,"MilestoneID":"3","docGuid":"cb89a958-d2b2-46c8-a2bb-4cde93848505","attachedRequired":0}
  - {"ruleID":3,"MilestoneID":"2","docGuid":"962b6436-b3cf-4da7-af62-7e0eeef51eb2","attachedRequired":0}
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 3
- **ruleName**: General Requirements
- **lastModTime**: 2018-03-26T02:51:45.127
- **advancedCode**: [#2] > 500000 and [1543] = "Manual Underwriting"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsNumeric</element><element name="fieldID">2</element><element name="criterionName">Loan.TotalLoanAmount</element><element name="fieldDescription">Total Loan Amount</element><element name="opType">GreaterThan</element><element name="valueFrom">500000</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">500000</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsOptionList</element><element name="fieldID">1543</element><element name="criterionName"></element><element name="fieldDescription">Underwriting Risk Assess Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">Manual Underwriting</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">Manual Underwriting</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [#2] > 500000 and [1543] = "Manual Underwriting"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 27: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":4,"MilestoneID":"3","taskGuid":"e275499d-bf64-4d71-a3ce-272c92a4a20b","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 4
- **ruleName**: FHA Condo/PUD Loan Requirements
- **lastModTime**: 2013-01-03T14:08:24.24
- **advancedCode**: [2996] = "Condominium" and [1172] = "FHA" or ([1553] = "Condominium" OR [1553] = "PUD") and [1172] = "FHA"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsOptionList</element><element name="fieldID">2996</element><element name="criterionName"></element><element name="fieldDescription">HUD 92900 LT Subject Property Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">Condominium</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">Condominium</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsOptionList</element><element name="fieldID">1172</element><element name="criterionName">Loan.LoanType</element><element name="fieldDescription">LOAN TYPE</element><element name="opType">IsAnyOf</element><element name="valueFrom">FHA</element><element name="valueTo"></element><element name="jointToken">Or</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">FHA</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="2"><element name="fieldType">IsOptionList</element><element name="fieldID">1553</element><element name="criterionName"></element><element name="fieldDescription">Subject Property Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">Condominium;PUD</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">Condominium, PUD</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="3"><element name="fieldType">IsOptionList</element><element name="fieldID">1172</element><element name="criterionName">Loan.LoanType</element><element name="fieldDescription">LOAN TYPE</element><element name="opType">IsAnyOf</element><element name="valueFrom">FHA</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">FHA</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [2996] = "Condominium" and [1172] = "FHA" or ([1553] = "Condominium" OR [1553] = "PUD") and [1172] = "FHA"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 28: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":5,"MilestoneID":"5","taskGuid":"8e2d2686-2c02-4b45-9b4c-6b8a072bfa9c","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 5
- **ruleName**: FHA EEM Loan Requirements
- **lastModTime**: 2013-01-01T08:14:38.527
- **advancedCode**: [2997] = "Y"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsYesNo</element><element name="fieldID">2997</element><element name="criterionName"></element><element name="fieldDescription">HUD 92900 LT Energy Efficient Mortgage</element><element name="opType">IsYes</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [2997] = "Y"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 29: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [1 items]
  - {"ruleID":6,"MilestoneID":"2","taskGuid":"283ea8b4-83e1-4379-bf40-080f5c370ea3","isRequired":1}
- **lstCode**: [0 items]
- **ruleID**: 6
- **ruleName**: FHA Refinance Loan Requirements
- **lastModTime**: 2013-01-03T14:35:17.403
- **advancedCode**: [1172] = "FHA" and ([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsOptionList</element><element name="fieldID">1172</element><element name="criterionName">Loan.LoanType</element><element name="fieldDescription">Loan Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">FHA</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">FHA</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsOptionList</element><element name="fieldID">19</element><element name="criterionName">Loan.LoanPurpose</element><element name="fieldDescription">Loan Purpose</element><element name="opType">IsAnyOf</element><element name="valueFrom">NoCash-Out Refinance;Cash-Out Refinance</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">No Cash-Out Refi, Cash-Out Refi</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [1172] = "FHA" and ([19] = "NoCash-Out Refinance" OR [19] = "Cash-Out Refinance")
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 30: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":11,"MilestoneID":"2","advancedCode":"IF  [VASUMM.X23] < \"620\" \r\nfail (\"You cannot complete this milestone because the credit score is less than 620.\")\r\nend if"}
- **ruleID**: 11
- **ruleName**: FICO Less Than 620
- **lastModTime**: 2013-01-01T08:14:42.233
- **advancedCode**: [#VASUMM.X23] < 620
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsNumeric</element><element name="fieldID">VASUMM.X23</element><element name="criterionName"></element><element name="fieldDescription">VA Loan Summ Credit Score</element><element name="opType">LessThan</element><element name="valueFrom">620</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [#VASUMM.X23] < 620
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 31: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":12,"MilestoneID":"2","advancedCode":"If [#353] > \"80.01\" and [232] = \"\" and [1172] = \"Conventional\"\r\n  Fail(\"Monthly Mortgage Insurance is required.  Please get estimate.\")\r\nEnd if"}
- **ruleID**: 12
- **ruleName**: Missing MI Conventional
- **lastModTime**: 2013-01-03T11:00:04.95
- **advancedCode**: [3532] <> "Y" and [3533] <> "Y"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsYesNo</element><element name="fieldID">3532</element><element name="criterionName"></element><element name="fieldDescription">Charges for the insurance are collected upfront at loan closing</element><element name="opType">IsNotYes</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsYesNo</element><element name="fieldID">3533</element><element name="criterionName"></element><element name="fieldDescription">Lender Paid Mortgage Insurance</element><element name="opType">IsNotYes</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [3532] <> "Y" and [3533] <> "Y"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 32: Unnamed

- **lstFields**: [0 items]
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [1 items]
  - {"ruleID":18,"MilestoneID":"2","advancedCode":"If [#353] = \"\"\r\n  Fail(\"Monthly Mortgage Insurance is required.  Please get estimate.\")\r\nEnd if"}
- **ruleID**: 18
- **ruleName**: Missing MI Gov't
- **lastModTime**: 2013-01-02T11:29:00.933
- **advancedCode**: [232] = "" and [1172] = "FHA"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsString</element><element name="fieldID">232</element><element name="criterionName"></element><element name="fieldDescription">Expenses Proposed Mtg Ins</element><element name="opType">IsExact</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsOptionList</element><element name="fieldID">1172</element><element name="criterionName">Loan.LoanType</element><element name="fieldDescription">Loan Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">FHA</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">FHA</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [232] = "" and [1172] = "FHA"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 33: Unnamed

- **lstFields**: [16 items]
  - {"ruleID":21,"fieldID":"1197","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"1403","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"1531","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"175","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"176","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"178","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"266","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"4004","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"464","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"478","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"84","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"97","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"FR0204","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"FR0206","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"FR0207","MilestoneID":"2"}
  - {"ruleID":21,"fieldID":"FR0208","MilestoneID":"2"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 21
- **ruleName**: CoBorrower Required Fields
- **lastModTime**: 2014-07-30T12:47:32.453
- **advancedCode**: [4006] <> ""
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsString</element><element name="fieldID">4006</element><element name="criterionName"></element><element name="fieldDescription">Co-Borrower Last Name</element><element name="opType">IsNot</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [4006] <> ""
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 34: Unnamed

- **lstFields**: [3 items]
  - {"ruleID":23,"fieldID":"1240","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
  - {"ruleID":23,"fieldID":"3164","MilestoneID":"2"}
  - {"ruleID":23,"fieldID":"3983","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 23
- **ruleName**: TRID Milestone Requirements - JR 20150903
- **lastModTime**: 2015-09-04T12:12:01
- **advancedCode**: [3969] = "RESPA-TILA 2015 LE and CD"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsOptionList</element><element name="fieldID">3969</element><element name="criterionName"></element><element name="fieldDescription">Use New LE, CD, GFE And HUD</element><element name="opType">IsAnyOf</element><element name="valueFrom">RESPA-TILA 2015 LE and CD</element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">TILARESPA2015LEandCD</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [3969] = "RESPA-TILA 2015 LE and CD"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 35: Unnamed

- **lstFields**: [1 items]
  - {"ruleID":24,"fieldID":"1268","MilestoneID":"2546dc52-6cd4-4fa3-8d8e-fc8c4fcac3f2"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 24
- **ruleName**: TRID Milestone Requirements, Co-Borrower  - JR 20150903
- **lastModTime**: 2015-09-04T12:12:03
- **advancedCode**: [3969] = "RESPA-TILA 2015 LE and CD" and [4006] <> ""
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsOptionList</element><element name="fieldID">3969</element><element name="criterionName"></element><element name="fieldDescription">Use New LE, CD, GFE And HUD</element><element name="opType">IsAnyOf</element><element name="valueFrom">RESPA-TILA 2015 LE and CD</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">TILARESPA2015LEandCD</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsString</element><element name="fieldID">4006</element><element name="criterionName"></element><element name="fieldDescription">Co-Borrower Last Name</element><element name="opType">IsNot</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [3969] = "RESPA-TILA 2015 LE and CD" and [4006] <> ""
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

## Requirement 36: Unnamed

- **lstFields**: [3 items]
  - {"ruleID":39,"fieldID":"1040","MilestoneID":"4"}
  - {"ruleID":39,"fieldID":"VEND.X167","MilestoneID":"4"}
  - {"ruleID":39,"fieldID":"VEND.X177","MilestoneID":"4"}
- **lstDocs**: [0 items]
- **lstTasks**: [0 items]
- **lstCode**: [0 items]
- **ruleID**: 39
- **ruleName**: Agency Number Requirements for Conv loans
- **lastModTime**: 2017-12-18T16:30:26.047
- **advancedCode**: [1172] = "Conventional" and [3265] = "Y"
- **advancedCodeXml**: <objdata><element name="root"><element name="0"><element name="fieldType">IsOptionList</element><element name="fieldID">1172</element><element name="criterionName">Loan.LoanType</element><element name="fieldDescription">Loan Type</element><element name="opType">IsAnyOf</element><element name="valueFrom">Conventional</element><element name="valueTo"></element><element name="jointToken">And</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription">Conventional</element><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element><element name="1"><element name="fieldType">IsYesNo</element><element name="fieldID">3265</element><element name="criterionName"></element><element name="fieldDescription">REGZ-TIL Interest Rate and Payment Summary Table - Include Private Mortgage Insurance</element><element name="opType">IsYes</element><element name="valueFrom"></element><element name="valueTo"></element><element name="jointToken">Nothing</element><element name="leftParentheses">0</element><element name="rightParentheses">0</element><element name="valueDescription" null="1" /><element name="volatile">False</element><element name="forceDataConversion">False</element><element name="dataSource">Loan</element></element></element></objdata>
- **status**: 0
- **Condition**: 9
- **ConditionState**: [1172] = "Conventional" and [3265] = "Y"
- **Condition2**: 0,1,2,3,4
- **ConditionState2**: 
- **RoleID**: -1

---

