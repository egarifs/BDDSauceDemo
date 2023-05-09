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
formatter.before({
  "duration": 9283638794,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User input \"standar_user\"as userName and input \"secret_sauce\"as password",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "standar_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 48
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 10345633336,
  "status": "passed"
});
formatter.after({
  "duration": 121762138,
  "status": "passed"
});
});