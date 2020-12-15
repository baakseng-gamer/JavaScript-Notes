// 全局变量初始化
let MS = 0;
let SS = 0;
let MM = 0;

// 开始计时
function start(){
    int = setInterval(timer, 10);
}

// 计时进行时
function timer(){
    // 每隔10毫秒 MS增加10
    MS = MS + 10;
    // 毫秒达到1000以上 秒+1 毫秒0
    if(MS > 999){
        MS = 0;
        SS = SS + 1;
    }
    // 秒达到60 分钟+1 秒0
    if(SS >= 60){
        SS = 0;
        MM = MM + 1;
    }
    // 展示用的毫秒 秒 分钟 作用是当0~9时前面加 0
    let showMS = (MS / 10) < 10 ? '0' + (MS / 10) : (MS / 10);
    let showSS = SS < 10 ? '0' + SS : SS;
    let showMM = MM < 10 ? '0' + MM : MM;
    // 计时在页面上的动态
    document.getElementById("MS").innerHTML = showMS;
    document.getElementById("SS").innerHTML = showSS;
    document.getElementById("MM").innerHTML = showMM;
    // 返回值，jici()函数需要用这个返回值
    return showMM + ':' + showSS + '.' + showMS;
}

// 计记录
function jici(){
    // 声明变量赋值 timer() 函数的返回值
    let jilu = timer();
    // 把记录写到页面上
    document.getElementById("jilu").innerHTML = jilu;
}

// 暂停
function stop(){
    window.clearInterval(int);
}

// 重置
function reset(){
    window.clearInterval(int);
    // 全局变量清零
    MS = SS = MM = 0;
    // 页面全都为零 注意用字符串
    document.getElementById("MS").innerHTML = '00';
    document.getElementById("SS").innerHTML = '00';
    document.getElementById("MM").innerHTML = '00';
    document.getElementById("jilu").innerHTML = '00:00.00';
}