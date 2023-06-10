import Campaign from "@/components/Campaign";
import { Suspense } from "react";
const Page = () => {
  return (
    <div className="max-w-[1080px] mx-auto pt-[15em] pb-[8em]">
      <h1 className="flex text-left text-5xl pb-[2em]">
        Notícias, Ideias, Inspirações.
      </h1>
      <Suspense fallback={<p>loading...</p>}>
        <Campaign mode={true} />
      </Suspense>
    </div>
  );
};

export default Page;
