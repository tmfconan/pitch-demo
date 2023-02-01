/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pitch } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PitchUpdateFormInputValues = {
    go_live?: string;
    author?: string;
    title?: string;
    content?: string;
    question?: string;
    answer_one?: string;
    answer_two?: string;
    answer_three?: string;
    answer_four?: string;
    answer_five?: string;
};
export declare type PitchUpdateFormValidationValues = {
    go_live?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    question?: ValidationFunction<string>;
    answer_one?: ValidationFunction<string>;
    answer_two?: ValidationFunction<string>;
    answer_three?: ValidationFunction<string>;
    answer_four?: ValidationFunction<string>;
    answer_five?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PitchUpdateFormOverridesProps = {
    PitchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    go_live?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    answer_one?: PrimitiveOverrideProps<TextFieldProps>;
    answer_two?: PrimitiveOverrideProps<TextFieldProps>;
    answer_three?: PrimitiveOverrideProps<TextFieldProps>;
    answer_four?: PrimitiveOverrideProps<TextFieldProps>;
    answer_five?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PitchUpdateFormProps = React.PropsWithChildren<{
    overrides?: PitchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pitch?: Pitch;
    onSubmit?: (fields: PitchUpdateFormInputValues) => PitchUpdateFormInputValues;
    onSuccess?: (fields: PitchUpdateFormInputValues) => void;
    onError?: (fields: PitchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PitchUpdateFormInputValues) => PitchUpdateFormInputValues;
    onValidate?: PitchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PitchUpdateForm(props: PitchUpdateFormProps): React.ReactElement;
