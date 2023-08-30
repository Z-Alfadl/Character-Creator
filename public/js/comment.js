const commentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#add-comment').value.trim();
  const urlArray = location.href.split('/'); 
  const character_id = urlArray[urlArray.length - 1]

  console.log(comment_text);
  
  if (comment_text && character_id) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ comment_text, character_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);
    
    if (response.ok) {
      console.log("Comment successfully added!")
      console.log(comment_text);
      document.location.replace(`/characters/${character_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

let commentForm = document.querySelector('.comment-form')
if (commentForm){
  commentForm.addEventListener('submit', commentHandler);
}


