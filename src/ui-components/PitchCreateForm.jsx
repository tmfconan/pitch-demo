/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Pitch } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PitchCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    go_live: "",
    author: "",
    title: "",
    content: "",
    question: "",
    answer_one: "",
    answer_two: "",
    answer_three: "",
    answer_four: "",
    answer_five: "",
  };
  const [go_live, setGo_live] = React.useState(initialValues.go_live);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [question, setQuestion] = React.useState(initialValues.question);
  const [answer_one, setAnswer_one] = React.useState(initialValues.answer_one);
  const [answer_two, setAnswer_two] = React.useState(initialValues.answer_two);
  const [answer_three, setAnswer_three] = React.useState(
    initialValues.answer_three
  );
  const [answer_four, setAnswer_four] = React.useState(
    initialValues.answer_four
  );
  const [answer_five, setAnswer_five] = React.useState(
    initialValues.answer_five
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGo_live(initialValues.go_live);
    setAuthor(initialValues.author);
    setTitle(initialValues.title);
    setContent(initialValues.content);
    setQuestion(initialValues.question);
    setAnswer_one(initialValues.answer_one);
    setAnswer_two(initialValues.answer_two);
    setAnswer_three(initialValues.answer_three);
    setAnswer_four(initialValues.answer_four);
    setAnswer_five(initialValues.answer_five);
    setErrors({});
  };
  const validations = {
    go_live: [],
    author: [],
    title: [],
    content: [],
    question: [],
    answer_one: [],
    answer_two: [],
    answer_three: [],
    answer_four: [],
    answer_five: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          go_live,
          author,
          title,
          content,
          question,
          answer_one,
          answer_two,
          answer_three,
          answer_four,
          answer_five,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Pitch(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PitchCreateForm")}
      {...rest}
    >
      <TextField
        label="Go live"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={go_live && convertToLocal(new Date(go_live))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              go_live: value,
              author,
              title,
              content,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.go_live ?? value;
          }
          if (errors.go_live?.hasError) {
            runValidationTasks("go_live", value);
          }
          setGo_live(value);
        }}
        onBlur={() => runValidationTasks("go_live", go_live)}
        errorMessage={errors.go_live?.errorMessage}
        hasError={errors.go_live?.hasError}
        {...getOverrideProps(overrides, "go_live")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author: value,
              title,
              content,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title: value,
              content,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content: value,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Question"
        isRequired={false}
        isReadOnly={false}
        value={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question: value,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
      ></TextField>
      <TextField
        label="Answer one"
        isRequired={false}
        isReadOnly={false}
        value={answer_one}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question,
              answer_one: value,
              answer_two,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.answer_one ?? value;
          }
          if (errors.answer_one?.hasError) {
            runValidationTasks("answer_one", value);
          }
          setAnswer_one(value);
        }}
        onBlur={() => runValidationTasks("answer_one", answer_one)}
        errorMessage={errors.answer_one?.errorMessage}
        hasError={errors.answer_one?.hasError}
        {...getOverrideProps(overrides, "answer_one")}
      ></TextField>
      <TextField
        label="Answer two"
        isRequired={false}
        isReadOnly={false}
        value={answer_two}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question,
              answer_one,
              answer_two: value,
              answer_three,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.answer_two ?? value;
          }
          if (errors.answer_two?.hasError) {
            runValidationTasks("answer_two", value);
          }
          setAnswer_two(value);
        }}
        onBlur={() => runValidationTasks("answer_two", answer_two)}
        errorMessage={errors.answer_two?.errorMessage}
        hasError={errors.answer_two?.hasError}
        {...getOverrideProps(overrides, "answer_two")}
      ></TextField>
      <TextField
        label="Answer three"
        isRequired={false}
        isReadOnly={false}
        value={answer_three}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question,
              answer_one,
              answer_two,
              answer_three: value,
              answer_four,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.answer_three ?? value;
          }
          if (errors.answer_three?.hasError) {
            runValidationTasks("answer_three", value);
          }
          setAnswer_three(value);
        }}
        onBlur={() => runValidationTasks("answer_three", answer_three)}
        errorMessage={errors.answer_three?.errorMessage}
        hasError={errors.answer_three?.hasError}
        {...getOverrideProps(overrides, "answer_three")}
      ></TextField>
      <TextField
        label="Answer four"
        isRequired={false}
        isReadOnly={false}
        value={answer_four}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four: value,
              answer_five,
            };
            const result = onChange(modelFields);
            value = result?.answer_four ?? value;
          }
          if (errors.answer_four?.hasError) {
            runValidationTasks("answer_four", value);
          }
          setAnswer_four(value);
        }}
        onBlur={() => runValidationTasks("answer_four", answer_four)}
        errorMessage={errors.answer_four?.errorMessage}
        hasError={errors.answer_four?.hasError}
        {...getOverrideProps(overrides, "answer_four")}
      ></TextField>
      <TextField
        label="Answer five"
        isRequired={false}
        isReadOnly={false}
        value={answer_five}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              go_live,
              author,
              title,
              content,
              question,
              answer_one,
              answer_two,
              answer_three,
              answer_four,
              answer_five: value,
            };
            const result = onChange(modelFields);
            value = result?.answer_five ?? value;
          }
          if (errors.answer_five?.hasError) {
            runValidationTasks("answer_five", value);
          }
          setAnswer_five(value);
        }}
        onBlur={() => runValidationTasks("answer_five", answer_five)}
        errorMessage={errors.answer_five?.errorMessage}
        hasError={errors.answer_five?.hasError}
        {...getOverrideProps(overrides, "answer_five")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
