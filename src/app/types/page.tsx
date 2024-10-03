export default function Page() {
  type t = { a: 1; b: '1' } | { a: 2; b: 'b2' };
  const a: t[] = [];
  a.map((item) => {
    if (item.a === 1) console.log(item);
  });
  return <div></div>;
}
