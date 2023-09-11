import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  color: var(--color-brand-500);
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Hello World</H1>
      </div>
    </>
  );
}
export default App;
