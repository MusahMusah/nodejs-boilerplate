import {EMAIL_ICON} from "../../config/constants";


export const boxComponent = (headerText: string, subText: string, icon:string = EMAIL_ICON) => {
    return `<tr>
                <td align="left" style="Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:30px">
                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                            <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                               
                                    <tr>
                                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px"><h1 style="Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">${headerText}</h1></td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">${subText}</p></td>
                                    </tr>
                                </table></td>
                        </tr>
                    </table>
                </td>
        </tr>
`
}
