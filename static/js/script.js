document.getElementById("insurance-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const sex = parseInt(document.getElementById("sex").value);
    const bmi = parseFloat(document.getElementById("bmi").value);
    const children = parseInt(document.getElementById("children").value);
    const smoker = parseInt(document.getElementById("smoker").value);
    const region = parseInt(document.getElementById("region").value);

    const data = { age, sex, bmi, children, smoker, region };

    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        document.getElementById("result").textContent = `Charges: ${result.prediction.toFixed(2)}`;
    } catch (error) {
        console.error("Erro ao fazer a previsão:", error);
        document.getElementById("result").textContent = "Erro ao calcular a previsão.";
    }
});
