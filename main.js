const nums = new Array();
const numList =  new Array();

function makeRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function raffle(){
    for(let i = 0; i < 6; i++){
        let random = makeRandomNumber(1, 45);
        for(let j in nums){
            if (random == nums[j]){
                random = makeRandomNumber(1, 45);
            }
        }
        nums.push(random);
    }
    nums.sort(function(a,b){
        return a-b;
    });
    for(let i = 0; i < nums.length; i++){
        $(`.raffle-num${i+1}`).val(nums[i]);
    }
    makeRaffleList();
}

function makeRaffleList() {
    if($(".finalNum").length == 5){
        alert("최대 5개의 추첨 번호를 받을 수 있습니다.");
        return;
    } else {
        const finalNums = nums.join();
        $(".result-box").append(`<p class="finalNum" style="margin-top: 40px;">${finalNums}</p>`);
    }
}

$(".raffle").click(() => {
    nums.length = 0;
    raffle();
    $(".again").css("background-color", "red").css("color","white").css("cursor", "pointer").click(() => {
        for(let i = 0; i < nums.length; i++){
            $(`.raffle-num${i+1}`).val('');
        }
        $(".result-box").html("");
        $(".again").css("background-color", "#efefef").css("color","black").css("cursor", "default");
    });
})
