// TODO 使用解构的方式取出data与column
const parseData = (input) => {
    // TODO 使用map做数组与数组的转化，不用声明output
    const output = [];
    for(let data of input.data) {
        let object = {};
        // TODO 不是map使用场景，查查map的用法
        data.map((attributeData,index) => {
            object[input.column[index].name] = attributeData;
        })
        output.push(object);
    }
    return output;
}
export { parseData };
