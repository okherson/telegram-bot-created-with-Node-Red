module.exports = {
  apps: [
    {
      name: "plast_lviv_test",
      script: "node-red",
      args: "-s settings.js -u ./",
      watch: false,
      nade_args: "--max_old_space_size=1500",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      env: {
        NODE_ENV: "local",
        PORT: 1880,
        TOKEN: '',
        bot_version: '0.0.1',
        TELEGRAM_URL: 'https://api.telegram.org'
        
      }
    },
  ],
};