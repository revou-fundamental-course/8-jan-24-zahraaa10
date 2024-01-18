document.addEventListener('DOMContentLoaded', function () {
    const squareSideInput = document.getElementById('squareSide');
    const countButton = document.getElementById('countButton');
    const switchButton = document.getElementById('switchButton');
    const resetButton = document.getElementById('resetButton');
    const resultText = document.getElementById('resultText');
    const pageTitle = document.getElementById('pageTitle');

    let isCalculatingArea = true;

    countButton.addEventListener('click', function () {
        const sideLength = parseFloat(squareSideInput.value);

        if (!isNaN(sideLength) && sideLength >= 0) {
            if (isCalculatingArea) {
                const squareArea = calculateSquareArea(sideLength);
                displayResult("Luas", sideLength, squareArea);
            } else {
                const squarePerimeter = calculateSquarePerimeter(sideLength);
                displayResult("Keliling", sideLength, squarePerimeter);
            }
        } else if (!isNaN(sideLength) && sideLength < 0) {
            alert('Panjang sisi persegi harus bernilai positif');
        } else {
            alert('Masukkan panjang sisi persegi');
        }
    });

    switchButton.addEventListener('click', function () {
        toggleMode();
    });

    resetButton.addEventListener('click', function () {
        squareSideInput.value = '';
        resultText.innerHTML = '';
    });

    function calculateSquareArea(side) {
        return side * side;
    }

    function calculateSquarePerimeter(side) {
        return 4 * side;
    }

    function displayResult(type, side, result) {
        if (type === "Luas") {
            resultText.innerHTML = `${type} = S x S<br>${type} = ${side} x ${side}<br>${type} = ${result}`;
        } else if (type === "Keliling") {
            resultText.innerHTML = `${type} = 4 x S<br>${type} = 4 x ${side}<br>${type} = ${result}`;
        }
    }

    function toggleMode() {
        isCalculatingArea = !isCalculatingArea;
        if (isCalculatingArea) {
            countButton.textContent = "Hitung Luas";
            switchButton.textContent = "Switch to Keliling";
            pageTitle.textContent = "Kalkulator Matematik Persegi - Luas";
            rumusPersegi.textContent = "Rumus: Luas = Sisi x Sisi";
            lblSquareSide.textContent = "Hitung Luas Persegi";
        } else {
            countButton.textContent = "Hitung Keliling";
            switchButton.textContent = "Switch to Luas";
            pageTitle.textContent = "Kalkulator Matematik Persegi - Keliling";
            rumusPersegi.textContent = "Rumus: Keliling = 4 x Sisi";
            lblSquareSide.textContent = "Hitung Keliling Persegi";
        }

        resultText.innerHTML = '';
    }
});
