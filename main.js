const arr = new Array()

function makeRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function raffle(){
    for(let i = 0; i < 6; i++){
        let random = makeRandomNumber(1, 45);
        for(let j in arr){
            if (random == arr[j]){
                random = makeRandomNumber(1, 45);
            }
        }
        arr.push(random);
    }
    arr.sort(function(a,b){
        return a-b;
    });
    for(let i = 0; i < arr.length; i++){
        $(`.raffle-num${i+1}`).val(arr[i]);
    }
}

$(".raffle").click(() => {
    arr.length = 0;
    raffle();
    $(".again").css("background-color", "red").css("color","white").css("cursor", "pointer").click(() => {
        arr.length = 0;
        raffle();
    });
})
