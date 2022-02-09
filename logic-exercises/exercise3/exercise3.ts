const checarParenteses = (entrada:string) => {
    const stack = []

    for (let character of entrada){
        if (character ==="(" || character === "[" || character ==="{"){
            stack.push(character)
        } else {
            const lastOpenningCharacter = stack.pop()
            if(!lastOpenningCharacter){
                return false
            } else if(
                (lastOpenningCharacter === "(" && character !== ")") ||
                (lastOpenningCharacter === "[" && character !== "]") ||
                (lastOpenningCharacter === "{" && character !== "}")
            ){
                return false
            }
        }
    }
    if(stack.length > 9){
        return false
    }
    return true
}