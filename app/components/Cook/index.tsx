"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/Cook/beef2.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/chef.png"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Sơ lược
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Nghề gia truyền làm chả bò ngon.
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                Với kinh nghiệm nhiều năm, trải qua nhiều đời cải tiến công thức
                gia truyền của nghề làm chả bò Đà Nẵng, Chả bò A Quyền cam kết
                luôn có được hương vị thơm ngon cùng chất lượng đảm bảo, với tay
                Nghề khả năng cung ứng tốt, luôn được sự tin tưởng của khách
                hàng và đối tác{" "}
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                Chả bò A Quyền xin cảm ơn quý khách hàng đã ủng hộ những năm vừa
                qua cũng như trong những năm sắp tới...
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  Xem thêm
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
