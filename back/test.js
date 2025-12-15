import { getXmlFile, getXmlUuid, outputProcessedStats, outputProcessedStats2, outputProcessedStats3, ttiStats, ttiStatsByFlow } from './read.js'
import { opStatsForDay } from './read.js'
import 'util'

async function test0() {
    var data = await getXmlFile('../data/2025-11-25/xml/20251125_212454_497_89_MultiCustomer_92aa2782-0cc7-47cf-8392-8f4ca66953fd.xml')
    Object.keys(data).forEach((k, v) => { console.log(data[k]['output'])})
    console.log(data)
}
//test0()

async function test1() {
    const data = await outputProcessedStats()
    console.log(data)
}

async function test2() {
    const data = await outputProcessedStats3(process.argv[2])
    console.log(data)
}

async function test3(day) {
    const ret = await ttiStats(day)
    console.log(ret)
}
//test3(process.argv[2])

async function test4() {
    const ret = await opStatsForDay('2025-11-25')
    console.dir(ret, {'maxArrayLength': null})
}

async function test5(day) {
    const ret = await ttiStatsByFlow(day)
    console.log(ret)
}
//test5(process.argv[2])

async function test6() {
    var ret = await getXmlUuid('2025-11-25')
    console.dir(ret, {'maxArrayLength': null})
}
test6()
