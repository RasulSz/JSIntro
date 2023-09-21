const ClearBtn = document.querySelector(".btn-clear");

export function addClearButtonListener(result,clearBtn){
    clearBtn.addClearButtonListener("click",() =>{result.value = 0;});
}

