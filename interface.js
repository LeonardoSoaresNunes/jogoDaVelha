document.addEventListener('DomcontentLoaded',()=>{

    let pecas = document.querySelectorAll(".pecas");

    pecas.forEach((pecas)=>{
        pecas.addEventListener ('click', handleClick);
        })
    })

    function handleClick(event){
        console.log(event.target);
    }
