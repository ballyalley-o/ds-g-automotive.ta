import { GLOBAL } from "dealer-studio"
import { combineUrl } from "lib/util"

const _API = 'api'

export const PATH_DIR = {
  API_CARD: combineUrl(GLOBAL.SERVER_URL ?? '', _API, 'card'),
}