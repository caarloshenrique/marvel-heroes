import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #3e3b47;
  padding: 16px 24px;
  border-radius: 10px;
  width: 1000px;
  margin-left: 10px;
  margin-right: 10px;
  text-align-center;

  img {
    display: block;
    height: 200px;
    padding: 15px;
  }

  h2 {
    color: #fff;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    color: #ddd;
    margin-bottom: 20px;
  }
`;

export const ActionsHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-bottom: 16px;
`;
