package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en_scouse.An;
import org.example.pageObject.ChartPage;
import org.example.pageObject.CheckoutPage;
import org.example.pageObject.SalesPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SalesSteps {
    private WebDriver webDriver;
    public SalesSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User already on sales page")
    public void verifySalesPage(){
        SalesPage salesPage = new SalesPage(webDriver);
        Assert.assertTrue(salesPage.verifySalesPage());
    }
    @And("User Chosess backpack, backlight and click Chart button")
    public void clickBackPage() throws InterruptedException {
        SalesPage salesPage = new SalesPage(webDriver);
        ChartPage chartPage = new ChartPage(webDriver);
        salesPage.clickBackpack();
        salesPage.clickBacklight();
        salesPage.clickChart();
        chartPage.ClickCheckoutButton();
    }
    @And("User click Chart icon")
    public void clickChart(){
    }

}
