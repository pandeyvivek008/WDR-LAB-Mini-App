// Wait for the DOM to fully load before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
  
  // ====== Get all necessary elements from the DOM ======
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  // ====== Quiz Questions ======            
   
const questions = [
  {
    question: "Which data structure works on LIFO principle?",
    choices: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack",
  },
  {
    question: "What is the worst-case time complexity of Linear Search?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    question: "Which data structure is used for implementing recursion?",
    choices: ["Queue", "Stack", "Heap", "Graph"],
    answer: "Stack",
  },
  {
    question: "Which traversal of a BST gives elements in sorted order?",
    choices: ["Preorder", "Inorder", "Postorder", "Level order"],
    answer: "Inorder",
  },
  {
    question: "What is the best-case time complexity of Bubble Sort?",
    choices: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
    answer: "O(n)",
  },
  {
    question: "Which data structure is used in BFS?",
    choices: ["Stack", "Queue", "Array", "Heap"],
    answer: "Queue",
  },
  {
    question: "What is the space complexity of iterative Binary Search?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    question: "Which of the following is a linear data structure?",
    choices: ["Tree", "Graph", "Queue", "Heap"],
    answer: "Queue",
  },
  {
    question: "Which algorithm is used to find the shortest path in an unweighted graph?",
    choices: ["DFS", "BFS", "Dijkstra", "Kruskal"],
    answer: "BFS",
  },
  {
    question: "Which of these is not a stable sorting algorithm?",
    choices: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
    answer: "Selection Sort",
  },
  {
    question: "Which data structure is used in function call management?",
    choices: ["Queue", "Heap", "Stack", "Graph"],
    answer: "Stack",
  },
  {
    question: "What is the average-case time complexity of Quick Sort?",
    choices: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    question: "Which algorithm uses backtracking?",
    choices: ["Binary Search", "Tower of Hanoi", "N-Queens Problem", "Merge Sort"],
    answer: "N-Queens Problem",
  },
  {
    question: "Which hashing technique resolves collisions using linked lists?",
    choices: ["Linear Probing", "Quadratic Probing", "Chaining", "Double Hashing"],
    answer: "Chaining",
  },
  {
    question: "What is the auxiliary space of DFS?",
    choices: ["O(1)", "O(V)", "O(V+E)", "O(E)"],
    answer: "O(V)",
  },
  {
    question: "Which algorithm is used to detect cycles in a directed graph?",
    choices: ["Dijkstra", "DFS", "Kruskal", "Prim’s"],
    answer: "DFS",
  },
  {
    question: "What is the time complexity of building a Heap from n elements?",
    choices: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    question: "Which traversal is used for topological sorting?",
    choices: ["Inorder", "BFS", "DFS", "Level Order"],
    answer: "DFS",
  },
  {
    question: "Which algorithm is used in finding articulation points in a graph?",
    choices: ["Tarjan’s Algorithm", "Dijkstra", "Prim’s", "Kruskal"],
    answer: "Tarjan’s Algorithm",
  },
  {
    question: "Which algorithm is used to detect negative weight cycles?",
    choices: ["Dijkstra", "Floyd-Warshall", "Prim’s", "Bellman-Ford"],
    answer: "Bellman-Ford",
  },
  {
    question: "What is the time complexity of matrix chain multiplication using DP?",
    choices: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
    answer: "O(n^3)",
  },
  {
    question: "Which algorithm is best for finding strongly connected components (SCC)?",
    choices: ["Prim’s", "Kosaraju’s", "Kruskal’s", "Dijkstra’s"],
    answer: "Kosaraju’s",
  },
  {
    question: "Which algorithm solves the Longest Common Subsequence problem?",
    choices: ["Greedy", "Dynamic Programming", "Backtracking", "Divide & Conquer"],
    answer: "Dynamic Programming",
  },
  {
    question: "What is the complexity of finding LCA (Lowest Common Ancestor) using Binary Lifting?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "Which problem cannot be solved using greedy approach?",
    choices: ["Activity Selection", "Fractional Knapsack", "Huffman Coding", "0/1 Knapsack"],
    answer: "0/1 Knapsack",
  },
  {
    question: "Which algorithm is used in pattern matching with preprocessing?",
    choices: ["Naive", "KMP", "Rabin-Karp", "Brute Force"],
    answer: "KMP",
  },
  {
    question: "What is the time complexity of Floyd-Warshall algorithm?",
    choices: ["O(V^2)", "O(V^3)", "O(E log V)", "O(V log V)"],
    answer: "O(V^3)",
  },
  {
    question: "Which algorithm is used to find maximum flow in a network?",
    choices: ["Bellman-Ford", "Floyd-Warshall", "Ford-Fulkerson", "Prim’s"],
    answer: "Ford-Fulkerson",
  },
  {
    question: "Which data structure is best for implementing Dijkstra’s algorithm?",
    choices: ["Stack", "Queue", "Priority Queue", "Linked List"],
    answer: "Priority Queue",
  },
  {
    question: "What is the time complexity of solving the Traveling Salesman Problem using DP?",
    choices: ["O(n^2)", "O(n^2 2^n)", "O(2^n)", "O(n!)"],
    answer: "O(n^2 2^n)",
  },
];

  // ====== Initialize Variables ======
  let currentQuestionIndex = 0; // Keeps track of current question
  let score = 0; // Tracks user's score

  // ====== Button Event Listeners ======
  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);

  // ====== Function to Start the Quiz ======
  function startQuiz() {
    startBtn.classList.add("hidden");         // Hide start button
    resultContainer.classList.add("hidden");  // Hide result section
    questionContainer.classList.remove("hidden"); // Show quiz section
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(); // Show first question
  }

  // ====== Function to Display Current Question ======
  function showQuestion() {
    nextBtn.classList.add("hidden"); // Hide next button until user selects answer
    const current = questions[currentQuestionIndex];

    // Display question number and text
    questionText.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}: ${current.question}`;

    // Clear old choices
    choicesList.innerHTML = "";

    // Create and display new choices
    current.choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;

      // When user clicks an option
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  // ====== Function to Handle Answer Selection ======
  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Disable all options after user selects one
    Array.from(choicesList.children).forEach((li) => {
      li.classList.add("disabled"); // Prevent further clicks

      // Highlight correct answer in green
      if (li.textContent === correctAnswer) li.classList.add("correct");

      // Highlight selected wrong answer in red
      if (li.textContent === choice && choice !== correctAnswer)
        li.classList.add("wrong");
    });

    // Increase score if correct answer selected
    if (choice === correctAnswer) score++;

    // Show "Next Question" button
    nextBtn.classList.remove("hidden");
  }

  // ====== Function to Move to Next Question ======
  function nextQuestion() {
    currentQuestionIndex++;

    // If more questions remain, show next one; else show result
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  // ====== Function to Show Final Result ======
  function showResult() {
    questionContainer.classList.add("hidden");  // Hide quiz section
    resultContainer.classList.remove("hidden"); // Show result section
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }

  // ====== Function to Restart the Quiz ======
  function restartQuiz() {
    resultContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
    startBtn.classList.remove("hidden"); // Show Start button again
  }
});
