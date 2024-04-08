// Imports
import { Socket } from 'node:net'
import ttt from 'tic-tac-toe-js/lib/game.js'
/**
 * Sessions
 */
export const s = Object.create(null)
/**
 * Inner function
 */
const _n = (a, b) => {
    const c = new ttt
    Object.defineProperties(c, {
        turn: {
            configurable: true,
            enumerable: true,
            value: null
        },
        sid: {
            configurable: true,
            enumerable: true,
            value: b
        },
        _c: {
            value: a
        }
    })
    return c
}
/**
 * Creates a new session
 * @param {Socket} a sock
 * @returns {object}
 */
export function n(a) {
    if (a instanceof Socket) {
        const b = Object.keys(s).length
        if (!b) {
            Object.defineProperty(s, b, {
                configurable: true,
                enumerable: true,
                value: _n(a, b)
            })
            return s[b]
        } else {
            for (let c = 0; c < b; c++)
                if (!(s[c] instanceof ttt)) {
                    Object.defineProperty(s, c, {
                        configurable: true,
                        enumerable: true,
                        value: _n(a, c)
                    })
                    return s[c]
                }
        }
    }
}