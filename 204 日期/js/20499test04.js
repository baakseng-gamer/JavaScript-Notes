function clock() {
    let date = new Date(2020, 11, 11);
    let now  = new Date();
    // console.log(date);
    // console.log(now);

    let Hdiff = parseInt( (date.getTime() - now.getTime()) / 1000 / 60 / 60);
        Hdiff = Hdiff > 9 ? Hdiff : '0' + Hdiff;
    // console.log(Hdiff);

    let Mdiff = parseInt( (date.getTime() - now.getTime()) / 1000 / 60 ) - Hdiff * 60;
        Mdiff = Mdiff > 9 ? Mdiff : '0' + Mdiff;
    // console.log(Mdiff);

    let Sdiff = 60 - now.getSeconds();
        Sdiff = Sdiff > 9 ? Sdiff : '0' + Sdiff;
    // console.log(Sdiff);

    document.getElementById("HOUR").innerHTML = Hdiff;
    document.getElementById("MINUTE").innerHTML = Mdiff;
    document.getElementById("SECOND").innerHTML = Sdiff;

}
// clock();
setInterval(clock, 1000);
