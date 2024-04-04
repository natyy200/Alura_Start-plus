let addAluno = document. querySelector('.estudante-todos');
let quantidade_alunos = prompt('Quantos alunos deseja cadastrar?');

function teste(){
    let card = document.createElement('div');
    card.classList.add('estudante-div');
    let foto = document.createElement('img');
    foto.classList.add('img-estudante');
    foto.src= "img/foto.jpg";
    let titulo = document.createElement('h3');
    titulo.textContent = 'Estudante 1';
    titulo.classList.add('estudante-nome');
    let ancora = document.createElement('a');
    ancora.href = "https://www.instagram.com/nataly.dearo/";
    let ancora2 = document.createElement('a');
    ancora.href = "https://github.com/natyy200";
    let ancora3 = document.createElement('a');
    ancora.href = "https://www.linkedin.com/in/nataly-dearo-schmidt-087a04252/";

    let icone = document.createElement('img');
    icone.classList.add('img-midias');
    icone.src= "/img/instagram.png";

    let icone2 = document.createElement('img');
    icone2.classList.add('img-midias');
    icone2.src= "/img/github.png";

    let icone3 = document.createElement('img');
    icone3.classList.add('img-midias');
    icone3.src= "/img/linkedin.png";
    
    addAluno.appendChild(card);
    card.appendChild(foto);
    card.appendChild(titulo);
    card.appendChild(ancora);
    card.appendChild(ancora2);
    card.appendChild(ancora3);

    ancora.appendChild(icone);
    ancora2.appendChild(icone2);
    ancora3.appendChild(icone3);
}
   for(i = 0; i< quantidade_alunos ; i++){
    teste();
   }
   
