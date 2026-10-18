import Header from "@/components/layout/Header";
import { mainNav } from "@/config/site";

function getActiveHref() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return mainNav.find((item) => item.href === path)?.href ?? "/";
}

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Header activeHref={getActiveHref()} />
      <main id="main" />
    </div>
  );
}
