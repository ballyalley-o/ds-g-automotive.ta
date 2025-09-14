import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)

export const config = {
    source   : [resolve("design/token/reference.json")],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath    : resolve(__dirname, "design/token/css"),
            files        : [
                {
                    destination: "generated.css",
                    format     : "css/variables",
                    options    : {
                        outputReferences: true
                    }
                }
            ]
        }
    }
}

export default config