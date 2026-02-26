export async function GET() {
  const articles = [];
  for (let i = 0; i < 6; i++) {
    let randomSlug = Math.random().toString(36).substring(2, 5);
    let article = await fetch(`https://lorem-api.com/api/article/${randomSlug}`).then((res) =>
      res.json()
    );
    articles.push(article);
  }
  return Response.json(articles);
}
