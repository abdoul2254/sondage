const questions = [
  {
    question:
      'Quelle équipe a remporté la Ligue des champions cette année 2019-2020 ?\n1. Bayern Munich\n2. Paris Saint-Germain\n3. Liverpool FC',
    reponse: 3
  },
  {
    question: 
      "Qui est l'acteur principal dans le film Iron Man ?\n1. Athur Rimbo\n2. Rodrigue morice\n3. Robert Downey\n4. Boris Rendi",
    reponse: 3
  },
  {
    question:
      'Quel est le film le plus vue sur netflix lors du confinement ?\n1. Fast and furious\n2. 7. Koğuştaki Mucize\n3. Casa de Papel\n4. Antoinette',
    reponse: 2
  },
  {
    question:
      'Qui est le gagnant de The Voice 2020 ?\n1. Abi Bernadoth\n2. Marc Lavoine\n3. Pascal Obispo\n4. Amel Bent',
    reponse: 1
  }
];

// commencement du jeu......

let nbVraiReponse = 0;

for (let i = 0; i < questions.length; i += 1) {
    let repUtil = prompt(questions[i].question);
    if (repUtil == questions[i].reponse) {
        alert('correcte');
        nbVraiReponse += 1;
    } else {
        alert('incorrecte');
    }
// .......nbre de questions correcte su le nbre total de question.......
}
if ( nbVraiReponse <= 1) {
    alert(' vous avez' $(nbVraiReponse) 'bonne reponse sur' $(questions.lengt));
}else {
    alert(' vous avez' $(nbVraiReponse) 'bonne reponse sur' $(questions.lengt));
}