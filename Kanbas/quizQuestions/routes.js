import db from "../Database/index.js";

function QuizQuestionsRoutes(app) {
    // Update a specific quiz question based on question ID
    app.put("/api/quizQuestions/:qid", (req, res) => {
        const { qid } = req.params;
        const quizQuestionIndex = db.quizQuestions.findIndex(
            (q) => q._id === qid
        );
        if (quizQuestionIndex === -1) {
            res.status(404).send("Quiz question not found");
            return;
        }
        db.quizQuestions[quizQuestionIndex] = {
            ...db.quizQuestions[quizQuestionIndex],
            ...req.body,
        };
        res.sendStatus(204);
    });

    // Delete a specific quiz question based on question ID
    app.delete("/api/quizQuestions/:qid", (req, res) => {
        const { qid } = req.params;
        db.quizQuestions = db.quizQuestions.filter(
            (q) => q._id !== qid
        );
        res.sendStatus(204);
    });

    // Add a new question to a specific quiz based on quiz ID
    app.post("/api/quizzes/:qid/questions", (req, res) => {
        const { qid } = req.params;
        const quiz = db.quizzes.find((q) => q._id === qid);
        if (!quiz) {
            res.status(404).send("Quiz not found");
            return;
        }
        const newQuestion = {
            ...req.body,
            _id: new Date().getTime().toString(),
        };
        quiz.questions.push(newQuestion);
        res.send(newQuestion);
    });

    // Retrieve all questions for a specific quiz based on quiz ID
    app.get("/api/quizzes/:qid/questions", (req, res) => {
        const { qid } = req.params;
        const quiz = db.quizzes.find((q) => q._id === qid);
        if (!quiz) {
            res.status(404).send("Quiz not found");
            return;
        }
        res.send(quiz.questions);
    });
}

export default QuizQuestionsRoutes;
