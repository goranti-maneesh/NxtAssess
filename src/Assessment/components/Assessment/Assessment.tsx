import { observer } from "mobx-react";
import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { nextQuestionText, optionTypes } from "../../../Common/constants";

import { useMcqQuestionsHook } from "../../hooks/useMcqQuestionsHooks";

import DefaultOptions from "../DefaultOptions";
import ImageOptions from "../Imageoptions";

import {
	AssessmentMainContainer,
	AssessmentContainer,
	MCQQuestionSection,
	MCQDetailsSection,
	QuestionText,
	HrLine,
	OptionsUlElement,
	OptionLiElement,
	NextQuestionBtn,
	QuestionAndOptions,
	SelectContainer
} from "./styledComponents";
import SelectOptions from "../SelectOptions";

export const Assessment = observer(() => {
	const mcqQuestionsHook = useMcqQuestionsHook();

	const {
		existingQuestion,
		nextQuestion,
		selectOption,
		selectedOption,
		questionNumsArray,
	} = mcqQuestionsHook;

	const renderDefaultOptions = (): JSX.Element => {
		return (
			<OptionsUlElement>
				{existingQuestion.options.map((eachOption) => (
					<DefaultOptions
						eachOption={eachOption}
						selectOption={selectOption}
						selectedOption={selectedOption}
						key={eachOption.id}
					/>
				))}
			</OptionsUlElement>
		);
	};

	const renderImageOptions = (): JSX.Element => {
		return (
			<OptionsUlElement>
				{existingQuestion.options.map((eachOption) => (
					<ImageOptions
						eachOption={eachOption}
						selectOption={selectOption}
						selectedOption={selectedOption}
						key={eachOption.id}
					/>
				))}
			</OptionsUlElement>
		);
	};

	const renderSelectOptions = (): JSX.Element => {
		return (
			<SelectContainer>
			<SelectOptions
				options={existingQuestion.options}
				selectOption={selectOption}
				selectedOption={selectedOption}
			/>
			</SelectContainer>
		);
	};

	const renderOptions = (): JSX.Element | undefined => {
		switch (existingQuestion.optionsType) {
			case optionTypes.default:
				return renderDefaultOptions();
			case optionTypes.image:
				return renderImageOptions();
			case optionTypes.select:
				return renderSelectOptions();
		}
	};

	const renderQuestion = () => {
		return (
			<MCQQuestionSection>
				<QuestionAndOptions>
					<QuestionText>{existingQuestion.questionText}</QuestionText>
					<HrLine />
					{renderOptions()}
				</QuestionAndOptions>
				<NextQuestionBtn type="button" onClick={() => nextQuestion()}>
					{nextQuestionText}
				</NextQuestionBtn>
			</MCQQuestionSection>
		);
	};

	return (
		<WrapperComponent>
			<AssessmentMainContainer>
				<Header />
				<AssessmentContainer>
					{renderQuestion()}
					<MCQDetailsSection></MCQDetailsSection>
				</AssessmentContainer>
			</AssessmentMainContainer>
		</WrapperComponent>
	);
});
