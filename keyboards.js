import {Markup} from 'telegraf'

export function getMainMenu() {
    return Markup.keyboard([
        ['Are you an artist?', 'Are you PSP tagger?'],
        ['Do you need illustrations for business?'],
        ['Go to Tasks Menu']
    ]).resize()
}

export function getTaskMenu() {
    return Markup.keyboard([
        ['Here will be your tasks', `Add a task`],
        ['Main Menu']
    ]).resize()
}



export function yesNoKeyboard() {
    return Markup.inlineKeyboard([
        Markup.callbackButton('Yes', 'yes'),
        Markup.callbackButton('No', 'no')
    ], {columns: 2})
}