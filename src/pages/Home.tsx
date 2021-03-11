import {
	IonBadge,
	IonCheckbox,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonNote,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { cars } from "./data";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

interface CarListProps {
	make: string;
	model: string;
	year: number;
}

const CarListItem = (props: CarListProps) => {
	return (
		<IonItem>
			<IonCheckbox slot="start" />
			<IonLabel>
				<h1>{props.make}</h1>
				<IonNote>{props.model}</IonNote>
			</IonLabel>
			<IonBadge color="success" slot="end">
				{props.year}
			</IonBadge>
		</IonItem>
	);
};

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Car Selector</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonList>
					{cars &&
						cars.map((car) => (
							<CarListItem make={car.make} model={car.model} year={car.year} />
						))}
				</IonList>
				{/* <ExploreContainer /> */}
			</IonContent>
		</IonPage>
	);
};

export default Home;
