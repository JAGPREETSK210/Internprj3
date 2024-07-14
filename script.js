let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

function toggleDescription(index) {
    const descriptions = document.querySelectorAll('.post-description');
    descriptions[index].style.display = descriptions[index].style.display === 'block' ? 'none' : 'block';
}


const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', searchPosts);
                    /* It is used to create a search bar */
function searchPosts() {
    const query = searchBar.value.toLowerCase();
    const posts = document.querySelectorAll('.okay, .nice, .good'); 
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase(); 
        const description = post.querySelector('.post-description').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
