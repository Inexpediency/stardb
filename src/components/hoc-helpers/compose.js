const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, fn) => fn(prevResult), comp)
}

export default compose