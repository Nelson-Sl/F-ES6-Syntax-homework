const inject = (items, sections) => {
    let currentMaxInsertPos = 0;
    let count = 0;
    for(let section of sections) {
        if(section.index > currentMaxInsertPos) {
            count += 1;
            currentMaxInsertPos = section.index;
        }
        items.splice(section.index+count,0,section.content);
    }
    return items;
}
export { inject };
