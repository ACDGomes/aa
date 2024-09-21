document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("question1").value;
    const result = document.getElementById("quiz-result");
    
    if (answer.toLowerCase() === "brasilia") {
        result.textContent = "Correto!";
    } else {
        result.textContent = "Incorreto. Tente novamente!";
    }
});
