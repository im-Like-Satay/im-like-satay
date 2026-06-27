// document.addEventListener('DOMContentLoaded', function () {
//     const loadMoreBtn = document.getElementById('load-more');
//     const blogPostsContainer = document.getElementById('blog-posts');    
//     let currentPage = 2;

//     // Get the active search term
//     function getSearchTerm() {
//         const urlQ = new URLSearchParams(location.search).get('s') || '';
//         return (load_more_params && load_more_params.search) ? load_more_params.search : urlQ;
//     }

//     // Simple formatter for “%s”
//     function fmt(tpl, value) {
//         return String(tpl).replace('%s', value);
//     }

//     if (loadMoreBtn && blogPostsContainer) {
//         loadMoreBtn.addEventListener('click', function () {
//             const button = this;
//             button.disabled = true;
//             button.innerText = 'Loading...';
//             // First, define activeCategory at the top or retrieve it dynamically
//             let activeCategory = document.querySelector('.category-filter.active')?.dataset.category || '';                        
//             const q = getSearchTerm();

//             // fetch(`${load_more_params.ajaxurl}?action=load_more_posts&page=${currentPage}&search=${encodeURIComponent(load_more_params.search)}`)
//             // fetch(`${load_more_params.ajaxurl}?action=load_more_posts&page=${currentPage}&search=${encodeURIComponent(load_more_params.search)}&category=${encodeURIComponent(activeCategory)}`)
//             fetch(`${load_more_params.ajaxurl}?action=load_more_posts&page=${currentPage}&search=${encodeURIComponent(q)}&category=${encodeURIComponent(activeCategory)}`)
//                 .then(res => res.text())
//                 .then(data => {
//                     if (data.trim() !== '') {
//                         blogPostsContainer.insertAdjacentHTML('beforeend', data);
                        
//                         // Update the global posts array
//                         if (window.posts) {
//                             const newItems = Array.from(blogPostsContainer.querySelectorAll('.blog-post-item'));
//                             window.posts = newItems;
//                         }

//                         // Optional: If filterAndSort exists globally, call it
//                         if (typeof filterAndSort === 'function') {
//                             filterAndSort();
//                         }
                        
//                         // filterAndSort();
//                         currentPage++;
//                         button.disabled = false;
//                         button.innerText = 'Load More';
//                     } else {
//                         button.innerText = 'No More Posts';
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Load more error:', error);
//                     button.innerText = 'Error';
//                 });
//         });
//     }
// });
