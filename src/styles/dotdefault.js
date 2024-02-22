export const defaultGlobalStyles = {
    accent1: 'bg-white',
    accent2: 'bg-blue-300',
    accent3: 'bg-blue-100',
    borderRadius: 'rounded-lg',
    borderColor: 'border-zinc-200 dark:border-zinc-700',
    borderWeight: 'border-2',
    focused: 'focus-visible:outline-none focus-visible:ring-blue-400 focus-visible:ring focus-visible:border-0 transition-colors',
    disabled: 'disabled:cursor-not-allowed disabled:opacity-50',
    errorColor: 'bg-red-500',
    successColor: 'bg-green-500',
    warningColor: 'bg-yellow-500',
}

export const classOrderArray = {
    "text": ["text", "text1", "text2", "text3", "text4", "text5", "text6", "textLabel", "textBody", "textMuted", "textAccent", "textQuote"],
    "btn": ["btn", "btnPrimary","btnSecondary", "btnOutline", "btnDanger"],
    "icon": ["icon", "iconSmall"],
    "input": ["input", "inputMain"],
    "card": ["card", "cardDefault", "cardUtil"],
    "div": ["div", "divDivider", "divLayoutContainer"],
    "badge": ["badge", "badgeRounded"]
}

export const defaultStyles = {
    "div": {
        "borderColor": ["border border-zinc-300 dark:border-zinc-600"],
        "container": ["flex"],
    },
    "divDivider": {
        "container": ["w-full h-px"],
        "base": [""],
    },
    "divLayoutContainer": {
        "bgColor": ["bg-white dark:bg-black"],
        "borderRadius": ["rounded-lg"],
        "shadow": ["shadow-md"],
        "container": ["p-4"],
        "base": [""],
    },
    "input": {
        "focus": ["focus-visible:outline-none focus-visible:border-2 focus-visible:border-blue-400 dark:focus-visible:border-blue-400"],
        "disabled": ["disabled:cursor-not-allowed disabled:opacity-50"],
        "invalid": ["invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500"],
        "container": ["flex justify-center items-center p-2 pl-3 transition-colors"],
    },
    "inputMain": {
        "bgColor": ['bg-white dark:bg-zinc-900'],
        "textSize": ['text-sm'],
        "textColor": ['text-black dark:text-white'],
        "placeholder": ['placeholder-zinc-400 dark:placeholder-zinc-600'],
        "dimensions": ["h-9"],
        "shadow": ["shadow-sm"],
        "borderWeight": ["border"],
        "borderColor": ["border-zinc-300 dark:border-zinc-700"],
        "borderRadius": ["rounded-md"],
        "base": [""],
    },
    "text":{
        "spacing": [''],
    },
    "text1": {
        "textSize": ["text-5xl"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-extrabold"],
        "base": [""],
    },
    "text2": {
        "textSize": ["text-3xl"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-semibold"],
        "base": [""],
    },
    "text3": {
        "textSize": ["text-2xl"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-bold"],
        "base": [""],
    },
    "text4": {
        "textSize": ["text-lg"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-semibold"],
        "base": [""],
    },
    "text5": {
        "textSize": ["text-sm"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-semibold"],
        "base": [""],
    },
    "text6": {
        "textSize": ["text-xs"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-normal"],
        "base": [""],
    },
    "textLabel": {
        "textSize": ["text-xs"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-semibold"],
        "base": [""],
    },
    "textBody": {
        "textSize": ["text-sm"],
        "textColor": ["text-black dark:text-white"],
        "font": ["font-normal"],
        "base": [""],
    },
    "textMuted": {
        "textSize": ["text-sm"],
        "textColor": ["text-zinc-600 dark:text-zinc-400"],
        "font": ["font-normal"],
        "base": [""],
    },
    "textAccent": {
        "textSize": ["text-sm"],
        "textColor": ["text-blue-400"],
        "font": ["font-normal"],
        "base": [""],
    },
    "textQuote": {
        "textSize": ["text-sm"],
        "textColor": ["text-zinc-600 dark:text-zinc-400"],
        "fontStyle": ["italic"],
        "base": [""],
    },

    "card": {
        "borderWeight": ["border"],
        "bgColor": ["bg-white dark:bg-zinc-900"],
    },
    "cardDefault": {
        "borderColor": ["border-zinc-300 dark:border-zinc-800"],
        "borderRadius": ["rounded"],
        "shadow": ["shadow hover:shadow-md"],
        "container": ["p-4 transition-all duration-200 ease-in-out"],
        "base": [""],
    },
    "cardUtil": {
        "borderColor": ["border-zinc-200 dark:border-zinc-700"],
        "borderRadius": ["rounded"],
        "shadow": ["shadow"],
        "container": ["p-1 transition-all transform"],
        "base": [""],
    },
    "btn": {
        "focus": ["focus-visible:outline-none focus-visible:ring-blue-400 focus-visible:ring focus-visible:border-0 transition-colors"],
        "disabled": ["disabled:cursor-not-allowed disabled:opacity-40"],
        "shadow": ["shadow-sm"],
        "container": ["flex justify-center items-center gap-2 px-2 h-8 duration-200"],
        "active":["active:scale-95"],
    },
    "btnPrimary": {
        "bgColor": ["bg-zinc-900 dark:bg-white"],
        "hoverbgColor": ["hover:bg-zinc-600 dark:hover:bg-zinc-400"],
        "textColor": ["text-white dark:text-black"],
        "textSize": ["text-sm"],
        "borderRadius": ["rounded-md"],
        "font": ["font-medium"],
        "base": [""],
    },
    "btnSecondary": {
        "bgColor": ["bg-white dark:bg-zinc-900"],
        "hoverbgColor": ["hover:bg-zinc-200 dark:hover:bg-zinc-800"],
        "textSize": ["text-sm"],
        "textColor": ["text-zinc-800 dark:text-white"],
        "borderWeight": ["border"],
        "borderColor": ["border-zinc-200 dark:border-zinc-800"],
        "borderRadius": ["rounded-md"],
        "font": ["font-medium"],
        "base": [""],
    },
    "btnOutline": {
        "hoverbgColor": ["hover:bg-zinc-200 dark:hover:bg-zinc-800"],
        "textSize": ["text-sm"],
        "textColor": ["text-black dark:text-white"],
        "borderColor": ["border-zinc-600 dark:border-zinc-400"],
        "borderWeight": ["border-2"],
        "borderRadius": ["rounded-md"],
        "font": ["font-medium"],
        "base": [""],
    },
    "btnDanger": {
        "bgColor": ["bg-red-500"],
        "hoverbgColor": ["hover:bg-red-600"],
        "textColor": ["text-white"],
        "textSize": ["text-sm"],
        "borderRadius": ["rounded-md"],
        "font": ["font-medium"],
        "base": [""],
    },
    "icon": {
        "focus": ["focus-visible:outline-none focus-visible:ring-blue-400 focus-visible:ring focus-visible:border-0 transition-colors"],
        "disabled": ["disabled:cursor-not-allowed disabled:opacity-50"],
        "container": ["flex justify-center items-center px-2 h-8 w-8 duration-200"],
        "active": ["active:scale-95"],
    },
    "iconSmall": {
        "bgColor": ["bg-zinc-100 dark:bg-zinc-700"],
        "hoverbgColor": ["hover:bg-zinc-200 dark:hover:bg-zinc-800"],
        "textSize": ["text-xs"],
        "textColor": ["text-black dark:text-white"],
        "borderColor": ["border border-zinc-300 dark:border-zinc-600"],
        "borderRadius": ["rounded"],
        "base": [""],
    },
    "badge": {
        "disabled": ["disabled:cursor-not-allowed disabled:opacity-50"],
        "container": ["flex justify-center items-center p-1 px-2 duration-200"],
    },
    "badgeRounded": {
        "bgColor": ["bg-black dark:bg-white"],
        "hoverbgColor": ["hover:bg-zinc-800 dark:hover:bg-zinc-300"],
        "textSize": ["text-xs"],
        "textColor": ["text-white dark:text-black"],
        "borderRadius": ["rounded-full"],
        "base": [""],
    },
}