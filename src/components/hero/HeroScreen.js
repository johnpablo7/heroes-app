import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { loadImage } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/dc-batman.jpg'; // Recurso estático

export const HeroScreen = () => {
	// const [ counter, setCounter ] = useState(0); <- Ejemplo para ver si funciona el useMemo

	const { heroeId } = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(heroeId), [ heroeId ]);

	const handleReturn = () => {
		navigate(-1);
		// setCounter(counter + 1);
	};

	if (!hero) {
		return <Navigate to="/" />;
	}

	const {
		// id,
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters
	} = hero;

	// const imagePath = `/assets/${id}.jpg`;

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					// src={imagePath} // desde public/assets
					// src={batman} // import
					src={loadImage(`${heroeId}.jpg`)}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8 animate__animated animate__fadeIn">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First_Appearance:</b> {first_appearance}
					</li>
				</ul>

				<h5 className="mt-3">Characters</h5>
				<p>{characters}</p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Regresar
					{/* {counter} */}
				</button>
			</div>
		</div>
	);
};
