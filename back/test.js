import { getFile, o, outputProcessedStats, outputProcessedStats2, outputProcessedStats3, ttiStats } from './read.js'
import { opStatsForDay } from './read.js'
import 'util'

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
async function test0() {
    var data = await getFile('file')
    console.log(data)
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
async function test1() {
    const data = await outputProcessedStats()
    console.log(data)
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
async function test2() {
    const data = await outputProcessedStats3(process.argv[2])
    console.log(data)
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
async function test3() {
    const ret = await ttiStats('2025-11-25')
    console.log(ret)
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
async function test4() {
    const ret = await opStatsForDay('2025-11-25')
    console.dir(ret, {'maxArrayLength': null})
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
test4('2025-11-25')