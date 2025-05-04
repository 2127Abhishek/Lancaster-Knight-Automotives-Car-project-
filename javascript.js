// Array of car models
const carModels = ["Toyota","Honda","Chevrolet","Mercedes-Benz","BMW","Audi","Nissan","Tesla","Volkswagen","Kia","Porsche","Jaguar","Tata","Lamborghini","Ferrari","McLaren","Bugatti","Pagani","Koenigsegg","Aston Martin","Rolls-Royce","Bentley","Maserati","Genesis","Cadillac","Lexus","Infiniti","Maruti Suzuki","Mahindra","Omni","Volvo","Mg hector","Hyundai"]
function showSuggestions(query) {
const suggestionsBox = document.getElementById("suggestions");
suggestionsBox.innerHTML = ""; // Clear previous suggestions

if (query.length === 0) {
return; // Don't show suggestions if input is empty
}

// Filter car models based on query
const filteredModels = carModels.filter(model => 
model.toLowerCase().includes(query.toLowerCase())
);

// Create and display suggestion items
filteredModels.forEach(model => {
const suggestionItem = document.createElement("div");
suggestionItem.textContent = model;
suggestionItem.onclick = () => {
document.getElementById("search").value = model; // Set input value to selected suggestion
suggestionsBox.innerHTML = ""; // Clear suggestions
};
suggestionsBox.appendChild(suggestionItem);
});
}
document.addEventListener('DOMContentLoaded', () => {
    const newsArticles = [
        {
            title: "Maruti Suzuki to Increase Car Prices by Up to 4% from April 2025",
            date: "April 28, 2025 IST:8:00 AM", 
            content :"Maruti Suzuki has announced a price hike of up to 4% across its vehicle lineup, effective from April 2025. The increase is attributed to rising input costs and regulatory requirements."
        },
        {
            title: "Kia Carens Facelift Launch Confirmed for May 8",
            date: "April 28, 2025 IST:12:00 PM",
            content: "Kia India has announced that the updated 2025 Carens will debut on May 8. The facelifted model is expected to feature refreshed styling, new lighting elements, updated alloy wheels, and an enhanced feature list."
        },
        {
            title: "India's Hottest New Car Launches – EVs & Facelifts!",
            date: "April 28, 2025 IST:3:00 PM",
            content: "April 2025 has seen significant activity in the Indian automotive market, with major launches including Tata's Harrier EV, MG's Cyberster and M9 EV, Kia Carens facelift, and Volkswagen's Tiguan R-Line"
        }
    ];

    const newsContainer = document.getElementById('news-articles');
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('inner');

    newsArticles.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p><em>${article.date}</em></p>
            <p>${article.content}</p>
        `;

        innerDiv.appendChild(articleDiv);
    });

    newsContainer.appendChild(innerDiv);
});

// Attach input event listener to the search bar
document.getElementById("search").addEventListener("input", function () {
showSuggestions(this.value);
});
// JavaScript to handle search functionality
document.getElementById("searchButton").addEventListener("click", function() {
    // Get the search input
    const searchQuery = document.getElementById("search").value.toLowerCase();

    // Redirect based on search input
    if (searchQuery === "honda") {
        window.location.href = "Honda.html"; // Replace with the actual file path for Honda
    } else if (searchQuery === "audi") {
        window.location.href = "Audi(search).html"; // Replace with the actual file path for Toyota
    } else if (searchQuery === "hyundai") {
        window.location.href = "Hyundai(search).html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "aston martin") {
        window.location.href = "Aston_Martin.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "mclaren") {
        window.location.href = "Mclaren.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "volvo") {
         window.location.href = "Volvo.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "volkswagen") {
        window.location.href = "Volkswagen.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "toyota") {
        window.location.href = "Toyota.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "tesla") {
        window.location.href = "Tesla.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "nissan") {
        window.location.href = "Nissan.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "mercedes-benz") {
        window.location.href = "Mercedes-Benz.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "kia") {
        window.location.href = "Kia.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "chevrolet") {
        window.location.href = "Chevrolet.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "bmw") {
        window.location.href = "BMW.C.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "lexus") {
        window.location.href = "Lexus.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "maruti suzuki") {
        window.location.href = "MarutiSuzuki.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "infiniti") {
        window.location.href = "Infiniti.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "mahindra") {
        window.location.href = "Mahindra.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "maserati") {
        window.location.href = "Maserati.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "cadillac") {
        window.location.href = "Cadillac.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "koenigsegg") {
        window.location.href = "Koenigsegg.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "pagani") {
        window.location.href = "Pagani.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "omni") {
        window.location.href = "omni.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "mg hector") {
        window.location.href = "mg hector.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "lamborghini") {
        window.location.href = "lamborghini.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "tata") {
        window.location.href = "tata.html";// Replace with the actual file path for BMW
    }else if (searchQuery === "ferrari") {
        window.location.href = "ferrari.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "jaguar") {
        window.location.href = "jaguar.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "porsche") {
        window.location.href = "porsche.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "bugatti") {
        window.location.href = "bugatti.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "bentley") {
        window.location.href = "Bentleycars.html"; // Replace with the actual file path for BMW
    }else if (searchQuery === "rolls-royce") {
        window.location.href = "Rolls_Royce.html"; // Replace with the actual file path for BMW
    }
     else {
        alert("No results found for: " + searchQuery); // Handle cases where the input doesn't match
    }
});