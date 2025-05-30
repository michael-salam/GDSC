import { MdOutlineAddBox } from "react-icons/md"
import Header from "./components/Header"

function App() {

  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <main className="container mx-auto p-4">
        <div>
          <p className="text-lg font-semibold">Feed</p>
          <button><MdOutlineAddBox className="text-blue-600 text-" /></button>
        </div>
        <div></div>
      </main>
    </div>
  )
}

export default App
