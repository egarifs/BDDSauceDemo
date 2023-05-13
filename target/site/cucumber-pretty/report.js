$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user I want to login website sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#  Scenario: Normal login"
    },
    {
      "line": 6,
      "value": "#    Given User already on website sauce demo"
    },
    {
      "line": 7,
      "value": "#    When User input \"standar_user\"as userName and input \"secret_sauce\"as password"
    },
    {
      "line": 8,
      "value": "#    Then User already on sales page"
    }
  ],
  "line": 10,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cuserName\u003e\" as userName and input \"\u003cpasswd\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "passwd",
        "errorText"
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "standar_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "test",
        "test",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11362086245,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standar_user\" as userName and input \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 522473256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standar_user",
      "offset": 12
    },
    {
      "val": "",
      "offset": 49
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 349142129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 45257625,
  "status": "passed"
});
formatter.after({
  "duration": 295406933,
  "status": "passed"
});
formatter.before({
  "duration": 4180139734,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\" as userName and input \"secret_sauce\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 43165115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 331935831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 39972899,
  "status": "passed"
});
formatter.after({
  "duration": 177691892,
  "status": "passed"
});
formatter.before({
  "duration": 3024271786,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"test\" as userName and input \"test\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 45583368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "test",
      "offset": 41
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 316016750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 39236033,
  "status": "passed"
});
formatter.after({
  "duration": 164936539,
  "status": "passed"
});
});