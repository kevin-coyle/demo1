<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Company Employees</title>
      </head>
      <body>
        <fusion-heading tagName="h1">Card Example</fusion-heading>
                <fusion-grid variant="1-3up">
                <xsl:apply-templates select="company/employee"/>
        </fusion-grid>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="employee">
                <fusion-grid-item>
                    <fusion-card>
                        <img slot="header" src="/assets/card.jpg" alt="placeholder" />
                        <fusion-heading tagName="h2" variant="headline"><xsl:value-of select="name"/></fusion-heading>
                        <fusion-text-passage><xsl:value-of select="position"/></fusion-text-passage>
                        <fusion-button-group slot="footer">
                        <fusion-button variant="primary" text="Button 1"></fusion-button>
                        <fusion-button variant="link" text="Button 2"></fusion-button>
                    </fusion-button-group>
                    </fusion-card>
            </fusion-grid-item>
  </xsl:template>
</xsl:stylesheet>
