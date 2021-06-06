import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #88989E;  
  box-sizing: border-box;
  border-radius: 12px;
  padding: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImpuWrapper = styled.input`
  padding: 8px;
  border: none;
  border-radius: 12px;
  outline: 0;
  width: 100%;
  font-size: 18px;
`;

export default function InputSearch() {
  return (
    <Wrapper>
      <img alt="Imagen" src="/images/search.svg" />
      <ImpuWrapper
        type="text"
        placeholder="Pesquisar"
      />
    </Wrapper>
  );
}
