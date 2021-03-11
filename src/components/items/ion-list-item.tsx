import {
	IonBadge,
	IonCheckbox,
	IonItem,
	IonLabel,
	IonNote,
} from "@ionic/react";
import { HTMLAttributes } from "react";
import { Colors, Slot, Mode } from "../types";

interface Props {
	item_className?: string;
	item_color?: Colors;

	label_txt: string | number;
	label_classNames?: string;
	label_color?: Colors;
	label_props?: HTMLAttributes<HTMLIonLabelElement>;

	note_txt: string | number;
	note_className?: string;
	note_color?: Colors;
	note_props?: HTMLAttributes<HTMLIonNoteElement>;

	badge_txt: string | number;
	badge_classNames?: string;
	badge_mode?: Mode;
	badge_color?: Colors;
	badge_props?: HTMLAttributes<HTMLIonBadgeElement>;

	checkbox_slot?: Slot;
	checkbox_color?: Colors;
	checkbox_classNames?: string;
	checkbox_props?: HTMLAttributes<HTMLIonCheckboxElement>;
	checkbox_name?: string;
	checkbox_value?: string;
	checkbox_onChange?: () => void;
}

export const IonicListItem = (props: Props) => {
	const {
		item_className,
		item_color,

		note_txt,
		note_className,
		note_color,
		note_props,

		label_txt,
		label_classNames,
		label_color,
		label_props,

		badge_txt,
		badge_mode,
		badge_color,
		badge_classNames,
		badge_props,

		checkbox_name,
		checkbox_value,
		checkbox_slot,
		checkbox_color,
		checkbox_classNames,
		checkbox_props,
		checkbox_onChange,
	} = props;

	return (
		<IonItem className={item_className} color={item_color}>
			<IonCheckbox
				value={checkbox_value}
				name={checkbox_name}
				color={checkbox_color}
				className={checkbox_classNames}
				slot={checkbox_slot || "start"}
				onChange={checkbox_onChange}
				{...checkbox_props}
			/>
			<IonLabel
				color={label_color}
				className={label_classNames}
				{...label_props}
			>
				<h1>{label_txt}</h1>
				<IonNote color={note_color} className={note_className} {...note_props}>
					{note_txt}
				</IonNote>
			</IonLabel>
			<IonBadge
				className={badge_classNames}
				color={badge_color}
				mode={badge_mode}
				{...badge_props}
			>
				{badge_txt}
			</IonBadge>
		</IonItem>
	);
};
