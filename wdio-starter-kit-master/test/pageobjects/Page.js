function Page () {}

Page.prototype.open =
Page.prototype.openHome =
Page.prototype.openNew =
Page.prototype.openComments =
Page.prototype.openShow =
Page.prototype.openAsk =
Page.prototype.openAsk =
Page.prototype.openJobs = function (path) {
    browser.url(path)
}

module.exports = new Page()




