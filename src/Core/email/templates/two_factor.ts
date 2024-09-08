import layoutTemplate from "../layout/layout.template";
import {boxComponent} from "../components/box.component";
import {otpComponent} from "../components/otp.component";
import {IAccountActivation} from "../entity";
import {EMAIL_ICON} from "../../config/constants";


module.exports = ( data:IAccountActivation ) => {
    const subText = "You’ve received this message because you enabled 2FA. Please use th OTP below to complete your login.";
    return layoutTemplate(
        boxComponent('Confirm Your Email', subText, EMAIL_ICON)+
        otpComponent('two_factor', data.otp)
    );
}

