export function subjectReducer(state, action) {

    switch (action.type) {

        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload,
                    completed: false
                }
            ];

        case "DELETE":
            return state.filter(
                subject => subject.id !== action.payload
            );

        case "COMPLETE":
            return state.map(subject =>
                subject.id === action.payload
                    ? {
                        ...subject,
                        completed: !subject.completed
                    }
                    : subject
            );

        default:
            return state;
    }

}