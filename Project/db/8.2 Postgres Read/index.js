import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "subhadip@23",
  port: 5432,
});

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let quiz = [];
let totalCorrect = 0;
let currentQuestion = {};

async function initializeQuiz() {
  await db.connect();
  try {
    const result = await db.query("SELECT * FROM flags");
    quiz = result.rows;
  } catch (error) {
    console.error("Error executing query", error.stack);
  } finally {
    await db.end();
  }
}

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await initializeQuiz();
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
