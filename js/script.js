const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(
    document.getElementById("height").value.replace(",", ".")
  );

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  if (height > 3) {
    alert("Por favor, insira uma altura válida (menor que 3 metros).");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  const description = document.getElementById("description");

  value.textContent = bmi.replace(".", ",");
  document.getElementById("infos").classList.remove("hidden");

  let classification = "";
  let colorClass = "";

  if (bmi < 18.5) {
    classification = "Cuidado! Você está abaixo do peso.";
    colorClass = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Você está no peso normal.";
    colorClass = "normal-weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    classification = "Cuidado! Você está com sobrepeso.";
    colorClass = "overweight";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    classification = "Cuidado! Você está com obesidade grau 1.";
    colorClass = "obesity-1";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    classification = "Cuidado! Você está com obesidade grau 2.";
    colorClass = "obesity-2";
  } else {
    classification = "Cuidado! Você está com obesidade grau 3.";
    colorClass = "obesity-3";
  }

  description.textContent = classification;
  description.className = colorClass;
});
