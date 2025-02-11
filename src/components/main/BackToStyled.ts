import styled from 'styled-components';

export const BackToContainer = styled.div`
  background-color: #fff;
  position: absolute;
  margin: 24px;
  top: 24px;
  left: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 8px;
  z-index: 2;
  .back {
    opacity: 0.8;
  }
  .current {
    font-weight: 500;
  }
`;
