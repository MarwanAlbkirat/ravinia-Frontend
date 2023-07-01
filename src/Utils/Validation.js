function validation(obj){
    for(const ele of obj){
        if(!ele.input)throw new Error(`the ${ele.name} is required`);
        if(ele.input.length < ele.min)throw new Error(`the ${ele.name} must be at minimum ${ele.min} charcter`);
        if(ele.input.length > ele.max)throw new Error(`the ${ele.name} must be at maximum ${ele.max} charcter`);
    }
}
export {validation};