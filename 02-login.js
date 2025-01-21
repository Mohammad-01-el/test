// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {
        // login test
        //////////////////////////////////////////////////////
        await this.driver.get("https://emieza.ieti.site/admin/login/");
        

        // 1 cercar login box
        // 2 posar usuari i pass
        // 3 boto send .click()

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();