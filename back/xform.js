import * as fs from 'fs'
import { Xslt, XmlParser } from 'xslt-processor'

const xmlString = fs.readFileSync('file.xml').toString()
const xslString = fs.readFileSync('file.xsl').toString()

//console.log(xmlString)
//console.log(xsltString)

const options = {
  escape: false,
  selfClosingTags: true,
  parameters: [{ name: 'myparam', value: '123' }],
  outputMethod: 'html'
};
const xslt = new Xslt(options);
const xmlParser = new XmlParser();
// Either

const pXml = xmlParser.xmlParse(xmlString)
const pXsl = xmlParser.xmlParse(xslString)
console.log(pXsl)
const outXmlString = await xslt.xsltProcess(
	pXml,
	pXsl
)
console.log(outXmlString)
/*
// Or
xslt.xsltProcess(
	xmlParser.xmlParse(xmlString),
	xmlParser.xmlParse(xsltString)
).then(output => {
  console.log(output)
});
*/