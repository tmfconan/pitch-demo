/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PitchAnswerFormInputValues = {
    pitch_num?: number;
};
export declare type PitchAnswerFormValidationValues = {
    pitch_num?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PitchAnswerFormOverridesProps = {
    PitchAnswerFormGrid?: PrimitiveOverrideProps<GridProps>;
    pitch_num?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PitchAnswerFormProps = React.PropsWithChildren<{
    overrides?: PitchAnswerFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PitchAnswerFormInputValues) => PitchAnswerFormInputValues;
    onSuccess?: (fields: PitchAnswerFormInputValues) => void;
    onError?: (fields: PitchAnswerFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PitchAnswerFormInputValues) => PitchAnswerFormInputValues;
    onValidate?: PitchAnswerFormValidationValues;
} & React.CSSProperties>;
export default function PitchAnswerForm(props: PitchAnswerFormProps): React.ReactElement;
