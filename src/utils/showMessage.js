export const showAddedMessage = (addRef) => {
        addRef.current.classList.add("add-show")
        
        setTimeout(() => {
            addRef.current.classList.remove("add-show")
        }, 1500)
    }