import WorkData from "@/data/WorkData";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[1080px] mx-auto pt-[15em] bg-black">
      <h1 className="flex text-left text-5xl pb-[2em]">
        Notícias, Ideias, Inspirações.
      </h1>
      <div className="lg:grid grid-cols-2 gap-10 grid-flow-row">
        {WorkData.map((value, index) => {
          return (
            <div className="lg:m-2 m-4" key={index}>
              <Link
                href={
                  "/noticias/" + value.title.replace(/\s+/g, "-").toLowerCase()
                }
              >
                <Image
                  src={value.image}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full lg:h-[480px] h-[360px] hover:scale-[1.015] ease-in duration-200"
                  style={{ objectFit: "cover", borderRadius: 4 }}
                />
                <p className="text-sm lg:pt-4 py-2">{value.date}</p>
                <h2 className="text-2xl lg:py-2 pb-2">{value.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
