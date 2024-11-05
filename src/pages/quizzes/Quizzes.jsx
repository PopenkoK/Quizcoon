import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { getAllQuizzes } from '../../services/quiz';
import { QuizzesContainer } from './styles';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const quizees = await getAllQuizzes();
      setQuizzes(quizees);
      setLoading(false);
    };
    fetch();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <QuizzesContainer>
      <h1 data-cy={'home-title'}>Quizzes</h1>
      <div data-cy={'quizzes-grid'}>
        {quizzes.map((quiz) => (
          <Button key={quiz._id} onClick={() => navigate(`/test/${quiz._id}`)} data-cy={'quiz-button'}>
            {quiz.title}
          </Button>
        ))}
      </div>
    </QuizzesContainer>
  );
};

export default Quizzes;
