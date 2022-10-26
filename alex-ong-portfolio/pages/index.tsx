import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import {
  PageInfo,
  Skill,
  Project,
  Social,
  Experience,
  Photography as Photos,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPhotos } from "../utils/fetchPhotos";
import Photography from "../components/Photography";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  photos: Photos;
};

const Home = ({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  photos,
}: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    "
    >
      <Head>
        <link
          rel="shortcut icon"
          href="https://logopond.com/logos/8714ce1853dbcfbaf924f82072edd652.png"
        />
        <title>Alex Ong</title>
      </Head>

      {/* Heaader */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Photography? */}
      <section id="photography" className="snap-center">
        <Photography photos={photos} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer z-20">
          <div className="flex justify-center">
            <img
              className="h-10 w-10 rounded-full  filter grayscale hover:grayscale-0 cursor-pointer"
              src={FOOTER_LOGO}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

const FOOTER_LOGO = "https://i.postimg.cc/5NYCshyT/IG-16.jpg";

// Incremental Static Regeneration
//
// If we want Per Request regeneration, switch to Server Side Rendering (SSR)
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const photos: Photos = await fetchPhotos();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      photos,
    },
    // Next.js will attempt to regenerate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // This helps with caching the data
    revalidate: 10,
  };
};
