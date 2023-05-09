package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public static WebDriver driver;

    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(id = "user-name")
    private WebElement userName;

    @FindBy(id = "password")
    private WebElement password;

    @FindBy(name = "login-button")
    private WebElement btnLogin;

    public void setUserName(String user){
        userName.sendKeys(user);
    }

    public void setPassword(String psd){
        password.sendKeys(psd);
    }

    public void clickLogin(){
        btnLogin.click();
    }



}
