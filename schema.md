#quiz
_id, name, questions, pin, created_at

#question
_id, title, answers: [_id, title, value], created_at

#result
_id, _quiz_id, name, answers: [_question_id, _answer_id], created_at

...

#live
_id, _quiz_id, name, questions: [_question_id, _answer_id], created_at, updated_at

