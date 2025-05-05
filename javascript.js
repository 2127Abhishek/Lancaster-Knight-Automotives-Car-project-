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
            title: "India's Auto Retail Sales Rise by 2.95% in April",
            date: "May 5, 2025 IST:8:00 AM", 
            content :"India's automobile retail sales experienced a modest increase of 2.95% in April 2025, totaling 2,287,952 units, according to the Federation of Automobile Dealers Associations (FADA). This growth was primarily driven by the two-wheeler and passenger vehicle segments, while commercial vehicle sales remained relatively flat. The industry is closely monitoring the impact of the ongoing Lok Sabha elections on consumer sentiment and sales trends."
        },
        {
            title: "BYD Unveils Sealion 7 Electric SUV in India",
            date: "May 5, 2025 IST:9:00 AM",
            content: "Chinese automaker BYD has introduced the Sealion 7, a premium electric SUV, in the Indian market. The vehicle boasts a range exceeding 500 km and features a high-quality cabin, aiming to compete with models like the Kia EV6 and Mercedes-Benz EQB. The Sealion 7 is part of BYD's strategy to strengthen its presence in India's growing EV sector."
        },
        {
            title: "Jaguar Land Rover Resumes Exports to the U.S. Amid Tariff Challenges",
            date: "May 5, 2025 IST:11:00 PM",
            content: "Jaguar Land Rover (JLR) has recommenced vehicle exports to the United States after a temporary halt caused by the imposition of a 25% tariff on imported cars by the U.S. government. The company is adapting to the new trade conditions while formulating long-term strategies to navigate the evolving tariff landscape."
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
