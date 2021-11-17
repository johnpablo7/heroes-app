import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/*" element={<DashboardRoutes />} />
			</Routes>
		</Router>
	);
};
