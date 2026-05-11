import { Link } from "react-router-dom";
import bscDocuments from "../assets/bsc_documents.jpg";
export default function Cloudflare() {
  return (
    <div className="page-container">
      <div className="space-y-12 w-full max-w-[615px] px-10">
        <Link to="/" className="text-link underline">
          ← Back
        </Link>
        <div className="space-y-8">
          <h1 className="text-xl">Cloudflare</h1>
          <img src={bscDocuments} alt="Cloudflare" className="rounded-lg" />
          <div className="flex justify-between bg-slate-700 p-7 rounded-lg">
            <div className="space-y-2">
              <p className="experience-details">Industry</p>
              <p>Developer Tools</p>
            </div>
            <div className="space-y-2">
              <p className="experience-details">Role</p>
              <p>Product Manager</p>
            </div>
            <div className="space-y-2">
              <p className="experience-details">Timeframe</p>
              <p>Summer 2024</p>
            </div>
          </div>
          <p>
            Cloudflare is an Internet and security company that powers over 20%
            of all websites. Cloudflare Workers is enables thousands of
            developers to build and deploy on Cloudflare's global network
            instantly.
          </p>
          <p>
            On the deployments team, I helped improve the experience of
            configuring and publishing Workers. I notably designed a new
            role-based access control system (RBAC) to enable large teams to
            safely collaborate on Workers.
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-xl">Securing enterprise development with RBAC</p>
          <p>
            Investor onboarding was a manual, week-long process requiring over
            60 pages of paperwork with back-and-forth communication. This
            high-friction experience frustrated potential clients, leading to
            abandoned applications and lost revenue for the fund.
          </p>
          <img
            src={bscDocuments}
            alt="BSC onboarding app walkthrough part 1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p>
            To solve this, I built an automated onboarding platform that
            condenses 60 pages of regulatory forms into a five-step survey. It
            maps responses to pre-fill client documents, which are then signed
            directly through an embedded DocuSign integration.
          </p>
          <img
            src={bscDocuments}
            alt="BSC onboarding app walkthrough part 2"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p>
            The platform is secured with passwordless magic link authentication.
            It also handles uploading of supporting files, such as photo IDs and
            corporate records. Investor progress and responses are tracked on an
            admin dashboard.
          </p>
        </div>
        <div className="space-y-3">
          <img
            src={bscDocuments}
            alt="BSC onboarding app designs"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-3">
            <img
              src={bscDocuments}
              alt="BSC onboarding app PRD"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={bscDocuments}
              alt="BSC onboarding app technical spec"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-8">
          <p>
            I owned the platform's lifecycle, creating and implementing product
            requirements, wireframes, and technical specifications. Some tools I
            used were Next.js, Zod for validation, and the DocuSign SDK. I also
            managed testing, deployment, and customer support.
          </p>
          <p>
            The product launched in January 2026 and has reduced the average
            onboarding time from a week to just a few hours. It has already
            brought in over $750k in capital and continues to help grow our
            fund.
          </p>
        </div>
        <p>Logic chart??</p>
        {/* <div className="space-y-8">
          <p className="text-xl">
            Converting lengthy emails into important insights with AI
          </p>
        </div> */}

      </div>
    </div>
  );
}
