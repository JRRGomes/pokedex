import styled from 'styled-components';

const StyledCardImage = styled.img`
  padding: ${({ theme }) => theme.sizes.medium};
  width: ${({ theme }) => theme.sizes.pokemonImg};
`

const CardImage = ({children, ...props}) => {
  return <StyledCardImage {...props}>{children}</StyledCardImage>
}

export default CardImage
