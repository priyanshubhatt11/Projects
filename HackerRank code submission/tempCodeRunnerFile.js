await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.keyboard.up("Control");
    await page.waitAndClick(".monaco-editor.no-user-select.vs" , page);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", {delay: 50});
