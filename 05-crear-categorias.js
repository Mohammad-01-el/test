// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');
require("dotenv").config();
console.log(process.env); 


class MyTest extends BaseTest
{
	async test() {
        // Login test
        //////////////////////////////////////////////////////
        var site = process.env.URL;
        await this.driver.get(site+"/admin/login");

        //1 cercar login box
        let usernameInput = await this.driver.wait(until.elementLocated(By.id('id_username')), 10000);
        let passwordInput = await this.driver.wait(until.elementLocated(By.id('id_password')), 10000);
       
        //2 posar usuari i pass
        usernameInput.sendKeys(process.env.usuari);
        passwordInput.sendKeys(process.env.contrasenya);

        
        //3 boto send .click()
        let sendButton = await this.driver.wait(until.elementLocated(By.css('input[value="Iniciar sessió"]')), 10000);
        sendButton.click();


        //4 afegir categoria click
        let trCategories = await this.driver.wait(until.elementLocated(By.xpath('//a[@href="/admin/biblio/categoria/add/"]')), 10000);
        trCategories.click();
        
        //5 crear categoria
        await this.driver.wait(until.elementLocated(By.css('input[name="nom"]')), 10000).sendKeys("Temàtica");
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        //6 crear fills
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.findElement(By.name("nom")).sendKeys("acció");
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Temàtica']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();


        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.findElement(By.name("nom")).sendKeys("història");
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Temàtica']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();


        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.findElement(By.name("nom")).sendKeys("comèdia");
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Temàtica']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();


        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();
        await this.driver.findElement(By.name("nom")).sendKeys("romanç");
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='Temàtica']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();


        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();
