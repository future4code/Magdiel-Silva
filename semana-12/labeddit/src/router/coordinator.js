export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToSingUpPage = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/posts")
}

export const goToPostDetailPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}