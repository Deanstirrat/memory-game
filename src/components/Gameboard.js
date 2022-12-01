import Card from './Card';
import styled from 'styled-components'

function Gameboard(props) {
    

    const constructedCards = props.cards.map((card)=>{
        return(<Card key={card.id} id={card.id} card={card} checkIfSeen={props.checkIfSeen}/>);
    });

  return (
    <div>
        Choose a card:
        <CardsContainer>{constructedCards}</CardsContainer>
    </div>
  );
}

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export default Gameboard;
