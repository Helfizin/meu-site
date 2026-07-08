 let botao = document.getElementById("btnPesquisar");

if (botao) {
    botao.onclick = function () {
        let inputBusca = document.getElementById("busca");

        if (!inputBusca) {
            alert("Campo de busca não encontrado!");
            return;
        }

        let pesquisa = inputBusca.value.toLowerCase().trim();

        const filmesValidos = ["batman", "the batman",];

        const filmestopValidos = ["bizouro", "curinga","Detpool","marvel","venom","filmes"];

        const seresValidos = ["seres","100", "os 100","classe dos herois fracos","la casa de papel","origem","from","cães de caça","alice","lucifer","cassadores de demonio","casador de demonio"];

        const animesValidos = ["naruto", "demonslaer","Devil my cry","gajakuta","kaijo","solo levil","your name","jujustu","jujustu kaisen","anime"];

if (filmesValidos.includes(pesquisa)){
            // Caminho correto para o index dentro da pasta filme
            window.open("filme/index.html", "_blank");
}

       else if (seresValidos.includes(pesquisa)){
            // Caminho correto para o index dentro da pasta filme
              window.location.href="#seres";
        } 
        
        else if (animesValidos.includes(pesquisa)){
            // Caminho correto para o index dentro da pasta filme
              window.location.href="#Animes";
              
        } 

          else if (filmestopValidos.includes(pesquisa)){
            // Caminho correto para o index dentro da pasta filme
              window.location.href="#filmes";
              
        } 

        
        
        else {
            alert("Filme não encontrado" );
             window.location.href="#";
        }
    };
}