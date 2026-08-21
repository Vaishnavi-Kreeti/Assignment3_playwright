const {test,expect}=require('@playwright/test')
const base_url="https://app.thetestingacademy.com/playwright/ttacart/?utm_source=chatgpt.com"

test("login ui",async function ({page}){
    await page.goto(base_url)
    
});