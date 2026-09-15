# Create a variable for Adela
name = "Adela"

# Write a function that counts down from 9 to 0
def print_name_countdown(input_name):
    for i in range(9, -1, -1):
        print(f"{input_name} {i}")

# Call the function
print_name_countdown(name)