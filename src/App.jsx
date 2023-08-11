import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListPages from "./pages/job-list";
import AddJobPages from "./pages/add-job";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobListPages />} />
        <Route path="/addjob" element={<AddJobPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
