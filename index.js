const {Builder, By, Key, util} = require("selenium-webdriver");
async function stepOne() {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://auth.sandbox.d.greeninvoice.co.il/signup");
  await driver.findElement(By.id("name")).sendKeys("green automationtest", Key.RETURN)
  await driver.findElement(By.id("email")).sendKeys("testgreeninvoice@mailsac.com", Key.RETURN)
  await driver.findElement(By.id("password")).sendKeys("password1test!", Key.RETURN)
  await driver.findElement(By.id("terms")).click()
  await driver.findElement(By.id("marketing")).click()
  await driver.findElement(By.className("gi-button gi-button--blue-350 gi-button--md")).click()
}

async function stepTwo() {
  try {
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://mailsac.com/inbox/testgreeninvoice@mailsac.com");

    await driver.findElement(By.className("col-xs-4")).click()
    await driver.findElement(By.css("ng-href[/dirty/testgreeninvoice@mailsac.com/hs53diYgl439nkKY13XTQFAe-0]")).click()

    await driver.findElement(By.css("-moz-border-radius: 100vh; -webkit-border-radius: 100vh; border-radius: 100vh;")).click()
    await driver.get("https://sandbox.d.greeninvoice.co.il/app/account/boarding#step=kickoff");    
  } catch (error) {
    console.log(error)
  }
}

stepTwo()
//driver.close();
