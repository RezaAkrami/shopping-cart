
export const shorteTitel = (title) =>{
    const oldTitle = title.split(" ");
    const newTitle = oldTitle[0] + oldTitle[1];
    return newTitle;
}