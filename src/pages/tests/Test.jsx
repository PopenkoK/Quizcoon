import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getQuizById } from '../../services/quiz';
import {
  Card,
  CardBack,
  CardContainer,
  CardFront,
  ContentContainer,
  FooterButton,
  Header,
  NavButton,
  Option,
  PageContainer,
  QuestionContainer,
  QuestionText,
  SwitchContainer,
  ToggleButton,
  WhiteContainer,
} from './styles';

const Test = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quiz, setQuiz] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      const fetchedQuiz = await getQuizById(id);
      setQuiz(fetchedQuiz);
      setLoading(false);
    };
    fetchQuiz();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  const { questions = [], cards = [] } = quiz;

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setIsFlipped(false);
    setCurrentSlide(1);
    setScore(null);
    setShowAnswers(false);
  };

  const handleNext = () => {
    const maxSlides = isChecked ? questions.length : cards.length;
    if (currentSlide < maxSlides) setCurrentSlide(currentSlide + 1);
    setShowAnswers(false);
  };

  const handlePrevious = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
    setShowAnswers(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleFinish = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <PageContainer>
      <Header data-cy="quiz-title">{quiz.title}</Header>
      <SwitchContainer>
        <ToggleButton data-cy="toggle-cards" active={!isChecked} onClick={handleToggle}>
          Cards
        </ToggleButton>
        <ToggleButton data-cy="toggle-test" active={isChecked} onClick={handleToggle}>
          Test
        </ToggleButton>
      </SwitchContainer>

      <ContentContainer>
        {isChecked ? (
          <>
            <p data-cy="progress-counter">
              {currentSlide}/{questions.length}
            </p>
            <WhiteContainer>
              <QuestionContainer data-cy="question-container">
                <QuestionText>{questions[currentSlide - 1].question}</QuestionText>
                {questions[currentSlide - 1].options.map((option, index) => {
                  const isCorrect = option === questions[currentSlide - 1].correctAnswer;
                  const isSelected = answers[currentSlide - 1] === option;
                  const optionStyle = showAnswers
                    ? isCorrect
                      ? { backgroundColor: '#00800067' }
                      : isSelected
                        ? { backgroundColor: '#ff000067' }
                        : {}
                    : {};

                  return (
                    <Option key={index} data-cy={`option-${index}`} style={optionStyle}>
                      <input
                        type="radio"
                        id={`option${index}`}
                        name="answer"
                        value={option}
                        onChange={() => handleAnswerChange(currentSlide - 1, option)}
                        checked={isSelected}
                        disabled={showAnswers}
                      />
                      <label htmlFor={`option${index}`}>{option}</label>
                    </Option>
                  );
                })}
              </QuestionContainer>
            </WhiteContainer>
          </>
        ) : (
          <div>
            <p data-cy="progress-counter">
              {currentSlide}/{cards.length}
            </p>
            <CardContainer data-cy="card-container" onClick={flipCard} $isFlipped={isFlipped}>
              <Card $isFlipped={isFlipped}>
                <CardFront>{cards[currentSlide - 1].question}</CardFront>
                <CardBack>{cards[currentSlide - 1].answer}</CardBack>
              </Card>
            </CardContainer>
          </div>
        )}

        <NavButton data-cy="nav-button-left" onClick={handlePrevious} disabled={currentSlide === 1} $position="left">
          ◀
        </NavButton>
        <NavButton
          data-cy="nav-button-right"
          onClick={handleNext}
          $position="right"
          disabled={isChecked ? currentSlide === questions.length : currentSlide === cards.length}
        >
          ▶
        </NavButton>

        {isChecked && (
          <div>
            <FooterButton data-cy="finish-button" onClick={handleFinish}>
              Finish
            </FooterButton>
            <FooterButton data-cy="answers-button" onClick={handleShowAnswers} disabled={!answers[currentSlide - 1]}>
              Answers
            </FooterButton>
          </div>
        )}

        {score !== null && (
          <div>
            <p data-cy="score-display">
              Your score: {score}/{questions.length}
            </p>
          </div>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default Test;
