import {
  BrowserRouter,
  Routes as RoutesV6,
  Route,
  Navigate,
} from "react-router-dom";

import { Layout } from "../components/layout/layout";
import { Dashboard } from "../containers/dashboard/dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesV6>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </RoutesV6>
    </BrowserRouter>
  );
};

export { Routes };
