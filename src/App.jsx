// import './App.css'

// function App() {
//     return (
//     <>
//       <h1>NPM RUN DEV</h1>
//     </>
//   )
// }

// export default App
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
