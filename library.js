const webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until

        const driver = new webdriver.Builder().forBrowser('chrome').build()

        driver.get('https://www.youtube.com/')

        driver.findElement(By.css('#search')).sendKeys('coding')
        driver.findElement(By.css('#search-icon-legacy')).click()
        driver.findElement(By.css('#thumbnail')).click()


        


        

        
