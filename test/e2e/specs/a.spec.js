module.exports = {
    'default e2e tests': function (browser) {

      browser
        .url('http://www.baidu.com')
        .end()
    }
  }