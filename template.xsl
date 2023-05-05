<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
        <h1>Company Employees</h1>
  </xsl:template>

  <xsl:template match="employee">
    <tr>
      <td>
        <xsl:value-of select="name"/>
      </td>
      <td>
        <xsl:value-of select="position"/>
      </td>
      <td>
        <fusion-button variant="primary">
            <xsl:attribute name="text">
            <xsl:value-of select="action"/>
            </xsl:attribute>
        </fusion-button>
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
