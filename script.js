fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('portfolio-container');
        container.innerHTML = ''; // Καθαρίζει τα παλιά στοιχεία

        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            const button = document.createElement('a');
            button.href = project.live_link; // Πρέπει να γράφει live_link
            button.textContent = "View Live Project";
            button.classList.add('btn');
            button.target = "_blank";

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(button);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading projects:', error));
