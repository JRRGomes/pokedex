import styled from 'styled-components';

const getFontSize = ({ variant, theme }) => {
  const variantTypes = {
    h1: theme.sizes.xlarge,
    h2: theme.sizes.large,
    h3: theme.sizes.medium,
  }
  return variantTypes[variant] || theme.sizes.xxlarge
}

const getAlign = ({ align }) => {
  return align || 'left'
}

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.titleFont};
  font-size: ${getFontSize};
  text-align: ${getAlign};
`

const Heading = ({children, ...props}) => {
  return <StyledHeading {...props}>{children}</StyledHeading>
}

export default Heading
