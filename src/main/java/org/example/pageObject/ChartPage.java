package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ChartPage {
    public static WebDriver driver;
    public ChartPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        ChartPage.driver = driver;
    }

    @FindBy(id = "checkout")
    private WebElement btnCheckout;
    public void ClickCheckoutButton(){
        btnCheckout.click();
    }
}
