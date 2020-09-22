// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO 思考先对sections 进行排序，再使用带有index的遍历可以优化
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
