const num =+prompt("1-raqamni qiriting")
const num2 =+prompt("1-raqamni qiriting")
const operator =+prompt("1)qoshish \n 2)ayrish \n 3) kopaytirish \n 4) bolish ")
if(operator == 1){
    alert(`javob:${num + num2}`)
}
else if(operator == 2){
    alert(`javob:${num - num2}`)
}
 else if(operator == 3){
    alert(`javob:${num * num2}`)
}
else if(operator == 4){
    alert(`javob:${num / num2}`)
}