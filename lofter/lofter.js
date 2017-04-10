/**
 * Created by lin on 2017/3/28.
 */

window.onscroll=function() {
    if(window.document.body.scrollTop<=500||window.document.body.scrollTop>=3000){
        document.getElementById("fix").style.display = "none"
    }
    else{
        document.getElementById("fix").style.display = "block"
    }
};

