import { IonNote } from "@ionic/react";
import { ItemProps } from "./items";

export const IonicNote = (props: ItemProps.Note) => {
	const { text, className, color, attrProps } = props;

	return (
		<IonNote color={color} className={className} {...attrProps}>
			{text}
		</IonNote>
	);
};
