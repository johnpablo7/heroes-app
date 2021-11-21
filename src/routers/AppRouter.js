import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/login" element={<LoginScreen />} /> */}

				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginScreen />
						</PublicRoute>
					}
				/>

				<Route
					path="/*"
					element={
						<PrivateRoute>
							<DashboardRoutes />
						</PrivateRoute>
					}
				/>

				{/* <Route path="/*" element={<DashboardRoutes />} /> */}
			</Routes>
		</Router>
	);
};
