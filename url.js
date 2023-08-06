function getElementByXpath(xpath){
	var element = document.evaluate(xpath,document).iterateNext();
	return element;
}
/**
 * 复制单行内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content, message) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if (message == null) {
        alert("复制成功");
    } else{
        alert(message);
    }
}

// function wait_load(){

// }

// //可以实现每次打开新页面时在浏览器输出一句话
// alert('在这输入你想显示的话') 

// /**************************************************/

// //实现输出该页面有多少张图片
// var imgs = document.querySelectorAll('img');  
// alert(imgs.length);
// //ps：这个方法如果遇到页面里面很多图片可能要加载很久才能出来
// $(document).ready(function () {
//     // document.querySelectorAll("a").forEach(function(item,index,arr){item.target='_blank';});
//     // $('a').each(function(index,item){$(this).attr('target','_blank');});
//     // const x = $('/html/body/div[3]/div/div[1]/div[4]/div/div[3]/div[2]/div[2]/div[2]/a');
//     const x = document.querySelector("#pagelet_frs-header\\/pagelet\\/head > div > div.head_content > div.card_top_wrap.clearfix.card_top_theme > div.card_top.clearfix > div.card_title > a");
//     alert(x);
//    });
// const x = document.querySelector("#pagelet_frs-header\\/pagelet\\/head > div > div.head_content > div.card_top_wrap.clearfix.card_top_theme > div.card_top.clearfix > div.card_title > a");
// 
function copy(){
    const len = x.getElementsByTagName("li").length;
    console.log(len);
    // x = 10;
    // res = [];
    // copyToClip("123321","ok");
    for(let i = 0; i < len; ++i){
        var element = getElementByXpath(`/html/body/div[3]/div/div[2]/div/div/div[1]/div/div/div/div[4]/ul/li[${i}]/div/div[2]/div[1]/div[1]/a`);
        // console.log(`/html/body/div[3]/div/div[2]/div/div/div[1]/div/div/div/div[4]/ul/li[${i}]/div/div[2]/div[1]/div[1]/a`);
        if(element != null)
        // res.appendChild(element.innerText);
            console.log(element.innerText);
    }
}
var txt = getElementByXpath("/html/body/div[3]/div/div[1]/div[4]/div/div[3]/div[2]/div[2]/p");
alert(txt);
if(txt != null){
	p = document.createElement("button");
    // p.innerhtml = '<button onclick="copy()">点我复制</button>';
    // p.addEventListener('click', copy);
	p.innerText='点我';
    p.onclick = copy;
	txt.appendChild(p);
    // innerText = txt.innerText;
    // extra = "<p onclick='copy()'>点我</p>";
    // txt.innerText = innerText + extra;
}
var x = getElementByXpath("/html/body/div[3]/div/div[2]/div/div/div[1]/div/div/div/div[4]/ul");


// const y = getElementByXpath("/html/body/div[3]/div/div[2]/div/div/div[1]/div/div/div/div[4]/ul/li[i]/div/div[2]/div[1]/div[1]/a");
// console.log(len);
// alert(x.innerText);