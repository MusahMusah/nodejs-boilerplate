

export const button = (title: string, url: string) => {
    return ` 
    <tr>
        <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px">
            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px" role="presentation">
                            <tr>
                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="" target="_blank" hidden>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href=""
                                                 style="height:44px; v-text-anchor:middle; width:203px" arcsize="14%" stroke="f" fillcolor="#5c68e2">
                                        <w:anchorlock></w:anchorlock>
                                        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:18px; font-weight:400; line-height:18px; mso-text-raise:1px'>GO SHOPPING</center>
                                    </v:roundrect></a>
                                    <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#5C68E2;border-width:0px;display:inline-block;border-radius:6px;width:auto;mso-border-alt:10px;mso-hide:all">
                                    <a href="${url}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;padding-left:30px;padding-right:30px">
                                    ${title}
                                    </a>
                                    </span><!--<![endif]--></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>`;
}
