function createArticle() {
    const titleInput = document.getElementById('title');
    const paragraphInput = document.getElementById('paragraph');

    const title = titleInput.value;
    const paragraph = paragraphInput.value;

    if (!title || !paragraph) {
        alert('Titolo e paragrafo sono obbligatori!');
        return;
    }

    const date = new Date();
    const formatDate = date.toLocaleDateString();

    const article = `
        <article>
            <h2>${title}</h2>
            <p>${paragraph}</p>
            <p>Data di pubblicazione: ${formatDate}</p>
        </article>
    `;

    // Aggiungi l'articolo alla pagina o invialo al server, a seconda delle tue esigenze
    console.log(article);

    // Pulisci gli input
    titleInput.value = '';
    paragraphInput.value = '';
}