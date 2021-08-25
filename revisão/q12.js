function relogio(sec) {

    var hrs = Number.parseInt(sec/3600);
    var min = Number.parseInt(((sec/3600)%1) * 100);
    sec = Number.parseInt((((sec/3600)%1) * 100) % 1) * 10;

    return `${hrs}:${min}:${sec}`
}

console.log(relogio(7260));