/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CreatePitchProps } from "./CreatePitch";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatePitchCollectionOverridesProps = {
    CreatePitchCollection?: PrimitiveOverrideProps<CollectionProps>;
    CreatePitch?: CreatePitchProps;
} & EscapeHatchProps;
export declare type CreatePitchCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CreatePitchProps;
} & {
    overrides?: CreatePitchCollectionOverridesProps | undefined | null;
}>;
export default function CreatePitchCollection(props: CreatePitchCollectionProps): React.ReactElement;
