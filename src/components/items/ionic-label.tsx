import { IonLabel } from "@ionic/react";
import { ItemProps } from "./items";

export const IonicLabel = (props: ItemProps.Label) => {
	const { text, classNames, color, attrProps, children } = props;

	return (
		<IonLabel color={color} className={classNames} {...attrProps}>
			<h1>{text}</h1>
			{children}
		</IonLabel>
	);
};
