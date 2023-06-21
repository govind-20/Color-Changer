const getcolor=()=>{
    const random_Number=Math.floor(Math.random()*16777215);
    const color_code='#'+random_Number.toString(16);
    console.log(random_Number,color_code);
    document.body.style.backgroundColor=color_code;
    document.getElementById('color').innerText=color_code;
}
document.getElementById('btn').addEventListener(
    'click',
    getcolor
)
getcolor();