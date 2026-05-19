import { AppLayout } from "./layout/AppLayout";

import { Route, Routes } from "react-router-dom";

import { Overview } from "./pages/overview/Overview";
import { Tools } from "./pages/tools/Tools";



function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </AppLayout>
  );
}

export default App;