module.exports = {
  apps: [
    {
      name: "plast_lviv_test",
      script: "node-red",
      args: "-s settings.js -u ./",
      watch: false,
      node_args: "--max_old_space_size=1500",
      autorestart: true,
      env: {
        NODE_ENV: "LOCAL",

        CUSTOMER_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-customer-api',
        CUSTOMER_API_KEY: '?aM-dUZVF@ZWJvq5Y2?Bfrs5j=A9?+sb',

        MESSAGES_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-messages-api',
        MESSAGES_API_KEY: 'h5@8WzM%KFhxMf!r!P_m6WM=VJvgef?q',

        BOT_ID: '3',
        CHANNEL: 'TG',
        COMPANY_ID: '43',
        PORT:1880,
        TOKEN: '5168155009:AAFVBTePW1q2HBzihyj2UXRCtrIQqeKyjkg',
        bot_version: '0.0.1',
        TELEGRAM_URL: 'https://api.telegram.org'
      }/*,
      env_dev: {
      }*/
    },
  ],
};
