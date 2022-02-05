export function replaceState(newState: string) {
    try {
        return window.history.replaceState(null, '', newState)
    }
    catch (error) {

    }
}

export function getPathName(): string {
    return window.location.pathname
}