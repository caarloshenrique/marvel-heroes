import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { Container, Content, Section, Title } from './styles';

import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';

interface Detail {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

interface ParamsRoute {
  id: string;
}

const Details: React.FC = () => {
  const { id } = useParams<ParamsRoute>();
  const { addToast } = useToast();

  const [character, setCharacter] = useState<Detail>();

  useEffect(() => {
    const getDetailsCharacter = async () => {
      try {
        const response = await api.get(`/characters/${id}`);

        setCharacter(response.data.data.results[0]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'It was not possible to search the hero details.',
        });
      }
    };
    getDetailsCharacter();
  }, [id, addToast]);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Hero Details</Title>
        <Section>
          <CardDetails
            id={character?.id}
            name={character?.name}
            description={character?.description}
            thumbnail={character?.thumbnail}
          />
        </Section>
      </Content>
    </Container>
  );
};

export default Details;
