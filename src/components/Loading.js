import styled, { keyframes } from 'styled-components';

const Loading = ({children, ...props}) => {
  return (
    <LoadingContainer>
      <StyledLoading {...props}>{children}</StyledLoading>
      <LoadingText>Loading Pokemons</LoadingText>
    </LoadingContainer>
  )
}

const spinning = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledLoading = styled.img`
  height: 100px;
  width: 100px;
  animation: ${spinning} 1s infinite
`

const LoadingText = styled.h5`
  font-family: ${({ theme }) => theme.titleFont};
`

export default Loading
