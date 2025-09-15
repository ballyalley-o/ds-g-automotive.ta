import { NextRequest, NextResponse } from 'next/server'
import data from 'data/cards.json'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const delayParam       = searchParams.get('delay')
    const delayMs          = Math.min(Math.max(parseInt(delayParam || '0', 10) || 0, 0), 15000)
    if (delayMs > 0) {
        await sleep(delayMs)
    }

    // if (data) {
    //     throw new Error('error data not found')
    // }

    return NextResponse.json({ data })
}