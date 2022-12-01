import styled from 'styled-components'

function Card({id, card, checkIfSeen}) {
  return (
    <CardContainer onClick={()=>checkIfSeen(id)}>
        <CardImage src={card.image} alt={card.name}></CardImage>
        <h3>{card.name}</h3>
    </CardContainer>
  );
}

const CardContainer = styled.button`
height: 150px;
width: 150px;
font-size: 1rem;
background-color: white;
color: white;
&:hover{
    background-color:gray;
}
`

const CardImage = styled.img`
max-width:100%;
max-height:100%;
`

export default Card;
