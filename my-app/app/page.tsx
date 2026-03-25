import LandingPage from "../components/Home/page";
export default function Home() {
  return (
    <main className="p-10 w-full">
      <div className="max-w-[1440px] mx-auto flex justify-center pt-5">
        <div className="max-w-[960px] flex flex-col gap-5 py-5">
          <h1 className="text-[#0D141C] text-center text-3xl font-semibold">
            Welcome to ConnectUni
          </h1>

          <p className="text-center text-[#0D141C]">
            ConnectUni is a platform designed to bridge the gap between
            university students and real-world projects and internships. Whether
            you're a student looking for opportunities or a company seeking
            talented individuals, ConnectUni has you covered.
          </p>

          <LandingPage
            image="/PictureOne.png"
            imageInfo="Student Image"
            width={460}
            height={250}
            headingText="For Students"
            paragraphText="Explore a wide range of projects and internships tailored to your skills and interests. Build your portfolio, gain valuable experience, and connect with leading companies."
            buttonText="Create Student Profile"
            buttonUrl="/signup"
          />
            <LandingPage
            image="/PictureTwo.png"
            imageInfo="Company Image"
            width={460}
            height={250}
            headingText="For Companies"
            paragraphText="Find talented students to work on your projects and internships. Post opportunities, review applications, and connect with the next generation of professionals."
            buttonText="Create Company Profile"
            buttonUrl="/signup"
          />
        </div>
      </div>
    </main>
  );
}
