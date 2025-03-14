document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.display-content');
    const displayedContents = document.querySelectorAll('.content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(tabBtn => tabBtn.classList.remove('.active'));
            this.classList.add('.active');

            displayedContents.forEach(content => content.style.display = 'none');

            const selectedTab = this.getAttribute('data-tab');
            document.getElementById(`content-${selectedTab}`).style.display = 'flex';
        });
    });
});