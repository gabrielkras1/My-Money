import styled from 'styled-components';

// Container principal que divide as cores
export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Seção superior (Header + Cards) - cor mais escura
export const TopSection = styled.div`
  background: #1a1a1a;
  padding-bottom: 24px;
`;

// Divisória/Linha de separação
export const Divider = styled.div`
  height: 3px;
  background: linear-gradient(90deg, #06b6d4 0%, #06b6d4 100%);
`;

// Seção inferior (Tabela/Body) - cor diferente
export const BottomSection = styled.div`
  background: #0f0f0f;
  flex: 1;
  padding: 24px 32px;
`;