import {header} from "./header.template";
import {footer} from "./footer.template";
import mainTemplate from "./main.template";
import {head} from "./head.template";
import {body} from "../components/body.component";

export default (payload: any) =>
`
    ${head}
    ${header}
    ${body}
    ${mainTemplate(payload)}
    ${footer}
`

