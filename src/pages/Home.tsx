import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
// import ExploreContainer from "../components/explore-container/ExploreContainer";
import { add } from "ionicons/icons";
import { Links } from "../components/links";
import "./Home.css";
import { RouteComponentProps } from "react-router";

const Home = (props: RouteComponentProps) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<Links />
				{/* <IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Home#2</IonTitle>
					</IonToolbar>
				</IonHeader> */}
				{/* <ExploreContainer /> */}

				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton onClick={() => props.history.push("/new")}>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Home;
