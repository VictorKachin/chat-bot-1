import express from 'express'
import {PORT, TOKEN} from './config.js'
import {Telegraf} from 'telegraf'
import {getMainMenu, getTaskMenu, yesNoKeyboard} from "./keyboards.js";

const app = express()
const bot = new Telegraf(TOKEN)


bot.start(ctx => {
    ctx.reply('Welcome to PicsForDesign.com!', getMainMenu())
})

bot.hears('Go to Tasks Menu', ctx => {
    ctx.reply('Menu of the tasks', getTaskMenu())
})

bot.hears('Main Menu', ctx => {
    ctx.reply('Select the section you are interested in:', getMainMenu())
})

bot.hears('Are you an artist?', ctx => {
    ctx.replyWithPhoto(
        'https://picsfordesign.com//images/i/exclusive.jpg',
        {
            caption: 'PicsForDesign Exclusive Club - join now and enjoy:\n' +
                '\n' +
                '    1. Full-size previews for all PSP tubes\n' +
                '    2. Free downloads from the exclusive catalogue\n' +
                '    3. Extras for prepaid project investments\n' +
                '    4. Guaranteed monthly loyalty bonus\n'
        })
    ctx.replyWithHTML(
        `About <a href='https://picsfordesign.com/en/main/exclusive.pix'>Exclusive Club</a>`
    )
})

bot.hears('Are you PSP tagger?', ctx => {
        ctx.replyWithPhoto(
            'https://picsfordesign.com/images/i/license/std.png',
            {
                caption: 'PU Only Licenses - is only for personal online or digital use. \n'
            }
        )
        ctx.replyWithHTML(
            `Read more: <a href='https://picsfordesign.com/en/license/pu_license.pix'>PU Only</a>`
        )
    }
)

bot.hears('Do you need illustrations for business?', ctx => {
    ctx.replyWithPhoto(
        'https://picsfordesign.com/images/i/license/ext3.png',
        {
            caption: 'CU Unlimited is for Unlimited Royalty Free License. ' +
                'It is suitable for commercial use of the picture and its alteration, ' +
                'for creating digital and/or printed products intended for selling. ' +
                'You can alter pictures under this license, including recolor them, ' +
                'use different parts of the drawing or the full body image. '
        }
    )
    ctx.replyWithHTML(
        `Read more: <a href='https://picsfordesign.com/en/license/cu_unlimited_license.pix'>CU Unlimited</a>`
    )
})

// bot.hears('Add a task', ctx => {
//     ctx.replyWithHTML(
//         `Do you really want to add a <b>task</b>?`
//     )
// })

bot.on('text', ctx => {
    ctx.replyWithHTML(
        `Do you really want to add a <b>task</b>?`,
        // yesNoKeyboard()
    )
})


bot.hears('Привет', ctx => {
    ctx.reply('И вам здрасте!')
})

bot.command('time', ctx => {
    ctx.reply(String(new Date()))
})

bot.on('voice', ctx => {
    ctx.reply('You have a nice voice!')
})

bot.on('sticker', ctx => {
    ctx.reply('Cool sticker!')
})

bot.on('edited_message', ctx => {
    ctx.reply('You have successfully changed your message!')
})


bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))
