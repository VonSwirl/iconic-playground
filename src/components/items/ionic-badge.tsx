import { IonBadge } from "@ionic/react";
import { ItemProps } from "./items";

export const IonicBadge = (props: ItemProps.Badge) => {
	const { text, classNames, color, mode, attrProps } = props;

	return (
		<IonBadge className={classNames} color={color} mode={mode} {...attrProps}>
			{text}
		</IonBadge>
	);
};
