import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Content, Section, Title } from './styles';
import api from '../../services/api';

import Card from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { useToast } from '../../hooks/toast';

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

interface ParamsRoute {
  id: string;
}

const Comics: React.FC = () => {
  const { id } = useParams<ParamsRoute>();
  const { addToast } = useToast();

  const [comics, setComics] = useState<Comic[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDetailsCharacter = async () => {
      try {
        const response = await api.get(`/characters/${id}/comics`, {
          params: {
            limit: 20,
            offset: page - 1,
          },
        });

        setTotalCount(response.data.data.total);
        setComics(response.data.data.results);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'It was not possible to search the hero comics.',
        });
      }
    };
    getDetailsCharacter();
  }, [id, page, addToast]);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Hero Comics</Title>
        <Section>
          {comics.length === 0 && <p>No hero comics found...</p>}
          {comics.map((comic) => (
            <Card
              key={comic.id}
              name={comic.title}
              thumbnail={comic.thumbnail}
            />
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

export default Comics;
