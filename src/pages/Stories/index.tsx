import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Content, Section, Title } from './styles';
import api from '../../services/api';

import Card from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { useToast } from '../../hooks/toast';

interface Story {
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

const Stories: React.FC = () => {
  const { id } = useParams<ParamsRoute>();
  const { addToast } = useToast();

  const [stories, setStories] = useState<Story[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDetailsCharacter = async () => {
      try {
        const response = await api.get(`/characters/${id}/stories`, {
          params: {
            limit: 20,
            offset: page - 1,
          },
        });

        setTotalCount(response.data.data.total);
        setStories(response.data.data.results);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'It was not possible to search the hero stories.',
        });
      }
    };
    getDetailsCharacter();
  }, [id, page, addToast]);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Hero Stories</Title>
        <Section>
          {stories.length === 0 && <p>No hero stories found...</p>}
          {stories.map((story) => (
            <Card
              key={story.id}
              name={story.title}
              thumbnail={story.thumbnail}
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

export default Stories;
