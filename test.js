var webdriver  = require('selenium-webdriver');
var i;
//var jse = (JavascriptExecutor)driver;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('localhost:5000');
//--------------------------------------------new testcase starts---------------------------------------------

driver.manage().window().maximize();
driver.sleep(1000);


driver.findElement(webdriver.By.linkText("new")).click();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("How Many Bitcoins Did Satoshi Nakamoto Mine?")).click();
driver.sleep(3000);

driver.navigate().back();

driver.findElement(webdriver.By.linkText("propman")).click();
driver.sleep(3000);

driver.navigate().back();

driver.findElement(webdriver.By.xpath("html/body/div[1]/div[1]/div[1]/div[2]/div[2]/ol[1]/li[7]/div[2]/a")).click();
driver.sleep(3000);

driver.navigate().back();
driver.sleep(2000);
driver.navigate().back();

driver.sleep(2000);
driver.findElement(webdriver.By.xpath("//a[@href='#/news?page=2']")).click();

driver.sleep(5000)
//--------------------------------------------new testcase ends---------------------------------------------
//--------------------------------------------comments testcase starts---------------------------------------------
driver.findElement(webdriver.By.linkText('comments')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('link')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('parent')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('view on Hacker News')).click();
driver.sleep(5000);
driver.navigate().back();
// driver.sleep(5000);
// driver.navigate().back();
//driver.navigate().back();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('reply')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('Forgot your password?')).click();
driver.sleep(5000);
driver.navigate().back();
driver.sleep(5000);
driver.navigate().back();
driver.sleep(5000);
// driver.navigate().back();
// driver.sleep(5000);

driver.findElement(webdriver.By.linkText('comments')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('parent')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('parent')).click();
driver.sleep(5000);

driver.findElement(webdriver.By.linkText('view on Hacker News')).click();
driver.sleep(5000);
driver.navigate().back();
driver.navigate().back();
driver.navigate().back();
driver.sleep(5000);
//--------------------------------------------comments testcase ends---------------------------------------------
//--------------------------------------------Show testcase starts-------------------------------------------------
driver.findElement(webdriver.By.linkText("show")).click();
driver.sleep(3000);
driver.findElement(webdriver.By.linkText("Show HN: Counting Foot Traffic Over IP Webcams")).click();
driver.sleep(3000);
driver.navigate().back();
driver.sleep(3000);
driver.findElement(webdriver.By.xpath("//*[@href='#/user/brianyu8']")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.xpath("//*[@href='#/story/15874866']")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.linkText("More")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.linkText("insin/react-hn")).click();
driver.sleep(3000);
driver.navigate().back();
//--------------------------------------------Show testcase ends---------------------------------------------------
//--------------------------------------------ask testcase start---------------------------------------------------
driver.findElement(webdriver.By.linkText("ask")).click();
driver.sleep(3000);
driver.findElement(webdriver.By.linkText("Ask HN: I'm a solopreneur and I feel demoralised")).click();
driver.sleep(3000);
driver.navigate().back();
driver.sleep(3000);
driver.findElement(webdriver.By.xpath("//*[@href='#/user/ministrator']")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.xpath("//*[@href='#/story/15869467']")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.linkText("More")).click();
driver.sleep(3000);
driver.navigate().back();

driver.sleep(3000);
driver.findElement(webdriver.By.linkText("insin/react-hn")).click();
driver.sleep(3000);
driver.navigate().back();
//-------------------------------------------ask testcase ends-----------------------------------------------------
//-------------------------------------------jobs testcase starts--------------------------------------------------
driver.findElement(webdriver.By.linkText("jobs")).click();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("Drchrono (YC11) needs VP Engineering: Build stuff that matters in healthcare")).click();
driver.navigate().back();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("DoorDash (YC S13) is building out our enterprise sales team")).click();
driver.navigate().back();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("Zendar Is Hiring an Embedded Software Engineer")).click();
driver.navigate().back();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("EasyPost is hiring for everything")).click();
driver.navigate().back();
driver.sleep(3000);

driver.findElement(webdriver.By.linkText("Simple Habit Is Hiring a Head of Design")).click();
driver.navigate().back();
//------------------------------------------job testcase ends--------------------------------------------------------
driver.findElement(webdriver.By.linkText("settings")).click();
driver.sleep(3000);
driver.navigate().back();
driver.close();
