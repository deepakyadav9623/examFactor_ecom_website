export const cartTotal = (arr)=>{
    return arr.reduce((total,item)=>total+=Number(item.price),0)
}

export const discountCalulate = (total,percent)=>{
    return (total*percent)/100
}

export const numberFormatter=(num)=> {
    let numFormatter = new Intl.NumberFormat('en-IN');
   return  numFormatter.format(num);
}