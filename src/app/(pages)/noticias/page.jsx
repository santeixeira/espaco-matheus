import Campaign from "@/components/Campaign";
const Page = () => {
  return (
    <div className="max-w-[1080px] mx-auto pt-[15em] bg-black">
      <h1 className="flex text-left text-5xl pb-[2em]">
        Notícias, Ideias, Inspirações.
      </h1>
      <Campaign mode={true} />
    </div>
  );
};

export default Page;
