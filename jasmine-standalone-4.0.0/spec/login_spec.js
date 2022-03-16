describe ("The md5Encrypt and the checkLogin", function(){

    // Test to pass
    describe("md5Encrypt Test to pass", function(){
        it ("should return a string of the hashed value, 32 characters long.",function(){
            var passTest ="leonguyen";
            var regEx = `^[a-zA-Z0-9]{32}$` ;
            expect(md5Encrypt(passTest)).toMatch(regEx);
        })
    });

    describe("checkLogin Test to pass", function(){
        it("should use the md5Encrypt function, and return the Boolean true if the username and the password match a known username and matching password.",function (){
            var idTest = "leo";
            var passTest ="leonguyen"
            expect(checkLogin(idTest, passTest)).toEqual(true);
        })

    })
    describe("checkLogin Test to fail", function (){
        it("should return 'No username entered.' if the username is an empty string.",function(){
            var idTest ="";
            var passTest ="leonguyen"
            expect(checkLogin(idTest,passTest)).toEqual('No username entered.');
        })

        it("should return 'No password entered.' if the password is an empty string.",function(){
            var idTest="leo";
            var passTest ="";
            expect(checkLogin(idTest,passTest)).toEqual('No password entered.');
        })
        it("should return 'Invalid Username or Password.' if the username input does not match a known username.", function(){
            var idTest ="lam";
            var passTest ="leonguyen"
            expect(checkLogin(idTest,passTest)).toEqual('Invalid Username or Password.');
        })

        it("should return 'Invalid Username or Password.' if the password input does not match a known password", function(){
            var idTest ="leo";
            var passTest ="lamnguyen";
            expect(checkLogin(idTest,passTest)).toEqual('Invalid Username or Password.');
        })

        it("should return 'Invalid Username or Password.' if a valid username is input with an invalid password", function(){
            var idTest ="leo";
            var passTest ="lamnguyen";
            expect(checkLogin(idTest,passTest)).toEqual('Invalid Username or Password.');
        })

        it("should return 'Invalid Username or Password.' if an invalid username is input with a valid password.", function(){
            var idTest = "lam";
            var passTest ="leonguyen";
            expect(checkLogin(idTest, passTest)).toEqual('Invalid Username or Password.');
        })
    })
})