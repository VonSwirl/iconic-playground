import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import {
	IonicItem,
	IonicListItem,
	// IonicBadge,
	// IonicCheckbox,
	IonicLabel,
	IonicNote,
} from "../components/items";
import { cars } from "../components/data";
import { Links } from "../components/links";

export const IonListExample: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Car Selector</IonTitle>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Links />
				{/* IonListItem Example */}
				<IonList>
					{cars &&
						cars.map((car) => (
							<IonicListItem
								badge_txt={car.year}
								badge_color={car.year > 2000 ? "success" : "danger"}
								note_txt={car.model}
								label_txt={car.make}
							/>
						))}
				</IonList>

				{/* Example IonicItem */}
				<IonList>
					{cars &&
						cars.map((car) => (
							<IonicItem color="light">
								{/* <IonicCheckbox slot="start" /> */}
								<IonicLabel text={car.make}>
									<IonicNote text={car.model} />
								</IonicLabel>
								{/* <IonicBadge text={car.year} color="medium" mode="md" /> */}
							</IonicItem>
						))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};
