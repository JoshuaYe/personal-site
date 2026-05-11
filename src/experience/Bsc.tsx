import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bscDocuments from "../assets/bsc_documents.jpg";
import bscDesigns from "../assets/bsc_designs.png";
import bscChart from "../assets/bsc_chart.png";
import bscChartFull from "../assets/bsc_chart_full.png";
import bscWalkthrough1 from "../assets/bsc_walkthrough1.mp4";
import bscWalkthrough2 from "../assets/bsc_walkthrough2.mp4";

export default function BSC() {
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
  const [activeImageSrc, setActiveImageSrc] = useState<string | null>(null);
  const walkthrough1Ref = useRef<HTMLVideoElement | null>(null);
  const walkthrough2Ref = useRef<HTMLVideoElement | null>(null);
  const isModalOpen = Boolean(activeVideoSrc || activeImageSrc);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoSrc(null);
        setActiveImageSrc(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      walkthrough1Ref.current?.pause();
      walkthrough2Ref.current?.pause();
      return;
    }

    // These videos are muted, so browser autoplay policies should allow play().
    walkthrough1Ref.current?.play().catch(() => {});
    walkthrough2Ref.current?.play().catch(() => {});
  }, [isModalOpen]);

  return (
    <div className="page-container">
      <div className="space-y-16 w-full max-w-[615px] px-10">
        <Link to="/" className="text-link underline">
          ← Back
        </Link>
        <div className="space-y-8">
          <h1 className="text-xl">Blue Shell Capital</h1>
          <img
            src={bscDocuments}
            alt="Blue Shell Capital"
            className="rounded-lg"
          />
          <div className="flex justify-between bg-slate-700 p-7 rounded-lg">
            <div className="space-y-2">
              <p className="experience-details">Industry</p>
              <p>Finance and Investing</p>
            </div>
            <div className="space-y-2">
              <p className="experience-details">Role</p>
              <p>Product Engineer</p>
            </div>
            <div className="space-y-2">
              <p className="experience-details">Timeframe</p>
              <p>2024 - Present</p>
            </div>
          </div>
          <p>
            Blue Shell Capital is a startup hedge fund based in Toronto
            specializing in active derivatives trading. We have over $50 million
            in assets under management.
          </p>
          <p>
            I drive product definition, design, and development of many tools to
            improve the firm's operational and client experience. Here is one
            I'm particularly proud of.
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-xl">
            Digitizing the investor onboarding experience
          </p>
          <p>
            Investor onboarding was a manual, week-long process requiring over
            60 pages of paperwork with back-and-forth communication. This
            high-friction experience frustrated potential clients, leading to
            abandoned applications and lost revenue for the fund.
          </p>
          <video
            autoPlay={!activeVideoSrc}
            loop
            muted
            playsInline
            aria-label="BSC onboarding app walkthrough part 1"
            ref={walkthrough1Ref}
            onClick={() => setActiveVideoSrc(bscWalkthrough1)}
            className="w-full h-72 object-cover object-center rounded-lg experience"
          >
            <source src={bscWalkthrough1} type="video/mp4" />
          </video>
          <p>
            To solve this, I built an onboarding platform that condenses 60
            pages of regulatory forms into a five-step survey. It maps responses
            to pre-fill client documents, which are then signed directly through
            an embedded DocuSign integration.
          </p>
          <video
            autoPlay={!activeVideoSrc}
            loop
            muted
            playsInline
            aria-label="BSC onboarding app walkthrough part 2"
            ref={walkthrough2Ref}
            onClick={() => setActiveVideoSrc(bscWalkthrough2)}
            className="w-full h-72 object-cover object-center rounded-lg experience"
          >
            <source src={bscWalkthrough2} type="video/mp4" />
          </video>
          <p>
            The platform is secured with passwordless magic link authentication.
            It also handles uploading of supporting files, such as photo IDs and
            corporate records. Investor progress and responses are tracked on an
            admin dashboard.
          </p>
          <div className="space-y-3">
            <img
              src={bscDesigns}
              alt="BSC onboarding app designs"
              onClick={() =>
                window.open(
                  "https://www.figma.com/design/niKkx1EoV9ahLyYdn4NXG4/Joshua-Ye-Portfolio?node-id=0-1&t=9wuwTF8P1VUwCLh8-1",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="w-full object-cover rounded-lg experience"
            />
            <img
              src={bscChart}
              alt="BSC onboarding app logic chart"
              onClick={() => setActiveImageSrc(bscChartFull)}
              className="w-full object-cover rounded-lg experience"
            />
          </div>
          <p>
            I owned the platform's lifecycle, creating and implementing product
            requirements, wireframes (
            <a
              className="text-link underline"
              href="https://www.figma.com/design/niKkx1EoV9ahLyYdn4NXG4/Joshua-Ye-Portfolio?node-id=0-1&t=9wuwTF8P1VUwCLh8-1"
              target="_blank"
            >
              Figma
            </a>
            ), and technical specifications. Some tools I used were Next.js, Zod
            for form validation, and the DocuSign SDK.
          </p>
          <p>
            The product was tested and launched in January 2026, reducing the
            average onboarding time from a week to just a few hours. It has
            already brought in over $750k in capital and continues to help grow
            the fund.
          </p>
        </div>
        {/* <div className="space-y-8">
          <p className="text-xl">
            Converting lengthy emails into important insights with AI
          </p>
        </div> */}
      </div>

      {activeVideoSrc && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged video modal"
          onMouseDown={() => setActiveVideoSrc(null)}
        >
          <div className="max-w-6xl" onMouseDown={(e) => e.stopPropagation()}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg object-cover object-center h-128"
            >
              <source src={activeVideoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {activeImageSrc && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged logic chart modal"
          onMouseDown={() => setActiveImageSrc(null)}
        >
          <div className="h-[95vh] flex items-center justify-center">
            <img
              src={activeImageSrc}
              alt="BSC onboarding app logic chart full screen"
              className="max-w-full max-h-full object-contain rounded-lg"
              onMouseDown={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
