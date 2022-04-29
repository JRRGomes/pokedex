import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.sizes.xxsmall};
  min-width: ${({ theme }) => theme.sizes.cardWidth};
  min-height: ${({ theme }) => theme.sizes.cardHeight};
`

const CardImage = styled.img`
  padding: ${({ theme }) => theme.sizes.medium};
  padding-bottom: 0;
  max-width: ${({ theme }) => theme.sizes.pokemonImg};
`

const CardName = styled.h3`
  text-transform: capitalize;
  margin-top: ${({ theme }) => theme.sizes.medium};
  margin-bottom: 0;
`

const CardId = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.sizes.small};
`

const CardType = styled.p`
  font-size: ${({ theme }) => theme.sizes.small};
  padding: ${({ theme }) => `${theme.sizes.xxsmall} ${theme.sizes.small}`};
  margin-right: ${({ theme }) => theme.sizes.small};
  margin-bottom: 0;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.cardBackground};
`
const ImageContainer = styled.div`
  display: grid;
  justify-items: center;
`

const TypesContainer = styled.div`
  display: flex;
`

const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: ${({ theme }) => theme.sizes.small};
  padding-bottom: 0;
  margin: ${({ theme }) => theme.sizes.small};
`

const Card = ({pokemon}) => {
  return (
    <StyledCard>
      <ImageContainer>
        { pokemon && <CardImage src={pokemon.sprites.other.dream_world.front_default} ></CardImage>
        }
      </ImageContainer>
      <InfoContainer>
        { pokemon && <CardId># {pokemon.id}</CardId> }
        { pokemon && <CardName>{pokemon.name}</CardName> }
        <TypesContainer>
          { pokemon && pokemon.types.map((typeObj) => (
            <CardType>{typeObj.type.name}</CardType>
            )) }
        </TypesContainer>
      </InfoContainer>
    </StyledCard>
  )
}

export default Card
