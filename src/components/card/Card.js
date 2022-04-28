import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.sizes.xxsmall};
  min-width: ${({ theme }) => theme.sizes.cardWidth};
  min-height: ${({ theme }) => theme.sizes.cardHeight};
`

const Card = ({children, ...props}) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default Card
