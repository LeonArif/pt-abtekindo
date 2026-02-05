function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          PT ABTEKINDO
        </h1>
        <p className="text-2xl text-white/90">
          Website Under Development 🚀
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            Learn More
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default App