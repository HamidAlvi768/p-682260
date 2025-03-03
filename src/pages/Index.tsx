import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const Index = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-center">
      <div className="relative w-full max-w-[1552px] px-4 pt-11">
        <Header />
        <Hero />
        <Stats />
      </div>

      {/* Partners Section */}
      <section className="w-full max-w-[1552px] px-4 mt-16">
        <h2 className="text-4xl text-[#101E46] font-bold text-center capitalize leading-[1.3]">
          Our partner
        </h2>
        <div className="overflow-x-auto flex w-full flex-col overflow-hidden justify-center mt-10 py-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b027bf53571e713cc9160c32317806f68695d82c701cad794346de8be8180fb?placeholderIfAbsent=true"
            className="aspect-[22.73] object-contain w-full"
            alt="Partners"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-[1581px] mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/222925e929905ce277e249b707e4d8ce36afae70a00201cdc9715ec66737d96b?placeholderIfAbsent=true"
              className="aspect-[1.26] object-contain w-full"
              alt="Features"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[45px] font-semibold leading-[60px]">
              Define specific, measurable goals for your students
            </h2>
            <p className="text-[rgba(108,108,108,1)] text-[21px] leading-[31px]">
              Focus on what students need most, whether it's foundational
              knowledge or advanced skills. Tailor your lesson plans to address
              individual learning styles and challenges.
            </p>
            <div className="mt-8">
              <h3 className="text-[32px] font-medium leading-loose">
                No Fee to join
              </h3>
              <p className="text-[rgba(108,108,108,1)] text-[21px] leading-[31px] mt-4">
                Browse education talent profiles, explore projects, or schedule
                a consultation.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-[32px] font-medium leading-loose">
                Finding good client
              </h3>
              <p className="text-[rgba(108,108,108,1)] text-[21px] leading-[31px] mt-4">
                Browse education talent profiles, explore projects, or schedule
                a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full max-w-[1530px] px-4 mt-24">
        <h2 className="text-[45px] font-semibold text-center">
          Browse Subject by category
        </h2>
        <p className="text-[rgba(108,108,108,1)] text-[21px] text-center mt-6">
          School subjects can be categorized into various disciplines that
          students typically encounter throughout their education. Here's a list
          of common school subjects broken down into categories:
        </p>

        <div className="grid md:grid-cols-4 gap-5 mt-12">
          <SubjectCard
            title="Mathematics"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Science"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Humanities"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Content Writing"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-16">
          <SubjectCard
            title="Commerce Stream"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Humanities"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Arts and Design"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
          <SubjectCard
            title="Content Writing"
            description="Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi."
          />
        </div>

        <button className="mx-auto mt-10 bg-[rgba(86,79,253,1)] text-[27px] text-white font-bold tracking-[0.13px] px-8 py-4 rounded-[18px] hover:bg-opacity-90 transition-colors">
          Check More
        </button>
      </section>

      {/* CTA Section */}
      <section className="bg-[rgba(86,79,253,1)] w-full mt-24 py-20">
        <div className="max-w-[1552px] mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="text-white">
            <h2 className="text-[75px] font-semibold leading-[99px] max-md:text-[40px] max-md:leading-[58px]">
              The leading freelance solution for educational institutions.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-14">
              <div>
                <h3 className="text-[32px] font-bold">
                  Dedicated hiring experts
                </h3>
                <p className="text-base mt-3.5">
                  Count on an account manager to find you the right talent and
                  see to your project's every need.
                </p>
              </div>
              <div>
                <h3 className="text-[32px] font-bold">
                  Satisfaction guarantee
                </h3>
                <p className="text-base mt-3.5">
                  Count on an account manager to find you the right talent and
                  see to your project's every need.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/583cf9fd4cc29ba022c55538cd7f4b83eb9379586df1143d7e9a9072ace7e77a?placeholderIfAbsent=true"
              className="w-full h-auto"
              alt="CTA"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[1556px] px-4 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Guy Hawkins"
            timeAgo="1 week ago"
            rating={5}
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef485f07b1a9c2734cef4f78eeba34f00da8cadcc32d418f1b6c0c146b73b48?placeholderIfAbsent=true"
            content="I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
          />
          <TestimonialCard
            name="Bessie Cooper"
            timeAgo="6 hours ago"
            rating={5}
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/6243eef3e4a7b37cf762dbdc211c8a541ea46a1826f3acf7366a6e99f557b738?placeholderIfAbsent=true"
            content="Webflow course was good, it coves design secrtes, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
