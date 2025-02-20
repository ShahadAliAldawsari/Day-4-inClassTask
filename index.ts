//section_1 task_1
function capitalizeWords ( s: string){
    if (s==""){
        return "";
    }
    return s.toUpperCase().trim();
}
capitalizeWords("shahad ali");

//section_1 task_2
function isValidNumber(value: unknown) {
    if (typeof value !== 'number') {
      return false;
    }
    return true;
}

