/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pitch } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatePitchOverridesProps = {
    CreatePitch?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Pitch?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type CreatePitchProps = React.PropsWithChildren<Partial<FlexProps> & {
    pitch?: Pitch;
} & {
    overrides?: CreatePitchOverridesProps | undefined | null;
}>;
export default function CreatePitch(props: CreatePitchProps): React.ReactElement;
