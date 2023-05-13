package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en_scouse.An;
import org.example.pageObject.CheckoutPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CheckoutSteps {
    private WebDriver webDriver;

    public CheckoutSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("User input \"(.*)\" as first name, \"(.*)\" as last name \"(.*)\" as postal code")
    public void inputInformation(String firstName, String lastName, String postalCode) throws InterruptedException {
        CheckoutPage checkoutPage = new CheckoutPage(webDriver);
        checkoutPage.setFirstName(firstName);
        checkoutPage.setLastname(lastName);
        checkoutPage.setPostalcode(postalCode);
        checkoutPage.ClickContinuebtn();
    }

    @Then("User see Total Payment \"(.*)\" on page checkout overview and click finish button")
    public void verifyTotalPayment(String totalPayment){
        CheckoutPage checkoutPage = new CheckoutPage(webDriver);
        Assert.assertEquals(totalPayment, checkoutPage.verifyTotalPayment());
        checkoutPage.ClickButtonfinish();
    }

    @Then("User redirect to checkout complete page")
    public void verifyThankyoupage(){
        CheckoutPage checkoutPage = new CheckoutPage(webDriver);
        Assert.assertTrue(checkoutPage.verifyThankyoupage());
    }

}
