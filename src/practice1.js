const parseData = (input) => {
    const output = [];
    for(let data of input.data) {
        let object = {};
        data.map((attributeData,index) => {
            object[input.column[index].name] = attributeData;
        })
        output.push(object);
    }
    return output;
}
export { parseData };
