// Add this JavaScript before closing </body>
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-card');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    let visibleProjects = 4; // Initial visible projects
    
    // Hide projects beyond initial visible count
    projects.forEach((project, index) => {
        if(index >= visibleProjects) {
            project.classList.add('hidden');
        }
    });

    seeMoreBtn.addEventListener('click', () => {
        // Toggle visibility for all projects
        projects.forEach(project => {
            project.classList.toggle('hidden');
        });

        // Change button text
        if(seeMoreBtn.textContent === 'See More') {
            seeMoreBtn.textContent = 'See Less';
            seeMoreBtn.style.backgroundColor = '#e74c3c'; // Change color when expanded
        } else {
            seeMoreBtn.textContent = 'See More';
            seeMoreBtn.style.backgroundColor = '#3498db';
        }
    });
});