type TProps = {
  msg: string;
};
export async function getServerSideProps() {
  const data = await fetch('https://lorem-api.com/api/lorem').then((res) => res.text());
  return { props: { msg: data } };
}

export default function AboutMe({ msg }: TProps) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">About Me</h1>
      <p>{msg}</p>
    </>
  );
}
