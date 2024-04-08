// Imports
import { createServer } from 'node:net'
import { n, s } from './s.js'
import v from './v.js'
// Start the server
createServer(a => {
    const b = n(a)
    a.on('data', c => {
        const d = v(c)
        if ('object' == typeof d && 'string' == typeof d.err) {
            a.write(JSON.stringify(d))
        } else if ('object' == typeof d
         && 'number' == typeof parseInt(d[0])
         && 'number' == typeof parseInt(d[1])
         && parseInt(d[0]) == b.sid
         && a == b._c) {
            switch (parseInt(d[1])) {
                case 0:
                    if ('number' == typeof parseInt(d[2])
                     && 'number' == typeof parseInt(d[3])
                     && parseInt(d[3]) >= 0
                     && parseInt(d[3]) <= 8
                     && !b.winner) {
                        const c = parseInt(d[2]) == 1 ? 'O' : 'X'
                        if (!b.turn || b.turn && b.turn == c) {
                            b.move(c, parseInt(d[3]) + 1)
                                Object.defineProperty(b, 'turn', {
                                configurable: true,
                                enumerable: true,
                                value: c == 'O' ? 'X' : 'O'
                            })
                        }
                    }
                    a.write(JSON.stringify(b))
                    break
                case 1:
                    a.write(JSON.stringify(Object.create(null, {
                        result: {
                            enumerable: true,
                            value: b.toString()
                        }
                    })))
            }
        }
    })
    a.on('end', () => {
        if (s[b.sid] == b && a == b._c)
            Object.defineProperty(s, b.sid, {
                configurable: true,
                enumerable: true,
                value: null
            })
    })
    a.write(JSON.stringify(b))
}).on('drop', a => {

}).on('error', a => {

}).listen(1337)