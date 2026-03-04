const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderEditArticleView = ({ article, isUpdated = false }) => {
    const successMessage = isUpdated
        ? '<p style="color:#0f766e;margin:0 0 12px;">Article updated successfully.</p>'
        : '';

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Update Article</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; }
    .container { max-width: 700px; margin: 32px auto; background: #fff; padding: 20px; border-radius: 8px; }
    h1 { margin-top: 0; }
    label { display: block; margin: 14px 0 6px; font-weight: 600; }
    input, textarea { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #ccc; border-radius: 6px; }
    textarea { min-height: 180px; resize: vertical; }
    button { margin-top: 16px; padding: 10px 16px; border: 0; border-radius: 6px; background: #111827; color: #fff; cursor: pointer; }
  </style>
</head>
<body>
  <main class="container">
    <h1>Update Article</h1>
    ${successMessage}
    <form method="post" action="/admin/article/edit/${article.id}">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" value="${escapeHtml(article.name)}" required />

      <label for="slug">Slug</label>
      <input id="slug" name="slug" type="text" value="${escapeHtml(article.slug)}" required />

      <label for="image">Image URL</label>
      <input id="image" name="image" type="text" value="${escapeHtml(article.image)}" />

      <label for="body">Body</label>
      <textarea id="body" name="body" required>${escapeHtml(article.body)}</textarea>

      <button type="submit">Update Article</button>
    </form>
  </main>
</body>
</html>`;
};

module.exports = {
    renderEditArticleView
};
