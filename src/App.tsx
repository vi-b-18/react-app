import Landing from "./assets/landing.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccessoriesPage from "./assets/accessoryPage.tsx";
import Layout from "./assets/layout.tsx";
import ContactPage  from "./assets/ContactPage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/accessories" element={<AccessoriesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
