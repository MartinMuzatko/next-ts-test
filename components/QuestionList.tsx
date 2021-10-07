import { Question } from './Question'
import * as React from 'react'

interface Question {
	id: number
	title: string
}

interface QuestionListProps {
	questions: Question[]
	setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}

export const QuestionList = ({ questions, setQuestions }: QuestionListProps) => <div>
	{questions.map(question => <Question key={question.id} question={question} questions={questions} setQuestions={setQuestions} /> )}
</div>
