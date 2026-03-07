# Business Rules - Transpiled Code

These are the VBScript business rules transpiled to JavaScript for readability.

## generated

```json
"2026-02-21T23:37:29.547Z"
```

## stats

```json
{
  "total": 1679,
  "success": 1679,
  "failed": 0,
  "todoLines": 109,
  "totalJsChars": 917981
}
```

## byType

```json
{
  "TriggerEvent": {
    "total": 1169,
    "success": 1169,
    "failed": 0,
    "skippedXml": 0
  },
  "FieldTrigger": {
    "total": 229,
    "success": 229,
    "failed": 0,
    "skippedXml": 88
  },
  "FieldEntryRule": {
    "total": 175,
    "success": 175,
    "failed": 0,
    "skippedXml": 76
  },
  "MilestoneCode": {
    "total": 23,
    "success": 23,
    "failed": 0,
    "skippedXml": 0
  },
  "MilestoneReq": {
    "total": 12,
    "success": 12,
    "failed": 0,
    "skippedXml": 0
  },
  "FieldAccessRule": {
    "total": 44,
    "success": 44,
    "failed": 0,
    "skippedXml": 0
  },
  "LoanAccessRule": {
    "total": 15,
    "success": 15,
    "failed": 0,
    "skippedXml": 0
  },
  "PrintFormRule": {
    "total": 8,
    "success": 8,
    "failed": 0,
    "skippedXml": 0
  },
  "PrintFormItem": {
    "total": 4,
    "success": 4,
    "failed": 0,
    "skippedXml": 0
  }
}
```

## rules

```json
[
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#1', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#2', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#3', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#4', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#5', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 5,
    "ruleName": "Bor Pair 1-6 MID FICO Calc Trigger - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.ignoreValidationErrors = true;\nctx.setField('VASUMM.X23#6', ctx.getField('CX.PAIRS16'));\nlet V = null;\nV = ctx.getField('VASUMM.X23');\nctx.setField('VASUMM.X23', \"\");\nctx.setField('VASUMM.X23', V);\n})",
    "jsCondition": null,
    "triggerFieldID": "CX.PAIRS16",
    "fieldRefs": [
      "VASUMM.X23",
      "CX.PAIRS16"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 125,
    "jsLength": 227
  },
  {
    "ruleType": "TriggerEvent",
    "ruleID": 7,
    "ruleName": "UPDATE: Disbursement Date for Non Refis - PSO - 12/11/2013",
    "codeType": "eventCode",
    "jsCode": "(async function(ctx) {\nctx.getField('Action: Copy');\n})",
    "jsCondition": null,
    "triggerFieldID": "748",
    "fieldRefs": [
      "Action: Copy"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 14,
    "jsLength": 55
  },
  {
    "ruleType": "FieldTrigger",
    "ruleID": 8,
    "ruleName": "UPDATE: Disbursement for O/O Refis - PSO - 12/11/2013",
    "codeType": "advancedCode",
    "jsCode": "(async function(ctx) {\n(ctx.getField('19') === \"NoCash-Out Refinance\" || ctx.getField('19') === \"Cash-Out Refinance\") && (ctx.getField('1811') === \"PrimaryResidence\" || !(ctx.getField('1811') === \"Investor\" || ctx.getField('1811') === \"SecondHome\"));\n})",
    "jsCondition": null,
    "triggerFieldID": null,
    "fieldRefs": [
      "19",
      "1811"
    ],
    "hasTodos": false,
    "todoCount": 0,
    "originalLength": 150,
    "jsLength": 253
  },
  {
    "ruleType": "FieldTrigger",
    "ruleID": 8,
    "ruleName": "UPDATE: Disbursement for O/O Refis - PSO - 12/11/2013",
    "codeType": "advanc
```

