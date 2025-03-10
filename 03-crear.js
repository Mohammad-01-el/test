// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

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


        //5 click en afegir llibre
        let trLLibres = await this.driver.wait(until.elementLocated(By.xpath('//a[@href="/admin/biblio/llibre/add/"]')), 10000);
        trLLibres.click();


        //6 escriure títol
        let titolInput = await this.driver.wait(until.elementLocated(By.id('id_titol')), 10000);
        titolInput.sendKeys("Mar");

        //7 click en DESAR
        let saveButton = await this.driver.wait(
            until.elementLocated(By.xpath('//input[@type="submit" and @value="Desar"]')),
            15000
        );
        saveButton.click();




        console.log("TEST OK");
	}
}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();
