package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SalesPage {
    public static WebDriver driver;
    public SalesPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        SalesPage.driver = driver;
    }

    @FindBy(id = "add-to-cart-sauce-labs-backpack")
    private WebElement backPack;
    @FindBy(id = "add-to-cart-sauce-labs-bike-light")
    private WebElement bikeLigh;
    @FindBy(className = "shopping_cart_link")
    private WebElement Chart;
    @FindBy(xpath ="//div[@class='app_logo']")
    private WebElement verifySalesPage;
    public boolean verifySalesPage(){
        return verifySalesPage.isDisplayed();
    }
    public void clickBackpack(){
        backPack.click();
    }
    public void clickBacklight(){
        bikeLigh.click();
    }
    public void clickChart(){
        Chart.click();
    }
}


