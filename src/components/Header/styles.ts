import styled from 'styled-components';

export const Container = styled.header`
  min-width: 1320px;
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 24px;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const InfoIndex = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  span {
    color: #f4ede8;
  }

  a {
    text-decoration: none;

    strong {
      color: #e23433;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
