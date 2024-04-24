// Importing the QuizQuestion interface
// You may need to import it from the file where it's defined
// import { QuizQuestion } from './quizSlice'; 

// Mock data for quiz questions
const quizQuestions = [
    {
        _id: "Q1Q1",
        quizId: "Q1",
        type: "multipleChoice",
        questionTitle: "What is the capital of France?",
        choices: ["Paris", "Rome", "Madrid", "Berlin"],
        correctAnswer: "Paris",
        points: 5
    },
    {
        _id: "Q1Q2",
        quizId: "Q1",
        type: "trueFalse",
        questionTitle: "The Earth is flat.",
        correctAnswer: false,
        points: 3
    },
    {
        _id: "Q1Q3",
        quizId: "Q1",
        type: "fillInTheBlank",
        questionTitle: "The largest mammal in the ocean is the _____.",
        possibleAnswers: ["Blue whale", "Whale"],
        correctAnswer: "Blue whale",
        points: 4
    },
    {
        _id: "Q2Q1",
        quizId: "Q2",
        type: "multipleChoice",
        questionTitle: "What is the capital of Italy?",
        choices: ["Rome", "Paris", "Madrid", "Berlin"],
        correctAnswer: "Rome",
        points: 5
    },
    {
        _id: "Q2Q2",
        quizId: "Q2",
        type: "trueFalse",
        questionTitle: "The sun rises in the west.",
        correctAnswer: false,
        points: 3
    },
    {
        _id: "Q2Q3",
        quizId: "Q2",
        type: "fillInTheBlank",
        questionTitle: "The tallest mountain in the world is _____.",
        possibleAnswers: ["Mount Everest", "Everest"],
        correctAnswer: "Mount Everest",
        points: 4
    }
];

// Exporting the mock data
export default quizQuestions;
