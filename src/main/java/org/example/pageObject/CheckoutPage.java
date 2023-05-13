package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage {
    public static WebDriver driver;
    public CheckoutPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        CheckoutPage.driver = driver;
    }

    @FindBy(name = "firstName")
    private WebElement firstnameField;
    @FindBy(id = "last-name")
    private WebElement lastnameField;
    @FindBy(id = "postal-code")
    private WebElement postalcodeField;
    @FindBy(id = "continue")
    private WebElement btnContinue;
    @FindBy(css = ".summary_total_label")
    private WebElement totalPayment;
    @FindBy(id = "finish")
    private WebElement buttonFinish;
    @FindBy(css = ".complete-header")
    private WebElement thankyouPage;


    public void setFirstName(String firstName){
        firstnameField.sendKeys(firstName);
    }
    public void setLastname(String lastName){
        lastnameField.sendKeys(lastName);
    }
    public void setPostalcode(String postalCode){
        postalcodeField.sendKeys(postalCode);
    }
    public void ClickContinuebtn(){
        btnContinue.click();
    }
    public String verifyTotalPayment(){
        return totalPayment.getText();
    }
    public void ClickButtonfinish(){
        buttonFinish.click();
    }
    public boolean verifyThankyoupage(){
        return thankyouPage.isDisplayed();
    }

}
