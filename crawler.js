const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request');

function download(uri, filename) {
	return new Promise((resolve, reject) => {
		request.head(uri, function (err, res, body) {
			request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);
		});
	});
}

async function getVisual() {
	try {
        // season 1 episode 1
		const URL = 'https://www.facebook.com/media/set/?vanity=EverySpongeInOrder&set=a.2163939183725382';
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(URL);
		await page.mainFrame().waitForTimeout(1000);
		await page.mouse.click(50, 100, { button: 'left' });
		await page.mainFrame().waitForTimeout(1000);
		const imageUrl = await page.evaluate(
			() => document.querySelector('img[data-visualcompletion="media-vc-image"]')
		);
		//await download(imageUrl, 'image.jpeg');
		await browser.close();
	} catch (error) {
		console.error(error);
	}
}

getVisual();