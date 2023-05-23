import React from "react";
import Image from "next/image";
import Honors from "./Honors";

const About = () => {
  return (
    <div className=" text-black mx-auto lg:h-[2160px] max-w-[1024px] pt-10">
      <div className="mx-auto text-center py-8">
        <div className="mx-auto block">
          <h1 className="text-4xl my-10">Prof. Matheus Carneiro</h1>
          <p className="pb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            voluptate excepturi in illo enim possimus fugiat ab, cum distinctio
            veritatis eligendi blanditiis saepe nulla praesentium harum voluptas
            sunt omnis tenetur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus voluptate excepturi in illo enim possimus
            fugiat ab, cum distinctio veritatis eligendi blanditiis saepe nulla
            praesentium harum voluptas sunt omnis tenetur!
          </p>
        </div>
        <div className="mx-auto lg:flex justify-evenly lg:my-2 items-center">
          <div className=" p-4 max-w-[600px] items-center ">
            <div className="relative block">
              <Image
                src={"/image1.png"}
                width={400}
                height={400}
                alt={"imagem do Matheus Carneiro"}
                style={{
                  objectFit: "cover",
                  zIndex: 10,
                  position: "absolute",
                  marginLeft: 90,
                }}
              />
              <Image
                src={"/Corpo.png"}
                width={400}
                height={400}
                alt={"imagem do Matheus Carneiro"}
                style={{
                  objectFit: "cover",
                  zIndex: 10,
                  position: "absolute",
                }}
                className="p-12 mt-12 ml-20"
              />
              <Image
                src={"/grafismo.png"}
                width={400}
                height={400}
                alt={"imagem do Matheus Carneiro"}
                style={{
                  zIndex: 9,
                  position: "absolute",
                }}
                className=" w-[270px] h-[320px] mt-[7em] ml-[11em] "
              />
            </div>
            <div>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="100%"
                id="blobSvg"
                filter="blur(0px)"
                style={{ opacity: 1, height: 600, width: 600 }}
                mask="/image1.png"
                transform="rotate(0)"
              >
                {" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    {" "}
                    <stop
                      offset="0%"
                      style={{ stopColor: "#DEC8A6" }}
                    ></stop>{" "}
                    <stop offset="100%" style={{ stopColor: "#C2B6A9" }}></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <path id="blob" fill="url(#gradient)" style={{ opacity: 0.97 }}>
                  <animate
                    attributeName="d"
                    dur="15900ms"
                    repeatCount="indefinite"
                    values="M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z"
                  ></animate>
                </path>
              </svg>
            </div>
          </div>
          <div className="flex items-center text-left">
            <div className="text-justify text-2xl">
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptate excepturi in illo enim possimus fugiat ab, cum
                distinctio veritatis eligendi blanditiis saepe nulla praesentium
                harum voluptas sunt omnis tenetur!
              </p>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptate excepturi in illo enim possimus fugiat ab, cum
                distinctio veritatis eligendi blanditiis saepe nulla praesentium
                harum voluptas sunt omnis tenetur!
              </p>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptate excepturi in illo enim possimus fugiat ab, cum
                distinctio veritatis eligendi blanditiis saepe nulla praesentium
                harum voluptas sunt omnis tenetur!
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Honors />
        </div>
      </div>
    </div>
  );
};

export default About;
