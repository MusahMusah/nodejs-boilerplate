export const otpComponent = (type: string, otp: string) => {
    const message = type === 'forget-password' ? 'Your OTP Code' : type === 'two_factor' ? '2FA Authentication' : 'Your activate code';
    return `
        <tr>
            <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr>
                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px" role="presentation">
                                <tr>
                                    <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">${message}</h2></td>
                                </tr>
                                <tr>
                                    <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#5c68e2">
                                    <strong>${otp}</strong>
                                    </h1>
                                    </td>
                                </tr>
                            </table></td>
                    </tr>
                </table></td>
        </tr>
    `
}
