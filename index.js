var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//section_1 task_1
//Implement a Utility Function
function capitalizeWords(s) {
    if (s == "") {
        console.log("It is empty!"); //if the string is empty it will print "It is empty!"
    }
    console.log(s.toUpperCase().trim()); //it returns the string capitalized
}
//calling the function
capitalizeWords("");
capitalizeWords("shahad ali");
//section_1 task_2
//Number Validator Function
function isValidNumber(value) {
    if (typeof value !== 'number') {
        console.log(false);
    }
    else {
        console.log(true);
    }
}
//calling the function
isValidNumber(1);
isValidNumber("s");
function createUser(u) {
    console.log("User " + u + " created successfully");
}
//section_3 task_4
//Implement a Product Class
var Product = /** @class */ (function () {
    function Product() {
    }
    //The Constructor
    Product.prototype.Product = function (name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    };
    //Public Function to get the price after the discount
    Product.prototype.getDiscountedPrice = function (discount) {
        return this.price - (this.price * discount);
    };
    return Product;
}());
//section_4 task_5
//Implementing a Generic Function
function filterArray(array) {
    var match_cond = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var val = array_1[_i];
        //filtering to get only the even numbers
        if (typeof val === 'number' && val % 2 === 0) {
            match_cond.push(val);
        }
    }
    console.log(match_cond);
}
//calling the function
filterArray(['s', 1, 2, 3, 4, 'A']);
//section_5 task_6
//Fetch and Display Users Data
var fetch_user_info = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, user_data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Data not found!');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                user_data = _a.sent();
                console.log(user_data);
                return [2 /*return*/];
        }
    });
}); };
//calling the function
fetch_user_info();
//Bonus Challenge
//Implement advanced password validation
function password_validation(password) {
    var weakPasswords = ["abcdefgh", "password", "123456789", "abcd1234", "welcome1"]; //A list of sum week passwords
    var hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    var hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    var hasNumber = /[0-9]/.test(password); // At least one number
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character
    if (password.length < 8) {
        console.log("Password is too short!");
    }
    else if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)) {
        console.log("Password should at least contains uppercase, lowercase, number, and special character!");
    }
    else if (weakPasswords.includes(password.toLowerCase())) {
        console.log("Password is very common!");
    }
}
////calling the function
password_validation("shahad"); //short password
password_validation("shahad ali"); //week password
password_validation("Abcdefgh"); //commun password
password_validation("@ Shahad Ali 1"); //strong password
