import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate
}));

describe('Pruebas en el <Navbar />', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			name: 'pedro',
			logged: true
		}
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter initialEntries={[ '/' ]}>
				<Routes>
					<Route path="/" element={<Navbar />} />
				</Routes>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('debe de mostrarse correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('pedro');
	});

	test('debe de llamar el logout, llamar el navigate y el dispatch con los argumentos ', () => {
		wrapper.find('button').prop('onClick')();
		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.logout
		});
		expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
