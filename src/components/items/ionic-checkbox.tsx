import { IonCheckbox } from "@ionic/react";
import { ItemProps } from "./items";

export const IonicCheckbox = (props: ItemProps.Checkbox) => {
	const { attrProps, classNames, color, name, onChange, slot, value } = props;

	return (
		<IonCheckbox
			value={value}
			name={name}
			color={color}
			className={classNames}
			slot={slot}
			onChange={onChange}
			{...attrProps}
		/>
	);
};
