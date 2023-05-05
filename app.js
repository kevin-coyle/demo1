const express = require('express');
const fs = require('fs');
const xsltProcessor = require('xslt-processor');

const app = express();
const port = 3000;

// Serve static assets from the "assets" directory
app.use('/assets', express.static('assets'));

// Load XML and XSLT files
const xmlString = fs.readFileSync('example.xml', 'utf-8');
const xsltString = fs.readFileSync('template.xsl', 'utf-8');
const htmlTemplate = fs.readFileSync('index.html', 'utf-8');

app.get('/', (req, res) => {
  // Parse the XML and XSLT documents
  const xmlDocument = xsltProcessor.xmlParse(xmlString);
  const xsltDocument = xsltProcessor.xmlParse(xsltString);

  // Apply the XSLT transformation
  const transformedContent = xsltProcessor.xsltProcess(xmlDocument, xsltDocument);

  // Embed the transformed content into the HTML file
  const result = htmlTemplate.replace('<div id="content"></div>', `<div id="content">${transformedContent}</div>`);

  // Set the content type to HTML and send the transformed content
  res.set('Content-Type', 'text/html');
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
