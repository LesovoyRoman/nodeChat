import { changeFav } from "./functions";
import * as APP_CONSTS from './../config'

export let documentHidden = false;

document.addEventListener("visibilitychange", function() {
    if(document.hidden) {
        documentHidden = true
    } else {
        documentHidden = false;
        changeFav(APP_CONSTS.FAV_STANDART, APP_CONSTS.PNG_TYPE)
    }
});