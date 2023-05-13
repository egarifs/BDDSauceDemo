package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SalesPage {

    public static WebDriver driver;

    public SalesPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath ="//div[@class='app_logo']")
    private WebElement verifySalesPage;

    public boolean verifySalesPage(){
        return verifySalesPage.isDisplayed();
    }
}


