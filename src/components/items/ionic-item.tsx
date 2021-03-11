import { IonItem } from "@ionic/react";
import { Colors } from "../types";

interface Props {
	className?: string;
	color?: Colors;
	children?: any;
}

export const IonicItem = (props: Props) => {
	const { className, color, children } = props;

	return (
		<IonItem className={className} color={color}>
			{children}
		</IonItem>
	);
};
