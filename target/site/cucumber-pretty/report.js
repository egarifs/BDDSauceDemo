$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Checkout.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout",
  "description": "As a user i want to successfully checkout product",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Checkout"
    }
  ]
});
formatter.before({
  "duration": 9263632613,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Check when user can checkout the product",
  "description": "",
  "id": "checkout;check-when-user-can-checkout-the-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Chosess backpack, backlight and click Chart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input \"Ega\" as first name, \"Rijki\" as last name \"45554\" as postal code",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User see Total Payment \"Total: $43.18\" on page checkout overview and click finish button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User redirect to checkout complete page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 162646263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 275389325,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.clickBackPage()"
});
formatter.result({
  "duration": 227871686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ega",
      "offset": 12
    },
    {
      "val": "Rijki",
      "offset": 33
    },
    {
      "val": "45554",
      "offset": 54
    }
  ],
  "location": "CheckoutSteps.inputInformation(String,String,String)"
});
formatter.result({
  "duration": 226085131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total: $43.18",
      "offset": 24
    }
  ],
  "location": "CheckoutSteps.verifyTotalPayment(String)"
});
formatter.result({
  "duration": 67433719,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyThankyoupage()"
});
formatter.result({
  "duration": 14028395,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".complete-headeraaaa\"}\n  (Session info: chrome\u003d113.0.5672.92)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:8f7:a74d:f654:3e4d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.6.5\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0e6fe4bd6453ce6af1019fa44fb5883c, findElement {using\u003dcss selector, value\u003d.complete-headeraaaa}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.92, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: /var/folders/01/0wzchr6x6ld...}, goog:chromeOptions: {debuggerAddress: localhost:50129}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:50129/devtoo..., se:cdpVersion: 113.0.5672.92, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0e6fe4bd6453ce6af1019fa44fb5883c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\n\tat org.example.pageObject.CheckoutPage.verifyThankyoupage(CheckoutPage.java:60)\n\tat step_definitions.CheckoutSteps.verifyThankyoupage(CheckoutSteps.java:38)\n\tat ✽.Then User redirect to checkout complete page(features/Checkout.feature:11)\n",
  "status": "failed"
});
formatter.after({
  "duration": 160761185,
  "status": "passed"
});
});