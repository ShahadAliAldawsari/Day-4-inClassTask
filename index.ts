//section_1 task_1
//Implement a Utility Function
function capitalizeWords ( s: string){
    if (s==""){
        console.log("It is empty!"); //if the string is empty it will print "It is empty!"
    }
    console.log(s.toUpperCase().trim()); //it returns the string capitalized
}
//calling the function
capitalizeWords("");
capitalizeWords("shahad ali");



//section_1 task_2
//Number Validator Function
function isValidNumber(value: unknown) {
    if (typeof value !== 'number') {
      console.log(false);
    }
    else{
    console.log(true);
    }
}
//calling the function
isValidNumber(1);
isValidNumber("s");



//section_2 task_3
//Create a User Interfaces
interface User{
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // '?' used for optional
}
function createUser (u: User){
    console.log("User " + u + " created successfully");
}



//section_3 task_4
//Implement a Product Class
class Product{
    private name: string;
    private price: number;
    private category: string;
    //The Constructor
    Product(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    //Public Function to get the price after the discount
    public getDiscountedPrice(discount: number){
        return this.price-(this.price*discount);
    }
}



//section_4 task_5
//Implementing a Generic Function
function filterArray<T>(array: T[]){
    var match_cond: Array<T>=[];
    for(let val of array){
        //filtering to get only the even numbers
        if (typeof val==='number' && val %2===0){
            match_cond.push(val);
        }
    }
    console.log(match_cond);
}
//calling the function
filterArray(['s',1,2,3,4,'A']);


//section_5 task_6
//Fetch and Display Users Data
const fetch_user_info = async (): Promise <void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");//async step...
    if (!response.ok) {
        throw new Error('Data not found!');
    }
    // parse json response...
    const user_data = await response.json(); //async step to infer the type of user_data
    console.log(user_data);
}
//calling the function
fetch_user_info();


//Bonus Challenge
//Implement advanced password validation
function password_validation(password:string){
    const weakPasswords = ["abcdefgh", "password", "123456789", "abcd1234", "welcome1"];//A list of sum week passwords
    const hasUpperCase = /[A-Z]/.test(password);  // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumber = /[0-9]/.test(password); // At least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character
    if (password.length<8){
        console.log("Password is too short!");
    }
    else if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)){
        console.log("Password should at least contains uppercase, lowercase, number, and special character!");
    }
    else if (weakPasswords.includes(password.toLowerCase())){
        console.log("Password is very common!");
    }    
}
////calling the function
password_validation("shahad"); //short password
password_validation("shahad ali"); //week password
password_validation("Abcdefgh"); //commun password
password_validation("@ Shahad Ali 1"); //strong password
