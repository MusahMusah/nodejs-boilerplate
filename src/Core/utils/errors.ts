import {ZodError, ZodIssue} from "zod";

const formatZodIssue = (issue: ZodIssue): string => {
    const { path, message } = issue
    const pathString = path.join('.')

    return `${pathString}: ${message}`
}

// Format the Zod error message with only the current error
export const formatZodError = (error: ZodError) => {
    const { issues } = error

    if (issues.length) {
        const currentIssue = issues[0]

        return formatZodIssue(currentIssue)
    }

    return 'Invalid data'
}

