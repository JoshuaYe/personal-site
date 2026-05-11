import LinkedIn from "../assets/LinkedIn";
import Github from "../assets/Github";

export default function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-24 pb-36">
      <LinkedIn />
      <Github />
      <a href="mailto:joshua.ye@live.com" className="text-link footer">
        Contact
      </a>
    </footer>
  );
}
