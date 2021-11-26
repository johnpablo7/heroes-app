import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Navigate: () => <span>Saliendo de aquí</span>
}));

describe('Pruebas en <PrivateRoute />', () => {
	Storage.prototype.setItem = jest.fn();

	test('debe de mostrar el componente si está autenticado y guardar en el localStorage', () => {
		const contexValue = {
			user: {
				logged: true,
				name: 'Pepe'
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter initialEntries={[ '/' ]}>
					<PrivateRoute>
						<h1>Private Component</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		// console.log(wrapper.html());
		// expect(wrapper.text().trim()).toBe('Private Component');
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	});

	test('debe de mostrar el componente si está autenticado', () => {
		const contexValue = {
			user: {
				logged: false,
				name: 'Pepe'
			}
		};

		const wrapper = mount(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter initialEntries={[ '/' ]}>
					<PrivateRoute>
						<h1>Private Component</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		console.log(wrapper.html());
		expect(wrapper.text().trim()).toBe('Saliendo de aquí');
	});
});
