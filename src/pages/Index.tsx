import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const Index = () => {
  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden">
      {/* Header */}
      <Container className="px-6">
        <Header />
      </Container>

      {/* Hero Section - No horizontal padding */}
      <Container className="">
        <Hero />
      </Container>

      {/* Stats Section */}
      <Container className="">
        <Stats />
      </Container>

      {/* Partners Section */}
      <Container as="section" className="mt-16 px-6">
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
      </Container>

      {/* Features Section */}
      <Container as="section" className="mt-16 px-6">
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
      </Container>

      {/* Categories Section */}
      <Container as="section" className="mt-24 px-6">
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

        <Button size="xl" className="mx-auto block mt-10">
          Check More
        </Button>
      </Container>

      {/* CTA Section */}
      <section className="bg-[rgba(86,79,253,1)] w-full mt-24 py-20">
        <Container className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="text-white md:col-span-7">
              <h2 className="text-[60px] font-semibold max-md:text-[40px] max-md:leading-[58px]">
                The leading freelance solution for educational institutions.
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-14">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M5.33334 16H26.6667M26.6667 16L18.6667 8M26.6667 16L18.6667 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h3 className="text-[32px] font-bold leading-tight">
                      Dedicated hiring experts
                    </h3>
                    <p className="text-base mt-3.5 text-white/80">
                      Count on an account manager to find you the right talent and
                      see to your project's every need.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M5.33334 16H26.6667M26.6667 16L18.6667 8M26.6667 16L18.6667 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h3 className="text-[32px] font-bold leading-tight">
                      Satisfaction guarantee
                    </h3>
                    <p className="text-base mt-3.5 text-white/80">
                      Count on an account manager to find you the right talent and
                      see to your project's every need.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M5.33334 16H26.6667M26.6667 16L18.6667 8M26.6667 16L18.6667 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h3 className="text-[32px] font-bold leading-tight">
                      Advanced management
                    </h3>
                    <p className="text-base mt-3.5 text-white/80">
                      Count on an account manager to find you the right talent and
                      see to your project's every need.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M5.33334 16H26.6667M26.6667 16L18.6667 8M26.6667 16L18.6667 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h3 className="text-[32px] font-bold leading-tight">
                      Flexible payment models
                    </h3>
                    <p className="text-base mt-3.5 text-white/80">
                      Count on an account manager to find you the right talent and
                      see to your project's every need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/583cf9fd4cc29ba022c55538cd7f4b83eb9379586df1143d7e9a9072ace7e77a?placeholderIfAbsent=true"
                className="w-full h-auto"
                alt="CTA"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Container as="section" className="my-24 px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-[45px] font-semibold text-center">
            What Our Students Say
          </h2>
          <p className="text-[#6C6C6C] text-[21px] text-center mt-6 max-w-[800px]">
            Real stories from our students who have experienced the quality of our education system and achieved their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
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
      </Container>

      <Footer />
    </div>
  );
};

export default Index;
