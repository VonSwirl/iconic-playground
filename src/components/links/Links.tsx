import { IonItem, IonList, IonListHeader } from "@ionic/react";
import { IonicLabel } from "../items";
import { links } from "../data";
import React from "react";

export const Links = () => (
	<React.Fragment>
		<IonListHeader>
			<h1>Links</h1>
		</IonListHeader>
		<IonList>
			{links &&
				links.map((link) => (
					<IonItem color="light" href={link.route} button>
						<IonicLabel text={link.name}></IonicLabel>
					</IonItem>
				))}
		</IonList>
	</React.Fragment>
);
