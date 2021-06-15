document.addEventListener('DOMContentLoaded', () => {

    let pecas = document.querySelectorAll(".pecas");

    pecas.forEach((pecas) => {
        pecas.addEventListener ('click', handleClick);
        })
    })

    function handleClick(event){
        console.log(event.target);

        let pecas = event.target;
        let position = pecas.id;

        handleMove(position);
        updatePecas();
    }

    function updatePecas(){
        let pecas = document.querySelectorAll(".pecas");

        pecas.forEach((pecas) => {
            let position = pecas.id;
            let symbol = board[position];

            if(symbols != ''){
                pecas.innerHTML = <div class='${symbols}'></div>
            }
        })
    }
