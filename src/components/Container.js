import styled from 'styled-components';

const StyledContainer = styled.section`
  display: grid;
	grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: ${({ theme }) => theme.sizes.medium};
  padding: 20px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.smallTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.smartphone} {
    grid-template-columns: 1fr;
  }
`

const Container = ({children, ...props}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
