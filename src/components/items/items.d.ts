import { Colors, Mode, Slot } from "../types";

export declare namespace ItemProps {
	export interface Badge {
		text: string | number;
		classNames?: string;
		mode?: Mode;
		color?: Colors;
		attrProps?: HTMLAttributes<HTMLIonBadgeElement>;
	}

	export interface Label {
		text: string | number;
		classNames?: string;
		color?: Colors;
		attrProps?: HTMLAttributes<HTMLIonLabelElement>;
		children?: JSX.Element | JSX.Element[];
	}

	export interface Note {
		text: string | number;
		className?: string;
		color?: Colors;
		attrProps?: HTMLAttributes<HTMLIonNoteElement>;
	}

	export interface Checkbox {
		slot: Slot;
		color?: Colors;
		classNames?: string;
		attrProps?: HTMLAttributes<HTMLIonCheckboxElement>;
		name?: string;
		value?: string;
		onChange?: () => void;
	}
}
