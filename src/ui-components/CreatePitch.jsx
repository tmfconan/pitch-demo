/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Divider,
  Flex,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function CreatePitch(props) {
  const { pitch, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CreatePitch")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Pitch"
              {...getOverrideProps(overrides, "Pitch")}
            ></Text>
            <SelectField
              label="Pick A Pitch"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "SelectField")}
            ></SelectField>
            <TextField
              label="Pitch Title"
              width="unset"
              shrink="0"
              alignSelf="stretch"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={pitch?.title}
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
          </Flex>
          <Divider
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
        </Flex>
      </Flex>
    </Flex>
  );
}
