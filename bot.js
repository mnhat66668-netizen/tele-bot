const TelegramBot = require('node-telegram-bot-api');

// dán token vào đây
const token = process.env.8521475474:AAF6G7RxS85lE2YiKEebagPVNtparN5aVZA;

const bot = new TelegramBot(token, { polling: true });

// khi bấm /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendPhoto(chatId, 'https://i.ibb.co/NgzF8Sy4/anh.jpg', {
        caption: `🎁 Tặng Bạn Code 188k !

✅ Chơi Hũ Cá 1 Vòng Rút

https://t.me/+866e7om1c2owMmVl`,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🎯 VÀO NHÓM NHẬN LỘC",
                        url: "https://t.me/+866e7om1c2owMmVl"
                    }
                ]
            ]
        }
    });
});