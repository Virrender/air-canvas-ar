import './App.css'
function App() {
 return (
  <main className="app-shell">
    <header className="topbar">
      <h1>Air Canvas</h1>
      <span>Camera Offline</span>
    </header>

    <div className="workspace">
      <aside className="sidebar">
        <h2>Workspace</h2>
        <p>Camera controls will appear here.</p>
      </aside>

      <section className="studio">
        <h2>Camera Preview</h2>
        <div className="camera-stage">
          Camera feed will appear here.
        </div>
      </section>
    </div>
  </main>
)
}

export default App