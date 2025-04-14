import Header from "./components/Header";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Projects />
      <Tools />
    </div>
  );
}
