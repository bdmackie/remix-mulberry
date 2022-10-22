
import { name as appName } from '../package.json'
import type { MetaFunction } from '@remix-run/node'

const APP_NAME : string = appName
const APP_TITLE : string = "Remix Mulbery"
const APP_DESCRIPTION : string = "Remix demo app"

export function genMeta(screenName: string) : MetaFunction {
    return () => {
        return {
            charset: "utf-8",
            title: `${APP_TITLE} - ${screenName}`,
            description: APP_DESCRIPTION,
            viewport: "width=device-width,initial-scale=1",
        };
    }
}

export const metaInfo = {
    APP_NAME,
    APP_TITLE,
    APP_DESCRIPTION
}