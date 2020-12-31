const puppeteer = require('puppeteer')

async function getVisual() {
	try {
        // season 1 episode 1
		const URL = 'https://www.facebook.com/media/set/?vanity=EverySpongeInOrder&set=a.2163939183725382';
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

        await page.goto(URL);
        await page.mouse.click(0, 0, { button: 'left' });
		await page.screenshot({ path: 'screenshot.png' });
		//await page.pdf({ path: 'page.pdf' });

		await browser.close();
	} catch (error) {
		console.error(error);
	}
}

getVisual();