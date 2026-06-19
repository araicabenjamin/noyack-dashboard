import { AppLayout } from "./layout/AppLayout";
import { Support } from "./pages/support/Support";
import { Route, Routes } from "react-router-dom";

import { Overview } from "./pages/overview/Overview";
import { Library } from "./pages/library/Library";
import { Events } from "./pages/events/Events";
import { Tools } from "./pages/tools/Tools";
import { WealthProfile } from "./pages/wealthprofile/WealthProfile";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/library" element={<Library />} />
        <Route path="/events" element={<Events />} />
        <Route path="/wealth-profile" element={<WealthProfile />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
