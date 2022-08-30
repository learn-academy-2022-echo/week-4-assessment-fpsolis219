# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudo: use a ruby method that lets you add information to be used in a ruby conditional method that can determine if the number of the the variable is even or odd.
# create a method thats named odd_or_even. make sure that the method name follows the naming convention snake_case 
# following the name create a name for the parameter. 


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_or_even num
    if num % 2 != 0
        p "#{num} is odd"
    elsif num % 2 == 0
        p "#{num} is even"
    end
end

odd_or_even num1
odd_or_even num2
odd_or_even num3
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Psuedo: create a method that lets you add the variables provided as an argument. Use the arguments inside the method. Within the method use the built in method .delete to delete the letters that correlate to vowels (A, E, I, O, U)
# create a method named delete_vowels
# following the method name, name the parameter string to pass in the arguments
# inside the method use the built in method .delete to delete the vowels. NOTE. the built in method will only delete the letters that are exactly the same so add the capital letters of the vowels as well. "a, e, i, o, u, A, E, I, O, U"
# set the the string parameter with the built in method .delete. string.delete.


beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def delete_vowels (string)
    string.delete "a, A, e, i, o, u"
end
p delete_vowels beatles_album1
p delete_vowels beatles_album2
p delete_vowels beatles_album3



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# pseudo: create a method that lets you pass a variable as an arguement. 
# within the method use a conditional method to pass the value of the arguement to evaluate whether the value is a palindrome
# use the built in method .reverse to determine if the argument is equal to itself in reverse form.
# to prevent errors due to capitilization set the arguments to be in the same case form. use the built in method .downcase in addition to the built in method .revers.
palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_test (string)
    if string.downcase == string.reverse.downcase
        "#{string} is a palindrome"
    else "#{string} is not a palindrome"
    end
end

p palindrome_test palindrome_tester1
p palindrome_test palindrome_tester2
p palindrome_test palindrome_tester3