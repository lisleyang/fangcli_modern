var seleniumServer = require('selenium-server');

module.exports = {
	"src_folders": ["test/e2e/specs"],
	"output_folder": "test/e2e/reports",
	"custom_commands_path": "",
  "custom_assertions_path": "",
  "globals_path": "",
  "marionette": false,

	"selenium": {
		"start_process": true,
		"server_path": seleniumServer.path,
		"host": "127.0.0.1",
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./bin/drivers/chromedriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "http://dev.matthewroach.me/login/",
			"selenium_host": "localhost",
			"selenium_port": 4444,
			"pathname": "/wd/hub",
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome"
			}
		},

		"ci": {
			"desiredCapabilities": {
				"browserName": "firefox"
			}
		},
	}
}
