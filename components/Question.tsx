import * as React from 'react'
import update from 'immutability-helper'

interface Question {
	id: number
	title: string
}

interface QuestionProps {
	question: Question
	questions: Question[]
	setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}

const updateQuestion = (q: QuestionProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
	const index = q.questions.findIndex(question => question.id == q.question.id)
	q.setQuestions(update(q.questions, { [index]: { $merge: { title: event.target.value } } }))
}

export const Question = ({ question, setQuestions, questions }: QuestionProps) => <div>
	<h3>{question.title}</h3>
	Change title:
	<input
		type="text" value={question.title}
		onChange={updateQuestion({setQuestions, questions, question})}
	/>
</div>
