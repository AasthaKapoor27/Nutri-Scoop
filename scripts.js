// ===== CUSTOM ALERT FUNCTIONS =====
function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    document.getElementById('alertMessage').textContent = message;
    alertBox.style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// ===== NUTRITION CALCULATOR =====
function calculateSugarInTbsp(sugarTotal) {
    return (sugarTotal / 12).toFixed(2); // 1 tbsp = ~12g sugar
}

// ===== PRODUCT NUTRITION FUNCTIONS =====
function showCokeNutrition() {
    const sugarTotal = (10.6 * 300) / 100; // 10.6g per 100ml × 300ml
    const sugarTablespoons = calculateSugarInTbsp(sugarTotal);
    showCustomAlert(`Coca Cola (300ml)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showRealActivCranberryNutrition() {
    const sugarTablespoons = calculateSugarInTbsp(125); // 125g total
    showCustomAlert(`Real Fruit Juice Cranberry (1L)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showRealActivOrangeNutrition() {
    const sugarTablespoons = calculateSugarInTbsp(110);
    showCustomAlert(`Real Fruit Juice Orange (1L)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showJamunJuiceNutrition() {
    const sugarTablespoons = calculateSugarInTbsp(18.2);
    showCustomAlert(`Jamun Juice (200ml)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showDietCokeNutrition() {
    showCustomAlert("Diet Coke (300ml)\nSugar: 0 tablespoons (Sugar-free)");
}

function showCoconutWaterNutrition() {
    const sugarTotal = (4.0 * 1200) / 100;
    const sugarTablespoons = calculateSugarInTbsp(sugarTotal);
    showCustomAlert(`Coconut Water (1.2L)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showJimmysSparklingWaterNutrition() {
    showCustomAlert("Jimmy's Sparkling Water\nSugar: 0 tablespoons (Sugar-free)");
}

function showPepsiNutrition() {
    const sugarTotal = (11 * 330) / 100;
    const sugarTablespoons = calculateSugarInTbsp(sugarTotal);
    showCustomAlert(`Pepsi (330ml)\nSugar: ${sugarTablespoons} tablespoons`);
}

function showCoolbergNutrition() {
    showCustomAlert("Coolberg Non-Alcoholic Beer\nSugar: 0 tablespoons (Sugar-free)");
}

// ===== CLICK HANDLERS =====
document.addEventListener("DOMContentLoaded", function() {
    // Product click handlers
    document.querySelectorAll(".product img").forEach(img => {
        img.addEventListener("click", function() {
            const productName = img.getAttribute("alt");

            switch(productName) {
                case "Coca Cola": showCokeNutrition(); break;
                case "Real Fruit Juice Cranberry": showRealActivCranberryNutrition(); break;
                case "Real Fruit Juice Orange": showRealActivOrangeNutrition(); break;
                case "Coconut Water": showCoconutWaterNutrition(); break;
                case "Jamun Juice Paper Boat": showJamunJuiceNutrition(); break;
                case "Diet Coke": showDietCokeNutrition(); break;
                case "Jimmy's Sparkling Water": showJimmysSparklingWaterNutrition(); break;
                case "Pepsi": showPepsiNutrition(); break;
                case "Coolberg Malt Non-Alcoholic Beer": showCoolbergNutrition(); break;
                default: showCustomAlert("Nutrition information coming soon!");
            }
        });
    });

    // Cart button handlers (if you have them)
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.previousElementSibling.textContent;
            showCustomAlert(`Added to cart: ${productName}`);
        });
    });
});

// ===== HEALTH CONCERN REDIRECT FUNCTION =====
function selectConcern(concern) {
    // You can optionally store concern for later use:
    // localStorage.setItem("selectedConcern", concern);

    // Simple redirection to index.html
    window.location.href = "index.html";
}
