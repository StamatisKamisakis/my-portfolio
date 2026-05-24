// Fetch the data from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('portfolio-container');

        // Loop through every project in the JSON file
        projects.forEach(project => {
            // Create a card for the project
            const card = document.createElement('div');
            card.classList.add('project-card');

            // Add the Title
            const title = document.createElement('h3');
            title.textContent = project.title;

            // Add the Description
            const description = document.createElement('p');
            description.textContent = project.description;

            // Add the Replit Button
            const button = document.createElement('a');
            button.href = project.replit_link;
            button.textContent = "View on Replit";
            button.classList.add('btn');
            button.target = "_blank"; // This makes it open in a new tab!

            // Put the title, description, and button inside the card
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(button);

            // Put the card on the website
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading projects:', error));