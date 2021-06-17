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

        if (handleMove(position)){

            setTimeout(()=>{
                alert("O jogo Acabou - O vencedor foi " + playerTime);
              
        }, 10);
    
    
        updatePecas();
    }

    function updatePecas(){
        let pecas = document.querySelectorAll(".pecas");

        pecas.forEach((pecas) => {
            let position = pecas.id;
            let symbol = board[position];

            if(symbol != ''){
                pecas.innerHTML = '<div class="${symbol}"></div>'
            }
        });
    }
}


