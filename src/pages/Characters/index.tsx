import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { Section, Container, Content, Title, LinkCharacter } from './styles';
import { useToast } from '../../hooks/toast';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Characters: React.FC = () => {
  const { addToast } = useToast();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await api.get('/characters', {
          params: {
            limit: 20,
            offset: page - 1,
          },
        });

        setTotalCount(response.data.data.total);
        setCharacters(response.data.data.results);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'It was not possible to search the characters.',
        });
      }
    };
    getCharacters();
  }, [page, addToast]);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Heroes</Title>
        <Section>
          {characters.length === 0 && <p>No heroes found...</p>}

          {characters.map((character) => (
            <LinkCharacter key={character.id} to={`/details/${character.id}`}>
              <Card name={character.name} thumbnail={character.thumbnail} />
            </LinkCharacter>
          ))}
        </Section>
        <Pagination
          totalCountOfRegisters={totalCount}
          currentPage={page}
          onPageChange={setPage}
        />
      </Content>
    </Container>
  );
};

export default Characters;
