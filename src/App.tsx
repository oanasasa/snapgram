import "./globals.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <div>
      <main className="flex h-screen">
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/sing-in" element={<SigninForm />} />
            <Route path="/sing-up" element={<SignupForm />} />
          </Route>

          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
