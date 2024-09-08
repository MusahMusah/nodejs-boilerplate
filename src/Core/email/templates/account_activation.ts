import layoutTemplate from "../layout/layout.template";
import {boxComponent} from "../components/box.component";
import {otpComponent} from "../components/otp.component";
import {EMAIL_ICON} from "../../config/constants";
import { IAccountActivation } from "../entity";
import { simpleTextComponent } from "../components/simpleText.component";


module.exports = ( data:IAccountActivation ) => {
    const subText = "You’ve received this message because your email address has been registered with our site. Please click the button below to verify your email address and confirm that you are the owner of this account.";
    return layoutTemplate(
        boxComponent('Confirm Your Email', subText, EMAIL_ICON)+
        simpleTextComponent(`Amount: 200`) +
        otpComponent('activation', data.otp)
    );
}

