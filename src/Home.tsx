import { Link } from "react-router-dom";
import bscDocuments from "./assets/bsc_documents.jpg";
import joshuaImage from "./assets/joshua.jpg";

export default function Home() {
  return (
    <div className="page-container">
      <div className="space-y-20 w-full max-w-[615px] px-10">
        <div className="flex flex-col space-y-10">
          <div className="flex justify-between">
            <h1 className="text-xl">Joshua Ye</h1>
            <a
              href="/assets/joshuaye_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link underline"
            >
              Resume
            </a>
          </div>
          <p>
            I build investment tools at a startup hedge fund in Toronto.
            Previously a product manager at{" "}
            <a
              href="https://www.cloudflare.com/"
              target="_blank"
              className="text-link underline"
            >
              Cloudflare
            </a>
            ,{" "}
            <a
              href="https://ritual.co/"
              target="_blank"
              className="text-link underline"
            >
              Ritual
            </a>
            , and studied computer science at the University of Waterloo.
          </p>

          <p>
            I deeply value having an adaptable skillset across disciplines. It
            helps me look at problems holistically and empathize with others.
            Leveraging this on high-ownership opportunities in ambiguous spaces
            excites me.
          </p>

          <p>
            I am currently training for a{" "}
            <a
              href="https://strava.app.link/1YZLM0k3v0b"
              target="_blank"
              className="text-link underline"
            >
              marathon
            </a>{" "}
            and am learning how to be a better volleyball player. I also love to{" "}
            <a
              href="https://www.goodreads.com/user/show/156080111-joshua-ye"
              target="_blank"
              className="text-link underline"
            >
              read
            </a>{" "}
            about theology and aspire to{" "}
            <a
              href="https://medium.com/uwccf/fearfully-and-wonderfully-made-f0bdfe99a4ed"
              target="_blank"
              className="text-link underline"
            >
              write
            </a>{" "}
            more.
          </p>
        </div>
        <Link to="/bsc" className="experience block">
          <img
            src={bscDocuments}
            alt="Blue Shell Capital Onboarding Project"
            className="rounded-lg"
          />
          <div className="flex justify-between">
            <p className="text-base text-link underline">Blue Shell Capital</p>
            <p className="text-sm self-center">2024 - Present</p>
          </div>
          <p className="">
            Fully owning onboarding and internal tools, from design to
            deployment. Brought in over $750k in investments.
          </p>
        </Link>
        {/* <Link to="/cloudflare" className="experience block">
          <img
            src={joshuaImage}
            alt="Joshua Ye"
            className="w-full h-[300px] rounded-lg"
          />
          <div className="flex justify-between">
            <p className="text-base text-link underline">Cloudflare</p>
            <p className="text-sm self-center">2024</p>
          </div>
          <p>
            Enabled enterprise adoption for{" "}
            <a
              href="https://workers.cloudflare.com/"
              target="_blank"
              className="text-link underline"
              onClick={(e) => e.stopPropagation()}
            >
              Workers
            </a>{" "}
            by implementing role-based access control for secure scalability.
          </p>
        </Link>
        <Link to="/ritual" className="experience block">
          <img
            src={joshuaImage}
            alt="Joshua Ye"
            className="w-full h-[300px] rounded-lg"
          />
          <div className="flex justify-between">
            <p className="text-base text-link underline">Ritual.co</p>
            <p className="text-sm self-center">2023</p>
          </div>
          <p>
            Worked on data-oriented growth initiatives to drive app engagement.
            Increased notification enablement by 20%.
          </p>
        </Link> */}
      </div>
    </div>
  );
}
