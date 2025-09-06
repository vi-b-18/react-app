// src/components/Layout.tsx
import React, {type ReactNode } from "react";
import Header from "./header.tsx";
import Footer from "./footer.tsx"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

