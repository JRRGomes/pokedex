import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.sizes.xxsmall};
  min-width: 200px;
  min-height: 250px;
`

const Card = ({children, ...props}) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default Card
