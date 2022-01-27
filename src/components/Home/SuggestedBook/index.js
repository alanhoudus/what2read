// == Import : local
import './suggestedbook.scss';

// == Composant
const SuggestedBook = () => (
  <div className="suggestedbook">
    <h2 className="suggestedbook-title">Suggestion journalière</h2>
    <div className="suggestedbook-infos">
      <img className="suggestedbook-cover" alt="Chtulhu couverture" src="https://products-images.di-static.com/image/h-p-lovecraft-cthulhu-le-mythe-tome-1/9782352949107-475x500-1.webp" />
      <h3 className="suggestedbook-booktitle">Cthulhu : Le Mythe</h3>
      <div className="suggestedbook-summary">
        <p>Howard Phillips Lovecraft est sans nul doute l’auteur fantastique
          le plus influent du XXe siècle.
          Son imaginaire unique et terrifiant n’a cessé d’inspirer
          des générations d’écrivains, de cinéastes,
          d’artistes ou de créateurs d’univers de jeux, de Neil Gaiman à Michel Houellebecq
          en passant par Metallica. Le Mythe de Cthulhu est au cœur de cette œuvre :
          un panthéon de dieux et d’êtres
          monstrueux venus du cosmos et de la nuit des temps ressurgissent pour reprendre possession
          de notre monde. Ceux qui en sont témoins sont voués à la folie et à la destruction.
          Les neuf récits essentiels du mythe sont ici réunis dans une toute nouvelle traduction.
          À votre tour, vous allez
          pousser la porte de la vieille bâtisse hantée qu’est la Maison de la Sorcière,
          rejoindre un
          mystérieux festival où l’on célèbre un rite impie, découvrir une cité antique enfouie sous
          le sable, ou échouer dans une ville portuaire dépeuplée dont les derniers habitants sont
          atrocement déformés... Ce recueil inclut des illustrations originales ainsi
          que le portfolio
          « Les terres de Lovecraft en images » : 16 pages de photographies des paysages
          et des lieux
          dont s’est inspiré le maître de l’effroi. Le mythe de Cthulhu n’a jamais été aussi réel.
        </p>
        <button type="button" className="suggestedbook-button">En savoir plus</button>
      </div>
    </div>
  </div>
);

// == Export
export default SuggestedBook;
