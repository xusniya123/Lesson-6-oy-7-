document.addEventListener('DOMContentLoaded', () => {
    // Kommentlar API URL
    const apiURL =  'https://jsonplaceholder.typicode.com/comments';

    // Kommentlarni olish va DOM-ga qo'shish uchun asinxron funksiya
    async function fetchAndDisplayComments() {
        try {
            // Kommentlarni olish
            const response = await fetch(apiURL);
            const comments = await response.json();

            // DOM elementini topish
            const commentsContainer = document.getElementById('comments-container');

            // Faqat 20 ta kommentni olish
            const first20Comments = comments.slice(0, 20);

            // Har bir kommentni DOM-ga qo'shish
            first20Comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';

                // Komment ma'lumotlari
                const commentHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                    <p><small>By: ${comment.email}</small></p>
                `;
                commentElement.innerHTML = commentHTML;

                // Kommentni containerga qo'shish
                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    // Kommentlarni olish va ko'rsatish
    fetchAndDisplayComments();
});


// async function fetchComments() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments')
// if (!response.ok) {
//     throw new Error ('Network response was mot ok');
// }
// let comments =(await response).json();
// displayComments (comments.slice(0,20));
//   }  catch(error) {
//     console.error ('Fetch error', error);
//   }
// }

// function displayComments(comments) {
//     comments.forEach(comment =>{
//       console.log(`ID: ${comment.id}`); 
//       console.log(`Name: ${comment.name}`); 
//     })
// }