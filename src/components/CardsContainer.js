import styled from 'styled-components';

const CardsContainer = ({children, ...props}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

const StyledContainer = styled.section`
  display: grid;
	grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: ${({ theme }) => theme.sizes.medium};
  padding: ${({ theme }) => theme.sizes.xxlarge};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.smallLaptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.smartphone} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.sizes.xxlarge} 0;
  }
`

export default CardsContainer
