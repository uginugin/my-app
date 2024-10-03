export default async function Page() {
  const response = await fetch(
    // 'https://backend.inko.aerokod.ru/api/v1/public/settings',
    'http://localhost:8000',
    {
      next: { revalidate: 10 },
    }
  );

  const text = await response.text();

  return <div>{JSON.stringify(text)}</div>;
}
