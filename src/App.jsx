import Navbar from "./components/Navbar"
import Hero from "./components/Hero"



function App() {

  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased">

      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 z-[-2] h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
      </div>
      
    </div>
  )
}

export default App
