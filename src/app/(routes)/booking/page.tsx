import Content from "./components/Content";
import Header from "./components/Header";

export default function page() {
  return (
    <div>
        <header className="container px-6 md:px-10 custom-lg:px-20 mx-auto">
            <Header />
        </header>
        <main className="container px-6 md:px-10 custom-lg:px-20 mx-auto text-[#222]">
            <Content />
        </main>
    </div>
  )
}
