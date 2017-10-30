import {SuiButtonComponent} from "./script/component/sui.button.component.js";

ReactDOM.render(
    <SuiButtonComponent text='提交' type='primary' size='big' href='https://www.baidu.com' disabled='true'></SuiButtonComponent>,
    document.getElementsByTagName("sui-button")[0]
)

import {SuiCheckComponent} from "./script/component/sui.check.component.js";

// ReactDOM.render(
//     <SuiCheckComponent></SuiCheckComponent>,
//     document.getElementsByTagName("sui-check")[0]
// )