const { Options } = require("selenium-webdriver/chromium");

for (var year = 2014; year <= 2050; year ++){
    var date = new Date(Date.UTC(year, 1, 1));
    if (date.getDay()== 1 )
    console.log(new Intl.DateTimeFormat('en-GB', {dateStyle: 'full', timeStyle:'long'}).format(date));
}