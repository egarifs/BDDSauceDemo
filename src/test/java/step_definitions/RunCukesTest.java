package step_definitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        tags = {"@Checkout"},//class mana yang akan di jalankan
        features = {"classpath:features/"}, //package class
        glue = { "classpath:step_definitions"}, //package folder
        plugin= {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"}
)
public class RunCukesTest {
}
